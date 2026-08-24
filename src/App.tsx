import { useState } from 'react'
import TalkingPhoto from './TalkingPhoto'
import FloatingLogos from './FloatingLogos'
import './App.css'

const INTRO_SCRIPT =
  "I am a dedicated and hardworking technology professional who has proactively built a strong foundation in IT support and cloud computing through self-teaching, real-world experience, and recognized certifications. " +
  "My journey reflects a determined commitment to continuous learning and growth, having gained practical expertise in managing Microsoft Azure environments, automating cloud operations, troubleshooting complex technical issues, and delivering excellent customer service, all without a formal degree. " +
  "My life experiences have significantly shaped my professional capabilities, work ethic, and approach to challenges in the technology field. Through diverse roles and self-driven learning, I have developed resilience, adaptability, and a strong determination to succeed, qualities essential in IT and cloud services. " +
  "Having worked in various positions, including sales assistant and Junior Cloud Administrator, I refined my communication and customer service skills, learning to engage effectively with different people and solve problems empathetically. " +
  "Choosing to be self-taught and achieve certifications despite not holding formal degrees demonstrates my discipline, persistence, and resourcefulness. " +
  "Overall, my life experiences have fostered a results-driven mindset that enables me to handle complexity, quickly learn new technologies, and maintain a positive, solution-oriented attitude."

