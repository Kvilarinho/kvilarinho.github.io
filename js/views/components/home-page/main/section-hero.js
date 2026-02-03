import img from "/js/views/components/commons/img.js";

export default function sectionHero() {
    const section = document.createElement("section");
    section.className = "hero";

    const heroInner = document.createElement("div");
    heroInner.className = "hero-inner";

    const heroImage = img("assets/img/avatar.png", "Avatar", "avatar", "128px");

    const heroTitle = document.createElement("h1");
    heroTitle.id = "hero-title";
    heroTitle.innerHTML = "Hi, I'm <span class='accent'>Kátia</span>.";

    const heroLead = document.createElement("p");
    heroLead.className = "lead";
    heroLead.innerHTML = "Biomedical Laboratory Technician currently transitioning into " +
        "<strong>Software Development</strong>, I bring analytical thinking, precision and structure " +
        "from my scientific background into coding. I enjoy solving logical challenges, and create clean " +
        "meaningful solutions through code.";

    heroInner.appendChild(heroImage);
    heroInner.appendChild(heroTitle);
    heroInner.appendChild(heroLead);

    section.appendChild(heroInner);

    return section;
}