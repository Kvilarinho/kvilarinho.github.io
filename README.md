# Portfolio Website

This repository contains the source code for my personal portfolio website, built to showcase software engineering projects in a clean, structured, and scalable way.

The website is implemented using vanilla JavaScript with a component-based architecture, focusing on maintainability, reusability, and separation of concerns.

---

## Architecture Evolution

This project started as a traditional static HTML website and was refactored into a **component-based architecture** for learning purposes and to make it easier to scale and maintain.

**Version History:**
- `v1.0-html-baseline` - Initial version with HTML-structure approach
- `main` (current) - Component-based architecture with MVC pattern

---

## Current Architecture

The website now follows a **component-based structure** similar to modern frameworks, but using vanilla JavaScript:

### How It Works

1. **HTML files** are minimal - just a container (`<body id="app">`)
2. **Controllers** initialize the page and call the view layer
3. **Views** assemble components and append them to the DOM
4. **Components** create and return DOM elements (not HTML strings)

This approach makes it easy to:
- Add new features without touching HTML
- Reuse components across different pages
- Test components independently
- Scale the project as it grows

---

## Features

- Responsive layout
- Component-based architecture (vanilla JS)
- Dynamic project rendering
- Centralized project data management
- MVC-inspired structure
- Clean and minimal UI
- Easy to extend with new projects

---

## Technologies Used

- HTML5
- CSS3 (custom styles)
- JavaScript (ES6+ modules)
- Git & GitHub
- GitHub Pages (deployment)

---

## Live Demo

🔗 https://kvilarinho.github.io

---

## Learning Objectives

This refactor was done as a learning exercise to:
- Practice component-based architecture without frameworks
- Understand separation of concerns (MVC pattern)
- Improve code organization and scalability
- Make the codebase easier to maintain and extend

---

## Future Improvements

- Migrate to React framework
- Convert to Single Page Application (SPA)
- Project filtering by technology
- Improved accessibility (ARIA roles, keyboard navigation)
- UI animations and transitions
- Improved mobile layout
- Multilingual support

---

## Status

This project is under active development and will continue to evolve as new projects and features are added.

Author: Katia Vilarinho  
LinkedIn: https://www.linkedin.com/in/kátia-vilarinho            
Portfolio: https://katiavilarinho.dev

