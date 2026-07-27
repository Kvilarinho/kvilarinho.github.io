import Layout from '../components/common/Layout'
import usePageAnimation from '../hooks/usePageAnimation'

export default function ExperiencePage() {
    const visible = usePageAnimation()

    return (
        <Layout>
            <section className={`experience page-enter ${visible ? 'page-visible' : ''}`} id="experience">
                <h2>Work Experience</h2>
                <div className="card">
                    <h3>Clinical Laboratory Technician</h3>
                    <h5>Centro de Medicina Laboratorial Germano de Sousa, Portugal, 2014-Present</h5>
                    <ul>
                        <li>Grew within the organization starting as a part-time phlebotomist, progressing to full-time lab technician and later contributing across multiple departments, including training, data integration, procurement, and special techniques.</li>
                        <li>Supported laboratory operations, sample collection, administration and workflow coordination.</li>
                        <li>Tested and contributed feedback to new internal software tools to improve process efficiency and accuracy.</li>
                        <li>Trained new staff and collaborated in the development of learning resources and evaluation procedures.</li>
                        <li>Played a key role during the pandemic, supporting the launch and operation of COVID-19 testing units under rapidly changing conditions.</li>
                        <li>Collaborated with software developers on data mapping and reference ranges for integration with the Portuguese NHS (SNS).</li>
                        <li>Ensured nationwide logistics support in Procurement, managing stock and critical supplies.</li>
                        <li>Currently working in Special Techniques performing advanced lab analyses (RIA, HPLC, Atomic Absorption).</li>
                    </ul>
                </div>
            </section>
        </Layout>
    )
}