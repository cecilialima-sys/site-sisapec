const SISAPEC_SYSTEM_URL = 'https://app.sisapec.com/pt';

async function includeSections() {
  const targets = Array.from(document.querySelectorAll('[data-include]'));

  await Promise.all(targets.map(async (target) => {
    const url = target.getAttribute('data-include');
    if (!url) return;

    try {
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Falha ao carregar ${url}`);
      target.innerHTML = await response.text();
    } catch (error) {
      target.innerHTML = '<section class="section-shell"><div class="container"><p>Não foi possível carregar esta seção.</p></div></section>';
      console.error(error);
    }
  }));

  document.querySelectorAll('[data-system-link]').forEach((link) => {
    link.setAttribute('href', SISAPEC_SYSTEM_URL);
  });

  document.dispatchEvent(new CustomEvent('sisapec:sections-ready'));
}

document.addEventListener('DOMContentLoaded', includeSections);
