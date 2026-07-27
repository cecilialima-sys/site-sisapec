import { digitalSolutions, gatActivities, petCollaborators, petLastUpdated, petStats } from "./pet-techsus-data.js?v=2026072713";
import {
  DigitalSolutionCard,
  EmptyState,
  GatCard,
  GatDetails,
  PetTechSusCollaborators,
  PetTechSusHeader,
  PetTechSusStats
} from "./pet-techsus-components.js?v=2026072615";

const app = document.querySelector("[data-pet-techsus-app]");

const petActivityPhotos = [
  {
    src: "../assets/images/pet-atividade-aula-aps.png",
    alt: "Atividade educativa com participantes em unidade de saúde",
    title: "Atividade de educação em saúde na APS"
  },
  {
    src: "../assets/images/pet-atividade-aps-usuarios.png",
    alt: "Registro de participantes em sala de espera de unidade de saúde",
    title: "Registro em unidade de saúde"
  },
  {
    src: "../assets/images/pet-atividade-sala-espera.png",
    alt: "Participantes aguardando atividade em corredor de unidade de saúde",
    title: "Sala de espera em unidade de saúde"
  },
  {
    src: "../assets/images/pet-atividade-capacitacao.png",
    alt: "Atividade com usuários do SUS em sala de unidade de saúde",
    title: "Atividade com usuários do SUS"
  },
  {
    src: "../assets/images/pet-atividade-infovida.png",
    alt: "Tela do aplicativo InfoVida",
    title: "Protótipo InfoVida"
  },
  {
    src: "../assets/images/pet-atividade-sisapec-work.png",
    alt: "Imagem institucional do SisAPEC-Work com dispositivos vestíveis",
    title: "SisAPEC-Work"
  },
  {
    src: "../assets/images/pet-atividade-reuniao-online.png",
    alt: "Reunião remota de integrantes do PET TechSUS",
    title: "Reunião remota PET TechSUS"
  },
  {
    src: "../assets/images/pet-atividade-reuniao-presencial-1.png",
    alt: "Reunião presencial de integrantes do PET TechSUS",
    title: "Reunião presencial PET TechSUS"
  },
  {
    src: "../assets/images/pet-atividade-reuniao-presencial-2.png",
    alt: "Reunião de planejamento com integrantes do PET TechSUS",
    title: "Planejamento em equipe"
  }
];

if (app) {
  renderPage();
}

function renderPage() {
  app.innerHTML = `
    ${PetTechSusHeader(petLastUpdated)}
    ${PetTechSusStats(petStats)}
    <section class="pet-section" id="grupos" aria-labelledby="groups-title">
      <div class="container">
        <div class="section-heading center">
          <span class="eyebrow">Grupos de Aprendizado</span>
          <h2 id="groups-title">Atividades dos GATs</h2>
        </div>
        <div class="gat-grid" id="gat-grid" aria-live="polite"></div>
        <div id="gat-detail-target"></div>
        ${renderPetPhotoCarousel()}
      </div>
    </section>
    <section class="pet-section" id="solucoes" aria-labelledby="solutions-title">
      <div class="container">
        <div class="section-heading center">
          <span class="eyebrow">Tecnologia aplicada</span>
          <h2 id="solutions-title">Soluções digitais em desenvolvimento</h2>
        </div>
        <div class="solutions-grid">${digitalSolutions.map(DigitalSolutionCard).join("")}</div>
      </div>
    </section>
    <section class="pet-section" id="colaboradores" aria-labelledby="collaborators-title">
      <div class="container">
        <div class="section-heading center">
          <span class="eyebrow">Equipe</span>
          <h2 id="collaborators-title">Colaboradores PET TechSUS</h2>
          <p>Equipe envolvida nas atividades institucionais, acadêmicas, científicas e tecnológicas relacionadas ao PET TechSUS.</p>
        </div>
        ${PetTechSusCollaborators(petCollaborators)}
      </div>
    </section>
  `;

  bindDetails();
  bindPhotoCarousel();
  updateGatGrid();
}

function bindDetails() {
  app.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gat-id]");
    const close = event.target.closest("[data-close-detail]");
    if (button) {
      showDetails(button.getAttribute("data-gat-id"));
    }
    if (close) {
      document.querySelector("#gat-detail-target").innerHTML = "";
    }
  });
}

function updateGatGrid() {
  const grid = document.querySelector("#gat-grid");
  grid.innerHTML = gatActivities.length ? gatActivities.map(GatCard).join("") : EmptyState("Nenhum grupo cadastrado no momento.");
}

function bindPhotoCarousel() {
  const carousel = document.querySelector("[data-pet-photo-carousel]");
  if (!carousel) return;
  const track = carousel.querySelector("[data-pet-photo-track]");
  carousel.addEventListener("click", (event) => {
    const button = event.target.closest("[data-pet-photo-direction]");
    if (!button) return;
    const direction = button.getAttribute("data-pet-photo-direction") === "next" ? 1 : -1;
    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  });
}

function showDetails(id) {
  const gat = gatActivities.find((item) => item.id === id);
  if (!gat) return;
  const target = document.querySelector("#gat-detail-target");
  target.innerHTML = GatDetails(gat);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
}

function renderPetPhotoCarousel() {
  return `
    <section class="pet-photo-carousel" aria-labelledby="pet-photo-title" data-pet-photo-carousel>
      <div class="pet-photo-heading">
        <div>
          <span class="eyebrow">Registros</span>
          <h3 id="pet-photo-title">Registros das atividades</h3>
        </div>
        <div class="pet-photo-controls" aria-label="Controles do carrossel">
          <button type="button" aria-label="Foto anterior" data-pet-photo-direction="prev">‹</button>
          <button type="button" aria-label="Próxima foto" data-pet-photo-direction="next">›</button>
        </div>
      </div>
      <div class="pet-photo-track" data-pet-photo-track>
        ${petActivityPhotos.map((photo) => `
          <figure class="pet-photo-slide">
            <img src="${photo.src}" alt="${photo.alt}" />
            <figcaption>${photo.title}</figcaption>
          </figure>
        `).join("")}
      </div>
    </section>
  `;
}
