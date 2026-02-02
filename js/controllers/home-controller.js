import renderHomepage from "/js/views/home-page.js";
import {
    showExperienceDetails,
    showAboutDetails,
    initGlobalListeners
} from "/js/script.js";

export default function initHome() {
    renderHomepage();
    initGlobalListeners();

    document.getElementById("experience-toggle")?.addEventListener("click", showExperienceDetails);
    document.getElementById("about-toggle")?.addEventListener("click", showAboutDetails);
}