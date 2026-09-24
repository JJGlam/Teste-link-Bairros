import React from 'react';
import { REVIEWS } from '../data/apartments';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#090d14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>Depoimentos Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif-luxury">
            Quem Já Conquistou o <span className="gold-gradient-text">Seu Imóvel Conosco</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Veja a experiência de quem comprou para morar ou para investimento na Mooca, Brás e Morumbi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#101726] border border-slate-800 flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-amber-500/20 absolute top-6 right-6" />

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{r.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{r.name}</div>
                  <div className="text-xs text-slate-400">{r.role}</div>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {r.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
