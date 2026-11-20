/**
 * ====================================================================
 * APLICACIÓN PRINCIPAL AUTOCONTENIDA - CAPILLA SAN FRANCISCO DE ASÍS
 * Parroquia La Santa Cruz - Diócesis de Chosica, Lima, Perú
 * ====================================================================
 * Versión de producción optimizada y resiliente:
 * - Compatible con Vercel, GitHub Pages, Netlify y ejecución local (file://).
 * - Cero fallos por CORS o desincronización de DOMContentLoaded.
 * - Inicialización defensiva de módulos con tolerancia a errores.
 * - Control de bienvenida e intro con fail-safe inmediato.
 */

// ====================================================================
// 1. CONFIGURACIÓN CENTRALIZADA
// ====================================================================
const CAPILLA_CONFIG = {
  nombre: "Capilla San Francisco de Asís",
  parroquia: "Parroquia La Santa Cruz",
  diocesis: "Diócesis de Chosica",
  lema: "Paz y Bien · Un espacio de encuentro, oración y esperanza",
  pais: "Perú",
  ciudad: "Chosica, Lima",

  contacto: {
    direccion: "Jr. Los Franciscanos s/n (Ref. Altura Paradero La Santa Cruz), Chosica, Lima, Perú",
    telefonoFijo: "+51 (01) 360-0000",
    telefonoMovil: "+51 987 654 321",
    email: "secretaria.sanfrancisco@diocesisdechosica.org",
    emailIntenciones: "intenciones.capilla@diocesisdechosica.org",
    atencionDespacho: "Martes a Sábado: 9:00 a.m. - 1:00 p.m. y 4:00 p.m. - 7:30 p.m.",
  },

  whatsapp: {
    numero: "51987654321",
    numeroFormateado: "+51 987 654 321",
    mensajePredeterminado: "¡Paz y Bien! Me comunico desde el sitio web de la Capilla San Francisco de Asís. Deseo consultar información sobre: ",
    mensajeIntencion: "¡Paz y Bien! Deseo registrar una intención para la próxima Santa Misa.",
    mensajeBautizo: "¡Paz y Bien! Quisiera solicitar requisitos y fechas para el sacramento del Bautismo.",
    mensajeMatrimonio: "¡Paz y Bien! Deseo consultar acerca de la apertura de expediente matrimonial.",
    horarioAtencion: "Atención virtual: Mar a Sáb 9:00 - 19:00 hrs",
  },

  redesSociales: {
    facebook: "https://facebook.com/capillasanfranciscochosica",
    youtube: "https://youtube.com/@capillasanfranciscochosica",
    instagram: "https://instagram.com/capillasanfranciscochosica",
    whatsappCanal: "https://whatsapp.com/channel/capillasanfrancisco",
  },

  horariosMisas: {
    dominicales: [
      { hora: "08:00 a.m.", descripcion: "Misa Comunitaria y de Familias" },
      { hora: "11:00 a.m.", descripcion: "Misa Solemne Parroquial (Transmitida en vivo)" },
      { hora: "07:00 p.m.", descripcion: "Misa Vespertina de Jóvenes y Acción de Gracias" }
    ],
    semanales: [
      { dias: "Martes a Viernes", hora: "07:00 p.m.", descripcion: "Santa Misa y rezo del Santo Rosario (6:30 p.m.)" },
      { dias: "Sábados", hora: "07:00 p.m.", descripcion: "Misa de Vigilia Dominical y Peticiones por los Fieles Difuntos" }
    ],
    confesiones: "Jueves Eucarísticos y Sábados de 5:30 p.m. a 6:45 p.m. (y 30 min antes de cada Misa dominical)",
    adoracionEucaristica: "Primeros viernes de mes: Hora Santa de 6:00 p.m. a 7:00 p.m."
  },

  privacidad: {
    versionCookies: "1.0.0",
    diasCaducidadConsentimiento: 180,
    nombreCookieStorage: "capilla_sanfrancisco_cookies_consent",
  }
};

