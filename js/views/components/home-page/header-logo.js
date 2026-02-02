import button from "/js/views/components/commons/button.js";
import img from "/js/views/components/commons/img.js";

export default function headerLogo() {

    const headerLogo = button("#top", "", "header-logo");
    
    const logoImg = img("/assets/img/avatar-logo.png", "Logo", "avatar-logo", "28px");

    const title = document.createElement("h4");
    title.textContent = "Kátia Vilarinho";

    headerLogo.appendChild(logoImg);
    headerLogo.appendChild(title);

    return headerLogo;
}



