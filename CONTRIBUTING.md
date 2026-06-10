# Guia de contribuição

Obrigado pelo interesse em contribuir com o SISAPEC.

Este documento orienta contribuições de forma organizada, segura e compatível com um projeto acadêmico e institucional.

## Como clonar o projeto

```bash
git clone https://github.com/cecilialima-sys/site-sisapec.git
cd site-sisapec
```

## Como criar uma branch

Crie uma branch a partir da branch principal:

```bash
git checkout main
git pull origin main
git checkout -b tipo/descricao-curta
```

## Padrão de nomes de branches

Use nomes curtos, sem espaços e em minúsculas:

- `docs/atualiza-readme`
- `feat/carrossel-acoes`
- `fix/link-plataforma`
- `style/ajuste-layout-home`
- `chore/organiza-assets`

## Como fazer commits organizados

Use mensagens claras:

```bash
git commit -m "docs: adiciona guia de instalação"
git commit -m "fix: corrige link de contato"
git commit -m "style: ajusta responsividade do carrossel"
```

Prefixos recomendados:

- `docs`: documentação.
- `feat`: nova funcionalidade.
- `fix`: correção.
- `style`: ajustes visuais sem alterar regra de negócio.
- `refactor`: melhoria interna sem mudar comportamento.
- `chore`: manutenção.

## Como abrir Pull Requests

Antes de abrir um Pull Request:

- verifique se a página inicial carrega corretamente;
- teste os links principais;
- confira responsividade básica em desktop e celular;
- não envie arquivos `.env`;
- não envie credenciais, tokens ou senhas;
- descreva claramente o que foi alterado.

## Como reportar bugs

Abra uma issue usando o template de bug e informe:

- o problema observado;
- passos para reproduzir;
- resultado esperado;
- navegador/dispositivo;
- prints, se possível.

Não publique dados pessoais, credenciais ou informações sensíveis em issues públicas.

## Como sugerir melhorias

Abra uma issue usando o template de melhoria e explique:

- objetivo da melhoria;
- público beneficiado;
- impacto esperado;
- telas ou seções afetadas.

## Padrões de código

- Mantenha HTML semântico.
- Use `alt` em imagens.
- Preserve a separação entre `pages`, `sections`, `components`, `css`, `js` e `assets`.
- Evite duplicação de estilos.
- Não altere regras de negócio sem autorização.
- Prefira nomes de arquivos sem espaços, acentos ou caracteres especiais.

## Cuidados antes de enviar alterações

- Revise o `.gitignore`.
- Verifique se não há arquivos temporários.
- Confirme que arquivos grandes estão em Git LFS ou hospedagem apropriada.
- Rode um servidor local e teste a página.
- Confira se o botão "Acessar sistema" continua apontando para `https://app.sisapec.com/pt`.