function App() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [activeTab, setActiveTab] = useState('home')

  const selectTab = (tab: string) => {
    setActiveTab(tab)
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const tabClass = (tab: string) => `tab-panel ${activeTab === tab ? 'active-tab' : ''}`

  return (
    <div className={`app ${theme === 'light' ? 'light' : ''}`}>
      <FloatingLogos count={16} />
      <header className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="nav-container">
          <button className="logo" onClick={() => selectTab('home')}>Nkosingiphile</button>
          <nav className="nav-links" role="tablist" aria-label="Portfolio sections">
            <button role="tab" aria-selected={activeTab === 'education'} onClick={() => selectTab('education')}>Education</button>
            <button role="tab" aria-selected={activeTab === 'skills'} onClick={() => selectTab('skills')}>Skills</button>
            <button role="tab" aria-selected={activeTab === 'projects'} onClick={() => selectTab('projects')}>Projects</button>
            <button role="tab" aria-selected={activeTab === 'experience'} onClick={() => selectTab('experience')}>Experience</button>
            <button role="tab" aria-selected={activeTab === 'achievements'} onClick={() => selectTab('achievements')}>Achievements</button>
            <a href="/Nkosingiphile_Nkabinde_Resume1.pdf" download className="cta-nav strong">Download CV</a>
            <button className="cta-nav" role="tab" aria-selected={activeTab === 'contact'} onClick={() => selectTab('contact')}>Contact</button>
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
          <button onClick={() => selectTab('education')}>Education</button>
          <button onClick={() => selectTab('skills')}>Skills</button>
          <button onClick={() => selectTab('projects')}>Projects</button>
          <button onClick={() => selectTab('experience')}>Experience</button>
          <button onClick={() => selectTab('achievements')}>Achievements</button>
          <a onClick={() => setOpen(false)} href="/Nkosingiphile_Nkabinde_Resume1.pdf" download className="cta-nav strong">Download CV</a>
          <button onClick={() => selectTab('contact')} className="cta-nav">Contact</button>
        </div>
      </header>
      {/* Hero Section */}
      <section id="home" className={`hero ${tabClass('home')}`} role="tabpanel" aria-hidden={activeTab !== 'home'}>
        <div className="hero-inner">
          <div className="hero-content">
            <h1>I'm Nkosingiphile Nkabinde</h1>
            <p className="subtitle">Cloud-savvy Software Developer building data-driven products</p>
            <p>I am a dedicated and hardworking technology professional who has proactively built a strong foundation in IT support and cloud computing through self-teaching, real-world experience, and recognized certifications.</p>
            <button onClick={() => selectTab('contact')} className="cta-button">Get In Touch</button>
            <div className="social-links">
              <a href="mailto:nkosingiphilepano24@gmail.com">Email</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div className="profile-photo">
            <TalkingPhoto
              src="/nkosi2.jpg"
              alt="Nkosingiphile Nkabinde profile"
              script={INTRO_SCRIPT}
              mouth={{ top: 52, left: 42, width: 16, height: 4 }}
            />
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className={`education ${tabClass('education')}`} role="tabpanel" aria-hidden={activeTab !== 'education'}>
        <div className="section-content">
          <h2>Education</h2>
          <div className="education-item">
            <h3>QCTO NQF Level 5: AI Developer Programme</h3>
            <p>September 2025 - September 2026 · In progress</p>
          </div>
          <div className="education-item">
            <h3>Diploma in Mathematical Sciences</h3>
            <p>Cape Peninsula University of Technology · 2022 - 2024 (incomplete)</p>
          </div>
          <div className="education-item">
            <h3>Bachelor of Commerce (Accounting)</h3>
            <p>University of Mpumalanga · Discontinued in 2021</p>
          </div>
          <div className="education-item">
            <h3>Matric (Grade 12)</h3>
            <p>St Lewis Bertrand's High School · Graduated 2020</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className={`skills ${tabClass('skills')}`} role="tabpanel" aria-hidden={activeTab !== 'skills'}>
        <div className="section-content">
          <h2>My Skills</h2>
          <div className="skill">
            <span>Cloud platforms: AWS and Microsoft Azure</span>
            <div className="progress-bar"><div className="progress" style={{width: '90%'}}></div></div>
          </div>
          <div className="skill">
            <span>Docker and Kubernetes: containerisation and orchestration</span>
            <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
          </div>
          <div className="skill">
            <span>MLOps: MLflow, model CI/CD, GitHub Actions and Azure ML</span>
            <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
          </div>
          <div className="skill">
            <span>Python and Bash: automation and AI scripting</span>
            <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
          </div>
          <div className="skill">
            <span>AI security: IAM, guardrails and secrets management</span>
            <div className="progress-bar"><div className="progress" style={{width: '80%'}}></div></div>
          </div>
          <div className="skill">
            <span>Model serving: vLLM, Hugging Face and TensorRT</span>
            <div className="progress-bar"><div className="progress" style={{width: '80%'}}></div></div>
          </div>
          <div className="skill">
            <span>Infrastructure as Code: Terraform</span>
            <div className="progress-bar"><div className="progress" style={{width: '75%'}}></div></div>
          </div>
          <div className="skill">
            <span>Windows Server, Active Directory and networking (DNS, DHCP, VLANs)</span>
            <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={`projects ${tabClass('projects')}`} role="tabpanel" aria-hidden={activeTab !== 'projects'}>
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
              <h3>Newcastle Crime Watch</h3>
              <p>This Crime Watch app is a dedicated safety platform for the Newcastle Township (KZN) community. It enables residents to report incidents via geolocated forms, track real-time crime feeds, and receive urgent safety alerts. With quick-dial emergency contacts and localized prevention tips, it empowers citizens to collaborate with SAPS for a safer neighborhood. </p>
              <p>Tech: Next.js 14, TypeScript, TailwindCSS, Radix, TipTap, Prisma, PostgreSQL, AWS S3, Better Auth</p>
              <p><a href="https://github.com/youruser/wanderlearn-lms" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://demo.example.com/wanderlearn" target="_blank" rel="noreferrer">Demo</a></p>
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
      <section id="experience" className={`experience ${tabClass('experience')}`} role="tabpanel" aria-hidden={activeTab !== 'experience'}>
        <div className="section-content">
          <h2>My Experience</h2>
          <div className="experience-item">
            <h3>Systems Administrator & AI Developer — Forvis Mazars, Cape Town</h3>
            <p>September 2025 - Present</p>
            <ul className="experience-list">
              <li>Provision and maintain on-premises and cloud infrastructure across AWS and Azure, including Kubernetes and Docker environments for AI workloads.</li>
              <li>Build model CI/CD pipelines with MLflow, Kubeflow, GitHub Actions and Azure ML.</li>
              <li>Implement IAM, secrets management, network policies, privacy controls and model guardrails.</li>
              <li>Administer Windows Server, Active Directory, DNS, DHCP and VLANs while owning ticket lifecycles and SLA compliance.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Cloud Administrator — Forvis Mazars Institute of Development, Cape Town</h3>
            <p>September 2024 - August 2025</p>
            <p>Completed intensive cloud administration training and hands-on labs as part of a Software Development Programme, while working as a Junior Data Analyst. Deployed, configured and managed AWS and Azure resources, troubleshot infrastructure issues, and optimised performance.</p>
          </div>
          <div className="experience-item">
            <h3>Shop Assistant — KwaNobuhle Supermarket, Newcastle</h3>
            <p>February 2024 - June 2024</p>
            <p>Welcomed shoppers, provided product advice, handled checkout and payments, and maintained an organised retail environment.</p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className={`achievements ${tabClass('achievements')}`} role="tabpanel" aria-hidden={activeTab !== 'achievements'}>
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
              <p>Issued January 2025 · Expires January 2027</p>
            </div>
            <div className="achievement" style={{flex: '1 1 220px', minWidth: '220px'}}>
              <img src="/AWS%20Certified%20Cloud%20Practitioner.png" alt="AWS Cloud Quest: Cloud Practitioner" />
              <h3>AWS Cloud Quest: Cloud Practitioner</h3>
              <p>Amazon Web Services · Issued June 2025</p>
            </div>
            <div className="achievement" style={{flex: '1 1 220px', minWidth: '220px'}}>
              <div className="achievement-mark" aria-hidden="true">AI</div>
              <h3>AWS AI Practitioner Challenge</h3>
              <p>Udacity · Issued May 2026</p>
            </div>
            <div className="achievement" style={{flex: '1 1 220px', minWidth: '220px'}}>
              <div className="achievement-mark" aria-hidden="true">SFIA</div>
              <h3>SFIA Business Analysis Skills Badges - Level 3</h3>
              <p>APMG International · Issued June 2025 · Expires June 2028</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`contact ${tabClass('contact')}`} role="tabpanel" aria-hidden={activeTab !== 'contact'}>
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
