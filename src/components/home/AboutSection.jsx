import { useState } from 'react'

export default function AboutSection() {
    const [expanded, setExpanded] = useState(false)

    return (
        <section className="about scroll-animate" id="about">
            <h2>About Me</h2>
            <div className="card scroll-animate">
                <p>
                    I am a Biomedical Laboratory Technician transitioning
                    into Software Development. <br />
                    For the past 10 years, I worked in highly regulated and
                    fast-paced environments, where <strong>precision and structure</strong> — and solving problems under pressure — were part of my daily
                    routine. These experiences shaped my analytical mindset and
                    helped me learn fast, adapt quickly, and stay focused —
                    skills I now apply to coding.
                </p>

                <a href="#" className="exp-toggle" onClick={(e) => { e.preventDefault(); setExpanded(!expanded) }}>
                    Read more about my background <span className="chev">&gt;</span>
                </a>

                {expanded && (
                    <div id="about-details" className="details" style={{ display: 'block' }}>
                        <p dangerouslySetInnerHTML={{
                            __html: `I recently completed a Full-Stack Java Bootcamp, where I built hands-on projects
              using <strong>Java</strong>, <strong>OOP</strong>, <strong>MVC architecture</strong>,
              <strong>networking</strong>, <strong>multithreading</strong>, and <strong>web technologies</strong> such as
              HTML, CSS, and JavaScript. I enjoy complex challenges
              and creating solutions that are clean, logical, and practical.<br><br>
              Coming from a scientific background, I bring <strong>discipline</strong>,
              <strong>attention to detail</strong>, and a strong sense of
              <strong>responsibility</strong>. Driven by curiosity and determination,
              I am committed to continuous learning and excited to contribute
              to real-world software projects while growing as a developer.` }} />
                    </div>
                )}
            </div>
        </section>
    )
}