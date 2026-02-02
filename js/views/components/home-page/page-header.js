import headerLogo from "/js/views/components/home-page/header-logo.js";
import nav from "/js/views/components/home-page/nav-bar.js";

export default function pageHeader() {
    const header = document.createElement("header");
    header.className = "site-header";

    const headerLogoElement = headerLogo();
    const navElement = nav();
    
    header.appendChild(headerLogoElement);
    header.appendChild(navElement);

    return header;
}

