export default function contactLink(href, target, text) {

    const link = document.createElement("a");
    link.href = href;
    link.target = target;
    link.textContent = text;

    return link;
}

