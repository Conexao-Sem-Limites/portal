
import React from 'react';
import { Link } from 'react-router-dom';

const Dicas: React.FC = () => {
  const categories = [
    {
      title: 'Planejamento Estratégico',
      tag: 'Onde tudo começa',
      desc: 'Uma jornada internacional bem-sucedida começa muito antes do embarque. Definir o propósito, escolher o destino alinhado ao seu perfil e estabelecer metas claras transforma incerteza em direção. Aqui, o planejamento é estruturado por etapas, com visão de médio e longo prazo.​',
      linkText: 'Iniciar Planejamento Guiado​',
      linkPath: '/caminhos',
      icon: '🎯',
      type: 'consultoria'
    },
    {
      title: 'Organização e Documentos',
      tag: 'Burocracia sem erro',
      desc: 'Apostila de Haia, traduções juramentadas, prazos e validade de documentos. A organização documental correta não é detalhe — é o que sustenta decisões seguras e evita erros que comprometem todo o planejamento.​',
      linkText: 'Ver checklists exclusivos',
      linkPath: '/area-de-membros-info',
      icon: '📂',
      type: 'membros'
    },
    {
      title: 'Planejamento Financeiro',
      tag: 'Segurança Econômica',
      desc: 'Não calcule apenas o curso. Você precisa de uma reserva de emergência e entender o custo de vida real (aluguel, mercado, transporte) em euros.',
      linkText: 'Explorar Rotas Financeiras​',
      linkPath: 'https://blog.conexaosemlimites.com',
      isExternal: true,
      icon: '💶',
      type: 'noticias'
    },
    {
      title: 'Vistos e Imigração',
      tag: 'Caminho Legal',
      desc: 'As regras para Portugal e Irlanda mudam constantemente. Entender as diferenças entre vistos de estudo, trabalho e permissão para buscar emprego é essencial para tomar decisões seguras e construir uma jornada sem contratempos.​',
      linkText: 'Analisar Meu Perfil',
      linkPath: '/caminhos',
      icon: '🛡️',
      type: 'consultoria'
    },
    {
      title: 'Moradia e Instalação',
      tag: 'Primeiros Passos',
      desc: 'Evitar golpes é questão de estratégia. Reserve acomodação temporária para as primeiras semanas e aprenda a se organizar para encontrar sua moradia inicial com segurança e planejamento.​',
      linkText: 'Guia de moradia',
      linkPath: '/area-de-membros-info',
      icon: '🏠',
      type: 'membros'
    },
    {
      title: 'Trabalho na Europa',
      tag: 'Carreira Internacional',
      desc: 'Currículo, identificação fiscal e registros sociais: cada passo define sua entrada no mercado de trabalho europeu. Descubra como estruturar seu perfil profissional e encontrar oportunidades de trabalho na Irlanda ou em Portugal.​',
      linkText: 'Explorar Rotas Profissionais​',
      linkPath: 'https://blog.conexaosemlimites.com',
      isExternal: true,
      icon: '💼',
      type: 'noticias'
    }
  ];

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
              GUIA DE PLANEJAMENTO
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              Rotas Para <br/>
              <span className="text-emerald-500">Cruzar</span> <br/>
              <span className="text-rose-500">Fronteiras</span><span className="text-white">.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed max-w-2xl">
              Cruzar fronteiras vai muito além de comprar uma passagem, aplicar para um visto ou escolher uma escola de intercâmbio. Aqui, você encontra orientações práticas e estratégicas para planejar cada etapa da sua jornada na Europa — da decisão inicial ao desembarque, com clareza, segurança e visão de longo prazo.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Tips */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col h-full neon-card"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border ${
                  item.type === 'consultoria' ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' :
                  item.type === 'membros' ? 'bg-rose-500/10 text-rose-600 border-rose-500/20' :
                  'bg-slate-500/10 text-slate-500 border-slate-500/20'
                }`}>
                  {item.tag}
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors neon-accent-green">
                {item.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-10 flex-grow font-light">
                {item.desc}
              </p>

              <div className="pt-6 border-t border-slate-50 dark:border-slate-800">
                {item.isExternal ? (
                  <a 
                    href={item.linkPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors uppercase tracking-widest"
                  >
                    {item.linkText} <span className="ml-2 group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                ) : (
                  <Link 
                    to={item.linkPath}
                    className="inline-flex items-center text-sm font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors uppercase tracking-widest"
                  >
                    {item.linkText} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Center - Refined Layout */}
        <section className="mt-32">
          <div className="bg-slate-950 rounded-[4rem] p-12 md:p-20 border border-slate-900 relative overflow-hidden group shadow-2xl">
            {/* Ambient glow in action center */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
            
            <div className="text-center max-w-4xl mx-auto relative z-10">
              <span className="text-emerald-400 font-black tracking-[0.3em] text-[10px] uppercase mb-6 inline-block">ATENDIMENTO SEM LIMITES</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight">Suporte estratégico para sua jornada</h2>
              <p className="text-slate-400 text-xl font-light mb-16">
                Cada trajetória é única. Escolha o suporte ideal para o seu momento e receba orientação estratégica, personalizada e confiável para viver, estudar ou trabalhar na Europa.​
              </p>
              
              <div className="grid sm:grid-cols-3 gap-8">
                <Link 
                  to="/caminhos" 
                  className="p-10 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:border-emerald-500 transition-all group/card hover:bg-white/10"
                >
                  <div className="text-4xl mb-6 group-hover/card:scale-125 transition-transform">🤝</div>
                  <h4 className="text-lg font-black text-white mb-2 group-hover/card:text-emerald-400 transition-colors uppercase tracking-tight">ANÁLISE DE PERFIL</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Diagnóstico Estratégico</p>
                </Link>
                
                <Link 
                  to="/area-de-membros-info" 
                  className="p-10 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:border-rose-500 transition-all group/card hover:bg-white/10"
                >
                  <div className="text-4xl mb-6 group-hover/card:scale-125 transition-transform">💎</div>
                  <h4 className="text-lg font-black text-white mb-2 group-hover/card:text-rose-400 transition-colors uppercase tracking-tight">Membros</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Conteúdo Deep-Dive</p>
                </Link>
                
                <a 
                  href="https://blog.conexaosemlimites.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-10 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:border-blue-500 transition-all group/card hover:bg-white/10"
                >
                  <div className="text-4xl mb-6 group-hover/card:scale-125 transition-transform">🗞️</div>
                  <h4 className="text-lg font-black text-white mb-2 group-hover/card:text-blue-400 transition-colors uppercase tracking-tight">Notícias</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Update estratégico</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dicas;
