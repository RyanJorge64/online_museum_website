#!/usr/bin/env node
/*
 * Generates one dedicated page per exhibit into pages/<id>.html
 * from components/exhibits.js.
 *
 * Usage (from the project root):  node tools/build-pages.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const EXHIBITS = require(path.join(root, "components", "exhibits.js"));
const pagesDir = path.join(root, "pages");

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const regionLabel = (ex) => (ex.regions.length === 3 ? "Nationwide" : ex.regions.join(" and "));

/* Same card markup the gallery on index.html renders, so related cards match. */
function card(ex) {
  const art = ex.image
    ? `<img src="../assets/images/${esc(ex.image)}" alt="${esc(ex.imageAlt || ex.title)}" loading="lazy">`
    : `<i class="${esc(ex.icon)}" aria-hidden="true"></i>`;
  return `
        <article class="exhibit" data-reveal>
          <div class="ex-art">${art}<span class="ex-region">${esc(regionLabel(ex))}</span></div>
          <div class="ex-body">
            <p class="meta">${esc(ex.category)} · ${esc(ex.place)}</p>
            <h3>${esc(ex.title)}</h3>
            <p>${esc(ex.summary)}</p>
            <a class="read-more" href="${esc(ex.id)}.html">Read the history</a>
          </div>
        </article>`;
}

function page(ex, i) {
  const prev = EXHIBITS[(i - 1 + EXHIBITS.length) % EXHIBITS.length];
  const next = EXHIBITS[(i + 1) % EXHIBITS.length];
  const mainRegion = ex.regions[0];
  const related = EXHIBITS.filter((o) => o.id !== ex.id && o.regions.includes(mainRegion)).slice(0, 3);

  const hero = ex.image
    ? `<img class="ex-hero-img" src="../assets/images/${esc(ex.image)}" alt="${esc(ex.imageAlt || ex.title)}">`
    : `<i class="ex-hero-icon ${esc(ex.icon)}" aria-hidden="true"></i>`;

  const badges = (ex.designation || []).map((d) => `<li>${esc(d)}</li>`).join("");
  const facts = ex.facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("");
  const overview = ex.overview.map((p) => `<p>${esc(p)}</p>`).join("\n          ");
  const story = ex.story
    .map(
      (b) => `
          <div class="story-block">
            <h3>${esc(b.h)}</h3>
            ${b.p.map((p) => `<p>${esc(p)}</p>`).join("\n            ")}
          </div>`
    )
    .join("");
  const timeline = ex.timeline
    .map(
      (t) => `
            <li data-reveal>
              <span class="vt-year">${esc(t.year)}</span>
              <div class="vt-body"><h4>${esc(t.title)}</h4><p>${esc(t.text)}</p></div>
            </li>`
    )
    .join("");

  const regionLinks = ex.regions
    .map((r) => `<a href="index.html?region=${encodeURIComponent(r)}#exhibits">All ${esc(r)} exhibits</a>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#21170f">
    <meta name="description" content="${esc(ex.summary)}">
    <title>${esc(ex.title)} | The Filipino Archive</title>
    <link rel="stylesheet" href="../components/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    <link rel="icon" href="../assets/icons/favicon.png" type="image/x-icon">
    <noscript><style>[data-reveal]{opacity:1;transform:none}</style></noscript>
</head>
<body>
    <header class="site-header solid">
        <nav class="navigationBar">
            <a class="brand" href="index.html" aria-label="The Filipino Archive home">
                <span class="brand-mark" aria-hidden="true"><img class="siteLogo" src="../assets/icons/favicon.png" alt=""></span>
                <span class="brand-name">The Filipino Archive</span>
            </a>
            <ul class="unorderedList-nav">
                <li class="list"><a class="listlink" href="index.html#about">About</a></li>
                <li class="list"><a class="listlink current" href="index.html#exhibits">Exhibitions</a></li>
                <li class="list"><a class="listlink" href="index.html#timeline">Explore</a></li>
                <li class="list"><a class="listlink" href="index.html#tours">Visits</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="ex-hero">
            ${hero}
            <div class="wrap ex-hero-inner">
                <a class="crumb" href="index.html?region=${encodeURIComponent(mainRegion)}#exhibits">Back to the gallery</a>
                <p class="ex-hero-place">${esc(regionLabel(ex))}, ${esc(ex.place)}</p>
                <h1>${esc(ex.title)}</h1>
                <p class="lede">${esc(ex.summary)}</p>
                ${badges ? `<ul class="badges">${badges}</ul>` : ""}
            </div>
        </section>

        <section class="section">
            <div class="wrap ex-layout">
                <div class="ex-main">
                    <section id="overview" class="prose">
                        <h2>Overview</h2>
                        ${overview}
                    </section>

                    <section id="history" class="prose">
                        <h2>How it came to be</h2>${story}
                    </section>

                    <section id="timeline">
                        <h2>Timeline</h2>
                        <ol class="vt">${timeline}
                        </ol>
                    </section>

                    <section id="legacy" class="prose">
                        <h2>Why it matters today</h2>
                        <p>${esc(ex.legacy)}</p>
                    </section>
                </div>

                <aside class="ex-aside" aria-label="About this exhibit">
                    <div class="facts">
                        <h2>Quick facts</h2>
                        <dl>${facts}</dl>
                    </div>
                    <nav class="toc" aria-label="On this page">
                        <h2>On this page</h2>
                        <a href="#overview">Overview</a>
                        <a href="#history">How it came to be</a>
                        <a href="#timeline">Timeline</a>
                        <a href="#legacy">Why it matters today</a>
                        ${regionLinks}
                    </nav>
                </aside>
            </div>
        </section>

        <section class="section section-dark">
            <div class="wrap">
                <div class="section-head">
                    <h2>More from ${esc(mainRegion)}</h2>
                </div>
                <div class="exhibit-grid">${related.map(card).join("")}
                </div>
                <nav class="pager" aria-label="Previous and next exhibit">
                    <a class="pager-prev" href="${esc(prev.id)}.html"><span>Previous exhibit</span>${esc(prev.title)}</a>
                    <a class="pager-next" href="${esc(next.id)}.html"><span>Next exhibit</span>${esc(next.title)}</a>
                </nav>
            </div>
        </section>
    </main>

    <footer>
        <div class="footerMainWrapper">
            <div class="footerChildWrapper">
                <div class="about-container">
                    <h3>Online Museum</h3>
                    <p>A project of the College of Computer Studies, built to keep Philippine cultural heritage within reach.</p>
                </div>
                <div class="footer-links">
                    <h3>Explore</h3>
                    <a href="index.html?region=Luzon#exhibits">Luzon</a><a href="index.html?region=Visayas#exhibits">Visayas</a><a href="index.html?region=Mindanao#exhibits">Mindanao</a>
                </div>
                <div class="contact-wrapper">
                    <h3>Visit</h3>
                    <p>Scan the code in the gallery section to open the museum on your phone.</p>
                </div>
            </div>
        </div>
    </footer>

    <script src="../components/exhibit-page.js"></script>
</body>
</html>
`;
}

EXHIBITS.forEach((ex, i) => {
  fs.writeFileSync(path.join(pagesDir, `${ex.id}.html`), page(ex, i));
});
console.log(`Wrote ${EXHIBITS.length} exhibit pages to pages/`);
