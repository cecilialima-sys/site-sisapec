# CLAUDE.md — site-sisapec

## O que é este projeto

Site institucional estático do **SISAPEC** — sistema digital multiprofissional que estrutura o Processo de Enfermagem e organiza rotinas clínicas em APS (Atenção Primária à Saúde) e hospitais. O site serve como vitrine institucional e ponto de acesso à plataforma externa em `https://app.sisapec.com/pt`.

Recursos do SISAPEC: cadastro integrado, formulários estruturados, IA para apoio ao raciocínio clínico, interoperabilidade HL7 FHIR/RNDS e conformidade com LGPD.

**Instituição:** UNIFAL-MG (Universidade Federal de Alfenas)  
**Coordenação científica:** Isabelle Sampaio Pinto Costa (`isabelle.costa@unifal-mg.edu.br`)  
**Órgãos de fomento:** FAPEMIG, CNPq, ILO  

---

## Stack e estrutura

Projeto **100% estático**: HTML + CSS + JavaScript puro, sem framework, build tool ou bundler.

```
frontend/
  pages/        # Páginas HTML (index.html, sistema.html)
  sections/     # Seções carregadas via data-include (hero, sobre, origem, …)
  components/   # Modelos reutilizáveis de referência (button, card, carousel-card)
  css/
    global.css      # Tokens visuais, reset, tipografia, botões, footer
    home.css        # Estilos específicos da home
    responsive.css  # Breakpoints responsivos
  js/
    main.js         # Carrega seções via fetch + data-include, despacha sisapec:sections-ready
    carousel.js     # Carrossel automático (5200ms), inicializado após sections-ready
  assets/
    icons/    # Favicon e ícone de fundo
    images/   # Fotos institucionais e de equipe
    logos/    # Logos SISAPEC, UNIFAL, FAPEMIG, CNPq, ILO
    videos/   # Vídeo institucional e HiPerGator
backend/      # Placeholder — estrutura reservada, nada executável ainda
docs/         # Documentação em Markdown (ARQUITETURA, BANCO_DE_DADOS, DEPLOY, …)
```

---

## Padrões críticos

### data-include (carregamento de seções)
`main.js` usa `fetch` para injetar seções HTML em elementos com `data-include`. O carrossel só deve ser inicializado depois do evento customizado `sisapec:sections-ready` — qualquer JS que dependa do DOM das seções deve ouvir esse evento.

### SISAPEC_SYSTEM_URL
A URL da plataforma (`https://app.sisapec.com/pt`) fica em `main.js:1` e é aplicada em todos os elementos com atributo `data-system-link`. Altere apenas nessa constante.

### Tokens visuais (CSS)
Definidos em `:root` no `global.css`. Paleta principal:
- `--color-primary`: `#2f97d8` (azul)
- `--color-secondary`: `#2bd8c3` (aqua/verde)
- `--gradient-brand`: gradiente aqua → azul escuro
- `--color-ink`: `#12243a` (texto escuro)

### Adicionar seção nova
1. Crie `frontend/sections/nome-da-secao.html`
2. Adicione `<div data-include="../sections/nome-da-secao.html"></div>` na página desejada
3. Adicione estilos específicos em `home.css` (ou novo arquivo CSS importado)

### Adicionar slide no carrossel
Duplique um `<article class="carousel-item …">` dentro de `frontend/sections/carrossel.html`. O JS gera os dots automaticamente.

### Adicionar membro da equipe
Duplique um `<article class="developer-card">` em `frontend/sections/desenvolvedores.html` e ajuste imagem, nome, cargo e descrição.

---

## Como rodar localmente

O site é estático, mas o `fetch` do `data-include` exige servidor HTTP (não abre direto via `file://`).

```bash
# Python (qualquer versão 3.x)
cd frontend && python3 -m http.server 8123
# abrir http://localhost:8123/pages/index.html
```

Ou qualquer servidor estático (Live Server, `npx serve`, nginx local).

---

## Backend (futuro)

A pasta `backend/` é um placeholder. Não há rotas, banco de dados ou servidor. Variáveis de ambiente documentadas em `.env.example`. Quando implementado, deverá incluir autenticação, JWT e conformidade com LGPD para dados sensíveis de saúde.

---

## Integrações ativas

| Destino | Onde |
|---|---|
| Plataforma SISAPEC | `https://app.sisapec.com/pt` (botão "Acessar sistema") |
| Contato Gmail | `isabelle.costa@unifal-mg.edu.br` (link mailto composto) |
| Instagram | `https://www.instagram.com/sisapec` |

---

## O que NÃO fazer

- Não edite o layout global via `home.css` — use `global.css` para tokens compartilhados.
- Não commite vídeos pesados diretamente — use Git LFS ou hospedagem externa.
- Não coloque lógica de negócio no frontend estático — reservar para o backend futuro.
- Não abra `index.html` direto no navegador (`file://`) — use um servidor HTTP.
