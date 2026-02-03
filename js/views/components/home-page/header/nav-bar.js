import navButton from "/js/views/components/commons/nav-button.js";

export default function nav() {
    const nav = document.createElement("nav");

    const about = navButton("#about", "About");
    const experience = navButton("#experience", "Work Experience");
    const education = navButton("#education", "Education");
    const projects = navButton("#projects", "Projects");
    const skills = navButton("#skills", "Skills");
    const contacts = navButton("#contacts", "Contacts");
    
    nav.appendChild(about);
    nav.appendChild(experience);
    nav.appendChild(education);
    nav.appendChild(projects);
    nav.appendChild(skills);
    nav.appendChild(contacts);

    return nav;

}