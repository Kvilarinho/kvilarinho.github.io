# Portfolio Website

Personal portfolio website built to showcase software engineering projects, skills, and experience.

---

## Evolution

| Version | Architecture |
|---------|-------------|
| `v1.0-html-baseline` | Static HTML |
| `v2.0-vanilla-js` | Vanilla JS, component-based, MVC pattern |
| `main` | React, Vite, SPA with routing |

---

## Current Architecture

Built with **React** and **Vite**, structured as a Single Page Application with client-side routing.

### Stack
- **Framework:** React 19 + Vite
- **Routing:** React Router DOM
- **Styling:** Custom CSS (carried over and extended from original)
- **Data:** GitHub Actions fetches project data from GitHub API daily and generates a static `projects.json`
- **Carousel:** Embla Carousel with autoplay
- **Markdown:** react-markdown + remark-gfm for project READMEs
- **Icons:** react-icons
- **Deployment:** GitHub Actions → GitHub Pages

### Pages
- `/` — Hero with introduction and call to action
- `/about` — Background and story
- `/experience` — Work experience
- `/education` — Academic background
- `/skills` — Technical and soft skills
- `/projects` — Auto-updating carousel of GitHub projects
- `/project/:slug` — Individual project page with rendered README
- `/contacts` — Contact links

### GitHub Action
A scheduled workflow runs daily, fetches all public repos via the GitHub API, extracts metadata (description, topics, language, README), and commits a static `projects.json` to the repo — keeping the portfolio always up to date without any manual intervention.

---

## Live Demo

🔗 [katiavilarinho.dev](https://katiavilarinho.dev)

---

## Author

Kátia Vilarinho
[LinkedIn](https://www.linkedin.com/in/kátia-vilarinho) · [Portfolio](https://katiavilarinho.dev)