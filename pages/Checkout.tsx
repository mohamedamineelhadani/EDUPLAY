
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CheckoutProps {
  items: CartItem[];
  onClear: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onClear }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = items.length > 0 ? 9.99 : 0;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    onClear();
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center dark:bg-slate-900 min-h-screen">
        <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter uppercase">Mission Accomplie !</h2>
        <p className="text-slate-600 dark:text-slate-400 text-xl mb-12 max-w-lg mx-auto leading-relaxed">
          Vos acquisitions stratégiques ont été sécurisées. Nous les expédions depuis notre coffre-fort sous 24 heures. Préparez-vous pour la soirée jeux !
        </p>
        <Link to="/" className="inline-block bg-sky-500 text-white px-12 py-5 rounded-[2.5rem] font-black text-xl hover:bg-sky-600 transition-all shadow-2xl shadow-sky-100 dark:shadow-none transform hover:scale-105 active:scale-95">
          Retour à l'Accueil
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center dark:bg-slate-900 min-h-screen">
        <h2 className="text-3xl font-black dark:text-white mb-6 tracking-tight uppercase">Votre inventaire est vide</h2>
        <Link to="/shop" className="bg-sky-500 text-white px-8 py-3 rounded-full font-bold hover:bg-sky-600 transition-colors">Trouver des jeux &rarr;</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:bg-slate-900 transition-colors min-h-screen">
      <h1 className="text-5xl font-black mb-16 tracking-tighter text-slate-900 dark:text-white uppercase">Paiement</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="bg-white dark:bg-slate-800 p-8 sm:p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="text-2xl font-black mb-10 text-slate-900 dark:text-white border-b-4 border-sky-500 pb-4 inline-block tracking-tight">Détails de Livraison</h3>
              <div className="grid grid-cols-2 gap-8 mt-4">
                <div className="col-span-2 sm:col-span-1 space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Prénom</label>
                  <input type="text" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none" placeholder="Jean" />
                </div>
                <div className="col-span-2 sm:col-span-1 space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nom</label>
                  <input type="text" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none" placeholder="Dupont" />
                </div>
                <div className="col-span-2 space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Adresse de Livraison</label>
                  <input type="text" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none" placeholder="123 Avenue des Stratèges" />
                </div>
                <div className="col-span-2 space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone</label>
                  <input type="text" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none" placeholder="+212 xxxxxxxx" />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-sky-500 text-white py-6 rounded-[2.5rem] font-black text-2xl hover:bg-sky-600 transition-all shadow-2xl active:scale-95 transform mb-20">
              Payer {total.toFixed(2)} DH & Terminer
            </button>
          </form>
        </div>

        <div className="lg:col-span-5 h-fit sticky top-24 pb-12">
          <div className="bg-slate-100 dark:bg-slate-800/80 p-10 rounded-[4rem] border-2 border-slate-200 dark:border-slate-700 backdrop-blur-sm shadow-xl">
            <h3 className="text-2xl font-black mb-8 dark:text-white tracking-tight">Récapitulatif</h3>
            <div className="space-y-6 mb-10 max-h-96 overflow-y-auto pr-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center group">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden mr-4 shadow-sm border border-slate-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="font-black text-slate-900 dark:text-white block text-sm">{item.name}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{item.quantity} × {item.price.toFixed(2)} DH</span>
                    </div>
                  </div>
                  <span className="font-black text-slate-900 dark:text-white text-sm">{(item.price * item.quantity).toFixed(2)} DH</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex justify-between text-slate-500 dark:text-slate-400 font-bold text-sm">
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2)} DH</span>
              </div>
              <div className="flex justify-between text-slate-500 dark:text-slate-400 font-bold text-sm">
                <span>Frais de port</span>
                <span>{shipping.toFixed(2)} DH</span>
              </div>
              <div className="flex justify-between text-3xl font-black text-slate-900 dark:text-white pt-8 mt-4 border-t-2 border-slate-200 dark:border-slate-700 border-dashed">
                <span className="tracking-tighter uppercase">Total</span>
                <span className="tracking-tighter text-sky-500">{total.toFixed(2)} DH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
