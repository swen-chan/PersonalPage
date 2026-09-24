import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rootUrl = "https://swen-chan.github.io/PersonalPage/";
const zhUrl = rootUrl + "zh/";
const personId = rootUrl + "#swen-chan";
const socialImageUrl = rootUrl + "assets/social/swen-chan-og.png";
const canonicalEipUrl = "https://github.com/EIP-Playground/EIP-Playground";

const pages = [
  {
    file: "index.html",
    url: rootUrl,
    lang: "en",
    appLanguage: "en",
    ogLocale: "en_US",
    socialImageAlt:
      "Swen Chan — founder and product and technology builder across AI products, developer tools, and embedded systems.",
  },
  {
    file: "zh/index.html",
    url: zhUrl,
    lang: "zh-Hans",
    appLanguage: "zh",
    ogLocale: "zh_CN",
    socialImageAlt:
      "Swen Chan — 专注 AI 产品、开发者工具与嵌入式系统的创业者及产品技术建设者。",
  },
];

const expectedAlternates = new Map([
  ["en", rootUrl],
  ["zh-Hans", zhUrl],
  ["x-default", rootUrl],
]);

const app = readFileSync(path.join(root, "app.js"), "utf8");
const sitemap = readFileSync(path.join(root, "sitemap.xml"), "utf8");
const robots = readFileSync(path.join(root, "robots.txt"), "utf8");

function escapeRegExp(value) {
  return value.replace(/[.*+?^$(){}|[\]\\]/g, "\\$&");
}

function getTags(html, tagName) {
  return [...html.matchAll(new RegExp("<" + tagName + "\\b[^>]*>", "gi"))].map(
    (match) => match[0],
  );
}

function getAttribute(tag, name) {
  const match = tag.match(
    new RegExp("\\b" + escapeRegExp(name) + "\\s*=\\s*[\"']([^\"']+)[\"']", "i"),
  );
  return match?.[1] ?? null;
}

function getMeta(html, attribute, key) {
  const matches = getTags(html, "meta").filter(
    (tag) => getAttribute(tag, attribute) === key,
  );
  assert.equal(
    matches.length,
    1,
    attribute + "=" + key + " must appear exactly once",
  );
  return getAttribute(matches[0], "content");
}

function getSingleLink(html, rel) {
  const matches = getTags(html, "link").filter(
    (tag) => getAttribute(tag, "rel") === rel,
  );
  assert.equal(matches.length, 1, "rel=" + rel + " must appear exactly once");
  return matches[0];
}

function getJsonLd(html) {
  const match = html.match(
    /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i,
  );
  assert.ok(match, "JSON-LD block must exist");
  return JSON.parse(match[1]);
}

function assertAlternateSet(html, pageName) {
  const links = getTags(html, "link").filter(
    (tag) => getAttribute(tag, "rel") === "alternate",
  );
  assert.equal(links.length, expectedAlternates.size, pageName + " alternate count");

  for (const [language, expectedUrl] of expectedAlternates) {
    const matches = links.filter(
      (tag) => getAttribute(tag, "hreflang") === language,
    );
    assert.equal(
      matches.length,
      1,
      pageName + " must define one " + language + " alternate",
    );
    assert.equal(getAttribute(matches[0], "href"), expectedUrl);
  }
}

function assertLanguageLinks(html, page) {
  const links = getTags(html, "a").filter((tag) =>
    getAttribute(tag, "data-lang-toggle"),
  );
  assert.equal(
    links.length,
    2,
    page.file + " must expose two crawlable language links",
  );

  const expected = new Map([
    ["en", rootUrl],
    ["zh", zhUrl],
  ]);

  for (const [language, expectedUrl] of expected) {
    const matches = links.filter(
      (tag) => getAttribute(tag, "data-lang-toggle") === language,
    );
    assert.equal(matches.length, 1, page.file + " language link: " + language);
    assert.equal(new URL(getAttribute(matches[0], "href"), page.url).href, expectedUrl);
    const expectedCurrent = language === page.appLanguage ? "page" : null;
    assert.equal(getAttribute(matches[0], "aria-current"), expectedCurrent);
  }
}

