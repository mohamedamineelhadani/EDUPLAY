
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Brain, Zap, Gem, Users, ArrowRight, Star } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 3);

  const features = [
    { icon: Brain, title: 'Curateur Expert', desc: 'Chaque jeu est sélectionné pour sa valeur éducative et sa rejouabilité.', color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-900/20' },
    { icon: Zap, title: 'Livraison Rapide', desc: 'Commencez vos soirées en famille plus tôt grâce à nos options d\'expédition.', color: 'text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/20' },
    { icon: Gem, title: 'Qualité Premium', desc: 'Nous nous spécialisons dans les éditions de luxe qui durent des générations.', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
    { icon: Users, title: 'Communauté Mondiale', desc: 'Rejoignez des milliers de stratèges partageant tactiques et avis.', color: 'text-pink-500', bg: 'bg-pink-50 dark:bg-pink-900/20' }
  ];

  return (
    <div className="flex flex-col dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block px-6 py-2 mb-8 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-sky-500/20">
            Boutique de Stratégie Premium
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-none uppercase">
            JOUEZ PLUS <span className="text-sky-500">INTEL</span><span className="text-amber-400">LI</span><span className="text-emerald-500">GENT.</span>
          </h1>
          <p className="text-xl md:text-1xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Des jeux conçus pour développer la concentration, la mémoire et l’esprit stratégique des enfants.
             Apprendre en jouant n’a jamais été aussi amusa
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link to="/shop" className="group bg-sky-500 text-white px-10 py-6 rounded-[2.5rem] font-black text-xl hover:bg-sky-600 transition-all shadow-2xl flex items-center justify-center">
              Voir la Boutique <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/shop?category=Classique" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-4 border-amber-400 px-10 py-6 rounded-[2.5rem] font-black text-xl hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-all">
              Collection Classique
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((f, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-6 group">
                <div className={`w-28 h-28 ${f.bg} rounded-[3rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  <f.icon className={`${f.color}`} size={44} strokeWidth={2.5} />
                </div>
                <h4 className={`text-2xl font-black mb-4 uppercase tracking-tight text-slate-900 dark:text-white`}>{f.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 bg-slate-50 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Coups de <span className="text-pink-500">Cœur</span></h2>
              <p className="text-slate-500 dark:text-slate-400 mt-3 font-black uppercase text-[10px] tracking-widest">Sélectionnés pour leur brillance tactique.</p>
            </div>
            <Link to="/shop" className="text-emerald-500 font-black hover:underline underline-offset-8 uppercase tracking-widest text-xs flex items-center">
              Tout voir <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredProducts.map((product, idx) => {
              const borderColors = ['border-sky-500', 'border-amber-400', 'border-pink-500'];
              const textColors = ['text-sky-500', 'text-amber-400', 'text-pink-500'];
              return (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <div className={`aspect-[4/5] overflow-hidden rounded-[3.5rem] bg-white dark:bg-slate-800 mb-8 shadow-xl border-4 ${borderColors[idx % 3]} transform group-hover:-translate-y-4 transition-all duration-500`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <h3 className={`text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase`}>{product.name}</h3>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-slate-400 dark:text-slate-500 text-xs font-black uppercase tracking-widest">{product.category}</p>
                    <div className="flex items-center">
                      <Star size={14} className="text-amber-400 mr-1.5" fill="currentColor" />
                      <p className={`${textColors[idx % 3]} font-black text-2xl tracking-tighter`}>{product.price.toFixed(2)} DH</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
