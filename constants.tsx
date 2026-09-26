
import { Product, Category } from './types';
import game1 from "./assets/images/game1.jpeg"
import game2 from "./assets/images/game2.jpeg"
import game3 from "./assets/images/game3.jpeg"
import game4 from "./assets/images/game4.jpeg"
import game5 from "./assets/images/game5.jpeg"
import game6 from "./assets/images/game6.jpeg"

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Tangram',
    description: 'Tangram : Ancien jeu chinois de 7 pièces formant un carré. L\'objectif est de créer des formes en utilisant toutes les pièces sans espaces ni chevauchements.',
    price: 39.99,
    category: Category.EDUCATIONAL,
    image: game1,
    rating: 4.2,
    featured: true,
    trending: true,
    ageRange: '6+',
    players: '1',
    reviews: [
      {
        id: 'r24',
        user: 'Claire Fontaine',
        rating: 5,
        comment: 'Acheté pour mon fils de 7 ans. Il adore reconstituer les animaux et les maisons. Les pièces sont solides et colorées. Je recommande vivement !',
        date: '2024-04-12',
        likes: 34
      },
      {
        id: 'r25',
        user: 'Marc Delambre',
        rating: 4,
        comment: 'Très bon jeu éducatif. Les 216 modèles offrent une grande durée de vie. Idéal pour les enfants à partir du CP.',
        date: '2023-11-28',
        likes: 19
      },
      {
        id: 'r26',
        user: 'Émilie Roussel',
        rating: 5,
        comment: 'Utilisé en classe de CE1. Les élèves sont captivés. Parfait pour aborder la géométrie de manière ludique.',
        date: '2024-02-05',
        likes: 47
      }
    ]
  },
  {
    id: '2',
    name: 'Mémoire et Couleurs',
    description: 'Jeu éducatif d’association de couleurs favorisant la mémoire, la coordination œil-main et la pensée logique. Les enfants s’amusent à reproduire des combinaisons de couleurs.',
    price: 112,
    category: Category.EDUCATIONAL,
    image: game2,
    rating: 4.2,
    featured: false,
    ageRange: '3+',
    players: '2-4',
    reviews: [
      {
        id: 'r1',
        user: 'Sophie Martin',
        rating: 5,
        comment: 'Mon fils de 3 ans adore ce jeu ! Les bouteilles colorées sont faciles à manipuler et il passe des heures à associer les couleurs.',
        date: '2024-02-15',
        likes: 24
      },
      {
        id: 'r2',
        user: 'Thomas Bernard',
        rating: 4,
        comment: 'Bon jeu éducatif. Les pièces sont solides et colorées. Parfait pour la maternelle.',
        date: '2023-11-08',
        likes: 12
      }
    ]
  },
  {
    id: '3',
    name: 'Hedbanz – Questions',
    description: 'Jeu de cartes rapide où chaque joueur porte un bandeau avec une carte visible des autres. En posant des questions fermées, il doit deviner ce qu’il est.',
    price: 49,
    category: Category.FAMILY,
    image: game3,
    rating: 4.6,
    featured: true,
    ageRange: '7+',
    players: '2-6',
    trending: true,
    reviews: [
      {
        id: 'r5',
        user: 'tara speece',
        rating: 5,
        comment: 'Love this game, good quality fun. Hedbanz is an absolute hit in our house! The rules are simple enough for kids.',
        date: '2025-08-12',
        likes: 45
      },
      {
        id: 'r9',
        user: 'Z',
        rating: 5,
        comment: 'My 4 Year Old Nephew Loves It! Totally recommend this for a fun night-in with the family and the kids ❤️',
        date: '2021-01-15',
        likes: 33
      }
    ]
  },
  {
    id: '4',
    name: 'HappyGrow – Multiplication',
    description: 'Jeu de société éducatif pour l’apprentissage ludique des tables de multiplication. Le plateau coloré aide les enfants à visualiser et mémoriser les opérations.',
    price: 79,
    category: Category.EDUCATIONAL,
    image:game4,
    rating: 4.3,
    featured: false,
    ageRange: '6+',
    players: '2-4',
    reviews: [
      {
        id: 'r10',
        user: 'Isabelle Renard',
        rating: 5,
        comment: 'Ma fille de 7 ans avait du mal avec ses tables de multiplication. Depuis quelle joue à ce jeu, elle a progressé en samusant.',
        date: '2024-03-18',
        likes: 27
      }
    ]
  },
  {
    id: '5',
    name: 'Lettres A à G',
    description: 'Jeu d’alphabet simple et coloré pour familiariser les enfants avec les premières lettres majuscules. Favorise la reconnaissance visuelle.',
    price: 130,
    category: Category.AWAKENING,
    image: game5,
    rating: 4.0,
    featured: true,
    ageRange: '3+',
    players: '1-2',
    reviews: [
      {
        id: 'r15',
        user: 'Delphine D.',
        rating: 5,
        comment: 'Parfait ! Le produit répond à mes attentes et mon enfant de 4 ans adore jouer à ce jeu.',
        date: '2018-10-26',
        likes: 23
      },
      {
        id: 'r19',
        user: 'Client Amazon',
        rating: 5,
        comment: 'Excellent jeu d\'apprentissage pour les petits! Des belles lettres, associées à l\'image.',
        date: '2024-10-23',
        likes: 28
      }
    ]
  },
  {
    id: '6',
    name: 'New Four Color Game',
    description: 'Jeu de société classique basé sur l’association et la reconnaissance des couleurs. Idéal pour développer l’observation et la concentration.',
    price: 130,
    category: Category.FAMILY,
    image: game6,
    rating: 4.1,
    featured: false,
    trending: true,
    ageRange: '3+',
    players: '2-4',
    reviews: [
      {
        id: 'r21',
        user: 'Julien Robert',
        rating: 5,
        comment: 'Excellente qualité pour le prix. Les pièces sont solides et colorées. Jeu parfait pour les enfants en bas âge.',
        date: '2023-09-05',
        likes: 22
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Elena Rodriguez",
    role: "Enseignante",
    text: "EDUPLAY a transformé nos activités les jours de pluie. La sélection de jeux éducatifs est inégalée !",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    name: "David Smith",
    role: "Joueur Compétitif",
    text: "Le matériel est de qualité supérieure. Expédition extrêmement rapide aussi.",
    avatar: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Mia Thompson",
    role: "Parent",
    text: "J'adore le mode sombre du site ! C'est si facile de parcourir les jeux une fois les enfants couchés.",
    avatar: "https://i.pravatar.cc/150?u=mia"
  }
];
