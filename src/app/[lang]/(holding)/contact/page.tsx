import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'
import { HorizonContactForm } from '@/components/holding/HorizonContactForm'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
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
    <div className="relative min-h-screen bg-[#0B0F19] text-[#F2F2F2] flex flex-col pt-32 pb-24 overflow-hidden">
      {/* Background Architectural/Global Image */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
          alt="Arasue Horizon Architecture" 
          fill
          className="object-cover mix-blend-screen"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-transparent to-[#0B0F19]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-transparent to-[#0B0F19]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl mx-auto items-center">
          
          {/* Left Column: HQ Information */}
          <MotionDiv 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="space-y-12"
          >
            <div>
              <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-[15px] text-xs font-semibold tracking-widest uppercase text-[#F2D3AC] mb-8">
                <span className="w-2 h-2 rounded-full bg-[#F2D3AC] animate-pulse" />
                <span>Contact HQ</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-playfair tracking-tight leading-tight mb-6 text-[#F2F2F2]">
                {t.title}
              </h1>
              <p className="text-xl md:text-2xl text-[#F2F2F2]/60 font-inter font-light max-w-lg">
                {t.content}
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-[#162D59]/50">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:border-[#F2D3AC] transition-colors">
                  <MapPin className="w-5 h-5 text-[#F2D3AC]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.info.hq_title}</h4>
                  <p className="text-[#F2F2F2]/60 leading-relaxed max-w-sm">
                    {dict.footer.address_val}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:border-[#F2D3AC] transition-colors">
                  <Mail className="w-5 h-5 text-[#F2D3AC]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.info.investors}</h4>
                  <p className="text-[#F2F2F2]/60 leading-relaxed">ir@arasue.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:border-[#F2D3AC] transition-colors">
                  <Mail className="w-5 h-5 text-[#F2D3AC]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.info.press}</h4>
                  <p className="text-[#F2F2F2]/60 leading-relaxed">press@arasue.com</p>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* Right Column: Contact Form */}
          <MotionDiv 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
            className="w-full relative"
          >
            {/* Soft glow behind the form */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#162D59]/40 to-[#A65E44]/10 blur-3xl -z-10 rounded-[3rem]" />
            
            <div className="bg-[#131926]/80 border border-[#162D59]/50 backdrop-blur-2xl p-8 md:p-12 rounded-3xl shadow-2xl">
              <HorizonContactForm dict={dict} />
            </div>
          </MotionDiv>

        </div>
      </div>
    </div>
  )
}
