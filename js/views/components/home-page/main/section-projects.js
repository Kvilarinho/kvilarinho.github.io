import section from "/js/views/components/commons/section.js";
import projectCard from "/js/views/components/home-page/main/helpers/project-card.js";
import { projects } from "/assets/data/projects.js";

export default function sectionProjects() {

    const sectionElement = section("projects", "projects", "Projects");

    const grid = document.createElement("div");
    grid.className = "projects-grid";

    const project1 = projectCard(
        `${projects.teamSafetyMonitor.title}`,
        `${projects.teamSafetyMonitor.shortDescription}`,
        `${projects.teamSafetyMonitor.projectLink}`
    );

    const project2 = projectCard(
        `${projects.portfolioWebsite.title}`,
        `${projects.portfolioWebsite.shortDescription}`,
        `${projects.portfolioWebsite.projectLink}`
    );

    const project3 = projectCard(
        `${projects.vanilla.title}`,
        `${projects.vanilla.shortDescription}`,
        `${projects.vanilla.projectLink}`
    );

    const project4 = projectCard(
        `${projects.concurrentTcp.title}`,
        `${projects.concurrentTcp.shortDescription}`,
        `${projects.concurrentTcp.projectLink}`
    );

    const project5 = projectCard(
        `${projects.bullseye.title}`,
        `${projects.bullseye.shortDescription}`,
        `${projects.bullseye.projectLink}`
    );

    const project6 = projectCard(
        `${projects.taskManager.title}`,
        `${projects.taskManager.shortDescription}`,
        `${projects.taskManager.projectLink}`
    );

    grid.appendChild(project1);
    grid.appendChild(project2);
    grid.appendChild(project3);
    grid.appendChild(project4);
    grid.appendChild(project5);
    grid.appendChild(project6);

    sectionElement.appendChild(grid);

    return sectionElement;
    
}