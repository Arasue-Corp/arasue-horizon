"use client"
import { useTransition, useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { submitLead } from '@/app/actions/lead'

export function HorizonContactForm({ dict }: { dict: any }) {
  const [isPending, startTransition] = useTransition()
  const [isSuccess, setIsSuccess] = useState(false)
  
  const t = dict.corporate.contact.form

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    // Convert to proper structure expected by action if needed, or send as is
    startTransition(async () => {
      // Execute the real server action
      await submitLead(formData)
      setIsSuccess(true)
    })
  }

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-12 text-center bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md"
      >
        <div className="w-16 h-16 bg-[#05F2DB]/10 text-[#05F2DB] rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-playfair font-bold text-[#F2F2F2] mb-2">
          {t.success_title}
        </h3>
        <p className="text-[#F2F2F2]/60 font-inter mb-8">
          {t.success_desc}
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-sm font-bold uppercase tracking-widest text-[#F2D3AC] hover:text-white transition-colors"
        >
          {t.success_btn}
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold tracking-wide text-[#F2F2F2]/80 px-2">{t.name_lbl}</label>
          <input 
            type="text" 
            name="name"
            required
            placeholder="John Doe"
            className="w-full bg-[#131926]/50 border border-white/10 rounded-2xl px-6 py-4 text-[#F2F2F2] placeholder-[#F2F2F2]/30 outline-none focus:border-[#F2D3AC]/50 focus:ring-4 focus:ring-[#F2D3AC]/10 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold tracking-wide text-[#F2F2F2]/80 px-2">{t.email_lbl}</label>
          <input 
            type="email" 
            name="email"
            required
            placeholder="corporate@domain.com"
            className="w-full bg-[#131926]/50 border border-white/10 rounded-2xl px-6 py-4 text-[#F2F2F2] placeholder-[#F2F2F2]/30 outline-none focus:border-[#F2D3AC]/50 focus:ring-4 focus:ring-[#F2D3AC]/10 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold tracking-wide text-[#F2F2F2]/80 px-2">{t.subject_lbl}</label>
        <select 
          name="service"
          className="w-full bg-[#131926]/50 border border-white/10 rounded-2xl px-6 py-4 text-[#F2F2F2] outline-none focus:border-[#F2D3AC]/50 focus:ring-4 focus:ring-[#F2D3AC]/10 transition-all appearance-none"
        >
          <option value="General Inquiry">General Inquiry / HQ</option>
          <option value="Investor Relations">Investor Relations</option>
          <option value="Press / Media">Press / Media</option>
          <option value="Arasue Forge">Arasue Forge</option>
          <option value="Arasue Media">Arasue Media</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold tracking-wide text-[#F2F2F2]/80 px-2">{t.message_lbl}</label>
        <textarea 
          name="message"
          required
          rows={4}
          placeholder="..."
          className="w-full bg-[#131926]/50 border border-white/10 rounded-2xl px-6 py-4 text-[#F2F2F2] placeholder-[#F2F2F2]/30 outline-none focus:border-[#F2D3AC]/50 focus:ring-4 focus:ring-[#F2D3AC]/10 transition-all resize-none"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isPending}
        className="w-full flex items-center justify-center gap-2 bg-[#F2D3AC] text-[#0B0F19] py-4 rounded-2xl font-bold uppercase tracking-widest text-sm active:scale-[0.98] hover:bg-white transition-all disabled:opacity-70 disabled:active:scale-100"
      >
        {isPending ? t.btn_submitting : (
          <>
            <span>{t.btn_submit}</span>
            <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </button>
    </form>
  )
}
