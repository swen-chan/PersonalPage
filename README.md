# Swen Chan — Personal Page

A bilingual personal profile and selected-work page for Swen Chan, published with GitHub Pages.

The page is designed for three audiences:

- teams considering product or technology roles;
- founders and collaborators evaluating 0-to-1 product work;
- developer ecosystem and education partners.

## Content Structure

- Hero: positioning, remote and international availability, current focus, and contact links
- Selected Work: Puff, Deal Agent, EIP Playground, and AI × Web3 School
- Experience: selected professional, education, and evaluation work
- Capabilities: product, AI/data, embedded systems, and ecosystem work
- Ways to Collaborate
- Contact

The source resume is not copied into this repository because it contains private contact information.

## Files

- `index.html`: semantic English fallback content, metadata, and page structure
- `app.js`: bilingual content, links, language rendering, and project-stage interaction
- `styles.css`: visual system, hover expansion, and responsive layouts
- `assets/puff/`: the real Puff poster and deferred desktop preview video used by the project stage
- `assets/social/`: the 1200 × 630 Open Graph source artwork and generated PNG
- `scripts/check-seo.mjs`: local metadata, structured-data, sitemap, asset, and project-link consistency checks
- `favicon.svg`: site icon
- `sitemap.xml`: canonical URL discovery for direct submission to webmaster tools
- `robots.txt`: a reference copy only; the project-path file cannot set origin-level crawler rules
- `.nojekyll`: direct static-file publishing on GitHub Pages

## Content Editing Rule

English content appears in both `index.html` and `app.js`:

- `index.html` contains meaningful default content for search engines, link readers, and no-JavaScript environments.
- `app.js` contains the authoritative bilingual data used after JavaScript loads.

When changing English copy, update both files and verify that they still match.

Do not add unverified project results, metrics, role titles, dates, or credentials. Prefer a shorter verified statement over a broader unsupported one.

The Puff media in `assets/puff/` comes from the public Puff prototype linked from the Puff project card. The video source is attached only after desktop hover so it does not block the initial page load.

## Local Preview

From this directory, run:

```bash
python3 -m http.server 8080
```

Then open:

`http://localhost:8080`

## SEO Verification

Run the dependency-free regression check before publishing:

```bash
node scripts/check-seo.mjs
```

The check validates canonical and social metadata, the `ProfilePage` → `Person`
structured-data relationship, the Open Graph image dimensions, the sitemap URL,
and EIP Playground link consistency between static HTML and bilingual app data.

Because this site is hosted below `/PersonalPage/`, the repository's
`robots.txt` is not the origin-level `https://swen-chan.github.io/robots.txt`
used by crawlers. Crawling is allowed by default, but origin-wide crawler rules
require either control of the root user site or a custom domain. Submit
`https://swen-chan.github.io/PersonalPage/sitemap.xml` directly in search-engine
webmaster tools.

## Deployment

GitHub Pages is configured to publish the `main` branch from the repository root:

`https://swen-chan.github.io/PersonalPage/`

Before publishing:

1. Verify English and Chinese content.
2. Check desktop and mobile layouts.
3. Test every external link.
4. Confirm `robots.txt`, `sitemap.xml`, canonical URL, and structured data.
5. Review the Git diff before committing and pushing.
