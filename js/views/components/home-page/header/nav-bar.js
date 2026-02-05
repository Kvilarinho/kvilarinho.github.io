import navButton from "/js/views/components/commons/nav-button.js";

export default function nav() {
    const nav = document.createElement("nav");
    nav.className = "nav-bar";

    // Hamburger button (mobile only)
    const hamburger = document.createElement("button");
    hamburger.className = "hamburger";
    hamburger.setAttribute("aria-label", "Toggle navigation menu");
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    // Nav links container
    const navLinks = document.createElement("div");
    navLinks.className = "nav-links";

    const about = navButton("#about", "About");
    const experience = navButton("#experience", "Work Experience");
    const education = navButton("#education", "Education");
    const projects = navButton("#projects", "Projects");
    const skills = navButton("#skills", "Skills");
    const contacts = navButton("#contacts", "Contacts");
    
    navLinks.appendChild(about);
    navLinks.appendChild(experience);
    navLinks.appendChild(education);
    navLinks.appendChild(projects);
    navLinks.appendChild(skills);
    navLinks.appendChild(contacts);

    // Toggle menu on hamburger click
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

    nav.appendChild(hamburger);
    nav.appendChild(navLinks);

    return nav;
}