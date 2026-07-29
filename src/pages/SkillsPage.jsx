import Layout from '../components/common/Layout'
import usePageAnimation from '../hooks/usePageAnimation'

export default function SkillsPage() {
    const visible = usePageAnimation()

    return (
        <Layout>
            <section className={`skills page-enter ${visible ? 'page-visible' : ''}`} id="skills">
                <h2>Skills</h2>
                <div className="skills-grid">

                    <div className="card tec-skills-card">
                        <h4>Technical Skills</h4>
                        <ul className="skills-list">
                            <li><strong>Programming Languages:</strong> C#, .NET, Java, HTML, CSS, JavaScript</li>
                            <li><strong>Core Concepts:</strong> Object-Oriented Programming (OOP), MVC, RESTful APIs, HTTP, Client–Server Architecture, Collections, Streams API, Concurrency, Multithreading, I/O Streams, Networking</li>
                            <li><strong>Backend & Architecture:</strong> Spring MVC, Spring Boot, Web Services, JPA/Hibernate, DTO & Converter Pattern, Layered Architecture, Validation & Defensive Programming</li>
                            <li><strong>Databases:</strong> PostgreSQL, SQL (basic)</li>
                            <li><strong>Testing:</strong> xUnit, Moq, JUnit, Mockito</li>
                            <li><strong>Tools & Technologies:</strong> Git, GitHub, Maven, IntelliJ IDEA, VS Code</li>
                            <li><strong>Other:</strong> Command Line (CLI), AI (Foundations, Spring AI, APIs)</li>
                        </ul>
                    </div>

                    <div className="card soft-skills-card">
                        <h4>Soft Skills</h4>
                        <ul className="skills-list">
                            <li>Analytical Thinking & Problem-Solving</li>
                            <li>Attention to Detail & Precision</li>
                            <li>Adaptability & Quick Learning</li>
                            <li>Time Management & Organization</li>
                            <li>Effective Communication & Team Collaboration</li>
                            <li>Responsibility & Reliability</li>
                            <li>Continuous Learning & Growth Mindset</li>
                        </ul>
                    </div>

                </div>
            </section>
        </Layout>
    )
}