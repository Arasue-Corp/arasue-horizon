"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Hammer, Ruler, Grid, ChevronRight, Star, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { srv: 'Craft', port: 'Gallery', proc: 'Process', faq: 'FAQ', est: 'Estimator', book: 'Consultation' },
    hero: { 
      t1: 'Shaped by Hand.', 
      t2: 'Built for Generations.', 
      p: 'Bespoke architectural millwork, custom cabinetry, and heritage woodwork for discerning estates and boutiques.',
      btn1: 'Commission a Piece',
      btn2: 'View Gallery'
    },
    trust: 'Featured in Architectural Digest',
    srv: {
      title: 'Our Craft',
      p: 'Where traditional joinery meets modern precision engineering.',
      items: [
        { icon: Hammer, title: "Custom Cabinetry", desc: "Solid wood kitchens and built-ins perfectly tailored to your architectural space." },
        { icon: Ruler, title: "Architectural Millwork", desc: "Crown molding, wainscoting, and custom trim that defines luxury interiors." },
        { icon: Grid, title: "Heritage Doors", desc: "Grand entryways and interior doors crafted from exotic and domestic hardwoods." }
      ]
    },
    portfolio: {
      title: 'Masterworks Gallery',
      p: 'Explore our latest commissions across luxury residential and commercial spaces.',
      filters: ['All', 'Cabinetry', 'Millwork', 'Doors'],
      items: [
        { cat: 'Cabinetry', title: 'The Aspen Kitchen', desc: 'Rift-sawn white oak with hand-rubbed oil finish.', img: 'https://placehold.co/800x1000/2A1B12/FDFBF7?text=Oak+Kitchen' },
        { cat: 'Doors', title: 'Estate Entryway', desc: 'Solid walnut arched double doors with custom ironwork.', img: 'https://placehold.co/800x600/3E2723/FDFBF7?text=Walnut+Doors' },
        { cat: 'Millwork', title: 'Library Coffered Ceiling', desc: 'Mahogany ceiling grid with integrated indirect lighting.', img: 'https://placehold.co/800x600/1C120C/FDFBF7?text=Coffered+Ceiling' },
        { cat: 'Cabinetry', title: 'Penthouse Wardrobe', desc: 'Floor-to-ceiling ebonized ash with brass inlay.', img: 'https://placehold.co/800x1000/111111/FDFBF7?text=Wardrobe' }
      ]
    },
    process: {
      title: 'The Commission',
      p: 'A collaborative journey from raw timber to finished masterpiece.',
      steps: [
        { num: 'I', title: 'Design & Drafting', desc: 'We begin with hand sketches, evolving into exact 3D CAD models to ensure perfect spatial harmony.' },
        { num: 'II', title: 'Timber Selection', desc: 'Clients are invited to our shop to select the exact slabs and flitches used for their project.' },
        { num: 'III', title: 'Fabrication', desc: 'Traditional mortise-and-tenon joinery combined with CNC precision in our climate-controlled studio.' },
        { num: 'IV', title: 'White-Glove Install', desc: 'Our master carpenters personally deliver and scribe every piece to fit your home seamlessly.' }
      ]
    },
    testimonials: {
      title: 'Words from Patrons',
      items: [
        { name: 'Eleanor H.', role: 'Interior Architect', text: '"Oak & Iron does not just build cabinets; they create furniture that happens to be attached to the walls. Their understanding of grain matching is unparalleled."' },
        { name: 'James L.', role: 'Homeowner', text: '"The mahogany library they built for me is the centerpiece of my home. It feels like it has been there for a century. True artisans."' }
      ]
    },
    faq: {
      title: 'Curiosities & Details',
      items: [
        { q: 'How do you handle wood movement?', a: 'Solid wood breathes. We engineer all our pieces with floating panels and precise tolerances to allow for seasonal expansion and contraction without cracking.' },
        { q: 'What finishes do you use?', a: 'We specialize in hand-rubbed oils and hard-wax finishes that nourish the wood and age gracefully, rather than trapping it under plastic-like polyurethanes.' },
        { q: 'How long does a custom kitchen take?', a: 'A fully bespoke kitchen typically requires 8-12 weeks in our shop after final design approval. Quality cannot be rushed.' }
      ]
    },
    quote: {
      title: 'Investment Guide',
      p: 'Estimate your millwork based on linear footage and material selection.',
      areaTitle: 'Linear Footage',
      areaUnit: 'ft',
      areaMin: 'Small Built-in (10ft)',
      areaMax: 'Full Library (100ft+)',
      reqTitle: 'Material & Finish',
      reqOptions: [
        { id: 'paint', label: 'Paint-Grade (Poplar/MDF)' },
        { id: 'hardwood', label: 'Domestic (Oak/Walnut)' },
        { id: 'exotic', label: 'Exotic / Quartersawn' }
      ],
      totalTitle: 'Estimated Investment',
      totalDesc: '*Includes shop drawing, fabrication, and standard finishing. Delivery and installation quoted separately.',
      ctaTitle: 'Request Consultation',
      ctaBtn: 'Begin the Dialogue'
    },
    footer: {
      desc: 'Preserving the soul of woodworking through uncompromising craftsmanship.',
      contact: 'Atelier',
      legal: 'Details',
      rights: '© 2026 Arasue Forge LLC. All rights reserved.',
      tag: 'Carved in history.'
    }
  },
  mex: {
    nav: { srv: 'Arte', port: 'Galería', proc: 'Proceso', faq: 'FAQ', est: 'Estimador', book: 'Consultoría' },
    hero: { 
      t1: 'Tallado a Mano.', 
      t2: 'Hecho para Siempre.', 
      p: 'Carpintería arquitectónica a medida y ebanistería patrimonial para residencias y boutiques exigentes.',
      btn1: 'Comisionar una Pieza',
      btn2: 'Ver Galería'
    },
    trust: 'Destacado en Architectural Digest',
    srv: {
      title: 'Nuestro Oficio',
      p: 'Donde el ensamble tradicional se encuentra con la ingeniería de precisión moderna.',
      items: [
        { icon: Hammer, title: "Ebanistería a Medida", desc: "Cocinas de madera maciza y muebles empotrados perfectamente adaptados a tu espacio." },
        { icon: Ruler, title: "Carpintería Arquitectónica", desc: "Molduras, zoclos y recubrimientos personalizados que definen interiores de lujo." },
        { icon: Grid, title: "Puertas Patrimoniales", desc: "Entradas monumentales y puertas interiores elaboradas con maderas exóticas." }
      ]
    },
    portfolio: {
      title: 'Galería de Obras Maestras',
      p: 'Explora nuestras comisiones recientes en espacios residenciales y comerciales de lujo. Filtra por categoría.',
      filters: ['Todos', 'Ebanisteria', 'Molduras', 'Puertas'],
      items: [
        { cat: 'Ebanisteria', title: 'La Cocina Aspen', desc: 'Roble blanco con acabado al aceite frotado a mano.', img: 'https://placehold.co/800x1000/2A1B12/FDFBF7?text=Cocina+de+Roble' },
        { cat: 'Puertas', title: 'Entrada Principal', desc: 'Puertas dobles arqueadas de nogal sólido con herrajes personalizados.', img: 'https://placehold.co/800x600/3E2723/FDFBF7?text=Puertas+de+Nogal' },
        { cat: 'Molduras', title: 'Techo Artesonado', desc: 'Retícula de techo en caoba con iluminación indirecta integrada.', img: 'https://placehold.co/800x600/1C120C/FDFBF7?text=Techo+Artesonado' },
        { cat: 'Ebanisteria', title: 'Armario Penthouse', desc: 'Fresno ebonizado de piso a techo con incrustaciones de latón.', img: 'https://placehold.co/800x1000/111111/FDFBF7?text=Armario' }
      ]
    },
    process: {
      title: 'La Comisión',
      p: 'Un viaje colaborativo desde la madera en bruto hasta la obra maestra terminada.',
      steps: [
        { num: 'I', title: 'Diseño y Dibujo', desc: 'Comenzamos con bocetos a mano, evolucionando a modelos CAD 3D exactos para asegurar la armonía espacial.' },
        { num: 'II', title: 'Selección de Madera', desc: 'Invitamos a los clientes a nuestro taller para seleccionar las placas exactas utilizadas en su proyecto.' },
        { num: 'III', title: 'Fabricación', desc: 'Ensamble tradicional de caja y espiga combinado con precisión CNC en nuestro estudio climatizado.' },
        { num: 'IV', title: 'Instalación de Lujo', desc: 'Nuestros maestros carpinteros entregan y ajustan personalmente cada pieza para que encaje perfectamente en su hogar.' }
      ]
    },
    testimonials: {
      title: 'Palabras de Mecenas',
      items: [
        { name: 'Eleanor H.', role: 'Arquitecta de Interiores', text: '"Oak & Iron no solo construye gabinetes; crean muebles que casualmente están unidos a las paredes. Su comprensión de las vetas es inigualable."' },
        { name: 'James L.', role: 'Propietario', text: '"La biblioteca de caoba que construyeron para mí es el centro de mi hogar. Se siente como si hubiera estado allí por un siglo. Verdaderos artesanos."' }
      ]
    },
    faq: {
      title: 'Curiosidades y Detalles',
      items: [
        { q: '¿Cómo manejan el movimiento de la madera?', a: 'La madera sólida respira. Diseñamos todas nuestras piezas con paneles flotantes y tolerancias precisas para permitir la expansión estacional sin agrietarse.' },
        { q: '¿Qué acabados utilizan?', a: 'Nos especializamos en aceites frotados a mano y ceras duras que nutren la madera y envejecen con gracia, en lugar de atraparla bajo poliuretanos plásticos.' },
        { q: '¿Cuánto tiempo toma una cocina a medida?', a: 'Una cocina totalmente personalizada generalmente requiere de 8 a 12 semanas en nuestro taller después de la aprobación final del diseño. La calidad no se puede apresurar.' }
      ]
    },
    quote: {
      title: 'Guía de Inversión',
      p: 'Estima tu ebanistería basándote en metros lineales y la selección de materiales.',
      areaTitle: 'Metros Lineales',
      areaUnit: 'm',
      areaMin: 'Empotrado Peq. (3m)',
      areaMax: 'Biblioteca (30m+)',
      reqTitle: 'Material y Acabado',
      reqOptions: [
        { id: 'paint', label: 'Para Pintar (Álamo/MDF)' },
        { id: 'hardwood', label: 'Nacional (Roble/Nogal)' },
        { id: 'exotic', label: 'Exótico / Corte Fino' }
      ],
      totalTitle: 'Inversión Estimada',
      totalDesc: '*Incluye plano de taller, fabricación y acabado estándar. Entrega e instalación se cotizan por separado.',
      ctaTitle: 'Solicitar Consultoría',
      ctaBtn: 'Iniciar el Diálogo'
    },
    footer: {
      desc: 'Preservando el alma de la ebanistería a través de una artesanía intransigente.',
      contact: 'Atelier',
      legal: 'Detalles',
      rights: '© 2026 Arasue Forge LLC. Todos los derechos reservados.',
      tag: 'Tallado en la historia.'
    }
  }
}

