"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { ShoppingBag, Star, ShieldCheck, Heart, Search, Menu, Package, ArrowRight, Truck, RefreshCw, ChevronDown, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    banner: '⏳ Summer Sale: Up to 50% off ends in 02:45:12',
    nav: { new: 'New Arrivals', coll: 'Collections', acc: 'Accessories', cart: 'Cart' },
    hero: { 
      t1: 'The Signature', 
      t2: 'Leather Tote.', 
      p: 'Handcrafted in Italy using full-grain Tuscan leather. Designed for the modern professional.',
      price: '$249',
      oldPrice: '$499',
      save: 'Save 50%',
      btn1: 'Add to Cart',
      btn2: 'Buy Now',
      status: 'Only 3 left',
      reviews: '4.9/5 (2.5k Reviews)'
    },
    values: {
      title: 'The Élégance Standard',
      p: 'Uncompromising quality meets sustainable practices.',
      items: [
        { icon: Truck, title: "Free Global Shipping", desc: "Complimentary express delivery on all orders over $150." },
        { icon: ShieldCheck, title: "Lifetime Warranty", desc: "We repair or replace any manufacturing defects, forever." },
        { icon: RefreshCw, title: "30-Day Returns", desc: "Not perfectly satisfied? Return it hassle-free within 30 days." }
      ]
    },
    gallery: {
      title: 'The Lookbook',
      p: 'Explore how our community styles the Élégance collection. Filter by aesthetic.',
      filters: ['All', 'Minimal', 'Street', 'Formal'],
      items: [
        { cat: 'Minimal', title: 'The Everyday Carry', price: '$249', img: 'https://placehold.co/800x1000/d6d3d1/1c1917?text=Minimal+Tote' },
        { cat: 'Formal', title: 'The Executive Brief', price: '$399', img: 'https://placehold.co/800x1000/e7e5e4/1c1917?text=Leather+Briefcase' },
        { cat: 'Street', title: 'The Urban Sling', price: '$129', img: 'https://placehold.co/800x1000/f5f5f4/1c1917?text=Crossbody+Bag' },
        { cat: 'Minimal', title: 'The Cardholder', price: '$49', img: 'https://placehold.co/800x1000/d6d3d1/1c1917?text=Cardholder' }
      ]
    },
    process: {
      title: 'Artisanal Craftsmanship',
      p: 'Every piece takes over 40 hours of meticulous handcrafting by master artisans.',
      steps: [
        { num: '01', title: 'Sourcing', desc: 'We select only the top 1% of full-grain hides from certified ethical tanneries.' },
        { num: '02', title: 'Cutting', desc: 'Each pattern is hand-cut to ensure perfect grain alignment and structural integrity.' },
        { num: '03', title: 'Stitching', desc: 'Saddle-stitched by hand using waxed linen thread for unbreakable seams.' },
        { num: '04', title: 'Finishing', desc: 'Edges are hand-painted and burnished to a smooth, resilient gloss.' }
      ]
    },
    testimonials: {
      title: 'Customer Love',
      items: [
        { name: 'Elena V.', role: 'Fashion Editor', text: '"The quality of the leather rivals brands that charge five times as much. It\'s my go-to daily bag, and it just looks better with age."' },
        { name: 'James T.', role: 'Architect', text: '"Finally, a briefcase that fits my laptop, sketches, and looks incredibly sharp in client meetings. The craftsmanship is flawless."' }
      ]
    },
    faq: {
      title: 'Questions?',
      items: [
        { q: 'How do I care for full-grain leather?', a: 'Keep it away from direct heat and moisture. Use our complimentary leather conditioner every 6 months to keep it supple and restore its natural oils.' },
        { q: 'Do you ship internationally?', a: 'Yes, we ship to over 100 countries. Customs and duties are calculated and paid at checkout so there are no surprises upon delivery.' },
        { q: 'Can I personalize my item?', a: 'Absolutely. We offer complimentary blind or gold foil monogramming (up to 3 letters) on all our leather goods.' }
      ]
    },
    config: {
      title: 'Build Your Bundle',
      p: 'Select your core bag and add accessories. The more you bundle, the more you save.',
      baseTitle: 'Select Base Model',
      baseOptions: [
        { id: 'tote', label: 'Tote ($249)', price: 249 },
        { id: 'brief', label: 'Briefcase ($399)', price: 399 },
        { id: 'sling', label: 'Sling ($129)', price: 129 }
      ],
      accTitle: 'Add Accessories (Save 20%)',
      accOptions: [
        { id: 'wallet', label: 'Wallet (+$89)', price: 89 },
        { id: 'strap', label: 'Pro Strap (+$49)', price: 49 },
        { id: 'kit', label: 'Care Kit (+$29)', price: 29 }
      ],
      totalTitle: 'Bundle Total',
      totalDesc: '*Discount automatically applied to accessories when purchased with a base model.',
      ctaTitle: 'Ready to checkout?',
      ctaBtn: 'Add Bundle to Cart'
    },
    footer: {
      desc: 'Timeless design. Uncompromising quality. Direct to you.',
      contact: 'Support',
      legal: 'Legal',
      rights: '© 2026 Élégance Paris. All rights reserved.',
      tag: 'Crafted for life.'
    }
  },
  mex: {
    banner: '⏳ Venta de Verano: Hasta 50% de descuento termina en 02:45:12',
    nav: { new: 'Novedades', coll: 'Colecciones', acc: 'Accesorios', cart: 'Carrito' },
    hero: { 
      t1: 'El Bolso Tote', 
      t2: 'Insignia.', 
      p: 'Hecho a mano en Italia con cuero toscano de grano completo. Diseñado para el profesional moderno.',
      price: '$4,999',
      oldPrice: '$9,999',
      save: 'Ahorra 50%',
      btn1: 'Al Carrito',
      btn2: 'Comprar Ahora',
      status: 'Solo 3 restantes',
      reviews: '4.9/5 (2.5k Reseñas)'
    },
    values: {
      title: 'El Estándar Élégance',
      p: 'Calidad intransigente combinada con prácticas sostenibles.',
      items: [
        { icon: Truck, title: "Envío Global Gratis", desc: "Entrega exprés de cortesía en todos los pedidos superiores a $3,000 MXN." },
        { icon: ShieldCheck, title: "Garantía de por Vida", desc: "Reparamos o reemplazamos cualquier defecto de fabricación, para siempre." },
        { icon: RefreshCw, title: "Devoluciones (30 Días)", desc: "¿No estás satisfecho? Devuélvelo sin problemas en un plazo de 30 días." }
      ]
    },
    gallery: {
      title: 'Catálogo Visual',
      p: 'Explora cómo nuestra comunidad usa la colección Élégance. Filtra por estética.',
      filters: ['Todos', 'Minimalista', 'Urbano', 'Formal'],
      items: [
        { cat: 'Minimalista', title: 'Tote de Uso Diario', price: '$4,999', img: 'https://placehold.co/800x1000/d6d3d1/1c1917?text=Tote+Minimalista' },
        { cat: 'Formal', title: 'Maletín Ejecutivo', price: '$7,999', img: 'https://placehold.co/800x1000/e7e5e4/1c1917?text=Maletin+Cuero' },
        { cat: 'Urbano', title: 'Bandolera Urbana', price: '$2,599', img: 'https://placehold.co/800x1000/f5f5f4/1c1917?text=Bolso+Cruzado' },
        { cat: 'Minimalista', title: 'Tarjetero Clásico', price: '$999', img: 'https://placehold.co/800x1000/d6d3d1/1c1917?text=Tarjetero' }
      ]
    },
    process: {
      title: 'Artesanía Fina',
      p: 'Cada pieza requiere más de 40 horas de minucioso trabajo manual por maestros artesanos.',
      steps: [
        { num: '01', title: 'Selección', desc: 'Seleccionamos solo el 1% superior de las pieles de tenerías éticas certificadas.' },
        { num: '02', title: 'Corte', desc: 'Cada patrón se corta a mano para asegurar la alineación perfecta del grano.' },
        { num: '03', title: 'Costura', desc: 'Cosido a mano usando hilo de lino encerado para costuras irrompibles.' },
        { num: '04', title: 'Acabado', desc: 'Los bordes se pintan y pulen a mano para obtener un brillo suave y resistente.' }
      ]
    },
    testimonials: {
      title: 'Reseñas Reales',
      items: [
        { name: 'Elena V.', role: 'Editora de Moda', text: '"La calidad del cuero compite con marcas que cobran cinco veces más. Es mi bolso diario, y simplemente se ve mejor con la edad."' },
        { name: 'James T.', role: 'Arquitecto', text: '"Por fin, un maletín en el que caben mi laptop y bocetos, y que luce increíblemente elegante en reuniones. La artesanía es impecable."' }
      ]
    },
    faq: {
      title: 'Preguntas Frecuentes',
      items: [
        { q: '¿Cómo cuido el cuero de grano completo?', a: 'Mantenlo alejado del calor directo y la humedad. Usa nuestro acondicionador de cuero de cortesía cada 6 meses para mantenerlo flexible.' },
        { q: '¿Hacen envíos internacionales?', a: 'Sí, enviamos a más de 100 países. Los impuestos y aranceles se calculan y pagan al momento de la compra.' },
        { q: '¿Puedo personalizar mi artículo?', a: 'Absolutamente. Ofrecemos monogramas de cortesía en relieve ciego o lámina dorada (hasta 3 letras).' }
      ]
    },
    config: {
      title: 'Arma tu Set',
      p: 'Selecciona tu bolso principal y agrega accesorios. Entre más lleves, más ahorras.',
      baseTitle: 'Modelo Base',
      baseOptions: [
        { id: 'tote', label: 'Tote ($4,999)', price: 4999 },
        { id: 'brief', label: 'Maletín ($7,999)', price: 7999 },
        { id: 'sling', label: 'Bandolera ($2,599)', price: 2599 }
      ],
      accTitle: 'Accesorios (Ahorra 20%)',
      accOptions: [
        { id: 'wallet', label: 'Billetera (+$1,799)', price: 1799 },
        { id: 'strap', label: 'Correa Pro (+$999)', price: 999 },
        { id: 'kit', label: 'Kit Cuidado (+$599)', price: 599 }
      ],
      totalTitle: 'Total del Paquete',
      totalDesc: '*El descuento se aplica automáticamente a los accesorios al comprar un modelo base.',
      ctaTitle: '¿Listo para comprar?',
      ctaBtn: 'Agregar Paquete al Carrito'
    },
    footer: {
      desc: 'Diseño atemporal. Calidad sin concesiones. Directo a ti.',
      contact: 'Soporte',
      legal: 'Legal',
      rights: '© 2026 Élégance Paris. Todos los derechos reservados.',
      tag: 'Creado para la vida.'
    }
  }
}

