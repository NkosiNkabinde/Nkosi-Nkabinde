import { useState } from 'react'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  return (
    <div className={`app ${theme === 'light' ? 'light' : ''}`}>
      <header className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="nav-container">
          <a href="#home" className="logo">Nkosingiphile</a>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#achievements">Achievements</a>
            <a href="/Nkosingiphile_Nkabinde_Resume1.pdf" download className="cta-nav strong">Download CV</a>
            <a href="#contact" className="cta-nav">Contact</a>
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle" aria-label="Toggle theme" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? 'Light' : 'Dark'} mode
            </button>
            <button className="hamburger" aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div className={`mobile-menu ${open ? 'open' : ''}`}>
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#education">Education</a>
          <a onClick={() => setOpen(false)} href="#skills">Skills</a>
          <a onClick={() => setOpen(false)} href="#projects">Projects</a>
          <a onClick={() => setOpen(false)} href="#experience">Experience</a>
          <a onClick={() => setOpen(false)} href="#achievements">Achievements</a>
          <a onClick={() => setOpen(false)} href="/Nkosingiphile_Nkabinde_Resume1.pdf" download className="cta-nav strong">Download CV</a>
          <a onClick={() => setOpen(false)} href="#contact" className="cta-nav">Contact</a>
        </div>
      </header>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>I'm Nkosingiphile Nkabinde</h1>
            <p className="subtitle">Cloud-savvy Software Developer building data-driven products</p>
            <p>I am a dedicated and hardworking technology professional who has proactively built a strong foundation in IT support and cloud computing through self-teaching, real-world experience, and recognized certifications.</p>
            <a href="#contact" className="cta-button">Get In Touch</a>
            <div className="social-links">
              <a href="mailto:nkosingiphilepano24@gmail.com">Email</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div className="profile-photo">
            <img src="/nkosi.jpg" alt="Nkosingiphile Nkabinde profile" loading="eager" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-content">
          <h2>Why Hire Me for Your Next Project?</h2>
          <p>I am a dedicated and hardworking technology professional who has proactively built a strong foundation in IT support and cloud computing through self-teaching, real-world experience, and recognized certifications.</p>
          <p>My journey reflects a determined commitment to continuous learning and growth, having gained practical expertise in managing Microsoft Azure environments, automating cloud operations, troubleshooting complex technical issues, and delivering excellent customer service—all without a formal degree.</p>
          <p>My life experiences have significantly shaped my professional capabilities, work ethic, and approach to challenges in the technology field. Through diverse roles and self-driven learning, I have developed resilience, adaptability, and a strong determination to succeed—qualities essential in IT and cloud services.</p>
          <p>Having worked in various positions, including sales assistant and Junior Cloud Administrator, I refined my communication and customer service skills, learning to engage effectively with different people and solve problems empathetically. These experiences fostered patience and clarity when addressing technical issues or collaborating in teams, critical for client-facing and support roles.</p>
          <p>Choosing to be self-taught and achieve certifications despite not holding formal degrees demonstrates my discipline, persistence, and resourcefulness. I have taken initiative, managed time effectively, and overcome obstacles in fast-paced technology environments.</p>
          <p>Practical experience from internships and hands-on roles helped me build confidence in cloud infrastructure management, automation, and security, while emphasizing the importance of documentation, teamwork, and clear communication for operational excellence and knowledge sharing.</p>
          <p>Overall, my life experiences have fostered a results-driven mindset that enables me to handle complexity, quickly learn new technologies, and maintain a positive, solution-oriented attitude. My combination of practical skills, perseverance, and willingness to go the extra mile positions me as a dependable and valuable professional ready to contribute meaningfully and advance in IT and cloud services careers.</p>
          <div className="about-details">
            <div>
              <h3>Name</h3>
              <p>Nkosingiphile Nkabinde</p>
            </div>
            <div>
              <h3>Qualification</h3>
              <p>Self-Taught Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="education">
        <div className="section-content">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Matric</h3>
            <p>Distinctions in Mathematics, Physical Sciences, English, IsiZulu, and Life Orientation.</p>
          </div>
          <div className="education-item">
            <h3>Self-Taught & Certifications</h3>
            <p>Microsoft Azure (AZ-104, AZ-900, SC-200), AWS Cloud Practitioner, IBM Data Science Foundations, SFIA Level 3, and more.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <div className="section-content">
          <h2>My Skills</h2>
          <div className="skill">
            <span>Microsoft Certifications (AZ-104, AZ-900, SC-200)</span>
            <div className="progress-bar"><div className="progress" style={{width: '90%'}}></div></div>
          </div>
          <div className="skill">
            <span>CompTIA A+ & Networking (TCP/IP, DNS, DHCP, VLANs)</span>
            <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
          </div>
          <div className="skill">
            <span>Cloud & Data (Azure Functions, Blob/Data Lake, Azure SQL, AWS S3)</span>
            <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
          </div>
          <div className="skill">
            <span>Python (Pandas, Requests, BeautifulSoup, geopy)</span>
            <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
          </div>
          <div className="skill">
            <span>NLP & Sentiment (spaCy, VADER/TextBlob, Newspaper3k)</span>
            <div className="progress-bar"><div className="progress" style={{width: '70%'}}></div></div>
          </div>
          <div className="skill">
            <span>JavaScript/TypeScript (React, Next.js, TailwindCSS, Radix UI, TipTap)</span>
            <div className="progress-bar"><div className="progress" style={{width: '80%'}}></div></div>
          </div>
          <div className="skill">
            <span>Backend (Prisma, PostgreSQL, Next.js API Routes)</span>
            <div className="progress-bar"><div className="progress" style={{width: '75%'}}></div></div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <div className="section-content">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <img src="/vite.svg" alt="Project 1" />
              <h3>Personal Portfolio Website</h3>
              <p>A responsive portfolio built with React and TypeScript.</p>
              <p>Technologies: React, TypeScript, CSS</p>
            </div>

            <div className="project-card">
              <img src="/SAPS.png" alt="SAPS Crime Score (SentryPipe)" />
              <h3>SAPS Crime Score (SentryPipe)</h3>
              <p>Azure/Python pipeline combining 10+ years of SAPS data with media sentiment to compute a balanced Safety Score (70% crime, 30% fear index) with heatmaps and suburb drill-down.</p>
              <p>Tech: Azure Functions, Blob/Data Lake, Python (Pandas, GE), spaCy, VADER/TextBlob, Power BI/Streamlit</p>
              <p><a href="https://github.com/youruser/sentrypipe" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://demo.example.com/sentrypipe" target="_blank" rel="noreferrer">Demo</a></p>
            </div>

            <div className="project-card">
              <img src="/lms.png" alt="WanderLearn LMS" />
              <h3>WanderLearn LMS</h3>
              <p>Full-featured LMS built with Next.js 14 and TypeScript. Includes RBAC, course creation, rich content, video, assignments, progress tracking, admin analytics, and messaging.</p>
              <p>Tech: Next.js 14, TypeScript, TailwindCSS, Radix, TipTap, Prisma, PostgreSQL, AWS S3, Better Auth</p>
              <p><a href="https://github.com/youruser/wanderlearn-lms" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://demo.example.com/wanderlearn" target="_blank" rel="noreferrer">Demo</a></p>
            </div>

            <div className="project-card">
              <img src="/chess.jpg" alt="Python Chess Game" />
              <h3>Python Chess Game</h3>
              <p>A chess game developed during a bootcamp.</p>
              <p>Technologies: Python</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experience">
        <div className="section-content">
          <h2>My Experience</h2>
          <div className="experience-item">
            <h3>Junior Systems Administrator — Forvis Mazars</h3>
            <p>Day-to-day administration of Windows Server, Active Directory, M365, endpoint management, networking (DNS/DHCP/VLANs), and user support.</p>
            <p>Skills: AD, Azure AD/M365, Intune, Networking, Scripting</p>
          </div>
          <div className="experience-item">
            <h3>Cloud Administrator Apprentice</h3>
            <p>Assisted with Azure resource provisioning, monitoring, cost optimization, and automation with scripts.</p>
            <p>Skills: Azure, Cloud Governance, Automation</p>
          </div>
          <div className="experience-item">
            <h3>Sales Assistant</h3>
            <p>Developed communication and customer service skills.</p>
            <p>Skills: Customer Service, Problem Solving</p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="achievements">
        <div className="section-content">
          <h2>Achievements</h2>
          <div className="achievement-row" style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'stretch'}}>
            <div className="achievement" style={{flex: '1 1 220px', minWidth: '220px'}}>
              <img src="/AZ-900.png" alt="Microsoft Certified: Azure Fundamentals (AZ-900)" />
              <h3>Microsoft Certified: Azure Fundamentals</h3>
              <p>AZ-900</p>
            </div>
            <div className="achievement" style={{flex: '1 1 220px', minWidth: '220px'}}>
              <img src="/AZ-104.png" alt="Microsoft Certified: Azure Administrator Associate (AZ-104)" />
              <h3>Microsoft Certified: Azure Administrator Associate</h3>
              <p>AZ-104</p>
            </div>
            <div className="achievement" style={{flex: '1 1 220px', minWidth: '220px'}}>
              <img src="/SC-200.png" alt="Microsoft Certified: Security Operations Analyst Associate (SC-200)" />
              <h3>Microsoft Certified: Security Operations Analyst Associate</h3>
              <p>SC-200</p>
            </div>
            <div className="achievement" style={{flex: '1 1 220px', minWidth: '220px'}}>
              <img src="/AWS%20Certified%20Cloud%20Practitioner.png" alt="AWS Certified Cloud Practitioner" />
              <h3>AWS Certified Cloud Practitioner</h3>
              <p>Certified credential</p>
            </div>
            <div className="achievement" style={{flex: '1 1 220px', minWidth: '220px'}}>
              <img src="/fnbappacademy.png" alt="FNB App Academy Graduate" />
              <h3>FNB App Academy</h3>
              <p>Graduate Certificate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="section-content">
          <h2>Let’s Work Together</h2>
          <p>I'm always interested in new opportunities. Don’t hesitate to reach out!</p>
          <div className="contact-info">
            <div>
              <h3>Email</h3>
              <p>nkosingiphilepano24@gmail.com</p>
            </div>
            <div>
              <h3>Location</h3>
              <p>South Africa</p>
            </div>
          </div>
          <form action="https://formspree.io/f/xqeppjgd" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Designed by Nkosingiphile Nkabinde</p>
        <a href="/Nkosingiphile_Nkabinde_Resume1.pdf" download>Download CV</a>
      </footer>
    </div>
  )
}

export default App

