"use client"
import { useState } from 'react'

const dict = {
  usa: {
    title: 'Investor Relations',
    subtitle: 'Request access to our quarterly thesis and financial disclosures.',
    name: 'Full Name',
    firm: 'Firm / Organization',
    email: 'Corporate Email',
    type: 'Investor Type',
    types: ['Venture Capital', 'Private Equity', 'Family Office', 'Angel / Individual', 'Other'],
    submit: 'Request Access',
    success: 'Request Received. Our IR team will review and respond shortly.'
  },
  mex: {
    title: 'Relaciones con Inversores',
    subtitle: 'Solicita acceso a nuestra tesis trimestral y divulgaciones financieras.',
    name: 'Nombre Completo',
    firm: 'Firma / Organización',
    email: 'Correo Corporativo',
    type: 'Tipo de Inversor',
    types: ['Capital de Riesgo', 'Capital Privado', 'Family Office', 'Ángel / Individual', 'Otro'],
    submit: 'Solicitar Acceso',
    success: 'Solicitud Recibida. Nuestro equipo revisará y responderá en breve.'
  }
}

export function HorizonInvestorForm({ lang }: { lang: 'en' | 'es' }) {
  const isMexico = lang === 'es'
  const t = dict[isMexico ? 'mex' : 'usa']
  
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-black text-white p-16 text-center">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-medium">{t.success}</h3>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.title}</h2>
        <p className="text-neutral-500">{t.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">{t.name}</label>
            <input required type="text" className="w-full bg-transparent border-b border-neutral-300 py-4 focus:outline-none focus:border-black transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">{t.firm}</label>
            <input required type="text" className="w-full bg-transparent border-b border-neutral-300 py-4 focus:outline-none focus:border-black transition-colors" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">{t.email}</label>
          <input required type="email" className="w-full bg-transparent border-b border-neutral-300 py-4 focus:outline-none focus:border-black transition-colors" />
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">{t.type}</label>
          <div className="flex flex-wrap gap-4">
            {t.types.map(type => (
              <label key={type} className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="investor_type" required className="accent-black w-4 h-4" />
                <span className="text-neutral-500 group-hover:text-black transition-colors">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-8">
          <button type="submit" className="w-full py-5 bg-black text-white font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors">
            {t.submit}
          </button>
        </div>
      </form>
    </div>
  )
}
