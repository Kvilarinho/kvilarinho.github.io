export function showExperienceDetails() {
    const details = document.getElementById('experience-details');
    if (!details) return;

    details.style.display =
        details.style.display === 'none' || details.style.display === ''
            ? 'block'
            : 'none';
}

export function showAboutDetails() {
    const aboutDetails = document.getElementById('about-details');
    if (!aboutDetails) return;

    aboutDetails.style.display =
        aboutDetails.style.display === 'none' || aboutDetails.style.display === ''
            ? 'block'
            : 'none';
}

export function initGlobalListeners() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}
