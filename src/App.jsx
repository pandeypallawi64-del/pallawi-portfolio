
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Bot,
  Code2,
  ExternalLink,
  Globe,
  Menu,
  MessageCircle,
  Send,
  Sparkles,
  BriefcaseBusiness,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "CivicFix-AI",
    category: "AI · CIVIC TECHNOLOGY",
    description:
      "An AI-powered civic issue reporting platform that helps categorize, prioritize, and track public problems.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Leaflet"],
    live: "https://civic-fix-ai-peach.vercel.app",
    github: "https://github.com/pandeypallawi64-del/CivicFix-AI",
    accent: "violet",
  },
  {
    number: "02",
    name: "Wanderlust",
    category: "FULL-STACK WEB APP",
    description:
      "A travel listing platform featuring authentication, listing management, reviews, ratings, and maps.",
    stack: ["JavaScript", "Node.js", "Express", "MongoDB", "Cloudinary"],
    live: "https://major-project-r0r8.onrender.com/listings",
    github: "https://github.com/pandeypallawi64-del/Wanderlust",
    accent: "blue",
  },
  {
    number: "03",
    name: "RoadGuard",
    category: "SMART MOBILITY",
    description:
      "A road-safety project exploring map-based navigation and comparisons of safer routes.",
    stack: ["React", "JavaScript", "Leaflet", "OpenStreetMap"],
    live: "https://road-guard-tau.vercel.app",
    github: "https://github.com/pandeypallawi64-del/RoadGuard",
    accent: "pink",
  },
];

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Java",
  "C++",
  "Python",
  "HTML & CSS",
  "REST APIs",
  "Git & GitHub",
];


const answers = [
  {
    keywords: ["who", "about", "pallawi", "introduce", "background"],
    answer:
      "Pallawi Pandey is a BCA Computer Science student at RKDF University, graduating in 2027 with a CGPA of 9.29. She builds full-stack web applications and is interested in software engineering, frontend development, and AI-powered products.",
  },
  {
    keywords: ["civicfix", "civic", "project", "projects", "built"],
    answer:
      "CivicFix-AI is an AI-powered civic issue reporting platform with issue categorization, priority assessment, location mapping, and status tracking. Pallawi also built Wanderlust, a travel listing application with authentication and reviews, and RoadGuard, a map-based road-safety project.",
  },
  {
    keywords: ["avalon", "openhack"],
    answer:
      "Pallawi submitted the first version of CivicFix-AI to Avalon OpenHack 2026. She continued improving the project afterward. Avalon was an important step in her project development journey.",
  },
  {
    keywords: ["forgehacks", "forge", "hackathon"],
    answer:
      "Pallawi continued developing CivicFix-AI for ForgeHacks Online 2026 and received a participation certificate. Ask her about the project to learn how it helps people report and track civic issues.",
  },
  {
    keywords: ["aayam", "mood tune", "mood tune songs"],
    answer:
      "Pallawi participated in the Aayam Tech hackathon with Mood Tune Songs.",
  },
  {
    keywords: ["skill", "technology", "tech", "stack"],
    answer:
      "Pallawi works with JavaScript, React.js, Node.js, Express.js, MongoDB, SQL, Java, C++, Python, HTML, CSS, REST APIs, and Git/GitHub.",
  },
  {
    keywords: ["internship", "ccl", "experience"],
    answer:
      "Pallawi has an internship opportunity in Full-Stack Development at CCL. For detailed responsibilities and dates, please contact Pallawi directly.",
  },
  {
    keywords: ["education", "college", "degree", "cgpa"],
    answer:
      "Pallawi is pursuing a BCA in Computer Science at RKDF University from 2024 to 2027. Her reported CGPA is 9.29.",
  },
  {
    keywords: ["hire", "job", "opportunity", "career"],
    answer:
      "Pallawi is interested in software engineering, frontend, and full-stack development opportunities. Explore her projects and GitHub repositories to see her practical work.",
  },
  {
    keywords: ["contact", "email", "reach", "linkedin"],
    answer:
      "You can connect with Pallawi through LinkedIn at linkedin.com/in/pallawi-pandey-392183357 or explore her projects on GitHub at github.com/pandeypallawi64-del.",
  },
];



