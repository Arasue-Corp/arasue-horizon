import { getDictionary, Locale } from '@/i18n/dictionaries'
import { LabsHero } from '@/components/labs/LabsHero'
import { LabsProducts } from '@/components/labs/LabsProducts'
import { LabsStory } from '@/components/labs/LabsStory'
import { LabsCTA } from '@/components/labs/LabsCTA'

export default async function LabsPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="flex flex-col bg-background text-foreground font-sans selection:bg-primary/30">
      <LabsHero dict={dict.labs.hero} lang={resolvedParams.lang} />
      <LabsProducts dict={dict.labs.products} />
      <LabsStory dict={dict.labs} />
      <LabsCTA dict={dict.labs} lang={resolvedParams.lang} />
    </div>
  )
}
