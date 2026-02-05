export default function img(src, alt = "", className = "", height = "") {
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    image.className = className;
    if (height) {
        image.style.height = height;
    }
    return image;
}