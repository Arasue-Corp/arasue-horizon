import { getDictionary, Locale } from '@/i18n/dictionaries'
import { ForgeContactForm } from '@/components/forge/ForgeContactForm'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  return {
    title: `${dict.forge.contact_page.title} | Arasue Forge`,
    description: dict.forge.contact_page.subtitle,
  }
}

export default async function ForgeContactPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row relative overflow-hidden">
      
      {/* Left Side: Immersive Imagery & Branding */}
      <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-screen flex flex-col justify-end p-12 lg:p-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        <div className="relative z-10 text-white">
          <div className="inline-block px-4 py-2 rounded-full border border-white/20 backdrop-blur-md text-xs font-mono tracking-widest uppercase mb-8">
            Global Engineering
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
            {dict.forge.contact_page.title}
          </h1>
          <p className="text-xl text-white/80 font-medium max-w-md font-inter">
            {dict.forge.contact_page.subtitle}
          </p>

          <div className="mt-16 grid grid-cols-2 gap-8 pt-8 border-t border-white/20">
            <div>
              <p className="text-xs font-mono text-white/50 uppercase tracking-widest mb-1">Response Time</p>
              <p className="font-bold text-lg">Under 2 hours</p>
            </div>
            <div>
              <p className="text-xs font-mono text-white/50 uppercase tracking-widest mb-1">Direct Access</p>
              <p className="font-bold text-lg">Senior Architects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: The Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 py-24 lg:p-24 bg-background">
        <div className="w-full max-w-xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">Project Details</h2>
            <p className="text-foreground/60 font-inter">Fill out the form below and we will prepare a tailored engineering proposal for your company.</p>
          </div>
          <ForgeContactForm dict={dict} />
        </div>
      </div>
    </div>
  )
}
