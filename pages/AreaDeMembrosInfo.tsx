import React from 'react';

const AreaDeMembrosInfo: React.FC = () => {
  return (
    <div className="animate-fade-in pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-500 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-emerald-400 font-black tracking-widest text-xs uppercase mb-4 border border-emerald-400/30 px-4 py-1 rounded-full neon-accent-green">
            Acesso Exclusivo
          </span>
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
            Área de Membros <br/>Conexão Sem Limites
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto leading-relaxed">
            Informação, estratégia e acompanhamento para sua jornada internacional.
          </p>
          <p className="mt-6 text-emerald-400/80 italic font-medium">
            "Não é apenas conteúdo. É clareza, direção e segurança para quem quer sair do Brasil com consciência."
          </p>
        </div>
      </section>

      {/* What is the Members Area */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-8 text-slate-900 dark:text-slate-100 italic neon-accent-blue">"Sua ponte segura para o novo mundo"</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            A Área de Membros é um ecossistema completo de conhecimento pensado exclusivamente para brasileiros que planejam migrar para Portugal ou Irlanda. É o espaço onde transformamos a ansiedade da mudança em um plano de ação estruturado, oferecendo as ferramentas necessárias para quem busca autonomia e segurança em cada decisão.
          </p>
        </div>
      </section>

      {/* What you will find - Interactive Cards */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight neon-accent-blue">O que você vai encontrar</h2>
            <div className="w-20 h-1.5 bg-rose-500 mx-auto rounded-full mt-4 neon-divider"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { emoji: '💎', title: 'Conteúdos exclusivos', text: 'Acesso a módulos de estudo detalhados que não estão disponíveis em nossas redes sociais.', hint: 'O que ninguém te explica de forma prática' },
              { emoji: '🎥', title: 'Vídeos práticos', text: 'Tutoriais passo a passo sobre burocracias, sites oficiais e processos de imigração.', hint: 'Tutoriais reais feitos por quem viveu o processo' },
              { emoji: '📂', title: 'Guias e materiais', text: 'Checklists para download, modelos de currículo e planilhas de gastos reais.', hint: 'Checklists prontos para facilitar sua vida' },
              { emoji: '🔔', title: 'Atualizações frequentes', text: 'Informações de última hora sobre leis de imigração e mercado de trabalho europeu.', hint: 'Fique por dentro das leis sem burocracia' },
              { emoji: '🤝', title: 'Orientações reais', text: 'Tudo baseado na experiência prática de quem já viveu as dores e alegrias do intercâmbio.', hint: 'Baseado em experiências reais, não teoria' },
              { emoji: '♾️', title: 'Acesso contínuo', text: 'Aprenda no seu ritmo, revisitando os conteúdos sempre que precisar ajustar seu plano.', hint: 'Aprenda no seu tempo, sem pressão' }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/40 relative overflow-hidden neon-card">
                <div className="text-4xl mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">{feature.emoji}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-500 transition-colors neon-accent-green">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{feature.text}</p>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 neon-accent-green">{feature.hint}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Mental Model Section */}
      <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 neon-accent-green">Sua jornada dentro da Área de Membros</h2>
            <p className="text-slate-500 mt-2">Um caminho claro da incerteza ao desembarque.</p>
          </div>
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 hidden lg:block -translate-y-1/2 z-0 neon-divider"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                { step: '1', title: 'Você chega com dúvidas', icon: '🧭', color: 'bg-slate-100' },
                { step: '2', title: 'Você ganha clareza', icon: '💡', color: 'bg-emerald-100' },
                { step: '3', title: 'Você constrói seu plano', icon: '🗺️', color: 'bg-rose-100' },
                { step: '4', title: 'Você toma decisões com segurança', icon: '🛡️', color: 'bg-emerald-500' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className={`w-20 h-20 rounded-full ${i === 3 ? 'bg-emerald-500 text-white neon-glow-green' : 'bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 neon-card'} flex items-center justify-center text-3xl mb-6 shadow-xl transition-all duration-500 group-hover:scale-110 relative`}>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full flex items-center justify-center text-xs font-black">
                      {item.step}
                    </span>
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 max-w-[150px] leading-tight transition-colors group-hover:text-emerald-500 neon-accent-green">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Outcome Focused */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight neon-accent-blue">Transforme seu planejamento</h2>
              <div className="space-y-6">
                {[
                  { title: 'Autonomia', text: 'Você entende o processo e decide com confiança, sem depender de terceiros.' },
                  { title: 'Segurança', text: 'Menos erros, menos retrabalho e menos ansiedade durante todo o trajeto.' },
                  { title: 'Planejamento Inteligente', text: 'Tudo organizado antes de qualquer passo prático, garantindo assertividade.' },
                  { title: 'Economia Real', text: 'Evite custos desnecessários e decisões impulsivas que custam caro.' }
                ].map((benefit, i) => (
                  <div key={i} className="group flex items-start p-4 rounded-2xl transition-all duration-300 hover:bg-white dark:hover:bg-slate-950 hover:shadow-md neon-card">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0 shadow-lg group-hover:rotate-6 transition-transform neon-glow-green">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 transition-colors uppercase text-sm tracking-wide neon-accent-green">{benefit.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[3rem] blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                alt="Planejamento e sucesso" 
                className="relative rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 right-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 max-w-[180px] animate-bounce neon-divider">
                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">Status</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 neon-accent-green">Pronto para o embarque!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Emotional Flow */}
      <section className="py-28 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-500/20 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Comece sua preparação <br/><span className="text-emerald-400">hoje mesmo</span></h2>
          <p className="text-xl mb-6 opacity-80 leading-relaxed max-w-2xl mx-auto">
            Tenha acesso imediato a todo o ecossistema de conhecimento da Conexão Sem Limites e dê o passo mais importante para seu futuro na Europa.
          </p>
          <p className="text-sm italic mb-10 text-slate-400 font-medium">
            "Se você sente que precisa de mais clareza antes de dar o próximo passo, este espaço é para você."
          </p>
          <button 
            onClick={() => window.location.href = 'https://pay.kiwify.com.br/8Pq9MX1'}
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-16 py-6 rounded-full font-black text-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] shadow-[0_10px_30px_rgba(16,185,129,0.3)] neon-glow-blue"
          >
            Quero comprar
          </button>
          <div className="mt-12 flex justify-center items-center space-x-6 opacity-50 text-xs uppercase tracking-widest font-bold">
            <span>✓ Acesso Imediato</span>
            <span>✓ Compra Segura</span>
            <span>✓ Conteúdo Atualizado</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaDeMembrosInfo;