"use client"
import { useState } from 'react'

export function LabsContactForm({ dict }: { dict?: any }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-xl">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">
            First Name
          </label>
          <input 
            type="text" 
            required
            className="bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-primary transition-colors text-lg"
            placeholder="John"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">
            Last Name
          </label>
          <input 
            type="text" 
            required
            className="bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-primary transition-colors text-lg"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">
          Email Address
        </label>
        <input 
          type="email" 
          required
          className="bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-primary transition-colors text-lg"
          placeholder="john@company.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">
          Estimated Volume / Order Size
        </label>
        <select 
          required
          className="bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-primary transition-colors text-lg appearance-none rounded-none"
        >
          <option value="" disabled selected>Select volume range</option>
          <option value="samples">Samples / Small Batch</option>
          <option value="medium">Medium (100 - 500 units)</option>
          <option value="large">Large (500+ units)</option>
          <option value="custom">Custom Partnership</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">
          Message / Specific Requirements
        </label>
        <textarea 
          required
          rows={4}
          className="bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-primary transition-colors text-lg resize-none"
          placeholder="Tell us about your needs..."
        />
      </div>

      <button 
        type="submit" 
        disabled={status !== 'idle'}
        className="mt-6 px-8 py-4 bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none rounded-full"
      >
        {status === 'idle' ? 'Send Inquiry' : status === 'submitting' ? 'Sending...' : 'Inquiry Sent!'}
      </button>
    </form>
  )
}