// ====================================================================
// 2. SERVICIOS Y SACRAMENTOS (9 TARJETAS REQUERIDAS)
// ====================================================================
const SERVICIOS_DATA = [
  {
    id: "misas",
    categoria: "liturgia",
    categoriaLabel: "Liturgia y Culto",
    titulo: "Horarios de Santa Misa",
    subtitulo: "Encuentro sacramental con Cristo en la Eucaristía",
    icono: "church",
    badge: "Eucaristía",
    descripcionCorta: "Misas dominicales de precepto y misas diarias con rezo previo del Santo Rosario e intenciones comunitarias.",
    esDatoEjemplo: true,
    horarios: [
      { titulo: "Misas Dominicales", detalle: "Domingos: 08:00 a.m. | 11:00 a.m. (Solemne) | 07:00 p.m." },
      { titulo: "Misas Semanales", detalle: "Martes a Sábado: 07:00 p.m. (Rosario 06:30 p.m.)" },
      { titulo: "Misa de Vigilia", detalle: "Sábados: 07:00 p.m. (Válida para el precepto dominical)" }
    ],
    requisitos: [
      "Llegar 10 a 15 minutos antes con recogimiento y respeto.",
      "Las intenciones de misa se anotan en el despacho o vía WhatsApp hasta 30 minutos antes de la celebración.",
      "Para recibir la Sagrada Comunión, estar en estado de gracia y haber observado el ayuno eucarístico de una hora."
    ],
    botonAccion: "Anotar Intención de Misa",
    accionTipo: "intencion"
  },
  {
    id: "confesiones",
    categoria: "sacramentos",
    categoriaLabel: "Sacramentos",
    titulo: "Confesiones y Reconciliación",
    subtitulo: "El abrazo misericordioso del perdón de Dios",
    icono: "heart-handshake",
    badge: "Misericordia",
    descripcionCorta: "Atención sacerdotal para el Sacramento de la Penitencia y acompañamiento espiritual individual.",
    esDatoEjemplo: true,
    horarios: [
      { titulo: "Días Fijos", detalle: "Jueves Eucarísticos y Sábados: 05:30 p.m. a 06:45 p.m." },
      { titulo: "Antes de Misa", detalle: "Domingos: 30 minutos antes del inicio de cada celebración" },
      { titulo: "Cita Particular", detalle: "Coordinación previa en el despacho parroquial para dirección espiritual profunda" }
    ],
    requisitos: [
      "Examen de conciencia previo y sincero dolor de los pecados.",
      "Propósito de enmienda y confesión clara de las faltas ante el sacerdote.",
      "Cumplimiento devoto de la penitencia asignada."
    ],
    botonAccion: "Consultar Horarios Especiales",
    accionTipo: "whatsapp-confesion"
  },
  {
    id: "bautizos",
    categoria: "sacramentos",
    categoriaLabel: "Sacramentos",
    titulo: "Sacramento del Bautismo",
    subtitulo: "Nacimiento a la vida de la gracia y bienvenida a la Iglesia",
    icono: "droplets",
    badge: "Iniciación",
    descripcionCorta: "Celebración del bautismo para recién nacidos, niños pequeños y catecúmenos en preparación.",
    esDatoEjemplo: true,
    horarios: [
      { titulo: "Celebraciones Comunitarias", detalle: "Segundo y cuarto sábado de cada mes a las 10:00 a.m." },
      { titulo: "Charlas Prebautismales", detalle: "Miércoles previos a la fecha elegida a las 07:30 p.m. (Modalidad presencial)" }
    ],
    requisitos: [
      "Copia de la partida de nacimiento del niño(a) emitida por RENIEC.",
      "Copia de DNI de los padres y padrinos.",
      "Constancia de haber recibido la charla prebautismal (padres y padrinos).",
      "Padrinos: Deben ser mayores de 16 años, católicos y haber recibido el Bautismo, Comunión y Confirmación."
    ],
    botonAccion: "Descargar Guía de Bautizo",
    accionTipo: "info-bautizo"
  },
  {
    id: "matrimonios",
    categoria: "sacramentos",
    categoriaLabel: "Sacramentos",
    titulo: "Matrimonios y Familia",
    subtitulo: "Alianza bendecida por Cristo para toda la vida",
    icono: "ring",
    badge: "Alianza",
    descripcionCorta: "Apertura de expedientes matrimoniales, charlas prematrimoniales y coordinación de la ceremonia nupcial.",
    esDatoEjemplo: true,
    horarios: [
      { titulo: "Apertura de Expedientes", detalle: "Con un mínimo de 3 a 6 meses de anticipación a la fecha deseada" },
      { titulo: "Jornadas Prematrimoniales", detalle: "Un fin de semana intensivo programado mensualmente" }
    ],
    requisitos: [
      "Partida de Bautismo actualizada de ambos contrayentes (expedida para matrimonio, no mayor a 6 meses).",
      "Constancia de Confirmación y DNI de ambos novios.",
      "Certificado del curso prematrimonial arquidiocesano / diocesano.",
      "Entrevista personal de los novios y de los testigos con el sacerdote."
    ],
    botonAccion: "Solicitar Requisitos Completos",
    accionTipo: "whatsapp-matrimonio"
  },
  {
    id: "catequesis",
    categoria: "formacion",
    categoriaLabel: "Formación de Fe",
    titulo: "Catequesis de Primera Comunión y Confirmación",
    subtitulo: "Maduración en el conocimiento y amor de Jesús",
    icono: "book-open",
    badge: "Formación",
    descripcionCorta: "Grupos de catequesis familiar para niños y jóvenes en proceso de confirmación de su compromiso bautismal.",
    esDatoEjemplo: true,
    horarios: [
      { titulo: "Primera Comunión", detalle: "Sábados de 09:30 a.m. a 11:30 a.m. (Duración: 2 años de formación)" },
      { titulo: "Confirmación de Jóvenes", detalle: "Sábados de 03:30 p.m. a 05:30 p.m. (Edades: 14 a 17 años)" },
      { titulo: "Confirmación Adultos", detalle: "Domingos de 09:30 a.m. a 11:00 a.m. (Duración intensiva: 6 meses)" }
    ],
    requisitos: [
      "Partida de Bautismo del postulante.",
      "Fotocopia del DNI del alumno y del padre/madre/apoderado.",
      "Compromiso activo de asistencia de los padres a los talleres mensuales de catequesis familiar."
    ],
    botonAccion: "Inscripciones Catequesis",
    accionTipo: "info-catequesis"
  },
  {
    id: "celebraciones",
    categoria: "liturgia",
    categoriaLabel: "Liturgia y Culto",
    titulo: "Celebraciones Religiosas y Fiestas",
    subtitulo: "Vivir el año litúrgico al estilo franciscano",
    icono: "sparkles",
    badge: "Calendario Sacro",
    descripcionCorta: "Fiesta Patronal de San Francisco de Asís (4 de Octubre), Triduo Sacro de Semana Santa, Corpus Christi y Navidad.",
    esDatoEjemplo: true,
    horarios: [
      { titulo: "Fiesta de San Francisco de Asís", detalle: "4 de Octubre (Novena previa del 25 de septiembre al 3 de octubre)" },
      { titulo: "Bendición de Mascotas", detalle: "Primer domingo de octubre (en memoria del amor de San Francisco a la Creación)" },
      { titulo: "Fiesta de la Santa Cruz", detalle: "3 de Mayo (Celebración en unión con la Parroquia Matriz)" }
    ],
    requisitos: [
      "Actividades abiertas a toda la comunidad barrial y diocesana.",
      "Participación en coros, andas procesionales y comisiones de caridad."
    ],
    botonAccion: "Ver Calendario Litúrgico",
    accionTipo: "calendario"
  },
  {
    id: "actividades",
    categoria: "pastoral",
    categoriaLabel: "Pastoral y Comunidad",
    titulo: "Actividades Comunitarias y Pastoral Social",
    subtitulo: "Fe encarnada en el servicio al prójimo más necesitado",
    icono: "users",
    badge: "Caritas y Servicio",
    descripcionCorta: "Pastoral de salud (comunión a enfermos), Cáritas franciscana, comedor de caridad y grupos juveniles.",
    esDatoEjemplo: true,
    horarios: [
      { titulo: "Comunión a los Enfermos", detalle: "Primeros viernes y domingos por la mañana (con ministros extraordinarios)" },
      { titulo: "Cáritas y Ayuda Fraterna", detalle: "Recepción de alimentos no perecibles todos los domingos en secretaría" },
      { titulo: "Juventud Franciscana (JUFRA)", detalle: "Reuniones formativas y lúdicas los sábados a las 05:00 p.m." }
    ],
    requisitos: [
      "Voluntariado abierto a personas de buena voluntad dispuestas a servir con humildad y alegría.",
      "Inscripción en la coordinación pastoral."
    ],
    botonAccion: "Unirse al Voluntariado",
    accionTipo: "whatsapp-voluntariado"
  },
  {
    id: "informacion-parroquial",
    categoria: "institucional",
    categoriaLabel: "Despacho y Gestión",
    titulo: "Información Parroquial y Certificados",
    subtitulo: "Trámites administrativos eclesiales y atención al feligrés",
    icono: "file-text",
    badge: "Secretaría",
    descripcionCorta: "Emisión de constancias de sacramentos, partidas de bautismo y confirmación, y orientación general.",
    esDatoEjemplo: true,
    horarios: [
      { titulo: "Atención Presencial", detalle: "Martes a Sábado: 09:00 a.m. - 01:00 p.m. y 04:00 p.m. - 07:30 p.m." },
      { titulo: "Atención Virtual (WhatsApp)", detalle: "Lunes a Viernes de 09:00 a.m. a 05:00 p.m." },
      { titulo: "Domingos", detalle: "Atención exclusiva para misas e inscripciones directas tras la misa matutina" }
    ],
    requisitos: [
      "Para solicitar partidas: Presentar nombres completos, fecha aproximada del sacramento y copia de DNI.",
      "Plazo de entrega de constancias: 3 a 5 días hábiles."
    ],
    botonAccion: "Consultar Trámite",
    accionTipo: "tramite"
  },
  {
    id: "ubicacion",
    categoria: "institucional",
    categoriaLabel: "Ubicación",
    titulo: "Ubicación y Cómo Llegar",
    subtitulo: "Tu casa de oración en el corazón de Chosica",
    icono: "map-pin",
    badge: "Acceso",
    descripcionCorta: "Ubicación en Chosica, referencias para transporte público, estacionamiento y accesibilidad.",
    esDatoEjemplo: true,
    horarios: [
      { titulo: "Puertas Abiertas del Templo", detalle: "Todos los días de 07:30 a.m. a 08:30 p.m. para oración personal" },
      { titulo: "Transporte Público", detalle: "Rutas Chosicano / Líneas que van por la Carretera Central hasta el paradero La Santa Cruz" }
    ],
    requisitos: [
      "Espacio accesible para personas con movilidad reducida y rampas de ingreso.",
      "Respetar el silencio sagrado en el interior de la capilla."
    ],
    botonAccion: "Ver en Google Maps",
    accionTipo: "mapa"
  }
];

