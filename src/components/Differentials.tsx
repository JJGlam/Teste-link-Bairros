import React from 'react';
import { ShieldCheck, Award, Handshake, TrendingUp, Sparkles, Building2, KeyRound, Clock } from 'lucide-react';

export const Differentials: React.FC = () => {
  const items = [
    {
      icon: TrendingUp,
      title: 'Tabela de Pré-Lançamento',
      desc: 'Adquira sua unidade com preço de primeiro lote e condições especiais de pagamento negociadas direto com a construtora.'
    },
    {
      icon: Handshake,
      title: 'Aprovação de Crédito Ágil',
      desc: 'Equipe de inteligência financeira especializada em aprovar seu financiamento Caixa ou bancário com as menores taxas do mercado.'
    },
    {
      icon: KeyRound,
      title: 'Fluxo de Obras Facilitado',
      desc: 'Possibilidade de diluir o valor da entrada ao longo de 24 a 36 meses, sem juros abusivos durante a fase de construção.'
    },
    {
      icon: ShieldCheck,
      title: 'Segurança Jurídica Integral',
      desc: 'Empreendimentos com Memorial de Incorporação registrado, patrimônio de afetação e garantia de entrega pelas maiores instituições.'
    },
    {
      icon: Award,
      title: 'Acabamentos de Primeira Linha',
      desc: 'Pisos porcelanato, persianas de enrolar com blecaute, infraestrutura para ar-condicionado e lajes com isolamento acústico.'
    },
    {
      icon: Clock,
      title: 'Atendimento Especializado',
      desc: 'Consultores com profundo conhecimento de cada região para te orientar sobre valorização, zoneamento e retorno sobre locação.'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-[#0c121d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Por Que Investir Conosco</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif-luxury">
            Diferenciais que Garantem a Sua <span className="gold-gradient-text">Melhor Escolha</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Compre seu imóvel com total transparência, assessoria contínua e as condições mais vantajosas da capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#111726]/80 border border-slate-800/80 hover:border-amber-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-serif-luxury">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
