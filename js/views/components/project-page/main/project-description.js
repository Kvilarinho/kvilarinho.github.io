export default function projectDescription(project) {
    const section = document.createElement("section");
    section.id = "projectDescription";

    section.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.longDescription.intro}</p>
        <br/>
        ${project.images.previewImage 
            ? `<img src="${project.images.previewImage}" alt="${project.title} preview" class="project-hero"/>` 
            : ""}
        <h3>Main Features</h3>
        <ul>${project.longDescription.features.map(f => `<li>${f}</li>`).join("")}</ul>
        ${renderOptionalSection("Architecture", project.longDescription.architecture)}
        ${renderOptionalSection("Testing & Docs", project.longDescription.testingAndDocs)}
        ${renderOptionalSection("Collaboration", project.longDescription.collaboration)}
        ${renderOptionalSection("Learning Outcome", project.longDescription.learningOutcome)}
    `;

    return section;
}

function renderOptionalSection(title, content) {
    if (!content) return "";
    return `<h3>${title}</h3><p>${content}</p>`;
}
