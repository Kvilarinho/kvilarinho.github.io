import button from "/js/views/components/commons/button.js";

export default function projectCard(title, description, link, projectId) {

    const card = document.createElement("div");
    card.classList.add("card", "project-card");

    const cardTitle = document.createElement("h3");
    cardTitle.className = "project-title";
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    const cardDescription = document.createElement("p");
    cardDescription.className = "project-description";
    cardDescription.innerHTML = description;
    card.appendChild(cardDescription);

    const buttonElement = button(link, "View Project", "exp-toggle project-link");
    buttonElement.dataset.project = projectId;
    
    card.appendChild(buttonElement);
    
    return card;
}
