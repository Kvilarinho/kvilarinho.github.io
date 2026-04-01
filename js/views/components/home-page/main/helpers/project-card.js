import button from "/js/views/components/commons/button.js";

export default function projectCard(title, description, link, projectId, tags = []) {

    const card = document.createElement("div");
    card.classList.add("card", "project-card");

    const cardTitle = document.createElement("h3");
    cardTitle.className = "project-title";
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    if (tags.length > 0) {
        const tagsContainer = document.createElement("div");
        tagsContainer.className = "project-tags";
        tags.forEach(tag => {
            const tagEl = document.createElement("span");
            tagEl.className = "project-tag";
            tagEl.textContent = tag;
            tagsContainer.appendChild(tagEl);
        });
        card.appendChild(tagsContainer);
    }

    const cardDescription = document.createElement("p");
    cardDescription.className = "project-description";
    cardDescription.innerHTML = description;
    card.appendChild(cardDescription);

    const buttonElement = button(link, "View Project", "exp-toggle project-link");
    buttonElement.dataset.project = projectId;
    
    card.appendChild(buttonElement);
    
    return card;
}
