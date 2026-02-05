import pageHeader from "/js/views/components/home-page/header/page-header.js";
import main from "/js/views/components/home-page/main/main.js";
import footer from "/js/views/components/commons/footer.js";

export default function renderHomepage() {
    const app = document.getElementById("app");

    try {
        const header = pageHeader();
        const mainElement = main();
        const footerElement = footer();

        app.appendChild(header);
        app.appendChild(mainElement);
        app.appendChild(footerElement);
    } catch (error) {
        console.error("Error rendering homepage:", error);
        app.innerHTML = `<p>Error loading homepage: ${error.message}</p>`;
    }

}
