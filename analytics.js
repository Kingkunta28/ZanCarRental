/* ===== Google Analytics 4 (optional) =====
   1. Create a GA4 property at https://analytics.google.com and copy its Measurement ID (looks like G-XXXXXXXXXX).
   2. Paste it below. Nothing is loaded or tracked while it is empty.

   Events sent once it is set:
   - whatsapp_click   any WhatsApp button or link        (label: where it was clicked)
   - generate_lead    booking form sent to WhatsApp      (value: final total in USD)
   - view_item        car details window opened          (item_id, item_name)
   - contact_click    map/address or phone links
   In GA4, mark "generate_lead" and "whatsapp_click" as key events (Admin > Events). */
const GA4_ID = '';

(function () {
  const queue = [];
  window.rafikiTrack = (name, params) => queue.push([name, params || {}]);
  if (!GA4_ID) return;

  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA4_ID);
  window.rafikiTrack = (name, params) => gtag('event', name, params || {});
  queue.forEach(([n, p]) => window.rafikiTrack(n, p));

  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const label = (a.textContent || '').trim().slice(0, 60) || a.className;
    if (href.includes('wa.me/') && !a.closest('#form')) window.rafikiTrack('whatsapp_click', { link_text: label, page_path: location.pathname });
    else if (href.startsWith('tel:') || href.includes('maps.google')) window.rafikiTrack('contact_click', { link_url: href, page_path: location.pathname });
  }, true);
})();
