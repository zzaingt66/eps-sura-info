import type {
  BannerSlide,
  ContactLine,
  LabelValueItem,
  OfficeInfo,
  SectionMeta,
  ServiceItem,
  TabDefinition,
  TabKey,
  TitleDescriptionItem,
  TitleItemsItem,
} from "../types/content";

export const TABS: TabDefinition[] = [
  { key: "resena", label: "Reseña histórica" },
  { key: "proposito", label: "Misión" },
  { key: "vision", label: "Visión" },
  { key: "valoresInstitucionales", label: "Valores Institucionales" },
  { key: "politicasCalidad", label: "Políticas de Calidad" },
  { key: "objetivos", label: "Objetivos generales" },
  { key: "objetivosEspecificos", label: "Objetivos específicos" },
  { key: "serviciosIps", label: "Servicios de una IPS" },
  { key: "descripcionServicios", label: "Descripción de servicios" },
  { key: "tarifasServicios", label: "Valores" },
  { key: "ubicacionGeografica", label: "Ubicación geográfica" },
];

export const SECTION_META: Record<TabKey, SectionMeta> = {
  politicasCalidad: {
    title: "Políticas de Calidad",
    description:
      "Lineamientos institucionales para garantizar atención segura, oportuna, humanizada y con mejora continua.",
  },
  resena: {
    title: "Reseña histórica",
    description:
      "Origen, motivación y proyección de VitaNova IPS desde su creación en 2026.",
  },
  proposito: {
    title: "Misión",
    description:
      "Brindar servicios de salud integrales con altos estándares de calidad, responsabilidad y sentido humano, orientados a la promoción de la salud, la prevención de enfermedades, el diagnóstico oportuno y el tratamiento adecuado de nuestros usuarios. Nos comprometemos a ofrecer una atención segura, cálida y eficiente, centrada en las necesidades del paciente y su familia, garantizando el respeto por su dignidad y sus derechos.\n\nContamos con un talento humano altamente capacitado y comprometido, así como con procesos administrativos y asistenciales eficientes, que nos permiten asegurar la continuidad y oportunidad en la atención. Promovemos la mejora continua, la innovación y el uso adecuado de los recursos, con el fin de contribuir al bienestar, la satisfacción y la calidad de vida de la comunidad a la que servimos.",
  },
  vision: {
    title: "Visión",
    description:
      "Para el año 2030, VITANOVA será una EPS-IPS reconocida a nivel regional y nacional por la calidad, seguridad y humanización en la prestación de servicios de salud, destacándose por una atención oportuna, eficiente y centrada en el usuario. Nos proyectamos como una institución innovadora, con talento humano altamente capacitado y comprometido, que fortalece continuamente sus procesos asistenciales y administrativos.\n\nVITANOVA buscará consolidarse como un referente en la gestión integral de los servicios de salud, promoviendo el acceso equitativo, el uso eficiente de los recursos y la mejora continua, generando confianza, satisfacción y bienestar en la comunidad.",
  },
  objetivos: {
    title: "Objetivos generales",
    description:
      "Propósitos estratégicos que orientan el servicio integral y el compromiso de VitaNova IPS con sus usuarios.",
  },
  objetivosEspecificos: {
    title: "Objetivos específicos",
    description:
      "Metas concretas y medibles que guían las acciones de VitaNova IPS en calidad, prevención y acceso oportuno.",
  },

  valoresInstitucionales: {
    title: "Valores Institucionales",
    description:
      "Principios que orientan el comportamiento ético, la excelencia del servicio y el trabajo colaborativo en VitaNova IPS.",
  },
  serviciosIps: {
    title: "Servicios de una IPS",
    description:
      "Portafolio de servicios esenciales para atención integral, prevención, diagnóstico y rehabilitación de los usuarios.",
  },
  descripcionServicios: {
    title: "Descripción de servicios",
    description:
      "Detalle de cada servicio ofrecido por VitaNova IPS: qué es, en qué consiste y cómo beneficia al usuario.",
  },
  tarifasServicios: {
    title: "Valores",
    description:
      "Tarifas y paquetes de servicio de VitaNova IPS expresados en pesos colombianos (COP).",
  },
  ubicacionGeografica: {
    title: "Ubicación geográfica",
    description:
      "Encuéntranos en el Barrio Granada, en el corazón de Cali, Valle del Cauca.",
  },
};

export const RESENA_HISTORICA: string[] = [
  "La empresa VITANOVA EPS_IPS fue creada el 09 de marzo de 2026 en la institución Politécnico Internacional de Occidente (PIO) por las estudiantes Danna Alejandra Marín, Laura Guerrero, Leticia Isabel y Gisel Soto, en el marco de su formación en el área de la salud.",
  "VITANOVA EPS_IPS es una institución prestadora de servicios de salud orientada a brindar atención integral, con enfoque en la calidad, oportunidad y humanización del servicio.",
  "Se proyecta como una entidad comprometida con la promoción de la salud, la prevención de enfermedades y la atención oportuna, contribuyendo al mejoramiento de la calidad de vida de la población.",
  "Su visión es consolidarse como una institución reconocida por la calidad de sus servicios y su enfoque centrado en el usuario.",
];

