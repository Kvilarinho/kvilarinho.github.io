import sectionHero from "/js/views/components/home-page/main/section-hero.js";
import sectionAbout from "/js/views/components/home-page/main/section-about.js";

export default function main() {
    const main = document.createElement("main");
    main.id = "top";
    
    const sectionHeroElement = sectionHero();
    const sectionAboutElement = sectionAbout();

    main.appendChild(sectionHeroElement);
    main.appendChild(sectionAboutElement);
    
    return main;
}