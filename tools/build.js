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
const PAGES_I18N = require('./pages-i18n.js');

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
// Booking locations (airport, town, outside) plus the named beach areas used by the area pages
const findPlace = id => findLoc(id) || (CONFIG.areas || []).find(a => a.id === id);
const PLACES = CONFIG.locations.filter(l => l.free).concat(CONFIG.areas || []);
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
          <li>${icon('trans')}${esc(tx('v_' + c.trans))}</li>${c.fuel ? `\n          <li>${icon('fuel')}${esc(tx('v_' + c.fuel))}</li>` : ''}${c.year ? `\n          <li>${icon('year')}${c.year}</li>` : ''}`;

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
    .concat(PLACES.map(l => ({ '@type': 'Place', name: (l.full || l.name).replace(/ \(Zanzibar\)$/, '') + ', Zanzibar' }))),
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
  const title = tx('meta_title');
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
  h = h.replace(/(<span id="seatPrice">)[^<]*(<\/span>)/, (m, a, b) => a + money(CONFIG.babySeatFee) + b);
  h = h.replace(/(<small class="extra-deal" id="seatDeal">)[^<]*(<\/small>)/, (m, a, b) => a + esc(tx('x_multi').replace('{seat}', money(CONFIG.babySeatMultiFee))) + b);
  h = h.replace(/(<input type="number" name="baby_seats" id="babySeats"[^>]*?max=")\d*(")/, (m, a, b) => a + CONFIG.babySeatMax + b);
  h = h.replace(/(<input name="arrival_airport" id="arrPort"[^>]*?value=")[^"]*(")/, (m, a, b) => a + esc(CONFIG.arrivalAirport) + b);
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
  const locOptions = CONFIG.locations.map(l => `<option value="${l.id}">${esc(locLabel(l))} · ${esc(l.free ? tx('free') : '+' + money(CONFIG.deliveryFee))}</option>`).join('');
  h = h.replace(/(<select[^>]*class="loc-select"[^>]*>)[\s\S]*?(<\/select>)/g, (m, a, b) => a + locOptions + b);

  // Delivery areas + footer links
  const areaCards = PLACES.map(l => {
    const p = pageFor(l.id);
    const pill = l.free
      ? `<span class="fee-pill is-free" data-i18n="free">${esc(tx('free'))}</span>`
      : `<span class="fee-pill is-paid" data-i18n="area_paid">${esc(tx('area_paid'))}</span>`;
    return `
            <li><a class="area-card" href="${p.slug}/">${l.id === 'airport' ? `<span class="area-name" data-i18n="lbl_car-hire-zanzibar-airport">${esc(tx('lbl_car-hire-zanzibar-airport'))}</span>` : l.id === 'town' ? `<span class="area-name" data-i18n="l_town">${esc(tx('l_town'))}</span>` : `<span class="area-name">${esc(l.name)}</span>`}${pill}<span class="area-go"><span data-i18n="lk_${p.slug}">${esc(tx('lk_' + p.slug))}</span>${icon('arrow')}</span></a></li>`;
  }).join('');
  const guide = PAGES.find(p => p.guide);
  h = replaceBlock(h, 'areas', `
          <ul class="area-grid">${areaCards}
          </ul>
          <p class="area-guide"><a href="${guide.slug}/"><span data-i18n="lk_${guide.slug}">${esc(tx('lk_' + guide.slug))}</span>${icon('arrow')}</a></p>
          `);
  h = replaceBlock(h, 'footareas', PAGES.map(p => `\n            <a href="${p.slug}/" data-i18n="lk_${p.slug}">${esc(tx('lk_' + p.slug))}</a>`).join('') + '\n            ');
  h = replaceBlock(h, 'contact', contactHTML());
  write('index.html', h);
}

function contactHTML(prefix = '') {
  return `<a class="btn btn-wa" href="${waLink()}" target="_blank" rel="noopener">💬 ${esc(CONFIG.phone)}</a>
   <a class="addr" href="${telHref}">📞 ${esc(CONFIG.phone)}</a>
   <a class="addr" href="https://maps.google.com/?q=${encodeURIComponent(CONFIG.address)}" target="_blank" rel="noopener">📍 ${esc(CONFIG.address)}</a>`;
}

/* ---------- 2. Location pages ---------- */
// Every visible text on these pages is stored in all languages inside the page (script#i18n);
// page.js switches it, using the same saved language as the home page.
const LANGS = Object.keys(T);
const tl = (l, k) => fill((T[l] && T[l][k] !== undefined) ? T[l][k] : (en[k] !== undefined ? en[k] : k));
const LANG_SELECT = id => `<select class="lang"${id ? ` id="${id}"` : ''} aria-label="Language">${[['en', 'English', 'EN'], ['sw', 'Kiswahili', 'SW'], ['it', 'Italiano', 'IT'], ['de', 'Deutsch', 'DE'], ['fr', 'Français', 'FR'], ['es', 'Español', 'ES']]
  .map(([v, long, s]) => `<option value="${v}">${id ? s : long}</option>`).join('')}</select>`;

function dictionary() {
  const dict = Object.fromEntries(LANGS.map(l => [l, {}]));
  const put = (key, fn) => { LANGS.forEach(l => { dict[l][key] = fn(l); }); return dict.en[key]; };
  // text element: <tag data-t="key">English</tag>
  const tt = (key, fn, tag = 'span', attrs = '') => `<${tag}${attrs} data-t="${key}">${esc(put(key, fn))}</${tag}>`;
  // plain T key
  const tk = (key, tag = 'span', attrs = '') => tt(key, l => tl(l, key), tag, attrs);
  // element whose translation contains markup (already escaped)
  const th = (key, fn, tag = 'span', attrs = '') => `<${tag}${attrs} data-th="${key}">${put(key, fn)}</${tag}>`;
  const script = () => `<script type="application/json" id="i18n">${JSON.stringify(dict).replace(/</g, '\\u003c')}</script>`;
  return { dict, put, tt, tk, th, script };
}

function pageText(p, l) {
  if (l === 'en') return p;
  const tr = (PAGES_I18N[p.slug] || {})[l];
  if (!tr) throw new Error(`Missing ${l} translation for ${p.slug} in tools/pages-i18n.js`);
  // same shape as the English, or the build stops
  if (tr.sections.length !== p.sections.length) throw new Error(`${p.slug}/${l}: ${tr.sections.length} sections, English has ${p.sections.length}`);
  p.sections.forEach(([, blocks], i) => {
    const b2 = tr.sections[i][1];
    if (b2.length !== blocks.length) throw new Error(`${p.slug}/${l} section ${i + 1}: block count differs from English`);
    blocks.forEach((b, j) => {
      if (Array.isArray(b) !== Array.isArray(b2[j]) || (Array.isArray(b) && b.length !== b2[j].length))
        throw new Error(`${p.slug}/${l} section ${i + 1} block ${j + 1}: list differs from English`);
    });
  });
  return tr;
}

function specsT(c, D) {
  return `
          <li>${icon('seats')}${c.seats} ${D.tk('seats')}</li>
          <li>${icon('trans')}${D.tk('v_' + c.trans)}</li>${c.fuel ? `\n          <li>${icon('fuel')}${D.tk('v_' + c.fuel)}</li>` : ''}${c.year ? `\n          <li>${icon('year')}${c.year}</li>` : ''}`;
}

function carCardT(c, D, { prefix, bookHref }) {
  return `
    <article class="card">
      <div class="card-media"><img src="${prefix}${esc(c.image)}" alt="${esc(carAlt(c))}" width="800" height="533" loading="lazy" decoding="async">${c.type ? D.tk('cat_' + c.type, 'span', ' class="tag"') : ''}</div>
      <div class="cb">
        <h3>${esc(c.name)}</h3>
        <ul class="specs">${specsT(c, D)}</ul>
        <div class="card-foot">
          <p class="price"><b>${money(c.price)}</b>${D.tk('per_day')}</p>
          <a class="btn btn-b" href="${bookHref}">${D.tk('book_car')}${icon('arrow')}</a>
        </div>
      </div>
    </article>`;
}

function buildPage(p) {
  const url = SITE + p.slug + '/';
  const pre = '../';
  const firstLoc = p.locs[0];
  const bookHref = (car) => `${pre}?${[car ? 'car=' + car : '', firstLoc ? 'pickup=' + firstLoc : ''].filter(Boolean).join('&')}#book`;
  // The WhatsApp message goes to the business, so it stays in English.
  const waText = `Hello ${CONFIG.business}, I would like to rent a car` + (p.guide ? ' in Zanzibar.' : ` in ${p.label.replace(' & ', ' / ')}.`);
  const crumbs = [{ name: 'Home', url: SITE }, { name: p.label, url }];
  const allFree = p.locs.length && p.locs.every(id => findPlace(id).free);
  const D = dictionary();
  const C = l => pageText(p, l);
  const place = l => tl(l, 'lbl_' + p.slug);

  D.put('__title', l => fill(C(l).title));

  const sections = p.sections.map(([, blocks], i) => `
          ${D.tt(`s${i}h`, l => fill(C(l).sections[i][0]), 'h2')}` + blocks.map((b, j) => Array.isArray(b)
    ? `\n          <ul>${b.map((_, k) => D.tt(`s${i}b${j}i${k}`, l => fill(C(l).sections[i][1][j][k]), 'li')).join('')}</ul>`
    : `\n          ${D.tt(`s${i}b${j}`, l => fill(C(l).sections[i][1][j]), 'p')}`).join('')).join('\n');

  const feeName = id => id === 'airport' ? D.tk('lbl_car-hire-zanzibar-airport')
    : id === 'town' ? D.tk('l_town') : `<span>${esc(findPlace(id).name)}</span>`;
  const pill = free => free ? D.tk('free', 'span', ' class="fee-pill is-free"') : D.tk('area_paid', 'span', ' class="fee-pill is-paid"');
  const sideFees = p.guide
    ? `<li>${feeName('airport')}${pill(true)}</li><li>${feeName('town')}${pill(true)}</li><li>${D.tk('pg_other')}${pill(false)}</li>`
    : p.locs.map(id => `<li>${feeName(id)}${pill(findPlace(id).free)}</li>`).join('');

  const others = PAGES.filter(o => o.slug !== p.slug)
    .map(o => `<li><a href="${pre}${o.slug}/">${D.tk('lk_' + o.slug)}${icon('arrow')}</a></li>`).join('');

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': url + '#webpage', url, name: fill(p.title), description: fill(p.desc), inLanguage: 'en',
        isPartOf: { '@id': SITE + '#website' }, about: { '@id': BIZ_ID }, breadcrumb: { '@id': url + '#breadcrumb' },
        primaryImageOfPage: SITE + findCar(p.cars[0]).image },
      { '@type': 'BreadcrumbList', '@id': url + '#breadcrumb',
        itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })) },
      { '@type': 'AutoRental', '@id': BIZ_ID, name: CONFIG.business, url: SITE, telephone: '+' + CONFIG.whatsapp,
        ...(p.locs.length ? { areaServed: p.locs.map(id => ({ '@type': 'Place', name: (findPlace(id).full || findPlace(id).name).replace(/ \(Zanzibar\)$/, '') + ', Zanzibar' })) } : {}) }
    ]
  };

  const waBtn = (cls) => `<a class="${cls}" href="${waLink(waText)}" target="_blank" rel="noopener">${D.tk('wa')}</a>`;

  // Page hero card: the recommended car for an area page, or a Zanzibar photo for the guide.
  const star = findCar(p.cars[0]);
  const badge = D.tt('chip', l => tl(l, p.guide || !p.locs.length ? 'w2t' : allFree ? 'pg_chip_free' : 'pg_chip_paid'), 'span', ' class="pc-badge"');
  const heroCard = p.guide ? `<figure class="phero-card pc-photo">
            <div class="pc-media"><img src="${pre}images/hero.webp" alt="Turquoise lagoon and palm-lined beach on Zanzibar's east coast" width="1600" height="1000" fetchpriority="high" decoding="async" />${D.tk('g_k', 'span', ' class="pc-badge"')}</div>
            <figcaption>
              <span><span class="pc-name">${D.tk('lbl_' + p.slug)}</span>${D.tk('g_p', 'span', ' class="pc-meta"')}</span>
              <span class="pc-price">${D.tk('stat_from')}<b>${money(minPrice)}</b></span>
            </figcaption>
            <ul class="pc-fees">${sideFees}</ul>
          </figure>` : `<figure class="phero-card">
            <div class="pc-media"><img src="${pre}${esc(star.image)}" alt="${esc(carAlt(star))}" width="800" height="533" fetchpriority="high" decoding="async" />${badge}</div>
            <figcaption>
              <span><span class="pc-name">${esc(star.name)}</span>${D.tt('pc_meta', l => tl(l, 'pg_rec').replace('{place}', place(l)), 'span', ' class="pc-meta"')}</span>
              <span class="pc-price"><b>${money(star.price)}</b>${D.tk('per_day')}</span>
            </figcaption>
            <ul class="pc-fees">${sideFees}</ul>
          </figure>`;

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
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" onload="this.onload=null;this.rel='stylesheet'" />
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" /></noscript>
    <link rel="stylesheet" href="${pre}css.css" />
  </head>
  <body class="subpage">
    ${D.tk('skip', 'a', ' class="skip" href="#main"')}
    <header class="hdr" id="hdr">
      <div class="wrap bar">
        <a class="logo" href="${pre}"><span class="logo-mark"><img src="${pre}images/logo-mark.webp" alt="" width="284" height="160" /></span><span>${esc(CONFIG.business)}</span></a>
        <nav class="nav" id="nav" aria-label="Main">
          ${D.tk('nav_home', 'a', ` href="${pre}"`)}
          ${D.tk('nav_fleet', 'a', ` href="${pre}#fleetsec"`)}
          ${D.tk('nav_how', 'a', ` href="${pre}#how"`)}
          ${D.tk('nav_book', 'a', ` href="${bookHref()}"`)}
          ${D.tk('nav_areas', 'a', ` href="${pre}#areas"`)}
          ${D.tk('nav_faq', 'a', ` href="${pre}#faq"`)}
          ${D.tk('nav_contact', 'a', ' href="#contact"')}
          <div class="nav-extra">
            ${LANG_SELECT('')}
            ${waBtn('btn btn-wa')}
          </div>
        </nav>
        <div class="tools">
          ${LANG_SELECT('lang')}
          ${waBtn('btn btn-wa sm hide-m')}
          <button class="menu" id="menu" type="button" aria-label="Menu" aria-controls="nav" aria-expanded="false"><span></span><span></span></button>
        </div>
      </div>
    </header>

    <main id="main">
      <section class="phero">
        <div class="wrap phero-grid">
          <div class="phero-copy">
            <nav class="crumbs" aria-label="Breadcrumb">
              <ol><li>${D.tk('nav_home', 'a', ` href="${pre}"`)}</li><li aria-current="page">${D.tk('lbl_' + p.slug)}</li></ol>
            </nav>
            <p class="eyebrow">${D.tk(p.guide ? 'g_k' : 'hero_kicker')}</p>
            ${D.tt('h1', l => fill(C(l).h1), 'h1')}
            ${D.tt('intro', l => fill(C(l).intro), 'p', ' class="hero-p"')}
            <div class="hero-cta">
              <a class="btn btn-sand lg" href="${bookHref()}">${D.tk('bk_' + p.slug)}${icon('arrow')}</a>
              <a class="btn btn-glass lg" href="${waLink(waText)}" target="_blank" rel="noopener">${D.tk('pg_ask')}</a>
            </div>
            <ul class="phero-facts">
              ${D.tk('w1t', 'li')}
              ${D.tk('w3t', 'li')}
              ${D.tk('w4t', 'li')}
            </ul>
          </div>
          ${heroCard}
        </div>
      </section>

      <section class="page-body">
        <div class="wrap page-grid">
          <article class="prose">${sections}
          </article>
          <aside class="page-side">
            <div class="side-card">
              ${D.tt('side_h', l => p.guide ? tl(l, 'pg_fees') : tl(l, 'pg_deliv_to').replace('{place}', place(l)), 'h2')}
              <ul class="fee-list">${sideFees}</ul>
              ${D.tk('pg_side_note', 'p', ' class="side-note"')}
              ${D.th('side_from', l => esc(tl(l, 'pg_from')).replace('{price}', `<b>${money(minPrice)}</b>`), 'p', ' class="side-from"')}
              <a class="btn btn-sand" href="${bookHref()}">${D.tk('pg_check')}</a>
              <a class="btn btn-wa" href="${waLink(waText)}" target="_blank" rel="noopener">WhatsApp ${esc(CONFIG.phone)}</a>
            </div>
          </aside>
        </div>
      </section>

      <section class="page-cars">
        <div class="wrap">
          ${D.tt('cars_h', l => p.guide ? tl(l, 'pg_popular') : tl(l, 'pg_rec').replace('{place}', place(l)), 'h2')}
          <div class="grid">${p.cars.map(id => carCardT(findCar(id), D, { prefix: pre, bookHref: bookHref(id) })).join('')}
          </div>
          <p class="all-cars"><a href="${pre}#fleetsec">${D.tt('all_cars', l => tl(l, 'pg_all').replace('{n}', CONFIG.fleet.length))}${icon('arrow')}</a></p>
        </div>
      </section>

      <section class="page-more">
        <div class="wrap">
          ${D.tk('pg_more', 'h2')}
          <ul class="area-links">${others}</ul>
        </div>
      </section>
    </main>

    <footer id="contact">
      <div class="wrap">
        <div class="cta-band">
          <div>
            ${D.tk('cta_h', 'h2')}
            ${D.tk('pg_cta_p', 'p')}
          </div>
          <div class="cta-actions">
            <a class="btn btn-sand lg" href="${bookHref()}">${D.tk('cta_book')}</a>
            ${waBtn('btn btn-wa lg')}
          </div>
        </div>
        <div class="foot-contact page-contact">${contactHTML(pre)}</div>
        <p class="copy">© ${new Date().getFullYear()} ${esc(CONFIG.business)}. ${D.tk('rights')}</p>
      </div>
    </footer>

    <a class="float" href="${waLink(waText)}" target="_blank" rel="noopener" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
      <span>WhatsApp</span>
    </a>
    ${D.script()}
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
  const D = dictionary();
  D.put('__title', l => `${tl(l, 'pg_404_h')} | ${CONFIG.business}`);
  const links = PAGES.map(p => `<li><a href="${b}${p.slug}/">${D.tk('lk_' + p.slug)}</a></li>`).join('');
  write('404.html', `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(tl('en', 'pg_404_h'))} | ${esc(CONFIG.business)}</title>
    <meta name="robots" content="noindex" />
    <link rel="icon" type="image/png" href="${b}images/favicon.png" />
    <link rel="stylesheet" href="${b}css.css" />
  </head>
  <body class="subpage">
    <main id="main" class="page-404">
      <div class="wrap">
        <a class="foot-logo" href="${b}"><img src="${b}images/logo.webp" alt="${esc(CONFIG.business)}" width="760" height="582" /></a>
        ${D.tk('pg_404_h', 'h1')}
        ${D.tk('pg_404_p', 'p')}
        <p class="hero-cta"><a class="btn btn-sand lg" href="${b}#book">${D.tk('pg_book')}</a> <a class="btn btn-wa lg" href="${waLink()}">${D.tk('wa')}</a></p>
        <ul class="area-links">${links}</ul>
      </div>
    </main>
    ${D.script()}
    <script src="${b}page.js"></script>
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