export const CORPORATE_INFO: LabelValueItem[] = [
  {
    label: "Razón social",
    value: "Vitanova Servicios Integrales de Salud S.A.S.",
  },
  { label: "NIT", value: "901.456.789-1" },
  { label: "Consecutivo", value: "IPS-0001-2026" },
];

export const CONTACT_LINES: ContactLine[] = [
  { city: "Resto del país", phone: "+57 02 8000 518 519" },
  { city: "Cali", phone: "+57 604 540 6115" },
];

export const CALI_OFFICE: OfficeInfo = {
  name: "Oficina Cali",
  address: "Avenida 8N #15AN-31, Barrio Granada, Cali, Valle del Cauca, Colombia",
  hours: "Horarios de atención 7:00am a 8:00pm",
};

export const BANNER_SLIDES: BannerSlide[] = [
  {
    imageSrc: "/banner/folleto-banner.png",
    imageAlt: "Banner institucional de VitaNova IPS con servicios, horarios, ubicación y datos de contacto.",
    },
    {
    imageSrc: "/banner/welcome-banner.png",
    imageAlt: "Banner institucional de VitaNova IPS con servicios, horarios, ubicación y datos de contacto.",
    }
];


export const GENERAL_OBJECTIVES: TitleDescriptionItem[] = [
  {
    title: "Atención Integral con Calidad y Humanización",
    description:
      "Garantizar la prestación de servicios de salud integrales mediante la aplicación de protocolos clínicos estandarizados, asegurando calidad, seguridad del paciente y una atención humanizada en todos los niveles de atención.",
  },
  {
    title: "Promoción de la Salud y Prevención de la Enfermedad",
    description:
      "Desarrollar e implementar programas de promoción de la salud y prevención de la enfermedad, orientados a la detección temprana, el control de factores de riesgo y la educación continua de la comunidad usuaria.",
  },
  {
    title: "Acceso Oportuno y Eficiencia en la Atención",
    description:
      "Asegurar el acceso oportuno a los servicios de salud a través de una gestión eficiente de los recursos, optimización de los tiempos de atención y fortalecimiento de los procesos administrativos y asistenciales.",
  },
];

export const SPECIFIC_OBJECTIVES: TitleItemsItem[] = [
  {
    title: "Atención y calidad",
    items: [
      "Brindar una atención al usuario oportuna, respetuosa y humanizada, garantizando una adecuada orientación y respuesta a sus necesidades en los servicios de salud.",
    ],
  },
  {
    title: "Seguridad y Capacitación",
    items: [
      "Fortalecer la calidad y seguridad en la prestación de los servicios de salud, mediante el cumplimiento de protocolos y buenas prácticas institucionales.",
    ],
  },
  {
    title: "Capacitación del personal",
    items: [
      "Promover la capacitación continua del talento humano, con el fin de mejorar sus competencias y la calidad en la atención brindada a los usuarios.",
    ],
  },
];

export const QUALITY_POLICIES: string[] = [
  "Garantizar una atención en salud segura, oportuna y centrada en el usuario, asegurando el acceso equitativo a los servicios para todos los afiliados.",
  "Implementar procesos de mejora continua que optimicen la calidad, eficiencia y eficacia en la prestación de los servicios de salud.",
  "Promover la satisfacción de los usuarios mediante una atención humanizada, respetuosa y con enfoque integral.",
  "Cumplir estrictamente con la normatividad vigente del sistema de salud colombiano, asegurando transparencia y responsabilidad institucional.",
  "Fomentar la promoción de la salud, la prevención de la enfermedad y el autocuidado en la comunidad.",
  "Fortalecer el desarrollo del talento humano mediante procesos de formación continua, compromiso ético y sentido de pertenencia.",
  "Incorporar el uso de tecnologías e innovación para mejorar la calidad, accesibilidad y oportunidad en la atención en salud.",
];

export const INSTITUTIONAL_VALUES: TitleDescriptionItem[] = [
  {
    title: "Humanización",
    description:
      "Brindamos una atención en salud basada en el respeto, la empatía y la dignidad humana, reconociendo las necesidades emocionales y físicas de cada usuario.",
  },
  {
    title: "Compromiso",
    description:
      "Trabajamos con dedicación y sentido de pertenencia, orientando nuestros esfuerzos al bienestar de los usuarios y al mejoramiento continuo de los servicios de salud.",
  },
  {
    title: "Trabajo en equipo",
    description:
      "Fomentamos la colaboración y la comunicación entre los diferentes profesionales de la salud, con el fin de ofrecer una atención integral y oportuna a los usuarios.",
  },
  {
    title: "Responsabilidad",
    description:
      "Actuamos con compromiso y ética en cada una de nuestras funciones, garantizando el cumplimiento de nuestros deberes y la seguridad en la atención de los pacientes.",
  },
  {
    title: "Calidad",
    description:
      "Buscamos la excelencia en la prestación de los servicios, mediante la mejora continua de los procesos y el cumplimiento de estándares que garanticen una atención segura y efectiva.",
  },
];