function assertLocalReferencesExist(html, page) {
  const pageDirectory = path.dirname(path.join(root, page.file));
  const attributePattern = /\b(?:src|href|poster|data-src)=["']([^"']+)["']/gi;

  for (const match of html.matchAll(attributePattern)) {
    const reference = match[1];
    if (/^(?:[a-z]+:|#|\/\/)/i.test(reference)) continue;
    const cleanReference = reference.split(/[?#]/, 1)[0];
    const resolvedPath = path.resolve(pageDirectory, cleanReference);
    assert.ok(
      existsSync(resolvedPath),
      page.file + " local reference must exist: " + reference,
    );
  }
}

for (const page of pages) {
  const filePath = path.join(root, page.file);
  assert.ok(existsSync(filePath), "Missing localized page: " + page.file);
  const html = readFileSync(filePath, "utf8");

  const htmlTag = getTags(html, "html")[0];
  assert.equal(getAttribute(htmlTag, "lang"), page.lang, page.file + " html lang");

  const canonical = getSingleLink(html, "canonical");
  assert.equal(getAttribute(canonical, "href"), page.url, page.file + " canonical");
  assertAlternateSet(html, page.file);
  assertLanguageLinks(html, page);

  assert.equal(getMeta(html, "property", "og:type"), "profile");
  assert.equal(getMeta(html, "property", "og:url"), page.url);
  assert.equal(getMeta(html, "property", "og:locale"), page.ogLocale);
  assert.equal(getMeta(html, "property", "og:image"), socialImageUrl);
  assert.equal(getMeta(html, "property", "og:image:type"), "image/png");
  assert.equal(getMeta(html, "property", "og:image:width"), "1200");
  assert.equal(getMeta(html, "property", "og:image:height"), "630");
  assert.equal(getMeta(html, "property", "og:image:alt"), page.socialImageAlt);
  assert.equal(getMeta(html, "name", "twitter:card"), "summary_large_image");
  assert.equal(getMeta(html, "name", "twitter:creator"), "@SwenChan");
  assert.equal(getMeta(html, "name", "twitter:image"), socialImageUrl);
  assert.equal(getMeta(html, "name", "twitter:image:alt"), page.socialImageAlt);

  const jsonLd = getJsonLd(html);
  const graph = jsonLd["@graph"];
  assert.ok(Array.isArray(graph), "JSON-LD must use an @graph");
  const profilePage = graph.find((item) => item["@type"] === "ProfilePage");
  const person = graph.find((item) => item["@type"] === "Person");
  assert.ok(profilePage, page.file + " JSON-LD must describe a ProfilePage");
  assert.ok(person, page.file + " JSON-LD must describe a Person");
  assert.equal(profilePage["@id"], page.url + "#profile-page");
  assert.equal(profilePage.url, page.url);
  assert.equal(profilePage.inLanguage, page.lang);
  assert.equal(profilePage.mainEntity?.["@id"], personId);
  assert.equal(person["@id"], personId);
  assert.equal(person.url, rootUrl);
  assert.equal(person.name, "Swen Chan");

  const eipLink = getTags(html, "a").find(
    (tag) => getAttribute(tag, "href") === canonicalEipUrl,
  );
  assert.ok(eipLink, page.file + " must link to the organization EIP repository");
  assert.doesNotMatch(html, /Shenzhen|深圳/, page.file + " must stay location-neutral");
  assertLocalReferencesExist(html, page);

  if (page.lang === "zh-Hans") {
    const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "";
    const description = getMeta(html, "name", "description") ?? "";
    const h1 = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "";
    const containsChinese = (value) => /[\u3400-\u9fff]/u.test(value);
    assert.ok(containsChinese(title), "Chinese title must be static HTML");
    assert.ok(containsChinese(description), "Chinese description must be static HTML");
    assert.ok(containsChinese(h1), "Chinese H1 must be static HTML");
  }
}

const imagePath = path.join(root, "assets/social/swen-chan-og.png");
assert.ok(existsSync(imagePath), "Generated Open Graph PNG must exist");
const image = readFileSync(imagePath);
const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
assert.ok(image.subarray(0, 8).equals(pngSignature), "Open Graph asset must be a PNG");
assert.equal(image.readUInt32BE(16), 1200, "Open Graph image width must be 1200px");
assert.equal(image.readUInt32BE(20), 630, "Open Graph image height must be 630px");

const sitemapEntries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(
  (match) => match[1],
);
assert.equal(sitemapEntries.length, pages.length, "Sitemap must contain exactly two pages");
const sitemapUrls = sitemapEntries.map(
  (entry) => entry.match(/<loc>([^<]+)<\/loc>/)?.[1],
);
assert.deepEqual(
  [...sitemapUrls].sort(),
  pages.map((page) => page.url).sort(),
  "Sitemap URLs must match the localized pages exactly",
);

for (const entry of sitemapEntries) {
  assert.match(entry, /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/);
  for (const [language, expectedUrl] of expectedAlternates) {
    const pattern =
      "<xhtml:link\\s+rel=[\"']alternate[\"']\\s+hreflang=[\"']" +
      escapeRegExp(language) +
      "[\"']\\s+href=[\"']" +
      escapeRegExp(expectedUrl) +
      "[\"']\\s*/>";
    assert.match(entry, new RegExp(pattern));
  }
}

assert.match(
  robots,
  new RegExp("^Sitemap:\\s*" + escapeRegExp(rootUrl) + "sitemap\\.xml\\s*$", "m"),
);
const appEipMatch = app.match(/eipPlayground:\s*["']([^"']+)["']/);
assert.equal(appEipMatch?.[1], canonicalEipUrl);
assert.match(
  app,
  /document\.documentElement\.lang\.toLowerCase\(\)\.startsWith\(["']zh["']\)/,
);
assert.match(app, /lang === ["']zh["'] \? ["']zh-Hans["'] : ["']en["']/);
assert.doesNotMatch(app, /renderLanguage\(["']en["']\);/);
assert.match(app, /const projectAutoplayDelay = 3500;/);
assert.match(app, /new URL\(["']\.["'], document\.currentScript\?\.src/);
assert.doesNotMatch(app, /Shenzhen|深圳/, "Bilingual identity copy must stay location-neutral");

console.log(
  "SEO checks passed: localized canonicals, reciprocal hreflang, static content, social cards, JSON-LD, assets, sitemap, and project links.",
);
