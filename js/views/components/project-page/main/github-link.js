export default function githubLink(project) {
    const link = document.createElement("a");
    link.id = "githubLink";
    link.className = "exp-toggle";
    link.href = project.github;
    link.target = "_blank";
    
    link.innerHTML = `GitHub Repo<span class="chev">></span>`;

    return link;
}
