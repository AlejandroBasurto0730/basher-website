/* ============================================================
   BASHER — shared site behaviour: i18n (EN/ES) + nav + footer
   ============================================================ */

const I18N = {
  en: {
    nav: { home:"Home", about:"About Us", services:"Services", clients:"Clients", contact:"Contact" },
    footer: {
      tagline: "Passion for what we do…",
      office: "Office",
      addressLine: "Calle Hamburgo 213, Piso 11, Oficina 905<br>Col. Juárez, Alcaldía Cuauhtémoc<br>C.P. 06600 — Mexico City",
      contact: "Contact",
      contactBlock: "Rodolfo Basurto<br><a href=\"mailto:rbasurto@basher.mx\">rbasurto@basher.mx</a><br>+52 55 3222 5122<br><a href=\"mailto:contacto@basher.mx\">contacto@basher.mx</a>",
      site: "Site",
      rights: "All rights reserved."
    },

    /* ---------- HOME ---------- */
    hero: {
      eyebrow: "Basurto Herrera Consultores, S.C.",
      title: "Audit experience and accounting and tax compliance.",
      lede: "More than 30 years serving public and private companies in Mexico and abroad, with the knowledge and care of a firm that treats every client as a strategic partner.",
      cta1: "Our services",
      cta2: "Get in touch"
    },
    home: {
      aboutEyebrow: "Who we are",
      aboutTitle: "A Mexican firm built on experience and trust",
      aboutBody: "We are a Mexican firm of public accountants and independent professionals, founded on our partners' vision of offering clients the knowledge and experience gained over more than 30 years serving public and private, national and international companies. We provide audit services, regulatory compliance in accounting and tax matters, attestation engagements and reviews of internal control structures. Our goal is to guarantee our clients' satisfaction through the quality and timeliness of our services.",
      aboutCta: "More about us",
      pillarsEyebrow: "What drives us",
      pillarsTitle: "Mission, vision and values",
      servicesEyebrow: "What we do",
      servicesTitle: "Services built around your compliance and growth",
      servicesLede: "From statutory audits to day-to-day accounting and tax matters, our team covers the full spectrum of financial assurance and advisory work.",
      servicesCta: "View all services",
      industriesEyebrow: "Sector experience",
      industriesTitle: "Our experience in the industry",
      clientsEyebrow: "Trusted by",
      clientsTitle: "Some of our clients",
      clientsLede: "We are proud to support national and international organizations across a wide range of industries.",
      clientsCta: "See all clients",
      ctaTitle: "Let's build value together.",
      ctaBody: "Tell us about your company and we'll show you how Basher can support your compliance and growth.",
      ctaButton: "Contact our team"
    },

    /* ---------- shared: mission / vision / values ---------- */
    mission: { title:"Mission", body:"“To generate value and trust for our clients through the quality and timeliness of our services.”" },
    vision: { title:"Vision", body:"“To become a business partner to our clients and help them generate tangible and intangible value.”" },
    values: {
      title:"Values",
      items:["Integrity","Transparency","Confidentiality","Teamwork","Open communication","Openness to change"]
    },

    /* ---------- ABOUT ---------- */
    aboutPage: {
      eyebrow: "About Basher",
      title: "Who we are",
      lede: "A Mexican firm of public accountants and independent professionals, built on more than 30 years of experience."
    },
    who: {
      eyebrow: "Who we are",
      title: "Knowledge and experience you can rely on",
      body: "We are a Mexican firm of public accountants and independent professionals, founded on our partners' vision of offering clients the knowledge and experience gained over more than 30 years serving public and private, national and international companies. We provide audit services, regulatory compliance in accounting and tax matters, attestation engagements and reviews of internal control structures. Our goal is to guarantee our clients' satisfaction through the quality and timeliness of our services.",
      tagline: "Basher, passion for what we do…",
      stat1n: "30+", stat1s: "Years of experience",
      stat2n: "7", stat2s: "Industries served"
    },
    industries: {
      eyebrow: "Sector experience",
      title: "Our experience in the industry",
      body: "Over the years we have built deep, practical experience across a diverse set of sectors, allowing us to bring relevant, industry-aware insight to every engagement.",
      tags: ["Manufacturing","Services","Automotive","Chemical","Energy","Pharmaceutical","Financial"]
    },
    partners: {
      eyebrow: "Our team",
      title: "Meet our partner",
      lede: "Rodolfo Basurto leads our practice, bringing the technical depth and hands-on attention our clients rely on.",
      eduTitle: "Education",
      expTitle: "Professional experience",
      rodolfo: {
        name: "C.P.C. and M.B.A. Rodolfo Basurto",
        role: "Partner Lead, Audit &amp; Advisory",
        edu: [
          "Certified Public Accountant by the Mexican Institute of Public Accountants (CPC).",
          "Public Accountant Registered with the General Tax Administration (CPR).",
          "Master's in Administration and Finance.",
          "Senior Management Program at IPADE.",
          "Leadership Program at Georgetown University.",
          "Member of the National College of Independent Professional Corporate Advisors."
        ],
        exp: [
          "Partner Lead of the Audit &amp; Advisory practice.",
          "More than 30 years of experience as a consultant, serving Mexican and international public and private companies.",
          "Instructor in accounting standards and university professor.",
          "Extensive experience in Financial Reporting Standards (NIF), International Financial Reporting Standards (IFRS) and U.S. Generally Accepted Accounting Principles (US GAAP).",
          "More than 20 years collaborating with an international (Big Four) firm."
        ]
      }
    },
    valueAdd: {
      eyebrow: "Our added value",
      title: "Our added value",
      items: [
        { title: "30+ years of experience", body: "More than three decades supporting Mexican and international companies with specialized, senior-level attention." },
        { title: "Technology-driven", body: "We use technology to streamline compliance monitoring and give our clients reliable, timely information." },
        { title: "Constant communication", body: "We maintain an ongoing dialogue with our clients throughout every engagement, not only at deadlines." },
        { title: "Timely delivery", body: "We are committed to delivering our work on time, every time, so our clients can plan with confidence." }
      ]
    },
    aboutCta: {
      title: "Ready to work with a partner who knows your industry?",
      body: "Reach out and let's talk about how Basher can support your team.",
      button: "Contact us"
    },

    /* ---------- SERVICES ---------- */
    servicesPage: {
      eyebrow: "What we do",
      title: "Our services",
      lede: "Regulatory compliance, assurance and advisory services designed to build value and trust with every engagement."
    },
    svc: {
      auditoriaTitle: "Audit &amp; Attestation Services",
      auditoriaChecklist: [
        "Financial statement audits",
        "Special-purpose audits",
        "Accounting expert testimony (peritaje contable)",
        "Statutory auditor's report (dictamen de comisario)"
      ],

      controlInternoTitle: "Internal Control",
      controlInterno: [
        "Assessment of internal control structure design",
        "Review of internal control operating effectiveness",
        "Support restructuring internal control processes",
        "Design of internal control structure based on COSO"
      ],

      contablesTitle: "Accounting Services",
      contables: [
        "Diagnosis of local or international accounting compliance",
        "General accounting",
        "Preparation and review of consolidation packages",
        "Preparation of financial statements under NIF, IFRS or US GAAP",
        "Support implementing accounting standards (NIF, IFRS or US GAAP)",
        "Accounting training"
      ],

      fiscalesTitle: "Tax Services",
      fiscales: [
        "Monthly and annual tax filings (income tax and VAT)",
        "Transfer pricing studies",
        "Tax audit report (dictamen fiscal)"
      ]
    },
    servicesCta: {
      title: "Not sure which service you need?",
      body: "Tell us about your company's situation and we'll help you find the right scope of work.",
      button: "Talk to us"
    },

    /* ---------- CLIENTS ---------- */
    clientsPage: {
      eyebrow: "Trusted by",
      title: "Some of our clients",
      lede: "We are proud to support national and international organizations across pharmaceutical, real estate, automotive and industrial, healthcare, insurance, retail, food services and technology sectors, among others."
    },
    clientsCta: {
      title: "Join the companies that trust Basher.",
      body: "Let's talk about how we can support your compliance, assurance and advisory needs.",
      button: "Start a conversation"
    },

    /* ---------- CONTACT ---------- */
    contactPage: {
      eyebrow: "Get in touch",
      title: "Contact us",
      lede: "We would be glad to hear about your company and discuss how Basher can help."
    },
    contact: {
      officeTitle: "Office location",
      officeCity: "Mexico City",
      officeAddress: "Calle Hamburgo 213, Piso 11, Oficina 905<br>Col. Juárez, Alcaldía Cuauhtémoc<br>C.P. 06600<br>Ciudad de México",
      infoTitle: "Contact information",
      infoName: "Rodolfo Basurto",
      formTitle: "Send us a message",
      labelName: "Full name",
      labelEmail: "Email",
      labelSubject: "Subject",
      labelMessage: "Message",
      placeholderName: "Your name",
      placeholderEmail: "you@company.com",
      placeholderSubject: "How can we help?",
      placeholderMessage: "Tell us a bit about your company and what you need...",
      submit: "Send message",
      note: "This form opens your email client addressed to contacto@basher.mx — no data is stored or sent anywhere else."
    }
  },

  es: {
    nav: { home:"Inicio", about:"Nosotros", services:"Servicios", clients:"Clientes", contact:"Contacto" },
    footer: {
      tagline: "Pasión por lo que hacemos…",
      office: "Oficina",
      addressLine: "Calle Hamburgo 213, Piso 11, Oficina 905<br>Col. Juárez, Alcaldía Cuauhtémoc<br>C.P. 06600 — Ciudad de México",
      contact: "Contacto",
      contactBlock: "Rodolfo Basurto<br><a href=\"mailto:rbasurto@basher.mx\">rbasurto@basher.mx</a><br>+52 55 3222 5122<br><a href=\"mailto:contacto@basher.mx\">contacto@basher.mx</a>",
      site: "Sitio",
      rights: "Todos los derechos reservados."
    },

    /* ---------- HOME ---------- */
    hero: {
      eyebrow: "Basurto Herrera Consultores, S.C.",
      title: "Experiencia en auditoría y cumplimiento contable y fiscal.",
      lede: "Más de 30 años sirviendo a empresas públicas y privadas en México y en el extranjero, con el conocimiento y el cuidado de una firma que trata a cada cliente como un socio estratégico.",
      cta1: "Nuestros servicios",
      cta2: "Contáctanos"
    },
    home: {
      aboutEyebrow: "Quiénes somos",
      aboutTitle: "Una firma mexicana construida sobre experiencia y confianza",
      aboutBody: "Somos una firma mexicana de contadores públicos y profesionales independientes, que nació con la visión de los socios fundadores de ofrecer a nuestros clientes los conocimientos y experiencia adquiridos a lo largo de más de 30 años de servir a compañías públicas y privadas, nacionales e internacionales. Ofrecemos servicios de auditoría, cumplimiento regulatorio en materia contable y fiscal, trabajos de atestiguamiento y revisiones de estructuras de control interno. Nuestro objetivo es garantizar la satisfacción de nuestros clientes a través de la calidad y oportunidad de nuestros servicios.",
      aboutCta: "Más sobre nosotros",
      pillarsEyebrow: "Lo que nos mueve",
      pillarsTitle: "Misión, visión y valores",
      servicesEyebrow: "Lo que hacemos",
      servicesTitle: "Servicios diseñados para tu cumplimiento y crecimiento",
      servicesLede: "Desde auditorías estatutarias hasta contabilidad y materia fiscal del día a día, nuestro equipo cubre todo el espectro de aseguramiento financiero y servicios de asesoría.",
      servicesCta: "Ver todos los servicios",
      industriesEyebrow: "Experiencia sectorial",
      industriesTitle: "Nuestra experiencia en la industria",
      clientsEyebrow: "Confían en nosotros",
      clientsTitle: "Algunos de nuestros clientes",
      clientsLede: "Nos enorgullece apoyar a organizaciones nacionales e internacionales en una amplia variedad de industrias.",
      clientsCta: "Ver todos los clientes",
      ctaTitle: "Construyamos valor juntos.",
      ctaBody: "Cuéntanos sobre tu empresa y te mostraremos cómo Basher puede apoyar tu cumplimiento y crecimiento.",
      ctaButton: "Contacta a nuestro equipo"
    },

    /* ---------- shared: mission / vision / values ---------- */
    mission: { title:"Misión", body:"“Generar valor y confianza a nuestros clientes a través de la calidad y oportunidad de nuestros servicios.”" },
    vision: { title:"Visión", body:"“Convertirnos en un socio de negocios de nuestros clientes y apoyarlos a generar valor tangible e intangible.”" },
    values: {
      title:"Valores",
      items:["Integridad","Transparencia","Confidencialidad","Trabajo en equipo","Comunicación abierta","Disponibilidad al cambio"]
    },

    /* ---------- ABOUT ---------- */
    aboutPage: {
      eyebrow: "Sobre Basher",
      title: "Quiénes somos",
      lede: "Una firma mexicana de contadores públicos y profesionistas independientes, con más de 30 años de experiencia."
    },
    who: {
      eyebrow: "Quiénes somos",
      title: "Conocimiento y experiencia en los que puedes confiar",
      body: "Somos una firma mexicana de contadores públicos y profesionales independientes, que nació con la visión de los socios fundadores de ofrecer a nuestros clientes los conocimientos y experiencia adquiridos a lo largo de más de 30 años de servir a compañías públicas y privadas, nacionales e internacionales. Ofrecemos servicios de auditoría, cumplimiento regulatorio en materia contable y fiscal, trabajos de atestiguamiento y revisiones de estructuras de control interno. Nuestro objetivo es garantizar la satisfacción de nuestros clientes a través de la calidad y oportunidad de nuestros servicios.",
      tagline: "Basher, pasión por lo que hacemos…",
      stat1n: "30+", stat1s: "Años de experiencia",
      stat2n: "7", stat2s: "Industrias atendidas"
    },
    industries: {
      eyebrow: "Experiencia sectorial",
      title: "Nuestra experiencia en la industria",
      body: "A lo largo de los años hemos construido experiencia profunda y práctica en diversos sectores, lo que nos permite aportar una perspectiva relevante y especializada en cada proyecto.",
      tags: ["Manufactura","Servicios","Automotriz","Química","Energía","Farmacéutica","Financiera"]
    },
    partners: {
      eyebrow: "Nuestro equipo",
      title: "Conoce a nuestro socio",
      lede: "Rodolfo Basurto lidera nuestra práctica, aportando la profundidad técnica y la atención cercana en la que confían nuestros clientes.",
      eduTitle: "Formación académica",
      expTitle: "Experiencia profesional",
      rodolfo: {
        name: "C.P.C. y M.B.A. Rodolfo Basurto",
        role: "Socio Líder, Auditoría y Asesoría",
        edu: [
          "Contador Público Certificado por el Instituto Mexicano de Contadores Públicos (CPC).",
          "Contador Público Registrado ante la Administración General Fiscal (CPR).",
          "Maestría en Administración y Finanzas.",
          "Programa de Alta Dirección de Empresas en el IPADE.",
          "Programa de Liderazgo en Georgetown University.",
          "Miembro del Colegio Nacional de Consejeros Profesionales Independientes de Empresas."
        ],
        exp: [
          "Socio Líder del área de Auditoría y Asesoría.",
          "Más de 30 años de experiencia como consultor, atendiendo a compañías internacionales y mexicanas, públicas y privadas.",
          "Instructor de normatividad contable y catedrático universitario.",
          "Amplia experiencia en Normas de Información Financiera (NIF), Normas Internacionales de Información Financiera (NIIF) y Principios de Contabilidad Generalmente Aceptados en Estados Unidos (US GAAP).",
          "Más de 20 años colaborando para una firma internacional (Big Four)."
        ]
      }
    },
    valueAdd: {
      eyebrow: "Nuestro valor agregado",
      title: "Nuestro valor agregado",
      items: [
        { title: "Más de 30 años de experiencia", body: "Más de tres décadas apoyando a empresas mexicanas e internacionales con atención especializada de alto nivel." },
        { title: "Uso de tecnología", body: "Utilizamos tecnología para agilizar el monitoreo del cumplimiento y brindar a nuestros clientes información confiable y oportuna." },
        { title: "Comunicación constante", body: "Mantenemos un diálogo constante con nuestros clientes durante todo el proyecto, no solo en las fechas límite." },
        { title: "Entrega oportuna", body: "Nos comprometemos a entregar nuestro trabajo a tiempo, siempre, para que nuestros clientes puedan planear con confianza." }
      ]
    },
    aboutCta: {
      title: "¿Listo para trabajar con un socio que conoce tu industria?",
      body: "Contáctanos y hablemos sobre cómo Basher puede apoyar a tu equipo.",
      button: "Contáctanos"
    },

    /* ---------- SERVICES ---------- */
    servicesPage: {
      eyebrow: "Lo que hacemos",
      title: "Nuestros servicios",
      lede: "Servicios de cumplimiento regulatorio, aseguramiento y asesoría diseñados para generar valor y confianza en cada proyecto."
    },
    svc: {
      auditoriaTitle: "Auditorías y servicios de atestiguamiento",
      auditoriaChecklist: [
        "Auditorías de estados financieros",
        "Auditorías de propósito específico",
        "Peritaje contable",
        "Dictamen de comisario"
      ],

      controlInternoTitle: "Control interno",
      controlInterno: [
        "Evaluación del diseño de la estructura de control interno",
        "Revisión de la eficacia operativa del control interno",
        "Apoyo en la reestructura de procesos de control interno",
        "Diseño de la estructura de control interno basado en COSO"
      ],

      contablesTitle: "Servicios contables",
      contables: [
        "Diagnóstico sobre el cumplimiento contable, local o internacional",
        "Contabilidad general",
        "Elaboración y revisión de paquetes de consolidación",
        "Elaboración de estados financieros bajo NIF, NIIF o US GAAP",
        "Apoyo en la implementación de normas contables (NIF, NIIF o US GAAP)",
        "Capacitación en materia contable"
      ],

      fiscalesTitle: "Servicios fiscales",
      fiscales: [
        "Impuestos mensuales y anuales (ISR e IVA)",
        "Estudios de precios de transferencia",
        "Dictamen fiscal"
      ]
    },
    servicesCta: {
      title: "¿No estás seguro qué servicio necesitas?",
      body: "Cuéntanos sobre la situación de tu empresa y te ayudaremos a definir el alcance adecuado.",
      button: "Hablemos"
    },

    /* ---------- CLIENTS ---------- */
    clientsPage: {
      eyebrow: "Confían en nosotros",
      title: "Algunos de nuestros clientes",
      lede: "Nos enorgullece apoyar a organizaciones nacionales e internacionales en los sectores farmacéutico, inmobiliario, automotriz e industrial, salud, seguros, retail, servicios de alimentos y tecnología, entre otros."
    },
    clientsCta: {
      title: "Súmate a las empresas que confían en Basher.",
      body: "Hablemos sobre cómo podemos apoyar tus necesidades de cumplimiento, aseguramiento y asesoría.",
      button: "Iniciar una conversación"
    },

    /* ---------- CONTACT ---------- */
    contactPage: {
      eyebrow: "Hablemos",
      title: "Contáctanos",
      lede: "Nos encantaría conocer más sobre tu empresa y platicar cómo Basher puede ayudarte."
    },
    contact: {
      officeTitle: "Ubicación de la oficina",
      officeCity: "Ciudad de México",
      officeAddress: "Calle Hamburgo 213, Piso 11, Oficina 905<br>Col. Juárez, Alcaldía Cuauhtémoc<br>C.P. 06600<br>Ciudad de México",
      infoTitle: "Información de contacto",
      infoName: "Rodolfo Basurto",
      formTitle: "Envíanos un mensaje",
      labelName: "Nombre completo",
      labelEmail: "Correo electrónico",
      labelSubject: "Asunto",
      labelMessage: "Mensaje",
      placeholderName: "Tu nombre",
      placeholderEmail: "tu@empresa.com",
      placeholderSubject: "¿Cómo podemos ayudarte?",
      placeholderMessage: "Cuéntanos un poco sobre tu empresa y lo que necesitas...",
      submit: "Enviar mensaje",
      note: "Este formulario abre tu cliente de correo dirigido a contacto@basher.mx — no se almacena ni se envía información a ningún otro lugar."
    }
  }
};

