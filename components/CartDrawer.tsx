
import React from 'react';
import { CartItem } from '../types';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" onClick={onClose}></div>
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white dark:bg-slate-900 shadow-2xl">
            <div className="flex-1 py-10 overflow-y-auto px-8 sm:px-10">
              <div className="flex items-center justify-between border-b-4 border-slate-50 dark:border-slate-800 pb-8 mb-10">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter flex items-center">
                  <ShoppingBag className="mr-3 text-sky-500" size={28} strokeWidth={2.5} /> Panier
                </h2>
                <button onClick={onClose} className="p-3 text-slate-400 hover:text-pink-500 hover:rotate-90 transition-all">
                  <X size={32} strokeWidth={3} />
                </button>
              </div>

              <div className="">
                {items.length === 0 ? (
                  <div className="text-center py-24">
                    <div className="w-24 h-24 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8">
                      <ShoppingBag size={48} className="text-slate-300 dark:text-slate-700" strokeWidth={1.5} />
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 font-black text-sm uppercase tracking-widest mb-10">L'inventaire est vide.</p>
                    <Link 
                      to="/shop" 
                      onClick={onClose} 
                      className="inline-flex items-center bg-sky-500 text-white px-10 py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest hover:bg-sky-600 transition-all shadow-xl"
                    >
                      Commencer à Jouer <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                ) : (
                  <div className="flow-root">
                    <ul className="space-y-10">
                      {items.map((item) => (
                        <li key={item.id} className="flex group bg-white dark:bg-slate-800/40 p-4 rounded-[2.5rem] border-2 border-slate-50 dark:border-slate-800 hover:border-sky-500/30 transition-all">
                          <div className="flex-shrink-0 w-24 h-24 border-2 border-slate-50 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <div className="ml-6 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between items-start">
                                <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-sm line-clamp-1">{item.name}</h3>
                                <button onClick={() => onRemove(item.id)} className="text-slate-300 hover:text-pink-500 transition-colors">
                                  <Trash2 size={16} />
                                </button>
                              </div>
                              <p className="text-[10px] font-black text-sky-500 uppercase tracking-widest mt-1">{item.category}</p>
                            </div>
                            <div className="flex-1 flex items-end justify-between mt-4">
                              <div className="flex items-center space-x-4 bg-slate-50 dark:bg-slate-800 rounded-full px-4 py-1.5 border border-slate-100 dark:border-slate-700">
                                <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-slate-400 hover:text-pink-500 transition-colors">
                                  <Minus size={14} strokeWidth={3} />
                                </button>
                                <span className="font-black text-slate-900 dark:text-white text-sm min-w-[15px] text-center">{item.quantity}</span>
                                <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-slate-400 hover:text-emerald-500 transition-colors">
                                  <Plus size={14} strokeWidth={3} />
                                </button>
                              </div>
                              <p className="font-black text-slate-900 dark:text-white text-lg tracking-tighter">{(item.price * item.quantity).toFixed(2)} DH</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {items.length > 0 && (
              <div className="border-t-4 border-slate-50 dark:border-slate-800 py-10 px-8 sm:px-10 bg-white dark:bg-slate-900">
                <div className="flex justify-between text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">
                  <p>Total</p>
                  <p className="text-sky-500">{total.toFixed(2)} DH</p>
                </div>
                <p className="mt-0.5 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-10">Taxes et logistique calculées à l'étape suivante.</p>
                <div className="space-y-4">
                  <Link
                    to="/checkout"
                    onClick={onClose}
                    className="flex justify-center items-center px-10 py-6 bg-sky-500 rounded-[2.5rem] shadow-2xl text-xl font-black text-white hover:bg-sky-600 transition-all uppercase tracking-widest w-full group"
                  >
                    Commander <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <button 
                    onClick={onClose}
                    className="w-full text-center font-black text-slate-400 uppercase text-[10px] tracking-widest hover:text-sky-500 transition-colors"
                  >
                    Continuer la Sélection
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
