"use client"
import { motion } from 'framer-motion'
import { Shield, Server, Lock, AlertTriangle, ArrowRight, ShieldCheck, Database, Network, Eye, Crosshair } from 'lucide-react'
import { useState, useTransition } from 'react'
import { submitLead } from '@/app/actions/lead'

export function ProtectionClient({ lang }: { lang: 'en' | 'es' }) {
  const isEn = lang === 'en'
  const [isPending, startTransition] = useTransition()
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      await submitLead(formData)
      setIsSuccess(true)
    })
  }

  return (
    <div className="flex flex-col font-sans bg-background selection:bg-primary selection:text-primary-foreground">
      
      {/* 1. Command Center Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-border">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="container relative z-10 mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-mono uppercase tracking-widest mb-8 text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              System Online // Secure
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-foreground max-w-5xl">
              {isEn ? "Digital Resilience & Risk Management." : "Resiliencia Digital y Gestión de Riesgos."}
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mb-12 font-medium">
              {isEn 
                ? "Enterprise-grade digital protection. We audit, broker, and implement top-tier cybersecurity solutions to protect your most critical assets from the edge to the core." 
                : "Protección digital de grado corporativo. Auditamos, intermediamos e implementamos soluciones de ciberseguridad de primer nivel para proteger tus activos críticos desde el perímetro hasta el núcleo."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#solutions"
                className="px-8 py-4 bg-foreground text-background font-bold text-sm uppercase tracking-widest hover:bg-foreground/90 active:scale-[0.98] transition-all"
              >
                {isEn ? "Explore Solutions" : "Explorar Soluciones"}
              </a>
              <a 
                href="#assessment"
                className="px-8 py-4 bg-background text-foreground font-bold text-sm uppercase tracking-widest border border-border hover:bg-secondary active:scale-[0.98] transition-all"
              >
                {isEn ? "Run Risk Assessment" : "Ejecutar Auditoría"}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trusted Infrastructure (Ticker) */}
      <section className="py-8 bg-secondary/50 border-b border-border overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-xs font-mono text-center text-foreground/50 uppercase tracking-widest mb-6">
            {isEn ? "Auditing environments built on industry standards" : "Auditando entornos construidos sobre estándares de la industria"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
            <div className="text-xl font-black tracking-tighter">AWS</div>
            <div className="text-xl font-black tracking-tighter">Azure</div>
            <div className="text-xl font-black tracking-tighter">Google Cloud</div>
            <div className="text-xl font-black tracking-tighter">Cloudflare</div>
            <div className="text-xl font-black tracking-tighter">CrowdStrike</div>
          </div>
        </div>
      </section>

      {/* 3. The Hard Truths (Agitation) */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">// Threat Landscape</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
              {isEn ? "Hope is not a security strategy." : "La esperanza no es una estrategia de seguridad."}
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed font-medium mb-6">
              {isEn 
                ? "In modern business, a cyber breach isn't an 'if', it's a 'when'. Without a robust Zero-Trust architecture and a comprehensive cyber insurance policy, your operations, reputation, and balance sheet are entirely exposed." 
                : "En los negocios modernos, una brecha cibernética no es un 'si', es un 'cuándo'. Sin una arquitectura Zero-Trust robusta y una póliza de ciberseguro integral, tus operaciones, reputación y balance general están completamente expuestos."}
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
              {isEn 
                ? "We don't just sell software. We act as your strategic risk brokers, ensuring you have the exact defenses and policies required to survive catastrophic digital events." 
                : "No solo vendemos software. Actuamos como tus intermediarios estratégicos de riesgo, asegurando que tengas las defensas y pólizas exactas requeridas para sobrevivir eventos digitales catastróficos."}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono">
            <div className="p-8 border border-border bg-secondary/20">
              <div className="text-4xl font-black text-foreground mb-2">$4.5M</div>
              <div className="text-xs text-foreground/50 uppercase tracking-widest">
                {isEn ? "Avg. cost of a data breach in 2024" : "Costo prom. de brecha de datos en 2024"}
              </div>
            </div>
            <div className="p-8 border border-border bg-secondary/20">
              <div className="text-4xl font-black text-foreground mb-2">24/7</div>
              <div className="text-xs text-foreground/50 uppercase tracking-widest">
                {isEn ? "Automated Threat Monitoring" : "Monitoreo automatizado de amenazas"}
              </div>
            </div>
            <div className="p-8 border border-border bg-secondary/20">
              <div className="text-4xl font-black text-foreground mb-2">SOC 2</div>
              <div className="text-xs text-foreground/50 uppercase tracking-widest">
                {isEn ? "Compliance standard requirement" : "Requisito de estándar de cumplimiento"}
              </div>
            </div>
            <div className="p-8 border border-border bg-secondary/20">
              <div className="text-4xl font-black text-foreground mb-2">Zero</div>
              <div className="text-xs text-foreground/50 uppercase tracking-widest">
                {isEn ? "Tolerance for unverified access" : "Tolerancia para accesos no verificados"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solutions Catalog (Capabilities) */}
      <section id="solutions" className="py-32 px-6 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">// Capabilities Catalog</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter">Strategic Protection Modules</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Module 1 */}
            <motion.div whileHover={{ y: -5 }} className="bg-background border border-border p-10 hover:border-primary/50 transition-colors group flex flex-col h-full">
              <div className="w-14 h-14 bg-secondary text-foreground flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-bold mb-4">{isEn ? "Cyber Insurance Brokerage" : "Corretaje de Ciberseguros"}</h4>
              <p className="text-foreground/60 text-base leading-relaxed mb-8 flex-grow">
                {isEn 
                  ? "We connect you with premium underwriters to protect your balance sheet against ransomware, data breaches, and business interruption. Don't face extortion without financial backing." 
                  : "Te conectamos con los mejores suscriptores para proteger tu balance general contra ransomware, brechas de datos e interrupciones del negocio. No enfrentes la extorsión sin respaldo financiero."}
              </p>
              <ul className="space-y-3 text-sm font-mono text-foreground/60">
                <li>&gt; Liability & Ransomware Coverage</li>
                <li>&gt; Business Continuity Planning</li>
              </ul>
            </motion.div>

            {/* Module 2 */}
            <motion.div whileHover={{ y: -5 }} className="bg-background border border-border p-10 hover:border-primary/50 transition-colors group flex flex-col h-full">
              <div className="w-14 h-14 bg-secondary text-foreground flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Database className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-bold mb-4">{isEn ? "Data Privacy & Compliance" : "Privacidad de Datos y Cumplimiento"}</h4>
              <p className="text-foreground/60 text-base leading-relaxed mb-8 flex-grow">
                {isEn 
                  ? "End-to-end audits to ensure your infrastructure complies with global standards (GDPR, HIPAA, SOC 2). We help you pass vendor security reviews and avoid severe regulatory fines." 
                  : "Auditorías integrales para asegurar que tu infraestructura cumpla con normativas globales (GDPR, SOC 2). Te ayudamos a pasar revisiones de seguridad y evitar multas severas."}
              </p>
              <ul className="space-y-3 text-sm font-mono text-foreground/60">
                <li>&gt; SOC 2 & ISO 27001 Readiness</li>
                <li>&gt; Architecture Gap Analysis</li>
              </ul>
            </motion.div>

            {/* Module 3 */}
            <motion.div whileHover={{ y: -5 }} className="bg-background border border-border p-10 hover:border-primary/50 transition-colors group flex flex-col h-full">
              <div className="w-14 h-14 bg-secondary text-foreground flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Crosshair className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-bold mb-4">{isEn ? "Red Teaming & Pentesting" : "Red Teaming & Pentesting"}</h4>
              <p className="text-foreground/60 text-base leading-relaxed mb-8 flex-grow">
                {isEn 
                  ? "Through our specialized boutique partners, we simulate real-world cyberattacks on your infrastructure to discover critical vulnerabilities before malicious actors exploit them." 
                  : "A través de nuestros partners especializados, simulamos ciberataques reales en tu infraestructura para descubrir vulnerabilidades críticas antes de que los atacantes las exploten."}
              </p>
              <ul className="space-y-3 text-sm font-mono text-foreground/60">
                <li>&gt; Network & Application Pentesting</li>
                <li>&gt; Social Engineering Simulations</li>
              </ul>
            </motion.div>

            {/* Module 4 */}
            <motion.div whileHover={{ y: -5 }} className="bg-background border border-border p-10 hover:border-primary/50 transition-colors group flex flex-col h-full">
              <div className="w-14 h-14 bg-secondary text-foreground flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Eye className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-bold mb-4">{isEn ? "Executive Digital Protection" : "Protección Digital Ejecutiva"}</h4>
              <p className="text-foreground/60 text-base leading-relaxed mb-8 flex-grow">
                {isEn 
                  ? "CEOs and founders are prime targets. We provide continuous Dark Web monitoring, personal device hardening, and identity theft protection for your key personnel." 
                  : "Los CEOs y fundadores son blancos principales. Proveemos monitoreo continuo en la Dark Web, endurecimiento de dispositivos personales y protección contra robo de identidad."}
              </p>
              <ul className="space-y-3 text-sm font-mono text-foreground/60">
                <li>&gt; Dark Web Monitoring</li>
                <li>&gt; Executive Device Hardening</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Scenarios / Case Studies */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">// Field Reports</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter">Real Scenarios. Real Mitigation.</h3>
          </div>

          <div className="space-y-8 font-mono">
            {/* Scenario A */}
            <div className="flex flex-col md:flex-row border border-border overflow-hidden">
              <div className="bg-foreground text-background p-8 md:w-1/3 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest opacity-50 mb-4">Case Study A</span>
                <h4 className="text-2xl font-black mb-2">FinTech Series A</h4>
                <p className="text-sm opacity-80">SOC 2 Compliance Roadblocking</p>
              </div>
              <div className="bg-secondary/10 p-8 md:w-2/3">
                <h5 className="font-bold text-lg mb-2">The Incident</h5>
                <p className="text-foreground/70 font-sans mb-6">A rapidly growing payments startup was blocked from closing a $15M Series A round because enterprise clients demanded strict SOC 2 compliance that their MVP architecture couldn't pass.</p>
                
                <h5 className="font-bold text-lg mb-2">The Mitigation</h5>
                <p className="text-foreground/70 font-sans">We audited their AWS environment, implemented strict IAM controls, and brokered a rapid compliance review. They passed the audit in 45 days and secured the funding.</p>
              </div>
            </div>

            {/* Scenario B */}
            <div className="flex flex-col md:flex-row border border-border overflow-hidden">
              <div className="bg-foreground text-background p-8 md:w-1/3 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest opacity-50 mb-4">Case Study B</span>
                <h4 className="text-2xl font-black mb-2">Global E-commerce</h4>
                <p className="text-sm opacity-80">Ransomware Extortion</p>
              </div>
              <div className="bg-secondary/10 p-8 md:w-2/3">
                <h5 className="font-bold text-lg mb-2">The Incident</h5>
                <p className="text-foreground/70 font-sans mb-6">A large retailer suffered a devastating ransomware attack encrypting their core databases, demanding a $2M payout and threatening to leak customer data.</p>
                
                <h5 className="font-bold text-lg mb-2">The Mitigation</h5>
                <p className="text-foreground/70 font-sans">Because we had previously brokered a comprehensive cyber insurance policy for them, the incident response teams were fully covered. The policy covered the forensic cleanup, legal fees, and operational losses, saving the company from bankruptcy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-32 px-6 bg-secondary/20 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">// Intelligence Briefing</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-0 border-t border-border font-sans">
            <div className="py-8 border-b border-border">
              <h3 className="text-xl font-bold mb-4">Why use Arasue Protection instead of hiring a cybersecurity firm directly?</h3>
              <p className="text-foreground/70 leading-relaxed font-medium">
                Direct firms sell you their specific software or billing hours. We act as your agnostic risk architects. We assess your unique needs, identify the exact gaps, and then broker the precise insurance policies and technical solutions required, ensuring you don't overspend on unnecessary tools.
              </p>
            </div>
            <div className="py-8 border-b border-border">
              <h3 className="text-xl font-bold mb-4">Do you execute the penetration tests internally?</h3>
              <p className="text-foreground/70 leading-relaxed font-medium">
                We believe in separation of duties. We design the security architecture and broker the audits, but we utilize vetted, independent boutique hacking teams to execute the actual penetration tests to ensure completely unbiased reporting.
              </p>
            </div>
            <div className="py-8 border-b border-border">
              <h3 className="text-xl font-bold mb-4">How long does a compliance audit (like SOC 2) take?</h3>
              <p className="text-foreground/70 leading-relaxed font-medium">
                Depending on your current infrastructure, a readiness assessment takes 2-4 weeks. Full remediation and formal auditing can take anywhere from 3 to 6 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Risk Assessment Terminal */}
      <section id="assessment" className="py-32 px-6 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto bg-black/40 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl">
          {/* Terminal Header */}
          <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs font-mono text-white/40">admin@arasue-protection:~</span>
          </div>
          
          {/* Terminal Body */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-black mb-4">Initialize Risk Assessment</h2>
            <p className="text-white/60 font-mono text-sm mb-12 max-w-lg leading-relaxed">
              &gt; Secure your digital assets before a breach occurs. Run our preliminary assessment to receive a custom security and infrastructure roadmap.
            </p>

            {isSuccess ? (
              <div className="text-green-400 font-mono text-sm space-y-2">
                <p>&gt; Request transmitted securely.</p>
                <p>&gt; Our security architects will contact you shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="mt-8 text-white/50 hover:text-white underline decoration-white/30 underline-offset-4">Reset Terminal</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-mono text-sm">
                <input type="hidden" name="source" value="ProtectionClientForm" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/50">organization_name</label>
                    <input name="organization" required type="text" className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Acme Corp" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/50">corporate_email</label>
                    <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="cto@acmecorp.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/50">primary_concern</label>
                  <select name="concern" className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option className="bg-slate-900" value="Cyber Insurance Policy">Cyber Insurance Policy</option>
                    <option className="bg-slate-900" value="Compliance Audit (SOC 2 / GDPR)">Compliance Audit (SOC 2 / GDPR)</option>
                    <option className="bg-slate-900" value="Infrastructure Hardening">Infrastructure Hardening</option>
                    <option className="bg-slate-900" value="General Security Assessment">General Security Assessment</option>
                  </select>
                </div>

                <div className="pt-6">
                  <button type="submit" disabled={isPending} className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50">
                    <Lock className="w-4 h-4" />
                    {isPending ? 'Executing...' : 'Execute Query'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  )
}
