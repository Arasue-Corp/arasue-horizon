"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { ArrowLeft, Monitor, Smartphone, ExternalLink } from 'lucide-react'

export function WorkshopFrameClient({ 
  children, 
  lang, 
  isEn 
}: { 
  children: React.ReactNode
  lang: string
  isEn: boolean 
}) {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop')
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const isIframe = searchParams.get('iframe') === 'true'

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    setIsMounted(true)
  }, [])

  // If this is the iframe itself, only render the pure children
  if (isIframe) {
    return (
      <main className="w-full min-h-screen bg-[#0A0A0B]">
        <style dangerouslySetInnerHTML={{__html: `
          ::-webkit-scrollbar { 
            display: none !important; 
            width: 0 !important; 
            height: 0 !important; 
          }
          html, body, * { 
            scrollbar-width: none !important; 
            -ms-overflow-style: none !important; 
          }
        `}} />
        {children}
      </main>
    )
  }

  return (
    <>
      {/* Ultra Premium Preview Control Bar (Frosted Glass) */}
      <header className="fixed top-0 left-0 right-0 h-14 w-full bg-white/80 backdrop-blur-md text-black flex items-center justify-between px-4 sm:px-8 text-sm font-medium z-[999] border-b border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        
        {/* Left: Back Navigation */}
        <div className="flex items-center gap-6">
          <Link 
            href={`/${lang}/workshop`}
            className="flex items-center gap-2 text-black/50 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">{isEn ? "Back to Workshop" : "Volver al Workshop"}</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-3 border-l border-black/10 pl-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[11px] font-mono text-black/40 uppercase tracking-widest">
              Arasue Forge Preview
            </span>
          </div>
        </div>

        {/* Center: Device Toggles */}
        <div className="hidden lg:flex items-center gap-2 bg-black/5 p-1 rounded-full border border-black/5">
          <button 
            onClick={() => setView('desktop')}
            className={`p-1.5 px-3 rounded-full flex items-center gap-2 text-xs font-semibold transition-all ${
              view === 'desktop' ? 'bg-white shadow-sm text-black' : 'text-black/40 hover:text-black'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            Desktop
          </button>
          <button 
            onClick={() => setView('mobile')}
            className={`p-1.5 px-3 rounded-full flex items-center gap-2 text-xs font-semibold transition-all ${
              view === 'mobile' ? 'bg-white shadow-sm text-black' : 'text-black/40 hover:text-black'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            Mobile
          </button>
        </div>

        {/* Right: Call to Action */}
        <div className="flex items-center gap-3">
          <Link 
            href={`/${lang}/forge/contact`}
            className="flex items-center gap-2 px-5 py-2 bg-black text-white text-xs font-bold rounded-full hover:bg-black/80 hover:scale-[0.98] transition-all shadow-md"
          >
            <span>{isEn ? "Deploy Architecture" : "Desplegar Arquitectura"}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </Link>
        </div>
      </header>
      
      {/* Main Content Area */}
      <main className="flex-1 w-full relative pt-14 bg-neutral-100 flex flex-col items-center justify-center overflow-x-hidden min-h-screen">
        {view === 'desktop' ? (
          <div className="w-full bg-white shadow-2xl relative min-h-screen">
            {children}
          </div>
        ) : (
          /* Mobile View Wrapper simulating an iPhone dimensions using an iframe to trigger CSS media queries */
          <div className="relative w-[375px] h-[812px] my-8 bg-black rounded-[3rem] p-3 shadow-[0_0_50px_rgba(0,0,0,0.15)] ring-1 ring-black/10 overflow-hidden flex flex-col">
            {/* Notch Mock */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50 flex justify-center items-end pb-1 gap-2">
              <div className="w-12 h-1.5 bg-[#111] rounded-full" />
              <div className="w-1.5 h-1.5 bg-[#111] rounded-full" />
            </div>
            {/* Screen */}
            <div className="flex-1 bg-white rounded-[2.25rem] overflow-hidden relative">
              {isMounted && (
                <iframe 
                  src={`${pathname}?iframe=true`} 
                  className="w-full h-full border-none"
                  title="Mobile Preview"
                />
              )}
            </div>
          </div>
        )}
      </main>
    </>
  )
}
