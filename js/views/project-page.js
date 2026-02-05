import { projects } from "/assets/data/projects.js";
import projectHeader from "/js/views/components/project-page/header/project-header.js";
import projectMain from "/js/views/components/project-page/main/project-main.js";
import projectFooter from "/js/views/components/project-page/main/project-footer.js";

export default function renderProjectPage() {
    const slug = new URLSearchParams(window.location.search).get("project");
    const project = projects[slug];

    const app = document.getElementById("app");

    if (!project) {
        app.innerHTML = "<p>Project not found.</p>";
        return;
    }

    try {
        const header = projectHeader();
        const main = projectMain(project);
        const footer = projectFooter();

        app.appendChild(header);
        app.appendChild(main);
        app.appendChild(footer);
    } catch (error) {
        console.error("Error rendering project page:", error);
        app.innerHTML = `<p>Error loading project: ${error.message}</p>`;
    }
}
