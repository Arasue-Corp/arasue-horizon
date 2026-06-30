import { getDictionary, Locale } from '@/i18n/dictionaries'
import { HorizonContactForm } from '@/components/holding/HorizonContactForm'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  const title = dict.corporate.contact?.title || 'Global Headquarters'
  const description = dict.corporate.contact?.content || 'Partner with Arasue Horizon.'

  return {
    title: `${title} | Arasue Horizon`,
    description: description
  }
}

export default async function HoldingContactPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  const t = dict.corporate.contact

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F2F2F2] flex flex-col relative overflow-hidden">
      
      <main className="flex-grow flex flex-col lg:flex-row relative z-10 pt-20">
        {/* Left Side: Immersive Imagery & Branding */}
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-screen flex flex-col justify-end p-12 lg:p-24 overflow-hidden border-r border-white/5">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <Image 
              src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2000&auto=format&fit=crop" 
              alt="Arasue Horizon Desert Dunes" 
              fill
              className="object-cover mix-blend-screen grayscale opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-transparent to-[#0B0F19]" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#162D59]/20 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/4" />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-[#162D59]/30 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[#F2D3AC] animate-pulse" />
              <span className="text-xs font-semibold text-[#F2D3AC] tracking-widest uppercase">Contact HQ</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-playfair tracking-tighter leading-[1.1] mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-[#F2F2F2]/60 font-light max-w-md font-inter">
              {t.content}
            </p>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 mb-2">
                  <MapPin className="w-4 h-4 text-[#F2D3AC]" />
                </div>
                <p className="text-xs font-semibold text-[#F2D3AC] uppercase tracking-widest">{t.info.hq_title}</p>
                <p className="font-bold text-lg text-white max-w-[200px] leading-tight">{dict.footer.address_val}</p>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                      <Mail className="w-3 h-3 text-[#F2D3AC]" />
                    </div>
                    <p className="text-xs font-semibold text-[#F2D3AC] uppercase tracking-widest">{t.info.investors}</p>
                  </div>
                  <p className="font-bold text-lg text-white">ir@arasue.com</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                      <Mail className="w-3 h-3 text-[#F2D3AC]" />
                    </div>
                    <p className="text-xs font-semibold text-[#F2D3AC] uppercase tracking-widest">{t.info.press}</p>
                  </div>
                  <p className="font-bold text-lg text-white">press@arasue.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="lg:w-1/2 flex items-center justify-center p-6 py-24 lg:p-24 relative">
          {/* Soft glow behind the form */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#162D59]/20 to-[#A65E44]/5 blur-3xl -z-10" />
          
          <div className="w-full max-w-xl relative z-10">
            <div className="mb-10">
              <h2 className="text-3xl font-playfair font-bold tracking-tight text-white mb-3">Partner with Us</h2>
              <p className="text-[#F2F2F2]/50 font-inter">Direct your inquiries to the appropriate department.</p>
            </div>

            <div className="bg-[#131926]/80 border border-[#162D59]/50 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl">
              <HorizonContactForm dict={dict} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
