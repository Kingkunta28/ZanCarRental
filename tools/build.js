#!/usr/bin/env node
/* Rafiki Car Hire: SEO build.
   Run after editing scripts.js (CONFIG / texts) or tools/pages.js:   node tools/build.js

   It does not change how the site works in the browser. It:
   1. writes the English text, car cards, prices and contact details into index.html,
      so search engines see the full page without running JavaScript;
   2. writes the SEO head (title, description, canonical, social tags, JSON-LD);
   3. generates the location pages, sitemap.xml, robots.txt and 404.html. */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const write = (f, s) => { fs.mkdirSync(path.dirname(path.join(ROOT, f)), { recursive: true }); fs.writeFileSync(path.join(ROOT, f), s); };

/* ---------- Load CONFIG, texts and icons from scripts.js ---------- */
const src = read('scripts.js');
const cut = src.indexOf('/* ===== Helpers ===== */');
const { CONFIG, T } = vm.runInNewContext(src.slice(0, cut) + '\n;({ CONFIG, T })');
const ICONS = vm.runInNewContext('(' + src.match(/const ICONS = (\{[\s\S]*?\n\});/)[1] + ')');
const PAGES = require('./pages.js');

const SITE = CONFIG.siteUrl.replace(/\/?$/, '/');
const BASE_PATH = new URL(SITE).pathname;          // e.g. /ZanCarRental/
const TODAY = new Date().toISOString().slice(0, 10);
const en = T.en;

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const money = n => CONFIG.currency + Number(n).toFixed(2);
const short = n => CONFIG.currency + (Number.isInteger(+n) ? n : Number(n).toFixed(2));
const minPrice = Math.min(...CONFIG.fleet.map(c => c.price));
const maxPrice = Math.max(...CONFIG.fleet.map(c => c.price));
const fill = s => String(s)
  .replace(/\{fee2\}/g, money(CONFIG.deliveryFee * 2))
  .replace(/\{fee\}/g, money(CONFIG.deliveryFee))
  .replace(/\{from\}/g, short(minPrice));
const tx = k => fill(en[k] !== undefined ? en[k] : k);
const icon = n => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]}</svg>`;
const TYPE_ALT = { suv: 'SUV', small: 'compact car', van: 'minivan', pickup: 'pickup' };
const carAlt = c => `${c.name}${c.year ? ' ' + c.year : ''} ${TYPE_ALT[c.type] || 'car'} for hire in Zanzibar`;
const findCar = id => CONFIG.fleet.find(c => c.id === id);
const findLoc = id => CONFIG.locations.find(l => l.id === id);
const locLabel = l => l.i18n ? tx(l.i18n) : l.name;
const waLink = text => `https://wa.me/${CONFIG.whatsapp}` + (text ? `?text=${encodeURIComponent(text)}` : '');
const pageFor = locId => PAGES.find(p => p.locs.includes(locId));
const BIZ_ID = SITE + '#business';
const telHref = 'tel:+' + CONFIG.whatsapp;

const replaceBlock = (html, name, content) => {
  const re = new RegExp(`<!--build:${name}-->[\\s\\S]*?<!--/build:${name}-->`);
  if (!re.test(html)) throw new Error('Missing marker build:' + name);
  return html.replace(re, () => `<!--build:${name}-->${content}<!--/build:${name}-->`);
};
const jsonld = obj => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

/* ---------- Shared pieces ---------- */
const specs = c => `
          <li>${icon('seats')}${c.seats} ${esc(tx('seats'))}</li>
          <li>${icon('trans')}${esc(c.trans)}</li>${c.fuel ? `\n          <li>${icon('fuel')}${esc(c.fuel)}</li>` : ''}${c.year ? `\n          <li>${icon('year')}${c.year}</li>` : ''}`;

