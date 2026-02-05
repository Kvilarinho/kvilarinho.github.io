export default function button(href, text, className = "") {
    const button = document.createElement("a");
    button.href = href;
    button.className = className;
    button.textContent = text;

    return button;
}