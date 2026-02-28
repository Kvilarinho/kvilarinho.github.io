export function initGlobalListeners() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // LINK CLICK TRACKING

    const githubLink = document.getElementById("github-link");
    if (githubLink) {
        githubLink.addEventListener("click", () => {
            gtag("event", "click_github", {
                event_category: "outbound",
                event_label: "github_profile"
            });
        });
    }

    const linkedinLink = document.getElementById("linkedin-link");
    if (linkedinLink) {
        linkedinLink.addEventListener("click", () => {
            gtag("event", "click_linkedin", {
                event_category: "outbound",
                event_label: "linkedin_profile"
            });
        });
    }

    // PROJECT OPEN TRACKING
    
    const projectLinks = document.querySelectorAll(".project-link");

    projectLinks.forEach(link => {
        link.addEventListener("click", () => {
            const projectName = link.dataset.project;
            gtag("event", "project_open", {
                project_name: projectName
            });
        });
    });

    // SCROLL TRACKING

    let scroll50Sent = false;
    let scroll90Sent = false;

    window.addEventListener("scroll", () => {
        const scrollPercent =
            (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

        if (scrollPercent > 50 && !scroll50Sent) {
            gtag("event", "scroll_50");
            scroll50Sent = true;
        }

        if (scrollPercent > 90 && !scroll90Sent) {
            gtag("event", "scroll_90");
            scroll90Sent = true;
        }
    });
}