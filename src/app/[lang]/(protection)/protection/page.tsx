import { ProtectionClient } from './ProtectionClient'

export default async function ProtectionPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params

  return <ProtectionClient lang={resolvedParams.lang as 'en' | 'es'} />
}
