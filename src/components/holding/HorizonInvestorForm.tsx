"use client"
import { useState, useTransition } from 'react'
import { submitLead } from '@/app/actions/lead'

export function HorizonInvestorForm({ dict }: { dict: any }) {
  const t = dict.horizon.investor_form
  const types = [t.type_vc, t.type_pe, t.type_fo, t.type_angel, t.type_other]
  
  const [submitted, setSubmitted] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    formData.append('intent', 'investor_relations')
    
    startTransition(async () => {
      const res = await submitLead(formData)
      if (res?.success) {
        setSubmitted(true)
      } else {
        alert(res?.error || 'Error processing request')
      }
    })
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
            <input name="name" required type="text" className="w-full bg-transparent border-b border-neutral-300 py-4 focus:outline-none focus:border-black transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">{t.firm}</label>
            <input name="firm" required type="text" className="w-full bg-transparent border-b border-neutral-300 py-4 focus:outline-none focus:border-black transition-colors" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">{t.email}</label>
          <input name="email" required type="email" className="w-full bg-transparent border-b border-neutral-300 py-4 focus:outline-none focus:border-black transition-colors" />
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">{t.type}</label>
          <div className="flex flex-wrap gap-4">
            {types.map(type => (
              <label key={type} className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="investor_type" value={type} required className="accent-black w-4 h-4" />
                <span className="text-neutral-500 group-hover:text-black transition-colors">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-8">
          <button type="submit" disabled={isPending} className="w-full py-5 bg-black text-white font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors disabled:opacity-50">
            {isPending ? t.submitting : t.submit}
          </button>
        </div>
      </form>
    </div>
  )
}
