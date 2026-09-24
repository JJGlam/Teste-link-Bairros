import React, { useState, useEffect } from 'react';
import { NEIGHBORHOODS } from '../data/apartments';
import { MessageCircle, ExternalLink, ArrowUp } from 'lucide-react';

interface FloatingActionsProps {
  onOpenFormModal: (neighborhoodId: 'mooca' | 'bras' | 'morumbi') => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenFormModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 shadow-lg flex items-center justify-center transition-all"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Direct Floating Button */}
        <a
          href="https://wa.me/5511999999999?text=Olá!%20Estou%20no%20site%20e%20gostaria%20de%20tirar%20dúvidas%20sobre%20os%20apartamentos%20na%20Mooca,%20Brás%20ou%20Morumbi."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/30 hover:scale-105 transition-all group"
        >
          <MessageCircle className="w-5 h-5 fill-slate-950 stroke-[1.5]" />
          <span className="hidden sm:inline">Fale com Especialista</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>

      </div>

      {/* Floating Bottom Quick Bar on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#0c121d]/95 backdrop-blur-md border-t border-slate-800 px-3 py-2">
        <div className="flex items-center justify-between gap-1.5 text-[11px]">
          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider pl-1">
            Formulários:
          </span>
          {NEIGHBORHOODS.map(n => (
            <a
              key={n.id}
              href={n.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-1.5 px-1 text-center font-bold rounded bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 truncate"
            >
              {n.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
