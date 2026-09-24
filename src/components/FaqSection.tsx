import React, { useState } from 'react';
import { FAQ_ITEMS, NEIGHBORHOODS } from '../data/apartments';
import { ChevronDown, HelpCircle, ExternalLink } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif-luxury">
            Perguntas <span className="gold-gradient-text">Frequentes</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Tudo o que você precisa saber sobre as condições de lançamento, financiamento e processo de compra.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-[#101726]/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 text-slate-100 hover:text-amber-400 font-semibold text-sm sm:text-base transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action card inside FAQ */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-[#141b2a] border border-amber-500/30 text-center">
          <h3 className="text-lg font-bold text-white font-serif-luxury">
            Ainda tem alguma dúvida específica sobre o seu perfil?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
            Selecione o bairro de sua preferência e preencha o formulário para receber uma consultoria exclusiva e sem compromisso.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
            {NEIGHBORHOODS.map(n => (
              <a
                key={n.id}
                href={n.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all active:scale-95"
              >
                <span>Formulário {n.name}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
