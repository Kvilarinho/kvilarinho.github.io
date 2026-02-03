export default function section(className, id, title) {
    const section = document.createElement("section");
    section.className = className;
    section.id = id;

    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = title;
    section.appendChild(sectionTitle);

    return section; 
}