export default function tecSkillsList() {

    const list = document.createElement("ul");
    list.className = "skills-list";
    list.innerHTML = `
        <li><strong>Programming Languages:</strong> Java, HTML, CSS, JavaScript</li>
        <li><strong>Core Concepts:</strong> 
            Object-Oriented Programming (OOP), MVC, RESTful APIs, HTTP, Client–Server Architecture, 
            Collections, Streams API, Concurrency, Multithreading, I/O Streams, Networking</li>
        <li><strong>Backend & Architecture:</strong> 
            Spring MVC, Spring Boot, Web Services, JPA/Hibernate, DTO & Converter Pattern, 
            Layered Architecture, Validation & Defensive Programming</li>
        <li><strong>Databases:</strong> PostgreSQL, SQL (basic)</li>
        <li><strong>Testing:</strong> JUnit, Mockito</li>
        <li><strong>Tools & Technologies:</strong> Git, GitHub, Maven, IntelliJ IDEA, VS Code</li>
        <li><strong>Other:</strong> Command Line (CLI), AI (Foundations, Spring AI, APIs)</li>    
    `;

    return list;
}