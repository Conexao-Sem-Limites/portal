import React, { useState, useEffect } from 'react';

const carouselData = [
  {
    url: 'https://images.unsplash.com/photo-1564959130747-897fb406b9af?auto=format&fit=crop&w=1600&q=80',
    title: 'Dublin, Irlanda',
    desc: 'O coração pulsante da Ilha Esmeralda.'
  },
  {
    url: 'https://i.ibb.co/hFqPHN41/cliffs-of-moher-ireland.jpg',
    title: 'Cliffs of Moher, Irlanda',
    desc: 'Paisagens naturais de tirar o fôlego.'
  },
  {
    url: 'https://i.ibb.co/kgCBtnbH/524818-county-galway.jpg',
    title: 'Galway, Irlanda',
    desc: 'Charme, música e cultura tradicional.'
  },
  {
    url: 'https://i.ibb.co/kdxMtfg/9c4719e953924ce5a05a4982fea326da.jpg',
    title: 'Limerick, Irlanda',
    desc: 'Uma cidade estratégica, histórica e cheia de energia.'
  },
  {
    url: 'https://i.ibb.co/XfnggW2P/new-lisboa.jpg',
    title: 'Lisboa, Portugal',
    desc: 'A cidade das sete colinas'
  },
  {
    url: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=80',
    title: 'Porto, Portugal',
    desc: 'Vinhos, história e a beleza do Douro.'
  },
  {
    url: 'https://i.ibb.co/kV67863h/357608.avif',
    title: 'Algarve, Portugal',
    desc: 'As praias mais deslumbrantes da Europa.'
  }
];

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden bg-slate-900">
      {carouselData.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Ken Burns effect */}
          <img
            src={slide.url}
            alt={slide.title}
            className={`w-full h-full object-cover transform transition-transform duration-[7000ms] ease-linear ${
              i === index ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Overlay with staggered text animation */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center text-center p-6">
            <div className={`max-w-3xl text-white transform transition-all duration-1000 delay-300 ${
              i === index ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}>
              <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-2xl tracking-tight">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl font-light drop-shadow-lg max-w-xl mx-auto leading-relaxed">
                {slide.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Refined Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center space-x-3">
        {carouselData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`group relative h-1.5 transition-all duration-500 rounded-full overflow-hidden ${
              i === index ? 'w-12 bg-emerald-500' : 'w-4 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          >
            {i === index && (
              <div className="absolute inset-0 bg-white/30 animate-[progress_6s_linear]" />
            )}
          </button>
        ))}
      </div>

      {/* Side Gradients for depth */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/20 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/20 to-transparent z-20 pointer-events-none" />
    </div>
  );
};

export default Carousel;