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
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            {dict.corporate.investors.title}
          </h1>
          <p className="text-xl md:text-3xl mt-8 font-medium opacity-70">
            {dict.corporate.investors.content}
          </p>
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
