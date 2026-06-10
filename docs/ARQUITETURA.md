# Arquitetura do projeto

O repositório está organizado como um site institucional estático, com separação entre páginas, seções, componentes, estilos, scripts e assets.

## Visão geral

```txt
frontend/pages/index.html
        |
        | carrega seções via data-include
        v
frontend/js/main.js
        |
        +-- frontend/sections/*.html
        +-- frontend/css/*.css
        +-- frontend/js/carousel.js
        +-- frontend/assets/
```

## Frontend

O frontend é composto por HTML, CSS e JavaScript puro.

### Páginas

- `frontend/pages/index.html`: página inicial institucional.
- `frontend/pages/sistema.html`: página preparada para redirecionamento/compatibilidade.

### Seções

- `hero.html`: logo, chamada institucional, botões de acesso e contato.
- `sobre.html`: descrição do SISAPEC e principais recursos.
- `origem.html`: contexto de surgimento do projeto.
- `video.html`: vídeo institucional.
- `desenvolvedores.html`: equipe do projeto.
- `apoio.html`: instituições, métricas e órgãos de fomento.
- `carrossel.html`: ações acadêmicas, eventos, visitas e pesquisas.

### Componentes

A pasta `frontend/components/` guarda modelos HTML reutilizáveis para botões, cards e itens de carrossel. Eles servem como referência para novas seções e padronização futura.

### CSS

- `global.css`: tokens visuais, reset, base tipográfica e estilos globais.
- `home.css`: estilos específicos da home.
- `responsive.css`: ajustes responsivos.

### JavaScript

- `main.js`: carrega as seções HTML e centraliza o link externo da plataforma.
- `carousel.js`: controla o carrossel automático, botões, indicadores e vídeo.

## Backend

A pasta `backend/` está reservada para crescimento futuro. Ela ainda não possui servidor executável, banco de dados ou rotas implementadas.

Estrutura prevista:

- `controllers`: entrada das requisições HTTP.
- `services`: regras de negócio.
- `repositories`: acesso a dados.
- `routes`: definição de rotas.
- `models`: modelos e contratos de dados.
- `middlewares`: autenticação, autorização e validações.
- `config`: configuração por ambiente.

## Banco de dados

Não há banco de dados ativo no estado atual.

Quando houver banco, recomenda-se separar:

- schema/migrations;
- seeds;
- conexão;
- repositories;
- documentação de tabelas;
- políticas de backup e retenção.

## Integrações

Integrações atuais:

- Plataforma SISAPEC: `https://app.sisapec.com/pt`.
- Contato via Gmail para `isabelle.costa@unifal-mg.edu.br`.
- Instagram: `https://www.instagram.com/sisapec`.

Integrações futuras previstas:

- API própria.
- Banco de dados.
- Autenticação.
- Painel administrativo.
- Serviços de armazenamento de mídia.

## Observações de manutenção

- Evite editar tudo em um único arquivo.
- Adicione novas seções em `frontend/sections/`.
- Adicione novos estilos nos arquivos CSS apropriados.
- Coloque imagens finais em `frontend/assets/images/`.
- Coloque logos em `frontend/assets/logos/`.
- Coloque vídeos em `frontend/assets/videos/`, preferencialmente usando Git LFS ou hospedagem externa.

