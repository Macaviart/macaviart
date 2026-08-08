export type NotaPrensa = {
  publicacion: string
  fecha?: string
  autor?: string
  titulo: string
  extracto?: string
  imagenes: string[]
  url?: string
}

const p = (n: number) => `/images/prensa/clip-${String(n).padStart(2, '0')}${extMap[n]}`

// Extensiones reales de cada archivo descargado (clip-01..clip-57)
const extMap: Record<number, string> = {
  1: '.png', 2: '.jpg', 3: '.jpg', 4: '.png', 5: '.jpg', 6: '.jpg', 7: '.png', 8: '.jpeg',
  9: '.jpg', 10: '.png', 11: '.png', 12: '.png', 13: '.png', 14: '.png', 15: '.png', 16: '.png',
  17: '.png', 18: '.jpg', 19: '.jpg', 20: '.png', 21: '.jpg', 22: '.png', 23: '.jpg', 24: '.jpg',
  25: '.png', 26: '.png', 27: '.jpg', 28: '.png', 29: '.png', 30: '.png', 31: '.png', 32: '.jpg',
  33: '.jpg', 34: '.jpg', 35: '.png', 36: '.png', 37: '.jpg', 38: '.png', 39: '.png', 40: '.jpg',
  41: '.jpg', 42: '.png', 43: '.png', 44: '.png', 45: '.png', 46: '.jpg', 47: '.png', 48: '.jpg',
  49: '.png', 50: '.png', 51: '.jpg', 52: '.png', 53: '.png', 54: '.png', 55: '.jpg', 56: '.png',
  57: '.png',
}

