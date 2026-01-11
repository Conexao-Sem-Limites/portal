
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SubMenuItem {
  name: string;
  path: string;
  isExternal?: boolean;
}

interface NavItem {
  name: string;
  path: string;
  isExternal?: boolean;
  isDropdown?: boolean;
  submenu?: SubMenuItem[];
}

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: 'Início', path: '/' },
    { 
      name: 'Ferramentas', 
      path: '#', 
      isDropdown: true, 
      submenu: [
        { name: 'Calculadora', path: 'https://calculadora.conexaosemlimites.com', isExternal: true },
        { name: 'DestinoAI', path: 'https://destinoai.conexaosemlimites.com', isExternal: true }
      ]
    },
    { name: 'Caminhos', path: '/caminhos' },
    { name: 'Loja', path: 'https://loja.conexaosemlimites.com', isExternal: true },
    { name: 'Notícias', path: 'https://blog.conexaosemlimites.com', isExternal: true },
    { name: 'Rotas', path: '/rotas' },
    { name: 'Sobre Nós', path: '/sobre-nos' },
    { name: 'Contato', path: '/contato' },
    { name: 'Área de Membros', path: 'https://membros.conexaosemlimites.com', isExternal: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:pl-6 lg:pr-10">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://i.ibb.co/938th8hB/logo-novo.jpg" 
                alt="Conexão Sem Limites logo" 
                className="h-12 w-auto object-contain rounded-lg"
              />
              <span className="text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100 hidden sm:block">
                CONEXÃO <span className="text-emerald-600 dark:text-emerald-500">SEM</span> <span className="text-rose-600 dark:text-rose-500">LIMITES</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.isDropdown ? (
                <div 
                  key={item.name} 
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setIsDesktopDropdownOpen(true)}
                  onMouseLeave={() => setIsDesktopDropdownOpen(false)}
                >
                  <button
                    className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center outline-none"
                  >
                    {item.name}
                    <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDesktopDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`absolute top-[80%] left-0 w-48 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl py-2 transition-all duration-200 origin-top z-[60] ${isDesktopDropdownOpen ? 'opacity-100 scale-100 translate-y-2' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    {item.submenu?.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.path}
                        target={sub.isExternal ? "_blank" : "_self"}
                        rel={sub.isExternal ? "noopener noreferrer" : ""}
                        className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : item.isExternal ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-emerald-600 dark:text-emerald-500 border-b-2 border-emerald-600 dark:border-emerald-500'
                      : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              aria-label="Alternar tema"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 18v1m9-9h1M3 12H1m15.364-6.364l.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 18v1m9-9h1M3 12H1m15.364-6.364l.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="sr-only">Abrir menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              item.isDropdown ? (
                <div key={item.name} className="space-y-1">
                  <button
                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                    className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 hover:bg-slate-50 dark:hover:bg-slate-800 outline-none"
                  >
                    {item.name}
                    <svg className={`ml-1 w-4 h-4 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileDropdownOpen && (
                    <div className="pl-6 space-y-1">
                      {item.submenu?.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.path}
                          target={sub.isExternal ? "_blank" : "_self"}
                          rel={sub.isExternal ? "noopener noreferrer" : ""}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-emerald-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.isExternal ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
