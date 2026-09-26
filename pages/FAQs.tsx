
import React, { useState } from 'react';
import { Plus, Minus, MessageSquare, ChevronDown } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string; color: string; iconColor: string }> = ({ question, answer, color, iconColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-4 border-slate-50 dark:border-slate-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-10 flex justify-between items-center text-left transition-colors group"
      >
        <h3 className={`text-2xl font-black tracking-tight text-slate-900 dark:text-white uppercase transition-colors group-hover:${color}`}>{question}</h3>
        <span className={`p-2 rounded-full transition-all duration-500 ${isOpen ? 'bg-pink-500 text-white rotate-180' : 'bg-slate-50 dark:bg-slate-900 ' + iconColor}`}>
          <ChevronDown size={28} strokeWidth={3} />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[500px] pb-12' : 'max-h-0'}`}>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-xl max-w-4xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQs: React.FC = () => {
  const faqs = [
    {
      question: "Vos jeux d'échecs sont-ils artisanaux ?",
      answer: "Absolument. Notre série Grandmaster propose des pièces Staunton sculptées à la main dans des bois de buis et de rose sourcés éthiquement. Chaque set est lesté avec précision pour une expérience de tournoi professionnelle.",
      color: "text-sky-500",
      iconColor: "text-sky-500"
    },
    {
      question: "Comment fonctionne l'assistant IA (EduBot) ?",
      answer: "EduBot exploite la puissance de Gemini AI pour analyser notre catalogue tactique. Il comprend vos besoins spécifiques (nombre de joueurs, complexité, âge) et scanne nos archives pour dénicher le jeu qui transformera vos soirées.",
      color: "text-amber-400",
      iconColor: "text-amber-400"
    },
    {
      question: "Offrez-vous des remises pour les écoles ?",
      answer: "L'éducation est au cœur d'EDUPLAY. Les institutions académiques peuvent postuler à notre programme 'Expansion Académique' pour bénéficier de conditions préférentielles et de remises allant jusqu'à 25% sur les déploiements groupés.",
      color: "text-emerald-500",
      iconColor: "text-emerald-500"
    },
    {
      question: "Que se passe-t-il si je perds une pièce ?",
      answer: "Même les meilleurs généraux perdent un pion. Si vous avez perdu un composant crucial, contactez notre support technique. Nous maintenons un stock de pièces détachées pour la plupart de nos éditions premium.",
      color: "text-pink-500",
      iconColor: "text-pink-500"
    },
    {
      question: "La livraison internationale est-elle sécurisée ?",
      answer: "Chaque expédition est traitée comme un actif précieux. Vous bénéficiez d'un suivi GPS complet via notre Moniteur de Déploiement et d'une assurance contre tout aléa logistique jusqu'à votre porte.",
      color: "text-sky-500",
      iconColor: "text-sky-500"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-24 dark:bg-slate-900 min-h-screen">
      <div className="text-center mb-24">
        <div className="w-24 h-24 bg-sky-50 dark:bg-sky-900/30 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-sky-100 dark:shadow-none">
          <MessageSquare className="text-sky-500" size={48} strokeWidth={2.5} />
        </div>
        <h1 className="text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter uppercase">
          Requêtes <span className="text-sky-500">Straté</span><span className="text-amber-400">giq</span><span className="text-pink-500">ues</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-xl max-w-2xl mx-auto">Toutes les réponses pour préparer votre prochaine mission ludique.</p>
      </div>

      <div className="bg-white dark:bg-slate-800 px-12 rounded-[4rem] border-4 border-slate-50 dark:border-slate-700 shadow-2xl">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} color={faq.color} iconColor={faq.iconColor} />
        ))}
      </div>

      <div className="mt-24 text-center bg-slate-900 dark:bg-sky-900/40 p-20 rounded-[4rem] shadow-2xl border-4 border-sky-500/20">
        <h4 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Toujours en pleine réflexion ?</h4>
        <p className="text-slate-400 dark:text-slate-300 mb-12 font-medium text-xl max-w-2xl mx-auto">Nos éclaireurs sont disponibles 24/7 pour vous aider à décoder n'importe quelle situation tactique.</p>
        <a href="#/contact" className="inline-flex items-center bg-sky-500 text-white px-14 py-6 rounded-[2.5rem] font-black text-2xl hover:scale-105 transition-all shadow-2xl group uppercase tracking-widest">
          Ouvrir un Canal de Communication <Plus className="ml-4 group-hover:rotate-90 transition-transform" strokeWidth={3} />
        </a>
      </div>
    </div>
  );
};

export default FAQs;
