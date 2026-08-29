/* ============================================================
   BASHER — shared site behaviour: i18n (EN/ES) + nav + footer
   ============================================================ */

const I18N = {
  en: {
    nav: { home:"Home", about:"About Us", services:"Services", clients:"Clients", contact:"Contact" },
    footer: {
      tagline: "Passion for what we do…",
      office: "Office",
      addressLine: "Av. Paseo de la Reforma 296, Piso 25, Ofna. 110<br>Col. Juárez, Alcaldía Cuauhtémoc<br>C.P. 06600 — Mexico City",
      contact: "Contact",
      contactBlock: "Rodolfo Basurto<br><a href=\"mailto:rbasurto@basher.mx\">rbasurto@basher.mx</a><br>+52 55 3222 5122<br><a href=\"mailto:contacto@basher.mx\">contacto@basher.mx</a>",
      site: "Site",
      rights: "All rights reserved."
    },

    /* ---------- HOME ---------- */
    hero: {
      eyebrow: "Basurto Herrera Consultores, S.C.",
      title: "Accounting, audit and tax expertise you can build a partnership on.",
      lede: "More than 30 years serving public and private companies in Mexico and abroad, with the knowledge and care of a firm that treats every client as a long-term partner.",
      cta1: "Our services",
      cta2: "Get in touch"
    },
    home: {
      aboutEyebrow: "Who we are",
      aboutTitle: "A Mexican firm built on experience and trust",
      aboutBody: "Our firm was founded as an alternative for companies seeking the highest-quality consulting, audit and tax services, with the flexibility, accountability and personal attention that only a boutique firm can offer. Our professionals bring the experience needed in local and international accounting standards, external audit, internal control structures and taxation, having taken part in highly relevant, highly specialized projects.",
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
    mission: { title:"Mission", body:"“To be a specialized firm, recognized and prestigious in our markets, to be thought and opinion leaders, while being efficient, profitable, and upholding the value of integrity in our people.”" },
    vision: { title:"Vision", body:"“To provide excellent service to our clients, driving results toward the growth of our firm and the successful development of our careers as professionals.”" },
    values: {
      title:"Values",
      items:["Integrity","Honesty","Responsibility","Flexibility","Quality","Our people"]
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
      body: "Our firm was founded as an alternative for companies seeking the highest-quality consulting, audit and tax services, with the flexibility, accountability and personal attention that only a boutique firm can offer. Our professionals bring the experience needed in local and international accounting standards, external audit, internal control structures and taxation, having taken part in highly relevant, highly specialized projects.",
      stat1n: "30+", stat1s: "Years of experience",
      stat2n: "6", stat2s: "Industries served",
      stat3n: "15+", stat3s: "Clients supported"
    },
    industries: {
      eyebrow: "Sector experience",
      title: "Our experience in the industry",
      body: "Over the years we have built deep, practical experience across a diverse set of sectors, allowing us to bring relevant, industry-aware insight to every engagement.",
      tags: ["Pharmaceutical","Automotive","Retail","Poultry Manufacturing","Agricultural Manufacturing"]
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
        { title: "30+ years of experience", body: "Three decades supporting Mexican and international companies with specialized, senior-level attention." },
        { title: "Technology-driven", body: "We use technology to streamline compliance monitoring and give our clients reliable, timely information." },
        { title: "Constant communication", body: "We maintain an ongoing dialogue with our clients throughout every engagement, not only at deadlines." },
        { title: "Timely delivery", body: "We are committed to delivering our work on time, every time, so our clients can plan with confidence." }
      ]
    },
    presence: {
      eyebrow: "Where we are",
      title: "Our presence",
      body: "We operate from four offices across Mexico, allowing us to serve clients with local knowledge and national reach.",
      offices: ["Mexico City — Headquarters","Guadalajara","Aguascalientes","Mérida"]
    },
    network: {
      eyebrow: "Global reach",
      title: "Strategic partner network",
      body: "Through our network of strategic partners, we extend our reach beyond Mexico to support clients with cross-border operations.",
      countries: ["Colombia","Brazil","Argentina","Chile","Spain","Canada"],
      mapAlt: "World map highlighting Mexico and our strategic partner countries",
      mapHint: "Hover over a highlighted country to see its name.",
      mapHintTouch: "Tap a highlighted country to see its name.",
      hqName: "Mexico",
      legendHq: "Mexico — Headquarters",
      legendPartners: "Strategic partner countries"
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
      auditoriaTitle: "Audit",
      asesoriaTitle: "Advisory",
      cumplimientoTitle: "Accounting & Tax Compliance",
      tributariaTitle: "Tax Consulting",
      reestructurasTitle: "Corporate Restructuring",
      litigioTitle: "Tax Litigation & Dispute Resolution",
      administrativosTitle: "Administrative Services & Soft Landing",

      tributaria: [
        "We work alongside our clients as business partners, providing specialized professional tax services tailored to their needs.",
        "We analyze our clients' operating structure together with them to determine the vehicles or entities that offer the greatest tax advantages.",
        "We prepare, file and follow up on tax refund requests, special treatment authorizations, and rulings before the relevant tax authorities.",
        "Preparation and analysis of tax calculations, projections and year-end closings, estimated and final monthly payments, and application of international treaties to avoid double taxation and the multilateral instrument applicable to Mexico.",
        "We perform special reviews (due diligence) and assist our clients with any administrative procedure or with representation and dispute resolution before the tax authorities."
      ],

      auditoriaIntro: "Our external audit service uses a methodology that supports the issuance of the audit report, providing assurance on the reasonableness of our clients' financial statements. We also perform thorough evaluations of internal control systems, identifying areas for improvement and mitigating potential risks.",
      auditoriaChecklist: ["Financial statement audits","Specific-purpose audits","Internal control structure reviews"],

      asesoria: [
        "We support our clients in adopting and transitioning to Mexican Financial Reporting Standards (NIF), International Financial Reporting Standards (IFRS), and U.S. GAAP.",
        "We provide ongoing technical accounting guidance, translating complex standards into clear, well-documented policies tailored to each client's operations."
      ],

      cumplimiento: [
        "Diagnosis of accounting and tax compliance, both local and international.",
        "General accounting and preparation of financial statements under NIF, IFRS or US GAAP.",
        "Calculation and filing of monthly and annual taxes (Income Tax and VAT), provisional and final payments.",
        "Preparation and review of consolidation packages and reports to the Mexican Stock Exchange.",
        "Transfer pricing studies and related-party filings.",
        "Accounting and tax training for our clients' teams."
      ],

      reestructuras: [
        "Tax diagnostics for companies deciding to acquire, sell, merge or spin off, identifying opportunities and potential risks or contingencies.",
        "We help quantify immediate and potential risks that could affect business assets or create fiscal or legal contingencies at the corporate or shareholder level.",
        "We have experience in corporate restructurings and prepare tax opinions arising from mergers or asset acquisitions.",
        "We assist our clients throughout the process, handling procedures before the tax authorities or coordinating execution and the plans to follow in a restructuring."
      ],

      litigio: [
        "Filing legal defenses against tax rulings that cause harm (refund denials, responses to requirements, clarifications, audits, etc.).",
        "Preparation of opinions on the interpretation and application of tax provisions, plus legal support and advice on tax planning.",
        "Advice on filing procedures with the tax authorities (refund requests, offsets, criteria confirmations, authorizations) and before PRODECON (complaints, claims, inquiries, conclusive agreements).",
        "Advice during audit procedures (in-person or electronic) to reduce or eliminate a taxpayer's potential liability.",
        "Advice on clarification proceedings before the SAT regarding transactions with taxpayers listed under Article 69-B of the Federal Fiscal Code (EFOS), as well as temporary restriction or cancellation of the Digital Seal Certificate.",
        "Advice on compliance with Reportable Schemes disclosure obligations."
      ],

      administrativosIntro: "Clear, organized administration is the foundation of good decision-making. We offer our experience in comprehensive administrative services and the development of administrative dashboards that provide reliable, timely information, presented strategically for business management.",
      administrativosLeft: [
        "Development of Administrative Dashboards, design and customization of interactive scorecards.",
        "Integration of key performance indicators (KPIs).",
        "Automated reports on income, expenses and cash flow.",
        "Comparative dashboards by period (monthly, quarterly, annual).",
        "Procedure and permit management (gestoría)."
      ],
      administrativosRight: [
        "General administrative services.",
        "Control and recording of income and expense CFDIs (digital tax receipts).",
        "Accounts payable and receivable management.",
        "Budget control and expense tracking.",
        "Support with compliance and documentation processes, and handling requirements from clients and suppliers."
      ]
    },
    tech: {
      eyebrow: "Technology at your service",
      title: "Fiscal services powered by technology",
      efosTitle: "EFOS Monitoring",
      efosBody: "24/7 monitoring of the CFF's Article 69-B and 49-Bis blacklists to screen our clients' suppliers.",
      saludTitle: "Salud Fiscal by Cimatic",
      saludBody: "A platform that keeps clients informed of their tax status with the SAT, with reporting tools and CFDI management.",
      repseTitle: "REPSE Monitoring",
      repseBody: "Control, management and safekeeping of the documentation that evidences compliance with REPSE obligations."
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
      lede: "We are proud to support leading national and international organizations across telecommunications, energy, real estate, industrial, pharmaceutical, retail, automotive, healthcare and government sectors, among others."
    },
    clientsCats: {
      telecom: "Telecommunications",
      data: "Data Services",
      energy: "Energy Sector",
      food: "Food & Beverage",
      gov: "Government Agencies",
      realestate: "Real Estate",
      construction: "Construction",
      services: "Services",
      industrial: "Industrial",
      insurance: "Insurance",
      pharma: "Pharmaceutical",
      health: "Healthcare",
      retail: "Retail",
      automotive: "Automotive"
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
      officeAddress: "Av. Paseo de la Reforma 296, Piso 25 Ofna. 110<br>Col. Juarez, Alcaldía Cuauhtémoc<br>C.P. 06600<br>Ciudad de México",
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
      addressLine: "Av. Paseo de la Reforma 296, Piso 25, Ofna. 110<br>Col. Juárez, Alcaldía Cuauhtémoc<br>C.P. 06600 — Ciudad de México",
      contact: "Contacto",
      contactBlock: "Rodolfo Basurto<br><a href=\"mailto:rbasurto@basher.mx\">rbasurto@basher.mx</a><br>+52 55 3222 5122<br><a href=\"mailto:contacto@basher.mx\">contacto@basher.mx</a>",
      site: "Sitio",
      rights: "Todos los derechos reservados."
    },

    /* ---------- HOME ---------- */
    hero: {
      eyebrow: "Basurto Herrera Consultores, S.C.",
      title: "Experiencia contable, de auditoría y fiscal sobre la cual construir una relación de confianza.",
      lede: "Más de 30 años sirviendo a empresas públicas y privadas en México y en el extranjero, con el conocimiento y el cuidado de una firma que trata a cada cliente como un socio de largo plazo.",
      cta1: "Nuestros servicios",
      cta2: "Contáctanos"
    },
    home: {
      aboutEyebrow: "Quiénes somos",
      aboutTitle: "Una firma mexicana construida sobre experiencia y confianza",
      aboutBody: "Nuestra firma nace como una alternativa para compañías que buscan servicios de la más alta calidad en consultoría, auditoría y servicios de impuestos, con la flexibilidad, responsabilidad y trato personal que solamente una firma boutique puede dar. Nuestros profesionales cuentan con la experiencia necesaria en normatividad contable local e internacional, auditoría externa, estructuras de control interno y tributación, ya que han participado en proyectos de gran relevancia y alto nivel de especialización.",
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
    mission: { title:"Misión", body:"“Ser una firma especializada, con reconocimiento y prestigio en nuestros mercados, ser líderes de pensamiento y opinión, siendo eficientes, rentables y ejerciendo el valor de la integridad de nuestra gente.”" },
    vision: { title:"Visión", body:"“Brindar servicios de excelencia a nuestros clientes, orientando resultados al crecimiento de nuestra firma y al exitoso desarrollo de nuestras carreras como profesionistas.”" },
    values: {
      title:"Valores",
      items:["Integridad","Honestidad","Responsabilidad","Flexibilidad","Calidad","Nuestra gente"]
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
      body: "Nuestra firma nace como una alternativa para compañías que buscan servicios de la más alta calidad en consultoría, auditoría y servicios de impuestos, con la flexibilidad, responsabilidad y trato personal que solamente una firma boutique puede dar. Nuestros profesionales cuentan con la experiencia necesaria en normatividad contable local e internacional, auditoría externa, estructuras de control interno y tributación, ya que han participado en proyectos de gran relevancia y alto nivel de especialización.",
      stat1n: "30+", stat1s: "Años de experiencia",
      stat2n: "6", stat2s: "Industrias atendidas",
      stat3n: "15+", stat3s: "Clientes atendidos"
    },
    industries: {
      eyebrow: "Experiencia sectorial",
      title: "Nuestra experiencia en la industria",
      body: "A lo largo de los años hemos construido experiencia profunda y práctica en diversos sectores, lo que nos permite aportar una perspectiva relevante y especializada en cada proyecto.",
      tags: ["Farmacéutica","Automotriz","Retail","Manufactura Avícola","Manufactura Agrícola"]
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
        { title: "Más de 30 años de experiencia", body: "Tres décadas apoyando a empresas mexicanas e internacionales con atención especializada de alto nivel." },
        { title: "Uso de tecnología", body: "Utilizamos tecnología para agilizar el monitoreo del cumplimiento y brindar a nuestros clientes información confiable y oportuna." },
        { title: "Comunicación constante", body: "Mantenemos un diálogo constante con nuestros clientes durante todo el proyecto, no solo en las fechas límite." },
        { title: "Entrega oportuna", body: "Nos comprometemos a entregar nuestro trabajo a tiempo, siempre, para que nuestros clientes puedan planear con confianza." }
      ]
    },
    presence: {
      eyebrow: "Dónde estamos",
      title: "Presencia",
      body: "Operamos desde cuatro oficinas en México, lo que nos permite atender a nuestros clientes con conocimiento local y alcance nacional.",
      offices: ["Ciudad de México — Matriz","Guadalajara","Aguascalientes","Mérida"]
    },
    network: {
      eyebrow: "Alcance global",
      title: "Red de socios estratégicos",
      body: "A través de nuestra red de socios estratégicos, extendemos nuestro alcance más allá de México para apoyar a clientes con operaciones transfronterizas.",
      countries: ["Colombia","Brasil","Argentina","Chile","España","Canadá"],
      mapAlt: "Mapa mundial con México y los países de nuestra red de socios estratégicos",
      mapHint: "Pasa el mouse sobre un país marcado para ver su nombre.",
      mapHintTouch: "Toca un país marcado para ver su nombre.",
      hqName: "México",
      legendHq: "México — Sede",
      legendPartners: "Países con convenio estratégico"
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
      auditoriaTitle: "Auditoría",
      asesoriaTitle: "Asesoría",
      cumplimientoTitle: "Cumplimiento Contable-Fiscal",
      tributariaTitle: "Consultoría Tributaria",
      reestructurasTitle: "Reestructuras Corporativas",
      litigioTitle: "Litigio Fiscal y Resolución de Controversias",
      administrativosTitle: "Servicios Administrativos y Soft Landing",

      tributaria: [
        "Trabajamos conjuntamente con nuestros clientes como socios de negocio, brindando servicios profesionales especializados en materia fiscal, adaptados a sus necesidades.",
        "Analizamos junto con nuestros clientes la estructura de operación para determinar los vehículos o entidades que ofrezcan las mayores ventajas fiscales.",
        "Preparamos, presentamos y damos seguimiento a solicitudes de devolución de impuestos, autorizaciones de tratamientos especiales y resoluciones ante las autoridades fiscales correspondientes.",
        "Elaboración y análisis de cálculos y proyecciones fiscales y cierres de ejercicio, pagos provisionales y definitivos mensuales, así como aplicación de tratados internacionales para evitar la doble tributación y el instrumento multilateral aplicable a México.",
        "Realizamos revisiones especiales (due diligence) y apoyamos a nuestros clientes en cualquier trámite administrativo o en su representación y solución de controversias ante las autoridades fiscales."
      ],

      auditoriaIntro: "Nuestro servicio de auditoría externa utiliza una metodología que soporta la emisión del dictamen, brindando certeza sobre la razonabilidad de los estados financieros de nuestros clientes. Asimismo, realizamos evaluaciones exhaustivas de los sistemas de control interno, identificando áreas de mejora y mitigando riesgos potenciales.",
      auditoriaChecklist: ["Auditoría de estados financieros","Auditorías de propósito específico","Revisión de estructuras de control interno"],

      asesoria: [
        "Apoyamos a nuestros clientes en la adopción y transición hacia las Normas de Información Financiera (NIF) locales, las normas internacionales (IFRS) y las normas de Estados Unidos (US GAAP).",
        "Brindamos asesoría técnica contable continua, traduciendo normas complejas en políticas claras y bien documentadas, adaptadas a las operaciones de cada cliente."
      ],

      cumplimiento: [
        "Diagnóstico de cumplimiento contable y fiscal, tanto local como internacional.",
        "Contabilidad general y preparación de estados financieros bajo NIF, IFRS o US GAAP.",
        "Cálculo y presentación de impuestos mensuales y anuales (ISR e IVA), pagos provisionales y definitivos.",
        "Preparación y revisión de paquetes de consolidación y reportes a la Bolsa Mexicana de Valores.",
        "Estudios de precios de transferencia y declaraciones de partes relacionadas.",
        "Capacitación contable y fiscal a los equipos de nuestros clientes."
      ],

      reestructuras: [
        "Diagnósticos fiscales para empresas que deciden adquirir, vender, fusionar o escindir, identificando oportunidades y posibles riesgos o contingencias.",
        "Ayudamos a cuantificar los riesgos inmediatos y potenciales que pudieran afectar el patrimonio del negocio o generar contingencias fiscales o legales a nivel corporativo o de los accionistas.",
        "Contamos con experiencia en reestructuras corporativas y elaboración de opiniones fiscales derivadas de fusiones o adquisiciones de activos.",
        "Acompañamos a nuestros clientes durante todo el proceso, atendiendo trámites ante las autoridades fiscales o coordinando la ejecución y los planes a seguir en una reestructura."
      ],

      litigio: [
        "Interposición de defensas legales en contra de resoluciones fiscales que causen un perjuicio (negativas de devolución, respuestas a requerimientos, aclaraciones, auditorías, etc.).",
        "Elaboración de opiniones sobre la interpretación y aplicación de disposiciones fiscales, así como acompañamiento y asesoría legal en materia de planeación fiscal.",
        "Asesoría en la presentación de trámites ante las autoridades fiscales (solicitudes de devolución, compensaciones, confirmaciones de criterio, autorizaciones) y ante PRODECON (quejas, reclamaciones, consultas, acuerdos conclusivos).",
        "Asesoría durante procedimientos de fiscalización (presenciales o electrónicos) para reducir o eliminar una posible contingencia del contribuyente.",
        "Asesoría en procedimientos de aclaración ante el SAT respecto a operaciones con contribuyentes listados en el artículo 69-B del Código Fiscal de la Federación (EFOS), así como en la restricción temporal o cancelación del Certificado de Sello Digital.",
        "Asesoría en el cumplimiento de las obligaciones de revelación de Esquemas Reportables."
      ],

      administrativosIntro: "Una administración clara y organizada es la base de una buena toma de decisiones. Ofrecemos nuestra experiencia en servicios administrativos integrales y en el desarrollo de tableros administrativos que brindan información confiable y oportuna, presentada de forma estratégica para la gestión del negocio.",
      administrativosLeft: [
        "Desarrollo de Tableros Administrativos, diseño y personalización de tableros de control interactivos.",
        "Integración de indicadores clave de desempeño (KPIs).",
        "Reportes automatizados de ingresos, egresos y flujo de efectivo.",
        "Tableros comparativos por periodo (mensual, trimestral, anual).",
        "Gestoría de trámites y permisos."
      ],
      administrativosRight: [
        "Servicios administrativos generales.",
        "Control y registro de CFDIs de ingresos y egresos.",
        "Gestión de cuentas por pagar y por cobrar.",
        "Control presupuestal y seguimiento de gastos.",
        "Apoyo en procesos de cumplimiento y documentación, y atención de requerimientos de clientes y proveedores."
      ]
    },
    tech: {
      eyebrow: "Tecnología a tu servicio",
      title: "Servicios fiscales potenciados por tecnología",
      efosTitle: "Monitoreo de EFOS",
      efosBody: "Monitoreo 24/7 de los listados del artículo 69-B y 49-Bis del CFF para revisar a los proveedores de nuestros clientes.",
      saludTitle: "Salud Fiscal by Cimatic",
      saludBody: "Plataforma que mantiene informados a los clientes sobre su situación fiscal ante el SAT, con herramientas de reporte y gestión de CFDIs.",
      repseTitle: "Monitoreo REPSE",
      repseBody: "Control, gestión y resguardo de la documentación que acredita el cumplimiento de las obligaciones en materia de REPSE."
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
      lede: "Nos enorgullece apoyar a organizaciones nacionales e internacionales líderes en telecomunicaciones, energía, sector inmobiliario, industrial, farmacéutico, retail, automotriz, salud y gobierno, entre otros."
    },
    clientsCats: {
      telecom: "Telecomunicaciones",
      data: "Data Services",
      energy: "Sector Energético",
      food: "Alimentos y Bebidas",
      gov: "Dependencia Gubernamental",
      realestate: "Inmobiliario",
      construction: "Construcción",
      services: "Servicios",
      industrial: "Industrial",
      insurance: "Seguros",
      pharma: "Farmacéutica",
      health: "Salud",
      retail: "Retail",
      automotive: "Automotriz"
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
      officeAddress: "Av. Paseo de la Reforma 296, Piso 25 Ofna. 110<br>Col. Juárez, Alcaldía Cuauhtémoc<br>C.P. 06600<br>Ciudad de México",
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
