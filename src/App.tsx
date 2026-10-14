import { useEffect, useState } from "react";

type Status = "IDEA" | "CONCEPT" | "DESIGN" | "DEVELOPMENT" | "PRODUCTION";

type Project = {
  id: string;
  name: string;
  category: string;
  status: Status;
  description: string;
  problem: string;
  concept: string;
  tech: string[];
  progress: number;
  visual: string;
};

const projects: Project[] = [
  {
    id: "011",
    name: "EMOTION RISK ENGINE",
    category: "Artificial Intelligence",
    status: "DEVELOPMENT",
    description: "Motor experimental de análisis y clasificación de riesgo emocional en texto en español.",
    problem: "Clasificar señales de riesgo en texto requiere una arquitectura trazable, especializada en español y preparada para integrarse con otros sistemas.",
    concept: "Un motor basado en BETO ajustado para clasificar texto en cuatro niveles de riesgo y exponer inferencias mediante una API documentada.",
    tech: ["BETO", "PYTORCH", "FASTAPI", "POSTGRESQL", "DOCKER"],
    progress: 85,
    visual: "inference",
  },
  {
    id: "01",
    name: "RFID ACCESS SYSTEM",
    category: "Smart Systems",
    status: "PRODUCTION",
    description: "Sistema de acceso inteligente mediante identificación RFID y dispositivos móviles.",
    problem: "Los sistemas de acceso tradicionales son rígidos, difíciles de auditar y dependen de llaves físicas.",
    concept: "Una capa de acceso conectada que valida credenciales RFID, registra eventos y permite gestión desde dispositivos móviles.",
    tech: ["RFID", "IOT", "MOBILE", "ACCESS API"],
    progress: 88,
    visual: "access",
  },
  {
    id: "02",
    name: "AI CLEANING ROBOT",
    category: "Robotics",
    status: "DESIGN",
    description: "Concepto de robot autónomo de limpieza asistido por inteligencia artificial.",
    problem: "La limpieza autónoma todavía falla al interpretar entornos cambiantes y obstáculos no previstos.",
    concept: "Un agente móvil que combina visión, mapas espaciales y decisiones adaptativas para priorizar zonas.",
    tech: ["COMPUTER VISION", "SLAM", "EDGE AI", "ROBOTICS"],
    progress: 36,
    visual: "robot",
  },
  {
    id: "03",
    name: "SMART DRAIN",
    category: "Smart Systems",
    status: "DEVELOPMENT",
    description: "Sistema de alcantarilla inteligente para detectar y ayudar a prevenir acumulación de basura.",
    problem: "Los residuos bloquean drenajes antes de que exista información suficiente para intervenir.",
    concept: "Sensores de nivel y flujo crean alertas preventivas para activar mantenimiento antes del colapso.",
    tech: ["SENSORS", "LORA", "IOT", "DATA ALERTS"],
    progress: 62,
    visual: "drain",
  },
  {
    id: "04",
    name: "SMART PET FEEDER",
    category: "Automation",
    status: "PRODUCTION",
    description: "Comedero inteligente automatizado para mascotas.",
    problem: "Las rutinas de alimentación se interrumpen cuando el cuidador no está presente.",
    concept: "Dosificación precisa, horarios remotos y seguimiento del consumo dentro de un dispositivo compacto.",
    tech: ["EMBEDDED", "MOBILE", "MOTORS", "IOT"],
    progress: 94,
    visual: "feeder",
  },
  {
    id: "05",
    name: "AUTONOMOUS LAWN MOWER",
    category: "Robotics",
    status: "IDEA",
    description: "Concepto de cortadora de pasto robotizada.",
    problem: "El cuidado de áreas verdes exige trabajo repetitivo y constante supervisión.",
    concept: "Una plataforma autónoma que reconoce límites, optimiza rutas y adapta el corte al terreno.",
    tech: ["ROBOTICS", "GPS", "PATHFINDING", "SENSORS"],
    progress: 18,
    visual: "mower",
  },
  {
    id: "06",
    name: "SMART RECYCLING SYSTEM",
    category: "Automation",
    status: "DESIGN",
    description: "Sistema automatizado de clasificación y reciclaje.",
    problem: "La clasificación manual reduce la eficiencia y calidad de los materiales recuperados.",
    concept: "Una línea de visión artificial que identifica, separa y cuantifica residuos en tiempo real.",
    tech: ["VISION AI", "AUTOMATION", "SORTING", "ANALYTICS"],
    progress: 42,
    visual: "recycle",
  },
  {
    id: "07",
    name: "PYTHON OPTIMIZATION",
    category: "Experimental Concepts",
    status: "DEVELOPMENT",
    description: "Aprendizaje y experimentación con Python para optimización.",
    problem: "Los sistemas complejos necesitan métodos claros para medir, comparar y mejorar decisiones.",
    concept: "Un banco de pruebas para algoritmos de optimización, automatización y análisis reproducible.",
    tech: ["PYTHON", "NUMPY", "ALGORITHMS", "DATA"],
    progress: 58,
    visual: "python",
  },
  {
    id: "08",
    name: "WIRELESS HEADPHONE ALERT",
    category: "Smart Systems",
    status: "IDEA",
    description: "Concepto de sistema de alerta para audífonos inalámbricos.",
    problem: "El aislamiento de audio puede ocultar eventos importantes del entorno inmediato.",
    concept: "Detección selectiva de señales externas para intervenir el audio solo cuando el contexto lo requiere.",
    tech: ["AUDIO", "ML", "BLUETOOTH", "CONTEXT"],
    progress: 14,
    visual: "audio",
  },
  {
    id: "09",
    name: "SMARTBUSINESS AI",
    category: "Artificial Intelligence",
    status: "DEVELOPMENT",
    description: "Inteligencia artificial aplicada a decisiones y operaciones de negocio.",
    problem: "Los equipos operan con información fragmentada y reaccionan tarde a patrones relevantes.",
    concept: "Un copiloto operacional que conecta datos, detecta oportunidades y transforma señales en acciones.",
    tech: ["LLM", "RAG", "ANALYTICS", "AUTOMATION"],
    progress: 67,
    visual: "business",
  },
  {
    id: "10",
    name: "AUTOMATED VEHICLE CONTROL",
    category: "Experimental Concepts",
    status: "IDEA",
    description: "Concepto experimental de automatización y control vehicular.",
    problem: "Los sistemas de control requieren pruebas seguras antes de interactuar con hardware real.",
    concept: "Un entorno modular de simulación para experimentar con telemetría, decisiones y control vehicular.",
    tech: ["CONTROL", "SIMULATION", "SENSORS", "CAN"],
    progress: 11,
    visual: "vehicle",
  },
];