const carCard = (c, { prefix = '', bookHref = '#book', media = 'button' } = {}) => {
  const img = `<img src="${prefix}${esc(c.image)}" alt="${esc(carAlt(c))}" width="800" height="533" loading="lazy" decoding="async">`;
  const tag = c.type ? `<span class="tag">${esc(tx('cat_' + c.type))}</span>` : '';
  const mediaEl = media === 'button'
    ? `<button type="button" class="card-media" data-details="${c.id}" aria-label="${esc(tx('details'))}: ${esc(c.name)}">${img}${tag}<span class="peek">${icon('expand')}</span></button>`
    : `<div class="card-media">${img}${tag}</div>`;
  return `
    <article class="card">
      ${mediaEl}
      <div class="cb">
        <h3>${esc(c.name)}</h3>
        <ul class="specs">${specs(c)}</ul>
        <div class="card-foot">
          <p class="price"><b>${money(c.price)}</b><span>${esc(tx('per_day'))}</span></p>
          <a class="btn btn-b" href="${bookHref}" data-car="${c.id}">${esc(tx('book_car'))}${icon('arrow')}</a>
        </div>
      </div>
    </article>`;
};

const business = () => ({
  '@type': 'AutoRental',
  '@id': BIZ_ID,
  name: CONFIG.business,
  alternateName: CONFIG.business + ' Zanzibar',
  slogan: 'Drive Zanzibar with Confidence',
  description: `Self-drive car rental in Zanzibar with delivery to Zanzibar Airport, Stone Town and beach hotels around the island. Cars from ${short(minPrice)} per day.`,
  url: SITE,
  logo: SITE + 'images/logo.webp',
  image: [SITE + 'images/rafiki-car-hire-zanzibar-og.jpg', SITE + 'images/hero.webp'],
  telephone: '+' + CONFIG.whatsapp,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Abeid Amani Karume International Airport',
    addressLocality: 'Zanzibar',
    addressRegion: 'Zanzibar',
    addressCountry: 'TZ'
  },
  areaServed: [{ '@type': 'Place', name: 'Zanzibar, Tanzania' }]
    .concat(CONFIG.locations.filter(l => l.id !== 'other').map(l => ({ '@type': 'Place', name: l.name.replace(/ \(Zanzibar\)$/, '') + ', Zanzibar' }))),
  priceRange: `${short(minPrice)} - ${short(maxPrice)} per day`,
  contactPoint: { '@type': 'ContactPoint', telephone: '+' + CONFIG.whatsapp, contactType: 'reservations' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Rental cars in Zanzibar',
    itemListElement: CONFIG.fleet.map(c => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Car',
        name: c.name,
        ...(c.year ? { vehicleModelDate: String(c.year) } : {}),
        vehicleSeatingCapacity: c.seats,
        vehicleTransmission: c.trans,
        ...(c.fuel ? { fuelType: c.fuel } : {}),
        image: SITE + c.image
      },
      priceSpecification: { '@type': 'UnitPriceSpecification', price: c.price, priceCurrency: 'USD', unitCode: 'DAY' }
    }))
  }
});

const headTags = ({ title, desc, url, image, prefix = '' }) => `
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(desc)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${esc(CONFIG.business)}" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(desc)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${esc(CONFIG.business)}, car hire in Zanzibar" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(desc)}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="geo.region" content="TZ-15" />
    <meta name="geo.placename" content="Zanzibar" />`;

const OG_IMAGE = SITE + 'images/rafiki-car-hire-zanzibar-og.jpg';

