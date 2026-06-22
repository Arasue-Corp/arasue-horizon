"use client";
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowDownToLine, Link as LinkIcon, Trophy } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export function JosueProfile({ dict }: { dict: any }) {
  const p = dict.josue_profile
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  
  // Parallax effect on the left image
  const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0B0F19] selection:bg-[#ffcc00] selection:text-black">
      
      {/* Sticky Left Column / Background */}
      <div className="lg:fixed lg:top-0 lg:left-0 lg:w-[45vw] lg:h-screen lg:overflow-hidden relative h-[70vh] w-full">
        <motion.div style={{ y: yImage }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <Image 
            src="/leadership/josue-profile.jpg"
            alt={p.title}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            priority
            quality={100}
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </motion.div>
        {/* Gradient overlays to blend with background on mobile and right side on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0B0F19]/20 lg:to-[#0B0F19]" />
        
        {/* Hero Content Overlay (Mobile only, fades out on scroll) */}
        <motion.div 
          style={{ opacity: opacityHero }}
          className="absolute bottom-0 left-0 p-8 w-full lg:hidden z-10"
        >
          <h1 className="text-5xl font-bold tracking-tighter text-white mb-2 leading-[0.9] font-serif">{p.title}</h1>
          <p className="text-[#ffcc00] uppercase tracking-widest text-xs font-bold mt-4">{p.role}</p>
        </motion.div>
      </div>

      {/* Right Scrollable Column */}
      <div className="relative z-10 lg:ml-[45vw] lg:w-[55vw] lg:min-h-screen bg-[#0B0F19] lg:bg-transparent">
        <div className="p-6 md:p-12 lg:p-24 max-w-4xl mx-auto pt-12 lg:pt-32">
          
          <Link href="/" className="inline-flex items-center text-white/40 hover:text-white mb-16 transition-colors text-xs font-bold uppercase tracking-[0.2em] group">
            <span className="transform group-hover:-translate-x-2 transition-transform duration-300 mr-2">←</span> {p.return_horizon || 'Return to Horizon'}
          </Link>

          {/* Desktop Hero Title */}
          <div className="hidden lg:block mb-32">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl xl:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.85] font-serif"
            >
              {p.title.split(' ').map((word:string, i:number) => (
                <span key={i} className="block">{word}</span>
              ))}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-[#ffcc00] uppercase tracking-[0.3em] text-sm font-bold"
            >
              {p.role}
            </motion.p>
          </div>

          {/* Intro Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="prose prose-invert prose-lg mb-16"
          >
            <p className="text-white/80 leading-relaxed text-xl lg:text-2xl font-light">
              {p.summary}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-32"
          >
            <a 
              href="/leadership/Resume_Josue_Lopez_TPM_InsurTech_2026.docx" 
              download
              className="group relative flex items-center gap-3 bg-[#ffcc00] text-black px-8 py-4 rounded-none overflow-hidden"
            >
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <ArrowDownToLine className="w-5 h-5 relative z-10" />
              <span className="font-bold text-sm tracking-widest uppercase relative z-10">{p.download_cv}</span>
            </a>
            <a 
              href="https://linkedin.com/in/josue-techpm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-transparent text-white border border-white/20 px-8 py-4 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              <LinkIcon className="w-5 h-5" />
              <span className="font-bold text-sm tracking-widest uppercase">{p.linkedin}</span>
            </a>
          </motion.div>

          {/* Experience Timeline */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-20">
              <div className="w-12 h-[1px] bg-[#ffcc00]" />
              <h3 className="text-xl md:text-2xl font-bold tracking-widest uppercase text-white font-serif">{p.experience_title}</h3>
            </div>

            <div className="space-y-16">
              <ExperienceBlock data={p.exp_alex} index={0} />
              <ExperienceBlock data={p.exp_tesla} index={1} />
              <ExperienceBlock data={p.exp_primex} index={2} />
            </div>
          </div>

          {/* Core Competencies Grid */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-[1px] bg-[#ffcc00]" />
              <h3 className="text-xl md:text-2xl font-bold tracking-widest uppercase text-white font-serif">{p.skills_title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(p.skills_categories || {}).map(([key, label]: [string, any], i: number) => (
                <motion.div 
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.1 }}
                  className="bg-white/[0.02] border border-white/5 p-8 backdrop-blur-xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500"
                >
                  <div className="w-2 h-2 bg-[#ffcc00] mb-6 shadow-[0_0_10px_rgba(255,204,0,0.5)]" />
                  <h4 className="font-bold text-white text-lg leading-tight">{label}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technical Skills Grid */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-[1px] bg-[#ffcc00]" />
              <h3 className="text-xl md:text-2xl font-bold tracking-widest uppercase text-white font-serif">{p.tech_skills_title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PremiumSkillCard title={p.tech_skills.pm.label} items={p.tech_skills.pm.items.split(', ')} delay={0} />
              <PremiumSkillCard title={p.tech_skills.ai.label} items={p.tech_skills.ai.items.split(', ')} delay={0.1} />
              <PremiumSkillCard title={p.tech_skills.api.label} items={p.tech_skills.api.items.split(', ')} delay={0.2} />
              <PremiumSkillCard title={p.tech_skills.domain.label} items={p.tech_skills.domain.items.split(', ')} delay={0.3} />
              <PremiumSkillCard title={p.tech_skills.data.label} items={p.tech_skills.data.items.split(', ')} delay={0.4} />
              <PremiumSkillCard title={p.tech_skills.eng.label} items={p.tech_skills.eng.items.split(', ')} delay={0.5} />
            </div>
          </div>

          {/* Education */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-[1px] bg-[#ffcc00]" />
              <h3 className="text-xl md:text-2xl font-bold tracking-widest uppercase text-white font-serif">{p.education_title}</h3>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-12 border border-white/10 bg-white/[0.02] backdrop-blur-3xl hover:bg-white/[0.04] transition-colors duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffcc00]/5 rounded-full blur-3xl group-hover:bg-[#ffcc00]/10 transition-colors duration-700" />
              
              <h4 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-serif relative z-10">{p.edu_degree}</h4>
              <div className="text-[#ffcc00] text-sm font-bold uppercase tracking-widest mb-6 relative z-10">{p.edu_school}</div>
              <p className="text-white/50 text-base lg:text-lg leading-relaxed max-w-2xl relative z-10 font-light">
                {p.edu_honors}
              </p>
            </motion.div>
          </div>

          {/* Honors & Awards */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-[1px] bg-[#ffcc00]" />
              <h3 className="text-xl md:text-2xl font-bold tracking-widest uppercase text-white font-serif">{p.honors_title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {p.honors?.map((honor: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.1 }}
                  className="bg-white/[0.02] border border-white/5 p-8 backdrop-blur-xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    <Trophy className="w-6 h-6 text-[#ffcc00] mb-4 opacity-80" />
                    <h4 className="font-bold text-white mb-4 text-lg leading-tight">{honor.title}</h4>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                    <span className="text-[#ffcc00]/80 text-xs font-bold uppercase tracking-widest">{honor.issuer}</span>
                    <span className="text-white/40 font-mono text-sm">{honor.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function ExperienceBlock({ data, index }: { data: any, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
      className="group relative pl-8 md:pl-0 border-l border-white/10 md:border-none"
    >
      {/* Timeline Node Mobile */}
      <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-white/20 group-hover:bg-[#ffcc00] group-hover:shadow-[0_0_15px_rgba(255,204,0,0.5)] transition-all duration-300 md:hidden" />
      
      <div className="flex flex-col md:flex-row md:gap-12">
        <div className="md:w-1/3 mb-4 md:mb-0 md:text-right shrink-0">
          <span className="text-[#ffcc00]/60 text-sm font-bold font-mono block tracking-wider">{data.date}</span>
          <div className="text-white/40 text-xs font-bold uppercase tracking-widest mt-2 hidden md:block">{data.company}</div>
        </div>
        <div className="md:w-2/3 md:border-l md:border-white/10 md:pl-12 relative">
          {/* Timeline Node Desktop */}
          <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-white/20 group-hover:bg-[#ffcc00] group-hover:shadow-[0_0_15px_rgba(255,204,0,0.5)] transition-all duration-300 hidden md:block" />
          
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#ffcc00] transition-colors duration-500 font-serif">{data.role}</h4>
          <div className="text-[#ffcc00]/80 text-xs font-bold uppercase tracking-widest mb-6 md:hidden">{data.company}</div>
          <p className="text-white/60 leading-relaxed font-light text-lg">
            {data.desc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function PremiumSkillCard({ title, items, delay }: { title: string, items: string[], delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay }}
      className="bg-white/[0.02] border border-white/5 p-8 backdrop-blur-xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500"
    >
      <h4 className="font-bold text-white mb-6 text-xs uppercase tracking-[0.2em]">{title}</h4>
      <div className="flex flex-col gap-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#ffcc00] shrink-0 opacity-80" />
            <span className="text-white/70 text-sm tracking-wide font-light">
              {item}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
