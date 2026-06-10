# Banco de dados

No estado atual, este repositório não possui banco de dados ativo.

## Situação atual

- Não há schema versionado.
- Não há migrations.
- Não há ORM configurado.
- Não há seeds.
- Não há conexão com banco no frontend institucional.

## Estrutura futura recomendada

Quando o backend for implementado, recomenda-se documentar:

- tecnologia do banco;
- tabelas;
- relacionamentos;
- migrations;
- índices;
- dados obrigatórios;
- política de backup;
- política de retenção;
- permissões de acesso;
- tratamento de dados pessoais.

## Exemplo de entidades futuras

Possíveis entidades, caso o projeto evolua para painel administrativo:

- `users`: usuários administrativos.
- `developers`: equipe exibida no site.
- `partners`: instituições e órgãos de fomento.
- `events`: ações, viagens, pesquisas e eventos.
- `media`: imagens e vídeos.
- `audit_logs`: registros administrativos.

## Cuidados com dados em saúde

Caso o sistema passe a armazenar dados clínicos ou pessoais:

- aplique LGPD;
- minimize dados coletados;
- proteja rotas administrativas;
- use criptografia quando adequado;
- restrinja acesso por perfil;
- evite dados pessoais em logs;
- documente finalidade, base legal e tempo de retenção;
- nunca use dados reais de pacientes em ambientes públicos.

## Migrations

Quando migrations forem adicionadas, documente aqui:

```bash
# exemplo futuro
npm run migration:run
npm run migration:rollback
```

No momento, esses comandos não existem.