export function Ecommerce() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [filter, setFilter] = useState('All')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  
  // Configurator State
  const [baseModel, setBaseModel] = useState('tote')
  const [accessories, setAccessories] = useState<string[]>([])
  const [isCalculating, setIsCalculating] = useState(false)
  
  const reduce = useReducedMotion()
  const t = dict[region]

  const toggleRegion = () => {
    setIsCalculating(true)
    setTimeout(() => {
      if (region === 'usa') {
        setRegion('mex')
        setFilter('Todos')
      } else {
        setRegion('usa')
        setFilter('All')
      }
      setIsCalculating(false)
    }, 300)
  }

  const toggleAccessory = (id: string) => {
    setIsCalculating(true)
    setTimeout(() => {
      if (accessories.includes(id)) {
        setAccessories(accessories.filter(a => a !== id))
      } else {
        setAccessories([...accessories, id])
      }
      setIsCalculating(false)
    }, 200)
  }

  const handleBaseChange = (id: string) => {
    setIsCalculating(true)
    setTimeout(() => {
      setBaseModel(id)
      setIsCalculating(false)
    }, 200)
  }

  const getBundlePrice = () => {
    const baseOpt = t.config.baseOptions.find(o => o.id === baseModel)
    const basePrice = baseOpt ? baseOpt.price : 0
    
    let accPrice = 0
    accessories.forEach(accId => {
      const accOpt = t.config.accOptions.find(o => o.id === accId)
      if (accOpt) accPrice += accOpt.price
    })
    
    // Apply 20% discount to accessories
    const discountedAcc = accPrice * 0.8
    const total = basePrice + discountedAcc
    
    return region === 'usa' ? `$${total.toLocaleString()}` : `$${Math.round(total).toLocaleString()} MXN`
  }

  const filteredPortfolio = filter === 'All' || filter === 'Todos' 
    ? t.gallery.items 
    : t.gallery.items.filter(item => item.cat === filter || 
      (filter === 'Minimalista' && item.cat === 'Minimal') || 
      (filter === 'Urbano' && item.cat === 'Street') || 
      (filter === 'Formal' && item.cat === 'Formal'))

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-stone-900 font-sans selection:bg-stone-900 selection:text-white">
      {/* Urgency Banner */}
      <div className="bg-stone-900 text-white text-center py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
        {t.banner}
      </div>

      {/* Navbar */}
      <nav className="border-b border-stone-200 sticky top-0 bg-[#FAFAFA]/90 backdrop-blur-md z-40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Menu className="w-6 h-6 lg:hidden" />
            <div className="font-serif text-2xl md:text-3xl font-black italic tracking-tighter">ÉLÉGANCE</div>
          </div>
          <div className="hidden lg:flex gap-8 font-bold text-xs uppercase tracking-widest text-stone-500">
            <a href="#gallery" className="text-stone-900">{t.nav.new}</a>
            <a href="#gallery" className="hover:text-stone-900 transition-colors">{t.nav.coll}</a>
            <a href="#bundle" className="hover:text-stone-900 transition-colors">{t.nav.acc}</a>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <button 
              onClick={toggleRegion}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-100 transition-colors text-[10px] font-bold uppercase tracking-widest active:scale-[0.97]"
            >
              {region === 'usa' ? 'USA' : 'MEX'}
            </button>
            <Search className="w-5 h-5 cursor-pointer hover:text-stone-500 hidden sm:block" />
            <Heart className="w-5 h-5 cursor-pointer hover:text-stone-500 hidden sm:block" />
            <div className="relative cursor-pointer flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full hover:bg-stone-200 transition-colors">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-bold hidden sm:block">{t.nav.cart}</span>
              <span className="bg-stone-900 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#F5F5F4] relative overflow-hidden border-b border-stone-200">
        <div className="container mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={reduce ? false : { opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
            <div className="flex items-center gap-2 text-amber-500 mb-6">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
              <span className="text-stone-500 text-xs font-bold ml-2 uppercase tracking-wide">{t.hero.reviews}</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-stone-900">
              {t.hero.t1}<br/>
              <span className="italic font-light">{t.hero.t2}</span>
            </h1>
            <p className="text-lg text-stone-600 mb-10 max-w-md font-medium leading-relaxed">
              {t.hero.p}
            </p>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold">{t.hero.price}</span>
              <span className="text-lg text-stone-400 line-through font-medium">{t.hero.oldPrice}</span>
              <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">{t.hero.save}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <button className="flex-1 bg-stone-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-stone-800 transition-colors active:scale-95 shadow-xl shadow-stone-900/10">
                {t.hero.btn1}
              </button>
              <a href="#bundle" className="flex-1 bg-amber-400 text-stone-900 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-amber-500 transition-colors active:scale-95 text-center flex items-center justify-center">
                {t.hero.btn2}
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-stone-500">
              <ShieldCheck className="w-5 h-5 text-green-600" /> {t.values.items[2].title}
            </div>
          </motion.div>
          
          <motion.div initial={reduce ? false : { opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="aspect-square bg-stone-300 rounded-full absolute inset-0 scale-90 opacity-40 blur-3xl"></div>
            <img src="https://placehold.co/800x800/e7e5e4/1c1917?text=Hero+Product" alt="Tote Bag" className="relative z-10 w-full rounded-2xl shadow-2xl mix-blend-multiply" />
            
            {/* Scarcity Tag */}
            <div className="absolute top-8 -right-4 md:-right-8 bg-white text-stone-900 px-6 py-4 rounded-2xl shadow-xl z-20 flex flex-col gap-1 border border-stone-100">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Stock Status</span>
              <span className="text-red-600 flex items-center gap-2 font-bold text-sm"><span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span> {t.hero.status}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services / Values */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold italic mb-4 text-stone-900">{t.values.title}</h2>
            <p className="text-stone-500 font-medium">{t.values.p}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.values.items.map((val, i) => {
              const Icon = val.icon
              return (
                <div key={i} className="text-center p-8 rounded-3xl bg-[#FAFAFA] border border-stone-100 hover:border-stone-300 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Icon className="w-6 h-6 text-stone-900" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-3 text-stone-900">{val.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* V2: Gallery / Lookbook */}
      <section id="gallery" className="py-24 px-6 bg-[#1C1917] text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold italic mb-4">{t.gallery.title}</h2>
              <p className="text-stone-400 text-lg">{t.gallery.p}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {t.gallery.filters.map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-colors ${filter === f ? 'bg-white text-stone-900' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPortfolio.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-stone-800 relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" />
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
                    {item.cat}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-sm tracking-wide">{item.title}</h3>
                  <span className="text-stone-400 font-semibold text-sm">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: The Process */}
      <section className="py-24 px-6 bg-white border-b border-stone-200">
        <div className="container mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold italic mb-4">{t.process.title}</h2>
            <p className="text-lg text-stone-500">{t.process.p}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {t.process.steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-serif font-black text-stone-100 mb-4 group-hover:text-stone-200 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-3">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: Social Proof */}
      <section className="py-24 px-6 bg-[#F5F5F4]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold italic text-center mb-16">{t.testimonials.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.testimonials.items.map((test, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100">
                <div className="flex gap-1 mb-6 text-amber-500">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg text-stone-700 font-serif italic mb-8 leading-relaxed">
                  {test.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center font-serif font-bold text-stone-400">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-wide text-stone-900">{test.name}</h4>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-12 text-center">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.items.map((item, i) => (
              <div key={i} className="border border-stone-200 rounded-2xl bg-[#FAFAFA] overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
                >
                  <span className="font-bold text-sm uppercase tracking-wide text-stone-900 pr-8">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-stone-400 flex-shrink-0 transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-stone-600 text-sm leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: Bundle Configurator */}
      <section id="bundle" className="py-24 px-6 bg-stone-900 text-white">
        <div className="container mx-auto">
          <div className="bg-[#1C1917] rounded-[2rem] border border-stone-800 flex flex-col xl:flex-row overflow-hidden">
            
            <div className="flex-1 p-10 lg:p-16">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-4">{t.config.title}</h2>
                <p className="text-stone-400">{t.config.p}</p>
              </div>

              <div className="space-y-12">
                <div>
                  <label className="font-bold uppercase tracking-widest text-[10px] text-stone-500 block mb-6">{t.config.baseTitle}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {t.config.baseOptions.map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => handleBaseChange(opt.id)}
                        className={`p-4 rounded-xl border-2 font-bold text-xs tracking-wide transition-all duration-200 active:scale-95 ${
                          baseModel === opt.id 
                          ? 'border-white bg-white text-stone-900' 
                          : 'border-stone-700 text-stone-400 hover:border-stone-500'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-bold uppercase tracking-widest text-[10px] text-stone-500 block mb-6">{t.config.accTitle}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {t.config.accOptions.map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => toggleAccessory(opt.id)}
                        className={`p-4 rounded-xl border-2 font-bold text-xs tracking-wide transition-all duration-200 active:scale-95 flex justify-between items-center ${
                          accessories.includes(opt.id)
                          ? 'border-amber-400 bg-amber-400/10 text-amber-400' 
                          : 'border-stone-700 text-stone-400 hover:border-stone-500'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {accessories.includes(opt.id) && <CheckCircle2 className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-[400px] bg-stone-100 text-stone-900 p-10 lg:p-16 flex flex-col justify-center border-t xl:border-t-0 xl:border-l border-stone-800">
              <h3 className="font-bold uppercase tracking-widest text-[10px] text-stone-500 mb-6">{t.config.totalTitle}</h3>
              
              <div className={`mb-8 transition-all duration-200 ${isCalculating ? 'blur-sm opacity-50' : 'blur-0 opacity-100'}`}>
                <div className="text-5xl font-serif font-black tracking-tight mb-2">
                  {getBundlePrice()}
                </div>
                <div className="text-sm font-bold text-green-600 bg-green-100 inline-block px-3 py-1 rounded-full uppercase tracking-wider">
                  Ships Free
                </div>
              </div>
              
              <p className="text-stone-500 text-xs mb-10 pb-10 border-b border-stone-300 leading-relaxed font-medium">
                {t.config.totalDesc}
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-stone-900 text-white font-bold uppercase tracking-widest text-xs py-5 rounded-xl hover:bg-stone-800 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-stone-900/20">
                  <Package className="w-4 h-4" /> {t.config.ctaBtn}
                </button>
                <div className="text-center text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-4 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Secure Checkout
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-stone-500 pt-24 pb-12 border-t border-stone-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="font-serif text-2xl font-black italic tracking-tighter mb-6 text-stone-900">
                ÉLÉGANCE
              </div>
              <p className="max-w-sm font-medium leading-relaxed">
                {t.footer.desc}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 tracking-widest text-[10px] uppercase text-stone-400">{t.footer.contact}</h4>
              <ul className="space-y-4 font-bold text-xs uppercase tracking-wider text-stone-600">
                <li>+1 (800) 123-ELEG</li>
                <li>bonjour@elegance.com</li>
                <li>Paris, FR</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 tracking-widest text-[10px] uppercase text-stone-400">{t.footer.legal}</h4>
              <ul className="space-y-4 font-bold text-xs uppercase tracking-wider text-stone-600">
                <li><a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-widest text-stone-400 uppercase">
            <p>{t.footer.rights}</p>
            <p className="text-stone-900">{t.footer.tag}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
