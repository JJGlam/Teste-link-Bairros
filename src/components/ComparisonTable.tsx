import React from 'react';
import { COMPARISON_FEATURES, NEIGHBORHOODS } from '../data/apartments';
import { ExternalLink, Check, ArrowRight } from 'lucide-react';

interface ComparisonTableProps {
  onOpenFormModal: (neighborhoodId: 'mooca' | 'bras' | 'morumbi') => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenFormModal }) => {
  return (
    <section id="comparativo" className="py-20 bg-[#090d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>Guia Comparativo Decisório</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif-luxury">
            Mooca, Brás ou Morumbi: <span className="gold-gradient-text">Qual é o Ideal Para Você?</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Compare os três bairros lado a lado e decida com base no seu objetivo de moradia ou investimento patrimonial.
          </p>
        </div>

        {/* Responsive Table Card */}
        <div className="bg-[#101624] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80">
                  <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/4">
                    Características
                  </th>
                  {NEIGHBORHOODS.map((n) => (
                    <th key={n.id} className="p-4 sm:p-5 text-center w-1/4 border-l border-slate-800/80">
                      <div className="text-lg font-bold text-white font-serif-luxury">{n.name}</div>
                      <div className="text-[11px] text-amber-400 font-semibold">{n.zone}</div>
                      <div className="text-xs text-slate-400 mt-1">{n.badge}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm">
                {COMPARISON_FEATURES.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-transparent' : 'bg-slate-900/30 hover:bg-slate-800/40'}>
                    <td className="p-4 sm:p-5 font-semibold text-slate-300">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-slate-200 border-l border-slate-800/80">
                      {row.mooca}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-slate-200 border-l border-slate-800/80">
                      {row.bras}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-slate-200 border-l border-slate-800/80">
                      {row.morumbi}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-slate-800 bg-slate-900/90">
                  <td className="p-4 sm:p-5 font-bold text-slate-300">
                    Formulário de Cadastro Oficial:
                  </td>
                  {NEIGHBORHOODS.map((n) => (
                    <td key={n.id} className="p-4 sm:p-5 text-center border-l border-slate-800/80">
                      <a
                        href={n.formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-transform active:scale-95"
                      >
                        <span>Formulário {n.name}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Quick summary cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <h4 className="text-sm font-bold text-amber-400 mb-1">Para quem busca Morar na Mooca:</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ideal para quem quer construir raízes em um bairro com identidade única, culinária impecável, ruas tranquilas e atmosfera de vizinhança familiar.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <h4 className="text-sm font-bold text-amber-400 mb-1">Para quem quer Rentabilidade no Brás:</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Incomparável para geração de renda passiva com aluguel mensal ou Airbnb graças à proximidade com a estação e o maior fluxo comercial da cidade.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <h4 className="text-sm font-bold text-amber-400 mb-1">Para quem busca Alto Padrão no Morumbi:</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Perfeito para famílias que valorizam condomínios amplos com lazer resort, colégios internacionais conceituados e ar puro em meio ao verde.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
