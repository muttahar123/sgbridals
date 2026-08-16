export type CollectionSlug = 'bridal' | 'formal' | 'semi-formal';
export type CollectionFilter = 'all' | CollectionSlug;

export interface Dress {
  id: string;
  name: string;
  category: CollectionSlug;
  collectionTitle: string;
  price: string;
  fabric: string;
  image: string;
  images: string[];
}

export interface CollectionItem {
  slug: CollectionSlug;
  index: string;
  title: string;
  headline: string;
  description: string;
  heroImage: string;
  images: string[];
  dresses: Dress[];
}

export const collections: CollectionItem[] = [
  {
    slug: 'bridal',
    index: '01 — Bridal',
    title: 'The Bridal Line',
    headline: 'Bridal silhouettes shaped for the ceremony and the celebration.',
    description:
      'Hand-crafted gowns with sculpted bodices, refined trains, and couture finishes for your most memorable moments.',
    heroImage:
      '/banner1-1.jpg',
    images: [
      '/banner1-1.jpg',
      '/banner1-2.jpg',
      '/banner1-3.jpg',
      '/set1-vid.mp4',
    ],
    dresses: [
      {
        id: 'bridal-1',
        name: 'Rosewood Ballgown',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 245,000',
        fabric: 'Italian satin',
        image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=900&q=80',
        ],
      },
      {
        id: 'bridal-2',
        name: 'Aster Lace Gown',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 280,000',
        fabric: 'French lace',
        image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
        ],
      },
      {
        id: 'bridal-3',
        name: 'Velvet Column',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 230,000',
        fabric: 'Stretch velvet',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=900&q=80',
        ],
      },
      {
        id: 'bridal-4',
        name: 'Ivory Pearl A-line',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 260,000',
        fabric: 'Pearl tulle',
        image: 'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
        ],
      },
    ],
  },
  {
    slug: 'formal',
    index: '02 — Formal',
    title: 'Formal Eveningwear',
    headline: 'Evening silhouettes that turn every entrance into a statement.',
    description:
      'A refined edit of gowns and long dresses ready for grand receptions, galas, and elevated celebrations.',
    heroImage:
      '/bridal2-1.jpg',
        images: [
          '/bridal2-1.jpg',
          '/bridal2-2.jpg',
          '/bridal2-3.jpg',
          '/bridal2-4.jpg',
        ],
    dresses: [
      {
        id: 'formal-1',
        name: 'Noir Siren',
        category: 'formal',
        collectionTitle: 'Formal Eveningwear',
        price: 'PKR 170,000',
        fabric: 'Silk crepe',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=900&q=80',
        ],
      },
      {
        id: 'formal-2',
        name: 'Midnight drape',
        category: 'formal',
        collectionTitle: 'Formal Eveningwear',
        price: 'PKR 155,000',
        fabric: 'Crisp chiffon',
        image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=900&q=80',
        ],
      },
      {
        id: 'formal-3',
        name: 'Ember line',
        category: 'formal',
        collectionTitle: 'Formal Eveningwear',
        price: 'PKR 180,000',
        fabric: 'Stretch satin',
        image: 'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
        ],
      },
      {
        id: 'formal-4',
        name: 'Celia Gown',
        category: 'formal',
        collectionTitle: 'Formal Eveningwear',
        price: 'PKR 165,000',
        fabric: 'Taffeta',
        image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=900&q=80',
        ],
      },
    ],
  },
  {
    slug: 'semi-formal',
    index: '03 — Semi-Formal',
    title: 'Semi-Formal Edit',
    headline: 'Light, lovely, and beautifully made for layered celebrations.',
    description:
      'Occasion dresses with softer drama and easier movement, crafted to feel polished from morning to night.',
    heroImage:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    images: [
      '/bridal3-1.jpg',
      'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
    ],
    dresses: [
      {
        id: 'semiformal-1',
        name: 'Sunlit pleat',
        category: 'semi-formal',
        collectionTitle: 'Semi-Formal Edit',
        price: 'PKR 120,000',
        fabric: 'Georgette',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
        ],
      },
      {
        id: 'semiformal-2',
        name: 'Patina slip',
        category: 'semi-formal',
        collectionTitle: 'Semi-Formal Edit',
        price: 'PKR 110,000',
        fabric: 'Silk blend',
        image: 'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
        ],
      },
      {
        id: 'semiformal-3',
        name: 'Mira gown',
        category: 'semi-formal',
        collectionTitle: 'Semi-Formal Edit',
        price: 'PKR 140,000',
        fabric: 'Organza',
        image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
        ],
      },
      {
        id: 'semiformal-4',
        name: 'Pearl column',
        category: 'semi-formal',
        collectionTitle: 'Semi-Formal Edit',
        price: 'PKR 135,000',
        fabric: 'Soft satin',
        image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1583939003579-94ddd4b0d9d5?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
        ],
      },
    ],
  },
];

export const allDresses = collections.flatMap((collection) => collection.dresses);
