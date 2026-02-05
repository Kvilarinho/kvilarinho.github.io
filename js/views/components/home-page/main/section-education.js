import section from "/js/views/components/commons/section.js";
import educationItem from "/js/views/components/home-page/main/helpers/education-item.js";

export default function sectionEducation() {

    const sectionElement = section("education", "education", "Education");

    const card = document.createElement("div");
    card.classList.add("card", "education-card");
    
    sectionElement.appendChild(card);

    // Education items
    const educationItem1 = educationItem(
        "Full-Stack Programming Bootcamp",
        "Jul 2025 - Jan 2026",
        "Code for All"
    );

    const educationItem2 = educationItem(
        "Google It Support Professional Certificate",
        "May 2021 - Aug 2021",
        "Google / Coursera"
    );

    const educationItem3 = educationItem(
        "BSc in Biomedical Laboratory Sciences",
        "Sep 2009 - Jul 2013",
        "School of Technology and Health of Lisbon (ESTeSL) - Politechnic Institute of Lisbon, Portugal",
        "(Licenciatura em Análises Clínicas e Saúde Pública)"
    );

    card.appendChild(educationItem1);
    card.appendChild(educationItem2);
    card.appendChild(educationItem3);

    return sectionElement;
}