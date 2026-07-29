import Layout from '../components/common/Layout'
import usePageAnimation from '../hooks/usePageAnimation'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function ContactsPage() {
    const visible = usePageAnimation()

    return (
        <Layout>
            <section className={`contacts page-enter ${visible ? 'page-visible' : ''}`} id="contacts">
                <h2>Contacts</h2>

                <p style={{ color: 'var(--muted)', marginBottom: '32px', fontSize: '1.05rem' }}>
                    I'm open to new opportunities, collaborations, or just a good conversation about code.
                    Feel free to reach out through any of the channels below.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>

                    <a href="mailto:katia@katiavilarinho.dev" className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', textAlign: 'center', textDecoration: 'none', color: 'var(--text)' }}>
                        <MdEmail size={32} color="var(--accent)" />
                        <h4 style={{ margin: 0 }}>Email</h4>
                        <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.9rem' }}>katia@katiavilarinho.dev</p>
                    </a>

                    <a href="https://www.linkedin.com/in/kátia-vilarinho/" target="_blank" className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', textAlign: 'center', textDecoration: 'none', color: 'var(--text)' }}>
                        <FaLinkedin size={32} color="var(--accent)" />
                        <h4 style={{ margin: 0 }}>LinkedIn</h4>
                        <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.9rem' }}>kátia-vilarinho</p>
                    </a>

                    <a href="https://github.com/Kvilarinho" target="_blank" className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', textAlign: 'center', textDecoration: 'none', color: 'var(--text)' }}>
                        <FaGithub size={32} color="var(--accent)" />
                        <h4 style={{ margin: 0 }}>GitHub</h4>
                        <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.9rem' }}>Kvilarinho</p>
                    </a>

                </div>
            </section>
        </Layout>
    )
}