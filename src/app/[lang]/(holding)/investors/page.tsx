import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'

export default async function InvestorsPage({
  params
}: {
  params: { lang: string }
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="flex flex-col">
      <section className="pt-32 pb-24 px-6">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="max-w-4xl space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            {dict.corporate.investors.title}
          </h1>
          <p className="text-xl md:text-3xl mt-8 font-medium opacity-70">
            {dict.corporate.investors.content}
          </p>
        </MotionDiv>
        <MotionDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-24 w-full aspect-video bg-foreground/5 rounded-3xl overflow-hidden border border-foreground/10"
        >
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
            alt="Holding Investors" 
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
          />
        </MotionDiv>
      </section>

      <section className="py-24 px-6 border-t border-foreground/10">
        <div className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-foreground/5 rounded-3xl">
              <h3 className="text-2xl font-bold mb-2">Q3 Financial Results</h3>
              <p className="opacity-70 mb-6">Read our latest quarterly earnings report and forward-looking statements.</p>
              <button className="font-bold border-b border-foreground pb-1 active:scale-[0.97] transition-transform origin-left">Download PDF</button>
            </div>
            <div className="p-8 bg-foreground/5 rounded-3xl">
              <h3 className="text-2xl font-bold mb-2">Corporate Governance</h3>
              <p className="opacity-70 mb-6">Review our board structure, ethical guidelines, and compliance frameworks.</p>
              <button className="font-bold border-b border-foreground pb-1 active:scale-[0.97] transition-transform origin-left">View Documents</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