function resolvePath(obj, path){
  return path.split(".").reduce((o,k)=> (o && o[k] !== undefined) ? o[k] : undefined, obj);
}

function getLang(){
  return localStorage.getItem("basher-lang") || "en";
}

function applyTranslations(lang){
  const dict = I18N[lang] || I18N.en;
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const val = resolvePath(dict, key);
    if (val === undefined) return;
    if (Array.isArray(val)){
      // render as <li> items inside the element
      el.innerHTML = val.map(item => `<li>${item}</li>`).join("");
    } else {
      el.innerHTML = val;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el=>{
    const spec = el.getAttribute("data-i18n-attr"); // format: "attr:key"
    const [attr, key] = spec.split(":");
    const val = resolvePath(dict, key);
    if (val !== undefined) el.setAttribute(attr, val);
  });

  const enEl = document.querySelector(".lang-en");
  const esEl = document.querySelector(".lang-es");
  if (enEl && esEl){
    enEl.setAttribute("data-active", lang === "en" ? "true" : "false");
    esEl.setAttribute("data-active", lang === "es" ? "true" : "false");
  }

  window.dispatchEvent(new Event("basher:translated"));
}

function setLang(lang){
  localStorage.setItem("basher-lang", lang);
  applyTranslations(lang);
}

function initLangToggle(){
  const btn = document.getElementById("langToggle");
  if (!btn) return;
  btn.addEventListener("click", ()=>{
    const next = getLang() === "en" ? "es" : "en";
    setLang(next);
  });
}

