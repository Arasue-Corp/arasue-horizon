export const runtime = 'edge';
import { getDictionary, Locale } from '@/i18n/dictionaries'
import { LabsClient } from './LabsClient'

export default async function LabsPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return <LabsClient dict={dict} />
}