/* ---------- 1. index.html ---------- */
function buildIndex() {
  let h = read('index.html');
  const title = `Car Hire Zanzibar | ${CONFIG.business} – Airport & Hotel Delivery`;
  const desc = `Self-drive car rental in Zanzibar from ${short(minPrice)}/day. SUVs, 4x4s, compact cars and minivans, with free delivery at Zanzibar Airport and Stone Town. Book on WhatsApp.`;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      business(),
      { '@type': 'WebSite', '@id': SITE + '#website', url: SITE, name: CONFIG.business, inLanguage: 'en', publisher: { '@id': BIZ_ID } },
      { '@type': 'WebPage', '@id': SITE + '#webpage', url: SITE, name: title, description: desc, inLanguage: 'en', isPartOf: { '@id': SITE + '#website' }, about: { '@id': BIZ_ID }, primaryImageOfPage: OG_IMAGE }
    ]
  };
  h = replaceBlock(h, 'head', headTags({ title, desc, url: SITE, image: OG_IMAGE }) + '\n    ' + jsonld(graph) + '\n    ');

  // English text into every translatable element (the browser still switches language as before)
  h = h.replace(/(<([a-z0-9]+)\b[^>]*?\sdata-i18n="([\w-]+)"[^>]*>)([^<]*)(<\/\2\s*>)/gi,
    (m, open, tag, key, inner, close) => en[key] !== undefined ? open + esc(tx(key)) + close : m);
  h = h.replace(/<(input|textarea)\b([^>]*?)\sdata-ph="([\w-]+)"([^>]*?)\s*\/?>/gi, (m, tag, a, key, b) => {
    const ph = key === 'cc_search' ? 'Search country or code' : tx(key);
    const attrs = (a + ` data-ph="${key}"` + b).replace(/\splaceholder="[^"]*"/, '');
    return `<${tag}${attrs} placeholder="${esc(ph)}" />`;
  });
  h = h.replace(/(\sdata-i18n-label="([\w-]+)")(\s+aria-label="[^"]*")?/g, (m, a, key) => `${a} aria-label="${esc(tx(key))}"`);
  h = h.replace(/<span data-biz>[^<]*<\/span>/g, `<span data-biz>${esc(CONFIG.business)}</span>`);
  h = h.replace(/<span id="year">[^<]*<\/span>/, `<span id="year">${new Date().getFullYear()}</span>`);
  h = h.replace(/(<b id="statCars"[^>]*>)[^<]*(<\/b>)/, (m, a, b) => a + CONFIG.fleet.length + b);
  h = h.replace(/(<b id="statFrom"[^>]*>)[^<]*(<\/b>)/, (m, a, b) => a + CONFIG.currency + Math.round(minPrice) + b);
  h = h.replace(/(<b id="heroFrom">)[^<]*(<\/b>)/, (m, a, b) => a + money(minPrice) + b);
  h = h.replace(/(<p class="full fee-note" id="feeNote">)[^<]*(<\/p>)/, (m, a, b) => a + esc(tx('fee_note')) + b);
  // WhatsApp links get a real href even before JavaScript runs
  h = h.replace(/<a\b([^>]*?)\sdata-wa\b([^>]*)>/g, (m, a, b) => {
    const attrs = (a + b).replace(/\s(href|target|rel)="[^"]*"/g, '');
    return `<a${attrs} data-wa href="${waLink()}" target="_blank" rel="noopener">`;
  });

  // Car list, car select and location selects
  h = replaceBlock(h, 'fleet', CONFIG.fleet.map(c => carCard(c)).join('') + '\n          ');
  const carOptions = `<option value="">${esc(tx('f_choose'))}</option>` +
    CONFIG.fleet.map(c => `<option value="${c.id}">${esc(c.name)} ${c.year ? '(' + c.year + ') ' : ''}· ${money(c.price)} ${esc(tx('per_day'))}</option>`).join('');
  h = h.replace(/(<select name="car" id="car" required>)[\s\S]*?(<\/select>)/, (m, a, b) => a + carOptions + b);
  const free = CONFIG.locations.filter(l => l.free), paid = CONFIG.locations.filter(l => !l.free);
  const opts = list => list.map(l => `<option value="${l.id}">${esc(locLabel(l))}</option>`).join('');
  const locOptions = `<optgroup label="${esc(tx('free'))}">${opts(free)}</optgroup><optgroup label="+${esc(money(CONFIG.deliveryFee))} · ${esc(tx('fee_zone'))}">${opts(paid)}</optgroup>`;
  h = h.replace(/(<select[^>]*class="loc-select"[^>]*>)[\s\S]*?(<\/select>)/g, (m, a, b) => a + locOptions + b);

  // Delivery areas + footer links
  const areaCards = CONFIG.locations.filter(l => l.id !== 'other').map(l => {
    const p = pageFor(l.id);
    const pill = l.free
      ? `<span class="fee-pill is-free" data-i18n="free">${esc(tx('free'))}</span>`
      : `<span class="fee-pill is-paid" data-i18n="area_paid">${esc(tx('area_paid'))}</span>`;
    return `
            <li><a class="area-card" href="${p.slug}/"><span class="area-name">${esc(l.name.replace(/ \(Zanzibar\)$/, '').replace('Abeid Amani Karume International Airport', 'Zanzibar Airport'))}</span>${pill}<span class="area-go">${esc(p.linkText)}${icon('arrow')}</span></a></li>`;
  }).join('');
  const guide = PAGES.find(p => p.guide);
  h = replaceBlock(h, 'areas', `
          <ul class="area-grid">${areaCards}
          </ul>
          <p class="area-guide"><a href="${guide.slug}/">${esc(guide.linkText)}${icon('arrow')}</a></p>
          `);
  h = replaceBlock(h, 'footareas', PAGES.map(p => `\n            <a href="${p.slug}/">${esc(p.linkText)}</a>`).join('') + '\n            ');
  h = replaceBlock(h, 'contact', contactHTML());
  write('index.html', h);
}

