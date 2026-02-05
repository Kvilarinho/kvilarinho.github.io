function aboutDetails() {
    const aboutDetails = document.createElement("div");
    aboutDetails.id = "about-details";
    aboutDetails.className = "details";

    const detailsParagraph = document.createElement("p");
    detailsParagraph.innerHTML = "I recently completed a Full-Stack Java Bootcamp, where I built hands-on projects " +
                        " using <strong>Java</strong>, <strong>OOP</strong>, <strong>MVC architecture</strong>, " +
                        "<strong>networking</strong>, <strong>multithreading</strong>, and <strong>web technologies</strong> such as " +
                        "HTML, CSS, and JavaScript. I enjoy complex challenges " +
                        "and creating solutions that are clean, logical, and practical.<br><br>" +

                        " Coming from a scientific background, I bring <strong>discipline</strong>, " +
                        "<strong>attention to detail</strong>, and a strong sense of " +
                        "<strong>responsibility</strong>. Driven by curiosity and determination, " +
                        " I am committed to continuous learning and excited to contribute " +
                        "to real-world software projects while growing as a developer.";
                        
    aboutDetails.appendChild(detailsParagraph);
    aboutDetails.style.display = "none";

    return aboutDetails;
}

function showAboutDetails() {
    const aboutDetails = document.getElementById('about-details');
    if (!aboutDetails) return;

    aboutDetails.style.display =
        aboutDetails.style.display === 'none' || aboutDetails.style.display === ''
            ? 'block'
            : 'none';
}

export { aboutDetails, showAboutDetails };