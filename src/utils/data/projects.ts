import { ProjectDetail, ProjectTypes } from "../types";

export const projects: ProjectDetail[] = [
  {
    _id: 'bancoargentino',
    projectClient: "Banco Argentino de Desarrollo (BICE)",
    description: `La colocación de aberturas y carpinterías de aluminio en el Banco Argentino de Desarrollo (BICE) representa un hito significativo en nuestra cartera de proyectos. La intervención llevada a cabo por Aluplast SRL fusiona de manera magistral la arquitectura histórica del edificio, erigido en 1944, con la contemporaneidad de modernas aberturas de aluminio.
    
    En esta remodelación no solo ha preservado la esencia arquitectónica del BICE, sino que también ha realzado su estética mediante la introducción de aberturas de aluminio de última generación. Estas no solo destacan por su diseño elegante, sino que también incorporan tecnologías avanzadas que mejoran la eficiencia energética y el confort interior.
    
    La elección de Aluplast SRL para este proyecto subraya nuestro compromiso con la excelencia y la innovación. Cada abertura instalada refleja un equilibrio excepcional entre la preservación del patrimonio arquitectónico y la introducción de soluciones contemporáneas de vanguardia.
    
    Nuestra experiencia en la colocación de aberturas de aluminio en instituciones de renombre no solo responde a los más altos estándares de calidad, sino que también reafirma nuestro compromiso con la transformación inteligente y respetuosa de espacios emblemáticos.
    
    Explora nuestro portfolio de proyectos para descubrir cómo Aluplast SRL fusiona la tradición con la modernidad, creando soluciones arquitectónicas que perduran en el tiempo.`,
    type: ProjectTypes.EDIFICIOS,
    imageUrl: [{ id: '', url: '' }],
    // project_date: getFormatDate(new Date().toString()),
    title: 'Aberturas y carpinterías de aluminio Banco Argentino de Desarrollo (BICE)'
  },
  {
    _id: "mcdonalds",
    projectClient: "McDonald's",
    type: ProjectTypes.EDIFICIOS,
    description: `
      Aluplast SRL obra franquicia internacional McDonald's, ejecución y fabricación de las aberturas de aluminio y carpinterías en sucursal en CABA.

      Este proyecto abarcó la implementación de tipologías específicas adaptadas tanto para el salón como para el patio de comidas, destacando nuestro compromiso con soluciones personalizadas y de alta calidad. Las aberturas de aluminio diseñadas y fabricadas por Aluplast SRL han sido concebidas con precisión técnica para cumplir con los estándares exigentes de una marca líder a nivel mundial.
      
      En particular, la instalación de vidrios de seguridad refleja nuestro enfoque en la seguridad y bienestar de los espacios comerciales. Estos vidrios ofrecen resistencia y durabilidad, asegurando un entorno seguro tanto para los clientes como para el personal. La selección cuidadosa de materiales y la ejecución técnica precisa han sido fundamentales para lograr un resultado que combina eficiencia, diseño y funcional  idad.
      
      Aluplast SRL reafirma su posición como un socio estratégico para proyectos comerciales de envergadura, donde la excelencia técnica y el compromiso con los más altos estándares son esenciales.
    `,
    imageUrl: [{ id: '', url: '' }],
    title: "Sucursal McDonald's"
  },
  {
    _id: "unicentershopping",
    projectClient: "Unicenter Shopping",
    type: ProjectTypes.EDIFICIOS,
    description: `
    Aluplast SRL, Lideres en aberturas de aluminio y cerramientos. En este proyecto presentamos columnas de 180 mm. que definen un estándar de elegancia y funcionalidad para este tipo de espacios.

    El vidrio laminado 6+6 mm en un tono gris microtexturado no solo ofrece un aspecto contemporáneo, sino que también garantiza resistencia y durabilidad. Cada detalle ha sido meticulosamente pensado para proporcionar una experiencia visual superior.
    
    Las divisiones interiores, integradas con precisión, ofrecen flexibilidad y adaptabilidad a tu espacio, mientras que las estructuras envolventes, robustas y estéticamente agradables, aseguran una integración armoniosa en cualquier entorno.
    
    En Aluplast SRL, fusionamos la innovación con la calidad. Nuestras aberturas de aluminio y cerramientos no solo cumplen con los estándares más altos, sino que también elevan la estética de tu proyecto a un nivel superior. Experimenta la excelencia en cada detalle con nuestro Sistema de Frente Integral. Descubre más sobre cómo nuestras soluciones pueden transformar tu espacio. 
    `,
    imageUrl: [{ id: '', url: '' }],
    title: "Unicenter Shopping CABA"
  },
  {
    _id: "residencialsimilmadera",
    projectClient: "Casa residencial",
    type: ProjectTypes.RESIDENCIAL,
    description: `
    Las aberturas de aluminio de Aluplast para este proyecto residencial ofrecen un diseño moderno y funcional. La elección del aluminio simil madera, aporta un toque contemporáneo con líneas limpias que se integran perfectamente en la arquitectura de la casa. Estas aberturas, disponibles en una paleta de colores cuidadosamente seleccionada, complementan las tonalidades de paredes y techos, creando un aspecto visualmente armonioso y elegante. Además de su estética, las aberturas de aluminio garantizan durabilidad, resistencia a las condiciones climáticas y eficiencia energética, convirtiéndolas en una elección estilizada y práctica para un hogar moderno y funcional.
    `,
    imageUrl: [{ id: '', url: '' }],
    title: "Casa residencial aberturas simil madera"
  },
  {
    _id: "bureau",
    projectClient: "Bureau",
    type: ProjectTypes.EDIFICIOS,
    description: `
    Una vez mas Aluplast en grandes obras. Con diseño del estudio Berdichevsky Cherny y Asociados, este edificio de oficinas con 11 pisos y 3 subsuelos abarca 17,000m2, en las cuales Aluplast fue adjudicada para la ejecución de la totalidad de cerramientos del Edificio.

      Ubicación: Bureau Diagonal (Bs. As.)
    `,
    imageUrl: [{ id: '', url: '' }],
    title: "Edificio de oficinas Bureau Diagonal (Bs. As.)"
  },
]