function contactHTML(prefix = '') {
  return `<a class="btn btn-wa" href="${waLink()}" target="_blank" rel="noopener">💬 ${esc(CONFIG.phone)}</a>
   <a class="addr" href="${telHref}">📞 ${esc(CONFIG.phone)}</a>
   <a class="addr" href="https://maps.google.com/?q=${encodeURIComponent(CONFIG.address)}" target="_blank" rel="noopener">📍 ${esc(CONFIG.address)}</a>`;
}

/* ---------- 2. Location pages ---------- */
function buildPage(p) {
  const url = SITE + p.slug + '/';
  const pre = '../';
  const firstLoc = p.locs[0];
  const bookHref = (car) => `${pre}?${[car ? 'car=' + car : '', firstLoc ? 'pickup=' + firstLoc : ''].filter(Boolean).join('&')}#book`;
  const waText = `Hello ${CONFIG.business}, I would like to rent a car` + (p.guide ? ' in Zanzibar.' : ` in ${p.label.replace(' & ', ' / ')}.`);
  const crumbs = [{ name: 'Home', url: SITE }, { name: p.label, url }];
  const allFree = p.locs.length && p.locs.every(id => findLoc(id).free);
  const chipText = p.guide || !p.locs.length ? tx('w2t')
    : allFree ? 'Free delivery and return'
    : `Hotel delivery ${money(CONFIG.deliveryFee)} each way`;

  const sections = p.sections.map(([h2, blocks]) => `
          <h2>${esc(h2)}</h2>` + blocks.map(b => Array.isArray(b)
    ? `\n          <ul>${b.map(li => `<li>${esc(fill(li))}</li>`).join('')}</ul>`
    : `\n          <p>${esc(fill(b))}</p>`).join('')).join('\n');

  const feeRows = p.locs.map(id => {
    const l = findLoc(id);
    const label = id === 'airport' ? 'Zanzibar Airport' : l.name;
    return `<li><span>${esc(label)}</span>${l.free
      ? '<span class="fee-pill is-free">Free</span>'
      : `<span class="fee-pill is-paid">${money(CONFIG.deliveryFee)} each way</span>`}</li>`;
  }).join('');
  const sideFees = p.guide
    ? `<li><span>Zanzibar Airport</span><span class="fee-pill is-free">Free</span></li><li><span>Zanzibar Town (Stone Town)</span><span class="fee-pill is-free">Free</span></li><li><span>Other locations</span><span class="fee-pill is-paid">${money(CONFIG.deliveryFee)} each way</span></li>`
    : feeRows;

  const others = PAGES.filter(o => o.slug !== p.slug)
    .map(o => `<li><a href="${pre}${o.slug}/">${esc(o.linkText)}${icon('arrow')}</a></li>`).join('');

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': url + '#webpage', url, name: fill(p.title), description: fill(p.desc), inLanguage: 'en',
        isPartOf: { '@id': SITE + '#website' }, about: { '@id': BIZ_ID }, breadcrumb: { '@id': url + '#breadcrumb' },
        primaryImageOfPage: SITE + findCar(p.cars[0]).image },
      { '@type': 'BreadcrumbList', '@id': url + '#breadcrumb',
        itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })) },
      { '@type': 'AutoRental', '@id': BIZ_ID, name: CONFIG.business, url: SITE, telephone: '+' + CONFIG.whatsapp,
        ...(p.locs.length ? { areaServed: p.locs.map(id => ({ '@type': 'Place', name: findLoc(id).name.replace(/ \(Zanzibar\)$/, '') + ', Zanzibar' })) } : {}) }
    ]
  };

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />${headTags({ title: fill(p.title), desc: fill(p.desc), url, image: OG_IMAGE })}
    ${jsonld(graph)}
    <meta name="theme-color" content="#06364D" />
    <link rel="icon" type="image/png" href="${pre}images/favicon.png" />
    <link rel="apple-touch-icon" href="${pre}images/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" onload="this.onload=null;this.rel=\'stylesheet\'" />
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" /></noscript>
    <link rel="stylesheet" href="${pre}css.css" />
  </head>
  <body class="subpage">
    <a class="skip" href="#main">Skip to content</a>
    <header class="hdr" id="hdr">
      <div class="wrap bar">
        <a class="logo" href="${pre}"><span class="logo-mark"><img src="${pre}images/logo-mark.webp" alt="" width="284" height="160" /></span><span>${esc(CONFIG.business)}</span></a>
        <nav class="nav" id="nav" aria-label="Main">
          <a href="${pre}">Home</a>
          <a href="${pre}#fleetsec">Cars</a>
          <a href="${pre}#how">How it works</a>
          <a href="${bookHref()}">Book</a>
          <a href="${pre}#areas">Delivery areas</a>
          <a href="${pre}#faq">FAQ</a>
          <a href="#contact">Contact</a>
          <div class="nav-extra">
            <a class="btn btn-wa" href="${waLink(waText)}" target="_blank" rel="noopener">WhatsApp us</a>
          </div>
        </nav>
        <div class="tools">
          <a class="btn btn-wa sm hide-m" href="${waLink(waText)}" target="_blank" rel="noopener">WhatsApp us</a>
          <button class="menu" id="menu" type="button" aria-label="Menu" aria-controls="nav" aria-expanded="false"><span></span><span></span></button>
        </div>
      </div>
    </header>

    <main id="main">
      <section class="hero">
        <div class="hero-bg" aria-hidden="true"></div>
        <div class="blob b1" aria-hidden="true"></div>
        <div class="blob b2" aria-hidden="true"></div>

        <div class="wrap hero-grid">
          <div class="hero-copy">
            <nav class="crumbs" aria-label="Breadcrumb">
              <ol><li><a href="${pre}">Home</a></li><li aria-current="page">${esc(p.label)}</li></ol>
            </nav>
            <p class="kicker"><span class="pulse" aria-hidden="true"></span><span>${p.guide ? 'Essential guide' : esc(tx('hero_kicker'))}</span></p>
            <h1>${esc(p.h1)}</h1>
            <p class="hero-p">${esc(fill(p.intro))}</p>
            <div class="hero-cta">
              <a class="btn btn-sand lg" href="${bookHref()}">${p.guide ? 'Book a car' : 'Book a car for ' + esc(p.label.split(',')[0].split(' & ')[0])}${icon('arrow')}</a>
              <a class="btn btn-glass lg" href="${waLink(waText)}" target="_blank" rel="noopener">Ask on WhatsApp</a>
            </div>
            <ul class="trust">
              <li>${esc(tx('w1t'))}</li>
              <li>${esc(tx('w3t'))}</li>
              <li>${esc(tx('w4t'))}</li>
            </ul>
          </div>

          <div class="hero-visual" aria-hidden="true">
            <div class="sun"></div>
            <img class="hero-car" src="${pre}images/toyota-land-cruiser-hero-zanzibar.webp" alt="" width="612" height="408" fetchpriority="high" />
            <div class="float-chip chip-a">
              <small>${esc(tx('stat_from'))}</small>
              <b>${money(minPrice)}</b>
            </div>
            <div class="float-chip chip-b">
              <span class="chip-ic">✈</span><span>${esc(chipText)}</span>
            </div>
          </div>
        </div>

        <div class="wrap">
          <dl class="stats">
            <div><dt><b>${CONFIG.fleet.length}</b></dt><dd>${esc(tx('stat_cars'))}</dd></div>
            <div><dt><b>${CONFIG.currency}${Math.round(minPrice)}</b></dt><dd>${esc(tx('stat_from'))}</dd></div>
            <div><dt><b>24/7</b></dt><dd>${esc(tx('stat_support'))}</dd></div>
          </dl>
        </div>

        <div class="waves w3" aria-hidden="true"></div>
        <div class="waves w1" aria-hidden="true"></div>
        <div class="waves w2" aria-hidden="true"></div>
      </section>

      <section class="page-body">
        <div class="wrap page-grid">
          <article class="prose">${sections}
          </article>
          <aside class="page-side">
            <div class="side-card">
              <h2>${p.guide ? 'Delivery fees' : 'Delivery to ' + esc(p.label)}</h2>
              <ul class="fee-list">${sideFees}</ul>
              <p class="side-note">Pickup and return are charged separately. Zanzibar Airport and Zanzibar Town (Stone Town) are always free.</p>
              <p class="side-from">Cars from <b>${money(minPrice)}</b> per day</p>
              <a class="btn btn-sand" href="${bookHref()}">Check prices and book</a>
              <a class="btn btn-wa" href="${waLink(waText)}" target="_blank" rel="noopener">WhatsApp ${esc(CONFIG.phone)}</a>
            </div>
          </aside>
        </div>
      </section>

      <section class="page-cars">
        <div class="wrap">
          <h2>${p.guide ? 'Popular rental cars in Zanzibar' : 'Recommended cars for ' + esc(p.label)}</h2>
          <div class="grid">${p.cars.map(id => carCard(findCar(id), { prefix: pre, bookHref: bookHref(id), media: 'div' })).join('')}
          </div>
          <p class="all-cars"><a href="${pre}#fleetsec">See all ${CONFIG.fleet.length} cars${icon('arrow')}</a></p>
        </div>
      </section>

      <section class="page-more">
        <div class="wrap">
          <h2>Car hire in other parts of Zanzibar</h2>
          <ul class="area-links">${others}</ul>
        </div>
      </section>
    </main>

    <footer id="contact">
      <div class="wrap">
        <div class="cta-band">
          <div>
            <h2>Ready to explore Zanzibar?</h2>
            <p>Message us on WhatsApp or book online in a minute.</p>
          </div>
          <div class="cta-actions">
            <a class="btn btn-sand lg" href="${bookHref()}">Book now</a>
            <a class="btn btn-wa lg" href="${waLink(waText)}" target="_blank" rel="noopener">WhatsApp us</a>
          </div>
        </div>
        <div class="foot-contact page-contact">${contactHTML(pre)}</div>
        <p class="copy">© ${new Date().getFullYear()} ${esc(CONFIG.business)}. All rights reserved.</p>
      </div>
    </footer>

    <a class="float" href="${waLink(waText)}" target="_blank" rel="noopener" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
      <span>WhatsApp</span>
    </a>
    <script src="${pre}analytics.js"></script>
    <script src="${pre}page.js"></script>
  </body>
