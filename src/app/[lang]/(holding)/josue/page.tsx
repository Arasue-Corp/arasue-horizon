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
    <main className="bg-[#171425] min-h-screen text-white pt-32 pb-24">
      <JosueProfile dict={dict} />
    </main>
  )
}
