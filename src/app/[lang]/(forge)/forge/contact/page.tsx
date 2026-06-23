import { getDictionary, Locale } from '@/i18n/dictionaries'
import { ForgeContactForm } from '@/components/forge/ForgeContactForm'
import { Video } from 'lucide-react'
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
    <div className="min-h-screen bg-[#0c0c0c] text-white flex flex-col relative overflow-hidden">
      
      <main className="flex-grow flex flex-col lg:flex-row relative z-10 pt-20">
        {/* Left Side: Immersive Imagery & Branding */}
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-screen flex flex-col justify-end p-12 lg:p-24 overflow-hidden border-r border-white/5">
          <div className="absolute inset-0 z-0">
            {/* Tactical Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#a67d48]/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#262626] blur-[120px] rounded-full pointer-events-none -translate-x-1/4 translate-y-1/4" />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-[#262626]/50 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[#bc9665] animate-pulse" />
              <span className="text-xs font-mono text-[#bc9665] tracking-widest uppercase">System Online</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
              {dict.forge.contact_page.title}
            </h1>
            <p className="text-xl text-white/60 font-medium max-w-md font-inter">
              {dict.forge.contact_page.subtitle}
            </p>

            <div className="mt-16 grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-xs font-mono text-[#bc9665] uppercase tracking-widest mb-2">Response Time</p>
                <p className="font-bold text-lg text-white">Under 2 hours</p>
              </div>
              <div>
                <p className="text-xs font-mono text-[#bc9665] uppercase tracking-widest mb-2">Direct Access</p>
                <p className="font-bold text-lg text-white">Senior Architects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="lg:w-1/2 flex items-center justify-center p-6 py-24 lg:p-24 relative">
          <div className="w-full max-w-xl relative z-10">
            <div className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-3">Project Details</h2>
              <p className="text-white/50 font-inter">Fill out the form below and we will prepare a tailored engineering proposal for your company.</p>
            </div>

            <div className="mb-10 p-6 md:p-8 rounded-2xl border border-white/10 bg-[#262626]/50 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-[#bc9665]/30 transition-colors">
               <div className="text-center sm:text-left">
                  <h3 className="font-bold text-lg text-white mb-1">Prefer to talk directly?</h3>
                  <p className="text-sm text-white/50 font-inter">Schedule a 30-min discovery video call with our architects.</p>
               </div>
               <a href="#" className="flex-shrink-0 px-6 py-3 rounded-full bg-[#bc9665] text-[#0c0c0c] font-bold text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(188,150,101,0.2)]">
                 <Video className="w-4 h-4" />
                 Book Call
               </a>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-[1px] bg-white/10"></div>
              <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Or write to us</span>
              <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>

            <ForgeContactForm dict={dict} />
          </div>
        </div>
      </main>
    </div>
  )
}
