import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../components/common/Layout'
import usePageAnimation from '../hooks/usePageAnimation'
import { projects } from '../data/projects'

export default function ProjectPage() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const visible = usePageAnimation()
    const project = projects[slug]

    if (!project) return <Layout><p>Project not found.</p></Layout>

    return (
        <Layout>
            <a onClick={() => navigate(-1)} className="exp-toggle" style={{ cursor: 'pointer', margin: '80px 0 0 24px', display: 'inline-flex' }}>
                <span className="chev">{'<'}</span> Go Back
            </a>

            <section className={`project-sections page-enter ${visible ? 'page-visible' : ''}`}>

                <section id="projectHero">
                    <img className="project-hero" src={project.images.cover} alt={project.title} />
                </section>

                <section id="projectDescription">
                    <h2>{project.title}</h2>
                    <p>{project.longDescription.intro}</p>
                    <br />
                    {project.images.previewImage && (
                        <img src={project.images.previewImage} alt={`${project.title} preview`} className="project-hero" />
                    )}
                    <h3>Main Features</h3>
                    <ul>{project.longDescription.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
                    {project.longDescription.architecture && <><h3>Architecture</h3><p>{project.longDescription.architecture}</p></>}
                    {project.longDescription.testingAndDocs && <><h3>Testing & Docs</h3><p>{project.longDescription.testingAndDocs}</p></>}
                    {project.longDescription.collaboration && <><h3>Collaboration</h3><p>{project.longDescription.collaboration}</p></>}
                    {project.longDescription.learningOutcome && <><h3>Learning Outcome</h3><p>{project.longDescription.learningOutcome}</p></>}
                </section>

                <section id="technologiesUsed">
                    <h2>Technologies Used</h2>
                    {project.technologies.backend?.length > 0 && <><h3>Backend</h3><ul>{project.technologies.backend.map((t, i) => <li key={i}>{t}</li>)}</ul></>}
                    {project.technologies.frontend?.length > 0 && <><h3>Frontend</h3><ul>{project.technologies.frontend.map((t, i) => <li key={i}>{t}</li>)}</ul></>}
                    {project.technologies.tools?.length > 0 && <><h3>Tools</h3><ul>{project.technologies.tools.map((t, i) => <li key={i}>{t}</li>)}</ul></>}
                </section>

            </section>

            <a href={project.github} target="_blank" className="exp-toggle" id="githubLink" style={{ margin: '0 0 32px 24px', display: 'inline-flex' }}>
                GitHub Repo <span className="chev">{'>'}</span>
            </a>
        </Layout>
    )
}