function getAnswer(question) {
  const normalized = question.toLowerCase();

  // Check specific project names before general keywords.
  if (normalized.includes("wanderlust")) {
    return "Wanderlust is a full-stack travel listing platform inspired by travel marketplace applications. It includes user authentication, listing management, reviews, ratings, and maps. Its tech stack includes JavaScript, Node.js, Express.js, MongoDB, and Cloudinary. Explore the live project: https://major-project-r0r8.onrender.com/listings . Source code: https://github.com/pandeypallawi64-del/Wanderlust";
  }

  if (normalized.includes("roadguard") || normalized.includes("road guard")) {
    return "RoadGuard is a smart road-safety project focused on map-based navigation and comparing safer routes. It uses React, JavaScript, Leaflet, OpenStreetMap, and routing services. Live project: https://road-guard-tau.vercel.app/ . Source code: https://github.com/pandeypallawi64-del/RoadGuard";
  }

  if (normalized.includes("civicfix") || normalized.includes("civic fix")) {
    return "CivicFix-AI is an AI-powered civic issue reporting platform that helps categorize, prioritize, locate, and track public problems. It uses React, Node.js, Express.js, MongoDB, and Leaflet. Live project: https://civic-fix-ai-peach.vercel.app/ . Source code: https://github.com/pandeypallawi64-del/CivicFix-AI";
  }

  const match = answers.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  );

  return (
    match?.answer ||
    "I can tell you about Pallawi's background, skills, projects, and career interests. Try asking about Wanderlust, RoadGuard, CivicFix-AI, her skills, or her hackathon experience."
  );
}


export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm Pallawi's portfolio assistant. Ask me about her projects, skills, or development journey.",
    },
  ]);

  function sendMessage(event) {
    event.preventDefault();
    const trimmed = question.trim();
    if (!trimmed) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text: trimmed },
      { role: "assistant", text: getAnswer(trimmed) },
    ]);
    setQuestion("");
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">P.</span>
          <span>pallawi<span className="brand-dot">.</span></span>
        </a>

        <button
          className="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a href="#achievements" onClick={closeMenu}>Achievements</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <button className="nav-ai" onClick={() => setChatOpen(true)}>
          <Sparkles size={15} /> Meet my AI
        </button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">
              <span className="status-dot" />
              OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES
            </div>

            <p className="hero-pretitle">HELLO, WORLD! I'M</p>
            <h1>
              Pallawi
              <span className="gradient-text"> Pandey.</span>
            </h1>
            <h2>
              I turn ideas into
              <span className="outline-text"> digital experiences.</span>
            </h2>
            <p className="hero-description">
              BCA student, full-stack developer, and curious builder exploring
              the intersection of web technology, AI, and real-world problems.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Explore my work <ArrowRight size={17} />
              </a>
              <button
                className="button-secondary"
                onClick={() => setChatOpen(true)}
              >
                <MessageCircle size={17} /> Talk to my AI
              </button>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/pandeypallawi64-del"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={17} /> GitHub
              </a>
              <span className="social-divider" />
              <a
                href="https://linkedin.com/in/pallawi-pandey-392183357"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-card">
              <div className="profile-top">
                <span className="window-dots"><i /><i /><i /></span>
                <span className="profile-label">DEVELOPER PROFILE</span>
                <Code2 size={17} />
              </div>

              <div className="profile-art">
                <div className="art-grid" />
                <div className="art-glow" />
                <div className="code-float code-float-one">{"<build />"}</div>
                <div className="code-float code-float-two">{"{ create: true }"}</div>
                <div className="monogram">P<span>.</span></div>
                <div className="art-caption">IDEAS → INTERFACES → IMPACT</div>
              </div>

              <div className="profile-bottom">
                <div>
                  <h3>Pallawi Pandey</h3>
                  <p>Full Stack Developer · BCA</p>
                </div>
                <div className="profile-symbol"><Sparkles size={19} /></div>
              </div>
            </div>

            <div className="floating-chip chip-top">
              <span className="chip-icon purple"><Code2 size={16} /></span>
              <span><strong>Full Stack</strong><small>Web Development</small></span>
            </div>
            <div className="floating-chip chip-bottom">
              <span className="chip-icon blue"><Bot size={16} /></span>
              <span><strong>AI Curious</strong><small>Building what matters</small></span>
            </div>
          </motion.div>

          <a href="#about" className="scroll-cue">
            <span className="scroll-line" /> SCROLL TO EXPLORE
            <ArrowDownRight size={15} />
          </a>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-heading">
            <span className="section-kicker">01 / A LITTLE ABOUT ME</span>
            <h2>Curious mind.<br /><span className="gradient-text">Builder's heart.</span></h2>
          </div>
          <div className="about-content">
            <p className="about-lead">
              I believe the best way to learn technology is to use it to solve
              problems that matter.
            </p>
            <p className="muted">
              I'm pursuing a BCA in Computer Science and building full-stack
              applications to strengthen my engineering skills. From civic
              issue reporting to travel listings and road safety, I enjoy
              taking ideas from a first sketch to a working web experience.
            </p>
            
           <a
              href="/Pallawi_Pandey_Resume.pdf"
              download="Pallawi_Pandey_Resume.pdf"
              className="resume-download"
            >
  <span>Download Resume</span>
  <ArrowDownRight size={18} />
