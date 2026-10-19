(() => {
  'use strict';

  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');
  const backTop = document.querySelector('.back-top');
  const themeToggle = document.getElementById('themeToggle');
  const themeMeta = document.getElementById('themeColorMeta');
  let lastFocusedElement = null;

  function applyTheme(theme, persist = true) {
    const resolved = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = resolved;
    if (themeToggle) {
      const nextTheme = resolved === 'dark' ? 'light' : 'dark';
      const nextLabel = nextTheme === 'dark' ? 'Ativar tema escuro' : 'Ativar tema claro';
      themeToggle.setAttribute('aria-label', nextLabel);
      themeToggle.setAttribute('title', nextLabel);
      themeToggle.setAttribute('aria-pressed', String(resolved === 'dark'));
      const label = themeToggle.querySelector('.theme-label');
      if (label) label.textContent = nextTheme === 'dark' ? 'Tema escuro' : 'Tema claro';
    }
    if (themeMeta) themeMeta.setAttribute('content', resolved === 'dark' ? '#0b1422' : '#f6fbfe');
    if (persist) {
      try { localStorage.setItem('desvendando-theme', resolved); } catch (_) { /* Sem persistência, a troca ainda funciona nesta sessão. */ }
    }
  }

  if (themeToggle) {
    // The head script prevents a flash; this call syncs the button's accessible state.
    applyTheme(document.documentElement.dataset.theme || 'light', false);
    themeToggle.addEventListener('click', () => {
      applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }

  function closeMenu() {
    if (!menuToggle || !mainNav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    mainNav.classList.remove('is-open');
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
      mainNav.classList.toggle('is-open', !isOpen);
    });
    mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('click', (event) => {
      if (!mainNav.classList.contains('is-open')) return;
      if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
  }

  function closeLightbox() {
    if (!lightbox || lightbox.getAttribute('aria-hidden') !== 'false') return;
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    if (lightboxImage) {
      lightboxImage.removeAttribute('src');
      lightboxImage.alt = '';
    }
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus();
  }

  document.querySelectorAll('.gallery-item[data-image]').forEach((item) => {
    item.addEventListener('click', () => {
      if (!lightbox || !lightboxImage) return;
      const source = item.getAttribute('data-image');
      if (!source) return;
      lastFocusedElement = item;
      lightboxImage.src = source;
      lightboxImage.alt = item.getAttribute('data-alt') || '';
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
      if (lightboxClose) lightboxClose.focus();
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      closeLightbox();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1100) closeMenu();
  }, { passive: true });

  // Entrance animation mirrors the reference interface but remains motion-sensitive.
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('motion-ready');
  }

  function updateBackTop() {
    if (!backTop) return;
    backTop.classList.toggle('is-visible', window.scrollY > 500);
  }
  window.addEventListener('scroll', updateBackTop, { passive: true });
  updateBackTop();
})();
