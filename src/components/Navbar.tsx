import React, { useState } from 'react';
import { Building2, Menu, X, ExternalLink, MessageCircle, ChevronDown } from 'lucide-react';
import { NEIGHBORHOODS } from '../data/apartments';

interface NavbarProps {
  onOpenFormModal: (neighborhoodId: 'mooca' | 'bras' | 'morumbi') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFormModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
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
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {/* Dropdown for Neighborhoods */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors py-2"
              >
                <span>Bairros & Projetos</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#121824] border border-slate-800 rounded-xl shadow-2xl p-2 z-50">
                  {NEIGHBORHOODS.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800/70 text-slate-200 hover:text-amber-400 transition-colors group"
                    >
                      <div>
                        <div className="text-sm font-semibold">{item.name}</div>
                        <div className="text-xs text-slate-400">{item.typologies}</div>
                      </div>
                      <span className="text-xs text-amber-400/90 font-medium">Ver</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#comparativo" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              Comparativo
            </a>
            <a href="#simulador" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              Simulador
            </a>
            <a href="#diferenciais" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              Diferenciais
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* Right Action CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20receber%20informações%20sobre%20os%20apartamentos%20na%20Mooca,%20Brás%20ou%20Morumbi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp VIP</span>
            </a>

            <button
              onClick={() => onOpenFormModal('mooca')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 transition-all active:scale-95"
            >
              <span>Acessar Formulários</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={() => onOpenFormModal('mooca')}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-amber-500 text-slate-950"
            >
              Formulários
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1420] border-b border-slate-800 px-4 pt-2 pb-6 space-y-4">
          <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase pt-2">
            Escolha o Bairro:
          </div>
          <div className="grid grid-cols-3 gap-2">
            {NEIGHBORHOODS.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-center rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-slate-200 hover:border-amber-400 hover:text-amber-400"
              >
                {n.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 space-y-2">
            <a
              href="#comparativo"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-slate-300 hover:text-amber-400"
            >
              Comparativo de Bairros
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-slate-300 hover:text-amber-400"
            >
              Simulador de Financiamento
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-slate-300 hover:text-amber-400"
            >
              Diferenciais & Lazer
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-slate-300 hover:text-amber-400"
            >
              Perguntas Frequentes
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFormModal('mooca');
              }}
              className="w-full py-2.5 text-center text-xs font-bold rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Ver Formulários de Cadastro</span>
            </button>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs font-bold rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp com Corretor</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
