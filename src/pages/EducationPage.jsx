import Layout from '../components/common/Layout'
import usePageAnimation from '../hooks/usePageAnimation'

export default function EducationPage() {
    const visible = usePageAnimation()

    return (
        <Layout>
            <section className={`education page-enter ${visible ? 'page-visible' : ''}`} id="education">
                <h2>Education</h2>
                <div className="card education-card">

                    <div className="edu-item">
                        <div className="edu-header">
                            <h3 className="edu-title">Software Engineering & AI — Full-Stack Programming Bootcamp</h3>
                            <span className="edu-date">Jul 2025 - Jan 2026</span>
                        </div>
                        <p className="edu-provider">Code for All</p>
                    </div>

                    <div className="edu-item">
                        <div className="edu-header">
                            <h3 className="edu-title">Google It Support Professional Certificate</h3>
                            <span className="edu-date">May 2021 - Aug 2021</span>
                        </div>
                        <p className="edu-provider">Google / Coursera</p>
                    </div>

                    <div className="edu-item">
                        <div className="edu-header">
                            <div className="edu-title-group">
                                <h3 className="edu-title">BSc in Biomedical Laboratory Sciences</h3>
                                <p className="edu-subtitle">(Licenciatura em Análises Clínicas e Saúde Pública)</p>
                            </div>
                            <span className="edu-date">Sep 2009 - Jul 2013</span>
                        </div>
                        <p className="edu-provider">School of Technology and Health of Lisbon (ESTeSL) - Politechnic Institute of Lisbon, Portugal</p>
                    </div>

                </div>
            </section>
        </Layout>
    )
}