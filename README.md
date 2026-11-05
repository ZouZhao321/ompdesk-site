# ompdesk-site

Landing page for [ompdesk](https://github.com/ZouZhao321/ompdesk), the browser workspace for the omp coding
agent.

Static files only: no build step, no framework. Cloudflare Pages serves the repository root.

| Path | Content |
| --- | --- |
| `index.html` | English page |
| `zh/index.html` | Chinese page |
| `assets/style.css` | All styles; design tokens live at the top |
| `assets/app.js` | Copy-to-clipboard for the install commands |
| `assets/hero.png` | Brand card from the ompdesk README |
| `assets/omp-icon.svg` | Product mark |

## Edit

Open `index.html` or `zh/index.html` in a browser. Keep both language versions in sync: every section exists in
both files, with the same order and the same markup classes.

## Deploy

Connected to Cloudflare Pages through Git integration. Pushing to `main` deploys; other branches produce preview
deployments at `<branch>.<project>.pages.dev`.

Build command is empty and the build output directory is `/`, because the repository already contains the files to
serve.

## Facts

Copy follows the ompdesk README. Check the source before adding a claim: version, port, model roles, authentication
and deployment rules all live in that repository.
