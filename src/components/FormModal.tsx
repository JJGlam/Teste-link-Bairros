import React, { useState } from 'react';
import { NEIGHBORHOODS } from '../data/apartments';
import { X, ExternalLink, MessageCircle, CheckCircle, ShieldCheck, Clock, FileText } from 'lucide-react';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNeighborhoodId?: 'mooca' | 'bras' | 'morumbi';
}

export const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  initialNeighborhoodId = 'mooca'
}) => {
  const [selectedId, setSelectedId] = useState<'mooca' | 'bras' | 'morumbi'>(initialNeighborhoodId);

  if (!isOpen) return null;

  const current = NEIGHBORHOODS.find(n => n.id === selectedId) || NEIGHBORHOODS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#101726] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Cadastro de Interesse Oficial
            </div>
            <h3 className="text-xl font-bold text-white font-serif-luxury mt-0.5">
              Formulários Google dos Bairros
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Neighborhood Pill Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Escolha o Bairro que Deseja Cadastrar:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {NEIGHBORHOODS.map(n => (
                <button
                  key={n.id}
                  onClick={() => setSelectedId(n.id)}
                  className={`py-3 px-2 rounded-xl text-center text-xs font-bold transition-all ${
                    selectedId === n.id
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20 scale-[1.02]'
                      : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <div className="text-sm">{n.name}</div>
                  <div className="text-[10px] font-normal opacity-80">{n.startingPrice}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Neighborhood Card Summary */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-amber-400">
                {current.projectTitle}
              </span>
              <span className="text-xs text-slate-400">{current.zone}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {current.tagline}
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              <span><strong>Metragens:</strong> {current.sizeRange}</span>
              <span>·</span>
              <span><strong>Tipologia:</strong> {current.typologies}</span>
            </div>
          </div>

          {/* Form Direct Link Box */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Link do Formulário Oficial do Google ({current.name}):</span>
            </div>

            <a
              href={current.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95 text-center"
            >
              <span>Abrir Formulário da {current.name}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-mono break-all text-center">
              {current.formUrl}
            </div>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Retorno em menos de 15 minutos</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dados protegidos pela LGPD</span>
            </div>
          </div>

          {/* Alternative WhatsApp */}
          <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Prefere atendimento direto pelo WhatsApp?
            </span>
            <a
              href={`https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20receber%20a%20tabela%20de%20preços%20e%20plantas%20do%20lançamento%20na%20${current.name}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 text-xs font-bold border border-emerald-500/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Conversar com Especialista</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
