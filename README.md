# APB Engenharia — site institucional

Primeira versão funcional do site da **APB Projetos e Serviços de Engenharia** preparada para GitHub Pages.

## Arquivos
- `index.html` — página principal
- `styles.css` — identidade visual e responsividade
- `script.js` — menu mobile e pequenos comportamentos
- `assets/` — imagens e logomarca
- `CNAME` — domínio personalizado `apbengenharia.com.br`
- `.nojekyll` — evita processamento Jekyll

## Publicar no GitHub Pages
1. Envie todo o conteúdo desta pasta para a raiz do repositório `apbengenharia-site`.
2. No GitHub: **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Branch: `main` e pasta `/ (root)`.
5. Salve e aguarde a publicação.
6. Em **Custom domain**, informe `apbengenharia.com.br` caso não apareça automaticamente.

## DNS no Registro.br
Após o GitHub fornecer as instruções de domínio, configure os registros DNS no Registro.br. Para o domínio raiz, o GitHub Pages normalmente usa registros A e/ou ALIAS/ANAME conforme a orientação exibida em Settings → Pages. Para `www`, use CNAME apontando para o endereço Pages da conta.

> Recomenda-se confirmar os valores DNS diretamente na tela do GitHub Pages antes de alterar o Registro.br.
