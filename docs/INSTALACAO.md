# Instalação e execução local

Este guia explica como rodar o site institucional do SISAPEC em ambiente local.

## Pré-requisitos

Use uma das opções abaixo:

- Node.js 18 ou superior, para usar `npx serve`.
- Python 3, para usar `python -m http.server`.
- Qualquer servidor estático equivalente.

## Clonar o repositório

```bash
git clone https://github.com/cecilialima-sys/site-sisapec.git
cd site-sisapec
```

## Instalar dependências

No estado atual, o projeto não possui `package.json` nem dependências obrigatórias.

## Configurar variáveis de ambiente

O frontend estático não exige variáveis de ambiente para funcionar.

Para integrações futuras, crie um `.env` local a partir do exemplo:

```bash
cp .env.example .env
```

Nunca envie `.env` real ao GitHub.

## Rodar com Node.js

```bash
npx serve .
```

Acesse a URL exibida no terminal. Exemplo:

```txt
http://localhost:3000/frontend/pages/index.html
```

## Rodar com Python

```bash
python -m http.server 8123
```

Acesse:

```txt
http://127.0.0.1:8123/frontend/pages/index.html
```

## Por que usar servidor local?

A página usa `fetch()` em `frontend/js/main.js` para carregar arquivos HTML de `frontend/sections/`. Navegadores podem bloquear esse carregamento quando a página é aberta diretamente via `file://`.

## Rotas principais

- Home: `/frontend/pages/index.html`
- Redirecionamento legado/sistema: `/frontend/pages/sistema.html`
- Entrada raiz: `/index.html`

## Verificação rápida

Depois de subir o servidor local, confirme:

- a página inicial carrega;
- a logo aparece;
- o botão "Acessar sistema" aponta para `https://app.sisapec.com/pt`;
- o carrossel troca imagens automaticamente;
- o vídeo institucional carrega;
- os links de contato abrem o Gmail.