</a>

            <div className="about-note">
              <Sparkles size={18} />
              <span>Learning by building. Improving with every iteration.</span>
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-title-row">
            <div className="section-heading">
              <span className="section-kicker">02 / SELECTED WORK</span>
              <h2>Things I've <span className="gradient-text">built.</span></h2>
            </div>
            <span className="section-side-note">IDEAS MADE TANGIBLE ↘</span>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                className={`project-card ${project.accent}`}
                key={project.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="project-card-top">
                  <span className="project-number">{project.number} / 03</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-visual">
                  <div className="project-orb" />
                  <div className="project-window">
                    <div className="mini-window-bar"><i /><i /><i /></div>
                    <div className="mini-window-body">
                      <span className="mini-line wide" />
                      <span className="mini-line medium" />
                      <div className="mini-blocks"><i /><i /><i /></div>
                      <span className="mini-line short" />
                    </div>
                  </div>
                  <span className="project-visual-icon">
                    {project.number === "01" ? <Bot /> :
                      project.number === "02" ? <Globe /> : <ArrowRight />}
                  </span>
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live project <ArrowUpRightIcon />
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Code2 size={16} /> source code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="section-heading">
            <span className="section-kicker">03 / MY TOOLKIT</span>
            <h2>Tools of the <span className="gradient-text">trade.</span></h2>
            <p className="muted">Technologies I use to bring ideas to life.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                className="skill-chip"
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035 }}
              >
                <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
                <span>{skill}</span>
                <ArrowDownRight size={15} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="journey section-wrap" id="journey">
          <div className="section-heading">
            <span className="section-kicker">04 / THE JOURNEY SO FAR</span>
            <h2>Always in <span className="gradient-text">progress.</span></h2>
          </div>
          <div className="journey-grid">
           
<div className="journey-card">
  <span className="journey-label">HACKATHON · AVALON OPENHACK</span>
  <h3>CivicFix-AI — First Version</h3>
  <p>
    Submitted the initial version of an AI-powered civic
    issue reporting platform at Avalon OpenHack 2026.
  </p>
  <span className="journey-date">SEPTEMBER 2026</span>
</div>

<div className="journey-card">
  <span className="journey-label">HACKATHON · FORGEHACKS</span>
  <h3>Improving CivicFix-AI</h3>
  <p>
    Continued developing the project and received a
    participation certificate for ForgeHacks Online 2026.
  </p>
  <span className="journey-date">OCTOBER 2026</span>
</div>

<div className="journey-card">
  <div className="journey-icon">
    <BriefcaseBusiness />
  </div>
  <span className="journey-date">October 2026</span>
  <h3>Full Stack Development Intern</h3>
  <p className="journey-place">Central Coalfields Limited (CCL)</p>
  <p>
    Gaining practical experience in full-stack development and applying
    web development skills through internship project work.
  </p>
  <span className="journey-tag">Completing 31 Oct 2026</span>
</div>

          </div>
        </section>
        
