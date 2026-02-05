export default function projectFooter() {
    const footer = document.createElement("footer");
    footer.className = "site-footer";

    const year = new Date().getFullYear();
    footer.innerHTML = `<p>© <span id="year">${year}</span> Kátia Vilarinho · Software Developer. All rights reserved.</p>`;

    return footer;
}
