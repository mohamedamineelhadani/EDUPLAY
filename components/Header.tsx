
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Theme } from '../types';
import { Moon, Sun, Heart, ShoppingCart, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onCartToggle: () => void;
  theme: Theme;
  onThemeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, wishlistCount, onCartToggle, theme, onThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-morphism border-b border-slate-200 dark:border-slate-800 dark:bg-slate-900/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tighter">
              <span className="text-sky-500">ED</span>
              <span className="text-amber-400">U</span>
              <span className="text-emerald-500">PLAY</span>
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8 text-sm font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">
            <Link to="/" className="hover:text-sky-500 transition-colors">Accueil</Link>
            <Link to="/shop" className="hover:text-amber-400 transition-colors">Boutique</Link>
            <Link to="/wishlist" className="hover:text-pink-500 transition-colors">Favoris</Link>
            <Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center space-x-1 md:space-x-4">
            <button 
              onClick={onThemeToggle}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Changer le thème"
            >
              {theme === 'light' ? <Moon size={20} strokeWidth={2.5} /> : <Sun size={20} strokeWidth={2.5} />}
            </button>

            <Link 
              to="/wishlist"
              className="relative p-2 text-slate-600 dark:text-slate-300 hover:text-pink-500 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Liste de souhaits"
            >
              <Heart size={20} strokeWidth={2.5} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-black leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-pink-500 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button 
              onClick={onCartToggle}
              className="relative p-2 text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Panier"
            >
              <ShoppingCart size={20} strokeWidth={2.5} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-black leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-sky-500 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-4 animate-in slide-in-from-top duration-300">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 hover:text-sky-500 font-bold py-2">Accueil</Link>
          <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 hover:text-amber-400 font-bold py-2">Boutique</Link>
          <Link to="/wishlist" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 hover:text-pink-500 font-bold py-2">Favoris</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 hover:text-emerald-500 font-bold py-2">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
