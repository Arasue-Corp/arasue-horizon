import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'
import { LabsContactForm } from '@/components/labs/LabsContactForm'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  const title = (dict as any).labs.contact_page?.title || 'Wholesale & Partnerships'
  const description = (dict as any).labs.contact_page?.subtitle || 'Arasue Labs'

  return {
    title: `${title} | Arasue Labs`,
    description: description
  }
}

export default async function LabsContactPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="min-h-[100vh] bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Tactical Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ad102f1a_1px,transparent_1px),linear-gradient(to_bottom,#ad102f1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="flex-1 flex flex-col lg:flex-row w-full z-10 pt-24 lg:pt-0">
        {/* Left Side: Brand immersive */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative min-h-[40vh] lg:min-h-[100vh]">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
          </div>
          <MotionDiv 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="max-w-xl relative z-10"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              Arasue Labs
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-primary">
              {dict.labs.contact_page?.title || "Wholesale"}
            </h1>
            <p className="mt-6 text-xl opacity-80 leading-relaxed font-light">
              {dict.labs.contact_page?.subtitle || "Contact us for bulk orders and premium partnerships."}
            </p>

            <div className="mt-16 space-y-6 opacity-70 text-sm font-medium tracking-widest uppercase">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                APIARY FACILITIES ONLINE
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                GLOBAL DISTRIBUTION READY
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 bg-background/50 backdrop-blur-xl border-l border-foreground/10 p-8 lg:p-16 flex flex-col justify-center overflow-y-auto">
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
            className="w-full max-w-xl mx-auto"
          >
            <LabsContactForm dict={dict.labs} />
          </MotionDiv>
        </div>
      </div>
    </div>
  )
}
