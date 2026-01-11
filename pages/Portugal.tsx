
import React from 'react';
import { Link } from 'react-router-dom';

const Portugal: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* 1) HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=80" 
          alt="Porto, Portugal" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <span className="inline-block text-rose-400 font-black tracking-[0.4em] text-sm uppercase mb-6 neon-accent-blue">
            DESTINO IRMÃO
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
            Portugal: qualidade de vida, segurança e portas abertas para a Europa
          </h1>
          <p className="text-xl md:text-2xl font-light italic mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Viver em Portugal é encontrar o equilíbrio perfeito entre a tradição europeia, um custo de vida acessível e a facilidade de uma língua comum. Um porto seguro para seus novos começos.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/caminhos" 
              className="bg-rose-600 hover:bg-rose-500 text-white px-10 py-5 rounded-full font-black text-lg transition-all shadow-[0_10px_30px_rgba(226,27,34,0.3)] hover:scale-105 neon-glow-blue"
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

      {/* 2) PRINCIPAIS DESTINOS DE PORTUGAL */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rose-600 dark:text-rose-400 font-black tracking-widest text-xs uppercase neon-accent-blue">A CULTURA LUSA</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900 dark:text-slate-100 tracking-tight">Principais Destinos</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { city: 'Lisboa', profile: 'Oportunidades, mobilidade e vida urbana global.', icon: '🚋' },
              { city: 'Porto', profile: 'Custo-benefício, tradição e alma portuense.', icon: '🍷' },
              { city: 'Braga', profile: 'Qualidade de vida imbatível e perfil familiar.', icon: '⛪' },
              { city: 'Coimbra', profile: 'Polo universitário, histórico e estudantil.', icon: '🎓' }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:bg-rose-600 hover:scale-105 hover:shadow-2xl neon-card">
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

      {/* 3) VISTOS PARA PORTUGAL */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-rose-500/10 rounded-[3rem] blur-2xl group-hover:bg-rose-500/20 transition-all duration-700"></div>
            <div className="relative p-12 bg-white dark:bg-slate-950 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl">
              <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-2xl flex items-center justify-center text-3xl mb-8">🛂</div>
              <h3 className="text-3xl font-black mb-6 text-slate-900 dark:text-slate-100 neon-accent-blue">Caminhos para Residência</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-rose-500 uppercase text-xs tracking-widest mb-1">Visto de Estudo</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Para matrículas em universidades ou cursos técnicos.</p>
                </div>
                <div>
                  <h4 className="font-bold text-rose-500 uppercase text-xs tracking-widest mb-1">Visto de Trabalho</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Para quem já possui contrato ou promessa de trabalho.</p>
                </div>
                <div>
                  <h4 className="font-bold text-rose-500 uppercase text-xs tracking-widest mb-1">Visto de Residência (D7/D8)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Focado em aposentados, nômades digitais ou rendas próprias.</p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest flex items-center">
                    <span className="mr-2">👨‍👩‍👧‍👦</span> Reagrupamento Familiar Garantido
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-rose-600 dark:text-rose-400 font-black tracking-widest text-xs uppercase">LEGALIZE-SE</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">Sua Regularização em Solo Luso</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              Portugal oferece um dos processos de imigração mais acolhedores para brasileiros. Seja através do visto prévio ou das manifestações de interesse, o país valoriza a contribuição de quem chega com vontade de somar.
            </p>
          </div>
        </div>
      </section>

      {/* 4) INTERCÂMBIO EM PORTUGAL */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 text-white p-12 md:p-20 rounded-[4rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-rose-500/20 transition-all"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black mb-8 leading-tight">Intercâmbio e Vivência</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-rose-400 uppercase text-xs tracking-widest mb-2">CURSOS E IDIOMAS</h4>
                    <p className="text-slate-300 font-light leading-relaxed">Embora falemos a mesma língua, os cursos de especialização e o intercâmbio universitário são portas de entrada excelentes para o networking europeu.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-rose-400 uppercase text-xs tracking-widest mb-2">PERFIL IDEAL</h4>
                    <p className="text-slate-300 font-light leading-relaxed">Desde jovens universitários até profissionais em transição de carreira que buscam a segurança de um país estável sem o choque linguístico severo.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10">
                <h4 className="text-xl font-bold mb-6 neon-accent-blue">Estudar em Portugal</h4>
                <p className="text-slate-400 text-sm italic mb-8">"Um semestre em Coimbra ou uma pós-graduação em Lisboa não é apenas um diploma, é uma imersão cultural que redefine suas possibilidades na União Europeia."</p>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border border-slate-900" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop" alt="avatar" />
                    <img className="w-8 h-8 rounded-full border border-slate-900" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop" alt="avatar" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-400">Milhares de brasileiros matriculados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) TRABALHO EM PORTUGAL */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Trabalho e Carreira</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-white dark:bg-slate-950 rounded-[3rem] border border-slate-100 dark:border-slate-800 neon-card">
              <h3 className="text-2xl font-black mb-6 text-rose-600 dark:text-rose-400 neon-accent-blue">Setores em Alta</h3>
              <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6">
                O turismo e a tecnologia (TI) são os pilares. Portugal se tornou um hub tecnológico para empresas globais. Áreas de serviços, logística e construção civil também possuem alta demanda por mão de obra estrangeira.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl text-center border border-slate-100 dark:border-slate-800">
                  <p className="text-lg font-black text-slate-900 dark:text-slate-100 uppercase tracking-tighter">Tech Hub</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl text-center border border-slate-100 dark:border-slate-800">
                  <p className="text-lg font-black text-slate-900 dark:text-slate-100 uppercase tracking-tighter">Turismo</p>
                </div>
              </div>
            </div>
            <div className="p-10 bg-white dark:bg-slate-950 rounded-[3rem] border border-slate-100 dark:border-slate-800 neon-card">
              <h3 className="text-2xl font-black mb-6 text-rose-600 dark:text-rose-400 neon-accent-blue">Expectativa vs. Realidade</h3>
              <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6 italic">
                "O salário mínimo em Portugal é um dos mais baixos da Europa Ocidental, mas o custo de vida também acompanha essa métrica. É um país para viver com tranquilidade, não para enriquecer rapidamente através de subempregos."
              </p>
              <div className="flex items-center text-sm font-bold text-rose-500 uppercase tracking-widest">
                <span>Destaque para o novo Visto de Procura de Trabalho.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) ENSINO SUPERIOR */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 dark:text-slate-100 tracking-tight leading-tight">Educação com História e Futuro</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8">
              Muitas universidades portuguesas aceitam a nota do ENEM para ingresso. O diploma português é automaticamente reconhecido em toda a União Europeia, facilitando sua carreira em qualquer um dos 27 países do bloco.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-rose-600 font-bold uppercase tracking-widest text-xs">
                <span>✓ Facilidade de ingresso via ENEM</span>
              </div>
              <div className="flex items-center space-x-3 text-rose-600 font-bold uppercase tracking-widest text-xs">
                <span>✓ Propinas (mensalidades) acessíveis</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1590490359854-dfba19688d70?auto=format&fit=crop&w=1200&q=80" 
              className="rounded-[4rem] shadow-2xl transition-all duration-1000 hover:rotate-2" 
              alt="Universidade Coimbra" 
            />
          </div>
        </div>
      </section>

      {/* 7) MORADIA EM PORTUGAL */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Onde Morar em Portugal</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">As grandes metrópoles oferecem trabalho, mas o interior oferece custo de vida imbatível.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: 'Lisboa & Porto', info: 'Onde o mercado pulsa, mas os aluguéis são mais elevados.', icon: '🏙️' },
              { type: 'Interior & Alentejo', info: 'Paz, custo de vida baixo e a verdadeira alma portuguesa.', icon: '🌾' },
              { type: 'Braga & Aveiro', icon: '🏙️', info: 'O equilíbrio perfeito entre modernidade e custo-benefício.' }
            ].map((house, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-center hover:bg-white/10 transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform">{house.icon}</div>
                <h4 className="text-xl font-bold mb-4 neon-accent-blue uppercase tracking-tight">{house.type}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{house.info}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 p-8 bg-rose-500/10 border border-rose-500/20 rounded-[2.5rem] text-center max-w-3xl mx-auto">
             <p className="text-rose-400 font-black text-xs uppercase tracking-widest mb-2">Dica de Ouro</p>
             <p className="text-sm opacity-80 italic">"Evite contratos de boca. Em Portugal, o contrato de arrendamento registado nas Finanças é o seu principal comprovativo de morada para o título de residência."</p>
          </div>
        </div>
      </section>

      {/* 8) CONECTIVIDADE, SEGURANÇA E ECONOMIA */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-10 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
              <div className="text-4xl mb-6">🚇</div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Transporte</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light">Passe Navegante ou Andante integrando toda a rede urbana por valores fixos mensais acessíveis.</p>
            </div>
            <div className="p-10 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
              <div className="text-4xl mb-6">👮</div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Segurança</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light">Portugal é consistentemente eleito um dos 5 países mais pacíficos do mundo. Segurança real para sua família.</p>
            </div>
            <div className="p-10 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
              <div className="text-4xl mb-6">🛒</div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Custo de Vida</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light">Solteiro: €800-€1.100. Casal: €1.500-€2.000. Família (4): €2.500+. Valores variam por região.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9) CURIOSIDADES SOBRE PORTUGAL */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 uppercase tracking-tight neon-accent-blue">Você sabia?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'País de Mar', desc: 'A Zona Económica Exclusiva de Portugal é 18 vezes o tamanho do seu território terrestre.' },
              { title: 'Livros Históricos', desc: 'Livraria Bertrand em Lisboa é a mais antiga do mundo ainda em funcionamento.' },
              { title: 'Ritmo do Fado', desc: 'Patrimônio da UNESCO, o Fado é a expressão mais profunda da alma lusa.' },
              { title: 'Adaptação', desc: 'O brasileiro é a maior comunidade estrangeira, facilitando o sentimento de "casa".' }
            ].map((fact, idx) => (
              <div key={idx} className="p-8 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:scale-105 transition-all">
                <h4 className="font-black text-rose-600 dark:text-rose-400 mb-3 uppercase text-xs tracking-widest">{fact.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-light">{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10) CTA FINAL DE CONVERSÃO */}
      <section className="py-32 bg-rose-600 dark:bg-rose-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.3)_0%,_transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Portugal pode ser o seu próximo destino. Vamos planejar juntos?</h2>
          <p className="text-xl mb-12 opacity-90 font-light max-w-2xl mx-auto leading-relaxed">
            Nossa consultoria remove as barreiras e incertezas da sua mudança para Portugal, garantindo uma transição legal e planejada.
          </p>
          <Link 
            to="/caminhos" 
            className="inline-block bg-white text-rose-700 px-16 py-6 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl neon-glow-blue"
          >
            Agendar consultoria agora
          </Link>
          <div className="mt-12 flex justify-center space-x-8 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
            <span>Planejamento</span>
            <span>•</span>
            <span>Segurança</span>
            <span>•</span>
            <span>Sucesso</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portugal;
