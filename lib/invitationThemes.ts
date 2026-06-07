export type OpeningStyle = 'wax-seal' | 'mashrabiya-doors' | 'bloom' | 'curtain' | 'envelope' | 'line-veil'

export interface InvitationTheme {
  slug: string
  name: string
  nameAr: string
  tagline: string
  /** Which kinds of events this theme suits best (display only) */
  bestFor: string[]
  colors: {
    bg: string
    bgDeep: string
    surface: string
    primary: string
    primaryDark: string
    accent: string
    text: string
    textMuted: string
    onPrimary: string
  }
  fonts: {
    display: 'serif' | 'script'
    body: 'serif' | 'sans'
  }
  opening: {
    style: OpeningStyle
    label: string
    /** short instruction shown to the guest, e.g. "Touchez le sceau pour ouvrir" */
    hint: string
  }
  /** Royalty-free instrumental track — drop an mp3 at this path (see /public/sounds/README.md) */
  sound: {
    src: string
    label: string
    credit?: string
  }
  ornament: 'arabesque' | 'mashrabiya' | 'florals' | 'stars' | 'botanical' | 'geometric' | 'laurel' | 'clouds' | 'lineart'
  /** Marks themes that use the dedicated minimalist single-page layout (countdown, programme, lieu, RSVP) */
  layout?: 'minimal'
}

