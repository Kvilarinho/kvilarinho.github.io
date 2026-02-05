export default function skillsTitle(classList, title) {

    const element = document.createElement("div");
    element.className = classList;

    const titleElement = document.createElement("h4");
    titleElement.textContent = title;
    element.appendChild(titleElement);

    return element;
}