export const IPS_SERVICES: ServiceItem[] = [
  {
    title: "Consulta externa",
    description:
      "Atención médica general y con algunos especialistas, donde se evalúa, diagnostica y trata a los pacientes sin necesidad de hospitalización.",
    packages: [
      "Consulta médica general (control y seguimiento)",
      "Consulta con especialista (primera vez)",
      "Consulta con especialista (control)",
    ],
    imageSrc: "/services/consulta-externa.png",
    imageAlt: "Consulta externa en IPS",
  },
  {
    title: "Promoción y prevención (PyP)",
    description:
      "Actividades para cuidar la salud y evitar enfermedades, como vacunación, controles médicos y educación sobre hábitos saludables.",
    packages: [
      "Paquete salud adulto (exámenes básicos)",
      "Paquetes de salud hombre (antígeno prostático)",
      "Paquetes de salud mujer (citología + mamografía)",
    ],
    imageSrc: "/services/promocion-prevencion.png",
    imageAlt: "Jornada de promoción y prevención en salud",
  },
  {
    title: "Enfermería",
    description:
      "Servicios básicos de apoyo como aplicación de inyecciones, curaciones, toma de signos vitales y seguimiento de pacientes.",
    packages: [
      "Aplicación de inyectables",
      "Curaciones simples",
      "Toma de signos vitales y glucemia capilar",
    ],
    imageSrc: "/services/atencion-domiciliaria.jpg",
    imageAlt: "Atención de enfermería a paciente",
  },
  {
    title: "Laboratorio clínico",
    description:
      "Realización de exámenes como sangre, orina y otros análisis que ayudan al médico a diagnosticar enfermedades.",
    packages: [
      "TSH (perfil tiroideo)",
      "Hemoglobina glicosilada",
      "Perfil lípido (colesterol, triglicéridos)",
      "Uroanalisis completo",
    ],
    imageSrc: "/services/laboratorio-clinico.jpg",
    imageAlt: "Muestras y análisis de laboratorio clínico",
  },
  {
    title: "Imágenes diagnósticas",
    description:
      "Servicios como rayos X y ecografías que permiten observar el interior del cuerpo para detectar problemas de salud.",
    packages: [
      "Radiografía de Tórax (PA y Lateral)",
      "Ecografía Abdominal Total",
      "Electrocardiograma (ECG)",
    ],
    imageSrc: "/services/imagenes-diagnosticas.jpg",
    imageAlt: "Equipo de imágenes diagnósticas en IPS",
  },
  {
    title: "Odontología",
    description:
      "Atención en salud oral, incluyendo limpieza, prevención y tratamientos básicos para el cuidado de los dientes.",
    packages: [
      "Consulta Odontológica y Diagnóstico",
      "Detartraje (Limpieza Dental)",
      "Exodoncia Simple (Extracción)",
    ],
    imageSrc: "/services/odontologia.png",
    imageAlt: "Consulta de odontología en IPS",
  },
  {
    title: "Rehabilitación",
    description:
      "Terapias como fisioterapia o terapia respiratoria para ayudar a los pacientes a recuperarse de lesiones o enfermedades.",
    packages: ["Sesión de Fisioterapia", "Sesión de Terapia Ocupacional"],
    imageSrc: "/services/rehabilitacion.png",
    imageAlt: "Sesión de rehabilitación terapéutica",
  },
  {
    title: "Atención domiciliaria",
    description:
      "Servicios de salud brindados en la casa del paciente, especialmente para personas con dificultad para desplazarse.",
    packages: ["Visita Médica Domiciliaria", "Enfermería Domiciliaria (1 hora)"],
    imageSrc: "/services/enfermeria.jpg",
    imageAlt: "Atención domiciliaria con personal de salud",
  },
  {
    title: "Telemedicina",
    description:
      "Consultas médicas a distancia mediante llamadas o videollamadas, facilitando el acceso a la atención.",
    packages: ["Consulta Médica General Virtual", "Orientación Médica Telefónica"],
    imageSrc: "/services/telemedicina.jpg",
    imageAlt: "Consulta médica por telemedicina",
  },
  {
    title: "Urgencias básicas",
    description:
      "Atención inmediata a pacientes con problemas de salud que requieren intervención rápida, pero que no son de alta complejidad.",
    packages: ["Valoración Médica Inicial", "Sutura de Herida Menor"],
    imageSrc: "/services/urgencias-basicas.jpg",
    imageAlt: "Atención de urgencias básicas en IPS",
  },
];

export const FOUNDING_PILLARS: TitleDescriptionItem[] = [
  {
    title: "Atención humana",
    description:
      "La institución nace para ofrecer una atención más humana, responsable y comprometida con las necesidades de los pacientes.",
  },
  {
    title: "Servicio integral",
    description:
      "VitaNova IPS fue concebida para brindar servicios de salud de manera integral, digna, oportuna y de calidad.",
  },
  {
    title: "Prevención y orientación",
    description:
      "Su propuesta también busca prevenir enfermedades y acompañar a cada usuario con apoyo y orientación.",
  },
];
