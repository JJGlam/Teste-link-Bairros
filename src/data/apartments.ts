export interface ApartmentImage {
  url: string;
  caption: string;
  category: 'fachada' | 'living' | 'lazer' | 'quarto' | 'planta';
}

export interface NeighborhoodData {
  id: 'mooca' | 'bras' | 'morumbi';
  name: string;
  zone: string;
  formUrl: string;
  badge: string;
  accentColor: string;
  tagline: string;
  description: string;
  projectTitle: string;
  typologies: string;
  sizeRange: string;
  startingPrice: string;
  startingPriceRaw: number;
  monthlyEstimate: string;
  address: string;
  mainImage: string;
  images: ApartmentImage[];
  highlights: string[];
  lifestyle: {
    transport: string;
    gastronomy: string;
    schools: string;
    greenAreas: string;
    commerce: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
  idealFor: string;
  status: string;
}

export const NEIGHBORHOODS: NeighborhoodData[] = [
  {
    id: 'mooca',
    name: 'Mooca',
    zone: 'Zona Leste',
    formUrl: 'https://forms.gle/Xp1yWwsdemJk7QrL6',
    badge: 'Tradição & Qualidade de Vida',
    accentColor: 'from-amber-600 to-amber-700',
    tagline: 'O charme da tradição italiana com a modernidade que sua família merece',
    description: 'A Mooca é um dos bairros mais acolhedores e valorizados de São Paulo. Aqui, a convivência comunitária harmoniza perfeitamente com a gastronomia secular e novos empreendimentos com lazer de clube.',
    projectTitle: 'Reserva Mooca Tradizione',
    typologies: '2 e 3 Dorms (1 Suíte) | Churrasqueira na Varanda',
    sizeRange: '58m² a 108m²',
    startingPrice: 'R$ 429.000',
    startingPriceRaw: 429000,
    monthlyEstimate: 'A partir de R$ 1.890/mês',
    address: 'Próximo à Av. Paes de Barros e Clube Juventus, Mooca - SP',
    mainImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
        caption: 'Fachada contemporânea com elementos de tijolo rústico',
        category: 'fachada'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Living integrado com varanda gourmet espaçosa',
        category: 'living'
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
        caption: 'Piscina aquecida com solarium e deck molhado',
        category: 'lazer'
      },
      {
        url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
        caption: 'Suíte master com closet e janela antirruído',
        category: 'quarto'
      }
    ],
    highlights: [
      'A 6 minutos do Metrô Bresser-Mooca e fácil acesso à Radial Leste',
      'Varanda gourmet nivelada com churrasqueira a carvão e bancada em granito',
      'Lazer completo: piscina climatizada, salão nobre de festas, pet place e academia com equipamentos profissionais',
      'Polo gastronômico incomparável: Di Cunto, Pizzaria San Gennaro e Dona Carmela a poucos passos',
      '1 ou 2 vagas de garagem determinadas e cobertas + ponto para carro elétrico'
    ],
    lifestyle: {
      transport: 'Metrô Bresser-Mooca (Linha 3-Vermelha), CPTM Juventus-Mooca e Av. Paes de Barros.',
      gastronomy: 'Berço da melhor gastronomia italiana de SP: cantinas clássicas, padarias artesanais e cervejarias.',
      schools: 'Universidade São Judas Tadeu, Colégio Santa Catarina e Colégio Passo Seguro.',
      greenAreas: 'Parque Sabesp Mooca e praças arborizadas para caminhada matinal.',
      commerce: 'Mooca Plaza Shopping, Mercado Municipal da Mooca e comércio de bairro tradicional.'
    },
    metrics: [
      { label: 'Valorização média', value: '+14.2% nos últimos 24m' },
      { label: 'Aprovação de moradores', value: '98% recomendam' },
      { label: 'Distância do Metrô', value: '600 metros' },
      { label: 'Itens de Lazer', value: 'Mais de 18 opções' }
    ],
    idealFor: 'Famílias, recém-casados e quem não abre mão de segurança, tradição e alta qualidade de vida.',
    status: 'Condições Especiais de Lançamento'
  },
  {
    id: 'bras',
    name: 'Brás',
    zone: 'Centro / Conectividade Total',
    formUrl: 'https://forms.gle/zBW1XFm9xL51Rzer6',
    badge: 'Máximo Yield & Investimento',
    accentColor: 'from-blue-600 to-indigo-700',
    tagline: 'O epicentro da mobilidade e do comércio com a rentabilidade mais expressiva de SP',
    description: 'O Brás passa pela maior transformação urbana de São Paulo. Com conexão metroferroviária imbatível e demanda infinita por hospedagem e moradia, é a escolha número 1 de investidores e jovens que buscam praticidade.',
    projectTitle: 'Brás Urban Smart & Hub',
    typologies: 'Studios Inteligentes e 1 a 2 Dormitórios',
    sizeRange: '24m² a 48m²',
    startingPrice: 'R$ 229.000',
    startingPriceRaw: 229000,
    monthlyEstimate: 'A partir de R$ 980/mês',
    address: 'A 300m da Estação Brás de Metrô e Trens, São Paulo - SP',
    mainImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
        caption: 'Torre moderna com arquitetura arrojada no coração de São Paulo',
        category: 'fachada'
      },
      {
        url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
        caption: 'Studio funcional decorado para locação Airbnb ou moradia prática',
        category: 'living'
      },
      {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
        caption: 'Rooftop Lounge com piscina de borda infinita e vista para a skyline',
        category: 'lazer'
      },
      {
        url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
        caption: 'Dormitório acolhedor com excelente aproveitamento de luz natural',
        category: 'quarto'
      }
    ],
    highlights: [
      'A 3 minutos a pé da Estação Brás (Conexão direta com 5 linhas: 3-Vermelha, 7, 10, 11 e 12)',
      'Rentabilidade projetada de 0.8% a 1.2% a.m. com locações short-stay (Airbnb) e long-stay',
      'Rooftop com Sky Bar, piscina com borda infinita e vista panorâmica para o centro histórico',
      'Condomínio inteligente: fechadura eletrônica, coworking com cabines acústicas e lavanderia OMO',
      'Elegível a programas com taxas de financiamento subsidiadas e entrada ultra facilitada'
    ],
    lifestyle: {
      transport: 'Maior hub de transporte de SP: Linhas 3-Vermelha, 7-Rubi, 10-Turquesa, 11-Coral e 12-Safira.',
      gastronomy: 'Acesso imediato aos restaurantes da Mooca, Mercadão Central e Centro Histórico.',
      schools: 'Fácil acesso à Fatec SP, Etec Santa Ifigênia, Mackenzie e PUC através do metrô.',
      greenAreas: 'Próximo ao Parque Dom Pedro II e Parque do Belém.',
      commerce: 'Maior polo confeccionista e atacadista da América Latina, feirinhas e megashoppings.'
    },
    metrics: [
      { label: 'Yield estimado', value: 'Até 12.4% ao ano' },
      { label: 'Vacância média', value: 'Menor que 12 dias' },
      { label: 'Conexões de transporte', value: '5 Linhas sobre trilhos' },
      { label: 'Público flutuante diário', value: '+300 mil pessoas' }
    ],
    idealFor: 'Investidores com foco em renda passiva por aluguel, nômades digitais e quem busca mobilidade máxima.',
    status: 'Últimas Unidades na 1ª Tabela'
  },
  {
    id: 'morumbi',
    name: 'Morumbi',
    zone: 'Zona Sul / Nobre',
    formUrl: 'https://forms.gle/D5Ayq7bvrL6roN976',
    badge: 'Sofisticação & Alto Padrão',
    accentColor: 'from-emerald-700 to-teal-800',
    tagline: 'O requinte de viver cercado de verde e conforto supremo na Zona Sul paulistana',
    description: 'O Morumbi é sinônimo de exclusividade, ruas arborizadas, condomínios clube majestosos e proximidade aos mais prestigiados colégios internacionais e hospitais de ponta de São Paulo.',
    projectTitle: 'Morumbi Grand Garden & Panamby',
    typologies: '2 a 4 Suítes | Amplo Terraço Gourmet & Pé-Direito Duplo',
    sizeRange: '78m² a 168m²',
    startingPrice: 'R$ 689.000',
    startingPriceRaw: 689000,
    monthlyEstimate: 'A partir de R$ 3.200/mês',
    address: 'Região do Panamby / Próximo ao Parque Burle Marx, Morumbi - SP',
    mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        caption: 'Residência sofisticada integrada à natureza exuberante',
        category: 'fachada'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Living com pé-direito imponente e integração à varanda panorâmica',
        category: 'living'
      },
      {
        url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
        caption: 'Complexo aquático com piscina aquecida coberta e raia de 25 metros',
        category: 'lazer'
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
        caption: 'Suíte master espaçosa com varanda privativa e acabamentos premium',
        category: 'quarto'
      }
    ],
    highlights: [
      'A poucos minutos do Parque Burle Marx, Shopping Cidade Jardim e Shopping Jardim Sul',
      'Quadra de tênis de saibro oficial, quadra de beach tennis e complexo aquático aquecido',
      'Área verde preservada de mais de 10.000m² com trilha privativa para caminhada',
      'Segurança 24h com guarita blindada, clausura dupla para veículos e biometria facial',
      '2 a 3 vagas de garagem demarcadas e depósito privativo no subsolo'
    ],
    lifestyle: {
      transport: 'Estação São Paulo-Morumbi (Linha 4-Amarela), Av. Giovanni Gronchi e futura Linha Ouro.',
      gastronomy: 'Alta gastronomia: bistrôs no Panamby, restaurantes do Shopping Cidade Jardim e empórios.',
      schools: 'Colégio Visconde de Porto Seguro, Graded School, Santo Américo e Miguel de Cervantes.',
      greenAreas: 'Parque Burle Marx com mais de 138 mil m² de Mata Atlântica e bosque privativo do condomínio.',
      commerce: 'Shopping Jardim Sul, Morumbi Town Shopping, Shopping Cidade Jardim e Pão de Açúcar Minuto.'
    },
    metrics: [
      { label: 'Área Verde', value: '+10.000m² preservados' },
      { label: 'Vagas Privativas', value: '2 a 3 Vagas cobertas' },
      { label: 'Colégios de Elite', value: 'A menos de 5 min' },
      { label: 'Itens de Clube', value: '+26 atrações de lazer' }
    ],
    idealFor: 'Famílias que exigem amplitude, segurança total, contato com áreas verdes e conveniência de ponta.',
    status: 'Oportunidade Exclusiva para Cadastro VIP'
  }
];

