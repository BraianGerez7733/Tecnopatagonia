import heroImage from '../assets/images/hero-worksite.svg'
import galleryOne from '../assets/images/gallery-01.svg'
import galleryTwo from '../assets/images/gallery-02.svg'
import galleryThree from '../assets/images/gallery-03.svg'
import galleryFour from '../assets/images/gallery-04.svg'

const whatsappBase = 'https://wa.me/5492964452465'

const createWhatsappLink = (message) =>
  `${whatsappBase}?text=${encodeURIComponent(message)}`

export const company = {
  name: 'TECNOPATAGONIA',
  tagline: 'Movimientos de suelo, materiales y soluciones para obra en Río Grande',
  description:
    'Empresa local de Río Grande dedicada a movimientos de suelo, nivelación de terrenos, rellenos, compactación, venta de tierra negra, venta de áridos, fabricación y colocación de adoquines, construcción y mantenimiento general. Atención directa, trabajo responsable y presupuesto sin compromiso.',
  location: 'Río Grande, Tierra del Fuego, Argentina',
  address: 'Elcano 863, frente a la estación YPF, Río Grande, Tierra del Fuego',
  phones: ['(2964) 452-465'],
  mapsEmbed:
    'https://www.google.com/maps?q=Elcano%20863%2C%20R%C3%ADo%20Grande%2C%20Tierra%20del%20Fuego%2C%20Argentina&z=15&output=embed',
  social: {
    whatsapp: createWhatsappLink(
      'Hola, quiero consultar por los servicios de Tecnopatagonia.',
    ),
    budget: createWhatsappLink(
      'Hola, quiero solicitar un presupuesto con Tecnopatagonia.',
    ),
    facebook: 'https://www.facebook.com/tecnopatagonia.valentino.gallardo/',
    instagram: 'https://www.instagram.com/tecnopatagonia_gallardo/',
  },
}

export const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Contacto', href: '#contacto' },
]

export const highlights = [
  'Empresa local',
  'Atención directa',
  'Presupuesto sin compromiso',
]

export const about = {
  title: 'Sobre nosotros',
  text:
    'Tecnopatagonia es una empresa local de Río Grande que creció a partir del trabajo constante y la experiencia en obra. Su actividad está orientada a brindar soluciones concretas vinculadas a movimientos de suelo, materiales y tareas de apoyo para diferentes proyectos. Con una identidad local fuerte y una mirada práctica, la empresa acompaña obras y necesidades reales de clientes que valoran la atención directa, la responsabilidad y la respuesta rápida.',
  textSecondary:
    'Al frente del proyecto están Manuel Gallardo y Cristian Gallardo, impulsando el crecimiento de una empresa familiar enfocada en el trabajo serio, la cercanía con el cliente y la calidad de cada solución.',
}

export const services = [
  {
    title: 'Movimientos de suelo',
    description:
      'Realizamos todo tipo de movimientos de suelo para obras, terrenos y proyectos de distinta escala, con atención directa y evaluación en el lugar.',
    icon: 'terrain',
  },
  {
    title: 'Nivelación de terrenos',
    description:
      'Trabajamos en nivelación de terrenos para preparar superficies de manera segura, prolija y funcional.',
    icon: 'level',
  },
  {
    title: 'Rellenos y compactación',
    description:
      'Ofrecemos soluciones de relleno y compactación para mejorar bases, nivelar espacios y preparar áreas para distintas tareas de obra.',
    icon: 'layers',
  },
  {
    title: 'Retiro de capa vegetal',
    description:
      'Ejecutamos retiro de capa vegetal y preparación inicial del terreno para dejar el espacio en condiciones de trabajo.',
    icon: 'cut',
  },
  {
    title: 'Venta de tierra negra',
    description:
      'Comercializamos tierra negra de alta calidad para jardines, huertas, chacras y distintos usos exteriores. Disponible en bolsas y bolsones.',
    icon: 'leaf',
  },
  {
    title: 'Venta de áridos',
    description:
      'Disponemos de áridos para obra y tareas de preparación, incluyendo mixto, arena y piedra para diferentes necesidades.',
    icon: 'aggregate',
  },
  {
    title: 'Fabricación de adoquines',
    description:
      'Fabricamos adoquines para soluciones prácticas y resistentes, ideales para veredas, entradas y sectores de circulación.',
    icon: 'blocks',
  },
  {
    title: 'Colocación de adoquines',
    description:
      'Realizamos colocación de adoquines con enfoque funcional y estético, generando terminaciones prolijas y duraderas.',
    icon: 'paving',
  },
  {
    title: 'Construcción y mantenimiento general',
    description:
      'Brindamos soluciones de construcción y mantenimiento general para proyectos que requieren respuesta concreta, mano de obra local y compromiso de trabajo.',
    icon: 'tools',
  },
]

export const gallery = [
  {
    title: 'Frentes de obra y preparación de terreno',
    description:
      'Referencia visual para reemplazar por futuras fotos reales de maquinaria y movimiento de suelo.',
    image: galleryOne,
  },
  {
    title: 'Materiales y acopio operativo',
    description:
      'Composición de referencia pensada para mostrar tierra negra, áridos y logística local.',
    image: galleryTwo,
  },
  {
    title: 'Adoquines y terminaciones exteriores',
    description:
      'Escena de referencia para futuras imágenes de fabricación y colocación de adoquines.',
    image: galleryThree,
  },
  {
    title: 'Nivelación y compactación de superficies',
    description:
      'Visual adaptable para trabajos de preparación de bases, espacios exteriores y apoyo de obra.',
    image: galleryFour,
  },
]

export const differentiators = [
  'Atención personalizada',
  'Presupuesto sin compromiso',
  'Empresa local de Río Grande',
  'Trabajo responsable',
  'Soluciones para particulares y obras',
  'Contacto rápido por WhatsApp',
]

export const quickActions = [
  {
    label: 'Pedir presupuesto',
    href: createWhatsappLink(
      'Hola, quiero pedir un presupuesto con Tecnopatagonia.',
    ),
  },
  {
    label: 'Consultar por movimientos de suelo',
    href: createWhatsappLink(
      'Hola, quiero consultar por movimientos de suelo y nivelación de terrenos.',
    ),
  },
  {
    label: 'Consultar por tierra negra o áridos',
    href: createWhatsappLink(
      'Hola, quiero consultar por tierra negra y áridos.',
    ),
  },
  {
    label: 'Hablar por WhatsApp',
    href: createWhatsappLink(
      'Hola, quiero comunicarme con Tecnopatagonia por WhatsApp.',
    ),
  },
]

export const heroVisual = heroImage
