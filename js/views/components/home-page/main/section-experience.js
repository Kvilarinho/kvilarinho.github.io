import chevron from "/js/views/components/commons/chevron.js";
import section from "/js/views/components/commons/section.js";
import button from "/js/views/components/commons/button.js";
import { showExperienceDetails, experienceDetails } from "/js/views/components/home-page/main/helpers/experience-details.js";


export default function sectionExperience() {

    const sectionElement = section("experience", "experience", "Work Experience");

    const card = document.createElement("div");
    card.className = "card";

    const role = document.createElement("h3");
    role.textContent = "Clinical Laboratory Technician";

    const company = document.createElement("h5");
    company.textContent = "Centro de Medicina Laboratorial Germano de Sousa, Portugal, 2014-Present";

    sectionElement.appendChild(card);
    card.appendChild(role);
    card.appendChild(company);

    const buttonMoreInfo = button("#", "Clinical Laboratory Technician - Key Contributions", "exp-toggle");    
    buttonMoreInfo.onclick = function(e) {
        e.preventDefault();
        showExperienceDetails();
        return false;
    };

    const chevronElement = chevron();
    buttonMoreInfo.appendChild(chevronElement);
    card.appendChild(buttonMoreInfo);

    const experienceDetailsElement = experienceDetails();
    card.appendChild(experienceDetailsElement);

    return sectionElement;

}


