export type ProjectCategory = 'Dynamic' | 'Motion' | 'Awareness';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  client: string;
  role: string;
  roles?: string[];
  tools: string[];
  shortDesc: string;
  fullDesc: string;
  mainImage: string;
  gallery: string[];
  paperColor: 'light' | 'yellow';
  rotationDeg: number;
  crayonColor: string; // Hex color for wax crayon
  tapePosition: 'top' | 'top-corners' | 'corners' | 'top-single';
  aspectRatio: 'polaroid' | 'sheet' | 'wide';
  duration?: string;
  resolution?: string;
  fps?: string;
  videoUrl?: string;
  videoSrc?: string;
}

export const CRAYON_COLORS = {
  orange: '#FFB703',
  lime: '#9BC53D',
  green: '#3FA34D',
  teal: '#2A9D8F',
  red: '#D93A2B',
  magenta: '#B0306A',
};

export const PROJECTS: Project[] = [
  {
    id: 'o-gigante-da-floresta',
    title: 'Motivational Talk',
    category: 'Awareness',
    year: '2025',
    client: 'Eduardo F. / Gran Duque',
    role: 'Video Editing, Sentiment Analysis, Post-Production',
    roles: ['Video Editing', 'Sentiment Analysis', 'Post-Production'],
    tools: ['Premiere Pro'],
    shortDesc: 'A cool-toned Reel with dynamic pacing in the intro that steadily settles toward the end, focused on raising awareness through direct conversational storytelling.',
    fullDesc: 'A cool-toned Reel with dynamic pacing in the intro that steadily settles toward the end, focused on raising awareness through direct conversational storytelling.',
    mainImage: '/thumbnails/thumb_Conversamotivacional.jpg',
    gallery: [
      '/thumbnails/thumb_Conversamotivacional.jpg',
    ],
    paperColor: 'yellow',
    rotationDeg: -2.2,
    crayonColor: CRAYON_COLORS.orange,
    tapePosition: 'top-corners',
    aspectRatio: 'sheet',
    duration: '00:14',
    fps: '24 fps',
    videoUrl: 'https://www.instagram.com/edu.oduque?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/Conversamotivacional.mp4',
  },
  {
    id: 'jingle-politico',
    title: 'Political Milestones',
    category: 'Motion',
    year: '2026',
    client: 'State Rep. Wilson Santos',
    role: 'Video Editing, Motion Graphics, Sound Design',
    roles: ['Video Editing', 'Motion Graphics', 'Sound Design'],
    tools: ['Premiere Pro'],
    shortDesc: 'Structured motion design for a political campaign, premiered officially at an in-person campaign launch event and featured across Instagram afterwards.',
    fullDesc: 'Structured motion design for a political campaign, premiered officially at an in-person campaign launch event and featured across Instagram afterwards.',
    mainImage: '/thumbnails/thumb_feitos_da_politica.jpg',
    gallery: [
      '/thumbnails/thumb_feitos_da_politica.jpg',
    ],
    paperColor: 'light',
    rotationDeg: 1.8,
    crayonColor: CRAYON_COLORS.green,
    tapePosition: 'corners',
    aspectRatio: 'polaroid',
    duration: '00:18',
    fps: '60 fps',
    videoUrl: 'https://www.instagram.com/wilsonsantosmt?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/feitos da politica.mp4',
  },
  {
    id: 'casa-na-arvore-cafe',
    title: 'Humorous WhatsApp Group',
    category: 'Dynamic',
    year: '2026',
    client: 'State Rep. Wilson Santos',
    role: 'Atmosphere, Positivity, Informative Content',
    roles: ['Atmosphere', 'Positivity', 'Informative Content'],
    tools: ['Premiere Pro'],
    shortDesc: 'A creative video delivered as a dark post to amplify engagement for the primary campaign, using a mock WhatsApp group conversation discussing a representative and his achievements. The piece encourages voter support for a candidate with strong legislative credentials who needed wider digital visibility.',
    fullDesc: 'A creative video delivered as a dark post to amplify engagement for the primary campaign, using a mock WhatsApp group conversation discussing a representative and his achievements. The piece encourages voter support for a candidate with strong legislative credentials who needed wider digital visibility.',
    mainImage: '/thumbnails/thumb_WhatsappBemHumorado.jpg',
    gallery: [
      '/thumbnails/thumb_WhatsappBemHumorado.jpg',
    ],
    paperColor: 'yellow',
    rotationDeg: -1.5,
    crayonColor: CRAYON_COLORS.teal,
    tapePosition: 'top',
    aspectRatio: 'sheet',
    duration: '00:20',
    videoUrl: 'https://www.instagram.com/wilsonsantosmt?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/WhatsappBemHumorado.mp4',
  },
  {
    id: 'cha-da-vovo-nina',
    title: 'Listening to Reality',
    category: 'Motion',
    year: '2025',
    client: 'Bira Ferreira',
    role: 'Engagement, Motivation',
    roles: ['Engagement', 'Motivation'],
    tools: ['Premiere Pro'],
    shortDesc: 'A video focused on the candidate’s political vision and deep community connection, highlighting how his governance approach directly benefits the state population.',
    fullDesc: 'A video focused on the candidate’s political vision and deep community connection, highlighting how his governance approach directly benefits the state population.',
    mainImage: '/thumbnails/thumb_OuvirARealidade.jpg',
    gallery: [
      '/thumbnails/thumb_OuvirARealidade.jpg',
    ],
    paperColor: 'light',
    rotationDeg: 2.4,
    crayonColor: CRAYON_COLORS.red,
    tapePosition: 'top-corners',
    aspectRatio: 'sheet',
    duration: '00:15',
    fps: '24 fps',
    videoUrl: 'https://www.instagram.com/bira.ubiratan_?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/OuvirARealidade.mp4',
  },
  {
    id: 'caderno-de-viagem-serras',
    title: 'Promotional Talking Head',
    category: 'Dynamic',
    year: '2024',
    client: 'Thiago Barros',
    role: 'Storytelling, Video Editing, Clarity',
    roles: ['Storytelling', 'Video Editing', 'Clarity'],
    tools: ['Premiere Pro'],
    shortDesc: 'A dynamic Reel with clean, rhythmic editing and a storytelling approach, demonstrating to viewers that the creator resolves the exact audiovisual problems highlighted in the video.',
    fullDesc: 'A dynamic Reel with clean, rhythmic editing and a storytelling approach, demonstrating to viewers that the creator resolves the exact audiovisual problems highlighted in the video.',
    mainImage: '/thumbnails/thumb_PropagandaAudiovisual.jpg',
    gallery: [
      '/thumbnails/thumb_PropagandaAudiovisual.jpg',
    ],
    paperColor: 'yellow',
    rotationDeg: -2.8,
    crayonColor: CRAYON_COLORS.lime,
    tapePosition: 'corners',
    aspectRatio: 'polaroid',
    duration: '00:32',
    videoUrl: 'https://www.instagram.com/thiagosouza_b?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/PropagandaAudiovisual.mp4',
  },
  {
    id: 'bichos-esquisitos-do-cerrado',
    title: 'High-Impact Talking Head',
    category: 'Awareness',
    year: '2026',
    client: 'Delegate Fred Murta',
    role: 'Storytelling, Psychoanalysis, High Contrast',
    roles: ['Storytelling', 'Psychoanalysis', 'High Contrast'],
    tools: ['Premiere Pro'],
    shortDesc: 'A fast-paced Reel featuring an immediate opening hook, blending thematic visual imagery with matching atmospheric audio to hook the viewer through punchy, direct storytelling with zero filler.',
    fullDesc: 'A fast-paced Reel featuring an immediate opening hook, blending thematic visual imagery with matching atmospheric audio to hook the viewer through punchy, direct storytelling with zero filler.',
    mainImage: '/thumbnails/thumb_TalkingHeadAgressivo.jpg',
    gallery: [
      '/thumbnails/thumb_TalkingHeadAgressivo.jpg',
    ],
    paperColor: 'light',
    rotationDeg: 1.1,
    crayonColor: CRAYON_COLORS.magenta,
    tapePosition: 'top',
    aspectRatio: 'sheet',
    duration: '00:17',
    videoUrl: 'https://www.instagram.com/delegadofredmurta?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/TalkingHeadAgressivo.mp4',
  },
  {
    id: 'festival-musica-na-calcada',
    title: 'Neighborhood Revitalization',
    category: 'Awareness',
    year: '2026',
    client: 'Federal Rep. Juarez Alves da Costa',
    role: 'Showcasing Improvements, Emotional Resonance',
    roles: ['Showcasing Improvements', 'Emotional Resonance'],
    tools: ['Premiere Pro'],
    shortDesc: 'A Reel showcasing community improvements delivered during the congressman’s tenure, raising civic awareness through an emotional resident testimonial and an impactful before-and-after visual contrast.',
    fullDesc: 'A Reel showcasing community improvements delivered during the congressman’s tenure, raising civic awareness through an emotional resident testimonial and an impactful before-and-after visual contrast.',
    mainImage: '/thumbnails/thumb_ReformaDoBairro.jpg',
    gallery: [
      '/thumbnails/thumb_ReformaDoBairro.jpg',
    ],
    paperColor: 'yellow',
    rotationDeg: -1.9,
    crayonColor: CRAYON_COLORS.orange,
    tapePosition: 'top-corners',
    aspectRatio: 'wide',
    duration: '00:15',
    fps: '25 fps',
    videoUrl: 'https://www.instagram.com/juarezcostamt?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/ReformaDoBairro.mp4',
  },
  {
    id: 'poemas-para-passaros',
    title: 'Candidate Promo Reel',
    category: 'Motion',
    year: '2026',
    client: 'Delegate Fred Murta',
    role: 'Motion Graphics, Dynamism, Motivation',
    roles: ['Motion Graphics', 'Dynamism', 'Motivation'],
    tools: ['Premiere Pro'],
    shortDesc: 'An Instagram Reel crafted to announce and promote the federal deputy candidate’s ballot number for the 2026 political campaign, prioritizing eye-catching visual effects with a 3D aesthetic.',
    fullDesc: 'An Instagram Reel crafted to announce and promote the federal deputy candidate’s ballot number for the 2026 political campaign, prioritizing eye-catching visual effects with a 3D aesthetic.',
    mainImage: '/thumbnails/thumb_ReelsParaPromoverCandidato.jpg',
    gallery: [
      '/thumbnails/thumb_ReelsParaPromoverCandidato.jpg',
    ],
    paperColor: 'light',
    rotationDeg: 2.2,
    crayonColor: CRAYON_COLORS.teal,
    tapePosition: 'corners',
    aspectRatio: 'polaroid',
    duration: '00:14',
    videoUrl: 'https://www.instagram.com/delegadofredmurta?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/ReelsParaPromoverCandidato.mp4',
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    author: 'Felipe Fabre F.',
    role: 'MB Political Consulting & Advisory',
    text: `“Working with Pedro Lui was a very positive experience. He is a smart editor who goes far beyond mere execution: he grasps the project, understands the core demand, and adapts his skills to deliver the best possible result.

On top of working with great professionalism, Pedro learns quickly, pays close attention to detail, and demonstrates strong commitment at every stage of the process.”`,
    icon: 'gavel',
    postItColor: '#FFF6A5', // Pale yellow sticky
    rotation: -2.4,
    tapeColor: 'rgba(205, 190, 150, 0.85)',
    crayonAccent: '#FFB703',
  },
  {
    id: '2',
    author: 'Hortência Bragatto',
    role: 'Advertising Coordinator',
    text: `“Pedro is an authentic, intelligent professional who is deeply dedicated to his craft. He commands editing technique without ever compromising creativity. His greatest strengths are his initiative and constant drive for improvement and innovation.

I had the chance to work with him in person, and it was a great experience—we brought multiple projects to life together in a smooth, enjoyable, and collaborative atmosphere, with valuable creative exchanges throughout.”`,
    postItColor: '#FFD6E0', // Soft pastel pink
    rotation: 1.9,
    tapeColor: 'rgba(205, 190, 150, 0.85)',
    crayonAccent: '#B0306A',
  },
  {
    id: '3',
    isTorn: true,
    author: '················',
    role: '························',
    text: '',
    postItColor: '#D8F3DC', // Soft mint green
    rotation: -1.2,
    tapeColor: 'rgba(205, 190, 150, 0.85)',
    crayonAccent: '#2A9D8F',
  }
];

