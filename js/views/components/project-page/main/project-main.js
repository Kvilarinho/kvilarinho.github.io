import projectHero from "/js/views/components/project-page/main/project-hero.js";
import projectDescription from "/js/views/components/project-page/main/project-description.js";
import technologiesSection from "/js/views/components/project-page/main/technologies-section.js";
import githubLink from "/js/views/components/project-page/main/github-link.js";

export default function projectMain(project) {
    const main = document.createElement("main");

    const projectSections = document.createElement("section");
    projectSections.className = "project-sections";

    // Sections
    const heroElement = projectHero(project);
    const descriptionElement = projectDescription(project);
    const technologiesElement = technologiesSection(project);

    projectSections.appendChild(heroElement);
    projectSections.appendChild(descriptionElement);
    projectSections.appendChild(technologiesElement);

    // GitHub link (outside project-sections)
    const githubLinkElement = githubLink(project);

    main.appendChild(projectSections);
    main.appendChild(githubLinkElement);

    return main;
}
