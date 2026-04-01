import renderHomepage from "/js/views/home-page.js";
import { initGlobalListeners, initScrollAnimations } from "/js/script.js";

export default function initHome() {
    renderHomepage();
    initGlobalListeners();
    initScrollAnimations();
}