export const theme = {
  colors: {
    ivory: '#FDFBF7',
    ivoryDark: '#F5F0E8',
    ivoryDeep: '#EDE4D6',
    goldLight: '#E8D9B8',
    gold: '#C5A059',
    goldDark: '#9A7A3A',
    goldDeep: '#7A5E2A',
    text: '#2C2C2C',
    textMuted: '#7A6A54',
    border: '#E8D9B8',
    white: '#FFFFFF',
  },
  fonts: {
    serif: 'var(--font-cormorant)',
    sans: 'var(--font-inter)',
    arabic: 'var(--font-amiri)',
    script: 'var(--font-great-vibes)',
  },
}

export const eventTypes = [
  { key: 'mariage', icon: '💍', color: 'from-amber-50 to-yellow-50', border: 'border-amber-200' },
  { key: 'wteya', icon: '📜', color: 'from-stone-50 to-amber-50', border: 'border-stone-200' },
  { key: 'hamam', icon: '🌸', color: 'from-pink-50 to-rose-50', border: 'border-pink-200' },
  { key: 'henna', icon: '🌿', color: 'from-emerald-50 to-teal-50', border: 'border-emerald-200' },
  { key: 'fiancailles', icon: '💎', color: 'from-blue-50 to-indigo-50', border: 'border-blue-200' },
  { key: 'anniversaire', icon: '🎂', color: 'from-purple-50 to-pink-50', border: 'border-purple-200' },
] as const
