/* Location pages and 404: language, menu and header behaviour (same as the home page) */
(function () {
  /* ---- Language: same saved choice as the home page ---- */
  const dataEl = document.getElementById('i18n');
  const data = dataEl ? JSON.parse(dataEl.textContent) : null;
  const applyLang = l => {
    if (!data) return;
    if (!data[l]) l = 'en';
    const d = data[l];
    document.documentElement.lang = l;
    document.querySelectorAll('[data-t]').forEach(e => { const v = d[e.dataset.t]; if (v != null) e.textContent = v; });
    document.querySelectorAll('[data-th]').forEach(e => { const v = d[e.dataset.th]; if (v != null) e.innerHTML = v; });
    if (d.__title) document.title = d.__title;
    document.querySelectorAll('select.lang').forEach(s => { s.value = l; });
    try { localStorage.setItem('lang', l); } catch (e) { }
  };
  let saved = 'en';
  try { saved = localStorage.getItem('lang') || 'en'; } catch (e) { }
  applyLang(saved);
  document.querySelectorAll('select.lang').forEach(s => s.addEventListener('change', e => applyLang(e.target.value)));

  const nav = document.getElementById('nav'), btn = document.getElementById('menu'), hdr = document.getElementById('hdr');
  if (!nav || !btn || !hdr) return;

  /* ---- Mobile menu ---- */
  const setMenu = open => {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    hdr.classList.toggle('menu-open', open);
    document.documentElement.classList.toggle('lock', open);
  };
  btn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); btn.focus(); } });
  nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });

  /* ---- Header turns solid once you scroll ---- */
  const onScroll = () => hdr.classList.toggle('scrolled', scrollY > 24);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Pause the hero animations while the hero is off-screen ---- */
  const hero = document.querySelector('.hero');
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => hero.classList.toggle('is-off', !en.isIntersecting)).observe(hero);
  }
})();
