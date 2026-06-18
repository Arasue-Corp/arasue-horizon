import { ProtectionHero } from '@/components/protection/ProtectionHero'
import { ProtectionCoverage } from '@/components/protection/ProtectionCoverage'
import { ProtectionProcess } from '@/components/protection/ProtectionProcess'
import { ProtectionCalculator } from '@/components/protection/ProtectionCalculator'

export default async function ProtectionPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params

  return (
    <div className="flex flex-col">
      <ProtectionHero lang={resolvedParams.lang as 'en' | 'es'} />
      <div id="coverage">
        <ProtectionCoverage lang={resolvedParams.lang as 'en' | 'es'} />
      </div>
      <div id="process">
        <ProtectionProcess lang={resolvedParams.lang as 'en' | 'es'} />
      </div>
      <div className="bg-background">
        <ProtectionCalculator lang={resolvedParams.lang as 'en' | 'es'} />
      </div>
    </div>
  )
}
