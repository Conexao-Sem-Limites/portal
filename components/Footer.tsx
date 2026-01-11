
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 py-12 border-t border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="https://i.ibb.co/938th8hB/logo-novo.jpg" 
                alt="Conexão Sem Limites logo" 
                className="h-16 w-auto rounded-lg"
              />
            </Link>
            <p className="max-w-md text-sm leading-relaxed mb-6">
              Consultoria especializada em planejamento internacional para brasileiros, com foco em intercâmbio na Irlanda e imigração para Portugal. Conectamos estratégia, informação e parceiros confiáveis para transformar decisões em experiências reais, com segurança e transparência.​
            </p>
            <div className="flex space-x-4">
              {/* Simple Social Links Placeholders */}
              <a href="#" className="hover:text-emerald-500 transition-colors">Instagram</a>
              <a href="#" className="hover:text-emerald-500 transition-colors">Facebook</a>
              <a href="#" className="hover:text-emerald-500 transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-slate-100 font-bold mb-6">Acesso Rápido</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-emerald-500 transition-colors">Início</Link></li>
              <li><Link to="/caminhos" className="hover:text-emerald-500 transition-colors">Caminhos</Link></li>
              <li><Link to="/sobre-nos" className="hover:text-emerald-500 transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-emerald-500 transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-slate-100 font-bold mb-6">Plataformas</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://loja.conexaosemlimites.com" className="hover:text-emerald-500 transition-colors">Nossa Loja</a></li>
              <li><a href="https://blog.conexaosemlimites.com" className="hover:text-emerald-500 transition-colors">Notícias</a></li>
              <li><a href="https://membros.conexaosemlimites.com" className="hover:text-emerald-500 transition-colors">Área de Membros</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Conexão Sem Limites. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 opacity-60 italic">Planejando o seu futuro além das fronteiras.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
