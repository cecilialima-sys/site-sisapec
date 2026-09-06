import { hydrateCarousel } from './pet-techsus-components.js?v=2026090503';

// Served HTML owns all content. JavaScript only enhances interactions.
const app = document.querySelector('[data-pet-techsus-app]');
if (app) {
  const showDetail = detail => {
    app.querySelectorAll('.gat-detail').forEach(item => {
      item.hidden = item !== detail;
      item.open = item === detail;
    });
  };
  app.querySelectorAll('[data-pet-photo-carousel]').forEach(hydrateCarousel);
  app.querySelectorAll('[data-gat-id]').forEach(link => {
    const detail = document.getElementById(`detalhes-${link.dataset.gatId}`);
    if (!detail) return;
    link.setAttribute('aria-controls', detail.id);
    link.setAttribute('aria-expanded', String(detail.open));
    detail.addEventListener('toggle', () => link.setAttribute('aria-expanded', String(detail.open)));
    link.addEventListener('click', event => {
      event.preventDefault();
      showDetail(detail);
      history.pushState(null, '', link.hash);
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      detail.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
      detail.querySelector('summary').focus({ preventScroll: true });
    });
  });
  const revealHash = () => {
    const detail = document.getElementById(location.hash.slice(1));
    if (detail?.matches('details.gat-detail')) showDetail(detail);
  };
  window.addEventListener('hashchange', revealHash);
  revealHash();
}
