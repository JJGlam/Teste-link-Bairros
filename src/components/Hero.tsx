import React, { useState } from 'react';
import { NEIGHBORHOODS, NeighborhoodData } from '../data/apartments';
import { MapPin, ArrowRight, ShieldCheck, Sparkles, Building, ExternalLink, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenFormModal: (neighborhoodId: 'mooca' | 'bras' | 'morumbi') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenFormModal }) => {
  const [activeTab, setActiveTab] = useState<'mooca' | 'bras' | 'morumbi'>('mooca');
  const selected = NEIGHBORHOODS.find((n) => n.id === activeTab) || NEIGHBORHOODS[0];

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Architectural Canvas & Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-amber-500/10 via-blue-500/5 to-transparent blur-3xl opacity-60"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f17] via-transparent to-[#0b0f17]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Lançamentos Residenciais Exclusivos em São Paulo</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-serif-luxury">
            Encontre o Seu Apartamento na{' '}
            <span className="gold-gradient-text italic">Mooca, Brás</span> ou{' '}
            <span className="gold-gradient-text italic">Morumbi</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Seja para morar com toda tradição e segurança ou para obter a maior rentabilidade de locação de SP.
            Preencha o formulário oficial do seu bairro preferido e receba condições de 1ª tabela e plantas exclusivas.
          </p>
        </div>

        {/* 3 Neighborhoods Interactive Switcher Card */}
        <div className="mt-8 max-w-5xl mx-auto bg-[#101726]/90 border border-slate-800 rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-md">
          
          {/* Neighborhood Selector Tabs */}
          <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-900/90 rounded-xl border border-slate-800/80 mb-6">
            {NEIGHBORHOODS.map((n) => {
              const isActive = activeTab === n.id;
              return (
                <button
                  key={n.id}
                  onClick={() => setActiveTab(n.id)}
                  className={`py-3 px-2 sm:px-4 rounded-lg text-center transition-all duration-200 relative ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60 font-medium'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="text-sm sm:text-base">{n.name}</span>
                  </div>
                  <span className={`block text-[11px] sm:text-xs mt-0.5 ${isActive ? 'text-slate-900/80' : 'text-slate-400'}`}>
                    {n.startingPrice}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Neighborhood Feature Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left preview image with badging */}
            <div className="lg:col-span-6 relative group overflow-hidden rounded-xl aspect-[16/10] bg-slate-900">
              <img
                src={selected.mainImage}
                alt={selected.projectTitle}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
              
              {/* Bottom overlay info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{selected.address}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-serif-luxury">{selected.projectTitle}</h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">{selected.typologies}</p>
              </div>

              {/* Status pill top right */}
              <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                {selected.status}
              </div>
            </div>

            {/* Right content with CTA and highlights */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-1">
                  <span>{selected.zone}</span>
                  <span>·</span>
                  <span className="text-amber-400 font-semibold">{selected.badge}</span>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-luxury">
                  {selected.tagline}
                </h2>

                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {selected.description}
                </p>
              </div>

              {/* Key Quick Points */}
              <div className="space-y-2 pt-1 border-t border-slate-800/80">
                {selected.highlights.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Price & Primary Call to Action */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Preço de Lançamento</span>
                  <div className="text-2xl font-extrabold text-amber-400">{selected.startingPrice}</div>
                  <span className="text-xs text-slate-400">{selected.monthlyEstimate}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={selected.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all active:scale-95"
                  >
                    <span>Formulário {selected.name}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={`#${selected.id}`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors"
                  >
                    <span>Ver Fotos e Plantas</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Quick neighborhood forms link bar */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <span className="font-medium text-slate-300">
              Acesso rápido aos formulários oficiais do Google:
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {NEIGHBORHOODS.map((item) => (
                <a
                  key={item.id}
                  href={item.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-amber-400 transition-colors border border-slate-700/60"
                >
                  <span>Formulário {item.name}</span>
                  <ExternalLink className="w-3 h-3 text-amber-400" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* 4 Pillars Trust Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/70 text-center">
            <ShieldCheck className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <div className="text-sm font-bold text-white">Documentação 100% Regular</div>
            <div className="text-xs text-slate-400 mt-1">RI aprovado e garantido pela Caixa e grandes bancos</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/70 text-center">
            <Building className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <div className="text-sm font-bold text-white">Tabela Direta de Lançamento</div>
            <div className="text-xs text-slate-400 mt-1">Valores de 1ª fase com maior margem de valorização</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/70 text-center">
            <Sparkles className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <div className="text-sm font-bold text-white">Entrada Facilitada</div>
            <div className="text-xs text-slate-400 mt-1">Parcelamento do sinal durante o período de obras</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/70 text-center">
            <CheckCircle2 className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <div className="text-sm font-bold text-white">Assessoria de Crédito VIP</div>
            <div className="text-xs text-slate-400 mt-1">Simulação e aprovação bancária sem cobrança de taxas</div>
          </div>
        </div>

      </div>
    </section>
  );
};
