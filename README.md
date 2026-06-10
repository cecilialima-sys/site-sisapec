# SISAPEC

Site institucional do SISAPEC, projeto de tecnologia em saúde voltado ao apoio do Processo de Enfermagem, organização de rotinas clínicas, integração ensino-serviço e divulgação de ações acadêmicas, científicas e institucionais.

## Descrição

O SISAPEC é uma plataforma digital multiprofissional concebida para apoiar profissionais de saúde na estruturação do Processo de Enfermagem e na organização de rotinas assistenciais em Atenção Primária à Saúde (APS), hospitais e outros serviços. O projeto utiliza recursos digitais e inteligência artificial como apoio ao raciocínio clínico, sem substituir o julgamento profissional.

Este repositório contém principalmente o site institucional do projeto, com páginas estáticas, seções reutilizáveis, assets visuais, vídeos, informações da equipe, órgãos de fomento, ações acadêmicas e redirecionamento para a plataforma operacional.

## Objetivo do projeto

Apresentar o SISAPEC de forma clara, profissional e acessível para profissionais de saúde, pesquisadores, estudantes, gestores, avaliadores acadêmicos e possíveis colaboradores.

## Problema que o sistema resolve

Serviços de saúde e projetos acadêmicos frequentemente enfrentam dificuldade para organizar informações clínicas, registros de cuidado, documentos institucionais, ações de extensão, evidências científicas e dados de acompanhamento. O SISAPEC busca reduzir a fragmentação dessas informações e apoiar uma prática clínica mais estruturada, segura e baseada em evidências.

## Principais funcionalidades apresentadas no site

- Apresentação institucional do SISAPEC.
- Redirecionamento para a plataforma operacional.
- Explicação sobre o sistema e sua origem.
- Vídeo institucional/demonstrativo.
- Seção de desenvolvedores e pesquisadoras.
- Seção de apoio institucional e órgãos de fomento.
- Carrossel automático com ações acadêmicas, eventos, visitas técnicas e registros do projeto.
- Rodapé institucional com links, contato e Instagram.

## Tecnologias utilizadas

- HTML5 semântico.
- CSS3 modular.
- JavaScript puro para carregamento de seções e carrossel.
- Assets locais em PNG, JPG, JPEG e MP4.
- Estrutura backend reservada para crescimento futuro.

No estado atual, o site não depende de framework frontend, gerenciador de pacotes, banco de dados ou backend ativo para funcionar.

## Estrutura de pastas

```txt
.
├── frontend/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   ├── logos/
│   │   └── videos/
│   ├── components/
│   ├── css/
│   ├── js/
│   ├── pages/
│   └── sections/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   └── services/
├── docs/
├── .github/
├── index.html
├── sistema.html
└── sistema-legado.html
```

## Como instalar localmente

Clone o repositório:

```bash
git clone https://github.com/cecilialima-sys/site-sisapec.git
cd site-sisapec
```

Este projeto é estático. Não há dependências obrigatórias para instalar no estado atual.

## Como configurar variáveis de ambiente

O site institucional não exige variáveis de ambiente atualmente. Mesmo assim, o arquivo `.env.example` foi criado para orientar configurações futuras.

Nunca envie arquivos `.env` reais para o GitHub.

```bash
cp .env.example .env
```

Edite o `.env` somente em ambiente local ou no painel seguro da plataforma de deploy.

## Como rodar o frontend

Como o site usa `fetch()` para carregar seções HTML, recomenda-se abrir por um servidor local, e não diretamente pelo arquivo.

Opção com Node.js:

```bash
npx serve .
```

Depois acesse a rota indicada pelo terminal, por exemplo:

```txt
http://localhost:3000/frontend/pages/index.html
```

Opção com Python:

```bash
python -m http.server 8123
```

Depois acesse:

```txt
http://127.0.0.1:8123/frontend/pages/index.html
```

## Como rodar o backend

O backend ainda não possui implementação executável. A pasta `backend/` está organizada como base para crescimento futuro, separando responsabilidades em controllers, services, repositories, routes, models, middlewares e config.

Quando o backend for implementado, documente aqui:

- comando de instalação;
- comando de desenvolvimento;
- porta utilizada;
- variáveis obrigatórias;
- autenticação;
- rotas públicas e protegidas.

## Banco de dados e migrations

Não há banco de dados ativo nem migrations neste repositório no estado atual.

Quando houver banco de dados, documente em `docs/BANCO_DE_DADOS.md`:

- tecnologia usada;
- tabelas;
- relacionamentos;
- migrations;
- seeds;
- política de backup;
- cuidados com dados sensíveis.

## Como acessar o sistema

O botão principal do site redireciona para:

```txt
https://app.sisapec.com/pt
```

No código, esse link está centralizado em `frontend/js/main.js` na constante `SISAPEC_SYSTEM_URL` e também em links HTML da página inicial.

## Usuários, permissões e níveis de acesso

O site institucional não possui login local, permissões ou áreas administrativas. O controle de usuários pertence à plataforma operacional externa do SISAPEC.

Quando houver backend ou painel administrativo neste repositório, recomenda-se documentar:

- perfis de usuário;
- permissões por perfil;
- rotas protegidas;
- regras de autenticação;
- políticas de auditoria e logs.

## Prints do sistema

Adicione imagens do sistema nesta seção quando desejar documentar a interface:

```md
![Página inicial](docs/assets/home.png)
![Carrossel de ações](docs/assets/carrossel.png)
```

## Status atual

Projeto em desenvolvimento acadêmico e institucional.

Estado atual:

- site institucional funcional;
- frontend estático organizado em páginas, seções, componentes, CSS e JS;
- backend reservado para evolução futura;
- documentação inicial do repositório criada;
- política de segurança e contribuição adicionadas.

## Próximos passos

- Revisar textos institucionais finais com a coordenação do projeto.
- Confirmar licença definitiva antes da publicação ampla.
- Definir estratégia para vídeos grandes: Git LFS, compressão ou hospedagem externa.
- Criar documentação técnica do backend quando ele for implementado.
- Adicionar prints oficiais em `docs/assets/`.
- Padronizar nomes finais de arquivos de mídia e remover duplicidades locais antes de versionar.

## Créditos e desenvolvedores

Equipe citada no site:

- Isabelle Sampaio Pinto Costa - coordenação científica.
- Anna Paula Mendes - doutoranda.
- Francini Castilha do Nascimento - mestranda.
- Yasmim Ribeiro Fracaroli - mestranda.
- Cecília Santos de Lima - graduanda.
- Letícia Alves - graduanda.

Contato institucional:

```txt
isabelle.costa@unifal-mg.edu.br
```

Instagram:

```txt
@sisapec
```

## Informações acadêmicas

O SISAPEC está associado a iniciativas de ensino, pesquisa, extensão, inovação em saúde digital, apoio ao Processo de Enfermagem e integração com serviços de saúde. O projeto conta com espaço institucional para órgãos de fomento e instituições parceiras, incluindo UNIFAL-MG, FAPEMIG, CNPq e ILO, conforme os materiais visuais presentes no site.

## Licença

A licença definitiva deve ser confirmada pela coordenação/responsável institucional antes da publicação final. Para projetos abertos, uma alternativa comum é a licença MIT, mas ela não deve ser aplicada sem validação institucional.

Consulte o arquivo `LICENSE`.

