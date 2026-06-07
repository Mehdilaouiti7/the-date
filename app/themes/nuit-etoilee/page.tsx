import { notFound } from 'next/navigation'
import { getThemeBySlug } from '@/lib/invitationThemes'
import { demoContent } from '@/lib/invitationDemoContent'
import InvitationDemo from '@/components/invitation/InvitationDemo'

export default function Page() {
  const theme = getThemeBySlug('nuit-etoilee')
  const content = demoContent['nuit-etoilee']
  if (!theme || !content) return notFound()
  return <InvitationDemo theme={theme} content={content} />
}
