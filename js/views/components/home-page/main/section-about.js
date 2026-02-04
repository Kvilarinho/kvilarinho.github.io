import section from "/js/views/components/commons/section.js";
import button from "/js/views/components/commons/button.js";
import { aboutDetails, showAboutDetails } from "/js/views/components/home-page/main/helpers/about-details.js";
import chevron from "/js/views/components/commons/chevron.js";

export default function sectionAbout() {

    const sectionElement = section("about", "about", "About Me");

    const card = document.createElement("div");
    card.className = "card";

    const paragraph = document.createElement("p");
    paragraph.innerHTML = "I am a Biomedical Laboratory Technician transitioning " +
                        "into Software Development. <br>" +
                    "For the past 10 years, I worked in highly regulated and " +
                    "fast-paced environments, where <strong>precision and structure</strong> — and solving problems under pressure — were part of my daily " +
                    "routine. These experiences shaped my analytical mindset and " +
                    "helped me learn fast, adapt quickly, and stay focused — " +
                    "skills I now apply to coding.";
    
    card.appendChild(paragraph);

    const buttonReadMore = button("#", "Read more about my background ", "exp-toggle");    
    buttonReadMore.onclick = function(e) {
        e.preventDefault();
        showAboutDetails();
        return false;
    };

    const chevronElement = chevron();


    buttonReadMore.appendChild(chevronElement);
    card.appendChild(buttonReadMore);
    
    const aboutDetailsElement = aboutDetails();
    card.appendChild(aboutDetailsElement);
    
    sectionElement.appendChild(card);

    return sectionElement;
}


