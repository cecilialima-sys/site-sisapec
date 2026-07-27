const icons = {
  layers: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/><path d="m3 18 9 5 9-5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.8"/><path d="M16 3.2a4 4 0 0 1 0 7.6"/>',
  building: '<path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16"/><path d="M9 21v-5h3v5"/><path d="M8 7h1"/><path d="M12 7h1"/><path d="M8 11h1"/><path d="M12 11h1"/><path d="M18 9h2v12"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',
  cpu: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/>',
  healthDevice: '<rect x="6" y="3" width="12" height="18" rx="2.5"/><path d="M10 18h4"/><path d="M9 11h2l1-2 2 4 1-2h2"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h5"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'
};

export function Icon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[name] || icons.layers}</g></svg>`;
}

export function EmptyState(message) {
  return `<div class="pet-empty"><span>${Icon("file")}</span><p>${escapeHtml(message)}</p></div>`;
}

export function PetTechSusHeader(lastUpdated) {
  return `
    <section class="pet-hero" id="visao-geral">
      <div class="container pet-hero-grid">
        <div class="pet-hero-copy">
          <a class="page-back-link" href="index.html#carousel-title">Voltar ao início</a>
          <span class="eyebrow">Módulo institucional</span>
          <h1>PET TechSUS</h1>
          <p class="pet-subtitle">Tecnologia, inovação e transformação digital para o fortalecimento do SUS</p>
          <p>Acompanhe as atividades, os avanços, os indicadores e os próximos passos dos Grupos de Aprendizado Tutorial.</p>
        </div>
      </div>
    </section>
  `;
}

export function PetTechSusNav() {
  const items = [
    ["#visao-geral", "Visão geral"],
    ["#grupos", "Grupos de Aprendizado"],
    ["#indicadores", "Indicadores"],
    ["#solucoes", "Soluções digitais"],
    ["#colaboradores", "Colaboradores"]
  ];
  return `<nav class="pet-nav" aria-label="Navegação PET TechSUS"><div class="container">${items.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}</div></nav>`;
}

export function PetTechSusStats(stats) {
  return `
    <section class="pet-section" id="indicadores" aria-labelledby="pet-stats-title">
      <div class="container">
        <div class="section-heading center">
          <span class="eyebrow">Visão geral</span>
          <h2 id="pet-stats-title">Indicadores principais</h2>
        </div>
        <div class="pet-stats-grid">
          ${stats.map((stat) => `
            <article class="pet-stat-card">
              <span>${Icon(stat.icon)}</span>
              <strong>${escapeHtml(stat.value)}</strong>
              <h3>${escapeHtml(stat.title)}</h3>
              <p>${escapeHtml(stat.description)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

export function PetTechSusFilters(filters) {
  return `
    <form class="pet-filters" id="pet-filters">
      <label class="pet-search">
        <span>Pesquisar por grupo, projeto ou atividade</span>
        ${Icon("search")}
        <input name="query" type="search" placeholder="Pesquisar por grupo, projeto ou atividade" autocomplete="off" />
      </label>
      <div class="pet-filter-row">
        ${select("gat", "GAT", filters.gats)}
        ${select("status", "Status", filters.statuses)}
        ${select("category", "Área temática", filters.categories)}
        ${select("type", "Tipo de atividade", filters.types)}
        <button class="button button-contact pet-clear" type="button" id="pet-clear">Limpar filtros</button>
      </div>
      <p class="pet-feedback" id="pet-feedback" aria-live="polite"></p>
    </form>
  `;
}

export function GatCard(gat) {
  const mainMetric = gat.metrics?.[0];
  return `
    <article class="gat-card">
      <div class="gat-card-top">
        <span class="gat-number">GAT ${gat.number}</span>
        ${GatStatusBadge(gat.status)}
      </div>
      <h3>${escapeHtml(gat.shortTitle)}</h3>
      <p>${escapeHtml(gat.summary)}</p>
      <div class="gat-card-info" aria-label="Resumo informativo do GAT ${gat.number}">
        <div>
          <span>O que faz</span>
          <p>${escapeHtml(firstSentence(gat.about?.[0] || gat.summary))}</p>
        </div>
        <div>
          <span>Etapa atual</span>
          <p>${escapeHtml(gat.highlight)}</p>
        </div>
        <div>
          <span>Próximo passo</span>
          <p>${escapeHtml(gat.nextSteps?.[0] || "Informação ainda não cadastrada.")}</p>
        </div>
        ${mainMetric ? `
          <div>
            <span>Indicador</span>
            <p><strong>${escapeHtml(mainMetric.value)}</strong> ${escapeHtml(mainMetric.label)}</p>
          </div>
        ` : ""}
      </div>
      ${chips(gat.categories.slice(0, 4))}
      <div class="gat-card-meta">
        <strong>${escapeHtml(gat.highlight)}</strong>
      </div>
      <button class="button button-contact gat-detail-button" type="button" data-gat-id="${escapeAttribute(gat.id)}">Ver detalhes ${Icon("arrow")}</button>
    </article>
  `;
}

export function GatStatusBadge(status) {
  const kind = statusKind(status);
  return `<span class="gat-status gat-status-${kind}"><i aria-hidden="true"></i>${escapeHtml(status)}</span>`;
}

export function GatDetails(gat) {
  return `
    <section class="gat-detail" id="gat-detalhes" aria-labelledby="gat-detail-title">
      <div class="gat-detail-heading">
        <div>
          <span class="gat-number">GAT ${gat.number}</span>
          <h2 id="gat-detail-title">${escapeHtml(gat.title)}</h2>
          ${GatStatusBadge(gat.status)}
        </div>
        <button class="button button-contact" type="button" data-close-detail>Fechar detalhes</button>
      </div>
      <div class="gat-detail-grid">
        ${panel("Sobre a atividade", list(gat.about))}
        ${panel("Resultados e avanços", cards(gat.advances))}
        ${panel("Próximos passos", plan(gat.nextSteps))}
        ${panel("Indicadores", metrics(gat.metrics))}
        ${panel("Tecnologias e metodologias", chips(gat.technologies))}
        ${panel("Linha do tempo", GatTimeline(gat.timeline))}
      </div>
    </section>
  `;
}

export function GatTimeline(items) {
  if (!items?.length) return EmptyState("Linha do tempo indisponível para este grupo.");
  return `<ol class="gat-timeline">${items.map((item) => `<li><strong>${escapeHtml(item.stage)}</strong><p>${escapeHtml(item.description)}</p></li>`).join("")}</ol>`;
}

export function DigitalSolutionCard(solution) {
  return `
    <article class="solution-card">
      <span>${Icon("healthDevice")}</span>
      <small>${escapeHtml(solution.gatLabel)}</small>
      <h3>${escapeHtml(solution.name)}</h3>
      <p>${escapeHtml(solution.objective)}</p>
      <dl><dt>Etapa atual</dt><dd>${escapeHtml(solution.stage)}</dd></dl>
      ${chips(solution.technologies)}
      <button class="button button-contact gat-detail-button" type="button" data-gat-id="${escapeAttribute(solution.gatId)}">Abrir detalhes do GAT</button>
    </article>
  `;
}

export function PetTechSusCollaborators(collaborators) {
  if (!collaborators?.length) return EmptyState("Ainda não há colaboradores cadastrados.");
  return `<div class="pet-collaborators-grid">${collaborators.map((person) => `
    <article class="pet-collaborator-card">
      ${person.image ? `
        <img class="pet-collaborator-photo" src="${escapeAttribute(person.image)}" alt="Foto de ${escapeAttribute(person.name)}" />
      ` : `
        <div class="pet-collaborator-placeholder" aria-hidden="true">${escapeHtml(person.initials || initials(person.name))}</div>
      `}
      <h3>${escapeHtml(person.name)}</h3>
      <p class="pet-collaborator-role">${escapeHtml(person.role)}</p>
      <p>${escapeHtml(person.description)}</p>
      ${person.lattes ? `<a class="pet-collaborator-link" href="${escapeAttribute(person.lattes)}" target="_blank" rel="noopener noreferrer">Currículo Lattes</a>` : ""}
    </article>
  `).join("")}</div>`;
}

function select(name, label, options) {
  return `<label><span>${escapeHtml(label)}</span><select name="${name}"><option value="">Todos</option>${options.map((option) => `<option value="${escapeAttribute(option.value)}">${escapeHtml(option.label)}</option>`).join("")}</select></label>`;
}

function panel(title, content) {
  return `<article class="gat-panel"><h3>${escapeHtml(title)}</h3>${content}</article>`;
}

function list(items) {
  return `<ul class="gat-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function cards(items) {
  return `<div class="advance-cards">${items.map((item) => `<div><p>${escapeHtml(item)}</p></div>`).join("")}</div>`;
}

function plan(items) {
  return `<ol class="plan-list">${items.map((item, index) => `<li><span>${index + 1}</span><p>${escapeHtml(item)}</p></li>`).join("")}</ol>`;
}

function metrics(items) {
  if (!items?.length) return EmptyState("Não ha indicadores públicos cadastrados para este grupo.");
  return `<div class="metric-grid">${items.map((item) => `<div><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></div>`).join("")}</div>`;
}

function chips(items) {
  if (!items?.length) return "";
  return `<div class="pet-chips">${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`;
}

function initials(name) {
  return String(name)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function firstSentence(value) {
  const sentence = String(value).split(/(?<=[.!?])\s+/)[0];
  return sentence.length > 145 ? `${sentence.slice(0, 142).trim()}...` : sentence;
}

function statusKind(status) {
  const normalized = status.toLowerCase();
  if (normalized.includes("coleta") || normalized.includes("prepar")) return "collection";
  if (normalized.includes("valid") || normalized.includes("avali")) return "validation";
  if (normalized.includes("prototip") || normalized.includes("desenvol")) return "development";
  if (normalized.includes("patente") || normalized.includes("análise")) return "analysis";
  return "progress";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
