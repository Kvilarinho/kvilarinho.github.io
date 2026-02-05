function experienceDetails() {

    const details = document.createElement("ul");
    details.id = "experience-details";
    details.className = "details";
    details.style.display = "none";

    details.innerHTML = `
        <li>Grew within the organization starting as a part-time
            phlebotomist, progressing to full-time lab
            technician and later contributing across multiple
            departments, including training, data integration,
            procurement, and special techniques.</li>
        <li>Supported laboratory operations, sample collection,
            administration and workflow coordination.</li>
        <li>Tested and contributed feedback to new internal
            software tools to improve process efficiency and
            accuracy.</li>
        <li>Trained new staff and collaborated in the
            development of learning resources and evaluation
            procedures.</li>
        <li>Played a key role during the pandemic, supporting
            the launch and operation of COVID-19 testing units
            under rapidly changing conditions.</li>
        <li>Collaborated with software developers on data
            mapping and reference ranges for integration with
            the Portuguese NHS (SNS).</li>
        <li>Ensured nationwide logistics support in Procurement,
            managing stock and critical supplies.</li>
        <li>Currently working in Special Techniques performing
            advanced lab analyses (RIA, HPLC, Atomic Absorption).</li>
    `;

    return details;
}

function showExperienceDetails() {
    const details = document.getElementById('experience-details');
    if (!details) return;

    details.style.display =
        details.style.display === 'none' || details.style.display === ''
            ? 'block'
            : 'none';
}

export { experienceDetails, showExperienceDetails };