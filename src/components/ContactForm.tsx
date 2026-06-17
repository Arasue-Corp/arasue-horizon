"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-12 text-center bg-foreground/5 rounded-3xl border border-foreground/10"
      >
        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
        <p className="text-foreground/70">We will get back to you within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-sm font-bold underline hover:text-foreground/70"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold px-2">Name</label>
          <input 
            type="text" 
            required
            placeholder="John Doe"
            className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 outline-none focus:border-foreground/30 focus:ring-4 focus:ring-foreground/5 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold px-2">Email</label>
          <input 
            type="email" 
            required
            placeholder="john@example.com"
            className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 outline-none focus:border-foreground/30 focus:ring-4 focus:ring-foreground/5 transition-all"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold px-2">Subject</label>
        <select className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 outline-none focus:border-foreground/30 focus:ring-4 focus:ring-foreground/5 transition-all appearance-none">
          <option>General Inquiry</option>
          <option>Arasue Forge (Development & Ads)</option>
          <option>Arasue Media (Content Creation)</option>
          <option>Arasue Labs (Products)</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold px-2">Message</label>
        <textarea 
          required
          rows={4}
          placeholder="How can we help you?"
          className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 outline-none focus:border-foreground/30 focus:ring-4 focus:ring-foreground/5 transition-all resize-none"
        ></textarea>
      </div>
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-4 rounded-2xl font-bold active:scale-[0.98] hover:bg-foreground/90 transition-all disabled:opacity-70"
      >
        {status === 'submitting' ? 'Sending...' : (
          <>Send Message <Send className="w-4 h-4" /></>
        )}
      </button>
    </form>
  )
}
