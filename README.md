# CustomerFirst Architecture

A standalone Markdown-first reference site for **Architecture at CustomerFirst**, designed for GitHub Pages using MkDocs Material with a restrained GOV.UK-inspired presentation style.

## What is included

- Architecture at CustomerFirst landing page
- Four-part model: Principles, Domains, Evidence and Assurance
- Eight architecture principles
- Six architecture domains
- Evidence-led delivery guidance
- Test & Learn Experiment guidance
- Proportional assurance guidance
- Continuous Architecture model
- Lightweight patterns and templates
- Responsive Mermaid diagrams
- Custom GOV.UK-ish / CustomerFirst styling
- GitHub Pages deployment workflow

## Run locally

```bash
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
mkdocs serve
```

Open the local URL printed by MkDocs, normally `http://127.0.0.1:8000/`.

## Deploy to GitHub Pages

1. Create a GitHub repository and copy these files into it.
2. Update `site_url`, `repo_url` and `repo_name` in `mkdocs.yml`.
3. Push to the `main` branch.
4. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
5. The included workflow will build and deploy the site.

## Content model

All substantive guidance lives under `docs/` as Markdown. Styling lives in `docs/stylesheets/customerfirst.css`. Mermaid diagrams remain editable as text inside the Markdown source.

The site intentionally treats diagrams, patterns and guidance as version-controlled content rather than embedded screenshots or external design assets.
