
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const quotes = [
  "Viajar é mais do que mudar de lugar. É mudar de perspectiva.",
  "Viver em outro país começa muito antes do embarque. Começa com a sua decisão.",
  "O medo diminui quando o plano aumenta.",
  "Morar fora não é fuga. É construção.",
  "Quem se prepara, transforma sonho em projeto.",
  "O mundo recompensa quem se organiza para ir além.",
  "Estudar inglês em outro país não é sorte. É estratégia.",
  "Cada passo planejado encurta a distância entre você e o seu destino.",
  "Não é sobre ir embora. É sobre chegar preparado.",
  "Sua história não precisa caber em um só país."
];

const Home: React.FC = () => {
  const [activeQuote, setActiveQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in relative">
      {/* Visual background depth - ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[60%] left-[-10%] w-[600px] h-[600px] bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10">
        <Carousel />

        {/* Consultoria CTA Section - Optimized for Mobile */}
        <section className="py-12 md:py-32 bg-white dark:bg-slate-950 overflow-hidden relative border-b border-slate-50 dark:border-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-6 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-[2.5rem] blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80" 
                    alt="Consultoria e planejamento" 
                    className="w-full h-[300px] md:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="flex flex-col space-y-6 md:space-y-8 mt-8 lg:mt-0">
                <div className="inline-flex items-center space-x-2">
                  <span className="h-px w-8 bg-emerald-500 neon-divider"></span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase neon-accent-green">
                    COM CONEXÃO SE PODE IR MAIS LONGE!
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-slate-100 leading-[1.15]">
                  Mais que uma agência ou assessoria, somos um <span className="text-emerald-600 dark:text-emerald-500 underline decoration-emerald-500/30 decoration-8 underline-offset-4 neon-accent-green">ponto de conexão</span> para quem quer viver na Europa.
                </h2>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  Estudar inglês na Irlanda ou construir uma vida em Portugal exige planejamento. Nossa consultoria personalizada existe para orientar decisões, estruturar caminhos possíveis e apoiar um processo seguro e consciente.
                </p>
                <div className="pt-2">
                  <Link 
                    to="/caminhos" 
                    className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-black text-lg group/link neon-glow-green"
                  >
                    <span className="relative">
                      Conheça nossa metodologia
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
                    <span className="ml-3 group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Motivational Quotes Carousel - Optimized for Mobile */}
        <section className="py-12 md:py-36 bg-gradient-to-br from-emerald-50/30 via-white to-blue-50/30 dark:from-slate-950/40 dark:via-slate-950/40 dark:to-slate-950/40 overflow-hidden relative border-y border-slate-100 dark:border-slate-900/50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-emerald-500/5 dark:bg-emerald-500/0 blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center mb-10 md:mb-16 text-center">
              <span className="text-emerald-600 dark:text-emerald-400 font-black tracking-[0.3em] text-[10px] uppercase mb-4 opacity-70 neon-accent-green">
                Sonhos que atravessam fronteiras
              </span>
              <div className="w-12 h-px bg-slate-200 dark:bg-slate-800 neon-divider"></div>
            </div>
            
            <div className="relative h-[220px] md:h-[220px] lg:h-[180px]">
              <div className="absolute top-0 left-0 md:-left-8 -translate-y-12 text-emerald-500/10 dark:text-emerald-500/5 text-[120px] md:text-[180px] font-serif namespace:serif leading-none select-none pointer-events-none neon-accent-green">
                “
              </div>

              {quotes.map((quote, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    idx === activeQuote 
                      ? 'opacity-100 translate-x-0 scale-100 blur-0' 
                      : 'opacity-0 translate-x-12 scale-95 blur-sm pointer-events-none'
                  }`}
                >
                  <blockquote className="text-xl md:text-4xl lg:text-5xl font-black text-slate-800 dark:text-slate-100 italic leading-tight text-center md:text-left md:pl-16 relative">
                    {quote}
                  </blockquote>
                </div>
              ))}

              <div className="absolute bottom-0 right-0 md:-right-8 translate-y-12 text-emerald-500/10 dark:text-emerald-500/5 text-[120px] md:text-[180px] font-serif leading-none select-none pointer-events-none rotate-180 neon-accent-blue">
                “
              </div>
            </div>

            <div className="flex justify-center items-center space-x-2 md:space-x-3 mt-12 md:mt-20">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveQuote(idx)}
                  className="group relative h-8 w-8 md:w-12 flex items-center justify-center focus:outline-none"
                  aria-label={`Ver manifesto ${idx + 1}`}
                >
                  <div className={`h-1 transition-all duration-700 rounded-full ${
                    idx === activeQuote ? 'w-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] neon-divider' : 'w-4 bg-slate-200 dark:bg-slate-800 group-hover:bg-slate-300 dark:group-hover:bg-slate-700'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Destination Showcase Section - Optimized for Mobile */}
        <section className="py-12 md:py-32 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <span className="text-emerald-600 dark:text-emerald-400 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">
                PARA ONDE IR
              </span>
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter">Sua jornada começa aqui</h2>
              <div className="w-20 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-emerald-500 to-rose-500 mx-auto rounded-full mb-8 md:mb-10 opacity-60"></div>
              <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-light leading-relaxed mb-12 md:mb-20 text-center">
                Irlanda e Portugal são mais do que destinos. São projetos de vida com possibilidades, desafios e caminhos próprios.​ Atuamos de forma especializada nesses dois países para orientar decisões e oferecer consultoria a quem deseja estudar, trabalhar ou viver na Europa com planejamento e clareza.​
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">
              <Link to="/irlanda" className="group relative block aspect-video overflow-hidden rounded-3xl md:rounded-[2.5rem] shadow-xl md:shadow-2xl transition-all duration-700 hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1200&q=80" 
                  alt="Destino Irlanda" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-2 md:mb-4 text-white">Irlanda</h3>
                  <div className="flex items-center space-x-3 text-white/80 font-medium">
                    <span className="text-sm md:text-base">Conheça este destino</span>
                    <span className="w-6 h-px bg-white/40 group-hover:w-10 transition-all duration-500"></span>
                    <span className="text-lg transform transition-transform duration-500 group-hover:translate-x-2">→</span>
                  </div>
                </div>
              </Link>

              <Link to="/portugal" className="group relative block aspect-video overflow-hidden rounded-3xl md:rounded-[2.5rem] shadow-xl md:shadow-2xl transition-all duration-700 hover:-translate-y-2">
                <img 
                  src="https://i.ibb.co/XfnggW2P/new-lisboa.jpg" 
                  alt="Destino Portugal" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-2 md:mb-4 text-white">Portugal</h3>
                  <div className="flex items-center space-x-3 text-white/80 font-medium">
                    <span className="text-sm md:text-base">Conheça este destino</span>
                    <span className="w-6 h-px bg-white/40 group-hover:w-10 transition-all duration-500"></span>
                    <span className="text-lg transform transition-transform duration-500 group-hover:translate-x-2">→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 
            SEÇÃO 1 — ÁREA DE MEMBROS (REFINO VISUAL) 
            Optimized for Mobile
        */}
        <section className="py-12 md:py-20 bg-white dark:bg-slate-950 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-slate-950 rounded-3xl md:rounded-[3.5rem] p-8 md:p-16 border border-emerald-500/20 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden group">
              {/* Complex technological background lines/glows */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(16,185,129,0.1),_transparent_50%)]"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,_rgba(226,27,34,0.05),_transparent_50%)]"></div>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 relative z-10">
                <div className="flex-1 space-y-6 md:space-y-8">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    <span className="flex h-2 w-2 relative mr-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 font-black tracking-widest text-[9px] uppercase">
                      HUB DE CONHECIMENTO PREMIUM
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter">
                    O mapa para quem busca <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">segurança e clareza</span>.
                  </h2>
                  
                  <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light max-w-xl">
                    Na Área de Membros, reunimos experiências reais e orientações práticas em um cofre estratégico, fornecendo as ferramentas necessárias para planejar cada etapa da sua experiência na Europa com confiança.
                  </p>
                  
                  <div className="pt-2">
                    <Link 
                      to="/area-de-membros-info" 
                      className="group relative inline-flex items-center bg-white text-slate-950 px-6 py-4 md:px-8 md:py-4 rounded-2xl font-black text-base transition-all hover:scale-105 shadow-xl overflow-hidden"
                    >
                      <span className="relative flex items-center">
                        Quero saber mais
                        <svg className="ml-3 w-5 h-5 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="flex-1 relative mt-8 lg:mt-0 w-full max-w-lg mx-auto">
                  {/* Dashboard-like visual for digital product feel */}
                  <div className="relative bg-slate-900/60 backdrop-blur-3xl border border-white/10 rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 shadow-2xl transition-transform duration-1000">
                    <div className="flex justify-between items-center mb-6">
                      <div className="space-y-1.5">
                        <div className="h-1.5 w-16 md:w-20 bg-white/20 rounded-full"></div>
                        <div className="h-1.5 w-10 md:w-12 bg-white/10 rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-emerald-500 rounded-sm"></div>
                      </div>
                    </div>
                    
                    <div className="aspect-video bg-slate-800/50 rounded-xl overflow-hidden border border-white/5 relative mb-6">
                      <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                        alt="Comunidade" 
                        className="w-full h-full object-cover opacity-50 grayscale"
                      />
                    </div>
                    <div className="h-px bg-white/5"></div>
                  </div>
                  {/* Decorative blobs */}
                  <div className="absolute -bottom-6 -right-6 w-24 md:w-36 h-24 md:h-36 bg-emerald-500/20 rounded-full blur-[50px] md:blur-[70px] -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
            SEÇÃO 2 — CHAMADA FINAL (CTA FINAL) 
            Compact and Focused Concluding Experience
        */}
        <section className="py-12 md:py-20 bg-slate-950 text-white relative overflow-hidden border-t border-white/5">
          {/* Energy lines and light points (CSS only) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8 md:space-y-10">
            <div className="space-y-4 md:space-y-6">
              <span className="text-emerald-500 font-black tracking-[0.5em] text-[10px] uppercase block animate-bounce">
                ESTÁ DECIDIDO
              </span>
              <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85]">
                Com conexão <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">O mundo não tem limites</span>.
              </h2>
            </div>
            
            <p className="text-base md:text-xl font-light text-slate-400 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
              Explore nossos conteúdos exclusivos e planeje sua futura jornada na Europa com orientação estratégica e suporte especializado.​
            </p>
            
            <div className="pt-4">
              <a 
                href="https://loja.conexaosemlimites.com" 
                className="group relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 w-full md:w-auto"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600 animate-[spin_4s_linear_infinite]"></div>
                
                <div className="relative bg-slate-950 px-8 py-5 md:px-16 md:py-6 rounded-full w-full">
                  <span className="relative text-white text-base md:text-xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-center">
                    ACESSAR LOJA OFICIAL
                    <svg className="ml-4 md:ml-5 w-6 h-6 md:w-7 md:h-7 transform transition-transform group-hover:translate-x-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-8 md:mt-16 flex justify-center space-x-6 md:space-x-12 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-30">
              <span>Seguro</span>
              <span>Rápido</span>
              <span>Exclusivo</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
