import React from 'react';

const Loja: React.FC = () => {
  return (
    <div className="py-24 text-center max-w-5xl mx-auto px-6 animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-black mb-8 neon-accent-green">Produtos Digitais</h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
        Acelere seu planejamento com nossos guias exclusivos, e-books e checklists preparados por quem vive o dia a dia da Europa.
      </p>
      
      <div className="grid md:grid-cols-2 gap-10 mb-20">
        <div className="group bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-2xl hover:border-emerald-500/30 neon-card">
          <div className="text-6xl mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-3">📚</div>
          <h3 className="text-2xl font-black mb-4 neon-accent-green">E-books de Destino</h3>
          <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            Guia completo sobre custo de vida real, melhores bairros para morar e panorama do mercado de trabalho local.
          </p>
        </div>
        <div className="group bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-2xl hover:border-blue-500/30 neon-card">
          <div className="text-6xl mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">📝</div>
          <h3 className="text-2xl font-black mb-4 neon-accent-blue">Checklists de Visto</h3>
          <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            Organize sua documentação sem erros. Checklists revisados para garantir que nada falte na sua aplicação.
          </p>
        </div>
      </div>

      <div className="bg-slate-900 dark:bg-slate-900 text-white p-16 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.1)_0%,_transparent_70%)] pointer-events-none group-hover:bg-emerald-500/5 transition-all duration-700"></div>
        <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Tudo o que você precisa em um só lugar</h2>
        <p className="mb-12 opacity-80 max-w-2xl mx-auto font-light text-lg relative z-10">
          Você será redirecionado para nossa plataforma segura de pagamentos onde poderá escolher os melhores materiais para o seu projeto.
        </p>
        <a 
          href="https://loja.conexaosemlimites.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative z-10 inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-16 py-5 rounded-full font-black text-xl transition-all hover:scale-105 shadow-[0_10px_30px_rgba(16,185,129,0.3)] neon-glow-green"
        >
          VISITAR LOJA AGORA
        </a>
      </div>
    </div>
  );
};

export default Loja;