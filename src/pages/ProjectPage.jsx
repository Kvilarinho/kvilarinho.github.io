import { useParams, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/common/Layout'
import usePageAnimation from '../hooks/usePageAnimation'
import projects from '../data/projects.json'
import remarkGfm from 'remark-gfm'

export default function ProjectPage() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const visible = usePageAnimation()
    const project = projects.find(p => p.slug === slug)

    if (!project) return <Layout><p>Project not found.</p></Layout>

    return (
        <Layout>
            <a onClick={() => navigate(-1)} className="exp-toggle" style={{ cursor: 'pointer', margin: '80px 0 0 24px', display: 'inline-flex' }}>
                <span className="chev">{'<'}</span> Go Back
            </a>

            <section className={`project-sections page-enter ${visible ? 'page-visible' : ''}`}>

                {project.image && (
                    <section id="projectHero">
                        <img className="project-hero" src={project.image} alt={project.title} />
                    </section>
                )}

                <section id="projectDescription">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{ img: () => null }}
                    >
                        {project.readme}
                    </ReactMarkdown>
                </section>

                <section id="technologiesUsed">
                    <h2>Project Language</h2>
                    <p>{project.language}</p>
                    <div className="project-tags" style={{ marginTop: '12px' }}>
                        {project.tags.map(tag => (
                            <span key={tag} className="project-tag">{tag}</span>
                        ))}
                    </div>
                </section>

            </section>

            <a href={project.github} target="_blank" className="exp-toggle" id="githubLink" style={{ margin: '0 0 32px 24px', display: 'inline-flex' }}>
                GitHub Repo <span className="chev">{'>'}</span>
            </a>

        </Layout>
    )
}