
import React, { useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Category, Product } from '../types';
import { Search, Heart, Star, Users, Baby, TrendingUp } from 'lucide-react';

interface ProductListingProps {
  onToggleWishlist: (product: Product) => void;
  isInWishlist: (id: string) => boolean;
}

const ProductListing: React.FC<ProductListingProps> = ({ onToggleWishlist, isInWishlist }) => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const initialCategory = queryParams.get('category') as Category || Category.ALL;

  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === Category.ALL || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen dark:bg-slate-900 transition-colors">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-auto">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Collection de Jeux</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-black uppercase text-[10px] tracking-widest">{filteredProducts.length} trésors stratégiques trouvés</p>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
          <div className="relative w-full sm:min-w-[320px]">
            <input
              type="text"
              placeholder="Rechercher des jeux..."
              className="w-full pl-6 pr-6 py-4 border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/20 shadow-sm font-bold placeholder-slate-400 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.values(Category).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-1 sm:flex-none px-5 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-100 dark:shadow-none' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-2 border-slate-100 dark:border-slate-700 hover:border-sky-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative bg-white dark:bg-slate-800 p-6 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border-2 border-transparent hover:border-sky-500/50">
              {product.trending && (
                <div className="absolute top-8 left-8 z-10 bg-amber-400 text-slate-900 text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md flex items-center">
                  <TrendingUp size={10} className="mr-1" /> Tendance
                </div>
              )}
              
              <button 
                onClick={() => onToggleWishlist(product)}
                className={`absolute top-8 right-8 z-10 p-3 rounded-full shadow-md transition-all hover:scale-110 active:scale-90 ${
                  isInWishlist(product.id) 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-white/90 dark:bg-slate-900/90 text-slate-400 hover:text-pink-500'
                }`}
              >
                <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} strokeWidth={2.5} />
              </button>

              <Link to={`/product/${product.id}`}>
                <div className="aspect-square rounded-[2rem] overflow-hidden bg-slate-50 dark:bg-slate-900 mb-6 border-2 border-slate-50 dark:border-slate-700">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1 min-w-0 mr-3">
                    <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight truncate text-lg">{product.name}</h3>
                    <p className="text-[10px] text-sky-500 uppercase font-black tracking-widest mt-1">{product.category}</p>
                  </div>
                  <span className="text-sky-500 font-black text-xl tracking-tighter">{product.price.toFixed(2)} DH</span>
                </div>
                <div className="flex items-center text-[10px] font-black text-slate-400 dark:text-slate-500 space-x-4 uppercase tracking-widest">
                  <span className="flex items-center"><Users size={12} className="mr-1.5" /> {product.players}</span>
                  <span className="flex items-center"><Baby size={12} className="mr-1.5" /> {product.ageRange}</span>
                  <span className="flex items-center text-amber-500">
                    <Star size={12} fill="currentColor" className="mr-1.5" />
                    {product.rating}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-slate-50 dark:bg-slate-800/30 rounded-[4rem] border-4 border-dashed border-slate-200 dark:border-slate-800">
          <div className="text-8xl mb-8 opacity-40">🔭</div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase">Quête infructueuse</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-3 font-medium">Aucun jeu ne correspond à vos runes de recherche.</p>
          <button 
            onClick={() => {setSelectedCategory(Category.ALL); setSearchTerm('');}}
            className="mt-10 bg-sky-500 text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-sky-600 shadow-xl"
          >
            Réinitialiser les Filtres
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
