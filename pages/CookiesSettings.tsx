
import React, { useState } from 'react';

const CookiesSettings: React.FC = () => {
  const [preferences, setPreferences] = useState({
    essential: true,
    functional: true,
    analytics: false,
    marketing: false
  });

  const toggle = (key: keyof typeof preferences) => {
    if (key === 'essential') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 dark:bg-slate-900 min-h-screen">
      <div className="text-center mb-16">
        <div className="text-6xl mb-6">🍪</div>
        <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">
          Cache de <span className="text-amber-400">Cook</span><span className="text-sky-500">ies</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium">Contrôlez la façon dont nous nous souvenons de vos manœuvres et préférences.</p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-[3.5rem] p-8 sm:p-12 border-4 border-slate-100 dark:border-slate-700 shadow-xl">
        <div className="space-y-10">
          {[
            { id: 'essential', title: 'Logistique Essentielle', desc: 'Critique pour la stabilité du site et le paiement sécurisé. Ne peut pas être désactivé.', required: true, color: 'bg-sky-500' },
            { id: 'functional', title: 'Mémoire Fonctionnelle', desc: 'Mémorise votre choix de thème, votre liste de souhaits et l\'état de votre panier.', required: false, color: 'bg-amber-400' },
            { id: 'analytics', title: 'Analytique Tactique', desc: 'Nous aide à comprendre quels jeux sont tendance pour mieux curater nos collections.', required: false, color: 'bg-emerald-500' },
            { id: 'marketing', title: 'Renseignement de Signaux', desc: 'Utilisé pour fournir des recommandations de jeux pertinentes et des offres exclusives.', required: false, color: 'bg-pink-500' }
          ].map((item) => (
            <div key={item.id} className="flex items-center justify-between pb-8 border-b border-slate-100 dark:border-slate-700 last:border-0 last:pb-0">
              <div className="pr-8">
                <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{item.desc}</p>
              </div>
              <button 
                onClick={() => toggle(item.id as keyof typeof preferences)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ${
                  preferences[item.id as keyof typeof preferences] ? item.color : 'bg-slate-200 dark:bg-slate-700'
                } ${item.required ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={item.required}
              >
                <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  preferences[item.id as keyof typeof preferences] ? 'translate-x-7' : 'translate-x-1'
                }`} />
              </button>
            </div>
          ))}
        </div>

        <button className="w-full mt-12 bg-slate-900 dark:bg-sky-500 text-white py-5 rounded-[2rem] font-black text-xl hover:scale-[1.02] transition-all shadow-lg active:scale-95">
          Sauvegarder la Configuration
        </button>
      </div>
    </div>
  );
};

export default CookiesSettings;