// Ordenadas cronológicamente de más reciente a más antigua.
// Las notas sin fecha en la fuente original fueron ubicadas junto a la
// publicación/exposición con la que comparten tema (marcado "fecha inferida" abajo)
// cuando había evidencia suficiente en el texto; las que no tenían ninguna pista
// de fecha quedaron agrupadas al final, en su orden original.
export const notas: NotaPrensa[] = [
  {
    publicacion: 'Arte al Límite (web)',
    fecha: 'Abril 2016',
    titulo: 'Macarena Vicuña: la materialización de una femineidad con guiños de color',
    extracto:
      'Nueva York 2016. Macarena Vicuña presenta en ArtExpo New York (14 al 17 de abril) junto a alumnas de su taller, representadas por la Galería Espacio Siena. "Las obras son reflejo de la historia personal de cada artista. Para mí, las veladuras, la mancha y el dibujo, representan el cuerpo y sus vestigios", explica sobre su serie Instantes Permanentes.',
    imagenes: [p(4), p(5)],
    url: 'https://www.arteallimite.com/2016/04/macarena-vicuna-la-materializacion-de-una-femineidad-con-guinos-de-color/',
  },
  {
    publicacion: 'Arte al Límite (web)',
    fecha: 'Abril 2016',
    titulo: '¡Artistas chilenos exponen en Artexpo New York 2016!',
    extracto:
      'Espacio Siena debutó internacionalmente en Artexpo New York 2016 con 11 artistas chilenos. Macarena Vicuña participó junto a Marcela Iglesias, Paulina Beyer, Verónica Doerner y otras, con obras en formato vertical (130 x 60 cm).',
    imagenes: [p(6)],
    url: 'https://www.arteallimite.com/2016/04/artistas-chilenos-exponen-en-artexpo-new-york-2016/',
  },
  {
    publicacion: 'Arte al Límite — Periódico N°110',
    fecha: 'Noviembre 2014',
    autor: 'Por Bárbara Fernández',
    titulo: 'Silueta Escondida',
    extracto:
      '"Con una trayectoria de más de dos décadas, esta artista le brinda a la obra una madurez especial, un desarrollo completo y un manejo absoluto de su técnica." Sobre Instantes Permanentes II (2014): "La pintura, velada y densa, se entrelaza para formar atmósferas que develan la sumatoria de instantes ocurridos en el proceso de la obra."',
    imagenes: [p(8), p(7)],
  },
  {
    publicacion: 'Revista VD, El Mercurio',
    fecha: 'Edición N°952 — Sábado 4 de octubre de 2014',
    autor: 'Texto: Soledad Salgado F. — Fotografías: Carla Pinilla L.',
    titulo: 'Pasión por el Dibujo',
    extracto:
      'Las obras de Macarena Vicuña (Macaví) tienen a la figura humana como elemento central. A través de trazos que la insinúan da cuenta de la soltura y gestualidad que ha adquirido con el tiempo, además realiza grabados e intervenciones de muebles.',
    imagenes: [p(2), p(3)],
    url: 'http://impresa.elmercurio.com/Pages/SupplementDetail.aspx?dt=2014-10-04&SupplementID=4&BodyID=0',
  },
  {
    publicacion: 'Arte al Límite (web)',
    fecha: 'Diciembre 2013 (fecha inferida)',
    titulo: 'Artistas más visitados en arteallimite.com — Diciembre',
    extracto: 'Macarena Vicuña, entre los artistas más visitados del mes junto a María Eugenia Akel, Bernardita Broughton, Marcela Iglesias, Coco Martín y Claudia Parodi.',
    imagenes: [p(40)],
  },
  {
    publicacion: 'Arte al Límite — Periódico N°99',
    fecha: 'Diciembre 2013',
    autor: 'Por Equipo Arte al Límite',
    titulo: 'Historia de un Instante Permanente',
    extracto:
      '"Capto un momento determinado que se va con los segundos, por eso lo que queda son extractos de figura y no la figura completa", explica Macarena a propósito de Instantes V, la obra que expuso en la Bienal de Florencia.',
    imagenes: [p(10), p(11)],
    url: 'https://www.arteallimite.com/artistas/macarena-vicuna-macavi',
  },
  {
    publicacion: 'IX Bienal de Florencia',
    fecha: '2013',
    titulo: '"I\'m an artist of the Florence Biennale"',
    extracto: 'Macarena Vicuña participó como artista de la IX Bienal Internacional de Arte Contemporáneo de Florencia, Fortezza da Basso, Italia.',
    imagenes: [p(9)],
  },
  {
    publicacion: 'Arte al Límite (web)',
    fecha: '2013 (fecha inferida)',
    titulo: 'Artistas más vistos',
    extracto: 'Macarena Vicuña — 10.945 vistas, primer lugar por sobre Carolina Busquets y Bernardita Broughton.',
    imagenes: [p(41)],
  },
  {
    publicacion: 'Revista VD, El Mercurio',
    fecha: '7 de abril de 2012',
    autor: 'VD Panoramas, por Jimmy Gavilán Y.',
    titulo: 'Pintura de regreso',
    extracto:
      'Este año el taller de pintura Macaví —de Macarena Vicuña— no solo impartirá sus habituales clases de pintura, dibujo o de traspaso fotográfico; sino que agregará el arte en objetos como mesas y muebles. Francisco Bulnes Correa 800.',
    imagenes: [p(26), p(27)],
  },
  {
    publicacion: 'Revista PM',
    fecha: 'Edición 82 — Marzo 2012',
    titulo: 'Vida Social: Exposición "Par Tres" en Club de Golf Las Brisas de Santo Domingo',
    extracto:
      'Durante febrero se realizó la exposición "Par Tres" en el Club de Golf Las Brisas de Santo Domingo, oportunidad en la que participaron tres artistas: Ximena Lecaros con grabado, María Eugenia Sahli con escultura y Macarena Vicuña (Macaví) con pintura.',
    imagenes: [p(18), p(19)],
  },
  {
    publicacion: 'Arte al Límite — Periódico N°78',
    fecha: 'Febrero 2012',
    titulo: 'Par Tres — exposición colectiva',
    extracto: 'Exposición colectiva de grabado, escultura y pintura. Club de Golf Las Brisas de Santo Domingo, hasta el 13 de febrero.',
    imagenes: [p(16), p(17)],
    url: 'https://www.arteallimite.com/macarenavicuna',
  },
  {
    publicacion: 'Revista VD, El Mercurio',
    fecha: 'Enero 2012 (fecha inferida)',
    titulo: 'Tres por uno',
    extracto:
      'La exposición "Para Tres" integrará el trabajo de las artistas Ximena Lecaros, quien presentará grabados, Macarena Vicuña, pinturas, y Eugenia Sahli, esculturas. El tema de esta muestra es la figura humana. Club de Golf Las Brisas de Santo Domingo.',
    imagenes: [p(14), p(15)],
  },
  {
    publicacion: 'Arte al Límite — Periódico N°77',
    fecha: 'Enero 2012',
    autor: 'Por Yuriko Takahashi V., periodista',
    titulo: 'Autorretrato en la Tela',
    extracto:
      '"Pintar, para Macarena Vicuña, es el trabajo más placentero que existe... Macarena explica que sus pinturas hablan por sí mismas develando aspectos inconscientes. \'A través de ellas, nos podemos conocer profundamente, por eso creo que son el mejor autorretrato de cada uno\'."',
    imagenes: [p(12), p(13)],
  },
  {
    publicacion: 'Revista VD, El Mercurio',
    fecha: '2012 (fecha inferida)',
    autor: 'VD Panoramas, por Mireya Díaz Soto',
    titulo: 'Venta de taller',
    extracto:
      'Obras de Macarena Vicuña, Carola Labbé y Andy Beyá, entre otras artistas, habrá en la venta del Taller Macaví, entre el 20 y el 22 de octubre, en Francisco Bulnes Correa 800.',
    imagenes: [p(28), p(29)],
  },
  {
    publicacion: 'Revista PM',
    fecha: 'Edición 78 — Noviembre 2011',
    titulo: 'Vida Social: Exposición "Taller Macaví"',
    extracto:
      'Se inauguró la exposición de arte del taller de pintura de Macarena Vicuña, donde se expusieron las obras de la destacada artista visual y sus alumnas.',
    imagenes: [p(24), p(25)],
  },
  {
    publicacion: 'Revista VD, El Mercurio',
    fecha: '2011 (fecha inferida)',
    autor: 'VD Panoramas, por Mireya Díaz Soto',
    titulo: 'Atreverse con la pintura',
    extracto:
      'La artista Macarena Vicuña invita a participar de sus clases de pintura, en las que enseña las técnicas de veladuras, texturas, color, composición, figura humana, dibujo y traspaso fotográfico.',
    imagenes: [p(30), p(31)],
  },
  {
    publicacion: 'El Mercurio Sábado',
    fecha: 'N°662 — 28 de mayo de 2011',
    titulo: '"Mis obras son mis autorretratos"',
    extracto:
      'Entrevista a Macarena Vicuña, artista visual, sobre "De Norte a Sur", su serie de telas de gran formato que revela su punto de vista sobre el paisaje chileno (Galería Blanc by Praxis). "¿Cómo se haría un autorretrato? Mis obras son mis autorretratos."',
    imagenes: [p(20), p(21)],
  },
  {
    publicacion: 'Galería de Arte Blanc by Praxis (web)',
    fecha: 'Viernes 13 de mayo de 2011',
    titulo: '"De los Lagos"',
    extracto: 'Publicación en el sitio de Galería Blanc sobre la obra "De los Lagos", 200 x 70 cm.',
    imagenes: [p(42)],
  },
  {
    publicacion: 'Revista VD, El Mercurio',
    fecha: '7 de mayo de 2011',
    titulo: '"De norte a sur"',
    extracto:
      'Así se llama la muestra que la artista Macarena Vicuña presenta hasta el 30 de mayo. Esta reúne una serie de telas en las que colores, texturas y manchas hablan del paisaje chileno. Galería Blanc, Avda. Vitacura 4363.',
    imagenes: [p(22), p(23)],
  },
  {
    publicacion: 'Arte al Límite (web)',
    fecha: 'Mayo 2011 (fecha inferida)',
    titulo: 'Miradas sobre el paisaje chileno',
    extracto:
      'En "De Norte a Sur", Macarena Vicuña recorre las vistas de Chile para plasmarlas en una serie de telas de gran formato. "Crear un paisaje es mucho más que la representación de éste, es sobre todo dejar fluir, a través de la pintura, una visión personal", explica Vicuña sobre las reflexiones detrás de su trazo. Hasta el 30 de mayo, Galería Blanc (Vitacura 4363).',
    imagenes: [p(32)],
  },
  {
    publicacion: 'PortalDeArte.cl',
    fecha: '2011 (fecha inferida)',
    titulo: 'Macarena Vicuña en la Galería de Arte Blanc by Praxis',
    imagenes: [p(43), p(44)],
  },
  {
    publicacion: 'Emol.com',
    fecha: '2008 (fecha inferida)',
    titulo: 'Las pintoras Sonia Koch, Constanza Villalba y Macarena Vicuña',
    extracto:
      'El genio Leonardo Da Vinci habría dicho una vez que "la belleza perece en la vida, pero es inmortal en el arte". Así deben entenderlo también las amantes de este género.',
    imagenes: [p(47)],
  },
  {
    publicacion: 'Prensa',
    fecha: '2008',
    titulo: 'Expo Arte 2008 en Santo Domingo',
    extracto:
      'Las pintoras Sonia Koch, Constanza Villalba y Macarena Vicuña. Acuarelas, óleos, esculturas, cerámicas, regalos, vidrio, artesanía en madera y cuero, antigüedades y delicatessen en la tradicional muestra Expo Arte 2008 de Santo Domingo, Colegio People Help People.',
    imagenes: [p(51), p(52)],
  },
  {
    publicacion: 'Travel & Leisure Chile',
    fecha: '2006',
    titulo: 'Expo Lujo 2006',
    extracto: 'Exposición en Club de Golf Santa Martina 2006. Obras de Macarena Vicuña y María Eugenia Jaña se muestran en la sección de arte de este evento.',
    imagenes: [p(50)],
  },
  {
    publicacion: 'La Tercera, Casa & Decoración',
    fecha: 'Sábado 26 de marzo de 2005',
    titulo: 'Obras de Macarena Vicuña para la decoración',
    extracto:
      'Dentro de la decoración sobresalen los cuadros llamativos, logrando un ambiente dinámico, señala la decoradora Teruca Matte. Destaca el uso del rojo, que propone audacia y aporta un punto de interés.',
    imagenes: [p(37), p(38)],
  },
  {
    publicacion: 'Prensa',
    fecha: 'Agosto 2004 (fecha inferida)',
    titulo: '"El Color, Reflejo del Alma" — inauguración',
    extracto:
      'A comienzos de agosto se efectuó la inauguración de la exposición "El color, reflejo del alma" de la artista Macarena Vicuña. En la oportunidad, numeroso público, entre diplomáticos, empresarios, académicos y personalidades ligadas al quehacer cultural, apreciaron la muestra que consta de 23 obras, óleos y acrílicos con técnica mixta. En la foto: Hanna Binstok, directora general del Instituto Chileno Israelí de Cultura; la artista Macarena Vicuña, y Josef Regev, embajador de Israel en Chile.',
    imagenes: [p(49)],
  },
  {
    publicacion: 'La Tercera, Casa & Decoración',
    fecha: 'Sábado 28 de agosto de 2004',
    titulo: '"El Color, reflejo del Alma"',
    extracto:
      'Exposición de Macarena Vicuña que se presenta en el Instituto Chileno-Israelí de Cultura (Eliodoro Yáñez 2342). Son 24 obras de técnica mixta, óleos y arpilleras.',
    imagenes: [p(35), p(36)],
  },
  {
    publicacion: 'Arte al Límite (web)',
    titulo: 'Ficha de artista y galería',
    imagenes: [p(39)],
  },
  {
    publicacion: 'Prensa',
    titulo: 'Inauguración de exposición',
    imagenes: [p(46)],
  },
  {
    publicacion: 'Prensa',
    titulo: 'Inauguración de exposición',
    imagenes: [p(48)],
  },
  {
    publicacion: 'Revista Vivienda y Decoración, El Mercurio',
    titulo: 'Galería Jardín del Arte — "Descansos"',
    extracto:
      'Raúl Labbé 13690. "Descansos": grabados de la artista Paula Cifuentes, técnica mixta de Rosario Lira y óleos de Macarena Vicuña. Hasta el 2 de noviembre.',
    imagenes: [p(33), p(34)],
  },
  {
    publicacion: 'PortalDeArte.cl',
    titulo: 'Colectiva en Galería de Arte M2 / MM.CL — "Descansos"',
    extracto:
      'Expositor: Macarena Vicuña, Michelle Piaggio, Christophe Issaurat y Lucia Anguita. Macarena Vicuña (Macaví), con estudios de dibujo y pintura, más un diplomado de Artes Generales en la Universidad Católica, con sus pinturas en óleo y técnicas mixtas.',
    imagenes: [p(45)],
  },
  {
    publicacion: 'Revista Arte',
    titulo: 'Composición de Color',
    extracto:
      'La textura y el color, trabajados en diversas capas y matices, mantenienron la pureza de los colores, fueron suficientes para dar sentido a una obra... quiero transmitir el aporte que cada ser hace en nuestro mundo, entregando lo mejor de su identidad, en cuerpo y espíritu, para llenar esta vida de alegría.',
    imagenes: [p(54), p(55)],
  },
  {
    publicacion: 'Revista Arte',
    titulo: 'Expansión del Color I',
    extracto:
      'Todos los momentos de la vida son experiencias que van dejando huella en nuestra alma y todo nuestro ser refleja lo que llevamos dentro. La fuerza interna, iluminada por el espíritu en este caso, se expresa a través del color y la textura.',
    imagenes: [p(56), p(57)],
  },
]