// ====================================================================
// 3. INFORMES, AVISOS Y COMUNICADOS
// ====================================================================
const INFORMES_DATA = [
  {
    id: "aviso-patronal-2026",
    categoria: "eventos",
    categoriaLabel: "Fiesta Patronal",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    titulo: "Gran Fiesta Patronal de San Francisco de Asís y Bendición de la Creación",
    fecha: "2026-10-04",
    fechaFormateada: "4 de Octubre de 2026",
    esUrgente: true,
    resumen: "Invitamos a toda la comunidad a participar en la Misa Solemne de Fiesta, el tradicional compartir fraterno franciscano y la bendición de animalitos en el atrio.",
    contenidoCompleto: `
      <p class="mb-4">Con inmensa alegría y devoción franciscana, los invitamos a conmemorar la solemnidad de nuestro santo patrono, <strong>San Francisco de Asís</strong>. Este año renovamos nuestro compromiso fraterno bajo el lema del Santo Padre sobre el cuidado de la Casa Común (<em>Laudato Si'</em>).</p>
      <h4 class="font-serif font-bold text-lg text-amber-950 mt-4 mb-2">Programa General de Fiesta:</h4>
      <ul class="list-disc list-inside space-y-2 mb-4 text-stone-700">
        <li><strong>Del 25 de Septiembre al 3 de Octubre:</strong> Santa Misa y rezo de la Novena a las 07:00 p.m. cada noche.</li>
        <li><strong>Viernes 3 de Octubre:</strong> Conmemoración del Tránsito de San Francisco a las 08:00 p.m., seguida de Vigilia de Oración juvenil.</li>
        <li><strong>Sábado 4 de Octubre (Día Central):</strong>
          <ul class="ml-6 mt-1 space-y-1 list-circle">
            <li>08:00 a.m. Salva de campanas y rezo de Laudes solemnes.</li>
            <li>11:00 a.m. <strong>Solemne Eucaristía de Fiesta</strong> presidida por los sacerdotes de la Diócesis de Chosica.</li>
            <li>01:00 p.m. Compartir comunitario y kermesse franciscana en el atrio.</li>
            <li>03:30 p.m. Tradicional bendición de mascotas y plantitas en el atrio.</li>
            <li>06:00 p.m. Recorrido procesional de la venerada imagen por las calles aledañas a la capilla.</li>
          </ul>
        </li>
      </ul>
      <p class="italic text-stone-600 bg-stone-100 p-3 rounded-lg border-l-4 border-amber-700">"Comienza haciendo lo que es necesario, después lo que es posible y de repente estarás haciendo lo imposible." — San Francisco de Asís</p>
    `,
    imagen: "https://images.unsplash.com/photo-1548625361-195fe868018e?auto=format&fit=crop&w=1200&q=80",
    pieImagen: "Celebración eucarística comunitaria",
    autor: "Comité de Fiesta Patronal",
    enlaceDescarga: "#",
    esDatoEjemplo: true
  },
  {
    id: "comunicado-catequesis-inscripciones",
    categoria: "comunicados",
    categoriaLabel: "Comunicado Oficial",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    titulo: "Apertura del Proceso de Matrícula para la Catequesis Parroquial de Niños y Jóvenes",
    fecha: "2026-11-15",
    fechaFormateada: "15 de Noviembre de 2026",
    esUrgente: false,
    resumen: "Se comunica a los padres de familia que se encuentran abiertas las inscripciones para los grupos de Primera Comunión y Sacramento de la Confirmación.",
    contenidoCompleto: `
      <p class="mb-4">La Comisión de Pastoral Familiar y Catequesis de la Capilla San Francisco de Asís comunica a todos los padres de familia y apoderados de nuestra comunidad el cronograma oficial de inscripción para el nuevo ciclo catequético:</p>
      <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
        <h5 class="font-bold text-amber-900 mb-1">Requisitos de Inscripción:</h5>
        <ol class="list-decimal list-inside space-y-1 text-stone-700 text-sm">
          <li>Ficha de inscripción debidamente llenada en secretaría.</li>
          <li>Partida de Bautismo original o constancia parroquial.</li>
          <li>Copia simple de DNI del niño(a) o joven y del padre o tutor.</li>
          <li>Aporte voluntario de colaboración de material formativo.</li>
        </ol>
      </div>
      <p class="text-stone-700 mb-3">Las clases se impartirán en las aulas parroquiales en turnos de mañana y tarde los días sábados. Recordamos que la catequesis no es una mera clase escolar, sino un camino vivo de fe compartida en el seno de la familia.</p>
    `,
    imagen: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    pieImagen: "Formación de fe en comunidad",
    autor: "Coordinación de Catequesis",
    enlaceDescarga: "#",
    esDatoEjemplo: true
  },
  {
    id: "campana-caritas-navidad",
    categoria: "pastoral",
    categoriaLabel: "Pastoral Social",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    titulo: "Campaña Fraterna 'Pan de San Antonio': Recolección de Alimentos Navideños",
    fecha: "2026-11-10",
    fechaFormateada: "10 de Noviembre de 2026",
    esUrgente: false,
    resumen: "Nuestra Pastoral de Caritas inicia la recolección de víveres no perecibles y chocolatada para las familias de las zonas altas de nuestra zona pastoral.",
    contenidoCompleto: `
      <p class="mb-4">Fieles al carisma de San Francisco de Asís, quien vio en los pobres el rostro vivo de Cristo, invitamos a todos los fieles a sumar su generoso grano de arena en nuestra tradicional campaña navideña de solidaridad.</p>
      <p class="mb-3"><strong>¿Qué donaciones podemos recibir en el atrio y secretaría?</strong></p>
      <ul class="list-disc list-inside space-y-1 text-stone-700 mb-4">
        <li>Arroz, azúcar, avena, menestras y fideos.</li>
        <li>Leche evaporada, conservas y aceite vegetal.</li>
        <li>Panetones y tabletas de chocolate para la chocolatada comunitaria de los niños.</li>
      </ul>
      <p class="text-stone-700">Las canastas serán armadas por los jóvenes voluntarios de la capilla y distribuidas en la jornada misionera del 20 de diciembre. ¡Dios bendiga al dador alegre!</p>
    `,
    imagen: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
    pieImagen: "Voluntariado y servicio fraterno",
    autor: "Pastoral Social y Cáritas",
    enlaceDescarga: "#",
    esDatoEjemplo: true
  },
  {
    id: "aviso-mantenimiento-vitrales",
    categoria: "comunicados",
    categoriaLabel: "Infraestructura",
    badgeColor: "bg-stone-100 text-stone-900 border-stone-300",
    titulo: "Informe de Mejoras en la Iluminación y Mantenimiento de la Techumbre de la Capilla",
    fecha: "2026-10-28",
    fechaFormateada: "28 de Octubre de 2026",
    esUrgente: false,
    resumen: "El Consejo Económico Parroquial presenta el balance de las obras de impermeabilización del tejado y la instalación del nuevo sistema de sonido litúrgico.",
    contenidoCompleto: `
      <p class="mb-4">Gracias a la generosa contribución de los feligreses a través de las colectas extraordinarias y actividades parroquiales, se concluyeron exitosamente los siguientes trabajos prioritarios en el templo:</p>
      <ul class="list-disc list-inside space-y-2 text-stone-700 mb-4">
        <li>Impermeabilización total de las cubiertas y canaletas ante la próxima temporada de lluvias en Chosica.</li>
        <li>Instalación de reflectores LED de luz cálida de alta eficiencia energética en el Presbiterio y Altar Mayor.</li>
        <li>Mantenimiento y calibración del sistema de micrófonos y altavoces para una óptima acústica en las lecturas sagradas.</li>
      </ul>
      <p class="text-stone-700">El balance contable y boletas detalladas se encuentran expuestos para pública revisión y transparencia en la vitrina de anuncios de la capilla.</p>
    `,
    imagen: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=1200&q=80",
    pieImagen: "Nave central de la capilla",
    autor: "Consejo Parroquial de Asuntos Económicos",
    enlaceDescarga: "#",
    esDatoEjemplo: true
  },
  {
    id: "aviso-retiro-espiritual-adviento",
    categoria: "liturgia",
    categoriaLabel: "Espiritualidad",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    titulo: "Jornada de Retiro y Preparación Espiritual para el Tiempo de Adviento",
    fecha: "2026-11-01",
    fechaFormateada: "1 de Noviembre de 2026",
    esUrgente: false,
    resumen: "Bajo la guía de la espiritualidad franciscana, dedicaremos un sábado completo a la meditación, adoración eucarística y confesiones para esperar la Natividad del Señor.",
    contenidoCompleto: `
      <p class="mb-4">El Adviento nos invita a velar y disponer el corazón. Como San Francisco en Greccio, quien creó el primer pesebre vivo de la historia para contemplar la humildad del Verbo Encarnado, deseamos que esta Navidad Cristo nazca de verdad en nuestros hogares.</p>
      <p class="mb-2"><strong>Detalles de la Jornada:</strong></p>
      <ul class="list-disc list-inside space-y-1 text-stone-700 mb-4">
        <li><strong>Fecha:</strong> Sábado 28 de Noviembre de 08:30 a.m. a 01:30 p.m.</li>
        <li><strong>Lugar:</strong> Salón San Damián de la capilla.</li>
        <li><strong>Predicador invitado:</strong> Sacerdote franciscano de la provincia misionera.</li>
        <li><strong>Incluye:</strong> Refrigerio fraterno, adoración al Santísimo y confesiones individuales.</li>
      </ul>
      <p class="text-stone-700">Inscripción libre y gratuita. Se sugiere llevar libreta de apuntes y la Sagrada Biblia.</p>
    `,
    imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    pieImagen: "Retiro y oración comunitaria",
    autor: "Equipo de Liturgia y Espiritualidad",
    enlaceDescarga: "#",
    esDatoEjemplo: true
  }
];

