# Backend preparado para crescimento futuro

Este projeto estático não exige backend para a nova página inicial.

Estrutura reservada para uma futura área administrativa:

- `controllers`: entrada das requisições HTTP.
- `services`: regras de negócio.
- `repositories`: acesso a dados.
- `routes`: definição de rotas.
- `models`: modelos e contratos de dados.
- `middlewares`: autenticação, autorização e validações transversais.
- `config`: configuração por ambiente.

Quando houver cadastro administrativo de desenvolvedores, viagens, pesquisas ou imagens, mantenha dados sensíveis em variáveis de ambiente e proteja rotas de escrita com autenticação.
