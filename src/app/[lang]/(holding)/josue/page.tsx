import { getDictionary, type Locale } from '@/i18n/dictionaries'
import { JosueProfile } from '@/components/holding/JosueProfile'

export default async function JosueProfilePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  return (
    <main className="bg-[#0B0F19] min-h-screen text-white">
      <JosueProfile dict={dict} />
    </main>
  )
}
