import section from "/js/views/components/commons/section.js";
import skillsTitle from "/js/views/components/home-page/main/helpers/skills-title.js";
import tecSkillsList from "/js/views/components/home-page/main/helpers/tec-skills-list.js";
import softSkillsList from "/js/views/components/home-page/main/helpers/soft-skills-list.js";

export default function sectionSkills() {

    const sectionElement = section("skills", "skills", "Skills");

    const skillsGrid = document.createElement("div");
    skillsGrid.className = "skills-grid";

    const skillsTitleElement = skillsTitle("card tec-skills-card", "Technical Skills");

    const skillsListElement = tecSkillsList();

    skillsTitleElement.appendChild(skillsListElement);
    skillsGrid.appendChild(skillsTitleElement);
    sectionElement.appendChild(skillsGrid);

    const softSkillsTitleElement = skillsTitle("card soft-skills-card", "Soft Skills");

    const softSkillsListElement = softSkillsList();

    softSkillsTitleElement.appendChild(softSkillsListElement);
    skillsGrid.appendChild(softSkillsTitleElement);
    sectionElement.appendChild(skillsGrid);

    return sectionElement;
    
}





