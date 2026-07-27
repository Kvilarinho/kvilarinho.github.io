import Layout from '../components/common/Layout'
import usePageAnimation from '../hooks/usePageAnimation'

export default function ContactsPage() {
    const visible = usePageAnimation()

    return (
        <Layout>
            <section className={`contacts page-enter ${visible ? 'page-visible' : ''}`} id="contacts">
                <h2>Contacts</h2>
                <div className="card contacts-card">
                    <div className="contact-items">
                        <a href="mailto:katia@katiavilarinho.dev" target="_blank">katia@katiavilarinho.dev</a>
                        <a href="https://www.linkedin.com/in/kátia-vilarinho/" target="_blank" id="linkedin-link">LinkedIn</a>
                        <a href="https://github.com/Kvilarinho" target="_blank" id="github-link">GitHub</a>
                    </div>
                </div>
            </section>
        </Layout>
    )
}