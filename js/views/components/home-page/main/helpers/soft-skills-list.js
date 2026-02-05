export default function softSkillsList() {

    const list = document.createElement("ul");
    list.className = "skills-list";
    list.innerHTML = `
        <li>Analytical Thinking & Problem-Solving</li>
        <li>Attention to Detail & Precision</li>
        <li>Adaptability & Quick Learning</li>
        <li>Time Management & Organization</li>
        <li>Effective Communication & Team Collaboration</li>
        <li>Responsibility & Reliability</li>
        <li>Continuous Learning & Growth Mindset</li>
    `;

    return list;
}