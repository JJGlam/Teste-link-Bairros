import React, { useState } from 'react';
import { NEIGHBORHOODS } from '../data/apartments';
import { Calculator, ExternalLink, HelpCircle, Sparkles, MessageSquare, Check } from 'lucide-react';

interface FinancingSimulatorProps {
  onOpenFormModal: (neighborhoodId: 'mooca' | 'bras' | 'morumbi') => void;
}

export const FinancingSimulator: React.FC<FinancingSimulatorProps> = ({ onOpenFormModal }) => {
  const [selectedNeighborhoodId, setSelectedNeighborhoodId] = useState<'mooca' | 'bras' | 'morumbi'>('mooca');
  
  const selectedNeighborhood = NEIGHBORHOODS.find(n => n.id === selectedNeighborhoodId) || NEIGHBORHOODS[0];
  
  const [propertyPrice, setPropertyPrice] = useState<number>(selectedNeighborhood.startingPriceRaw);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [termYears, setTermYears] = useState<number>(30);
  const [useFgts, setUseFgts] = useState<boolean>(true);

  // When changing neighborhood, update default price
  const handleSelectNeighborhood = (id: 'mooca' | 'bras' | 'morumbi') => {
    setSelectedNeighborhoodId(id);
    const n = NEIGHBORHOODS.find(item => item.id === id);
    if (n) {
      setPropertyPrice(n.startingPriceRaw);
    }
  };

  // Calculations
  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const financedAmount = propertyPrice - downPaymentAmount;
  const totalMonths = termYears * 12;
  
  // Approximate standard TR/SAC interest calculation (~9.8% annual interest)
  const monthlyRate = 0.098 / 12;
  // Standard amortization formula (Price baseline)
  const monthlyInstallment = (financedAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  
  // Estimate for construction period monthly installment (typically ~30% of down payment spread over 36 months)
  const constructionInstallment = (downPaymentAmount * 0.6) / 36;

  const formatBRL = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="simulador" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Simulador de Financiamento & Entrada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif-luxury">
            Planeje a Conquista do Seu <span className="gold-gradient-text">Novo Apartamento</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Simule os valores de entrada e parcelas estimadas para Mooca, Brás ou Morumbi e envie sua proposta no formulário oficial.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (Left) */}
          <div className="lg:col-span-7 bg-[#101726] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* Neighborhood Switcher Buttons */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                1. Selecione o Bairro de Interesse:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {NEIGHBORHOODS.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => handleSelectNeighborhood(n.id)}
                    className={`py-2.5 px-3 rounded-xl text-center text-xs font-bold transition-all ${
                      selectedNeighborhoodId === n.id
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20 scale-[1.02]'
                        : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    <div>{n.name}</div>
                    <div className="text-[10px] font-normal opacity-80 mt-0.5">{n.zone}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Property Value Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  2. Valor do Imóvel:
                </label>
                <span className="text-base font-bold text-amber-400 font-mono">
                  {formatBRL(propertyPrice)}
                </span>
              </div>
              <input
                type="range"
                min={200000}
                max={1500000}
                step={10000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>R$ 200 mil (Studios Brás)</span>
                <span>R$ 1.5 milhão (Morumbi Alto Padrão)</span>
              </div>
            </div>

            {/* Down Payment (Entrada) Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  3. Percentual de Entrada:
                </label>
                <span className="text-sm font-bold text-white font-mono">
                  {downPaymentPercent}% ({formatBRL(downPaymentAmount)})
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>10% (Mínimo com subsídio)</span>
                <span>20% (Padrão Bancário)</span>
                <span>50% (Aporte Maior)</span>
              </div>
            </div>

            {/* Term in Years */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  4. Prazo do Financiamento:
                </label>
                <span className="text-sm font-bold text-white">
                  {termYears} Anos ({totalMonths} Meses)
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[15, 20, 30, 35].map((years) => (
                  <button
                    key={years}
                    onClick={() => setTermYears(years)}
                    className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                      termYears === years
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {years} Anos
                  </button>
                ))}
              </div>
            </div>

            {/* FGTS toggle */}
            <div className="pt-2">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={useFgts}
                  onChange={(e) => setUseFgts(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 focus:ring-offset-slate-950 bg-slate-900 border-slate-700"
                />
                <span className="text-xs sm:text-sm text-slate-300">
                  Pretendo utilizar saldo do <strong className="text-amber-400">FGTS</strong> para abater a entrada
                </span>
              </label>
            </div>

          </div>

          {/* Results Card (Right) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#131d2e] to-[#0c121d] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="pb-4 border-b border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block">
                Resultado da Simulação
              </span>
              <h3 className="text-xl font-bold text-white font-serif-luxury mt-1">
                {selectedNeighborhood.name} - {selectedNeighborhood.projectTitle}
              </h3>
            </div>

            {/* Estimated monthly during amortization */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Parcela Estimada no Banco</span>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono mt-1">
                {formatBRL(monthlyInstallment)}<span className="text-xs font-normal text-slate-400 font-sans">/mês</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                * Estimativa baseada em taxa média de 9,8% a.a. no sistema SAC/Price.
              </p>
            </div>

            {/* Breakdown summary */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Valor Total do Imóvel:</span>
                <span className="font-bold text-white font-mono">{formatBRL(propertyPrice)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Entrada Estimada ({downPaymentPercent}%):</span>
                <span className="font-bold text-amber-400 font-mono">{formatBRL(downPaymentAmount)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Saldo Financiado:</span>
                <span className="font-bold text-white font-mono">{formatBRL(financedAmount)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Parcela Período de Obras (estimada):</span>
                <span className="font-bold text-emerald-400 font-mono">{formatBRL(constructionInstallment)}/mês</span>
              </div>
            </div>

            {/* Direct Form Trigger Button for Selected Neighborhood */}
            <div className="pt-2 space-y-3">
              <a
                href={selectedNeighborhood.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Enviar Simulação no Formulário da {selectedNeighborhood.name}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/5511999999999?text=Olá!%20Fiz%20uma%20simulação%20para%20o%20bairro%20da%20${selectedNeighborhood.name}%20no%20valor%20de%20${encodeURIComponent(formatBRL(propertyPrice))}%20com%20entrada%20de%20${encodeURIComponent(formatBRL(downPaymentAmount))}.%20Gostaria%20de%20validar%20as%20condições!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Validar Simulação no WhatsApp</span>
              </a>
            </div>

            <div className="text-[10px] text-slate-500 text-center">
              Os valores apresentados são simulações aproximadas sujeitas a análise de crédito da instituição financeira e aprovação cadastral.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
