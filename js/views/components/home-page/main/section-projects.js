import section from "/js/views/components/commons/section.js";
import projectCard from "/js/views/components/home-page/main/helpers/project-card.js";
import { projects } from "/assets/data/projects.js";

export default function sectionProjects() {

    const sectionElement = section("projects", "projects", "Projects");

    const grid = document.createElement("div");
    grid.className = "projects-grid";

    // Create project cards
    const project1 = projectCard(
        projects.teamSafetyMonitor.title,
        projects.teamSafetyMonitor.shortDescription,
        projects.teamSafetyMonitor.projectLink,
        "team-safety-monitor",
        projects.teamSafetyMonitor.tags
    );

    const project2 = projectCard(
        projects.portfolioWebsite.title,
        projects.portfolioWebsite.shortDescription,
        projects.portfolioWebsite.projectLink,
        "portfolio-website",
        projects.portfolioWebsite.tags
    );

    const project3 = projectCard(
        projects.vanilla.title,
        projects.vanilla.shortDescription,
        projects.vanilla.projectLink,
        "vanilla-webserver",
        projects.vanilla.tags
    );

    const project4 = projectCard(
        projects.concurrentTcp.title,
        projects.concurrentTcp.shortDescription,
        projects.concurrentTcp.projectLink,
        "concurrent-tcp-chatserver",
        projects.concurrentTcp.tags
    );

    const project5 = projectCard(
        projects.bullseye.title,
        projects.bullseye.shortDescription,
        projects.bullseye.projectLink,
        "bullseye",
        projects.bullseye.tags
    );

    const project6 = projectCard(
        projects.taskManager.title,
        projects.taskManager.shortDescription,
        projects.taskManager.projectLink,
        "task-manager",
        projects.taskManager.tags
    );

    const project7 = projectCard(
        projects.financeTracker.title,
        projects.financeTracker.shortDescription,
        projects.financeTracker.projectLink,
        "finance-tracker",
        projects.financeTracker.tags
    );

    const project8 = projectCard(
        projects.libraryBookTracker.title,
        projects.libraryBookTracker.shortDescription,
        projects.libraryBookTracker.projectLink,
        "library-book-tracker",
        projects.libraryBookTracker.tags
    );

    grid.appendChild(project1);
    grid.appendChild(project2);
    grid.appendChild(project3);
    grid.appendChild(project4);
    grid.appendChild(project5);
    grid.appendChild(project6);
    grid.appendChild(project7);
    grid.appendChild(project8);

    sectionElement.appendChild(grid);

    return sectionElement;
    
}