<section className="journey section-wrap" id="achievements">
  <div className="section-heading">
    <span className="section-kicker">
      05 / ACHIEVEMENTS & CERTIFICATIONS
    </span>
    <h2>
      Milestones that <span className="gradient-text">matter.</span>
    </h2>
    <p className="muted">
      Learning, building, and showing up for new challenges.
    </p>
  </div>

  <div className="journey-grid">
    <div className="journey-card">
      <div className="journey-icon"><Sparkles /></div>
      <span className="journey-label">HACKATHON PARTICIPATION</span>
      <h3>Avalon OpenHack 2026</h3>
      <p>
        Submitted the first version of CivicFix-AI, an AI-powered
        civic issue reporting platform.
      </p>
      <span className="journey-date">SEPTEMBER 2026</span>
    </div>

    <div className="journey-card">
      <div className="journey-icon"><Code2 /></div>
      <span className="journey-label">HACKATHON CERTIFICATE</span>
      <h3>ForgeHacks Online 2026</h3>
      <p>
        Continued improving CivicFix-AI and received a participation
        certificate for ForgeHacks Online 2026.
      </p>
      <span className="journey-date">OCTOBER 2026</span>
    </div>

    <div className="journey-card">
      <div className="journey-icon"><Globe /></div>
      <span className="journey-label">DSA CERTIFICATION</span>
      <h3>Apna College — Alpha</h3>
      <p>
        Completed learning in Data Structures and Algorithms with Java.
      </p>
      <span className="journey-date">DATA STRUCTURES & ALGORITHMS</span>
    </div>

    <div className="journey-card">
      <div className="journey-icon"><BriefcaseBusiness /></div>
      <span className="journey-label">FULL-STACK CERTIFICATION</span>
      <h3>Apna College — Delta</h3>
      <p>
        Full Stack Web Development learning covering web application
        development and related technologies.
      </p>
      <span className="journey-date">FULL STACK WEB DEVELOPMENT</span>
    </div>

    <div className="journey-card">
      <div className="journey-icon"><Bot /></div>
      <span className="journey-label">HACKATHON PROJECT</span>
      <h3>Aayam Tech — Mood Tune Songs</h3>
      <p>
        Participated in the Aayam Tech hackathon with the Mood Tune
        Songs project.
      </p>
      <span className="journey-date">HACKATHON PARTICIPATION</span>
    </div>
  </div>
</section>


        <section className="contact section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-glow" />
            <span className="section-kicker">05 / LET'S CONNECT</span>
            <h2>Have an idea?<br /><span className="gradient-text">Let's build it.</span></h2>
            <p>
              I'm interested in software engineering and full-stack
              opportunities, collaborative projects, and learning from builders.
            </p>
            
<div className="contact-details">
  <a href="tel:+917859097487">
    <span>Mobile</span>
    <strong>+91 78590 97487</strong>
  </a>

  <a href="mailto:pallawipandey193@gmail.com">
    <span>Email</span>
    <strong>pallawipandey193@gmail.com</strong>
  </a>
</div>

            <div className="contact-actions">
              <a
                className="button-primary"
                href="https://linkedin.com/in/pallawi-pandey-392183357"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <ArrowRight size={17} />
              </a>
              <a
                className="button-secondary"
               href="https://github.com/pandeypallawi64-del"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={17} /> Visit GitHub
              </a>
            </div>
            <div className="contact-ai">
              <Bot size={20} />
              <span>Want to know more about my work?</span>
              <button onClick={() => setChatOpen(true)}>Ask my AI <ArrowRight size={15} /></button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a href="#home" className="brand"><span className="brand-mark">P.</span> pallawi<span className="brand-dot">.</span></a>
        <span>Designed with curiosity. Built with code.</span>
        <span>© {new Date().getFullYear()} Pallawi Pandey</span>
      </footer>

      <button
        className="chat-launcher"
        aria-label="Open AI portfolio assistant"
        onClick={() => setChatOpen(!chatOpen)}
      >
        {chatOpen ? <X /> : <Bot />}
        <span>{chatOpen ? "Close assistant" : "Ask my AI"}</span>
      </button>

      {chatOpen && (
        <motion.aside
          className="chat-panel"
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
        >
          <div className="chat-header">
            <div className="chat-avatar"><Bot size={21} /></div>
            <div>
              <strong>Pallawi's AI</strong>
              <span><i /> Portfolio assistant</span>
            </div>
            <button className="chat-close" onClick={() => setChatOpen(false)} aria-label="Close chat"><X size={18} /></button>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div className={`chat-bubble ${message.role}`} key={index}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="suggested-questions">
            {["Who is Pallawi?", "Explain CivicFix-AI", "What are her skills?"].map((item) => (
              <button key={item} onClick={() => setQuestion(item)}>{item}</button>
            ))}
          </div>
          <form className="chat-form" onSubmit={sendMessage}>
            <input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask me about Pallawi..."
              aria-label="Ask the AI assistant"
            />
            <button aria-label="Send question" type="submit"><Send size={17} /></button>
          </form>
          <p className="chat-disclaimer">Portfolio demo assistant · Answers from curated information</p>
        </motion.aside>
      )}
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ExternalLink size={15} />;
}
