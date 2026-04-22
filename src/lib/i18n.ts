export type Locale = "es" | "en";

export const messages = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      testimonials: "Testimonios",
      experience: "Experiencia",
      skills: "Habilidades",
      contact: "Contacto",
      cv: "Ver CV",
      cvShort: "CV",
      cvMobile: "Ver hoja de vida",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
    },
    hero: {
      badge: "Disponible para prácticas y proyectos",
      subtitle:
        "Estudiante de Ingeniería de Software. Diseño interfaces claras, código ordenado y detalles que se notan al usar el producto.",
      ctaProjects: "Explorar trabajo",
      ctaCv: "Hoja de vida",
      statSem: "Semestre",
      statUni: "Universidad",
      statFocus: "Enfoque",
      statSemVal: "5.º",
      statUniVal: "UCC Pasto",
      statFocusVal: "Web & UI",
      cardRole: "Interfaces · Frontend",
    },
    about: {
      label: "01 · Sobre mí",
      title: "Código con criterio visual",
      imageAlt:
        "Espacio de trabajo con portátil mostrando código, relacionado con desarrollo web e interfaces.",
      coverTagline: "UI · wireframe → código → deploy",
      p1: "Estudio Ingeniería de Software en la Universidad Cooperativa de Colombia (Pasto). Me interesa el camino desde el wireframe hasta el despliegue: tipografía, espaciado, estados vacíos y accesibilidad básica.",
      p2: "En laboratorio he pasado de HTML/CSS a React, y en proyectos recientes uso Next.js, TypeScript y Tailwind. Me gusta documentar en el repo y dejar componentes reutilizables.",
      p3: "Busco seguir profundizando en patrones de UI, pruebas manuales en móvil y buenas prácticas de Git en equipo.",
    },
    projects: {
      label: "02 · Proyectos",
      title: "Laboratorios y entregas",
      desc: "Selección de retos donde practiqué maquetación, componentes y despliegue.",
      items: [
        {
          coverBadge: "featured",
          coverAlt:
            "Persona realizando un pago con tarjeta en un entorno de comercio electrónico, alusión al flujo de checkout.",
          title: "Checkout · Lab 3",
          body: "Flujo de checkout con Next.js, TypeScript y Tailwind. Énfasis en jerarquía visual y formularios.",
          tags: ["Next.js", "TypeScript", "Tailwind"],
        },
        {
          coverBadge: 2,
          coverAlt: "Producto tipo reloj en fondo limpio, evocando una tarjeta de producto en e-commerce.",
          title: "Card de producto · Lab 2",
          body: "Card de e-commerce con imagen, precio, rating y CTA. Ejercicio de CSS y layout responsive.",
          tags: ["HTML", "CSS", "Flexbox"],
        },
        {
          coverBadge: 1,
          coverAlt: "Pantalla con métricas y gráficos, sugiriendo una landing o panel web.",
          title: "Landing · Lab 1",
          body: "Landing con navbar, hero y footer. Primera aproximación a sistemas de espaciado y breakpoints.",
          tags: ["HTML", "CSS", "Responsive"],
        },
      ],
      demo: "Demo",
      featured: "Destacado",
      lab: "Lab",
    },
    testimonials: {
      label: "03 · Testimonios",
      title: "Personas con las que he colaborado",
      desc: "Referencias de compañeros y cercanos en proyectos académicos o personales.",
      items: [
        {
          q: "«Bryan es serio, responsable y muy buena onda. Ayuda cuando el semestre aprieta y transmite calma al equipo.»",
          n: "Daniela Vélez",
          r: "Compañera · Ingeniería de Software",
        },
        {
          q: "«Disfruto trabajar con él: cumple plazos, comunica bien y se nota que le importa la calidad del entregable.»",
          n: "Juan Muñoz",
          r: "Compañero · Proyecto universitario",
        },
        {
          q: "«Puntual, confiable y con buena energía. Recomendado para cualquier equipo que necesite orden y actitud.»",
          n: "Álvaro Salazar",
          r: "Colaboración en proyectos personales",
        },
      ],
    },
    experience: {
      label: "04 · Trayectoria",
      title: "Formación y práctica",
      academic: "Formación académica",
      practice: "En el programa",
      bullets: [
        "Laboratorios de diseño de interfaces: componentes, responsive y entregas iterativas.",
        "Trabajo en equipo con revisiones entre pares y ramas claras en GitHub.",
        "Sin experiencia laboral formal en desarrollo aún; foco en formación y portafolio académico.",
      ],
      academicEntries: [
        {
          period: "En curso · 2023 – presente",
          title: "Ingeniería de Software",
          place: "Universidad Cooperativa de Colombia · Sede Pasto",
          detail:
            "5.º semestre. Énfasis en desarrollo web, diseño de interfaces, estructuras de datos y proyectos colaborativos con entregas por sprints.",
        },
        {
          period: "2023",
          title: "Ingreso al programa",
          place: "Universidad Cooperativa de Colombia",
          detail:
            "Adaptación a metodologías de estudio universitario, campus virtual y trabajo en equipo desde el primer semestre.",
        },
        {
          period: "Educación media completada",
          title: "Bachiller académico",
          place: "Pasto, Colombia",
          detail: "Bases sólidas en matemáticas, lectura crítica y comunicación escrita; apoyo al aprendizaje autónomo.",
        },
      ],
    },
    skills: {
      label: "05 · Herramientas",
      title: "Lo que manejo en proyectos",
      note: "Lo que suelo usar en interfaces web y en el repo — lo que un reclutador técnico busca primero.",
    },
    contact: {
      label: "06 · Contacto",
      title: "Conversemos",
      name: "Nombre",
      email: "Correo",
      send: "Enviar",
      hint: "También por email o LinkedIn — respondo lo antes posible.",
    },
    footer: {
      copy: "© 2026 · Pasto, Colombia",
    },
    theme: {
      light: "Modo claro",
      dark: "Modo oscuro",
      loading: "Cargando tema",
    },
    lang: { es: "ES", en: "EN", label: "Idioma" },
    cv: {
      title: "Hoja de vida",
      role: "Estudiante de Ingeniería de Software · 5.º semestre · Pasto, Colombia",
      back: "← Portafolio",
      pdf: "Descargar PDF",
      profile: "Perfil",
      profileText:
        "Estudiante enfocado en desarrollo web y diseño de interfaces: maquetación responsive, componentes reutilizables y buenas prácticas con React, Next.js, TypeScript y Tailwind CSS.",
      education: "Educación",
      work: "Experiencia laboral",
      workText:
        "Sin experiencia laboral formal en desarrollo de software. Trayectoria centrada en formación, laboratorios y proyectos del programa.",
      projects: "Proyectos destacados",
      projectBullets: [
        "Checkout (Lab 3): Next.js, TypeScript, Tailwind — flujo de pago y UI de formulario.",
        "Card de producto (Lab 2): HTML/CSS — layout, tipografía y estados hover.",
        "Landing (Lab 1): estructura semántica, navegación y pie responsivos.",
      ],
      stack: "Stack técnico",
      stackGroups: [
        { name: "Frontend", items: "React, Next.js, TypeScript, Tailwind CSS" },
        { name: "Herramientas", items: "Git, GitHub, Figma" },
        { name: "Backend / otros", items: "Node.js (básico), APIs REST (consumo)" },
      ],
      languages: "Idiomas",
      langItems: ["Español — nativo", "Inglés — lectura técnica intermedia (en mejora continua)"],
      soft: "Competencias blandas",
      softItems: ["Trabajo en equipo", "Comunicación clara", "Organización y cumplimiento de plazos", "Aprendizaje autónomo"],
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      testimonials: "Testimonials",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      cv: "CV",
      cvShort: "CV",
      cvMobile: "CV",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    hero: {
      badge: "Open to projects & internships",
      subtitle:
        "Software Engineering student. I care about clear interfaces, tidy code, and details you feel when using the product.",
      ctaProjects: "View work",
      ctaCv: "CV",
      statSem: "Semester",
      statUni: "University",
      statFocus: "Focus",
      statSemVal: "5th",
      statUniVal: "UCC Pasto",
      statFocusVal: "Web & UI",
      cardRole: "Interfaces · Frontend",
    },
    about: {
      label: "01 · About",
      title: "Code with visual judgment",
      imageAlt: "Desk with a laptop showing code, representing web development and interface work.",
      coverTagline: "UI · wireframe → code → deploy",
      p1: "I study Software Engineering at Universidad Cooperativa de Colombia (Pasto). I like the path from wireframe to deploy: typography, spacing, empty states, and basic accessibility.",
      p2: "In labs I moved from HTML/CSS to React; recent projects use Next.js, TypeScript, and Tailwind. I document in the repo and aim for reusable components.",
      p3: "I want to keep growing in UI patterns, manual mobile QA, and healthy Git habits in teams.",
    },
    projects: {
      label: "02 · Projects",
      title: "Labs & coursework",
      desc: "A selection of challenges where I practiced layout, components, and shipping.",
      items: [
        {
          coverBadge: "featured",
          coverAlt: "Person paying with a card in an e-commerce context, evoking a checkout flow.",
          title: "Checkout · Lab 3",
          body: "Checkout flow with Next.js, TypeScript, and Tailwind. Focus on visual hierarchy and forms.",
          tags: ["Next.js", "TypeScript", "Tailwind"],
        },
        {
          coverBadge: 2,
          coverAlt: "Clean product shot suggesting an e-commerce product card.",
          title: "Product card · Lab 2",
          body: "E-commerce card with image, price, rating, and CTA. CSS and responsive layout practice.",
          tags: ["HTML", "CSS", "Flexbox"],
        },
        {
          coverBadge: 1,
          coverAlt: "Screen with charts and metrics, suggesting a landing page or web dashboard.",
          title: "Landing · Lab 1",
          body: "Landing with navbar, hero, and footer. First pass at spacing systems and breakpoints.",
          tags: ["HTML", "CSS", "Responsive"],
        },
      ],
      demo: "Live",
      featured: "Featured",
      lab: "Lab",
    },
    testimonials: {
      label: "03 · Testimonials",
      title: "People I’ve worked with",
      desc: "Peers and collaborators from academic or personal projects.",
      items: [
        {
          q: "“Bryan is serious, responsible, and great to work with. He helps when deadlines pile up and keeps the team calm.”",
          n: "Daniela Vélez",
          r: "Classmate · Software Engineering",
        },
        {
          q: "“I enjoy teaming up with him: he meets deadlines, communicates well, and clearly cares about quality.”",
          n: "Juan Muñoz",
          r: "Teammate · University project",
        },
        {
          q: "“Punctual, reliable, and positive energy. I’d recommend him for any team that needs structure and attitude.”",
          n: "Álvaro Salazar",
          r: "Personal project collaboration",
        },
      ],
    },
    experience: {
      label: "04 · Path",
      title: "Education & practice",
      academic: "Education",
      practice: "Inside the program",
      bullets: [
        "Interface design labs: components, responsive layouts, iterative submissions.",
        "Teamwork with peer review and clear branches on GitHub.",
        "No formal dev employment yet; focus on coursework and academic portfolio.",
      ],
      academicEntries: [
        {
          period: "In progress · 2023 – present",
          title: "Software Engineering",
          place: "Universidad Cooperativa de Colombia · Pasto campus",
          detail:
            "5th semester. Focus on web development, interface design, data structures, and collaborative sprint-style deliveries.",
        },
        {
          period: "2023",
          title: "Program entry",
          place: "Universidad Cooperativa de Colombia",
          detail: "Onboarding to university study habits, LMS workflows, and teamwork from the first semester.",
        },
        {
          period: "Secondary completed",
          title: "High school diploma",
          place: "Pasto, Colombia",
          detail: "Strong foundation in math, critical reading, and written communication; self-directed learning habits.",
        },
      ],
    },
    skills: {
      label: "05 · Tools",
      title: "What I use on projects",
      note: "Typical stack for web UI and coursework — what technical recruiters scan first.",
    },
    contact: {
      label: "06 · Contact",
      title: "Let’s talk",
      name: "Name",
      email: "Email",
      send: "Send",
      hint: "Email or LinkedIn works too — I reply as soon as I can.",
    },
    footer: {
      copy: "© 2026 · Pasto, Colombia",
    },
    theme: {
      light: "Light mode",
      dark: "Dark mode",
      loading: "Loading theme",
    },
    lang: { es: "ES", en: "EN", label: "Language" },
    cv: {
      title: "CV",
      role: "Software Engineering student · 5th semester · Pasto, Colombia",
      back: "← Portfolio",
      pdf: "Download PDF",
      profile: "Profile",
      profileText:
        "Student focused on web development and interface design: responsive layouts, reusable components, and solid habits with React, Next.js, TypeScript, and Tailwind CSS.",
      education: "Education",
      work: "Work experience",
      workText:
        "No formal employment in software development yet. My path is coursework, labs, and program projects.",
      projects: "Highlighted projects",
      projectBullets: [
        "Checkout (Lab 3): Next.js, TypeScript, Tailwind — payment flow and form UI.",
        "Product card (Lab 2): HTML/CSS — layout, typography, hover states.",
        "Landing (Lab 1): semantic structure, responsive nav and footer.",
      ],
      stack: "Technical stack",
      stackGroups: [
        { name: "Frontend", items: "React, Next.js, TypeScript, Tailwind CSS" },
        { name: "Tools", items: "Git, GitHub, Figma" },
        { name: "Backend / other", items: "Node.js (basic), REST APIs (consumption)" },
      ],
      languages: "Languages",
      langItems: ["Spanish — native", "English — intermediate technical reading (continuous improvement)"],
      soft: "Soft skills",
      softItems: ["Teamwork", "Clear communication", "Organization & deadlines", "Self-directed learning"],
    },
  },
} as const;

/** Mensajes para el locale activo (estructura espejo ES / EN). */
export type Messages = (typeof messages)[Locale];

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
