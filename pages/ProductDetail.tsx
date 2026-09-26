
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product, Review } from '../types';

interface ProductDetailProps {
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isInWishlist: (id: string) => boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart, onToggleWishlist, isInWishlist }) => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [added, setAdded] = useState(false);
  const [helpfulReviews, setHelpfulReviews] = useState<Set<string>>(new Set());
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '', user: '' });
  const [localReviews, setLocalReviews] = useState<Review[]>(product?.reviews || []);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center dark:bg-slate-900 min-h-screen">
        <div className="text-8xl mb-10">🤷‍♂️</div>
        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Quête échouée : Jeu non trouvé</h2>
        <Link to="/shop" className="text-sky-500 mt-8 inline-block font-black text-xl uppercase tracking-widest hover:underline underline-offset-8">Retourner à la boutique</Link>
      </div>
    );
  }

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const toggleHelpful = (reviewId: string) => {
    const next = new Set(helpfulReviews);
    if (next.has(reviewId)) next.delete(reviewId);
    else next.add(reviewId);
    setHelpfulReviews(next);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const review: Review = {
      id: Date.now().toString(),
      user: newReview.user || 'Joueur Anonyme',
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
      avatar: `https://i.pravatar.cc/150?u=${Date.now()}`,
      likes: 0
    };
    setLocalReviews([review, ...localReviews]);
    setIsFormOpen(false);
    setNewReview({ rating: 5, comment: '', user: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 dark:bg-slate-900 transition-colors">
      <nav className="flex text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-12" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-sky-500">Accueil</Link>
        <span className="mx-3 text-slate-200">/</span>
        <Link to="/shop" className="hover:text-amber-400">Boutique</Link>
        <span className="mx-3 text-slate-200">/</span>
        <span className="text-slate-900 dark:text-white">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
        <div className="lg:col-span-7">
          <div className="aspect-[4/3] rounded-[3.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-2xl border-4 border-slate-50 dark:border-slate-800 sticky top-24 transform rotate-1">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-6">
            <span className="px-5 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest rounded-full">
              {product.category}
            </span>
            <button 
              onClick={() => onToggleWishlist(product)}
              className={`p-4 rounded-full transition-all shadow-lg ${
                isInWishlist(product.id) ? 'bg-pink-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-pink-500'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isInWishlist(product.id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          <h1 className="text-5xl font-black text-slate-900 dark:text-white leading-tight mb-8 tracking-tighter uppercase">{product.name}</h1>
          
          <div className="flex items-center space-x-3 mb-10">
            <div className="flex text-amber-400 text-2xl">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
              ))}
            </div>
            <span className="text-slate-400 dark:text-slate-500 font-black text-xs uppercase tracking-widest ml-4">Basé sur {localReviews.length} avis</span>
          </div>

          <div className="flex items-baseline space-x-6 mb-12">
            <span className="text-5xl font-black text-sky-500 tracking-tighter">{product.price.toFixed(2)} DH</span>
            <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.2em] flex items-center bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              En Stock
            </span>
          </div>
          
          <p className="text-slate-600 dark:text-slate-400 text-xl font-medium leading-relaxed mb-12">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2.5rem] border-2 border-slate-100 dark:border-slate-700">
              <span className="block text-[10px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-widest mb-2">Joueurs</span>
              <span className="text-slate-900 dark:text-white font-black text-2xl uppercase">{product.players}</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2.5rem] border-2 border-slate-100 dark:border-slate-700">
              <span className="block text-[10px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-widest mb-2">Âge Requis</span>
              <span className="text-slate-900 dark:text-white font-black text-2xl uppercase">{product.ageRange}</span>
            </div>
          </div>

          <button 
            onClick={handleAdd}
            className={`w-full py-8 rounded-[2.5rem] font-black text-2xl transition-all transform active:scale-95 shadow-2xl uppercase tracking-widest ${
              added ? 'bg-emerald-500 text-white shadow-emerald-100' : 'bg-sky-500 text-white hover:bg-sky-600 shadow-sky-100 dark:shadow-none'
            }`}
          >
            {added ? 'Sécurisé !' : 'Ajouter à ma Collection'}
          </button>
        </div>
      </div>

      <section className="border-t-8 border-slate-50 dark:border-slate-800 pt-24 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 space-y-6 md:space-y-0">
          <div>
            <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Réactions des <span className="text-amber-400">Joueurs</span></h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 font-black uppercase text-xs tracking-widest">Expériences réelles de notre communauté.</p>
          </div>
          <button 
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="bg-white dark:bg-slate-800 px-10 py-4 rounded-[2rem] border-4 border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white font-black uppercase text-xs tracking-widest hover:border-sky-500 transition-all shadow-lg"
          >
            {isFormOpen ? 'Fermer le Formulaire' : 'Partager votre Avis'}
          </button>
        </div>

        {isFormOpen && (
          <div className="mb-20 bg-white dark:bg-slate-800 p-12 rounded-[4rem] border-4 border-sky-500 shadow-2xl animate-in slide-in-from-top-4 duration-500">
            <h3 className="text-3xl font-black mb-10 dark:text-white uppercase tracking-tighter">Rédiger un Avis</h3>
            <form onSubmit={handleSubmitReview} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Pseudonyme de Joueur</label>
                  <input type="text" required className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-3xl px-8 py-5 text-slate-900 dark:text-white focus:ring-4 focus:ring-sky-500/20 outline-none font-black" placeholder="Grand Maître Jean" value={newReview.user} onChange={(e) => setNewReview({...newReview, user: e.target.value})} />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Note Stratégique</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-3xl px-8 py-5 text-slate-900 dark:text-white focus:ring-4 focus:ring-sky-500/20 outline-none font-black appearance-none" value={newReview.rating} onChange={(e) => setNewReview({...newReview, rating: Number(e.target.value)})}>
                    <option value="5">5 - Chef-d'œuvre</option>
                    <option value="4">4 - Très Amusant</option>
                    <option value="3">3 - Décent</option>
                    <option value="2">2 - Besoin de Travail</option>
                    <option value="1">1 - Non Recommandé</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Votre Expérience</label>
                <textarea required rows={4} className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-[2.5rem] px-8 py-6 text-slate-900 dark:text-white focus:ring-4 focus:ring-sky-500/20 outline-none resize-none font-medium" placeholder="Qu'avez-vous aimé dans le gameplay ?" value={newReview.comment} onChange={(e) => setNewReview({...newReview, comment: e.target.value})}></textarea>
              </div>
              <button type="submit" className="bg-sky-500 text-white px-12 py-5 rounded-[2.5rem] font-black text-xl uppercase tracking-widest hover:bg-sky-600 transition-all shadow-xl">
                Publier le Feedback
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {localReviews.map((review) => (
            <div key={review.id} className="group flex flex-col bg-white dark:bg-slate-800 p-10 rounded-[3.5rem] border-4 border-slate-50 dark:border-slate-800/50 hover:border-amber-400/30 transition-all shadow-xl">
              <div className="flex items-center mb-8">
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white text-lg uppercase tracking-tight">{review.user}</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{review.date}</p>
                </div>
              </div>
              <div className="flex text-amber-400 text-xl mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium italic flex-grow">"{review.comment}"</p>
              
              <div className="mt-10 pt-8 border-t-2 border-slate-50 dark:border-slate-700/50 flex justify-between items-center">
                <button onClick={() => toggleHelpful(review.id)} className={`flex items-center space-x-3 text-xs font-black transition-colors uppercase tracking-widest ${helpfulReviews.has(review.id) ? 'text-sky-500' : 'text-slate-400 hover:text-slate-600'}`}>
                  <svg className="w-5 h-5" fill={helpfulReviews.has(review.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 10h4.708c.949 0 1.703.84 1.598 1.777l-1.282 11.339c-.113.997-.96 1.763-1.963 1.763H10V10l3.057-6.114A2.073 2.073 0 0115 5c0 .324-.076.63-.212.902l-1.745 3.492a1 1 0 00.895 1.448H14z" />
                  </svg>
                  <span>Utile ({review.likes + (helpfulReviews.has(review.id) ? 1 : 0)})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
