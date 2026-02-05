export default function technologiesSection(project) {
    const section = document.createElement("section");
    section.id = "technologiesUsed";

    section.innerHTML = `
        <h2>Technologies Used</h2>
        ${renderTechCategory("Backend", project.technologies.backend)}
        ${renderTechCategory("Frontend", project.technologies.frontend)}
        ${renderTechCategory("Tools", project.technologies.tools)}
    `;

    return section;
}

function renderTechCategory(title, list) {
    if (!list?.length) return "";
    return `
        <h3>${title}</h3>
        <ul>${list.map(tech => `<li>${tech}</li>`).join("")}</ul>
    `;
}
