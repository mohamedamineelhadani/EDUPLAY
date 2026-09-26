
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, RotateCcw, HelpCircle, Mail, Send, ShieldCheck, FileText, Cookie } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <h3 className="text-white text-3xl font-black mb-6 tracking-tighter uppercase">
              <span className="text-sky-500">ED</span><span className="text-amber-400">U</span><span className="text-emerald-500">PLAY</span>
            </h3>
            <p className="max-w-xs text-sm leading-relaxed mb-8 font-medium">
              Le sanctuaire des stratèges. Nous curatons les meilleurs jeux de société au monde pour inspirer l'intelligence et le plaisir.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders if needed */}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-8 text-[10px] uppercase tracking-[0.3em] border-l-4 border-amber-400 pl-4">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><Link to="/shop" className="hover:text-sky-500 transition-colors flex items-center">Boutique</Link></li>
              <li><Link to="/wishlist" className="hover:text-pink-500 transition-colors flex items-center">Liste de Souhaits</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors flex items-center">Contact</Link></li>
              <li><Link to="/shop?category=Classique" className="hover:text-amber-400 transition-colors flex items-center">Jeux Classiques</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 text-[10px] uppercase tracking-[0.3em] border-l-4 border-emerald-500 pl-4">Aide & Support</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li>
                <Link to="/track" className="hover:text-sky-500 transition-colors flex items-center group">
                  <Package size={16} className="mr-3 text-slate-500 group-hover:text-sky-500" /> Suivi de commande
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-sky-500 transition-colors flex items-center group">
                  <Truck size={16} className="mr-3 text-slate-500 group-hover:text-sky-500" /> Livraison
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-sky-500 transition-colors flex items-center group">
                  <RotateCcw size={16} className="mr-3 text-slate-500 group-hover:text-sky-500" /> Retours
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-sky-500 transition-colors flex items-center group">
                  <HelpCircle size={16} className="mr-3 text-slate-500 group-hover:text-sky-500" /> FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 text-[10px] uppercase tracking-[0.3em] border-l-4 border-sky-500 pl-4">Newsletter</h4>
            <p className="text-sm mb-6 font-medium">Rejoignez l'élite des stratèges pour des offres exclusives.</p>
            <form onSubmit={handleSubscribe} className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email tactique"
                className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl px-5 py-4 text-sm text-white focus:border-sky-500 outline-none transition-all placeholder-slate-500"
                required
              />
              <button 
                type="submit"
                disabled={subscribed}
                className={`absolute right-2 top-2 p-2.5 rounded-xl transition-all ${subscribed ? 'bg-emerald-500 text-white' : 'bg-sky-500 text-white hover:scale-105 active:scale-95'}`}
              >
                {subscribed ? <ShieldCheck size={20} /> : <Send size={20} />}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.2em]">
          <p className="mb-6 md:mb-0">&copy; {new Date().getFullYear()} EDUPLAY ENTERTAINMENT. TOUS DROITS RÉSERVÉS.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/privacy" className="hover:text-sky-500 transition-colors flex items-center"><ShieldCheck size={12} className="mr-2" /> Confidentialité</Link>
            <Link to="/terms" className="hover:text-amber-400 transition-colors flex items-center"><FileText size={12} className="mr-2" /> Conditions</Link>
            <Link to="/cookies" className="hover:text-emerald-500 transition-colors flex items-center"><Cookie size={12} className="mr-2" /> Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
