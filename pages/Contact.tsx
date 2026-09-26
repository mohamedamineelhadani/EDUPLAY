
import React, { useState } from 'react';
import { Package, MapPin, Phone, SendHorizontal, ArrowRight, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleCheckStatus = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) return;
    setOrderStatus('processing');
    setTimeout(() => {
      setOrderStatus('Votre commande est en cours de préparation et sera expédiée dans les prochaines 24 heures ! ');
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 dark:bg-slate-900 transition-colors">
      <div className="text-center mb-24">
        <h1 className="text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter uppercase">
          Comment <span className="text-sky-500">aider</span> <span className="text-amber-400">votre</span> <span className="text-emerald-500">stratégie</span> ?
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
          Que vous soyez curieux d'un livret de règles ou que vous suiviez un envoi stratégique, notre équipe est prête à jouer le jeu.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left: Quick Actions & Status */}
        <div className="lg:col-span-1 space-y-10">

          <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-12 border-4 border-slate-50 dark:border-slate-700 shadow-xl">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Quartier Général</h3>
            <div className="space-y-12">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-[1.5rem] flex items-center justify-center mr-6 flex-shrink-0 shadow-lg shadow-emerald-100 dark:shadow-none">
                  <MapPin size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-black dark:text-white mb-2 uppercase text-sm">Visite Tactique</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">Casablanca,massira</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-14 h-14 bg-amber-400 text-slate-900 rounded-[1.5rem] flex items-center justify-center mr-6 flex-shrink-0 shadow-lg shadow-amber-100 dark:shadow-none">
                  <Phone size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-black dark:text-white mb-2 uppercase text-sm">Ligne de Renseignement</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">+212 610-781044</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-10 sm:p-20 rounded-[4rem] shadow-2xl border-4 border-slate-50 dark:border-slate-700">
          {isSubmitted ? (
            <div className="text-center py-20 animate-in zoom-in duration-500">
              <div className="w-32 h-32 bg-sky-50 dark:bg-sky-900/30 rounded-[3rem] flex items-center justify-center mx-auto mb-10">
                <SendHorizontal size={64} className="text-sky-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">Signal Reçu !</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-12 text-xl font-medium max-w-lg mx-auto leading-relaxed">Votre message a atteint notre base. Nous vous répondrons sous 24 heures terrestres standard.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-sky-500 text-white px-14 py-6 rounded-[2.5rem] font-black uppercase tracking-widest text-sm hover:bg-sky-600 transition-all shadow-2xl"
              >
                Envoyer un nouveau message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Pseudonyme</label>
                  <input 
                    type="text" 
                    required 
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full border-b-4 border-slate-100 dark:border-slate-700 bg-transparent py-5 text-slate-900 dark:text-white focus:border-sky-500 outline-none transition-all text-2xl font-black placeholder-slate-200 dark:placeholder-slate-800" 
                    placeholder="Grand Maître Jean"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Fréquence (Email)</label>
                  <input 
                    type="email" 
                    required 
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full border-b-4 border-slate-100 dark:border-slate-700 bg-transparent py-5 text-slate-900 dark:text-white focus:border-emerald-500 outline-none transition-all text-2xl font-black placeholder-slate-200 dark:placeholder-slate-800" 
                    placeholder="jean@eduplay.fr"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Sujet de la Mission</label>
                <div className="relative">
                  <select 
                    className="w-full border-b-4 border-slate-100 dark:border-slate-700 bg-transparent py-5 text-slate-900 dark:text-white focus:border-amber-400 outline-none transition-all text-2xl font-black appearance-none"
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  >
                    <option value="" disabled className="dark:bg-slate-900">Sélectionner un Sujet</option>
                    <option value="rules" className="dark:bg-slate-900">Clarification des Règles</option>
                    <option value="shipping" className="dark:bg-slate-900">Question de Logistique</option>
                    <option value="bulk" className="dark:bg-slate-900">Partenariat Académique</option>
                    <option value="other" className="dark:bg-slate-900">Commentaire Général</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Message Tactique</label>
                <textarea 
                  rows={4} 
                  required 
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full border-b-4 border-slate-100 dark:border-slate-700 bg-transparent py-5 text-slate-900 dark:text-white focus:border-pink-500 outline-none transition-all text-2xl font-medium resize-none placeholder-slate-200 dark:placeholder-slate-800" 
                  placeholder="Dites-nous ce que vous avez en tête..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="group relative flex items-center justify-center w-full bg-slate-900 dark:bg-sky-500 text-white py-8 rounded-[3rem] font-black text-3xl hover:scale-[1.02] transition-all shadow-2xl uppercase tracking-tighter"
              >
                Transmettre <SendHorizontal size={32} className="ml-5 group-hover:translate-x-4 transition-transform" strokeWidth={3} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
