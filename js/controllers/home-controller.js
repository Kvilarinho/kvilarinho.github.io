import renderHomepage from "/js/views/home-page.js";
import {
    initGlobalListeners
} from "/js/script.js";

export default function initHome() {
    renderHomepage();
    initGlobalListeners();
}