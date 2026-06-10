# Política de segurança

Este projeto envolve comunicação institucional sobre tecnologia aplicada à saúde. Mesmo quando o repositório contém apenas site estático, é necessário manter boas práticas de segurança.

## Como reportar vulnerabilidades

Não publique vulnerabilidades, credenciais, tokens, dados pessoais ou informações sensíveis em issues públicas.

Reporte problemas de segurança pelo contato:

```txt
isabelle.costa@unifal-mg.edu.br
```

Inclua, quando possível:

- descrição do problema;
- passos para reproduzir;
- impacto potencial;
- arquivos ou rotas afetadas;
- sugestão de correção, se houver.

## Dados sensíveis

Nunca envie ao GitHub:

- arquivos `.env`;
- senhas;
- tokens;
- chaves privadas;
- dumps de banco;
- dados de pacientes;
- planilhas com dados pessoais;
- credenciais de serviços externos.

## Chaves, tokens e senhas

- Use variáveis de ambiente.
- Use o arquivo `.env.example` apenas com valores fictícios.
- Troque imediatamente qualquer segredo exposto por engano.
- Revogue chaves comprometidas em seus provedores.

## Boas práticas

- Mantenha `.env` no `.gitignore`.
- Revise arquivos antes de `git add .`.
- Não exponha dados pessoais em prints, vídeos ou arquivos de teste.
- Proteja futuras rotas administrativas com autenticação e autorização.
- Registre logs sem dados sensíveis.
- Use HTTPS em ambientes publicados.

## Orientação sobre `.env`

O arquivo `.env.example` pode ir para o GitHub.

Arquivos reais como `.env`, `.env.local`, `.env.production` e similares não devem ser versionados.

