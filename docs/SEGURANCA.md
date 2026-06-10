# Segurança

Este documento complementa o arquivo `SECURITY.md` com orientações técnicas para manutenção do SISAPEC.

## Estado atual

O site institucional é estático e não possui autenticação local, banco de dados ou API própria ativa.

Mesmo assim, devem ser protegidos:

- arquivos `.env`;
- credenciais;
- imagens com dados sensíveis;
- vídeos com informações pessoais;
- dados clínicos ou de pacientes;
- documentos institucionais não autorizados.

## Autenticação futura

Caso seja criado painel administrativo:

- use autenticação segura;
- aplique senhas fortes;
- use hash de senha com algoritmo apropriado;
- implemente expiração de sessão;
- proteja rotas administrativas;
- registre auditoria de ações relevantes;
- restrinja permissões por perfil.

## Autorização

Cada rota administrativa deve validar:

- usuário autenticado;
- perfil autorizado;
- escopo da ação;
- permissões de leitura e escrita.

## Tokens e chaves

- Nunca coloque tokens no código.
- Nunca envie `.env` real para o GitHub.
- Use variáveis de ambiente da plataforma de deploy.
- Revogue chaves expostas imediatamente.
- Use chaves públicas apenas quando forem realmente públicas.

## Proteção de rotas

Quando houver backend, rotas de escrita devem exigir autenticação.

Exemplos de rotas que devem ser protegidas:

- cadastro de eventos;
- upload de imagens;
- edição de desenvolvedores;
- edição de parceiros;
- atualização de vídeos;
- gerenciamento de usuários.

## Dados pessoais e LGPD

Antes de publicar imagens, vídeos ou documentos:

- confirme autorização de uso;
- evite expor dados pessoais sem consentimento;
- oculte dados clínicos;
- revise telas que exibem nomes, prontuários, documentos ou informações de pacientes.

## Checklist antes de publicar

- `.env` está no `.gitignore`.
- Não há credenciais no código.
- Não há dumps de banco no repositório.
- Vídeos e imagens foram revisados.
- Arquivos grandes estão em Git LFS ou hospedagem externa.
- Links externos usam HTTPS.
- Contatos institucionais foram confirmados.

