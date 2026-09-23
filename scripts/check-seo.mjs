import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const html = readFileSync(path.join(root, "index.html"), "utf8");
const app = readFileSync(path.join(root, "app.js"), "utf8");
const sitemap = readFileSync(path.join(root, "sitemap.xml"), "utf8");

const canonicalUrl = "https://swen-chan.github.io/PersonalPage/";
const socialImageUrl = `${canonicalUrl}assets/social/swen-chan-og.png`;
const socialImageAlt =
  "Swen Chan — founder and product and technology builder across AI products, developer tools, and embedded systems.";
const canonicalEipUrl = "https://github.com/EIP-Playground/EIP-Playground";

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getMeta(attribute, key) {
  const escapedKey = escapeRegExp(key);
  const patterns = [
    new RegExp(
      `<meta\\s+[^>]*${attribute}=["']${escapedKey}["'][^>]*content=["']([^"']+)["'][^>]*>`,
      "i",
    ),
    new RegExp(
      `<meta\\s+[^>]*content=["']([^"']+)["'][^>]*${attribute}=["']${escapedKey}["'][^>]*>`,
      "i",
    ),
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return match[1];
  }

  throw new Error(`Missing meta tag: ${attribute}=${key}`);
}

function assertSingleMeta(attribute, key, expectedValue) {
  const escapedKey = escapeRegExp(key);
  const occurrences = html.match(
    new RegExp(`${attribute}\\s*=\\s*["']${escapedKey}["']`, "gi"),
  );
  assert.equal(occurrences?.length, 1, `${attribute}=${key} must appear exactly once`);
  assert.equal(getMeta(attribute, key), expectedValue);
}

const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
assert.equal(canonicalMatch?.[1], canonicalUrl, "Canonical URL must match the public page");

assertSingleMeta("property", "og:type", "profile");
assertSingleMeta("property", "og:url", canonicalUrl);
assertSingleMeta("property", "og:image", socialImageUrl);
assertSingleMeta("property", "og:image:type", "image/png");
assertSingleMeta("property", "og:image:width", "1200");
assertSingleMeta("property", "og:image:height", "630");
assertSingleMeta("property", "og:image:alt", socialImageAlt);
assertSingleMeta("name", "twitter:card", "summary_large_image");
assertSingleMeta("name", "twitter:creator", "@SwenChan");
assertSingleMeta("name", "twitter:image", socialImageUrl);
assertSingleMeta("name", "twitter:image:alt", socialImageAlt);

const jsonLdMatch = html.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i);
assert.ok(jsonLdMatch, "JSON-LD block must exist");
const jsonLd = JSON.parse(jsonLdMatch[1]);
const graph = jsonLd["@graph"];
assert.ok(Array.isArray(graph), "JSON-LD must use an @graph");

const profilePage = graph.find((item) => item["@type"] === "ProfilePage");
const person = graph.find((item) => item["@type"] === "Person");
assert.ok(profilePage, "JSON-LD must describe a ProfilePage");
assert.ok(person, "JSON-LD must describe a Person");
assert.equal(profilePage.url, canonicalUrl);
assert.equal(profilePage.mainEntity?.["@id"], person["@id"]);
assert.equal(person.url, canonicalUrl);
assert.equal(person.name, "Swen Chan");

const imagePath = path.join(root, "assets/social/swen-chan-og.png");
assert.ok(existsSync(imagePath), "Generated Open Graph PNG must exist");
const image = readFileSync(imagePath);
const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
assert.ok(image.subarray(0, 8).equals(pngSignature), "Open Graph asset must be a PNG");
assert.equal(image.readUInt32BE(16), 1200, "Open Graph image width must be 1200px");
assert.equal(image.readUInt32BE(20), 630, "Open Graph image height must be 630px");

assert.match(sitemap, new RegExp(`<loc>${escapeRegExp(canonicalUrl)}</loc>`));
assert.match(sitemap, /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/);
const appEipMatch = app.match(/eipPlayground:\s*["']([^"']+)["']/);
const htmlEipMatch = html.match(
  /data-project=["']eip-playground["'][\s\S]*?class=["']project-link["']\s+href=["']([^"']+)["']/,
);
assert.ok(appEipMatch, "Bilingual app data must define an EIP repository link");
assert.ok(htmlEipMatch, "Static HTML must define an EIP repository link");
assert.equal(appEipMatch[1], canonicalEipUrl, "App data must use the organization EIP repository");
assert.equal(htmlEipMatch[1], appEipMatch[1], "Static and bilingual EIP repository links must match");
assert.doesNotMatch(html, /Shenzhen|深圳/, "Static identity copy must stay location-neutral");
assert.doesNotMatch(app, /Shenzhen|深圳/, "Bilingual identity copy must stay location-neutral");

console.log("SEO checks passed: canonical, social cards, JSON-LD, image, sitemap, and project link consistency.");
