// Original PET carousel: horizontal scroll and previous/next arrows.
export function hydrateCarousel(carousel) {
  const track = carousel.querySelector('[data-pet-photo-track]');
  if (!track) return;
  carousel.addEventListener('click', event => {
    const button = event.target.closest('[data-pet-photo-direction]');
    if (!button) return;
    const direction = button.getAttribute('data-pet-photo-direction') === 'next' ? 1 : -1;
    track.scrollBy({ left: direction * track.clientWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
}
