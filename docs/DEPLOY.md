# Deploy

Este projeto pode ser publicado como site estático.

## Plataformas recomendadas

- GitHub Pages.
- Netlify.
- Vercel.
- Render Static Site.
- Servidor institucional da universidade.

## Atenção a vídeos grandes

O arquivo `frontend/assets/videos/sisapec-video.mp4` é grande e pode ultrapassar limites de upload do GitHub se versionado sem Git LFS.

Opções recomendadas:

1. Usar Git LFS para arquivos MP4.
2. Comprimir o vídeo.
3. Hospedar o vídeo em serviço externo e incorporar por URL.
4. Publicar o vídeo em plataforma institucional ou serviço de mídia.

## Git LFS

Se for versionar vídeos no GitHub, instale e configure Git LFS:

```bash
git lfs install
git lfs track "*.mp4"
git add .gitattributes
```

Depois adicione os vídeos normalmente:

```bash
git add frontend/assets/videos/
```

## Deploy no GitHub Pages

1. Suba o repositório no GitHub.
2. Acesse `Settings > Pages`.
3. Selecione a branch principal.
4. Configure a pasta de publicação como raiz do repositório.
5. Use a rota:

```txt
/frontend/pages/index.html
```

Se desejar que a raiz abra automaticamente a home, mantenha o arquivo `index.html` na raiz.

## Deploy no Render

1. Crie um novo Static Site.
2. Conecte o repositório GitHub.
3. Configure:

```txt
Build command: vazio
Publish directory: .
```

4. Após publicar, acesse:

```txt
https://seu-dominio/frontend/pages/index.html
```

## Deploy no Vercel

1. Importe o repositório.
2. Use configuração de projeto estático.
3. Mantenha a raiz como diretório de publicação.
4. Não configure variáveis sensíveis no repositório; use o painel da plataforma.

## Deploy com Supabase

Supabase não é necessário para o site institucional atual, mas pode ser usado futuramente para:

- autenticação;
- banco de dados;
- storage de imagens;
- APIs auxiliares.

Nunca exponha chaves privadas do Supabase no frontend.

