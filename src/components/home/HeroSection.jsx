import avatar from '../../assets/avatar.png'

export default function HeroSection({ visible }) {
    return (
        <section className="hero">
            <div className="hero-inner">
                <img
                    src={avatar}
                    alt="Avatar"
                    className="avatar"
                    style={{
                        height: '200px',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(24px)',
                        transition: 'opacity 0.45s ease, transform 0.45s ease'
                    }}
                />
                <h1
                    id="hero-title"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(24px)',
                        transition: 'opacity 0.45s ease 0.1s, transform 0.45s ease 0.1s'
                    }}
                >
                    Hi, I'm <span className="accent">Kátia</span>.
                </h1>
                <p
                    className="lead"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(24px)',
                        transition: 'opacity 0.45s ease 0.2s, transform 0.45s ease 0.2s'
                    }}
                >
                    Biomedical Laboratory Technician currently transitioning into{' '}
                    <strong>Software Development</strong>, I bring analytical thinking, precision and structure
                    from my scientific background into coding. I enjoy solving logical challenges, and create clean
                    meaningful solutions through code.
                </p>
            </div>
        </section>
    )
}