
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface WishlistProps {
  wishlist: Product[];
  onRemoveFromWishlist: (id: string) => void;
  onAddToCart: (product: Product) => void;
}

const Wishlist: React.FC<WishlistProps> = ({ wishlist, onRemoveFromWishlist, onAddToCart }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen dark:bg-slate-900 transition-colors">
      <div className="mb-12 border-b-8 border-pink-500/10 pb-8">
        <h1 className="text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
          Ma Liste de <span className="text-pink-500">Souh</span><span className="text-sky-500">aits</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 font-bold uppercase text-xs tracking-[0.2em]">Les quêtes que vous surveillez de près.</p>
      </div>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {wishlist.map((product) => (
            <div key={product.id} className="group relative bg-white dark:bg-slate-800 rounded-[3rem] p-6 shadow-xl border-4 border-transparent hover:border-pink-500 transition-all duration-500">
              <button 
                onClick={() => onRemoveFromWishlist(product.id)}
                className="absolute top-8 right-8 z-10 p-3 bg-white/90 dark:bg-slate-900/90 rounded-full text-pink-500 hover:scale-125 transition-all shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              
              <Link to={`/product/${product.id}`}>
                <div className="aspect-square rounded-[2rem] overflow-hidden bg-slate-50 dark:bg-slate-900 mb-6 border-4 border-slate-50 dark:border-slate-800">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight line-clamp-1">{product.name}</h3>
                <p className="text-pink-500 font-black text-xl mt-2">{product.price.toFixed(2)} DH</p>
              </Link>
              
              <button 
                onClick={() => onAddToCart(product)}
                className="mt-6 w-full bg-slate-900 dark:bg-slate-700 text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-sky-500 transition-all shadow-lg active:scale-95"
              >
                Ajouter au Panier
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-slate-50 dark:bg-slate-800/30 rounded-[4rem] border-8 border-dashed border-slate-200 dark:border-slate-700">
          <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Votre liste est solitaire</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-sm mx-auto font-bold uppercase text-xs tracking-widest">Ajoutez les jeux que vous aimez pour les sauvegarder plus tard !</p>
          <Link to="/shop" className="mt-12 inline-block bg-pink-500 text-white px-12 py-5 rounded-[2.5rem] font-black uppercase text-sm tracking-widest hover:bg-pink-600 transition-all shadow-2xl shadow-pink-100 dark:shadow-none">
            Explorer la Collection
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
