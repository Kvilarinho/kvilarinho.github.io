export default function navButton(href, text, className = "") {
    const button = document.createElement("a");
    button.href = href;
    button.className = `btn ${className}`;
    button.textContent = text;

    return button;
}