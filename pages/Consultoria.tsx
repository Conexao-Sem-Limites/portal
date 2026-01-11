import React from 'react';

const plans = [
  {
    name: 'Primeiros Passos',
    price: 'R$ 89,99',
    desc: 'Ideal para quem está começando a planejar.',
    microDesc: 'Diagnóstico Inicial',
    cta: 'Iniciar Diagnóstico​',
    result: 'Objetivo: Clareza para decidir os próximos passos.',
    url: 'https://pay.kiwify.com.br/G7dsuto',
    duration: 'Sessão 100% online e personalizada',
    features: [
      'Sessão individual de 60 minutos',
      'Diagnóstico de perfil e viabilidade',
      'Esclarecimento de dúvidas básicas',
      'Guia digital de boas-vindas'
    ]
  },
  {
    name: 'Ponto de Ignição',
    price: 'R$ 149,99',
    desc: 'Para quem já decidiu e precisa de um plano de ação.',
    microDesc: 'Para quem já decidiu sair do Brasil​',
    cta: 'Iniciar Planejamento​',
    result: 'Objetivo: Plano estruturado e cronograma definido.',
    url: 'https://pay.kiwify.com.br/aGpkgBP',
    duration: 'Sessão 100% online e personalizada',
    features: [
      'Sessão individual de 90 minutos​',
      'Planejamento de cronograma real',
      'Análise de custos detalhada',
      'Checklist completo de documentos',
      'Suporte via WhatsApp por 7 dias'
    ],
    highlight: true,
    badge: 'MAIS POPULAR'
  },
  {
    name: 'Novo Mundo',
    price: 'R$ 399,99',
    desc: 'Mentoria completa para a transição de vida.',
    microDesc: 'para quem quer direcionamento antes e depois do embarque​',
    cta: 'Iniciar Acompanhamento​',
    result: 'Objetivo: Transição segura do Brasil ao destino.',
    url: 'https://pay.kiwify.com.br/fZYUuK1',
    duration: 'Acompanhamento 100% personalizado',
    features: [
      'Mentoria individual completa',
      'Revisão integral de documentos',
      'Suporte prioritário via WhatsApp por 15 dias',
      'Direcionamento na busca de moradia',
      'Orientação completa pré ou pós-embarque'
    ]
  }
];

const Consultoria: React.FC = () => {
  return (
    <div className="animate-fade-in pb-20 overflow-x-hidden bg-white dark:bg-slate-950">
      {/* Manifesto-style Hero Section */}
      <section className="relative py-24 md:py-32 bg-slate-950 text-white overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block text-emerald-400 font-black tracking-[0.4em] text-[10px] uppercase mb-6 neon-accent-green">
              PLANEJAMENTO ESTRATÉGICO
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              Decisões conscientes <br/>
              constroem <br/>
              futuros sólidos<span className="text-white">.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed max-w-2xl">
              Atuamos de forma estratégica para transformar incertezas em planejamento estruturado, conectando informação qualificada, experiência real e caminhos possíveis para viver, estudar ou trabalhar na Europa com clareza, segurança e direção.​
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-24">
        
        {/* Methodology Re-styled */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-black tracking-[0.3em] text-[10px] uppercase mb-4 inline-block">NOSSA METODOLOGIA</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tighter">
              COMO ATUAMOS?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 1, title: 'Diagnóstico', desc: 'Analisamos seu perfil, objetivos e orçamento para entender a viabilidade real.', color: 'emerald' },
              { id: 2, title: 'Planejamento', desc: 'Traçamos a melhor rota estratégica, definindo vistos, prazos e destinos ideais.', color: 'blue' },
              { id: 3, title: 'Execução', desc: 'Suporte prático na organização de documentos, matrículas e burocracias essenciais.', color: 'rose' },
              { id: 4, title: 'Suporte', desc: 'Mentoria contínua para garantir que sua transição seja legal e sem sustos.', color: 'emerald' }
            ].map((step) => (
              <div 
                key={step.id} 
                className="group bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl transition-all duration-500 hover:-translate-y-2 neon-card"
              >
                <span className="text-4xl font-black mb-6 block text-slate-200 dark:text-slate-800 transition-colors group-hover:text-emerald-500">
                  0{step.id}
                </span>
                <h3 className="text-xl font-black mb-4 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Plans Re-styled as Premium Cards */}
        <section id="planos">
          <div className="text-center mb-20">
            <span className="text-rose-500 font-black tracking-[0.3em] text-[10px] uppercase mb-4 inline-block">INVESTIMENTO</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tighter">
              Sua jornada tem um ponto de partida.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`group flex flex-col p-10 rounded-[3.5rem] border transition-all duration-500 relative hover:-translate-y-4 neon-card ${
                  plan.highlight 
                    ? 'bg-slate-950 text-white border-emerald-500 shadow-2xl lg:scale-105 z-10' 
                    : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-slate-100 dark:border-slate-800'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-slate-900 px-6 py-2 rounded-full text-[10px] font-black shadow-lg uppercase tracking-[0.2em] animate-pulse">
                    {plan.badge}
                  </div>
                )}
                
                <div className="mb-10 text-center">
                  <h3 className="text-3xl font-black mb-2 group-hover:text-emerald-500 transition-colors tracking-tight">{plan.name}</h3>
                  <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-8 ${plan.highlight ? 'text-emerald-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                    {plan.microDesc}
                  </p>
                  <div className="mb-6">
                    <span className="text-sm font-medium opacity-50 block mb-1">Investimento único</span>
                    <span className="text-5xl font-black tracking-tighter neon-accent-green">{plan.price}</span>
                  </div>
                </div>

                <ul className="space-y-5 mb-12 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.highlight ? 'text-emerald-400' : 'text-emerald-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`${plan.highlight ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'} font-light`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => window.location.href = plan.url}
                  className={`w-full py-5 rounded-2xl font-black text-center transition-all flex items-center justify-center space-x-3 group/btn uppercase tracking-widest text-xs ${
                    plan.highlight
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl'
                      : 'bg-slate-950 dark:bg-slate-800 hover:bg-emerald-600 text-white shadow-md'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <span className="transition-transform group-hover/btn:translate-x-2">→</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Action Center */}
        <section className="mt-32">
          <div className="bg-slate-950 rounded-[4rem] p-12 md:p-20 border border-slate-900 relative overflow-hidden group shadow-2xl text-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-rose-500/20 transition-all duration-1000"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-rose-400 font-black tracking-[0.3em] text-[10px] uppercase mb-6 inline-block">Sua nova jornada​</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight">Não é sobre ir embora. É sobre chegar preparado.</h2>
              <p className="text-slate-400 text-xl font-light mb-12 leading-relaxed">
                Nossa metodologia foi construída para minimizar imprevistos e reduzir riscos. Do Primeiros Passos à Mentoria Premium, cada etapa é guiada por estratégia, experiência prática e planejamento consciente.​
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://wa.me/5511915626678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-slate-950 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all"
                >
                  Dúvida rápida? WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Consultoria;