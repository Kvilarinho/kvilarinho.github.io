import contactLink from "/js/views/components/home-page/main/helpers/contact-link.js";
import section from "/js/views/components/commons/section.js";

export default function contactsSection() {

    const sectionElement = section("contacts", "contacts", "Contacts");

    const card = document.createElement("div");
    card.classList.add("card", "contacts-card");

    const contactItems = document.createElement("div");
    contactItems.className = "contact-items";

    const emailLink = contactLink("mailto:katia@katiavilarinho.dev", "_blank", "katia@katiavilarinho.dev");
    contactItems.appendChild(emailLink);

    const linkedinLink = contactLink("https://www.linkedin.com/in/kátia-vilarinho/", "_blank", "LinkedIn");
    linkedinLink.id = "linkedin-link";
    contactItems.appendChild(linkedinLink);

    const githubLink = contactLink("https://github.com/Kvilarinho", "_blank", "GitHub");
    githubLink.id = "github-link";
    contactItems.appendChild(githubLink);

    card.appendChild(contactItems);

    sectionElement.appendChild(card);

    return sectionElement;
    
}