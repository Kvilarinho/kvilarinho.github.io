import renderProjectPage from "/js/views/project-page.js";
import { initGlobalListeners } from "/js/script.js";

window.addEventListener("DOMContentLoaded", () => {
    initProject();
});

export default function initProject() {
    renderProjectPage();
    initGlobalListeners();
}



