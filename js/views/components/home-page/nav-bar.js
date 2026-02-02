import button from "/js/views/components/commons/button.js";

export default function nav() {
    const nav = document.createElement("nav");

    const about = button("#about", "About");
    const experience = button("#experience", "Work Experience");
    const education = button("#education", "Education");
    const projects = button("#projects", "Projects");
    const skills = button("#skills", "Skills");
    const contacts = button("#contacts", "Contacts");
    
    nav.appendChild(about);
    nav.appendChild(experience);
    nav.appendChild(education);
    nav.appendChild(projects);
    nav.appendChild(skills);
    nav.appendChild(contacts);

    return nav;

}