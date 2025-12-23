# Portfolio Website

This repository contains the source code for my personal portfolio website, built to showcase software engineering projects in a clean, structured, and easily extensible way.

The website is implemented using vanilla web technologies and focuses on clarity, maintainability, and separation of concerns.

---

## Project Overview

This portfolio website presents selected projects with a reusable project detail page.
Project data is centralized and dynamically rendered using JavaScript, avoiding duplicated HTML and making it easy to add or update projects.

The goal of this project is both to present my work and to apply fundamental front-end and software design principles in a practical way.

---

## Features

- Responsive layout
- Dynamic project rendering using JavaScript
- Centralized project data management
- Reusable project detail page (`project.html`)
- Clean and minimal UI
- Easy to extend with new projects

---

## Technologies Used

- HTML5
- CSS3 (custom styles)
- JavaScript (ES6+)
- Git & GitHub
- GitHub Pages (deployment)

---

## Project Structure

```
/
├── index.html
├── project.html
├── favicon.ico
│
├── assets/
│   ├── css/
│   │   └── styles.css
│   │
│   └── img/
│       ├── avatar.png
│       ├── avatar-logo.png
│       │
│       └── projects/
│           ├── bullseye/
│           │   └── bullseye.jpeg
│           ├── concurrent-tcp-chatserver/
│           │   └── concurrent-tcp-chatserver.jpeg
│           ├── portfolio-website/
│           │   └── portfolio-website.png
│           ├── task-manager/
│           │   └── task-manager.jpeg
│           └── vanilla-webserver/
│               └── vanilla-webserver.jpeg
│
└── js/
    ├── scripts.js
    ├── project.js
    └── data/
        └── projects.js
```

---

## How It Works

### Project Data

All project information is stored in a centralized JavaScript file:

```
js/data/projects.js
```

Each project includes:
- A unique identifier (slug)
- Title and description
- Technologies used
- Image path
- Links to the GitHub repository and live demo (if available)

---

### Dynamic Project Pages

- The main page lists all projects dynamically.
- Each project links to `project.html` with a query parameter identifying the project.
- JavaScript reads the URL parameter and loads the corresponding project data into the page.

This approach allows a single reusable template for all project detail pages.

---

## Live Demo

🔗 https://kvilarinho.github.io

---

## Future Improvements

- Project filtering by technology
- Improved accessibility (ARIA roles, keyboard navigation)
- UI animations and transitions
- Improved mobile layout
- Multilingual support

---

## Status

This project is under active development and will continue to evolve as new projects and features are added.
