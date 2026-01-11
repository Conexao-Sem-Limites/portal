import React, { useEffect } from 'react';

const Contato: React.FC = () => {
  useEffect(() => {
    // Exact HubSpot embed logic as per requirements
    if (!document.querySelector('script[src="https://js.hsforms.net/forms/embed/50812232.js"]')) {
      const script = document.createElement('script');
      script.src = "https://js.hsforms.net/forms/embed/50812232.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen relative bg-white dark:bg-slate-950 overflow-hidden">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[1000px] h-[1000px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[1000px] h-[1000px] bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-100 dark:via-slate-800 to-transparent opacity-50"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent opacity-50"></div>
      </div>

      <div className="relative z-10 py-16 lg:py-24 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center space-x-3 mb-6 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-100 dark:border-slate-800">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Vamos nos conectar?​</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-slate-100 leading-[0.85] tracking-tighter mb-8">
            O primeiro passo da sua <span className="text-emerald-600">jornada</span> começa <span className="text-rose-600">aqui</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-3xl">
            Escolha a forma de contato que faz mais sentido para você: fale conosco por mensagem direta ou preencha nosso diagnóstico de perfil para receber uma orientação inicial estruturada.​
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact "Quick Actions" Panel */}
          <div className="lg:col-span-4 space-y-4">
            <div className="grid gap-4">
              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/5511915626678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex flex-col p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:border-emerald-500/50 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 transition-transform group-hover:scale-110 group-hover:rotate-12">
                   <svg className="w-20 h-20 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-500/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <h4 className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">Atendimento ágil</h4>
                  <p className="text-2xl font-black text-slate-800 dark:text-slate-100">WhatsApp Oficial</p>
                  <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm font-light">Inicie uma conversa direta com nossos consultores especializados.​</p>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:contato@conexaosemlimites.com" 
                className="group relative flex flex-col p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:border-rose-500/50 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-rose-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-rose-600/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <h4 className="text-xs font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest mb-1">Para Propostas</h4>
                  <p className="text-2xl font-black text-slate-800 dark:text-slate-100">E-mail Corporativo</p>
                  <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm font-light">Envie dúvidas detalhadas ou solicitações de parceria por meio do nosso e-mail oficial.​</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 text-3xl">📍</div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Remoto</h4>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Atendimento Global</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-tighter">Atendimento com hora marcada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Focused Area */}
          <div className="lg:col-span-8 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/10 via-rose-500/10 to-blue-500/10 rounded-[4rem] blur-2xl opacity-50"></div>
            
            <div className="relative bg-white dark:bg-slate-900 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden">
              {/* Form Content Wrapper */}
              <div className="p-8 md:p-14">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                  <div className="max-w-md">
                    <h3 className="text-4xl font-black text-slate-900 dark:text-slate-100 mb-4 tracking-tight">
                      Diagnóstico de <span className="text-emerald-600">Viabilidade</span>
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-light text-lg">
                      Preencha o formulário oficial abaixo para que nossa equipe avalie seu perfil e indique os caminhos mais adequados para sua jornada, com um direcionamento estratégico inicial.​
                    </p>
                  </div>
                  <div className="hidden md:flex flex-col items-end">
                    <div className="flex -space-x-3 mb-2">
                       {[
                         'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop',
                         'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop',
                         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop'
                       ].map((url, i) => (
                         <img key={i} src={url} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover" alt="Consultor" />
                       ))}
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Especialistas prontos</span>
                  </div>
                </div>

                {/* EXACT HubSpot Embed Container - Untouched */}
                <div className="hs-form-wrapper bg-slate-50/50 dark:bg-slate-950/30 rounded-3xl p-1">
                  <div className="hs-form-frame min-h-[500px]"
                    data-region="na1"
                    data-form-id="18ae0eb5-e9eb-4bf4-9494-2d4c28cc7163"
                    data-portal-id="50812232">
                  </div>
                </div>

                {/* Trust Seals */}
                <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-wrap justify-center md:justify-start gap-8 opacity-40 grayscale">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-[10px] font-black uppercase tracking-widest">Dados Criptografados</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-[10px] font-black uppercase tracking-widest">Segurança de Rede</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3.005 3.005 0 013.75-2.906z" /></svg>
                    <span className="text-[10px] font-black uppercase tracking-widest">Atendimento Humanizado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FAQ Teaser / Support Footnote */}
        <div className="mt-24 text-center">
          <p className="text-slate-400 dark:text-slate-500 font-medium tracking-tight">
            Prefere um contato rápido? <span className="text-emerald-500 font-black cursor-pointer hover:underline" onClick={() => window.open('https://wa.me/5511915626678')}>Clique aqui para WhatsApp</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contato;