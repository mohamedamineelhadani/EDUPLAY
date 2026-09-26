
import React from 'react';
import { Truck, Zap, Globe, ShieldCheck, CheckCircle2, Package, Box } from 'lucide-react';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 dark:bg-slate-900 min-h-screen">
      <div className="text-center mb-16">
        <div className="w-24 h-24 bg-sky-50 dark:bg-sky-900/20 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
          <Box size={48} className="text-sky-500" strokeWidth={2} />
        </div>
        <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">
          Protocole <span className="text-sky-500">Logis</span><span className="text-amber-400">tique</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">Comment nous déployons nos actifs de haute qualité jusqu'à votre porte.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div className="bg-white dark:bg-slate-800 p-12 rounded-[3.5rem] border-4 border-sky-500 shadow-2xl shadow-sky-100 dark:shadow-none transform hover:-translate-y-2 transition-transform">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Quête Standard</h3>
            <Truck className="text-sky-500" size={32} strokeWidth={2.5} />
          </div>
          <p className="text-sky-500 font-black text-5xl mb-8 tracking-tighter">9.99 DH</p>
          <ul className="space-y-4 text-slate-600 dark:text-slate-400 font-black text-[10px] uppercase tracking-widest">
            <li className="flex items-center"><CheckCircle2 className="text-sky-500 mr-3" size={16} strokeWidth={3} /> 3-5 Jours Ouvrés</li>
            <li className="flex items-center"><CheckCircle2 className="text-sky-500 mr-3" size={16} strokeWidth={3} /> Entièrement Assuré</li>
            <li className="flex items-center"><CheckCircle2 className="text-sky-500 mr-3" size={16} strokeWidth={3} /> Suivi Temps Réel</li>
            <li className="flex items-center"><CheckCircle2 className="text-sky-500 mr-3" size={16} strokeWidth={3} /> Emballage Renforcé</li>
          </ul>
        </div>
        
        <div className="bg-amber-400 p-12 rounded-[3.5rem] text-slate-900 shadow-2xl shadow-amber-100 dark:shadow-none transform hover:-translate-y-2 transition-transform">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-black tracking-tight uppercase">Expansion Rapide</h3>
            <Zap className="text-slate-900" size={32} strokeWidth={2.5} />
          </div>
          <p className="text-slate-900 font-black text-5xl mb-8 tracking-tighter">24.99 DH</p>
          <ul className="space-y-4 font-black text-[10px] uppercase tracking-widest opacity-90">
            <li className="flex items-center"><CheckCircle2 className="mr-3" size={16} strokeWidth={3} /> 1-2 Jours Ouvrés</li>
            <li className="flex items-center"><CheckCircle2 className="mr-3" size={16} strokeWidth={3} /> Expédition Prioritaire</li>
            <li className="flex items-center"><CheckCircle2 className="mr-3" size={16} strokeWidth={3} /> Contre Signature</li>
            <li className="flex items-center"><CheckCircle2 className="mr-3" size={16} strokeWidth={3} /> Boîte Cadeau Premium</li>
          </ul>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-12 rounded-[4rem] border-4 border-slate-50 dark:border-slate-700 space-y-12">
        <div className="group flex items-start">
          <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mr-8 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
            <Globe size={32} strokeWidth={2.5} />
          </div>
          <div>
            <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight uppercase">Manœuvres Internationales</h4>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Nous livrons dans plus de 50 pays. Les tarifs internationaux sont calculés dynamiquement lors du paiement en fonction de votre zone géographique tactique.</p>
          </div>
        </div>
        
        <div className="group flex items-start">
          <div className="w-16 h-16 bg-pink-500 text-white rounded-2xl flex items-center justify-center mr-8 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
            <ShieldCheck size={32} strokeWidth={2.5} />
          </div>
          <div>
            <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight uppercase">Intégrité de l'Emballage</h4>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Chaque jeu est protégé par des couches éco-responsables multi-niveaux. Nous garantissons que les coins de vos boîtes restent intacts et vos plateaux parfaitement plats.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
