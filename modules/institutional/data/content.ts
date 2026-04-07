import type {
  ContactLine,
  LabelValueItem,
  OfficeInfo,
  SectionMeta,
  ServiceItem,
  TabDefinition,
  TabKey,
  TitleDescriptionItem,
} from "../types/content";

export const TABS: TabDefinition[] = [
  { key: "valoresInstitucionales", label: "Valores Institucionales" },
  { key: "politicasCalidad", label: "Políticas de Calidad" },
  { key: "serviciosIps", label: "Servicios de una IPS" }, 
  { key: "objetivos", label: "Objetivos generales" },
  { key: "proposito", label: "Misión y visión" },
  { key: "resena", label: "Reseña histórica" },
];

export const SECTION_META: Record<TabKey, SectionMeta> = {
  resena: {
    title: "Reseña histórica",
    description:
      "Origen, motivación y proyección de VitaNova IPS desde su creación en 2026.",
  },
  proposito: {
    title: "Misión y visión",
    description:
      "Declaraciones institucionales que resumen el propósito y la meta de crecimiento de VitaNova IPS.",
  },
  objetivos: {
    title: "Objetivos generales",
    description:
      "Propósitos estratégicos que orientan el servicio integral y el compromiso de VitaNova IPS con sus usuarios.",
  },
  politicasCalidad: {
    title: "Políticas de Calidad",
    description:
      "Lineamientos institucionales para garantizar atención segura, oportuna, humanizada y con mejora continua.",
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
};

export const RESENA_HISTORICA: string[] = [
  "La empresa VitaNova IPS fue creada el 09 de marzo de 2026 por cuatro estudiantes que compartían el mismo interés de aportar al bienestar de la comunidad y mejorar la calidad de los servicios de salud.",
  "La idea surgió a partir del deseo de crear una institución que brindara una atención más humana, responsable y comprometida con las necesidades de los pacientes.",
  "Desde su creación, VitaNova IPS se pensó como una institución dedicada a ofrecer servicios de salud de manera integral, con el propósito de garantizar una atención digna, oportuna y de calidad.",
  "Sus fundadores, al ser estudiantes interesados en el área de la salud, decidieron unir sus conocimientos y su iniciativa para desarrollar un proyecto que contribuyera al mejoramiento del sistema de atención y al cuidado de las personas.",
  "Esta IPS nace con la visión de crecer y convertirse en una entidad reconocida por su buen servicio, su responsabilidad y su compromiso con la salud de la población.",
  "Además, busca promover la prevención de enfermedades y el cuidado de la salud, brindando apoyo y orientación a cada uno de sus usuarios.",
  "De esta manera, VitaNova IPS representa el esfuerzo y la iniciativa de jóvenes estudiantes que, con dedicación y trabajo en equipo, decidieron crear una empresa enfocada en ofrecer un mejor servicio de salud para la comunidad.",
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

export const PURPOSE_CARDS: TitleDescriptionItem[] = [
  {
    title: "Misión",
    description:
      "Brindar servicios de salud integrales con calidad, responsabilidad y humanización, promoviendo el bienestar y la prevención de enfermedades en la comunidad.",
  },
  {
    title: "Visión",
    description:
      "Para el año 2030, ser una IPS reconocida por la calidad de sus servicios, la atención humanizada y el compromiso con la salud y el bienestar de nuestros usuarios.",
  },
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
    title: "Responsabilidad",
    description:
      "Actuamos con compromiso y ética en cada una de nuestras funciones, garantizando el cumplimiento de nuestros deberes y la seguridad en la atención de los pacientes.",
  },
  {
    title: "Compromiso",
    description:
      "Trabajamos con dedicación y sentido de pertenencia, orientando nuestros esfuerzos al bienestar de los usuarios y al mejoramiento continuo de los servicios de salud.",
  },
  {
    title: "Calidad",
    description:
      "Buscamos la excelencia en la prestación de los servicios, mediante la mejora continua de los procesos y el cumplimiento de estándares que garanticen una atención segura y efectiva.",
  },
  {
    title: "Trabajo en equipo",
    description:
      "Fomentamos la colaboración y la comunicación entre los diferentes profesionales de la salud, con el fin de ofrecer una atención integral y oportuna a los usuarios.",
  },
];

export const IPS_SERVICES: ServiceItem[] = [
  {
    title: "Consulta externa",
    description:
      "Atención médica general y con algunos especialistas, donde se evalúa, diagnostica y trata a los pacientes sin necesidad de hospitalización.",
    imageSrc: "/services/consulta-externa.png",
    imageAlt: "Consulta externa en IPS",
  },
  {
    title: "Promoción y prevención (PyP)",
    description:
      "Actividades para cuidar la salud y evitar enfermedades, como vacunación, controles médicos y educación sobre hábitos saludables.",
    imageSrc: "/services/promocion-prevencion.png",
    imageAlt: "Jornada de promoción y prevención en salud",
  },
  {
    title: "Enfermería",
    description:
      "Servicios básicos de apoyo como aplicación de inyecciones, curaciones, toma de signos vitales y seguimiento de pacientes.",
    imageSrc: "/services/atencion-domiciliaria.jpg",
    imageAlt: "Atención de enfermería a paciente",
  },
  {
    title: "Laboratorio clínico",
    description:
      "Realización de exámenes como sangre, orina y otros análisis que ayudan al médico a diagnosticar enfermedades.",
    imageSrc: "/services/laboratorio-clinico.jpg",
    imageAlt: "Muestras y análisis de laboratorio clínico",
  },
  {
    title: "Imágenes diagnósticas",
    description:
      "Servicios como rayos X y ecografías que permiten observar el interior del cuerpo para detectar problemas de salud.",
    imageSrc: "/services/imagenes-diagnosticas.jpg",
    imageAlt: "Equipo de imágenes diagnósticas en IPS",
  },
  {
    title: "Odontología",
    description:
      "Atención en salud oral, incluyendo limpieza, prevención y tratamientos básicos para el cuidado de los dientes.",
    imageSrc: "/services/odontologia.png",
    imageAlt: "Consulta de odontología en IPS",
  },
  {
    title: "Rehabilitación",
    description:
      "Terapias como fisioterapia o terapia respiratoria para ayudar a los pacientes a recuperarse de lesiones o enfermedades.",
    imageSrc: "/services/rehabilitacion.png",
    imageAlt: "Sesión de rehabilitación terapéutica",
  },
  {
    title: "Atención domiciliaria",
    description:
      "Servicios de salud brindados en la casa del paciente, especialmente para personas con dificultad para desplazarse.",
    imageSrc: "/services/enfermeria.jpg",
    imageAlt: "Atención domiciliaria con personal de salud",
  },
  {
    title: "Telemedicina",
    description:
      "Consultas médicas a distancia mediante llamadas o videollamadas, facilitando el acceso a la atención.",
    imageSrc: "/services/telemedicina.jpg",
    imageAlt: "Consulta médica por telemedicina",
  },
  {
    title: "Urgencias básicas",
    description:
      "Atención inmediata a pacientes con problemas de salud que requieren intervención rápida, pero que no son de alta complejidad.",
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
