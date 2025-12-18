import { projects } from "./data/projects.js";

const slug = new URLSearchParams(window.location.search).get("project");
const project = projects[slug];

if (!project) {
    document.getElementById("projectDescription").innerHTML = "<p>Project not found.</p>";
} else {

    // HERO IMAGE
    document.getElementById("projectHero").innerHTML =
        `<img src="${project.images.cover}" alt="${project.title}" />`;

    // DESCRIPTION
    document.getElementById("projectDescription").innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.longDescription.intro}</p>
    <h3>Main Features</h3>
    <ul>${project.longDescription.features.map(f => `<li>${f}</li>`).join("")}</ul>
    ${project.longDescription.architecture ? `<h3>Architecture</h3><p>${project.longDescription.architecture}</p>` : ""}
    ${project.longDescription.testingAndDocs ? `<h3>Testing & Docs</h3><p>${project.longDescription.testingAndDocs}</p>` : ""}
    ${project.longDescription.collaboration ? `<h3>Collaboration</h3><p>${project.longDescription.collaboration}</p>` : ""}
    ${project.longDescription.learningOutcome ? `<h3>Learning Outcome</h3><p>${project.longDescription.learningOutcome}</p>` : ""}`;

    // TECHNOLOGIES
    document.getElementById("technologiesUsed").innerHTML = `
    <h2>Technologies Used</h2>
    <ul>${project.technologies.map(t => `<li>${t}</li>`).join("")}</ul>`;

    // GITHUB LINK
    const a = document.getElementById("githubLink");
    a.href = project.github;
}
