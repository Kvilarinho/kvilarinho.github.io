export default function goBackButton() {
    const section = document.createElement("section");
    section.id = "goBackButton";
    section.className = "go-back-button";

    const link = document.createElement("a");
    link.className = "exp-toggle";
    link.innerHTML = `<span class="chev"><</span>Go Back`;
    
    link.addEventListener("click", () => {
        window.history.back();
    });

    section.appendChild(link);
    return section;
}
