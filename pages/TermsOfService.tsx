
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 dark:bg-slate-900 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">
          Conditions d'<span className="text-pink-500">Engage</span><span className="text-emerald-500">ment</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium italic">Les règles du jeu. Veuillez lire attentivement avant de faire votre mouvement.</p>
      </div>

      <div className="space-y-8">
        {[
          { color: 'border-sky-500', title: "Acceptation des Règles", text: "En entrant sur EDUPLAY, vous acceptez de respecter nos directives stratégiques et nos politiques de fair-play. Tout abus de la plateforme peut entraîner une disqualification temporaire ou permanente." },
          { color: 'border-amber-400', title: "Acquisitions Stratégiques", text: "Tous les achats sont soumis à disponibilité. Les prix peuvent varier en fonction de la demande du marché et de la rareté des matériaux (ex: bois sculpté main)." },
          { color: 'border-emerald-500', title: "Territoire Intellectuel", text: "Le contenu de ce site, des descriptions de jeux à la logique de l'IA, est la propriété d'EDUPLAY. Aucune duplication non autorisée de nos actifs tactiques n'est autorisée." },
          { color: 'border-pink-500', title: "Limites de Responsabilité", text: "Bien que nos jeux soient conçus pour stimuler l'esprit, EDUPLAY n'est pas responsable des litiges compétitifs ou des arguments familiaux découlant de parties à enjeux élevés." }
        ].map((item, idx) => (
          <div key={idx} className={`bg-white dark:bg-slate-800 p-10 rounded-[3rem] border-4 ${item.color} shadow-sm`}>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-widest">{idx + 1}. {item.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsOfService;
