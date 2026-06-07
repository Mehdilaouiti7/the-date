import { notFound } from 'next/navigation'
import { getThemeBySlug } from '@/lib/invitationThemes'
import { minimalDemoContent } from '@/lib/invitationDemoContent'
import MinimalDemo from '@/components/invitation/MinimalDemo'

export default function Page() {
  const theme = getThemeBySlug('minimaliste')
  const content = minimalDemoContent['minimaliste']
  if (!theme || !content) return notFound()
  return <MinimalDemo theme={theme} content={content} />
}
