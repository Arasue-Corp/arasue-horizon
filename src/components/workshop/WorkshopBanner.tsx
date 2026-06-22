"use client"

import { useState, useTransition } from 'react'
import { submitLead } from '@/app/actions/lead'
import { X } from 'lucide-react'

export function WorkshopBanner({ lang }: { lang: 'en' | 'es' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isPending, startTransition] = useTransition()

  const isEs = lang === 'es'
  const t = {
    bannerText: isEs ? '¿Quieres esta arquitectura para tu negocio?' : 'Want this architecture for your business?',
    bannerBtn: isEs ? 'Adquirir Template' : 'Get this Template',
    modalTitle: isEs ? 'Solicitar Template' : 'Request Template',
    modalDesc: isEs ? 'Ingresa tu correo para recibir los detalles técnicos y costos de implementación.' : 'Enter your email to receive technical details and implementation costs.',
    emailLabel: 'Email',
    submitBtn: isEs ? 'Solicitar Info' : 'Request Info',
    submittingBtn: isEs ? 'Enviando...' : 'Sending...',
    success: isEs ? '¡Solicitud recibida! Revisa tu bandeja de entrada pronto.' : 'Request received! Check your inbox soon.',
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    const formData = new FormData()
    formData.append('intent', 'workshop_template_request')
    formData.append('source', 'WorkshopBanner')
    formData.append('email', email)

    startTransition(async () => {
      const res = await submitLead(formData)
      if (res?.success) {
        setSubmitted(true)
        setTimeout(() => {
          setIsOpen(false)
          setSubmitted(false)
          setEmail('')
        }, 3000)
      } else {
        alert(res?.error || 'Error')
      }
    })
  }

  return (
    <>
      {/* Sticky Bottom Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black text-white border-t border-white/10 p-4 flex items-center justify-between px-6 shadow-2xl">
        <div className="text-sm md:text-base font-medium">
          {t.bannerText}
        </div>
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-white text-black px-6 py-2 text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          {t.bannerBtn}
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-md p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.success}</h3>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{t.modalTitle}</h2>
                <p className="text-white/60 mb-8 text-sm leading-relaxed">{t.modalDesc}</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2">
                      {t.emailLabel}
                    </label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      placeholder="name@company.com"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-50 mt-4"
                  >
                    {isPending ? t.submittingBtn : t.submitBtn}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
