
import React from 'react';
import { RotateCcw, AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react';

const ReturnsExchanges: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 dark:bg-slate-900 min-h-screen">
      <div className="text-center mb-16">
        <div className="w-24 h-24 bg-pink-50 dark:bg-pink-900/20 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
          <RotateCcw size={48} className="text-pink-500" strokeWidth={2.5} />
        </div>
        <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">
          La Garantie du <span className="text-pink-500">Fair</span>-<span className="text-emerald-500">Play</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">Mauvaise stratégie ? Voici comment réinitialiser votre plateau.</p>
      </div>

      <div className="space-y-12">
        <section className="bg-white dark:bg-slate-800 p-12 rounded-[4rem] border-4 border-pink-500/20 shadow-xl relative overflow-hidden group">
          <div className="absolute top-[-20px] right-[-20px] p-12 text-9xl font-black text-pink-500 opacity-5 pointer-events-none select-none group-hover:opacity-10 transition-opacity">30</div>
          <div className="flex items-center mb-8">
            <ShieldAlert className="text-pink-500 mr-4" size={32} strokeWidth={2.5} />
            <h2 className="text-3xl font-black text-pink-500 tracking-tight uppercase">Politique de Retours</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-medium text-lg">
            Nous offrons une fenêtre de retour de 30 jours pour tous les jeux non scellés. Le matériel doit être inutilisé, et chaque composant (pions, tuiles, figurines) doit être présent dans sa formation d'origine.
          </p>
          <div className="flex items-center text-pink-500 font-black uppercase tracking-[0.2em] text-[10px] bg-pink-50 dark:bg-pink-900/20 px-8 py-5 rounded-3xl w-fit border-2 border-pink-100 dark:border-pink-900/30">
            <span className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center mr-4 text-xs">1</span>
            Initier via le Moniteur de Déploiement
          </div>
        </section>

        <section className="bg-white dark:bg-slate-800 p-12 rounded-[4rem] border-4 border-emerald-500/20 shadow-xl relative overflow-hidden">
          <div className="flex items-center mb-8">
            <CheckCircle2 className="text-emerald-500 mr-4" size={32} strokeWidth={2.5} />
            <h2 className="text-3xl font-black text-emerald-500 tracking-tight uppercase">Échanges Tactiques</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-medium text-lg">
            Une nouvelle mission vous appelle ? Échangez votre jeu contre un crédit en magasin dans les 45 jours. Renvoyez l'actif original à notre coffre-fort et votre crédit sera débloqué après inspection des composants.
          </p>
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-10 rounded-[3rem] border-4 border-dashed border-emerald-200 dark:border-emerald-700 flex items-start">
            <AlertCircle className="text-emerald-600 dark:text-emerald-400 mr-5 mt-1 flex-shrink-0" size={24} strokeWidth={2.5} />
            <div>
              <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.2em] mb-3">Avis aux Collectionneurs</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">Les gravures d'échecs personnalisées ou les miniatures peintes sur mesure sont des actifs définitifs et ne peuvent faire l'objet d'un échange.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReturnsExchanges;
