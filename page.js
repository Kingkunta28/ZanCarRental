/* Location pages: same header and hero behaviour as the home page */
(function () {
  const nav = document.getElementById('nav'), btn = document.getElementById('menu'), hdr = document.getElementById('hdr');
  if (!nav || !btn || !hdr) return;

  // Mobile menu
  const setMenu = open => {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    hdr.classList.toggle('menu-open', open);
    document.documentElement.classList.toggle('lock', open);
  };
  btn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); btn.focus(); } });
  nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });

  // Header turns solid once you scroll, like on the home page
  const onScroll = () => hdr.classList.toggle('scrolled', scrollY > 24);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Pause the hero animations while the hero is off-screen
  const hero = document.querySelector('.hero');
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => hero.classList.toggle('is-off', !en.isIntersecting)).observe(hero);
  }
})();
