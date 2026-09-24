import React from 'react';
import { NEIGHBORHOODS } from '../data/apartments';
import { Building2, ExternalLink, ShieldCheck, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenFormModal: (neighborhoodId: 'mooca' | 'bras' | 'morumbi') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenFormModal }) => {
  return (
    <footer className="bg-[#070a10] border-t border-slate-800 text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20">
                <Building2 className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-wider font-brand text-white flex items-center gap-1.5">
                  SP PRIME <span className="text-amber-400">IMÓVEIS</span>
                </span>
                <span className="block text-[10px] tracking-widest uppercase text-slate-400 -mt-1 font-medium">
                  Mooca · Brás · Morumbi
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Especialistas em lançamentos e oportunidades imobiliárias de alto padrão e alta rentabilidade nas melhores regiões de São Paulo.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 transition-colors font-medium text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 3: Formulários Oficiais */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Formulários dos Bairros
            </h4>
            <ul className="space-y-2.5">
              {NEIGHBORHOODS.map(n => (
                <li key={n.id}>
                  <a
                    href={n.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors group"
                  >
                    <span>Formulário {n.name}</span>
                    <ExternalLink className="w-3 h-3 text-amber-400/70 group-hover:text-amber-400" />
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => onOpenFormModal('mooca')}
                  className="text-amber-400 hover:underline font-semibold"
                >
                  Central de Cadastro VIP →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Links Rápidos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#mooca" className="hover:text-amber-400 transition-colors">Apartamentos Mooca</a>
              </li>
              <li>
                <a href="#bras" className="hover:text-amber-400 transition-colors">Studios & Apts Brás</a>
              </li>
              <li>
                <a href="#morumbi" className="hover:text-amber-400 transition-colors">Residenciais Morumbi</a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-amber-400 transition-colors">Comparativo de Bairros</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-400 transition-colors">Simulador Financeiro</a>
              </li>
            </ul>
          </div>

          {/* Col 5: Atendimento & Segurança */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Segurança & CRECI
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Intermediação imobiliária autorizada pelos incorporadores parceiros.</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>São Paulo - SP, Brasil</span>
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                CRECI Jurídico nº 038492-J. Todas as imagens e plantas são ilustrativas.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} SP Prime Imóveis. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Privacidade & LGPD Respeitada</span>
            <span>·</span>
            <span>Termos de Uso</span>
            <span>·</span>
            <span>Registro de Incorporação Válido</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
