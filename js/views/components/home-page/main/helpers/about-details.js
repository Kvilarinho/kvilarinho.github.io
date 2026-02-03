function aboutDetails() {
    const aboutDetails = document.createElement("div");
    aboutDetails.id = "about-details";
    aboutDetails.className = "details";

    const detailsParagraph = document.createElement("p");
    detailsParagraph.innerHTML = "I am currently completing a Full-Stack Java Bootcamp and " +
                        "building practical projects in Java, using <strong>OOP</strong>, <strong>MVC</strong>, " +
                        "<strong>networking</strong>, <strong>multithreading</strong>, and <strong>web technologies</strong> such as " +
                        "HTML, CSS, and JavaScript. I enjoy challenges that make " +
                        "me think, and I love creating solutions that are clean, " +
                        "logical, and useful.<br><br>" +
                    

                        " Coming from a scientific background, I bring <strong>discipline</strong>, " +
                        "<strong>attention to detail</strong>, and a strong sense of " +
                        "<strong>responsibility</strong>. At the same time, curiosity, " +
                        "determination, and a growing passion for tech are " +
                        "driving me forward. " +
                        "I am committed to continuous learning and excited to " +
                        "contribute to real-world software projects and grow " +
                        "within the tech industry.";
                        
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