const categories = [
  "ALL",
  "Artificial Intelligence",
  "Robotics",
  "Smart Systems",
  "Automation",
  "Experimental Concepts",
];

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="AVARI'S LAB — Inicio">
      AVARI'S<span>//</span>LAB
    </a>
  );
}

function TechVisual({ type, id }: { type: string; id: string }) {
  return (
    <div className={`tech-visual visual-${type}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="orbit orbit-a" />
      <div className="orbit orbit-b" />
      <div className="core">
        <i />
        <i />
      </div>
      <span className="visual-code">SYS/{id}—{type.toUpperCase()}</span>
      <span className="visual-coord">34° 06' 12.8" N<br />118° 14' 37.6" W</span>
      <span className="scanline" />
    </div>
  );
}

function FeaturedProject({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="featured-project">
      <div className="featured-visual">
        <TechVisual type={project.visual} id={project.id} />
        <div className="inference-map" aria-hidden="true">
          <span>INPUT_</span><i />
          <span>TOKENIZE</span><i />
          <span>BETO</span><i />
          <span>LEVEL_0–3</span>
        </div>
      </div>
      <div className="featured-copy">
        <div className="featured-topline">
          <span>PROJECT_011 / FLAGSHIP SYSTEM</span>
          <span className="status-dot">DEVELOPMENT</span>
        </div>
        <h3>EMOTION<br />RISK ENGINE</h3>
        <p>Motor experimental de análisis y clasificación de riesgo emocional en texto en español, basado en BETO.</p>
        <div className="featured-status">
          <div><strong>85%</strong><span>COMPLETED</span></div>
          <div><span>BACKEND / CORE</span><strong>IMPLEMENTED</strong></div>
          <div><span>FRONTEND DEMO</span><strong>PENDING</strong></div>
        </div>
        <div className="featured-progress"><i style={{ width: "85%" }} /></div>
        <div className="featured-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="featured-actions">
          <a href="https://github.com/AvariAny/emotion-risk-engine" target="_blank" rel="noreferrer">VIEW REPOSITORY ↗</a>
          <button onClick={onOpen} type="button">EXPLORE SYSTEM →</button>
        </div>
      </div>
    </article>
  );
}

const demoProbabilities = [
  { level: "LEVEL 00", label: "SIN RIESGO", value: 8 },
  { level: "LEVEL 01", label: "RIESGO BAJO", value: 16 },
  { level: "LEVEL 02", label: "RIESGO MODERADO", value: 68 },
  { level: "LEVEL 03", label: "RIESGO ALTO", value: 8 },
];

function EmotionRiskDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  const [demoText, setDemoText] = useState("Últimamente me cuesta concentrarme y siento que todo me supera.");
  const [processing, setProcessing] = useState(false);
  const [analyzed, setAnalyzed] = useState(true);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    document.body.classList.add("locked");
    return () => {
      window.removeEventListener("keydown", close);
      document.body.classList.remove("locked");
    };
  }, [onClose]);

  const analyze = () => {
    if (!demoText.trim()) return;
    setProcessing(true);
    setAnalyzed(false);
    window.setTimeout(() => {
      setProcessing(false);
      setAnalyzed(true);
    }, 900);
  };

  const reset = () => {
    setDemoText("");
    setProcessing(false);
    setAnalyzed(false);
  };

  return (
    <div className="detail-shell emotion-detail" role="dialog" aria-modal="true" aria-label={project.name}>
      <div className="detail-top">
        <BrandMark />
        <span>TECHNICAL FILE / PROJECT_011</span>
        <button className="detail-close" onClick={onClose} type="button">CLOSE [ESC]</button>
      </div>
      <header className="emotion-hero">
        <div className="detail-kicker">
          <span>PROJECT_011 / ARTIFICIAL INTELLIGENCE / NLP</span>
          <span className="status-dot">85% / CORE IMPLEMENTED</span>
        </div>
        <h2>EMOTION<br />RISK ENGINE</h2>
        <div className="emotion-hero-bottom">
          <p>CLASSIFICATION ENGINE<br />FOR SPANISH TEXT</p>
          <div><strong>85%</strong><span>DEVELOPMENT<br />STATUS</span></div>
        </div>
        <TechVisual type="inference" id="011" />
      </header>

      <section className="file-section overview-section">
        <span className="file-number">01</span>
        <div className="file-heading"><span>OVERVIEW</span><h3>TEXT IN.<br />RISK SIGNAL OUT.</h3></div>
        <p className="file-lead">Emotion Risk Engine es un motor de análisis y clasificación de riesgo emocional en texto en español, basado en un modelo BETO ajustado para esta tarea.</p>
      </section>

      <section className="file-section architecture-section">
        <span className="file-number">02</span>
        <div className="file-heading"><span>SYSTEM ARCHITECTURE</span><h3>INFERENCE<br />PIPELINE.</h3></div>
        <div className="architecture-flow">
          {["USER INPUT", "FASTAPI", "BETO INFERENCE", "RISK CLASSIFICATION", "JSON RESPONSE"].map((item, index) => (
            <div className="architecture-node" key={item}>
              <span>0{index + 1}</span><strong>{item}</strong>{index < 4 && <i>↓</i>}
            </div>
          ))}
          <div className="storage-node"><span>PARALLEL STORAGE</span><strong>POSTGRESQL</strong><small>LOGS / RECORDS / METRICS</small></div>
        </div>
      </section>

      <section className="file-section classification-section">
        <span className="file-number">03</span>
        <div className="file-heading"><span>CLASSIFICATION</span><h3>FOUR LEVELS.<br />ONE SIGNAL.</h3></div>
        <div className="level-list">
          {["SIN RIESGO", "RIESGO BAJO", "RIESGO MODERADO", "RIESGO ALTO"].map((label, index) => (
            <div className={`risk-level intensity-${index}`} key={label}>
              <span>LEVEL 0{index}</span><strong>{label}</strong><div>{Array.from({ length: 4 }, (_, i) => <i className={i <= index ? "filled" : ""} key={i} />)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="file-section demo-section">
        <span className="file-number">04</span>
        <div className="file-heading"><span>DEMONSTRATION</span><h3>TEST THE<br />INTERFACE.</h3></div>
        <p className="simulation-note">SIMULATED INTERFACE / NOT CONNECTED TO THE MODEL</p>
        <div className="demo-console">
          <div className="demo-input-panel">
            <div className="console-bar"><span>POST /predict</span><span>DEMO_MODE = TRUE</span></div>
            <label htmlFor="risk-input">INPUT / SPANISH TEXT</label>
            <textarea id="risk-input" value={demoText} onChange={(event) => setDemoText(event.target.value)} placeholder="Introduce una frase de prueba…" />
            <div className="demo-controls">
              <button onClick={analyze} disabled={processing || !demoText.trim()} type="button">{processing ? "PROCESSING…" : "ANALYZE TEXT →"}</button>
              <button onClick={reset} type="button">RESET</button>
            </div>
            <p>Los datos y resultados mostrados son ficticios y sirven únicamente para representar la futura integración con <code>POST /predict</code>.</p>
          </div>
          <div className={`demo-result ${processing ? "is-processing" : ""}`}>
            <div className="console-bar"><span>CLASSIFICATION OUTPUT</span><span>{processing ? "RUNNING" : analyzed ? "SIMULATION READY" : "AWAITING INPUT"}</span></div>
            {processing && <div className="processing-state"><i /><span>TOKENIZING / RUNNING INFERENCE</span></div>}
            {!processing && analyzed && (
              <>
                <div className="result-primary"><span>ASSIGNED LEVEL</span><strong>02</strong><p>RIESGO MODERADO</p></div>
                <div className="confidence"><span>SIMULATED CONFIDENCE</span><strong>68%</strong></div>
                <div className="probabilities">
                  {demoProbabilities.map((item) => (
                    <div key={item.level}><span>{item.level}<small>{item.label}</small></span><i><b style={{ width: `${item.value}%` }} /></i><strong>{item.value}%</strong></div>
                  ))}
                </div>
              </>
            )}
            {!processing && !analyzed && <div className="awaiting-state">NO SIMULATED RESULT / ENTER TEXT TO BEGIN</div>}
          </div>
          <div className="json-panel">
            <div className="console-bar"><span>JSON RESPONSE / SIMULATED</span><span>200 OK</span></div>
            <pre>{analyzed && !processing ? `{
  "simulation": true,
  "level": 2,
  "label": "riesgo_moderado",
  "confidence": 0.68,
  "endpoint_ready": "/predict"
}` : `{\n  "status": "awaiting_simulation"\n}`}</pre>
          </div>
        </div>
        <p className="clinical-note">NOTA / Este es un proyecto experimental de clasificación de texto. Sus resultados son orientativos, no constituyen un diagnóstico y no sustituyen una evaluación profesional.</p>
      </section>

      <section className="file-section status-section">
        <span className="file-number">05</span>
        <div className="file-heading"><span>DEVELOPMENT STATUS</span><h3>85% / CORE<br />IMPLEMENTED.</h3></div>
        <div className="status-board">
          <div className="status-progress"><strong>85%</strong><span>BACKEND + CORE</span><i><b style={{ width: "85%" }} /></i></div>
          <div className="pending-list"><span>PENDING / FRONTEND DEMO</span>{["Finalizar frontend de demostración.", "Integrar endpoints existentes.", "Validar comunicación frontend/backend.", "Realizar pruebas de integración.", "Documentar la demostración."].map((item, index) => <p key={item}><b>0{index + 1}</b>{item}</p>)}</div>
        </div>
      </section>

      <section className="file-section stack-section">
        <span className="file-number">06</span>
        <div className="file-heading"><span>TECH STACK</span><h3>SYSTEM<br />COMPONENTS.</h3></div>
        <div className="stack-grid">{["BETO", "PYTORCH", "HUGGING FACE", "FASTAPI", "PYTHON", "POSTGRESQL / NEON", "DOCKER", "CLOUDFLARE TUNNEL"].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div>
      </section>

      <section className="file-section repository-section">
        <span className="file-number">07</span>
        <div className="file-heading"><span>REPOSITORY</span><h3>INSPECT<br />THE CORE.</h3></div>
        <a href="https://github.com/AvariAny/emotion-risk-engine" target="_blank" rel="noreferrer"><span>GITHUB / OFFICIAL REPOSITORY</span><strong>VIEW SOURCE ↗</strong></a>
      </section>
    </div>
  );
}

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    document.body.classList.add("locked");
    return () => {
      window.removeEventListener("keydown", close);
      document.body.classList.remove("locked");
    };
  }, [onClose]);

  return (
    <div className="detail-shell" role="dialog" aria-modal="true" aria-label={project.name}>
      <div className="detail-top">
        <BrandMark />
        <span>LAB FILE / {project.id}</span>
        <button className="detail-close" onClick={onClose} type="button">CLOSE [ESC]</button>
      </div>
      <div className="detail-hero">
        <div className="detail-kicker">
          <span>PROJECT / {project.id}</span>
          <span className="status-dot">{project.status}</span>
        </div>
        <h2>{project.name}</h2>
        <TechVisual type={project.visual} id={project.id} />
      </div>
      <div className="detail-content">
        <div className="detail-index">FILE_{project.id}<br />REV. 02—25</div>
        <div className="detail-block">
          <span className="eyebrow">01 / PROBLEMA</span>
          <p>{project.problem}</p>
        </div>
        <div className="detail-block">
          <span className="eyebrow">02 / CONCEPTO</span>
          <p>{project.concept}</p>
        </div>
        <div className="detail-block detail-tech">
          <span className="eyebrow">03 / TECNOLOGÍAS</span>
          <div>{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="detail-block progress-block">
          <span className="eyebrow">04 / PROGRESO</span>
          <strong>{project.progress}%</strong>
          <div className="progress-track"><i style={{ width: `${project.progress}%` }} /></div>
        </div>
        <div className="detail-block next-block">
          <span className="eyebrow">05 / PRÓXIMOS PASOS</span>
          <p>Validar el prototipo, documentar resultados y preparar la siguiente iteración del sistema.</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [category, setCategory] = useState("ALL");
  const [status, setStatus] = useState("ALL");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = projects.filter(
    (project) =>
      (category === "ALL" || project.category === category) &&
      (status === "ALL" || project.status === status),
  );
  const featuredProject = filtered.find((project) => project.id === "011");
  const regularProjects = filtered.filter((project) => project.id !== "011");

  return (
    <main id="top">
      <section className="hero">
        <nav className="nav">
          <BrandMark />
          <div className="nav-links">
            <a href="#archive">ARCHIVE</a>
            <a href="#about">IDENTITY</a>
          </div>
          <a className="contact-link" href="mailto:hello@avaris.lab">CONTACT ↗</a>
        </nav>
        <div className="hero-rail">
          <span>01—07</span>
          <span>INDEPENDENT R&D</span>
          <span>EST. MMXXV</span>
        </div>
        <div className="hero-title">
          <span className="hero-label">DIGITAL RESEARCH ARCHIVE / VOL. 01</span>
          <h1><span>IDEAS QUE SE NIEGAN</span><span>A QUEDARSE EN PAPEL.</span></h1>
          <div className="hero-footer">
            <p>Un archivo de experimentos, sistemas y proyectos que todavía están evolucionando.</p>
            <span className="hero-stamp">A//L<br />25</span>
          </div>
        </div>
        <a className="scroll-cue" href="#manifesto"><span /> SCROLL TO EXPLORE</a>
        <div className="hero-cross cross-a">+</div>
        <div className="hero-cross cross-b">+</div>
      </section>

      <section className="manifesto" id="manifesto">
        <div className="section-meta"><span>02</span><span>MANIFIESTO</span><span>THESIS / 001</span></div>
        <div className="manifesto-copy">
          <p className="manifesto-small">DESDE LA OBSERVACIÓN<br />HASTA EL SISTEMA.</p>
          <h2>NO TODAS LAS IDEAS<br />NACEN PARA QUEDARSE<br /><em>EN UNA LIBRETA.</em></h2>
        </div>
        <div className="manifesto-lines">
          <span>ALGUNAS SE CONSTRUYEN.</span>
          <span>OTRAS SE ROMPEN.</span>
          <span>OTRAS EVOLUCIONAN.</span>
        </div>
      </section>

      <section className="archive" id="archive">
        <div className="section-meta light"><span>03</span><span>PROJECT ARCHIVE</span><span>11 FILES / LIVE INDEX</span></div>
        <div className="archive-heading">
          <h2>ACTIVE<br />RESEARCH<span>.</span></h2>
          <p>Un índice vivo. Cada archivo registra una idea en su estado real: incompleta, mutable y en movimiento.</p>
        </div>
        <div className="filters">
          <div className="filter-group">
            <span className="filter-label">FILTER / FIELD</span>
            <div>
              {categories.map((item) => (
                <button className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)} type="button">
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group status-filter">
            <span className="filter-label">FILTER / STATUS</span>
            <div>
              {["ALL", "IDEA", "CONCEPT", "DESIGN", "DEVELOPMENT", "PRODUCTION"].map((item) => (
                <button className={status === item ? "active" : ""} key={item} onClick={() => setStatus(item)} type="button">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="project-list">
          {featuredProject && <FeaturedProject project={featuredProject} onOpen={() => setSelected(featuredProject)} />}
          {regularProjects.map((project) => (
            <button className="project-row" key={project.id} onClick={() => setSelected(project)} type="button">
              <div className="project-number">{project.id}<span>/{projects.length.toString().padStart(2, "0")}</span></div>
              <div className="project-preview"><TechVisual type={project.visual} id={project.id} /></div>
              <div className="project-main">
                <div className="project-meta"><span>{project.category}</span><span>{project.status}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <span className="project-open">OPEN FILE <i>↗</i></span>
            </button>
          ))}
          {filtered.length === 0 && <p className="empty-state">NO FILES MATCH THIS QUERY / RESET FILTERS</p>}
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-meta"><span>04</span><span>IDENTIDAD</span><span>HUMAN / MACHINE</span></div>
        <div className="about-grid">
          <h2>CURIOSIDAD<br />COMO <em>MÉTODO.</em></h2>
          <div className="about-copy">
            <span className="eyebrow">ABOUT / AVARI'S LAB</span>
            <p>No es un portafolio. Es el registro de una práctica: observar problemas, imaginar sistemas y acercar una idea al mundo real.</p>
            <p className="muted">Entre software, electrónica, inteligencia artificial y prototipos físicos, el objetivo permanece igual: aprender construyendo.</p>
          </div>
          <div className="about-coordinates">
            <span>INPUT</span><strong>CURIOSITY</strong>
            <span>PROCESS</span><strong>EXPERIMENT</strong>
            <span>OUTPUT</span><strong>SYSTEM</strong>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-top"><BrandMark /><span>THE ARCHIVE IS NEVER COMPLETE.</span></div>
        <div className="footer-main">
          <h2>KEEP<br />BUILDING<span>_</span></h2>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noreferrer">GITHUB ↗</a>
            <a href="mailto:hello@avaris.lab">CONTACT ↗</a>
            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2025 AVARI'S//LAB</span><span>DESIGNED TO EVOLVE</span><span>SYS.STATUS / ONLINE</span></div>
      </footer>

      {selected && (selected.id === "011"
        ? <EmotionRiskDetail project={selected} onClose={() => setSelected(null)} />
        : <ProjectDetail project={selected} onClose={() => setSelected(null)} />)}
    </main>
  );
}
