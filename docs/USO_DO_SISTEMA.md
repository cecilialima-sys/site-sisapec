# Uso do sistema

Este documento descreve como navegar no site institucional do SISAPEC.

## Página inicial

A home apresenta:

1. Logo institucional do SISAPEC.
2. Botão de acesso à plataforma.
3. Botão de contato.
4. Descrição do SISAPEC.
5. Origem do projeto.
6. Vídeo institucional.
7. Desenvolvedores e pesquisadoras.
8. Apoio institucional.
9. Carrossel com ações acadêmicas, eventos e pesquisas.
10. Rodapé institucional.

## Acessar sistema

O botão "Acessar sistema" direciona para:

```txt
https://app.sisapec.com/pt
```

Esse link deve ser mantido atualizado em `frontend/js/main.js` e nos pontos HTML em que for usado diretamente.

## Contato

O botão "Contato" abre o Gmail com destinatário:

```txt
isabelle.costa@unifal-mg.edu.br
```

## Carrossel

O carrossel funciona automaticamente e possui:

- troca automática de slides;
- botões de anterior e próximo;
- indicadores;
- pausa ao passar o mouse;
- pausa ao receber foco de teclado.

Para adicionar novos slides, edite:

```txt
frontend/sections/carrossel.html
```

Para ajustar enquadramento de imagens, edite:

```txt
frontend/css/home.css
```

## Vídeo institucional

O vídeo principal fica em:

```txt
frontend/assets/videos/sisapec-video.mp4
```

A seção de vídeo fica em:

```txt
frontend/sections/video.html
```

## Equipe

Os cards de desenvolvedores ficam em:

```txt
frontend/sections/desenvolvedores.html
```

As fotos ficam em:

```txt
frontend/assets/images/
```

## Logos de parceiros

As logos ficam em:

```txt
frontend/assets/logos/
```

A seção de apoio fica em:

```txt
frontend/sections/apoio.html
```

