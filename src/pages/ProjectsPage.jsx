import { Link } from 'react-router-dom'
import Layout from '../components/common/Layout'
import usePageAnimation from '../hooks/usePageAnimation'
import { projects } from '../data/projects'

export default function ProjectsPage() {
    const visible = usePageAnimation()

    return (
        <Layout>
            <section className={`projects page-enter ${visible ? 'page-visible' : ''}`} id="projects">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {Object.entries(projects).map(([slug, project]) => (
                        <div key={slug} className="card project-card">
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>
                            <p className="project-description" dangerouslySetInnerHTML={{ __html: project.shortDescription }} />
                            <Link to={`/project/${slug}`} className="exp-toggle project-link">
                                View Project <span className="chev">{'>'}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}