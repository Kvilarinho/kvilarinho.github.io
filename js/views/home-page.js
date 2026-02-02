import pageHeader from "/js/views/components/home-page/page-header.js";


export default function renderHomepage() {
    const app = document.getElementById("app");

    const header = pageHeader();
    app.appendChild(header);
}

