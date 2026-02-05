export default function projectHero(project) {
    const section = document.createElement("section");
    section.id = "projectHero";

    const img = document.createElement("img");
    img.className = "project-hero";
    img.src = project.images.cover;
    img.alt = project.title;
    img.height = 600;

    section.appendChild(img);
    return section;
}
