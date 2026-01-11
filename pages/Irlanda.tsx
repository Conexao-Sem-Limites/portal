
import React from 'react';
import { Link } from 'react-router-dom';

const Irlanda: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* 1) HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1920&q=80" 
          alt="Irlanda Cliffs of Moher" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <span className="inline-block text-emerald-400 font-black tracking-[0.4em] text-sm uppercase mb-6 neon-accent-green">
            ILHA ESMERALDA
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
            Irlanda: estudo, trabalho e qualidade de vida no mesmo destino
          </h1>
          <p className="text-xl md:text-2xl font-light italic mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            A Irlanda não é apenas um lugar para aprender inglês; é um ecossistema de oportunidades, segurança e conexões globais que transformam sua visão de mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/caminhos" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full font-black text-lg transition-all shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:scale-105 neon-glow-green"
            >
              Falar com um especialista
            </Link>
            <Link 
              to="/caminhos" 
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all"
            >
              Ver planos de consultoria
            </Link>
          </div>
        </div>
      </section>

      {/* 2) PRINCIPAIS DESTINOS DA IRLANDA */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-600 dark:text-emerald-400 font-black tracking-widest text-xs uppercase neon-accent-green">ONDE TUDO ACONTECE</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900 dark:text-slate-100 tracking-tight">Principais Destinos</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { city: 'Dublin', profile: 'Tecnologia, empregos e vida urbana vibrante.', icon: '🏙️' },
              { city: 'Cork', profile: 'Equilíbrio ideal entre custo-benefício e qualidade de vida.', icon: '⛵' },
              { city: 'Galway', profile: 'Perfil estudantil, cultural e alma musical da Irlanda.', icon: '🎻' },
              { city: 'Limerick', profile: 'Ideal para quem busca um começo estratégico e econômico.', icon: '🏰' }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:bg-emerald-600 hover:scale-105 hover:shadow-2xl neon-card">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-slate-100 group-hover:text-white uppercase tracking-tight">{item.city}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm group-hover:text-white/80 font-light leading-relaxed">
                  {item.profile}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) VISTOS PARA A IRLANDA */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-[3rem] blur-2xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
            <div className="relative p-12 bg-white dark:bg-slate-950 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-3xl mb-8">🛡️</div>
              <h3 className="text-3xl font-black mb-6 text-slate-900 dark:text-slate-100 neon-accent-green">Visto de Estudo (Stamp 2)</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3">✓</span>
                  <span className="text-slate-600 dark:text-slate-400">Permite trabalhar 20h/semana (aulas) e 40h/semana (férias).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3">✓</span>
                  <span className="text-slate-600 dark:text-slate-400">Válido por 8 meses (renovável até 2 vezes).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3">✓</span>
                  <span className="text-slate-600 dark:text-slate-400">Exige curso de 25 semanas e seguro saúde governamental.</span>
                </li>
              </ul>
              <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-2xl border border-rose-100 dark:border-rose-900/30">
                <p className="text-rose-600 dark:text-rose-400 font-bold text-sm uppercase tracking-widest mb-2">Erro Comum</p>
                <p className="text-rose-700 dark:text-rose-300 text-sm italic">
                  "Muitos brasileiros chegam sem a comprovação financeira correta (4.500€ a 10.000€ dependendo do caso) e acabam tendo o visto negado logo na chegada."
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-emerald-600 dark:text-emerald-400 font-black tracking-widest text-xs uppercase">LEGALIZE-SE</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">O Caminho Legal sem Complicar</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              Diferente de outros países, o visto de estudante na Irlanda é prático. Você embarca apenas com o passaporte e o suporte da sua escola, e resolve a burocracia do IRP (Irish Residence Permit) já em solo irlandês.
            </p>
          </div>
        </div>
      </section>

      {/* 4) INTERCÂMBIO NA IRLANDA */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-950 text-white p-12 md:p-20 rounded-[4rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-emerald-500/20 transition-all"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black mb-8 leading-tight">Intercâmbio: Mais que Inglês</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-emerald-400 uppercase text-xs tracking-widest mb-2">CURSOS</h4>
                    <p className="text-slate-300 font-light leading-relaxed">De cursos de inglês geral até preparatórios para o IELTS. A duração padrão de intercâmbio com trabalho é de 25 semanas de aula + 8 semanas de férias.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-400 uppercase text-xs tracking-widest mb-2">BENEFÍCIOS</h4>
                    <p className="text-slate-300 font-light leading-relaxed">Fazer intercâmbio na Irlanda te coloca em contato direto com nativos amigáveis e estudantes do mundo inteiro, acelerando seu aprendizado em tempo recorde.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10">
                <h4 className="text-xl font-bold mb-6 neon-accent-green">Perfil do Estudante</h4>
                <p className="text-slate-400 text-sm italic mb-8">"Pessoas de 18 a 50+ anos que buscam recomeçar, mudar de carreira ou simplesmente viver uma imersão cultural profunda enquanto financiam sua estadia através do trabalho."</p>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border border-slate-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop" alt="avatar" />
                    <img className="w-8 h-8 rounded-full border border-slate-900" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop" alt="avatar" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">+500 brasileiros este mês</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) TRABALHO NA IRLANDA */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Trabalho na Europa</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-white dark:bg-slate-950 rounded-[3rem] border border-slate-100 dark:border-slate-800 neon-card">
              <h3 className="text-2xl font-black mb-6 text-emerald-600 dark:text-emerald-400 neon-accent-green">Setores que Contratam</h3>
              <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6">
                O setor de hospitalidade (hotéis, bares, restaurantes) é o principal motor de vagas para estudantes. Porém, como hub tech, áreas como suporte ao cliente bilíngue e TI também são abundantes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl text-center">
                  <p className="text-lg font-black text-slate-900 dark:text-slate-100 uppercase tracking-tighter">Hospitality</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl text-center">
                  <p className="text-lg font-black text-slate-900 dark:text-slate-100 uppercase tracking-tighter">Retail</p>
                </div>
              </div>
            </div>
            <div className="p-10 bg-white dark:bg-slate-950 rounded-[3rem] border border-slate-100 dark:border-slate-800 neon-card">
              <h3 className="text-2xl font-black mb-6 text-emerald-600 dark:text-emerald-400 neon-accent-green">Realidade do Mercado</h3>
              <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6 italic">
                "Não espere começar em uma cadeira de executivo no primeiro mês. O caminho comum envolve trabalhos operacionais que pagam o salário mínimo irlandês (aprox. €12.70/hora), o que já é suficiente para viver dignamente e até viajar."
              </p>
              <div className="flex items-center text-sm font-bold text-emerald-500 uppercase tracking-widest">
                <span>Vagas iniciais comuns: Kitchen Porter, Cleaner, Sales Assistant.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) ENSINO SUPERIOR */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 dark:text-slate-100 tracking-tight leading-tight">Sua Carreira em Nível Global</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8">
              A Irlanda é lar de instituições centenárias como o Trinity College. O ensino superior é a porta de entrada para quem deseja migrar permanentemente através de um visto Stamp 1G (Graduate Visa), que permite trabalhar full-time por até 2 anos após a formatura.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-emerald-600 font-bold uppercase tracking-widest text-xs">
                <span>✓ Diplomas reconhecidos em toda a UE</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-600 font-bold uppercase tracking-widest text-xs">
                <span>✓ Foco em inovação e empreendedorismo</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1523050853064-96f675c0dd3b?auto=format&fit=crop&w=1200&q=80" 
              className="rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" 
              alt="Universidade Irlanda" 
            />
          </div>
        </div>
      </section>

      {/* 7) MORADIA */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Moradia: Onde será seu lar</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">Encontrar acomodação é o maior desafio atual da Irlanda, por isso o planejamento antecipado é vital.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: 'Host Family', info: 'Ideal para os primeiros meses, focado em imersão cultural e praticidade.', icon: '🏡' },
              { type: 'Shared Rooms', info: 'A opção mais comum para estudantes economizarem no aluguel.', icon: '👥' },
              { type: 'Student Residency', info: 'Conforto e networking em complexos feitos para o público jovem.', icon: '🏢' }
            ].map((house, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-center hover:bg-white/10 transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform">{house.icon}</div>
                <h4 className="text-xl font-bold mb-4 neon-accent-green uppercase tracking-tight">{house.type}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{house.info}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-[2.5rem] text-center max-w-3xl mx-auto">
             <p className="text-emerald-400 font-black text-xs uppercase tracking-widest mb-2">Dica de Especialista</p>
             <p className="text-sm opacity-80 italic">"Nunca feche um aluguel de longo prazo estando ainda no Brasil. Golpes são comuns. Reserve um acomodação temporária e visite os lugares pessoalmente."</p>
          </div>
        </div>
      </section>

      {/* 8) CONECTIVIDADE, SEGURANÇA E ECONOMIA */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-10 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
              <div className="text-4xl mb-6">📶</div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Conectividade</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light">Internet ultra-rápida e transporte público eficiente com o Leap Card, integrando ônibus, trens e Luas (bonde elétrico).</p>
            </div>
            <div className="p-10 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
              <div className="text-4xl mb-6">🛡️</div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Segurança</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light">A Irlanda está constantemente no Top 10 países mais seguros do mundo. Liberdade para caminhar em qualquer horário.</p>
            </div>
            <div className="p-10 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
              <div className="text-4xl mb-6">💶</div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Economia</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light">Custo de vida médio para estudante entre €800 e €1.200 mensais, variando conforme seu estilo de moradia e lazer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9) CURIOSIDADES SOBRE A IRLANDA */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight neon-accent-green">Sabia que...?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Sem Cobras', desc: 'Diz a lenda que São Patrício as expulsou, mas cientificamente a Irlanda nunca as teve.' },
              { title: 'Berço do Halloween', desc: 'O Samhain é um festival celta que deu origem à festa que amamos hoje.' },
              { title: 'Pub Culture', desc: 'O pub não é apenas para beber, é o centro comunitário da vida irlandesa.' },
              { title: 'Craic', desc: 'Pronuncia-se "crack", é a palavra irlandesa para diversão e boa companhia.' }
            ].map((fact, idx) => (
              <div key={idx} className="p-8 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:-translate-y-2 transition-transform">
                <h4 className="font-black text-emerald-600 dark:text-emerald-400 mb-3 uppercase text-xs tracking-widest">{fact.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-light">{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10) CTA FINAL DE CONVERSÃO */}
      <section className="py-32 bg-emerald-600 dark:bg-emerald-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.3)_0%,_transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Pronto para transformar a Irlanda no seu próximo capítulo?</h2>
          <p className="text-xl mb-12 opacity-90 font-light max-w-2xl mx-auto leading-relaxed">
            Não deixe sua jornada internacional ao acaso. Tenha suporte de quem entende cada detalhe da vida na Ilha Esmeralda.
          </p>
          <Link 
            to="/caminhos" 
            className="inline-block bg-white text-emerald-700 px-16 py-6 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl neon-glow-green"
          >
            Agendar consultoria agora
          </Link>
          <div className="mt-12 flex justify-center space-x-8 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
            <span>Segurança</span>
            <span>•</span>
            <span>Transparência</span>
            <span>•</span>
            <span>Experiência</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Irlanda;
