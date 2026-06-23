"use client"
import { useTransition, useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { submitLead } from '@/app/actions/lead'

export function ForgeContactForm({ dict }: { dict: any }) {
  const [isPending, startTransition] = useTransition()
  const [isSuccess, setIsSuccess] = useState(false)
  
  // Reuse the global form translations for labels
  const t = dict.corporate.contact.form

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    startTransition(async () => {
      await submitLead(formData)
      setIsSuccess(true)
    })
  }

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-12 text-center bg-[#262626] rounded-[2.5rem] border border-white/10 shadow-2xl"
      >
        <div className="w-16 h-16 bg-[#bc9665]/10 text-[#bc9665] rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-bold tracking-tighter text-white mb-2">
          {t.success_title}
        </h3>
        <p className="text-white/60 font-inter mb-8 max-w-sm mx-auto">
          {t.success_desc}
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-sm font-bold uppercase tracking-widest text-[#bc9665] hover:text-white transition-colors"
        >
          {t.success_btn}
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <input type="hidden" name="source" value="ForgeContactForm" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative group">
          <input 
            type="text" 
            name="name"
            required
            id="name"
            className="peer w-full bg-transparent border-b-2 border-white/10 px-0 py-4 text-xl text-white placeholder-transparent outline-none focus:border-[#bc9665] transition-all"
            placeholder="Jane Doe"
          />
          <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#bc9665]">
            {t.name_lbl}
          </label>
        </div>
        <div className="relative group">
          <input 
            type="email" 
            name="email"
            required
            id="email"
            className="peer w-full bg-transparent border-b-2 border-white/10 px-0 py-4 text-xl text-white placeholder-transparent outline-none focus:border-[#bc9665] transition-all"
            placeholder="jane@company.com"
          />
          <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#bc9665]">
            {t.email_lbl}
          </label>
        </div>
      </div>

      <div className="relative group">
        <select 
          name="service"
          className="w-full bg-transparent border-b-2 border-white/10 px-0 py-4 text-xl text-white outline-none focus:border-[#bc9665] transition-all appearance-none cursor-pointer"
        >
          <option value="Web App / SaaS" className="bg-[#262626]">Web App / SaaS</option>
          <option value="E-Commerce / Retail" className="bg-[#262626]">E-Commerce / Retail</option>
          <option value="Internal Enterprise Tool" className="bg-[#262626]">Internal Enterprise Tool</option>
          <option value="Mobile App" className="bg-[#262626]">Mobile App</option>
          <option value="Other" className="bg-[#262626]">Other</option>
        </select>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 group-focus-within:text-[#bc9665]">
          ▼
        </div>
        <label className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-white/50 group-focus-within:text-[#bc9665]">
          Project Scope
        </label>
      </div>

      <div className="relative group">
        <textarea 
          name="message"
          required
          id="message"
          rows={4}
          className="peer w-full bg-transparent border-b-2 border-white/10 px-0 py-4 text-xl text-white placeholder-transparent outline-none focus:border-[#bc9665] transition-all resize-none"
          placeholder="Tell us about your project requirements, timeline, and goals..."
        ></textarea>
        <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#bc9665]">
          {t.message_lbl}
        </label>
      </div>

      <button 
        type="submit" 
        disabled={isPending}
        className="w-full lg:w-auto px-12 flex items-center justify-center gap-3 bg-white text-[#0c0c0c] hover:bg-[#bc9665] py-5 rounded-full font-bold text-lg active:scale-[0.98] hover:scale-[1.02] transition-all disabled:opacity-70 disabled:active:scale-100 mt-8 shadow-xl"
      >
        {isPending ? t.btn_submitting : (
          <>
            <span>{t.btn_submit}</span>
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  )
}
