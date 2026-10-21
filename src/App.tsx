import { useEffect, useState } from "react";
import "./App.css";
import DeveloperArt from "./DeveloperArt";
const projects = [
  {
    name: "FANTUBE",
    type: "Full-stack",
    label: "VIDEO PLATFORM",
    description:
      "A full-stack video experience connecting content, channels, and communities.",
    detail:
      "Content pages, channels, viewing history, memberships, API integration, and video-processing workflows.",
    tags: ["React", "Redux Toolkit", "RTK Query", "Laravel", "MySQL"],
    url: "https://www.fantube.app",
    style: "video",
  },
  {
    name: "Asset Management",
    type: "Backend",
    label: "WORKFLOW APPLICATION",
    description: "Bringing clarity to the entire asset lifecycle.",
    detail:
      "Asset registration, search, transfers, rental extensions, write-offs, expiry tracking, and notifications.",
    tags: ["Laravel", "Database", "Automation"],
    url: "",
    style: "asset",
  },
  {
    name: "Government Portals",
    type: "Backend",
    label: "SECURE WEB SYSTEMS",
    description: "Secure, structured tools for organizational workflows.",
    detail:
      "Contributed to government portals with CRUD features, secure login, and role- and permission-based access control.",
    tags: ["Laravel", "REST API", "RBAC"],
    url: "",
    style: "portal",
  },
  {
    name: "Khaing Parami",
    type: "Full-stack",
    label: "DYNAMIC WEBSITE",
    description: "A responsive experience, powered by connected systems.",
    detail:
      "Laravel backend development, Vue.js frontend integration, RESTful APIs, and CRUD operations for efficient data management.",
    tags: ["Laravel", "Vue.js", "MySQL"],
    url: "https://khaingparami.com",
    style: "parami",
  },
  {
    name: "TapTube",
    type: "Backend",
    label: "OPERATOR INTEGRATION",
    description: "Reliable backend services for a connected video platform.",
    detail:
      "Laravel application development, mobile operator integration, CRUD functionality, and backend APIs.",
    tags: ["Laravel", "MySQL", "APIs"],
    url: "https://www.taptubemm.com",
    style: "tap",
  },
];
const skills = [
  {
    icon: "⌘",
    name: "Frontend development",
    text: "Interfaces that feel right.",
    tags: [
      "React.js",
      "Vue.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5 & CSS3",
      "Bootstrap",
      "jQuery",
      "React Router",
    ],
  },
  {
    icon: "{ }",
    name: "Backend & databases",
    text: "Solid foundations. Secure systems.",
    tags: [
      "PHP",
      "Laravel",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "Authentication & RBAC",
    ],
  },
  {
    icon: "↔",
    name: "State & workflow",
    text: "Keeping everything connected.",
    tags: [
      "React Hooks",
      "Redux Toolkit",
      "RTK Query",
      "Zustand",
      "Git & GitHub",
      "Postman",
    ],
  },
];
function App() {
  const [filter, setFilter] = useState("All projects");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(
    null,
  );
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.06 },
    );
    document.querySelectorAll(".reveal").forEach((e) => obs.observe(e));
    const sections = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-10% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main>section[id]")
      .forEach((e) => sections.observe(e));
    return () => {
      obs.disconnect();
      sections.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!selected) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    document.getElementById("close-dialog")?.focus();
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
      document.getElementById(`project-${selected.style}`)?.focus();
    };
  }, [selected]);
  const label = (n: string, t: string) => (
    <div className="section-label">
      <span>{n}</span>
      <span>{t}</span>
    </div>
  );
  const chips = (tags: string[]) => (
    <div className="chips">
      {tags.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
  return (
    <>
      <a className="skip" href="#home">
        Skip to content
      </a>
      <header>
        <a className="logo" href="#home">
          kh<span>.</span>
        </a>
        <nav className={menu ? "open" : ""} aria-label="Main navigation">
          {["Home", "About", "Skills", "Projects", "Experience"].map((n) => (
            <a
              key={n}
              className={active === n.toLowerCase() ? "active" : ""}
              href={"#" + n.toLowerCase()}
              onClick={() => setMenu(false)}
            >
              {n}
            </a>
          ))}
        </nav>
        <a className="nav-contact" href="#contact">
          Let’s talk <span>↗</span>
        </a>
        <button
          className="menu"
          aria-label="Toggle navigation"
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          ☰
        </button>
      </header>
      <main>
        <section id="home" className="hero">
          <div className="hero-top">
            <span className="eyebrow">
              <i /> BASED IN NAY PYI TAW, MYANMAR
            </span>
            <span className="edition">PERSONAL PORTFOLIO / 2026</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="intro">
                Hey there, I’m Kabar <span className="asterisk">✳</span>
              </div>
              <h1>
                Thoughtful code.
                <br />
                Meaningful
                <br />
                <em>digital experiences.</em>
              </h1>
              <p>
                A full-stack web developer turning complex ideas into
                <br className="desktop" /> secure, intuitive applications with{" "}
                <strong>Laravel & React.</strong>
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  Explore my work <span>↗</span>
                </a>
                <a className="text-link" href="#contact">
                  Get in touch <span>↗</span>
                </a>
              </div>
              <div className="hero-foot">
                <span /> FROM BACKEND LOGIC TO THE LAST PIXEL.
              </div>
            </div>
            <div className="hero-visual">
              <div className="orbit one" />
              <div className="orbit two" />
              <div className="float-tag top-tag">
                <span>✦</span> Building with purpose
              </div>
              <div className="portrait">
                <div className="portrait-top">
                  THE DEVELOPER <span>↗</span>
                </div>
                <DeveloperArt />
                <div className="portrait-name">
                  <div>
                    Kabar Htut<small>Full-stack web developer</small>
                  </div>
                  <span>✳</span>
                </div>
              </div>
              <div className="float-tag bottom-tag">
                <span className="code">&lt;/&gt;</span>
                <div>
                  Laravel × React<small>My everyday toolkit</small>
                </div>
                <i />
              </div>
              <span className="coordinates">19.7633° N · 96.0785° E</span>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="tech-strip">
              <span>BUILT WITH CARE. POWERED BY</span>
              <b>Laravel</b>
              <i>×</i>
              <b>React</b>
              <i>×</i>
              <b>MySQL</b>
            </div>
            <a className="scroll" href="#about">
              SCROLL TO EXPLORE <span>↓</span>
            </a>
          </div>
        </section>
        <section id="about" className="section reveal">
          {label("01 / ABOUT ME", "A LITTLE CONTEXT")}
          <div className="about-grid">
            <div>
              <h2>
                A developer’s mind.
                <br />
                <em>A builder’s spirit.</em>
              </h2>
              <p className="note">
                ↳ &nbsp; Curious by nature.
                <br />
                &nbsp; &nbsp; &nbsp;Intentional by design.
              </p>
            </div>
            <div className="about-copy">
              <p>
                I’m Kabar Htut, a web developer based in Nay Pyi Taw, Myanmar. I
                build applications that bring together dependable backend
                architecture and thoughtful frontend experiences.
              </p>
              <p>
                At Secure Link, I work on Laravel applications, RESTful APIs,
                and organizational workflows. From authentication and
                permissions to reusable React components, I care about making
                software secure, maintainable, and easy to use.
              </p>
              <div className="personal-grid">
                {[
                  ["LOCATION", "Nay Pyi Taw, Myanmar"],
                  ["FOCUS", "Full-stack development"],
                  ["DATE OF BIRTH", "09 December 1999"],
                  ["LANGUAGES I CODE IN", "PHP & JavaScript"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <small>{k}</small>
                    {v}
                  </div>
                ))}
              </div>
              <a
                className="text-link"
                href="https://github.com/KabarHtut"
                target="_blank"
                rel="noreferrer"
              >
                A look at my GitHub <span>↗</span>
              </a>
            </div>
          </div>
          <div className="stats">
            <div>
              <strong>
                2023<span>↗</span>
              </strong>
              <p>Professional journey began</p>
            </div>
            <div>
              <strong>
                10<span>+</span>
              </strong>
              <p>Featured professional projects</p>
            </div>
            <div>
              <strong>
                02<span>↔</span>
              </strong>
              <p>Frontend & backend, connected</p>
            </div>
            <div className="motto">
              <small>THE APPROACH</small>
              <p>
                Make it work.
                <br />
                Make it <em>matter.</em>
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="section reveal">
          {label("02 / MY TOOLKIT", "THE RIGHT TOOLS, USED WELL")}
          <div className="section-heading">
            <h2>
              Built on solid <em>foundations.</em>
            </h2>
            <p>
              The technologies I use to move
              <br />
              from an idea to a working product.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <article className="skill-card" key={s.name}>
                <div className="skill-top">
                  <span>{s.icon}</span>
                  <small>0{i + 1}</small>
                </div>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
                {chips(s.tags)}
              </article>
            ))}
          </div>
          <div className="learning">
            <i />
            <b>Always in progress</b>
            <span>Currently exploring TanStack Query, Docker & CI/CD.</span>
            <span className="arrow">↗</span>
          </div>
          <div className="tools">
            ALSO IN THE TOOLBOX{" "}
            <span>Composer · VS Code · Linux · Apache · cPanel</span>
          </div>
        </section>
        <section id="projects" className="section reveal">
          {label("03 / SELECTED WORK", "IDEAS, BROUGHT TO LIFE")}
          <div className="section-heading">
            <h2>
              A few things <em>I’ve built.</em>
            </h2>
            <p>
              Professional contributions across
              <br />
              platforms, portals, and workflows.
            </p>
          </div>
          <div className="filters" aria-label="Filter projects">
            {["All projects", "Full-stack", "Backend"].map((f) => (
              <button
                key={f}
                className={filter === f ? "selected" : ""}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
                {f === "All projects" && <small>05</small>}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {projects
              .filter((p) => filter === "All projects" || p.type === filter)
              .map((p) => (
                <button
                  id={"project-" + p.style}
                  key={p.name}
                  className={"project-card " + p.style}
                  onClick={() => setSelected(p)}
                >
                  <div className="project-art">
                    <span className="project-index">
                      0{projects.indexOf(p) + 1} / PROJECT
                    </span>
                    <span className="project-arrow">↗</span>
                    {["video", "tap"].includes(p.style) ? (
                      <div className="video-mock">
                        <div className="mock-sidebar">
                          <b>{p.style === "video" ? "f." : "t."}</b>
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="mock-body">
                          <div className="mock-search" />
                          <div className="screen">
                            <span>▶</span>
                            <small>
                              {p.style === "video"
                                ? "Stories worth watching."
                                : "A world of entertainment."}
                            </small>
                          </div>
                          <div className="thumbnails">
                            <i />
                            <i />
                            <i />
                          </div>
                        </div>
                      </div>
                    ) : p.style === "asset" ? (
                      <div className="dashboard">
                        <div className="dash-top">
                          <b>Asset overview</b>
                          <span>+ Add asset</span>
                        </div>
                        <div className="dash-stats">
                          <div>
                            <small>Asset lifecycle</small>
                            <b>At a glance</b>
                          </div>
                          <div>
                            <small>Workflow</small>
                            <b>In control ↗</b>
                          </div>
                        </div>
                        <div className="chart">
                          {[35, 55, 45, 75, 60, 90, 72, 100, 86, 110].map(
                            (h, i) => (
                              <i key={i} style={{ height: h }} />
                            ),
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="portal-mock">
                        <div>{p.style === "portal" ? "◈" : "✳"}</div>
                        <small>
                          {p.style === "portal"
                            ? "CONNECTED. SECURE. ACCESSIBLE."
                            : "KHAING PARAMI"}
                        </small>
                        <h4>
                          {p.style === "portal" ? (
                            <>
                              A better way
                              <br />
                              to connect.
                            </>
                          ) : (
                            <>
                              Purpose in
                              <br />
                              every detail.
                            </>
                          )}
                        </h4>
                        <span>Explore the platform ↗</span>
                      </div>
                    )}
                    <span className="illustration">INTERFACE ILLUSTRATION</span>
                  </div>
                  <div className="project-info">
                    <span className="eyebrow">{p.label}</span>
                    <h3>
                      {p.name}
                      <span>↗</span>
                    </h3>
                    <p>{p.description}</p>
                    {chips(p.tags)}
                  </div>
                </button>
              ))}
          </div>
        </section>
        <section id="experience" className="section reveal">
          {label("04 / THE JOURNEY", "EXPERIENCE & EDUCATION")}
          <div className="journey-grid">
            <div>
              <h2>
                Learning. Building.
                <br />
                <em>Moving forward.</em>
              </h2>
              <p className="journey-intro">
                Every role and every project adds
                <br />
                another perspective to how I build.
              </p>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/kabar-htut-a1765725b"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <span>↗</span>
              </a>
            </div>
            <div className="timeline">
              <article>
                <div className="timeline-meta">
                  MAY 2023 — PRESENT <span>EXPERIENCE</span>
                </div>
                <h3>PHP Laravel Developer</h3>
                <h4>
                  Secure Link <span>· Nay Pyi Taw</span>
                </h4>
                <p>IT System and Technology Services Provider</p>
                <ul>
                  <li>
                    Develop and maintain Laravel applications and RESTful APIs.
                  </li>
                  <li>
                    Implement authentication, roles, permissions, and input
                    validation.
                  </li>
                  <li>
                    Integrate databases and external APIs; improve database
                    queries.
                  </li>
                  <li>
                    Collaborate with frontend and UI/UX teams and support
                    deployments.
                  </li>
                  <li>
                    Apply CSRF and XSS protections to support application
                    security.
                  </li>
                </ul>
              </article>
              <article>
                <div className="timeline-meta">
                  COMPUTER SCIENCE <span>EDUCATION</span>
                </div>
                <h3>University of Computer Studies, Magway</h3>
                <p>Third Year in Computer Science</p>
              </article>
              <article>
                <div className="timeline-meta">
                  CONTINUED LEARNING <span>TRAINING</span>
                </div>
                <h3>Building beyond the classroom</h3>
                <p>
                  Code Lab AZ Developer Course
                  <br />
                  Creative Coder MM MERN Stack Course
                </p>
              </article>
              <article>
                <div className="timeline-meta">
                  AUGUST 2020 <span>VOLUNTEER</span>
                </div>
                <h3>UCSMGY Online ICT Project Competition</h3>
                <p>
                  Contributed as a developer to a Magway City website with hotel
                  booking and restaurant food ordering, using PHP, JavaScript,
                  and Bootstrap.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section id="contact" className="section contact reveal">
          {label("05 / SAY HELLO", "GOOD THINGS START WITH A CONVERSATION")}
          <div className="contact-content">
            <div>
              <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
              <h2>
                Let’s build something
                <br />
                <em>worth putting out there.</em>
              </h2>
              <a className="email" href="mailto:kabarhtut21@gmail.com">
                kabarhtut21@gmail.com <span>↗</span>
              </a>
            </div>
            <a
              className="contact-circle"
              aria-label="Email Kabar Htut"
              href="mailto:kabarhtut21@gmail.com"
            >
              ↗
            </a>
          </div>
          <div className="contact-links">
            <a href="tel:+959755545204">+95 9 755 545 204 ↗</a>
            <div>
              <a
                href="https://github.com/KabarHtut"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/kabar-htut-a1765725b"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <a className="logo" href="#home">
          kh<span>.</span>
        </a>
        <span>
          © {new Date().getFullYear()} Kabar Htut. Crafted with intention.
        </span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Tab") {
                const nodes =
                  e.currentTarget.querySelectorAll<HTMLElement>("button,a");
                const first = nodes[0];
                const last = nodes[nodes.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                  e.preventDefault();
                  last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                  e.preventDefault();
                  first.focus();
                }
              }
            }}
          >
            <button
              id="close-dialog"
              className="modal-close"
              aria-label="Close project"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <span className="eyebrow">{selected.label}</span>
            <h2 id="project-title">{selected.name}</h2>
            <p>{selected.detail}</p>
            {chips(selected.tags)}
            {selected.url ? (
              <a
                className="button primary"
                href={selected.url}
                target="_blank"
                rel="noreferrer"
              >
                Visit website ↗
              </a>
            ) : (
              <p className="private-note">
                Professional project · Public demo link not provided.
              </p>
            )}
          </section>
        </div>
      )}
    </>
  );
}
export default App;
