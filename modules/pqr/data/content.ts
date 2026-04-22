import type {
  PQRCanal,
  PQRDefinicion,
  PQRNorma,
  PQRPasoProceso,
  PQRTiempoRespuesta,
} from "../types/content";

export const PQR_DEFINICIONES: PQRDefinicion[] = [
  {
    key: "peticion",
    titulo: "Petición",
    descripcion:
      "Requerimiento para solicitar información, documentos, copias o la prestación de un servicio, con el fin de obtener una respuesta clara, oportuna y de fondo.",
  },
  {
    key: "queja",
    titulo: "Queja",
    descripcion:
      "Manifestación de inconformidad o descontento frente a la atención recibida o el comportamiento del personal de la institución.",
  },
  {
    key: "reclamo",
    titulo: "Reclamo",
    descripcion:
      "Exigencia que realiza el usuario cuando considera que hubo una falla, incumplimiento o deficiencia en la prestación del servicio.",
  },
  {
    key: "sugerencia",
    titulo: "Sugerencia",
    descripcion:
      "Propuesta que realiza el usuario con el fin de mejorar los servicios, procesos o la atención brindada.",
  },
  {
    key: "felicitacion",
    titulo: "Felicitación",
    descripcion:
      "Manifestación positiva o de agradecimiento hacia la institución o su personal por la calidad del servicio recibido.",
  },
  {
    key: "tutela",
    titulo: "Acción de Tutela",
    descripcion:
      "Mecanismo legal que permite a cualquier persona acudir ante un juez para solicitar la protección inmediata de sus derechos fundamentales cuando han sido vulnerados.",
  },
];

export const PQR_CANALES: PQRCanal[] = [
  {
    tipo: "presencial",
    titulo: "Canal Presencial",
    items: [
      {
        label: "Sede principal",
        valor: "Diríjase directamente a las instalaciones de VitaNova IPS para radicar su solicitud.",
      },
    ],
  },
  {
    tipo: "virtual",
    titulo: "Canal Virtual",
    items: [
      {
        label: "Página web",
        valor: "ips-vitanova.vercel.app",
        href: "https://ips-vitanova.vercel.app/",
      },
      {
        label: "Correo electrónico",
        valor: "vitanovasalud@gmail.com",
        href: "mailto:vitanovasalud@gmail.com",
      },
    ],
  },
  {
    tipo: "telefonico",
    titulo: "Canal Telefónico",
    items: [
      {
        label: "Teléfono",
        valor: "+57 604 540 6115",
        href: "tel:+576045406115",
      },
      {
        label: "WhatsApp",
        valor: "+57 323 650 5745",
        href: "https://wa.me/573236505745",
      },
    ],
  },
];

export const PQR_HORARIOS = {
  semana: "Lunes a viernes: 7:00 a.m. – 8:00 p.m.",
  finesSemana: "Sábados, domingos y festivos: 7:00 a.m. – 2:00 p.m.",
};

export const PQR_PROCESO: PQRPasoProceso[] = [
  {
    numero: 1,
    titulo: "Recepción de la solicitud",
    descripcion: "El usuario presenta la PQRF por cualquiera de los canales de atención disponibles.",
  },
  {
    numero: 2,
    titulo: "Registro de la PQRF",
    descripcion: "El área de Atención al Usuario registra y clasifica la solicitud según su tipo.",
  },
  {
    numero: 3,
    titulo: "Análisis del caso",
    descripcion: "Se estudia la situación planteada y se identifican los responsables de dar respuesta.",
  },
  {
    numero: 4,
    titulo: "Gestión de la solución",
    descripcion: "Las áreas implicadas trabajan en la solución o respuesta adecuada al caso.",
  },
  {
    numero: 5,
    titulo: "Respuesta al usuario",
    descripcion: "Se notifica al usuario el resultado de la gestión dentro de los tiempos establecidos.",
  },
  {
    numero: 6,
    titulo: "Seguimiento y cierre",
    descripcion: "Se verifica la satisfacción del usuario y se cierra formalmente la solicitud.",
  },
];

export const PQR_TIEMPOS: PQRTiempoRespuesta[] = [
  { tipo: "Peticiones", plazo: "Hasta 15 días hábiles" },
  { tipo: "Quejas y reclamos", plazo: "Hasta 15 días hábiles" },
  { tipo: "Consultas", plazo: "Hasta 30 días hábiles" },
];

export const PQR_NORMAS: PQRNorma[] = [
  {
    nombre: "Constitución Política de Colombia – Art. 23",
    descripcion: "Garantiza el derecho de petición ante entidades públicas y privadas.",
  },
  {
    nombre: "Ley 1755 de 2015",
    descripcion: "Regula el derecho fundamental de petición y sus modalidades de respuesta.",
  },
  {
    nombre: "Ley 1437 de 2011",
    descripcion: "Establece el Código de Procedimiento Administrativo y de lo Contencioso Administrativo.",
  },
  {
    nombre: "Ley 1474 de 2011",
    descripcion: "Dicta normas orientadas a fortalecer los mecanismos de prevención, investigación y sanción de actos de corrupción.",
  },
  {
    nombre: "Decreto 2106 de 2019",
    descripcion: "Adopta medidas para la simplificación de trámites y procedimientos administrativos.",
  },
];

export const PQR_IMPORTANCIA =
  "El sistema PQRF permite mejorar continuamente la calidad del servicio, garantizar los derechos de los usuarios y fortalecer la confianza en la institución, promoviendo una atención segura, oportuna y humanizada.";

export const PQR_RESPONSABLE =
  "El área de Atención al Usuario de VitaNova IPS es la encargada de recibir, gestionar, dar respuesta y realizar el seguimiento a todas las PQRF presentadas por los usuarios.";
