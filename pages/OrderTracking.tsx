
import React, { useState } from 'react';
import { Satellite, Search, Truck, CheckCircle2, PackageCheck } from 'lucide-react';

const OrderTracking: React.FC = () => {
  const [id, setId] = useState('');
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setLoading(true);
    setTimeout(() => {
      setStatus({
        step: 2,
        updates: [
          { time: 'Aujourd\'hui, 10:24', status: 'Sécurisé au Centre Logistique Central', icon: PackageCheck, color: 'text-sky-500' },
          { time: 'Hier, 16:15', status: 'Inspection Qualité Réussie', icon: CheckCircle2, color: 'text-emerald-500' },
          { time: 'Hier, 14:00', status: 'Commande Expédiée du Coffre-fort', icon: Truck, color: 'text-amber-400' }
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 dark:bg-slate-900 min-h-screen">
      <div className="text-center mb-16">
        <div className="w-24 h-24 bg-emerald-50 dark:bg-emerald-900/20 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
          <Satellite size={48} className="text-emerald-500" strokeWidth={2} />
        </div>
        <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">
          Moniteur de <span className="text-emerald-500">Déploi</span><span className="text-sky-500">ement</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">Coordonnées en temps réel de vos acquisitions tactiques.</p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-10 rounded-[3.5rem] border-4 border-emerald-500/20 dark:border-emerald-500/10 shadow-xl mb-12">
        <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Numéro de commande (ex: #EP-7742)"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-[2rem] px-8 py-5 text-slate-900 dark:text-white focus:ring-4 focus:ring-emerald-500/20 outline-none font-black"
              required
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300" size={24} />
          </div>
          <button className="bg-emerald-500 text-white px-10 py-5 rounded-[2rem] font-black hover:bg-emerald-600 transition-all flex items-center justify-center min-w-[200px] shadow-lg">
            {loading ? (
              <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : 'Localiser l\'Actif'}
          </button>
        </form>
      </div>

      {status && (
        <div className="bg-white dark:bg-slate-800 p-12 rounded-[4rem] border-4 border-slate-100 dark:border-slate-700 shadow-2xl animate-in slide-in-from-bottom-8 duration-500">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 border-b-4 border-dashed border-slate-50 dark:border-slate-700 pb-8 space-y-4 sm:space-y-0">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Rapport de Situation</p>
              <h3 className="text-3xl font-black text-sky-500 tracking-tight uppercase">En Route</h3>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Estimation d'arrivée</p>
              <h3 className="text-3xl font-black text-amber-400 tracking-tight uppercase">48 Heures</h3>
            </div>
          </div>

          <div className="space-y-12">
            {status.updates.map((update: any, idx: number) => (
              <div key={idx} className="flex items-start group">
                <div className="relative flex flex-col items-center mr-8">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-lg ${idx === 0 ? 'bg-sky-500 text-white ring-8 ring-sky-50 dark:ring-sky-900/20' : 'bg-slate-100 dark:bg-slate-700 text-slate-400'}`}>
                    <update.icon size={20} strokeWidth={2.5} />
                  </div>
                  {idx !== status.updates.length - 1 && (
                    <div className="w-1.5 h-16 bg-slate-50 dark:bg-slate-800 mt-2 rounded-full"></div>
                  )}
                </div>
                <div className="pt-1">
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{update.time}</p>
                  <h4 className={`text-xl font-black ${idx === 0 ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>{update.status}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
