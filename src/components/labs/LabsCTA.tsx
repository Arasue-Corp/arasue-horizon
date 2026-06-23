"use client";
import Link from 'next/link';

export function LabsCTA({ dict, lang }: { dict: any, lang: string }) {
  return (
    <section className="py-32 px-6 border-t border-border text-center bg-secondary/5 relative overflow-hidden">
      {/* Abstract Honey Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-primary">
          {dict.contact_page?.title || "Wholesale & Partnerships"}
        </h2>
        <p className="text-2xl text-foreground/60 mb-12 font-light">
          {dict.contact_page?.subtitle || "Contact us for bulk honey orders and premium partnerships."}
        </p>
        <Link 
          href={`/${lang}/labs/contact`}
          className="inline-block px-12 py-6 rounded-full bg-primary text-primary-foreground font-black text-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-wide shadow-[0_0_40px_var(--primary)]"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