</html>
`;
  write(p.slug + '/index.html', html);
  return url;
}

/* ---------- 3. 404, sitemap, robots ---------- */
function build404() {
  const b = BASE_PATH;
  const links = PAGES.map(p => `<li><a href="${b}${p.slug}/">${esc(p.linkText)}</a></li>`).join('');
  write('404.html', `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Page not found | ${esc(CONFIG.business)}</title>
    <meta name="robots" content="noindex" />
    <link rel="icon" type="image/png" href="${b}images/favicon.png" />
    <link rel="stylesheet" href="${b}css.css" />
  </head>
  <body class="subpage">
    <main id="main" class="page-404">
      <div class="wrap">
        <a class="foot-logo" href="${b}"><img src="${b}images/logo.webp" alt="${esc(CONFIG.business)}" width="760" height="582" /></a>
        <h1>Sorry, this page does not exist</h1>
        <p>The link may be old or mistyped. You can still book a car in Zanzibar from our home page.</p>
        <p class="hero-cta"><a class="btn btn-sand lg" href="${b}#book">Book a car</a> <a class="btn btn-wa lg" href="${waLink()}">WhatsApp us</a></p>
        <ul class="area-links">${links}</ul>
      </div>
    </main>
  </body>
</html>
`);
}

function buildSitemap(urls) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u}</loc><lastmod>${TODAY}</lastmod></url>`).join('\n')}
</urlset>
`;
  write('sitemap.xml', xml);
  write('robots.txt', `# ${CONFIG.business}
User-agent: *
Allow: /

Sitemap: ${SITE}sitemap.xml
`);
}

/* ---------- Run ---------- */
buildIndex();
const pageUrls = PAGES.map(buildPage);
build404();
buildSitemap([SITE, ...pageUrls]);
console.log(`Built index.html, ${PAGES.length} pages, 404.html, sitemap.xml (${pageUrls.length + 1} URLs), robots.txt`);