export const COMPARISON_FEATURES = [
  {
    feature: 'Perfil Predominante',
    mooca: 'Famílias, casais e tradicionalistas',
    bras: 'Investidores (Airbnb), jovens e nômades',
    morumbi: 'Famílias com filhos e alto padrão'
  },
  {
    feature: 'Tipologias Disponíveis',
    mooca: '2 e 3 Dormitórios com varanda gourmet',
    bras: 'Studios funcionais e 1 a 2 Dorms',
    morumbi: '2 a 4 Suítes com amplo terraço'
  },
  {
    feature: 'Metragens',
    mooca: '58m² a 108m²',
    bras: '24m² a 48m²',
    morumbi: '78m² a 168m²'
  },
  {
    feature: 'A partir de',
    mooca: 'R$ 429.000',
    bras: 'R$ 229.000',
    morumbi: 'R$ 689.000'
  },
  {
    feature: 'Parcela de Pré-lançamento',
    mooca: 'A partir de R$ 1.890/mês',
    bras: 'A partir de R$ 980/mês',
    morumbi: 'A partir de R$ 3.200/mês'
  },
  {
    feature: 'Ponto Forte de Mobilidade',
    mooca: 'Radial Leste e Metrô Bresser-Mooca',
    bras: '5 Linhas integradas de Metrô e CPTM',
    morumbi: 'Linha 4-Amarela e principais pontes'
  },
  {
    feature: 'Vagas de Garagem',
    mooca: '1 a 2 vagas cobertas',
    bras: 'Opcional / Mobilidade sobre trilhos',
    morumbi: '2 a 3 vagas demarcadas + depósito'
  },
  {
    feature: 'Principal Diferencial de Lazer',
    mooca: 'Varanda gourmet e salão nobre',
    bras: 'Rooftop com piscina e coworking OMO',
    morumbi: 'Quadra de tênis e bosque de 10.000m²'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Como funciona o atendimento após preencher o formulário do bairro?',
    answer: 'Ao enviar suas informações no formulário oficial do Google correspondente ao bairro escolhido (Mooca, Brás ou Morumbi), um corretor especialista dedicado daquele empreendimento entrará em contato em menos de 15 minutos via WhatsApp ou telefone para fornecer plantas detalhadas, tabela de preços da 1ª fase e simular o fluxo de pagamento.'
  },
  {
    question: 'Posso usar meu saldo do FGTS na compra do apartamento?',
    answer: 'Sim! Os empreendimentos da Mooca e do Brás se enquadram nas regras vigentes do FGTS para abatimento do valor de entrada ou amortização do saldo devedor. No Morumbi, dependendo da faixa de avaliação e do perfil de financiamento bancário (SFH), o FGTS também pode ser utilizado.'
  },
  {
    question: 'Qual é a renda mínima familiar recomendada para cada bairro?',
    answer: 'No Brás, é possível obter aprovação com renda familiar a partir de aproximadamente R$ 3.500 (composição de renda de até 3 pessoas). Na Mooca, a partir de R$ 6.800. No Morumbi, recomenda-se renda familiar acima de R$ 11.500. Nossa equipe realiza a pré-análise de crédito bancário sem custo.'
  },
  {
    question: 'Como funciona o retorno para quem investe no Brás?',
    answer: 'O Brás possui altíssima demanda de locação tanto mensal quanto diária (short-stay / Airbnb) devido à proximidade dos polos comerciais de moda e facilidade de locomoção com 5 linhas de transporte ferroviário. A rentabilidade histórica média gira entre 0.8% e 1.2% ao mês sobre o capital investido.'
  },
  {
    question: 'É possível visitar o apartamento decorado?',
    answer: 'Com certeza! Ao preencher o formulário do bairro do seu interesse, reservaremos seu horário com acesso VIP e estacionamento gratuito no stand de vendas, garantindo atendimento exclusivo sem filas.'
  }
];

export const REVIEWS = [
  {
    name: 'Carlos & Patrícia Mantovani',
    role: 'Compradores - Mooca',
    comment: 'Crescemos na Mooca e não queríamos sair daqui por nada. Conseguimos uma unidade com varanda gourmet espetacular e uma condição de entrada parcelada direta que facilitou muito nosso planejamento familiar.',
    stars: 5,
    tag: 'Morador Mooca'
  },
  {
    name: 'Rodrigo Takahashi',
    role: 'Investidor Imobiliário - Brás',
    comment: 'Adquiri dois studios no lançamento do Brás exclusivamente para colocar no Airbnb e locação corporativa. A localização ao lado da estação é garantia de ocupação máxima o ano inteiro.',
    stars: 5,
    tag: 'Investidor Brás'
  },
  {
    name: 'Dra. Helena Siqueira',
    role: 'Compradora - Morumbi',
    comment: 'Buscávamos mais espaço e segurança para os nossos dois filhos. O bosque privativo e as escolas excelentes bem ao lado foram o fator decisivo para escolhermos o projeto no Morumbi. Atendimento impecável.',
    stars: 5,
    tag: 'Morador Morumbi'
  }
];
