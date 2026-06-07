import { notFound } from 'next/navigation'
import { getThemeBySlug } from '@/lib/invitationThemes'
import { demoContent } from '@/lib/invitationDemoContent'
import InvitationDemo from '@/components/invitation/InvitationDemo'

export default function Page() {
  const theme = getThemeBySlug('jardin-andalou')
  const content = demoContent['jardin-andalou']
  if (!theme || !content) return notFound()
  return <InvitationDemo theme={theme} content={content} />
}