// Función utilitaria anti-XSS
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ====================================================================
// 4. CONTROLADOR DE LA ANIMACIÓN DE BIENVENIDA (LOGO INTRO)
// ====================================================================
class LogoIntroController {
  constructor(options = {}) {
    this.overlay = document.getElementById("intro-screen");
    this.skipBtn = document.getElementById("intro-skip-btn");
    this.replayBtns = document.querySelectorAll(".replay-intro-btn");
    this.hasSeenKey = "capilla_sanfrancisco_intro_seen_v1";
    this.onComplete = options.onComplete || (() => {});
    this.isReducedMotion = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

    this.init();
  }

  init() {
    if (!this.overlay) return;

    // Escuchar botón de omitir
    if (this.skipBtn) {
      this.skipBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.dismiss(true);
      });
    }

    // Tecla ESC para omitir
    window.addEventListener("keydown", (e) => {
      if ((e.key === "Escape" || e.key === "Esc") && !this.overlay.classList.contains("hidden")) {
        this.dismiss(true);
      }
    });

    // Botones para revivir la animación desde cualquier enlace del sitio
    this.replayBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.replay();
      });
    });

    // Comprobar si ya se vio en esta sesión o si el usuario prefiere movimiento reducido
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(this.hasSeenKey) === "true";
    } catch (e) {}

    if (alreadySeen || this.isReducedMotion) {
      this.dismiss(true);
    } else {
      this.startIntroAnimation();
    }
  }

  startIntroAnimation() {
    this.overlay.style.display = "flex";
    this.overlay.classList.remove("hidden", "opacity-0");
    this.overlay.classList.add("opacity-100");
    document.body.classList.add("overflow-hidden");

    // Iniciar trazo SVG
    const svgPaths = this.overlay.querySelectorAll(".draw-stroke");
    const logoFills = this.overlay.querySelectorAll(".reveal-fill");
    const textElements = this.overlay.querySelectorAll(".reveal-text");

    svgPaths.forEach((path) => {
      path.classList.remove("animating-stroke");
      void path.offsetWidth;
      path.classList.add("animating-stroke");
    });

    setTimeout(() => {
      logoFills.forEach((el) => el.classList.add("filled-visible"));
    }, 2200);

    setTimeout(() => {
      textElements.forEach((el) => el.classList.add("text-visible"));
    }, 2800);

    // Salida suave automática tras 5.2s
    this.autoDismissTimer = setTimeout(() => {
      this.dismiss(false);
    }, 5200);
  }

  dismiss(immediate = false) {
    if (this.autoDismissTimer) {
      clearTimeout(this.autoDismissTimer);
      this.autoDismissTimer = null;
    }

    try {
      sessionStorage.setItem(this.hasSeenKey, "true");
    } catch (e) {}

    document.body.classList.remove("overflow-hidden");

    if (immediate || this.isReducedMotion) {
      if (this.overlay) {
        this.overlay.style.display = "none";
        this.overlay.classList.add("hidden");
      }
      this.onComplete();
      window.dispatchEvent(new CustomEvent("capilla:introFinished"));
    } else {
      if (this.overlay) {
        this.overlay.classList.add("fade-out-intro");
        setTimeout(() => {
          this.overlay.style.display = "none";
          this.overlay.classList.add("hidden");
          this.overlay.classList.remove("fade-out-intro");
          this.onComplete();
          window.dispatchEvent(new CustomEvent("capilla:introFinished"));
        }, 600);
      }
    }
  }

  replay() {
    try {
      sessionStorage.removeItem(this.hasSeenKey);
    } catch (e) {}

    const styleEl = document.getElementById("capilla-hide-intro-style");
    if (styleEl) styleEl.remove();

    const logoFills = this.overlay ? this.overlay.querySelectorAll(".reveal-fill") : [];
    const textElements = this.overlay ? this.overlay.querySelectorAll(".reveal-text") : [];
    logoFills.forEach((el) => el.classList.remove("filled-visible"));
    textElements.forEach((el) => el.classList.remove("text-visible"));

    window.scrollTo({ top: 0, behavior: "smooth" });
    this.startIntroAnimation();
  }
}

// ====================================================================
// 5. CONTROLADOR DE CONSENTIMIENTO DE COOKIES
// ====================================================================
class CookieConsentManager {
  constructor() {
    this.storageKey = CAPILLA_CONFIG.privacidad.nombreCookieStorage;
    this.banner = document.getElementById("cookie-banner");
    this.modal = document.getElementById("cookie-settings-modal");
    this.btnAcceptAll = document.getElementById("cookie-accept-all");
    this.btnRejectOptional = document.getElementById("cookie-reject-optional");
    this.btnOpenSettings = document.getElementById("cookie-open-settings");
    this.btnCloseModal = document.getElementById("cookie-modal-close");
    this.btnSaveSettings = document.getElementById("cookie-save-settings");
    this.footerOpenBtns = document.querySelectorAll(".open-cookie-settings");

    this.cbNecessary = document.getElementById("cookie-necessary");
    this.cbAnalytics = document.getElementById("cookie-analytics");
    this.cbMarketing = document.getElementById("cookie-marketing");

    this.consent = this.loadConsent();
    this.init();
  }

  init() {
    if (this.btnAcceptAll) this.btnAcceptAll.addEventListener("click", () => this.acceptAll());
    if (this.btnRejectOptional) this.btnRejectOptional.addEventListener("click", () => this.rejectOptional());
    if (this.btnOpenSettings) this.btnOpenSettings.addEventListener("click", () => this.openModal());
    if (this.btnCloseModal) this.btnCloseModal.addEventListener("click", () => this.closeModal());
    if (this.btnSaveSettings) this.btnSaveSettings.addEventListener("click", () => this.saveCustomSettings());

    this.footerOpenBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.openModal();
      });
    });

    if (this.modal) {
      this.modal.addEventListener("click", (e) => {
        if (e.target === this.modal) this.closeModal();
      });
    }

    if (!this.consent) {
      this.showBanner();
    } else {
      this.applyConsent(this.consent);
    }
  }

  loadConsent() {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (!data) return null;
      const parsed = JSON.parse(data);
      const now = new Date().getTime();
      const ageDays = (now - parsed.timestamp) / (1000 * 60 * 60 * 24);
      if (ageDays > CAPILLA_CONFIG.privacidad.diasCaducidadConsentimiento) {
        localStorage.removeItem(this.storageKey);
        return null;
      }
      return parsed;
    } catch (e) {
      return null;
    }
  }

  showBanner() {
    if (this.banner) {
      this.banner.classList.remove("hidden");
      setTimeout(() => {
        this.banner.classList.remove("translate-y-full", "opacity-0");
        this.banner.classList.add("translate-y-0", "opacity-100");
      }, 500);
    }
  }

  hideBanner() {
    if (this.banner) {
      this.banner.classList.remove("translate-y-0", "opacity-100");
      this.banner.classList.add("translate-y-full", "opacity-0");
      setTimeout(() => {
        this.banner.classList.add("hidden");
      }, 400);
    }
  }

  openModal() {
    if (this.modal) {
      const current = this.consent || { necessary: true, analytics: false, marketing: false };
      if (this.cbNecessary) this.cbNecessary.checked = true;
      if (this.cbAnalytics) this.cbAnalytics.checked = !!current.analytics;
      if (this.cbMarketing) this.cbMarketing.checked = !!current.marketing;

      this.modal.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    }
  }

  closeModal() {
    if (this.modal) {
      this.modal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }
  }

  acceptAll() {
    this.saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().getTime(),
      version: CAPILLA_CONFIG.privacidad.versionCookies
    });
  }

  rejectOptional() {
    this.saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().getTime(),
      version: CAPILLA_CONFIG.privacidad.versionCookies
    });
  }

  saveCustomSettings() {
    this.saveConsent({
      necessary: true,
      analytics: this.cbAnalytics ? this.cbAnalytics.checked : false,
      marketing: this.cbMarketing ? this.cbMarketing.checked : false,
      timestamp: new Date().getTime(),
      version: CAPILLA_CONFIG.privacidad.versionCookies
    });
    this.closeModal();
  }

  saveConsent(consentObj) {
    this.consent = consentObj;
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(consentObj));
    } catch (e) {}
    this.hideBanner();
    this.applyConsent(consentObj);

    window.dispatchEvent(new CustomEvent("capilla:toast", {
      detail: {
        tipo: "info",
        mensaje: "Tus preferencias de privacidad han sido actualizadas con éxito."
      }
    }));
  }

  applyConsent(consent) {
    window.__CAPILLA_ANALYTICS_ENABLED = !!consent.analytics;
    window.__CAPILLA_MARKETING_ENABLED = !!consent.marketing;
  }
}