export const SKILLS_DATA = [
  { name: 'Montagem & Edição de Vídeo (Premiere / DaVinci)', percent: 96, color: '#FFB703', note: 'ritmo, corte cirúrgico e fluidez' },
  { name: 'Sound Design & Mixagem de Áudio', percent: 92, color: '#9BC53D', note: 'a alma invisível do vídeo' },
  { name: 'Color Grading & Correção de Cor', percent: 88, color: '#2A9D8F', note: 'paleta cinematográfica e calor analógico' },
  { name: 'Motion Design & Colagens Animadas', percent: 85, color: '#D93A2B', note: 'títulos manuais e stop-motion' },
  { name: 'Narrativa Cinematográfica & Roteiro Visual', percent: 94, color: '#B0306A', note: 'histórias que emocionam' }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Garatujas & Conversas',
    subtitle: 'O rabisco solto no guardanapo',
    desc: 'Tudo começa ouvindo a ideia com atenção. Esboços rápidos em papel sulfite ou caderno de rascunho sem medo de errar.',
    color: '#FFB703',
    tip: 'Sem borracha na primeira hora!'
  },
  {
    step: '02',
    title: 'Estudos de Cor & Giz',
    subtitle: 'Paleta e atmosfera afetiva',
    desc: 'Testes de combinações com giz de cera, recortes de revistas antigas e manchas de aquarela para definir a temperatura da cena.',
    color: '#3FA34D',
    tip: 'Luz que abraça o leitor'
  },
  {
    step: '03',
    title: 'Camadas & Pintura',
    subtitle: 'A construção do volume',
    desc: 'Aplicação das cores definitivas em guache e lápis dermatográfico sobre papéis com textura de 300g.',
    color: '#2A9D8F',
    tip: 'O prazer do pigmento real'
  },
  {
    step: '04',
    title: 'Digitalização & Gráfica',
    subtitle: 'Cuidado em cada milímetro',
    desc: 'Escaneamento em 600dpi, tratamento de curvas de cor e fechamento de arquivos mantendo a vibração das texturas originais.',
    color: '#B0306A',
    tip: 'Pronto para encantar o mundo'
  }
];
