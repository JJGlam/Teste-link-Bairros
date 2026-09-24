import React, { useState } from 'react';
import { NeighborhoodData } from '../data/apartments';
import { 
  MapPin, 
  ExternalLink, 
  Check, 
  Layers, 
  Maximize2, 
  Compass, 
  Coins, 
  Calendar, 
  Share2, 
  Eye, 
  Car, 
  Waves,
  Train,
  UtensilsCrossed,
  GraduationCap,
  Trees
} from 'lucide-react';

interface NeighborhoodSectionProps {
  neighborhood: NeighborhoodData;
  index: number;
  onOpenFormModal: (neighborhoodId: 'mooca' | 'bras' | 'morumbi') => void;
  onSelectImage: (imgUrl: string, caption: string) => void;
}

export const NeighborhoodSection: React.FC<NeighborhoodSectionProps> = ({
  neighborhood,
  index,
  onOpenFormModal,
  onSelectImage
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeLifestyleTab, setActiveLifestyleTab] = useState<'transport' | 'gastronomy' | 'schools' | 'greenAreas'>('transport');

  const currentImg = neighborhood.images[activeImageIdx] || neighborhood.images[0];
  const isReversed = index % 2 !== 0;

  return (
    <section id={neighborhood.id} className="py-20 border-t border-slate-800/80 relative">
      {/* Subtle accent glow */}
      <div className={`absolute top-1/4 ${isReversed ? 'right-0' : 'left-0'} w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span className="w-6 h-[2px] bg-amber-400 inline-block"></span>
              <span>{neighborhood.zone}</span>
              <span>·</span>
              <span>{neighborhood.badge}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury">
              Apartamentos na <span className="gold-gradient-text">{neighborhood.name}</span>
            </h2>
            
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              {neighborhood.tagline}
            </p>
          </div>

          {/* Form Quick Access Button */}
          <div className="shrink-0 flex items-center gap-3">
            <a
              href={neighborhood.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>Preencher Formulário da {neighborhood.name}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Main Grid: Gallery & Project Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Gallery Column */}
          <div className={`lg:col-span-7 space-y-4 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
            
            {/* Primary Featured Image with Zoom */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 border border-slate-800 shadow-xl group">
              <img
                src={currentImg.url}
                alt={currentImg.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => onSelectImage(currentImg.url, currentImg.caption)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

              {/* Top controls */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-amber-300 text-xs font-semibold border border-amber-500/30">
                  {neighborhood.projectTitle}
                </span>
                <button
                  onClick={() => onSelectImage(currentImg.url, currentImg.caption)}
                  className="p-2 rounded-lg bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-900 transition-colors backdrop-blur-md border border-slate-700/60"
                  title="Ampliar foto"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Caption text */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white text-sm font-medium drop-shadow-md">
                  {currentImg.caption}
                </div>
                <div className="text-[11px] text-slate-300 flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{neighborhood.address}</span>
                </div>
              </div>
            </div>

            {/* Thumbnails row */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {neighborhood.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIdx(i)}
                  className={`relative rounded-xl overflow-hidden aspect-[4/3] border transition-all ${
                    activeImageIdx === i
                      ? 'border-amber-400 ring-2 ring-amber-400/40 scale-[1.02]'
                      : 'border-slate-800 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 left-1 right-1 text-[9px] font-semibold text-white bg-black/60 backdrop-blur-sm rounded px-1 py-0.5 truncate text-center">
                    {img.category}
                  </span>
                </button>
              ))}
            </div>

            {/* Key Metrics / Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {neighborhood.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-center">
                  <div className="text-base sm:text-lg font-bold text-amber-400">{m.value}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right / Information & Direct Form Box */}
          <div className={`lg:col-span-5 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
            
            {/* Specs Card */}
            <div className="p-6 rounded-2xl bg-[#111726] border border-slate-800 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Condição de Partida</span>
                  <div className="text-3xl font-extrabold text-amber-400 font-serif-luxury">{neighborhood.startingPrice}</div>
                  <span className="text-xs text-slate-400">{neighborhood.monthlyEstimate}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Metragem</span>
                  <div className="text-base font-bold text-white">{neighborhood.sizeRange}</div>
                  <span className="text-xs text-amber-400/90">{neighborhood.typologies.split('|')[0]}</span>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Diferenciais do Empreendimento:
                </h4>
                {neighborhood.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Ideal profile */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80 text-xs text-slate-300">
                <strong className="text-amber-400 block mb-1">Perfil Indicado:</strong>
                {neighborhood.idealFor}
              </div>

              {/* Call to action buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={neighborhood.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <span>Cadastrar Interesse na {neighborhood.name}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onOpenFormModal(neighborhood.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 text-xs font-semibold border border-slate-700/60 flex items-center justify-center gap-2 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ver Detalhes do Formulário & Suporte</span>
                </button>
              </div>

              <div className="text-[11px] text-center text-slate-400">
                🔒 Seus dados são protegidos. Resposta da equipe técnica em até 15 minutos.
              </div>

            </div>

            {/* Neighborhood Lifestyle Tab */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Localização & Infraestrutura</span>
                </h4>
              </div>

              {/* Segmented control buttons */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800/80 mb-3">
                <button
                  onClick={() => setActiveLifestyleTab('transport')}
                  className={`py-1.5 text-[11px] font-medium rounded transition-colors flex items-center justify-center gap-1 ${
                    activeLifestyleTab === 'transport' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Mobilidade e Metrô"
                >
                  <Train className="w-3 h-3" />
                  <span className="hidden sm:inline">Metrô</span>
                </button>

                <button
                  onClick={() => setActiveLifestyleTab('gastronomy')}
                  className={`py-1.5 text-[11px] font-medium rounded transition-colors flex items-center justify-center gap-1 ${
                    activeLifestyleTab === 'gastronomy' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Gastronomia"
                >
                  <UtensilsCrossed className="w-3 h-3" />
                  <span className="hidden sm:inline">Gourmet</span>
                </button>

                <button
                  onClick={() => setActiveLifestyleTab('schools')}
                  className={`py-1.5 text-[11px] font-medium rounded transition-colors flex items-center justify-center gap-1 ${
                    activeLifestyleTab === 'schools' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Educação e Faculdades"
                >
                  <GraduationCap className="w-3 h-3" />
                  <span className="hidden sm:inline">Escolas</span>
                </button>

                <button
                  onClick={() => setActiveLifestyleTab('greenAreas')}
                  className={`py-1.5 text-[11px] font-medium rounded transition-colors flex items-center justify-center gap-1 ${
                    activeLifestyleTab === 'greenAreas' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Parques e Áreas Verdes"
                >
                  <Trees className="w-3 h-3" />
                  <span className="hidden sm:inline">Parques</span>
                </button>
              </div>

              {/* Tab description content */}
              <div className="text-xs text-slate-300 bg-slate-950/40 p-3 rounded-lg border border-slate-800/40 leading-relaxed">
                {activeLifestyleTab === 'transport' && neighborhood.lifestyle.transport}
                {activeLifestyleTab === 'gastronomy' && neighborhood.lifestyle.gastronomy}
                {activeLifestyleTab === 'schools' && neighborhood.lifestyle.schools}
                {activeLifestyleTab === 'greenAreas' && neighborhood.lifestyle.greenAreas}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
