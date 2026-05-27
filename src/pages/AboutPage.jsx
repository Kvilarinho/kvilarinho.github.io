import Layout from '../components/common/Layout'
import usePageAnimation from '../hooks/usePageAnimation'

export default function AboutPage() {
    const visible = usePageAnimation()

    return (
        <Layout>
            <section className={`about page-enter ${visible ? 'page-visible' : ''}`} id="about">
                <h2>About Me</h2>
                <div className="card">
                    <p>
                        I'm a <strong>Software Developer</strong> currently working in a <strong>.NET/C#</strong> integrations team,
                        focused on <strong>APIs</strong>, <strong>microservices</strong>, and <strong>enterprise applications</strong>.
                    </p>
                    <p>
                        I enjoy understanding how systems connect, debugging complex flows, and building solutions
                        that are clean, practical, and reliable.
                    </p>
                    <p>
                        Before moving into software development, I spent over 10 years working in 
                        <strong> Biomedical Laboratory Science</strong>, in highly regulated and fast-paced environments
                        where <strong>precision</strong>, <strong>structure</strong>, and <strong>problem-solving </strong>
                        under pressure were part of my daily routine.
                    </p>
                    <p>
                        That experience shaped the way I approach technology today: analytically, logically,
                        and with strong <strong>attention to detail</strong>.
                    </p>
                    <p>
                        I later completed a <strong>Full-Stack Java Bootcamp</strong>, where I built hands-on projects
                        using <strong>Java</strong>, <strong>OOP</strong>, <strong>MVC architecture</strong>,{' '}
                        <strong>networking</strong>, <strong>multithreading</strong>, and <strong>web technologies</strong> such
                        as <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. Since then, I've continued growing through real-world
                        experience working with APIs, integrations, and <strong>backend systems</strong>.
                    </p>
                </div>
            </section>
        </Layout>
    )
}