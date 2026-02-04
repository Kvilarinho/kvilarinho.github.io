import sectionHero from "/js/views/components/home-page/main/section-hero.js";
import sectionAbout from "/js/views/components/home-page/main/section-about.js";
import sectionExperience from "/js/views/components/home-page/main/section-experience.js";
import sectionEducation from "/js/views/components/home-page/main/section-education.js";
import sectionProjects from "/js/views/components/home-page/main/section-projects.js";

export default function main() {
    const main = document.createElement("main");
    main.id = "top";
    
    // Sections
    const sectionHeroElement = sectionHero();
    const sectionAboutElement = sectionAbout();
    const sectionExperienceElement = sectionExperience();
    const sectionEducationElement = sectionEducation();
    const sectionProjectsElement = sectionProjects();

    main.appendChild(sectionHeroElement);
    main.appendChild(sectionAboutElement);
    main.appendChild(sectionExperienceElement);
    main.appendChild(sectionEducationElement);
    main.appendChild(sectionProjectsElement);
    
    return main;
}