export const invitationThemes: InvitationTheme[] = [
  {
    slug: 'conte-dore',
    name: 'Conte Doré',
    nameAr: 'الحكاية الذهبية',
    tagline: 'Le faste orientaliste, le geste d\'ouvrir un secret précieux',
    bestFor: ['Mariage', 'Fiançailles', 'Anniversaire', 'Dîner de gala'],
    colors: {
      bg: '#FDFBF7', bgDeep: '#1a1209', surface: '#FFFFFF',
      primary: '#C5A059', primaryDark: '#7A5E2A', accent: '#9A1F2B',
      text: '#2C2C2C', textMuted: '#7A6A54', onPrimary: '#FFFFFF',
    },
    fonts: { display: 'script', body: 'serif' },
    opening: { style: 'wax-seal', label: 'Le cachet de cire', hint: 'Touchez le sceau doré pour briser la cire et révéler l\'invitation' },
    sound: { src: '/sounds/conte-dore.mp3', label: 'Oud & qanun — instrumental feutré' },
    ornament: 'arabesque',
  },
  {
    slug: 'sidi-bou-said',
    name: 'Sidi Bou Saïd',
    nameAr: 'سيدي بوسعيد',
    tagline: 'Bleu profond, chaux blanche, jasmin — l\'âme du village azur',
    bestFor: ['Fiançailles', 'Henné', 'Inauguration', 'Mariage'],
    colors: {
      bg: '#F7FBFD', bgDeep: '#0B2A4A', surface: '#FFFFFF',
      primary: '#1C5D8C', primaryDark: '#0B2A4A', accent: '#E3B23C',
      text: '#16324A', textMuted: '#5A7A91', onPrimary: '#FFFFFF',
    },
    fonts: { display: 'script', body: 'serif' },
    opening: { style: 'mashrabiya-doors', label: 'La porte bleue', hint: 'Ouvrez la porte cloutée de Sidi Bou Saïd pour entrer' },
    sound: { src: '/sounds/sidi-bou-said.mp3', label: '"Café des Délices" — mélodie instrumentale' },
    ornament: 'mashrabiya',
  },
  {
    slug: 'jardin-andalou',
    name: 'Jardin Andalou',
    nameAr: 'الحديقة الأندلسية',
    tagline: 'Mosaïques émeraude, fontaines et fleurs d\'aquarelle',
    bestFor: ['Henné', 'Fiançailles', 'Wteya', 'Anniversaire'],
    colors: {
      bg: '#F6FAF6', bgDeep: '#173B30', surface: '#FFFFFF',
      primary: '#3F7D5C', primaryDark: '#173B30', accent: '#D7A23A',
      text: '#1F3A2E', textMuted: '#5E7E6E', onPrimary: '#FFFFFF',
    },
    fonts: { display: 'script', body: 'serif' },
    opening: { style: 'bloom', label: 'La fleur qui s\'ouvre', hint: 'Touchez le bouton de fleur pour le voir éclore' },
    sound: { src: '/sounds/jardin-andalou.mp3', label: 'Oud & flûte ney — sérénade de jardin' },
    ornament: 'florals',
  },
  {
    slug: 'nuit-etoilee',
    name: 'Nuit Étoilée',
    nameAr: 'ليلة مرصّعة بالنجوم',
    tagline: 'Bleu nuit, lanternes dorées et ciel constellé',
    bestFor: ['Mariage', 'Dîner de gala', 'Anniversaire', 'Congrès'],
    colors: {
      bg: '#0E1530', bgDeep: '#05070F', surface: '#161E40',
      primary: '#E8C873', primaryDark: '#A8862F', accent: '#7C9CD9',
      text: '#F4F1E8', textMuted: '#AEB6D6', onPrimary: '#0E1530',
    },
    fonts: { display: 'script', body: 'serif' },
    opening: { style: 'curtain', label: 'Le voile de nuit', hint: 'Écartez le voile étoilé pour découvrir l\'invitation' },
    sound: { src: '/sounds/nuit-etoilee.mp3', label: 'Cordes et carillons — nocturne orientale' },
    ornament: 'stars',
  },
  {
    slug: 'rose-poudree',
    name: 'Rose Poudrée',
    nameAr: 'وردي ناعم',
    tagline: 'Botanique fine, calligraphie délicate, romantisme minimal',
    bestFor: ['Fiançailles', 'Anniversaire', 'Baby shower', 'Wteya'],
    colors: {
      bg: '#FBF4F2', bgDeep: '#5C3A3A', surface: '#FFFFFF',
      primary: '#C98A92', primaryDark: '#8C5158', accent: '#B98C5E',
      text: '#4A3A39', textMuted: '#9A7E7C', onPrimary: '#FFFFFF',
    },
    fonts: { display: 'script', body: 'serif' },
    opening: { style: 'envelope', label: 'L\'enveloppe de soie', hint: 'Décachetez l\'enveloppe pour lire l\'invitation' },
    sound: { src: '/sounds/rose-poudree.mp3', label: 'Piano & cordes — douceur romantique' },
    ornament: 'botanical',
  },
  {
    slug: 'corporate-silver',
    name: 'Corporate Silver',
    nameAr: 'فضي احترافي',
    tagline: 'Minimalisme gris-argent, ligne nette, identité de marque',
    bestFor: ['Entreprise', 'Congrès', 'Inauguration', 'Dîner de gala'],
    colors: {
      bg: '#F4F5F7', bgDeep: '#23262E', surface: '#FFFFFF',
      primary: '#8A93A6', primaryDark: '#4B5160', accent: '#2F65E0',
      text: '#23262E', textMuted: '#6B7280', onPrimary: '#FFFFFF',
    },
    fonts: { display: 'serif', body: 'sans' },
    opening: { style: 'curtain', label: 'Le rideau d\'argent', hint: 'Faites glisser pour découvrir le programme' },
    sound: { src: '/sounds/corporate-silver.mp3', label: 'Piano minimaliste — ambiance feutrée' },
    ornament: 'geometric',
  },
  {
    slug: 'toge-et-sceau',
    name: 'Toge & Sceau',
    nameAr: 'الجبة والختم',
    tagline: 'Bleu académique, sceau doré, lauriers et calligraphie',
    bestFor: ['Soutenance', 'Remise de diplôme', 'Conférence'],
    colors: {
      bg: '#F4F6FA', bgDeep: '#0E2552', surface: '#FFFFFF',
      primary: '#1B3F7A', primaryDark: '#0E2552', accent: '#C7A23A',
      text: '#16284A', textMuted: '#5C6E8C', onPrimary: '#FFFFFF',
    },
    fonts: { display: 'serif', body: 'serif' },
    opening: { style: 'wax-seal', label: 'Le sceau de l\'université', hint: 'Brisez le sceau doré pour découvrir l\'invitation' },
    sound: { src: '/sounds/toge-et-sceau.mp3', label: 'Cordes solennelles — cérémonie académique' },
    ornament: 'laurel',
  },
  {
    slug: 'petits-nuages',
    name: 'Petits Nuages',
    nameAr: 'غيوم صغيرة',
    tagline: 'Rose et bleu poudrés, ballons, confettis et douceur enfantine',
    bestFor: ['Baby shower', 'Gender reveal', 'Anniversaire enfant'],
    colors: {
      bg: '#FBF6FA', bgDeep: '#6B5B7A', surface: '#FFFFFF',
      primary: '#F2A6C0', primaryDark: '#C46E92', accent: '#9FC8E8',
      text: '#5A4A5E', textMuted: '#9A8AA0', onPrimary: '#FFFFFF',
    },
    fonts: { display: 'script', body: 'sans' },
    opening: { style: 'bloom', label: 'Le ballon surprise', hint: 'Touchez le ballon pour révéler la surprise' },
    sound: { src: '/sounds/petits-nuages.mp3', label: 'Boîte à musique — douceur enfantine' },
    ornament: 'clouds',
  },
  {
    slug: 'minimaliste',
    name: 'Trait Délicat',
    nameAr: 'لمسة رقيقة',
    tagline: 'Lignes fines, papier ivoire et illustrations à l\'encre bleu-gris',
    bestFor: ['Mariage', 'Fiançailles', 'Anniversaire', 'Inauguration'],
    colors: {
      bg: '#FBFAF7', bgDeep: '#3C4A52', surface: '#FFFFFF',
      primary: '#7C93A0', primaryDark: '#4F6470', accent: '#C7B299',
      text: '#3C4A52', textMuted: '#8A99A1', onPrimary: '#FFFFFF',
    },
    fonts: { display: 'script', body: 'sans' },
    opening: { style: 'line-veil', label: 'Le voile de lin', hint: 'Touchez le médaillon pour lever le voile et découvrir l\'invitation' },
    sound: { src: '/sounds/minimaliste.mp3', label: 'Piano & cordes — esquisse délicate' },
    ornament: 'lineart',
    layout: 'minimal',
  },
]

export function getThemeBySlug(slug: string) {
  return invitationThemes.find((t) => t.slug === slug)
}
