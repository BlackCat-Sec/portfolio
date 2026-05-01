# Mokshith H S Portfolio

Premium cybersecurity + AI/ML personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React. The design is optimized for GitHub Pages and structured so private projects can still be presented professionally with editable project cards.

## Features

- Dark premium cyber/AI visual system with glassmorphism, glowing accents, terminal styling, and animated grid/particle background
- Responsive layout for mobile, tablet, and desktop
- Reusable React components with content driven from `src/data/portfolioData.js`
- Featured project cards that support `Private`, `In Progress`, and `Public` states without broken links
- SEO meta tags, Open Graph social preview image, custom 404 page, and a live ATS-friendly resume download
- GitHub Actions workflow for automatic GitHub Pages deployment

## Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

```text
src/
  assets/
  components/
  data/
  pages/
  App.jsx
  main.jsx
.github/workflows/deploy.yml
public/
README.md
vite.config.js
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Editing Your Content

The main content lives in `src/data/portfolioData.js`.

Update these areas first:

- Personal details, project descriptions, and social links
- Private project entries and CTA labels
- Skills, certifications, and achievements
- Resume file reference under `portfolio.resume`

Static editable assets:

- `public/Mokshith-HS-Resume.pdf`
  Recruiter-facing resume download currently used by the site
- `public/Mokshith-HS-Resume.docx`
  Editable DOCX version of the resume
- `public/Mokshith-HS-Resume.html`
  Print-friendly HTML source used to generate the PDF
- `public/og-cover.png`
  Open Graph image used for social previews
- `public/favicon.svg`
  Simple brand icon you can replace later
- `scripts/generate_resume.py`
  Resume source generator for the editable DOCX build

## GitHub Pages Deployment

This project is already configured for GitHub Pages deployment through GitHub Actions.

### How base path handling works

- If your repository is a project site like `portfolio` or `mokshith-portfolio`, the workflow automatically builds with `/<repo-name>/`
- If your repository is a user site like `username.github.io`, the workflow automatically builds with `/`

That means you usually do **not** need to hardcode the repository name inside the project.

### Enable GitHub Pages

1. Push the project to GitHub.
2. Make sure your default deployment branch is `main`.
3. In your repository settings, open `Pages`.
4. Set the source to `GitHub Actions`.
5. Push changes to `main` and the workflow will deploy automatically.

If your default branch is not `main`, update `.github/workflows/deploy.yml`.

## Local Production Build With a Custom Base Path

If you want to test the production build locally with a repository-style base path:

### PowerShell

```powershell
$env:VITE_BASE_PATH="/your-repository-name/"
npm run build
Remove-Item Env:VITE_BASE_PATH
```

### Bash

```bash
VITE_BASE_PATH="/your-repository-name/" npm run build
```

## Recommended Post-Launch Edits

- Update the resume content in `public/Mokshith-HS-Resume.html` or `scripts/generate_resume.py` as your experience grows
- Add live project links or case study URLs inside `src/data/portfolioData.js`
- Keep `src/data/portfolioData.js` in sync if your email, resume path, or social links change
- Update `public/og-cover.png` if you want a custom social preview later

## License

Use this project as your personal portfolio base and customize it freely.
