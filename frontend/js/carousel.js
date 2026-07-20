function createCarousel(carousel) {
  const slides = Array.from(carousel.querySelectorAll('.carousel-item'));
  const track = carousel.querySelector('[data-carousel-track]');
  const dotsContainer = carousel.querySelector('[data-carousel-dots]');
  const nextButton = carousel.querySelector('[data-carousel-next]');
  const prevButton = carousel.querySelector('[data-carousel-prev]');
  const intervalMs = 5200;
  let activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains('is-active')));
  let timer = null;

  if (!slides.length || !track || !dotsContainer) return;

  dotsContainer.innerHTML = slides.map((_, index) => (
    `<button class="carousel-dot" type="button" aria-label="Ir para slide ${index + 1}" data-carousel-dot="${index}"></button>`
  )).join('');

  const dots = Array.from(dotsContainer.querySelectorAll('.carousel-dot'));

  function render() {
    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));

      const video = slide.querySelector('video');
      if (video) {
        video.muted = true;
        if (isActive) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });

    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  }

  function goTo(index) {
    activeIndex = (index + slides.length) % slides.length;
    render();
  }

  function start() {
    stop();
    timer = window.setInterval(() => goTo(activeIndex + 1), intervalMs);
  }

  function stop() {
    if (timer) window.clearInterval(timer);
    timer = null;
  }

  nextButton?.addEventListener('click', () => {
    goTo(activeIndex + 1);
    start();
  });

  prevButton?.addEventListener('click', () => {
    goTo(activeIndex - 1);
    start();
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      goTo(Number(dot.dataset.carouselDot));
      start();
    });
  });

  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', start);

  render();
  start();
}

function initCarousels() {
  document.querySelectorAll('[data-carousel]').forEach(createCarousel);
}

document.addEventListener('sisapec:sections-ready', initCarousels);
