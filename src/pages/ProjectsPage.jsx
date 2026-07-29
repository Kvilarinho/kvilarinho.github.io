import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/common/Layout'
import usePageAnimation from '../hooks/usePageAnimation'
import projects from '../data/projects.json'

export default function ProjectsPage() {
    const visible = usePageAnimation()
    const navigate = useNavigate()
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'start' },
        [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })]
    )

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    return (
        <Layout>
            <section className={`projects page-enter ${visible ? 'page-visible' : ''}`} id="projects">
                <h2>Projects</h2>

                <div style={{ position: 'relative', padding: '0 40px' }}>
                    <div ref={emblaRef} style={{ overflow: 'hidden' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'stretch' }}>
                            {projects.map((project) => (
                                <div
                                    key={project.slug}
                                    className="card project-card"
                                    onClick={() => navigate(`/project/${project.slug}`)}
                                    style={{ flex: '0 0 min(420px, 80vw)', display: 'flex', flexDirection: 'column', height: '520px', cursor: 'pointer' }}
                                >
                                    <div style={{ height: '160px', borderRadius: '8px', overflow: 'hidden', marginBottom: '12px', background: 'var(--border)', flexShrink: 0 }}>
                                        {project.image ? (
                                            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontSize: '0.85rem' }}>
                                                No image
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="project-title" style={{ marginBottom: '8px', flexShrink: 0 }}>{project.title}</h3>

                                    <div className="project-tags" style={{ marginBottom: '8px', flexShrink: 0 }}>
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="project-tag">{tag}</span>
                                        ))}
                                    </div>

                                    <p
                                        className="project-description"
                                        style={{ flex: 1, overflowY: 'auto', paddingRight: '4px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {project.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={scrollPrev} style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', background: 'rgba(110,231,255,0.1)', border: '1px solid var(--border)', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', color: 'var(--accent)', fontSize: '18px' }}>{'<'}</button>
                    <button onClick={scrollNext} style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', background: 'rgba(110,231,255,0.1)', border: '1px solid var(--border)', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', color: 'var(--accent)', fontSize: '18px' }}>{'>'}</button>
                </div>

            </section>
        </Layout>
    )
}