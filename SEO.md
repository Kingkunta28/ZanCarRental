# SEO notes – Rafiki Car Hire

## After any change to cars, prices, texts or location pages

Run this once in the project folder, then upload everything to GitHub:

```
node tools/build.js
```

It copies the English text, cars, prices and contact details into `index.html` (so Google can read
them without JavaScript), and regenerates the location pages, `sitemap.xml`, `robots.txt` and `404.html`.
The site still works without running it, but Google would see old prices and text.

- Cars, prices, phone, delivery fee, locations: `scripts.js` (CONFIG at the top)
- Website texts in all languages: `scripts.js` (T, T2, T3, T4)
- Location pages and driving guide (English): `tools/pages.js`

## Pages

| URL | Purpose |
|---|---|
| `/` | Home: cars, booking, delivery areas, FAQ |
| `/car-hire-zanzibar-airport/` | Zanzibar Airport car rental |
| `/car-hire-stone-town/` | Stone Town / Zanzibar Town |
| `/car-hire-nungwi-kendwa/` | Nungwi and Kendwa |
| `/car-hire-matemwe-pongwe/` | Matemwe and Pongwe |
| `/car-hire-paje-jambiani/` | Paje, Jambiani, Bwejuu, Michamvi |
| `/car-hire-kizimkazi/` | Kizimkazi |
| `/driving-in-zanzibar/` | Guide for visitors |

## Google Search Console (to do once)

1. Go to https://search.google.com/search-console and add a **URL prefix** property:
   `https://kingkunta28.github.io/ZanCarRental/`
2. Choose the **HTML tag** method, copy the `<meta name="google-site-verification" ...>` tag and paste it
   in `index.html` where the comment says "Google Search Console". Upload, then click Verify.
3. Sitemaps > submit `sitemap.xml`.

Note: on a `github.io/ZanCarRental/` address Google does not read our `robots.txt` (it only reads the one
at the root of the domain). That is fine because nothing is blocked; submitting the sitemap is what matters.
With your own domain, robots.txt starts working automatically.

## Google Analytics 4 (optional)

Create a GA4 property, copy the Measurement ID (G-XXXXXXXXXX) into `analytics.js` (`GA4_ID`).
Tracked events: `whatsapp_click`, `generate_lead` (booking sent, with total), `view_item` (car details),
`contact_click` (phone and map). Mark `generate_lead` and `whatsapp_click` as key events in GA4.

## Google Business Profile

Create one at https://business.google.com with the same name, phone (+255 715 518 980) and website URL
as on the site. It is the biggest single factor for appearing in Google Maps results for "car hire Zanzibar".
Once it exists, its link (and any social media pages) can be added as a `sameAs` list in the
`business()` function of `tools/build.js`.

## Own domain (recommended)

A domain such as rafikicarhire.com is stronger for SEO than a github.io sub-folder. After setting it up in
GitHub Pages, change `siteUrl` in `scripts.js` and run `node tools/build.js`; every canonical URL, the
sitemap and the 404 page update automatically.
