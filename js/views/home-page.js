import pageHeader from "/js/views/components/home-page/header/page-header.js";
import main from "/js/views/components/home-page/main/main.js";

export default function renderHomepage() {
    const app = document.getElementById("app");

    const header = pageHeader();
    const mainElement = main();
    
    app.appendChild(header);
    app.appendChild(mainElement);
}

