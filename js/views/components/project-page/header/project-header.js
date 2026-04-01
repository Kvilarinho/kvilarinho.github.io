import goBackButton from "/js/views/components/project-page/header/go-back-button.js";

export default function projectHeader() {
    const header = document.createElement("header");
    header.classList.add("scroll-animate");
    
    const goBackButtonElement = goBackButton();
    header.appendChild(goBackButtonElement);

    return header;
}