function initMobileNav(){
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("mainNav");
  if (!hamburger || !nav) return;
  hamburger.addEventListener("click", ()=>{
    nav.classList.toggle("open");
  });
  nav.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=> nav.classList.remove("open"));
  });
}

function initYear(){
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

function initContactForm(){
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = form.querySelector("#cf-name").value.trim();
    const email = form.querySelector("#cf-email").value.trim();
    const subject = form.querySelector("#cf-subject").value.trim() || "Website inquiry";
    const message = form.querySelector("#cf-message").value.trim();
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:contacto@basher.mx?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function initHeroParallax(){
  const hero = document.querySelector(".hero");
  const video = hero ? hero.querySelector(".hero-video") : null;
  if (!hero || !video) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const MAX_SHIFT = 40; // px — stays within the video's extra scale so no edges show
  const SPEED = 0.18;   // fraction of scroll distance the background lags by
  let ticking = false;

  function update(){
    ticking = false;
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return; // hero not in view
    let shift = -rect.top * SPEED;
    if (shift > MAX_SHIFT) shift = MAX_SHIFT;
    if (shift < -MAX_SHIFT) shift = -MAX_SHIFT;
    video.style.transform = `scale(1.12) translateY(${shift}px)`;
  }

  function onScroll(){
    if (!ticking){
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}

function initNetworkMap(){
  const svg = document.querySelector(".network-map-svg");
  if (!svg) return;
  const countries = Array.from(svg.querySelectorAll(".country.is-hq, .country.is-partner"));
  if (!countries.length) return;

  // Order must match the network.countries translation arrays.
  const PARTNER_ORDER = ["COL","BRA","ARG","CHL","ESP","CAN"];

  const callout = svg.querySelector(".map-callout");
  const line = callout.querySelector(".map-callout-line");
  const dot = callout.querySelector(".map-callout-dot");
  const bg = callout.querySelector(".map-callout-bg");
  const text = callout.querySelector(".map-callout-text");
  const viewBoxW = (svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width) || 1200;
  const hintEl = document.querySelector(".network-map-hint");
  const canHoverDevice = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function updateNames(){
    const dict = I18N[getLang()] || I18N.en;
    const names = (dict.network && dict.network.countries) || [];
    const hqName = (dict.network && dict.network.hqName) || "Mexico";
    countries.forEach(el=>{
      const id = el.id.replace("c-", "");
      if (id === "MEX"){
        el.setAttribute("data-name", hqName);
      } else {
        const idx = PARTNER_ORDER.indexOf(id);
        if (idx > -1 && names[idx]) el.setAttribute("data-name", names[idx]);
      }
    });
    if (hintEl){
      const net = dict.network || {};
      hintEl.textContent = canHoverDevice
        ? (net.mapHint || hintEl.textContent)
        : (net.mapHintTouch || net.mapHint || hintEl.textContent);
    }
  }

  // Keeps the callout's text/line/dot a roughly constant on-screen size no
  // matter how small the responsive SVG has been scaled down to — a fixed
  // SVG-unit font-size would shrink to unreadable on a narrow phone.
  function getScale(){
    const rect = svg.getBoundingClientRect();
    return rect.width ? rect.width / viewBoxW : 1;
  }

  function hideCallout(){
    callout.classList.remove("is-visible");
  }

  function showCallout(path){
    const name = path.getAttribute("data-name");
    if (!name) return;
    const bbox = path.getBBox();
    const cx = bbox.x + bbox.width / 2;
    const cy = bbox.y + bbox.height / 2;
    const scale = getScale() || 1;
    const fontSize = 15 / scale;
    const lift = 36 / scale;
    const padX = 8 / scale;
    const padY = 6 / scale;
    const margin = 6 / scale;

    let labelY = cy - lift;
    if (labelY < margin) labelY = margin;

    text.setAttribute("font-size", fontSize.toFixed(2));
    text.textContent = name;
    text.setAttribute("x", cx);
    text.setAttribute("y", labelY);
    text.setAttribute("text-anchor", "middle");

    // Nudge horizontally so the label never spills outside the map.
    const tb = text.getBBox();
    let shiftX = 0;
    if (tb.x < margin) shiftX = margin - tb.x;
    else if (tb.x + tb.width > viewBoxW - margin) shiftX = (viewBoxW - margin) - (tb.x + tb.width);
    if (shiftX !== 0) text.setAttribute("x", cx + shiftX);
    const tb2 = text.getBBox();

    bg.setAttribute("x", tb2.x - padX);
    bg.setAttribute("y", tb2.y - padY);
    bg.setAttribute("width", tb2.width + padX * 2);
    bg.setAttribute("height", tb2.height + padY * 2);
    bg.setAttribute("rx", (5 / scale).toFixed(2));

    line.setAttribute("x1", cx);
    line.setAttribute("y1", cy);
    line.setAttribute("x2", cx);
    line.setAttribute("y2", tb2.y + tb2.height + padY);
    line.setAttribute("stroke-width", (1.5 / scale).toFixed(2));

    dot.setAttribute("cx", cx);
    dot.setAttribute("cy", cy);
    dot.setAttribute("r", (3.5 / scale).toFixed(2));

    callout.classList.add("is-visible");
  }

  const canHover = canHoverDevice;

  countries.forEach(path=>{
    if (canHover){
      path.addEventListener("mouseenter", ()=> showCallout(path));
      path.addEventListener("mouseleave", hideCallout);
    } else {
      path.addEventListener("click", (e)=>{
        e.stopPropagation();
        const already = callout.classList.contains("is-visible") && callout.dataset.current === path.id;
        if (already){
          hideCallout();
          callout.dataset.current = "";
        } else {
          showCallout(path);
          callout.dataset.current = path.id;
        }
      });
    }
    path.addEventListener("focus", ()=> showCallout(path));
    path.addEventListener("blur", hideCallout);
  });

  if (!canHover){
    svg.addEventListener("click", ()=>{
      hideCallout();
      callout.dataset.current = "";
    });
  }

  window.addEventListener("resize", hideCallout);

  updateNames();
  window.addEventListener("basher:translated", updateNames);
}

// Services page: each service section starts collapsed and only reveals its
// detail content when the user clicks its header. The top quick-nav links
// (#tributaria, #auditoria, etc.) also open the matching section and scroll
// it into view below the two sticky bars (site header + services quick-nav).
function initServiceAccordion(){
  const sections = Array.from(document.querySelectorAll(".service-detail"));
  if (!sections.length) return;

  const items = sections.map(section=>{
    const toggle = section.querySelector(".service-detail-toggle");
    const panel = section.querySelector(".service-detail-panel");
    return { id: section.id, section, toggle, panel };
  }).filter(item => item.toggle && item.panel);

  function setOpen(item, open){
    item.toggle.setAttribute("aria-expanded", open ? "true" : "false");
    item.panel.classList.toggle("is-open", open);
  }

  function scrollToSection(section){
    const header = document.querySelector(".site-header");
    const nav = document.querySelector(".services-nav");
    const offset = (header ? header.offsetHeight : 0) + (nav ? nav.offsetHeight : 0) + 12;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  }

  items.forEach(item=>{
    item.toggle.addEventListener("click", ()=>{
      const isOpen = item.toggle.getAttribute("aria-expanded") === "true";
      setOpen(item, !isOpen);
      if (!isOpen) scrollToSection(item.section);
    });
  });

  // Quick-nav links: open the target section instead of just jumping to it.
  document.querySelectorAll(".services-nav-inner a[href^='#']").forEach(link=>{
    link.addEventListener("click", (e)=>{
      const id = link.getAttribute("href").slice(1);
      const item = items.find(it => it.id === id);
      if (!item) return;
      e.preventDefault();
      setOpen(item, true);
      scrollToSection(item.section);
    });
  });

  // Deep link support: services.html#litigio opens and scrolls to that section.
  if (location.hash){
    const item = items.find(it => "#" + it.id === location.hash);
    if (item){
      setOpen(item, true);
      window.addEventListener("load", ()=> scrollToSection(item.section));
    }
  }
}

function initScrollReveal(){
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)){
    els.forEach(el => el.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", ()=>{
  applyTranslations(getLang());
  initLangToggle();
  initMobileNav();
  initYear();
  initContactForm();
  initHeroParallax();
  initNetworkMap();
  initServiceAccordion();
  initScrollReveal();
});
