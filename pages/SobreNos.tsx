
import React from 'react';
import { Link } from 'react-router-dom';

const SobreNos: React.FC = () => {
  return (
    <div className="animate-fade-in pb-20 overflow-x-hidden">
      {/* Hero Section: The Soul of the Brand */}
      <section className="relative py-24 md:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-rose-500 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-emerald-400 font-black tracking-[0.4em] text-[10px] uppercase mb-6 neon-accent-green">
              NOSSA ESSÊNCIA
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              Conectar <span className="text-emerald-500">sonhos</span>. <br/>
              Expandir <span className="text-rose-500">fronteiras</span>.
            </h1>
            <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed max-w-4xl">
              Nascemos da experiência real de quem já atravessou o oceano para viver um intercâmbio linguístico e imigrar para outro país, com a missão de transformar decisões de deixar a própria casa em jornadas bem planejadas, conscientes e sem limites.​
            </p>
          </div>
        </div>
      </section>

      {/* The Origin: Storytelling Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[3rem] blur-2xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
              <div className="relative rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" 
                  alt="Nossa equipe e visão" 
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <div className="space-y-0.5">
                    <p className="text-3xl md:text-4xl font-black neon-accent-green leading-none">De Intercambistas</p>
                    <p className="text-lg md:text-xl font-light opacity-80 mb-4">Para Intercambistas.</p>
                    <p className="text-3xl md:text-4xl font-black neon-accent-blue leading-none">De imigrante</p>
                    <p className="text-lg md:text-xl font-light opacity-80">Para imigrante.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <h2 className="text-4xl font-black text-slate-900 dark:text-slate-100 leading-tight neon-accent-blue">
                A história por trás da <br/> <span className="text-emerald-600">Conexão Sem Limites</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                <p>
                  Não nascemos como uma empresa tradicional de consultoria. Somos resultado de anos de vivência prática em solo europeu, construída por quem enfrentou, na realidade, os desafios de estudar, trabalhar e imigrar para outro país.​
                </p>
                <p>
                  Fundada por especialistas que sentiram na própria pele as incertezas, dificuldades e decisões que envolvem a vida no exterior, Surgimos com um propósito claro: criar um caminho mais humano, transparente e consciente para quem deseja viver essa experiência.​
                </p>
                <p>
                  Ao longo do tempo, ajudamos amigos e familiares e ficou evidente que a experiência acumulada e a conexão com Portugal e Irlanda poderiam ir além. Assim, transformamos essa vivência em uma ponte segura para quem busca orientação real, informação confiável e planejamento para construir sua própria jornada na Europa.​
                </p>
                <div className="pt-6 grid grid-cols-2 gap-8">
                  <div className="group">
                    <p className="text-4xl font-black text-slate-900 dark:text-slate-100 neon-accent-green group-hover:scale-105 transition-transform">100%</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Transparência</p>
                  </div>
                  <div className="group">
                    <p className="text-4xl font-black text-slate-900 dark:text-slate-100 neon-accent-blue group-hover:scale-105 transition-transform">+500</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Vidas Impactadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto: Mission & Vision Reimagined */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white dark:bg-slate-950 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 neon-card">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-10 text-emerald-600 neon-divider">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-3xl font-black mb-6 text-slate-900 dark:text-slate-100 neon-accent-green">Nossa Missão</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                Ser o suporte confiável para quem deseja expandir seus horizontes. Atuamos por meio de uma consultoria estratégica que valoriza a legalidade, o planejamento financeiro consciente e o acolhimento humano em cada etapa da jornada.​
              </p>
            </div>
            
            <div className="group bg-slate-900 text-white p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl transition-all duration-500 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-all"></div>
               <div className="w-16 h-16 bg-rose-500/20 rounded-2xl flex items-center justify-center mb-10 text-rose-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-3xl font-black mb-6 neon-accent-blue">Nossa Visão</h3>
              <p className="text-lg text-slate-300 font-light leading-relaxed">
                Consolidar-nos através das nossas conexões como uma referência em consultoria internacional, tendo Portugal e Irlanda como pontos de partida e sendo reconhecida pela clareza, segurança e impacto positivo na vida de quem decide viver uma experiência fora do país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values: The Pillar of Connection */}
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-emerald-600 dark:text-emerald-400 font-black tracking-widest text-xs uppercase neon-accent-green">NOSSOS PILARES</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900 dark:text-slate-100 neon-accent-blue">Valores que nos guiam</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🤝', title: 'Empatia', desc: 'Entendemos suas dores porque já estivemos no seu lugar.' },
              { emoji: '🛡️', title: 'Ética', desc: 'Honestidade radical sobre as chances e desafios do seu plano.' },
              { emoji: '💎', title: 'Qualidade', desc: 'Conteúdo profundo e suporte técnico de excelência.' },
              { emoji: '🚀', title: 'Inovação', desc: 'Uso de tecnologia e estratégia para facilitar sua transição.' }
            ].map((value, i) => (
              <div key={i} className="group p-10 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:bg-emerald-600 hover:scale-105 hover:shadow-2xl neon-card">
                <div className="text-5xl mb-6 transition-transform group-hover:scale-125 group-hover:rotate-12">{value.emoji}</div>
                <h4 className="text-xl font-black mb-3 text-slate-900 dark:text-slate-100 group-hover:text-white transition-colors uppercase tracking-tight neon-accent-green">{value.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm group-hover:text-white/80 transition-colors font-light leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action: Become part of the story */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[4rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] pointer-events-none group-hover:scale-150 transition-transform duration-[2000ms]"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight relative z-10 neon-accent-green">Sua história na Europa <br/>começa agora.</h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-light relative z-10">
              Não deixe seu sonho limitado pelo medo ou pela falta de informação. Vamos planejar sua jornada juntos?
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/contato" 
                className="bg-white text-emerald-700 px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl neon-glow-green"
              >
                Fale Conosco
              </Link>
              <Link 
                to="/caminhos" 
                className="bg-emerald-900/30 backdrop-blur-md border border-white/30 text-white px-12 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all"
              >
                Iniciar seu planejamento
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;
