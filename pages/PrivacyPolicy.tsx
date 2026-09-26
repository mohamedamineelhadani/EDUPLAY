
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 dark:bg-slate-900 min-h-screen">
      <div className="text-center mb-16">
        <div className="text-6xl mb-6">🛡️</div>
        <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">
          Protocole de <span className="text-sky-500">Confid</span><span className="text-amber-400">enti</span><span className="text-emerald-500">alité</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium">Vos données sont vos actifs les plus précieux. Nous les protégeons comme un grand maître.</p>
      </div>

      <div className="space-y-12">
        <section className="bg-white dark:bg-slate-800 p-10 rounded-[3rem] border-2 border-slate-100 dark:border-slate-700 shadow-sm">
          <h2 className="text-2xl font-black text-sky-500 mb-4 uppercase tracking-tight">1. Collecte des Données</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Chez EDUPLAY, nous collectons les informations nécessaires pour traiter vos acquisitions stratégiques. Cela inclut votre nom, votre adresse de déploiement et vos signaux de communication. Nous analysons également vos préférences de jeu pour améliorer notre collection.
          </p>
        </section>

        <section className="bg-white dark:bg-slate-800 p-10 rounded-[3rem] border-2 border-slate-100 dark:border-slate-700 shadow-sm">
          <h2 className="text-2xl font-black text-amber-400 mb-4 uppercase tracking-tight">2. Utilisation des Informations</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Vos données sont utilisées uniquement pour faciliter votre voyage à travers notre boutique de jeux. Nous ne vendons pas vos manœuvres à des tiers. Votre historique est utilisé pour les recommandations IA et l'exécution des commandes.
          </p>
        </section>

        <section className="bg-white dark:bg-slate-800 p-10 rounded-[3rem] border-2 border-slate-100 dark:border-slate-700 shadow-sm">
          <h2 className="text-2xl font-black text-emerald-500 mb-4 uppercase tracking-tight">3. Fortification de la Sécurité</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Nous utilisons un cryptage de pointe pour garantir que vos détails de paiement restent classifiés. Nos serveurs sont protégés par des pare-feu de haut niveau et des exercices de sécurité réguliers.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