export function Carpentry() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [length, setLength] = useState(30) 
  const [material, setMaterial] = useState('hardwood')
  const [isCalculating, setIsCalculating] = useState(false)
  const [filter, setFilter] = useState('All')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  
  const reduce = useReducedMotion()
  const t = dict[region]

  const toggleRegion = () => {
    setIsCalculating(true)
    setTimeout(() => {
      if (region === 'usa') {
        setRegion('mex')
        setLength(Math.round(length / 3.28084))
        setFilter('Todos')
      } else {
        setRegion('usa')
        setLength(Math.round(length * 3.28084))
        setFilter('All')
      }
      setIsCalculating(false)
    }, 300)
  }

  const handleMaterialChange = (val: string) => {
    setIsCalculating(true)
    setTimeout(() => {
      setMaterial(val)
      setIsCalculating(false)
    }, 200)
  }

  const getPrice = () => {
    let pricePerUnit = 0;
    if (material === 'paint') pricePerUnit = region === 'usa' ? 800 : 2600;
    if (material === 'hardwood') pricePerUnit = region === 'usa' ? 1500 : 4900;
    if (material === 'exotic') pricePerUnit = region === 'usa' ? 2500 : 8200;
    
    return length * pricePerUnit;
  }

  const filteredPortfolio = filter === 'All' || filter === 'Todos' 
    ? t.portfolio.items 
    : t.portfolio.items.filter(item => item.cat === filter || 
      (filter === 'Ebanisteria' && item.cat === 'Cabinetry') || 
      (filter === 'Molduras' && item.cat === 'Millwork') || 
      (filter === 'Puertas' && item.cat === 'Doors'))

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2A1B12] font-serif selection:bg-[#5C3A21] selection:text-[#FDFBF7]">
      {/* Navigation - Editorial */}
      <nav className="w-full bg-[#FDFBF7] border-b border-[#E8E1D5] sticky top-0 z-40">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <div className="font-bold text-3xl tracking-tight">
            OAK <span className="font-light italic text-[#8B7355]">&</span> IRON
          </div>
          <div className="hidden lg:flex gap-10 text-sm tracking-[0.2em] uppercase text-[#5C3A21]">
            <a href="#services" className="hover:text-[#8B7355] transition-colors duration-300">{t.nav.srv}</a>
            <a href="#portfolio" className="hover:text-[#8B7355] transition-colors duration-300">{t.nav.port}</a>
            <a href="#process" className="hover:text-[#8B7355] transition-colors duration-300">{t.nav.proc}</a>
            <a href="#quote" className="hover:text-[#8B7355] transition-colors duration-300">{t.nav.est}</a>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleRegion}
              className="font-sans text-xs font-bold tracking-widest uppercase text-[#8B7355] hover:text-[#2A1B12] transition-colors active:scale-95"
            >
              {region === 'usa' ? 'USA' : 'MEX'}
            </button>
            <a href="#quote" className="hidden sm:inline-block border border-[#2A1B12] text-[#2A1B12] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#2A1B12] hover:text-[#FDFBF7] transition-all duration-300">
              {t.nav.book}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-6 relative">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-sans text-[#8B7355] tracking-[0.3em] uppercase text-xs mb-8">
              {t.trust}
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[0.9] mb-8 text-[#1A110B]">
              {t.hero.t1}<br/>
              <span className="italic text-[#5C3A21]">{t.hero.t2}</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5C3A21] mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              {t.hero.p}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center font-sans">
              <a href="#quote" className="bg-[#2A1B12] text-[#FDFBF7] px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#1A110B] transition-colors duration-300">
                {t.hero.btn1}
              </a>
              <a href="#portfolio" className="border border-[#E8E1D5] text-[#2A1B12] px-10 py-4 text-sm tracking-[0.2em] uppercase hover:border-[#2A1B12] transition-colors duration-300">
                {t.hero.btn2}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Break */}
      <section className="px-6 pb-24">
        <div className="container mx-auto">
          <div className="w-full aspect-[21/9] bg-[#2A1B12] overflow-hidden">
             <img src="https://placehold.co/1600x600/2A1B12/FDFBF7?text=Woodshop+Details" alt="Woodshop" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-[2s] ease-out" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[#F4EFE6]">
        <div className="container mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-[#1A110B]">{t.srv.title}</h2>
            <p className="text-xl text-[#5C3A21] font-light italic">{t.srv.p}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.srv.items.map((srv, i) => {
              const Icon = srv.icon
              return (
                <div key={i} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-[#D5C6B1] mb-8 group-hover:border-[#8B7355] transition-colors duration-500">
                    <Icon className="w-8 h-8 text-[#5C3A21]" strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-normal mb-4 text-[#1A110B]">{srv.title}</h3>
                  <p className="text-[#5C3A21] font-sans leading-relaxed">{srv.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* V2: Portfolio Section */}
      <section id="portfolio" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-[#1A110B]">{t.portfolio.title}</h2>
            <p className="text-xl text-[#5C3A21] font-light italic max-w-2xl mb-12">{t.portfolio.p}</p>
            
            <div className="flex flex-wrap justify-center gap-6 font-sans">
              {t.portfolio.filters.map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-sm tracking-[0.2em] uppercase pb-2 border-b-2 transition-colors ${filter === f ? 'border-[#2A1B12] text-[#2A1B12]' : 'border-transparent text-[#8B7355] hover:text-[#2A1B12]'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {filteredPortfolio.map((item, i) => (
              <div key={i} className="break-inside-avoid group cursor-pointer">
                <div className="relative overflow-hidden mb-4">
                  <img src={item.img} alt={item.title} className="w-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out" />
                </div>
                <div>
                  <span className="font-sans text-[#8B7355] text-xs tracking-[0.2em] uppercase mb-2 block">{item.cat}</span>
                  <h3 className="text-2xl text-[#1A110B] mb-2">{item.title}</h3>
                  <p className="font-sans text-[#5C3A21] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: The Process */}
      <section id="process" className="py-32 px-6 bg-[#2A1B12] text-[#FDFBF7]">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-[#E8E1D5]">{t.process.title}</h2>
            <p className="text-xl text-[#8B7355] font-light italic">{t.process.p}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {t.process.steps.map((step, i) => (
              <div key={i} className="border-t border-[#5C3A21] pt-8">
                <span className="font-sans text-[#8B7355] tracking-[0.2em] uppercase mb-4 block">Fase {step.num}</span>
                <h3 className="text-2xl font-normal mb-4 text-[#E8E1D5]">{step.title}</h3>
                <p className="font-sans text-[#A89886] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: Social Proof / Testimonials */}
      <section className="py-32 px-6 bg-[#F4EFE6]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Star className="w-8 h-8 text-[#8B7355] mx-auto mb-12" strokeWidth={1} />
            <h2 className="text-3xl md:text-4xl font-normal text-[#1A110B] mb-16">{t.testimonials.title}</h2>
            
            <div className="space-y-16">
              {t.testimonials.items.map((test, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl text-[#5C3A21] font-light italic leading-relaxed mb-8">
                    {test.text}
                  </p>
                  <div className="font-sans">
                    <h4 className="font-bold text-[#1A110B] uppercase tracking-widest text-sm mb-1">{test.name}</h4>
                    <p className="text-[#8B7355] text-xs tracking-widest uppercase">{test.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* V2: FAQ */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-normal text-[#1A110B] mb-16 text-center">{t.faq.title}</h2>
          <div className="border-t border-[#E8E1D5]">
            {t.faq.items.map((item, i) => (
              <div key={i} className="border-b border-[#E8E1D5]">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-8 text-left group"
                >
                  <span className="font-normal text-xl text-[#2A1B12] group-hover:text-[#8B7355] transition-colors">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#8B7355] transform transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                  <p className="font-sans text-[#5C3A21] leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="quote" className="py-24 px-6 bg-[#FDFBF7]">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto border border-[#E8E1D5] bg-white flex flex-col md:flex-row">
            
            <div className="flex-1 p-12 lg:p-20 border-b md:border-b-0 md:border-r border-[#E8E1D5]">
              <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-normal text-[#1A110B] mb-4">{t.quote.title}</h2>
                <p className="font-sans text-[#8B7355]">{t.quote.p}</p>
              </div>

              <div className="space-y-16 font-sans">
                <div>
                  <div className="flex justify-between mb-8 items-end">
                    <label className="text-xs font-bold tracking-[0.2em] uppercase text-[#5C3A21]">{t.quote.areaTitle}</label>
                    <span className="font-serif text-3xl text-[#1A110B]">{length} <span className="text-xl text-[#8B7355]">{t.quote.areaUnit}</span></span>
                  </div>
                  <input 
                    type="range" 
                    min={region === 'usa' ? 10 : 3} 
                    max={region === 'usa' ? 100 : 30} 
                    step={1}
                    value={length} 
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full accent-[#2A1B12] h-px bg-[#E8E1D5] appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#A89886] mt-6 font-bold tracking-[0.2em] uppercase">
                    <span>{t.quote.areaMin}</span>
                    <span>{t.quote.areaMax}</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold tracking-[0.2em] uppercase text-[#5C3A21] block mb-8">{t.quote.reqTitle}</label>
                  <div className="flex flex-col gap-4">
                    {t.quote.reqOptions.map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => handleMaterialChange(opt.id)}
                        className={`p-5 border text-left text-sm tracking-wide transition-all duration-300 ${
                          material === opt.id 
                          ? 'border-[#2A1B12] bg-[#FDFBF7] text-[#1A110B]' 
                          : 'border-[#E8E1D5] text-[#8B7355] hover:border-[#D5C6B1]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-96 bg-[#FDFBF7] p-12 lg:p-20 flex flex-col justify-center">
              <h3 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#8B7355] mb-10">{t.quote.totalTitle}</h3>
              
              <div className={`mb-10 transition-all duration-300 ${isCalculating ? 'blur-sm opacity-50' : 'blur-0 opacity-100'}`}>
                <span className="font-serif text-5xl lg:text-6xl text-[#1A110B]">
                  ${getPrice().toLocaleString()}
                </span>
              </div>
              
              <p className="font-sans text-[#A89886] text-xs leading-relaxed mb-16 pb-16 border-b border-[#E8E1D5]">
                {t.quote.totalDesc}
              </p>
              
              <div className="space-y-6 font-sans">
                <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#8B7355]">{t.quote.ctaTitle}</label>
                <input 
                  type="email" 
                  placeholder="name@estate.com" 
                  className="w-full bg-transparent border-b border-[#D5C6B1] py-4 text-[#1A110B] placeholder-[#A89886] outline-none focus:border-[#2A1B12] transition-colors text-sm" 
                />
                <button className="w-full bg-[#2A1B12] text-[#FDFBF7] text-xs tracking-[0.2em] uppercase py-5 hover:bg-[#1A110B] transition-colors mt-4">
                  {t.quote.ctaBtn}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A110B] text-[#E8E1D5] pt-24 pb-12 font-sans">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="font-serif font-bold text-3xl tracking-tight mb-8">
                OAK <span className="font-light italic text-[#8B7355]">&</span> IRON
              </div>
              <p className="text-[#A89886] max-w-sm mb-8 leading-relaxed font-serif italic text-lg">
                {t.footer.desc}
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5C3A21] mb-6">{t.footer.contact}</h4>
              <ul className="space-y-4 text-sm text-[#A89886]">
                <li>+1 (555) 345-WOOD</li>
                <li>commissions@oakiron.com</li>
                <li>Portland, OR</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5C3A21] mb-6">{t.footer.legal}</h4>
              <ul className="space-y-4 text-sm text-[#A89886]">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#2A1B12] flex justify-between items-center text-[10px] tracking-[0.2em] text-[#5C3A21] uppercase">
            <p>{t.footer.rights}</p>
            <p>{t.footer.tag}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