// ====================================================================
// 6. CONTROLADOR DE EFECTOS DE CURSOR Y 3D TILT
// ====================================================================
class MouseEffectsController {
  constructor() {
    this.isTouch = window.matchMedia ? window.matchMedia("(hover: none) and (pointer: coarse)").matches : false;
    this.isReducedMotion = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
    this.spotlight = document.getElementById("cursor-spotlight");
    this.tiltCards = document.querySelectorAll("[data-tilt]");

    this.rafId = null;
    this.mouseX = -500;
    this.mouseY = -500;
    this.currentX = -500;
    this.currentY = -500;

    this.init();
  }

  init() {
    if (this.isTouch || this.isReducedMotion) {
      if (this.spotlight) this.spotlight.style.display = "none";
      return;
    }
    this.initSpotlight();
    this.init3DTilt();
  }

  initSpotlight() {
    if (!this.spotlight) return;

    window.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      if (!this.rafId) {
        this.rafId = requestAnimationFrame(() => this.updateSpotlight());
      }
    }, { passive: true });

    document.addEventListener("mouseleave", () => {
      if (this.spotlight) this.spotlight.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
      if (this.spotlight) this.spotlight.style.opacity = "1";
    });
  }

  updateSpotlight() {
    const ease = 0.15;
    this.currentX += (this.mouseX - this.currentX) * ease;
    this.currentY += (this.mouseY - this.currentY) * ease;

    if (this.spotlight) {
      this.spotlight.style.transform = `translate3d(${this.currentX}px, ${this.currentY}px, 0)`;
    }

    if (Math.abs(this.mouseX - this.currentX) > 0.1 || Math.abs(this.mouseY - this.currentY) > 0.1) {
      this.rafId = requestAnimationFrame(() => this.updateSpotlight());
    } else {
      this.rafId = null;
    }
  }

  init3DTilt() {
    const cards = document.querySelectorAll("[data-tilt]");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const cardX = e.clientX - rect.left;
        const cardY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((cardY - centerY) / centerY) * -3.5;
        const rotateY = ((cardX - centerX) / centerX) * 3.5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;

        const glare = card.querySelector(".card-glare");
        if (glare) {
          const percentX = (cardX / rect.width) * 100;
          const percentY = (cardY / rect.height) * 100;
          glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(212, 175, 55, 0.12), transparent 70%)`;
          glare.style.opacity = "1";
        }
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
        const glare = card.querySelector(".card-glare");
        if (glare) glare.style.opacity = "0";
      });
    });
  }
}

// ====================================================================
// 7. DETECTOR DE RED Y VISTA SIN CONEXIÓN
// ====================================================================
class OfflineDetector {
  constructor() {
    this.banner = document.getElementById("offline-banner");
    this.modal = document.getElementById("offline-modal");
    this.retryBtn = document.getElementById("offline-retry-btn");
    this.bannerRetryBtn = document.getElementById("offline-banner-retry");
    this.closeModalBtn = document.getElementById("offline-close-modal");
    this.isSimulatedOffline = false;

    this.init();
  }

  init() {
    window.addEventListener("online", () => this.handleOnline());
    window.addEventListener("offline", () => this.handleOffline());

    if (this.retryBtn) this.retryBtn.addEventListener("click", () => this.checkConnection());
    if (this.bannerRetryBtn) this.bannerRetryBtn.addEventListener("click", () => this.checkConnection());
    if (this.closeModalBtn) this.closeModalBtn.addEventListener("click", () => this.hideModal());

    const simBtns = document.querySelectorAll(".test-offline-btn");
    simBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.simulateOffline();
      });
    });

    if (typeof navigator.onLine !== "undefined" && !navigator.onLine) {
      this.handleOffline();
    }
  }

  handleOffline() {
    if (this.banner) this.banner.classList.remove("hidden");
    if (this.modal) {
      this.modal.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    }
  }

  handleOnline() {
    if (this.banner) this.banner.classList.add("hidden");
    this.hideModal();
    window.dispatchEvent(new CustomEvent("capilla:toast", {
      detail: { tipo: "success", mensaje: "¡Conexión restaurada! Estás nuevamente en línea." }
    }));
  }

  hideModal() {
    if (this.modal) {
      this.modal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }
  }

  async checkConnection() {
    const btn = this.retryBtn;
    if (btn) {
      const orig = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = `⟳ Comprobando...`;

      setTimeout(() => {
        if (this.isSimulatedOffline) {
          this.isSimulatedOffline = false;
          this.handleOnline();
        } else if (navigator.onLine) {
          this.handleOnline();
        } else {
          window.dispatchEvent(new CustomEvent("capilla:toast", {
            detail: { tipo: "warning", mensaje: "Aún no se detecta conexión a internet." }
          }));
        }
        btn.disabled = false;
        btn.innerHTML = orig;
      }, 700);
    }
  }

  simulateOffline() {
    this.isSimulatedOffline = true;
    this.handleOffline();
  }
}

// ====================================================================
// 8. COORDINADOR MAESTRO DE LA APLICACIÓN (CAPILLA APP)
// ====================================================================
class CapillaApp {
  constructor() {
    this.currentHeroIndex = 0;
    this.heroSlides = [];
    this.heroInterval = null;
    this.activeServiceFilter = "todos";
    this.activeReportFilter = "todos";
    this.reportSearchQuery = "";

    this.init();
  }

  init() {
    // 1. Inicializar intro INMEDIATAMENTE para responder al usuario al primer milisegundo
    try {
      this.introController = new LogoIntroController();
    } catch (e) {
      console.warn("LogoIntroController inicializado en modo fallback:", e);
    }

    // 2. Inicializar componentes visuales de la página
    try { this.setupConfigData(); } catch(e) { console.error(e); }
    try { this.setupNavigation(); } catch(e) { console.error(e); }
    try { this.setupHeroCarousel(); } catch(e) { console.error(e); }
    try { this.renderServices(); } catch(e) { console.error(e); }
    try { this.setupServicesFilter(); } catch(e) { console.error(e); }
    try { this.renderReports(); } catch(e) { console.error(e); }
    try { this.setupReportsFilterAndSearch(); } catch(e) { console.error(e); }
    try { this.setupWhatsAppButton(); } catch(e) { console.error(e); }
    try { this.setupIntentionForm(); } catch(e) { console.error(e); }
    try { this.setupFaqAccordion(); } catch(e) { console.error(e); }
    try { this.setupModals(); } catch(e) { console.error(e); }
    try { this.setupToastManager(); } catch(e) { console.error(e); }
    try { this.setupErrorSimulators(); } catch(e) { console.error(e); }

    // 3. Submódulos auxiliares
    try { this.cookieManager = new CookieConsentManager(); } catch(e) { console.error(e); }
    try { this.mouseEffects = new MouseEffectsController(); } catch(e) { console.error(e); }
    try { this.offlineDetector = new OfflineDetector(); } catch(e) { console.error(e); }
  }

  setupConfigData() {
    document.querySelectorAll("[data-config-text]").forEach(el => {
      const key = el.getAttribute("data-config-text");
      const val = key.split('.').reduce((o, i) => (o ? o[i] : null), CAPILLA_CONFIG);
      if (val) el.textContent = val;
    });

    document.querySelectorAll("[data-config-href]").forEach(el => {
      const key = el.getAttribute("data-config-href");
      const val = key.split('.').reduce((o, i) => (o ? o[i] : null), CAPILLA_CONFIG);
      if (val) el.setAttribute("href", val);
    });
  }

  setupNavigation() {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const mobileBackdrop = document.getElementById("mobile-drawer-backdrop");
    const closeDrawerBtn = document.getElementById("close-drawer-btn");
    const navLinks = document.querySelectorAll(".nav-link-item");
    const header = document.getElementById("main-header");

    const openDrawer = () => {
      if (mobileDrawer) mobileDrawer.classList.remove("translate-x-full");
      if (mobileBackdrop) mobileBackdrop.classList.remove("opacity-0", "pointer-events-none");
      document.body.classList.add("overflow-hidden");
    };

    const closeDrawer = () => {
      if (mobileDrawer) mobileDrawer.classList.add("translate-x-full");
      if (mobileBackdrop) mobileBackdrop.classList.add("opacity-0", "pointer-events-none");
      document.body.classList.remove("overflow-hidden");
    };

    if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", openDrawer);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
    if (mobileBackdrop) mobileBackdrop.addEventListener("click", closeDrawer);

    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        closeDrawer();
        const targetId = link.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(targetId);
          if (target) {
            const hHeight = header ? header.offsetHeight : 80;
            const targetPos = target.getBoundingClientRect().top + window.pageYOffset - hHeight;
            window.scrollTo({ top: targetPos, behavior: "smooth" });
          }
        }
      });
    });

    window.addEventListener("scroll", () => {
      if (header) {
        if (window.scrollY > 30) {
          header.classList.add("header-scrolled");
        } else {
          header.classList.remove("header-scrolled");
        }
      }
    }, { passive: true });
  }

  setupHeroCarousel() {
    this.heroSlides = document.querySelectorAll(".hero-slide");
    const prevBtn = document.getElementById("hero-prev-btn");
    const nextBtn = document.getElementById("hero-next-btn");
    const dotsContainer = document.getElementById("hero-dots-container");

    if (!this.heroSlides.length) return;

    if (dotsContainer) {
      dotsContainer.innerHTML = "";
      this.heroSlides.forEach((_, idx) => {
        const dot = document.createElement("button");
        dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${
          idx === 0 ? "bg-amber-400 w-8" : "bg-white/40 hover:bg-white/70"
        }`;
        dot.setAttribute("aria-label", `Ir a imagen sacra ${idx + 1}`);
        dot.addEventListener("click", () => this.goToHeroSlide(idx));
        dotsContainer.appendChild(dot);
      });
    }

    if (prevBtn) prevBtn.addEventListener("click", () => this.prevHeroSlide());
    if (nextBtn) nextBtn.addEventListener("click", () => this.nextHeroSlide());

    this.startHeroAutoplay();

    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.addEventListener("mouseenter", () => this.stopHeroAutoplay());
      heroSection.addEventListener("mouseleave", () => this.startHeroAutoplay());
    }
  }

  startHeroAutoplay() {
    this.stopHeroAutoplay();
    this.heroInterval = setInterval(() => {
      this.nextHeroSlide();
    }, 6500);
  }

  stopHeroAutoplay() {
    if (this.heroInterval) {
      clearInterval(this.heroInterval);
      this.heroInterval = null;
    }
  }

  goToHeroSlide(index) {
    this.heroSlides.forEach((slide, idx) => {
      if (idx === index) {
        slide.classList.remove("opacity-0", "pointer-events-none", "scale-105");
        slide.classList.add("opacity-100", "scale-100");
      } else {
        slide.classList.remove("opacity-100", "scale-100");
        slide.classList.add("opacity-0", "pointer-events-none", "scale-105");
      }
    });

    const dots = document.querySelectorAll("#hero-dots-container button");
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.className = "w-8 h-3 rounded-full bg-amber-400 transition-all duration-300";
      } else {
        dot.className = "w-3 h-3 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300";
      }
    });

    this.currentHeroIndex = index;
  }

  nextHeroSlide() {
    const nextIndex = (this.currentHeroIndex + 1) % this.heroSlides.length;
    this.goToHeroSlide(nextIndex);
  }

  prevHeroSlide() {
    const prevIndex = (this.currentHeroIndex - 1 + this.heroSlides.length) % this.heroSlides.length;
    this.goToHeroSlide(prevIndex);
  }

  renderServices() {
    const grid = document.getElementById("services-grid");
    if (!grid) return;

    const filtered = SERVICIOS_DATA.filter(item => {
      if (this.activeServiceFilter === "todos") return true;
      return item.categoria === this.activeServiceFilter;
    });

    grid.innerHTML = filtered.map(item => `
      <article
        class="service-card group relative bg-stone-50 rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
        data-tilt
        data-id="${item.id}"
      >
        <div class="card-glare absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0"></div>

        <div>
          <div class="flex items-start justify-between mb-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-amber-100/90 text-amber-950 border border-amber-300/50">
              ${escapeHtml(item.badge)}
            </span>
            <div class="w-12 h-12 rounded-xl bg-[#794625]/10 text-[#794625] flex items-center justify-center group-hover:bg-[#794625] group-hover:text-amber-100 transition-colors duration-300">
              ${this.getServiceIconSvg(item.icono)}
            </div>
          </div>

          <h3 class="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-2 group-hover:text-[#794625] transition-colors duration-200">
            ${escapeHtml(item.titulo)}
          </h3>

          <p class="text-xs uppercase tracking-wider text-amber-800 font-semibold mb-3">
            ${escapeHtml(item.subtitulo)}
          </p>

          <p class="text-sm text-stone-600 line-clamp-3 leading-relaxed mb-4">
            ${escapeHtml(item.descripcionCorta)}
          </p>

          <div class="bg-white/90 border border-stone-200/70 rounded-xl p-3.5 space-y-2 mb-4 text-xs text-stone-700">
            ${item.horarios.slice(0, 2).map(h => `
              <div class="flex items-start gap-2">
                <span class="text-amber-700 font-bold mt-0.5">•</span>
                <div>
                  <strong class="text-stone-900">${escapeHtml(h.titulo)}:</strong>
                  <span class="text-stone-600">${escapeHtml(h.detalle)}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <div>
          <div class="text-[11px] text-stone-500 italic mb-3 flex items-center gap-1.5 bg-stone-100/70 px-2.5 py-1.5 rounded-lg border border-stone-200/50">
            <svg class="w-3.5 h-3.5 text-stone-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Ejemplo editable de la capilla</span>
          </div>

          <button
            class="view-service-detail-btn w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-[#794625] text-white text-xs font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
            data-id="${item.id}"
          >
            <span>Ver detalles y requisitos</span>
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </article>
    `).join("");

    grid.querySelectorAll(".view-service-detail-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        this.openServiceModal(id);
      });
    });

    if (this.mouseEffects) {
      this.mouseEffects.init3DTilt();
    }
  }

  setupServicesFilter() {
    const filterBtns = document.querySelectorAll(".service-filter-btn");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => {
          b.classList.remove("active-filter", "bg-[#794625]", "text-white");
          b.classList.add("bg-white", "text-stone-700", "hover:bg-stone-200");
        });

        btn.classList.add("active-filter", "bg-[#794625]", "text-white");
        btn.classList.remove("bg-white", "text-stone-700", "hover:bg-stone-200");

        this.activeServiceFilter = btn.getAttribute("data-category");
        this.renderServices();
      });
    });
  }

  openServiceModal(serviceId) {
    const service = SERVICIOS_DATA.find(s => s.id === serviceId);
    if (!service) return;

    const modal = document.getElementById("service-detail-modal");
    if (!modal) return;

    document.getElementById("modal-service-badge").textContent = service.badge;
    document.getElementById("modal-service-title").textContent = service.titulo;
    document.getElementById("modal-service-subtitle").textContent = service.subtitulo;
    document.getElementById("modal-service-description").textContent = service.descripcionCorta;

    const schedulesList = document.getElementById("modal-service-schedules");
    schedulesList.innerHTML = service.horarios.map(h => `
      <li class="bg-amber-50/60 p-3 rounded-xl border border-amber-200/60 text-sm">
        <strong class="text-amber-950 block mb-0.5">${escapeHtml(h.titulo)}</strong>
        <span class="text-stone-700">${escapeHtml(h.detalle)}</span>
      </li>
    `).join("");

    const reqsList = document.getElementById("modal-service-requirements");
    reqsList.innerHTML = service.requisitos.map(r => `
      <li class="flex items-start gap-2.5 text-sm text-stone-700">
        <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
        <span>${escapeHtml(r)}</span>
      </li>
    `).join("");

    const actionBtn = document.getElementById("modal-service-action-btn");
    actionBtn.textContent = service.botonAccion;
    actionBtn.onclick = () => {
      this.handleServiceAction(service);
    };

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  handleServiceAction(service) {
    const modal = document.getElementById("service-detail-modal");
    if (modal) modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");

    if (service.accionTipo === "intencion") {
      this.openIntentionModal();
    } else if (service.accionTipo.startsWith("whatsapp")) {
      const msg = encodeURIComponent(`¡Paz y Bien! Deseo consultar acerca del servicio: ${service.titulo} en la Capilla San Francisco de Asís.`);
      window.open(`https://wa.me/${CAPILLA_CONFIG.whatsapp.numero}?text=${msg}`, "_blank");
    } else if (service.accionTipo === "mapa") {
      const locationSection = document.getElementById("contacto");
      if (locationSection) locationSection.scrollIntoView({ behavior: "smooth" });
    } else {
      const msg = encodeURIComponent(`¡Paz y Bien! Deseo recibir información detallada sobre: ${service.titulo}`);
      window.open(`https://wa.me/${CAPILLA_CONFIG.whatsapp.numero}?text=${msg}`, "_blank");
    }
  }

  renderReports() {
    const container = document.getElementById("reports-grid");
    if (!container) return;

    let list = INFORMES_DATA;

    if (this.activeReportFilter !== "todos") {
      list = list.filter(r => r.categoria === this.activeReportFilter);
    }

    if (this.reportSearchQuery.trim() !== "") {
      const q = this.reportSearchQuery.toLowerCase();
      list = list.filter(r =>
        r.titulo.toLowerCase().includes(q) ||
        r.resumen.toLowerCase().includes(q) ||
        r.categoriaLabel.toLowerCase().includes(q)
      );
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center text-stone-500 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
          <p class="font-serif text-lg mb-2">No se encontraron avisos o comunicados para esta búsqueda</p>
          <p class="text-sm text-stone-400">Intenta con otro término o limpia los filtros.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(item => `
      <article
        class="report-card group bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
        data-tilt
      >
        <div>
          <div class="relative h-48 sm:h-52 overflow-hidden bg-stone-900">
            <img
              src="${item.imagen}"
              alt="${escapeHtml(item.titulo)}"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>

            <div class="absolute top-3 left-3">
              <span class="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${item.badgeColor}">
                ${escapeHtml(item.categoriaLabel)}
              </span>
            </div>

            <div class="absolute bottom-3 left-3 right-3 text-white/90 text-xs flex items-center justify-between">
              <span class="flex items-center gap-1.5 font-medium">
                <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                ${escapeHtml(item.fechaFormateada)}
              </span>
              <span class="text-[11px] text-stone-300 italic">Demostración editable</span>
            </div>
          </div>

          <div class="p-6">
            <h3 class="font-serif text-lg sm:text-xl font-bold text-stone-900 mb-3 group-hover:text-[#794625] transition-colors leading-snug">
              ${escapeHtml(item.titulo)}
            </h3>

            <p class="text-sm text-stone-600 line-clamp-3 leading-relaxed mb-4">
              ${escapeHtml(item.resumen)}
            </p>
          </div>
        </div>

        <div class="px-6 pb-6 pt-0 border-t border-stone-100 mt-2">
          <div class="flex items-center justify-between pt-4">
            <span class="text-xs text-stone-500 font-medium">${escapeHtml(item.autor)}</span>
            <button
              class="read-report-btn inline-flex items-center gap-1.5 text-xs font-bold text-[#794625] hover:text-amber-800 transition-colors group-hover:underline cursor-pointer"
              data-id="${item.id}"
            >
              <span>Leer comunicado completo</span>
              <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    `).join("");

    container.querySelectorAll(".read-report-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        this.openReportReaderModal(id);
      });
    });
  }

  setupReportsFilterAndSearch() {
    const chips = document.querySelectorAll(".report-filter-chip");
    const searchInput = document.getElementById("reports-search-input");
    const clearSearchBtn = document.getElementById("clear-search-btn");

    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        chips.forEach(c => {
          c.classList.remove("bg-[#794625]", "text-white");
          c.classList.add("bg-stone-100", "text-stone-700", "hover:bg-stone-200");
        });
        chip.classList.add("bg-[#794625]", "text-white");
        chip.classList.remove("bg-stone-100", "text-stone-700", "hover:bg-stone-200");

        this.activeReportFilter = chip.getAttribute("data-category");
        this.renderReports();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.reportSearchQuery = e.target.value;
        if (clearSearchBtn) {
          if (this.reportSearchQuery.length > 0) {
            clearSearchBtn.classList.remove("hidden");
          } else {
            clearSearchBtn.classList.add("hidden");
          }
        }
        this.renderReports();
      });
    }

    if (clearSearchBtn && searchInput) {
      clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        this.reportSearchQuery = "";
        clearSearchBtn.classList.add("hidden");
        this.renderReports();
      });
    }
  }

  openReportReaderModal(reportId) {
    const report = INFORMES_DATA.find(r => r.id === reportId);
    if (!report) return;

    const modal = document.getElementById("report-reader-modal");
    if (!modal) return;

    document.getElementById("modal-report-badge").textContent = report.categoriaLabel;
    document.getElementById("modal-report-date").textContent = report.fechaFormateada;
    document.getElementById("modal-report-author").textContent = `Emitido por: ${report.autor}`;
    document.getElementById("modal-report-title").textContent = report.titulo;
    document.getElementById("modal-report-content").innerHTML = report.contenidoCompleto;

    const imgContainer = document.getElementById("modal-report-image-container");
    const imgEl = document.getElementById("modal-report-image");
    if (report.imagen) {
      imgEl.src = report.imagen;
      imgEl.alt = report.titulo;
      imgContainer.classList.remove("hidden");
    } else {
      imgContainer.classList.add("hidden");
    }

    const shareBtn = document.getElementById("modal-report-share-wa");
    if (shareBtn) {
      shareBtn.onclick = () => {
        const text = encodeURIComponent(`*${report.titulo}*\n${report.resumen}\n\nPublicado por la Capilla San Francisco de Asís (Diócesis de Chosica).`);
        window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
      };
    }

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  setupWhatsAppButton() {
    const btn = document.getElementById("floating-whatsapp-btn");
    const popover = document.getElementById("whatsapp-popover");
    const closePopoverBtn = document.getElementById("close-wa-popover");
    const sendDefaultBtn = document.getElementById("wa-send-default");
    const quickOptions = document.querySelectorAll(".wa-quick-option");

    if (!btn) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (popover) popover.classList.toggle("hidden");
    });

    if (closePopoverBtn) {
      closePopoverBtn.addEventListener("click", () => {
        if (popover) popover.classList.add("hidden");
      });
    }

    document.addEventListener("click", (e) => {
      if (popover && !popover.contains(e.target) && !btn.contains(e.target)) {
        popover.classList.add("hidden");
      }
    });

    if (sendDefaultBtn) {
      sendDefaultBtn.addEventListener("click", () => {
        const msg = encodeURIComponent(CAPILLA_CONFIG.whatsapp.mensajePredeterminado);
        window.open(`https://wa.me/${CAPILLA_CONFIG.whatsapp.numero}?text=${msg}`, "_blank");
        if (popover) popover.classList.add("hidden");
      });
    }

    quickOptions.forEach(opt => {
      opt.addEventListener("click", () => {
        const topic = opt.getAttribute("data-topic");
        let msg = CAPILLA_CONFIG.whatsapp.mensajePredeterminado;

        if (topic === "misas") msg = "¡Paz y Bien! Deseo consultar acerca de los horarios de las próximas Misas.";
        if (topic === "intencion") msg = CAPILLA_CONFIG.whatsapp.mensajeIntencion;
        if (topic === "bautizo") msg = CAPILLA_CONFIG.whatsapp.mensajeBautizo;
        if (topic === "matrimonio") msg = CAPILLA_CONFIG.whatsapp.mensajeMatrimonio;

        window.open(`https://wa.me/${CAPILLA_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`, "_blank");
        if (popover) popover.classList.add("hidden");
      });
    });
  }

  setupIntentionForm() {
    const form = document.getElementById("intention-form");
    if (!form) return;

    let lastSubmitTime = 0;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const honeypot = form.querySelector("input[name='bot_check_extra']");
      if (honeypot && honeypot.value.trim() !== "") {
        console.warn("Detección de bot activada.");
        return;
      }

      const now = Date.now();
      if (now - lastSubmitTime < 10000) {
        this.showToast("Por favor espera unos segundos antes de enviar otra solicitud.", "warning");
        return;
      }

      const nombre = escapeHtml(form.querySelector("#intention-nombre").value.trim());
      const telefono = escapeHtml(form.querySelector("#intention-telefono").value.trim());
      const tipo = escapeHtml(form.querySelector("#intention-tipo").value);
      const fecha = escapeHtml(form.querySelector("#intention-fecha").value);
      const nombresIntencion = escapeHtml(form.querySelector("#intention-texto").value.trim());

      if (!nombre || nombre.length < 3) {
        this.showToast("Por favor ingresa un nombre y apellido válido.", "warning");
        return;
      }
      if (!telefono || telefono.length < 7) {
        this.showToast("Por favor ingresa un número de teléfono de contacto válido.", "warning");
        return;
      }
      if (!nombresIntencion || nombresIntencion.length < 3) {
        this.showToast("Por favor ingresa los nombres de las personas por quienes se ofrece la Santa Misa.", "warning");
        return;
      }

      lastSubmitTime = now;

      const mensajeWhatsApp = `¡Paz y Bien! Solicitud de Intención de Santa Misa:\n` +
        `• Solicitante: ${nombre}\n` +
        `• Teléfono: ${telefono}\n` +
        `• Motivo: ${tipo}\n` +
        `• Fecha solicitada: ${fecha || "Próxima Misa dominical"}\n` +
        `• Intención por: ${nombresIntencion}`;

      this.showToast("¡Intención registrada! Abriendo WhatsApp de secretaría...", "success");

      setTimeout(() => {
        window.open(`https://wa.me/${CAPILLA_CONFIG.whatsapp.numero}?text=${encodeURIComponent(mensajeWhatsApp)}`, "_blank");
        form.reset();
        const modal = document.getElementById("intention-modal");
        if (modal) modal.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
      }, 1000);
    });
  }

  openIntentionModal() {
    const modal = document.getElementById("intention-modal");
    if (modal) {
      modal.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    }
  }

  setupFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
      const header = item.querySelector(".faq-header");
      const content = item.querySelector(".faq-content");
      const icon = item.querySelector(".faq-icon");

      if (header && content) {
        header.addEventListener("click", () => {
          const isOpen = !content.classList.contains("hidden");

          faqItems.forEach(other => {
            const otherContent = other.querySelector(".faq-content");
            const otherIcon = other.querySelector(".faq-icon");
            if (otherContent) otherContent.classList.add("hidden");
            if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
          });

          if (!isOpen) {
            content.classList.remove("hidden");
            if (icon) icon.style.transform = "rotate(180deg)";
            header.setAttribute("aria-expanded", "true");
          } else {
            header.setAttribute("aria-expanded", "false");
          }
        });
      }
    });
  }

  setupModals() {
    document.querySelectorAll(".open-intention-modal-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.openIntentionModal();
      });
    });

    document.querySelectorAll(".close-modal-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const modal = btn.closest(".capilla-modal");
        if (modal) {
          modal.classList.add("hidden");
          document.body.classList.remove("overflow-hidden");
        }
      });
    });

    document.querySelectorAll(".capilla-modal").forEach(modal => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.add("hidden");
          document.body.classList.remove("overflow-hidden");
        }
      });
    });

    const privacyModal = document.getElementById("privacy-policy-modal");
    const cookiesPolicyModal = document.getElementById("cookies-policy-modal");
    const termsModal = document.getElementById("terms-conditions-modal");

    document.querySelectorAll(".open-privacy-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (privacyModal) {
          privacyModal.classList.remove("hidden");
          document.body.classList.add("overflow-hidden");
        }
      });
    });

    document.querySelectorAll(".open-cookies-policy-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (cookiesPolicyModal) {
          cookiesPolicyModal.classList.remove("hidden");
          document.body.classList.add("overflow-hidden");
        }
      });
    });

    document.querySelectorAll(".open-terms-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (termsModal) {
          termsModal.classList.remove("hidden");
          document.body.classList.add("overflow-hidden");
        }
      });
    });
  }

  setupToastManager() {
    const toast = document.getElementById("global-toast");
    const toastMsg = document.getElementById("global-toast-message");
    const toastIcon = document.getElementById("global-toast-icon");

    window.addEventListener("capilla:toast", (e) => {
      const { tipo, mensaje } = e.detail;
      this.showToast(mensaje, tipo);
    });

    this.showToast = (mensaje, tipo = "info") => {
      if (!toast || !toastMsg) return;

      toastMsg.textContent = mensaje;

      if (tipo === "success") {
        toast.className = "fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-amber-200 border border-amber-500/40 px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm transition-all duration-300";
        if (toastIcon) toastIcon.textContent = "🕊️";
      } else if (tipo === "warning") {
        toast.className = "fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-amber-950 text-amber-100 border border-amber-600 px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm transition-all duration-300";
        if (toastIcon) toastIcon.textContent = "⚠️";
      } else {
        toast.className = "fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-stone-100 border border-stone-700 px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm transition-all duration-300";
        if (toastIcon) toastIcon.textContent = "✝️";
      }

      toast.classList.remove("hidden", "opacity-0", "translate-y-4");
      toast.classList.add("opacity-100", "translate-y-0");

      if (this.toastTimeout) clearTimeout(this.toastTimeout);
      this.toastTimeout = setTimeout(() => {
        toast.classList.add("opacity-0", "translate-y-4");
        setTimeout(() => toast.classList.add("hidden"), 300);
      }, 4000);
    };
  }

  setupErrorSimulators() {
    document.querySelectorAll(".test-500-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "500.html";
      });
    });

    document.querySelectorAll(".test-404-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "404.html";
      });
    });
  }

  getServiceIconSvg(iconName) {
    const svgs = {
      church: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 2v6m-4-3h8m-8 6h8M4 14l8-5 8 5v7H4v-7z" /></svg>`,
      "heart-handshake": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>`,
      droplets: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></svg>`,
      ring: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8a6 6 0 100 12 6 6 0 000-12zm0 0V4m-2 2h4" /></svg>`,
      "book-open": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`,
      sparkles: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>`,
      users: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
      "file-text": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`,
      "map-pin": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`
    };
    return svgs[iconName] || svgs.church;
  }
}

// Exponer en objeto global window
window.CAPILLA_CONFIG = CAPILLA_CONFIG;
window.SERVICIOS_DATA = SERVICIOS_DATA;
window.INFORMES_DATA = INFORMES_DATA;
window.CapillaApp = CapillaApp;

// ====================================================================
// 9. ARRANQUE ROBUSTO (CERO CONDICIONES DE CARRERA CON DOMContentLoaded)
// ====================================================================
function bootApp() {
  if (window.__capillaAppInitialized) return;
  window.__capillaAppInitialized = true;

  try {
    window.__capillaApp = new CapillaApp();
  } catch (err) {
    console.error("Error al inicializar CapillaApp:", err);
    if (typeof window.dismissIntroScreen === "function") {
      window.dismissIntroScreen(true);
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootApp);
} else {
  // El DOM ya está listo (frecuente en Vercel, CDN y scripts defer)
  bootApp();
}
