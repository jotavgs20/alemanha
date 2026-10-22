# Stiftheld — página de vendas

Site estático completo, sem instalação de dependências ou etapa de compilação.

## Publicar na Vercel

1. Extraia este ZIP.
2. Envie os arquivos extraídos para um repositório no GitHub. `index.html` deve ficar na raiz do repositório.
3. Na Vercel, crie um projeto e importe esse repositório.
4. Escolha **Other** em Framework Preset. Não use comando de build. Use **.** como Output Directory, caso seja solicitado.
5. Clique em **Deploy**.

## Links

Os três botões já abrem https://pay.hotmart.com/I108155387A.

As páginas **Impressum**, **Datenschutz** e **AGB** foram incluídas em alemão e conectadas no rodapé. Os dados usados são JBM Trading, responsável Mark Straith, Steinstraße 37, 46446 Emmerich am Rhein, Alemanha e germanytrading@gmail.com. Leia `REVISAO-LEGAL.md` antes de publicar.

## Arquivos

- `index.html`: conteúdo em alemão.
- `styles.css`: identidade e responsividade; duas colunas no celular.
- `config.js`: checkout e links do rodapé.
- `app.js`: aplica os links configurados.
- `assets/`: imagens, fontes Andika e vídeo MP4 local.
- `vercel.json`: configuração de hospedagem.

O vídeo tem 14 segundos, controles, áudio silenciado e não inicia automaticamente. A frase “am Tag” usa espaço inquebrável. O site não depende de fontes ou imagens externas.

Para testar localmente, abra `index.html` no navegador. Para editar o preço ou o conteúdo, altere `index.html`.
