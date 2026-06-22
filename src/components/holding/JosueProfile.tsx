"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDownToLine, Briefcase, GraduationCap, Link as LinkIcon, Blocks } from 'lucide-react'
import Link from 'next/link'

export function JosueProfile({ dict }: { dict: any }) {
  const p = dict.josue_profile

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Back Link */}
      <Link href="/" className="inline-flex items-center text-white/50 hover:text-white mb-12 transition-colors text-sm font-bold uppercase tracking-widest">
        ← Return to Holding
      </Link>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5"
        >
          <div className="aspect-[3/4] relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Image 
              src="/leadership/josue-profile.jpg"
              alt={p.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{p.title}</h1>
          <h2 className="text-xl md:text-2xl text-[#ffcc00] font-medium mb-8 leading-relaxed">
            {p.role}
          </h2>
          
          <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl mb-8 backdrop-blur-sm">
            <p className="text-white/70 leading-relaxed text-lg">
              {p.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="/leadership/Resume_Josue_Lopez_TPM_InsurTech_2026.docx" 
              download
              className="flex items-center gap-2 bg-[#ffcc00] text-[#171425] px-6 py-3 rounded-xl font-bold hover:bg-white transition-colors"
            >
              <ArrowDownToLine className="w-5 h-5" />
              {p.download_cv}
            </a>
            <a 
              href="https://linkedin.com/in/josue-techpm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors"
            >
              <LinkIcon className="w-5 h-5" />
              {p.linkedin}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Column - Experience */}
        <div className="lg:col-span-2 space-y-12">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <Briefcase className="w-6 h-6 text-[#ffcc00]" />
            <h3 className="text-2xl font-bold">{p.experience_title}</h3>
          </div>

          <div className="space-y-8">
            <ExperienceItem data={p.exp_alex} />
            <ExperienceItem data={p.exp_tesla} />
            <ExperienceItem data={p.exp_primex} />
          </div>
        </div>

        {/* Sidebar - Skills & Education */}
        <div className="space-y-12">
          {/* Skills */}
          <div>
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-8">
              <Blocks className="w-6 h-6 text-[#ffcc00]" />
              <h3 className="text-2xl font-bold">{p.skills_title}</h3>
            </div>
            <div className="flex flex-col gap-4">
              <SkillCard title={p.skills_categories.architecture} items={["Multi-Carrier API Gateway", "Zero-Trust Architecture", "RESTful APIs & Webhooks"]} />
              <SkillCard title={p.skills_categories.ai} items={["LLM Agents & Prompt Eng", "n8n Workflow Automation", "Claude & Gemini APIs"]} />
              <SkillCard title={p.skills_categories.product} items={["Enterprise SaaS Lifecycle", "Agile / Scrum / SAFe", "Go-to-Market Strategy"]} />
              <SkillCard title={p.skills_categories.domain} items={["HIPAA & SOC 2 Compliance", "P&C Insurance Core", "EHR/EMR Systems"]} />
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-8">
              <GraduationCap className="w-6 h-6 text-[#ffcc00]" />
              <h3 className="text-2xl font-bold">{p.education_title}</h3>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h4 className="font-bold text-lg mb-1">{p.edu_degree}</h4>
              <div className="text-[#ffcc00] text-sm font-bold uppercase tracking-widest mb-4">{p.edu_school}</div>
              <p className="text-white/60 text-sm leading-relaxed">
                {p.edu_honors}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ExperienceItem({ data }: { data: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
        <h4 className="text-xl font-bold text-white group-hover:text-[#ffcc00] transition-colors">{data.role}</h4>
        <span className="text-white/50 text-sm font-medium mt-1 md:mt-0 font-mono">{data.date}</span>
      </div>
      <div className="text-[#ffcc00]/80 text-sm font-bold uppercase tracking-widest mb-4">{data.company}</div>
      <p className="text-white/70 leading-relaxed text-sm md:text-base">
        {data.desc}
      </p>
    </motion.div>
  )
}

function SkillCard({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
      <h4 className="font-bold text-[#ffcc00] mb-3 text-sm uppercase tracking-wider">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span key={i} className="bg-black/30 text-white/80 text-xs px-3 py-1.5 rounded-md border border-white/5">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
