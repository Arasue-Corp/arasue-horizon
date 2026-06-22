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
        className="flex flex-col items-center justify-center p-12 text-center bg-secondary/50 rounded-[2.5rem] border border-border"
      >
        <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-bold tracking-tighter text-foreground mb-2">
          {t.success_title}
        </h3>
        <p className="text-foreground/60 font-inter mb-8 max-w-sm mx-auto">
          {t.success_desc}
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-sm font-bold uppercase tracking-widest text-accent hover:text-foreground transition-colors"
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
            className="peer w-full bg-transparent border-b-2 border-foreground/10 px-0 py-4 text-xl text-foreground placeholder-transparent outline-none focus:border-foreground transition-all"
            placeholder="Jane Doe"
          />
          <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground/40 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-foreground/50">
            {t.name_lbl}
          </label>
        </div>
        <div className="relative group">
          <input 
            type="email" 
            name="email"
            required
            id="email"
            className="peer w-full bg-transparent border-b-2 border-foreground/10 px-0 py-4 text-xl text-foreground placeholder-transparent outline-none focus:border-foreground transition-all"
            placeholder="jane@company.com"
          />
          <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground/40 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-foreground/50">
            {t.email_lbl}
          </label>
        </div>
      </div>

      <div className="relative group">
        <select 
          name="service"
          className="w-full bg-transparent border-b-2 border-foreground/10 px-0 py-4 text-xl text-foreground outline-none focus:border-foreground transition-all appearance-none cursor-pointer"
        >
          <option value="Web App / SaaS">Web App / SaaS</option>
          <option value="E-Commerce / Retail">E-Commerce / Retail</option>
          <option value="Internal Enterprise Tool">Internal Enterprise Tool</option>
          <option value="Mobile App">Mobile App</option>
          <option value="Other">Other</option>
        </select>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/40">
          ▼
        </div>
        <label className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-foreground/50">
          Project Scope
        </label>
      </div>

      <div className="relative group">
        <textarea 
          name="message"
          required
          id="message"
          rows={4}
          className="peer w-full bg-transparent border-b-2 border-foreground/10 px-0 py-4 text-xl text-foreground placeholder-transparent outline-none focus:border-foreground transition-all resize-none"
          placeholder="Tell us about your project requirements, timeline, and goals..."
        ></textarea>
        <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground/40 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-foreground/50">
          {t.message_lbl}
        </label>
      </div>

      <button 
        type="submit" 
        disabled={isPending}
        className="w-full lg:w-auto px-12 flex items-center justify-center gap-3 bg-foreground text-background py-5 rounded-full font-bold text-lg active:scale-[0.98] hover:scale-[1.02] transition-all disabled:opacity-70 disabled:active:scale-100 mt-8"
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
