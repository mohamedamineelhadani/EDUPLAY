
export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  likes: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  featured?: boolean;
  trending?: boolean;
  ageRange: string;
  players: string;
  reviews: Review[];
}

export interface CartItem extends Product {
  quantity: number;
}

export enum Category {
  STRATEGY = 'Stratégie',
  FAMILY = 'Famille',
  EDUCATIONAL = 'Éducatif',
  CLASSIC = 'Classique',
  AWAKENING = 'Éveil',
  ALL = 'Tous'
}

export type Theme = 'light' | 'dark';
