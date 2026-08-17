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
    title: 'Farshi Bridal Couture',
    headline: 'Bridal silhouettes shaped for the ceremony and the celebration.',
    description:
      'A regal Farshi Bridal ensemble crafted for the bride who appreciates timeless Pakistani craftsmanship. The ensemble combines luxurious fabrics with intricate traditional embellishment, creating an elegant and richly detailed bridal look.',
    heroImage:
      '/banner1-1.jpg',
    images: [
      '/bridal1-1.jpg',
      '/bridal1-2.jpg',
      '/bridal1-3.jpg',
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
        image: '/bridal1-1.jpg',
        images: [
          '/bridal1-1.jpg',
          '/bridal1-2.jpg',
          '/bridal1-3.jpg',
          '/banner1-1.jpg',
        ],
      },
      {
        id: 'bridal-2',
        name: 'Aster Lace Gown',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 280,000',
        fabric: 'French lace',
        image: '/bridal1-2.jpg',
        images: [
          '/bridal1-2.jpg',
          '/bridal1-3.jpg',
          '/banner1-2.jpg',
          '/bridal1-1.jpg',
        ],
      },
      {
        id: 'bridal-3',
        name: 'Velvet Column',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 230,000',
        fabric: 'Stretch velvet',
        image: '/bridal1-3.jpg',
        images: [
          '/bridal1-3.jpg',
          '/banner1-3.jpg',
          '/bridal1-1.jpg',
          '/bridal1-2.jpg',
        ],
      },
      {
        id: 'bridal-4',
        name: 'Ivory Pearl A-line',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 260,000',
        fabric: 'Pearl tulle',
        image: '/banner1-2.jpg',
        images: [
          '/banner1-2.jpg',
          '/banner1-3.jpg',
          '/bridal1-2.jpg',
          '/bridal1-3.jpg',
        ],
      },
    ],
  },
  {
    slug: 'formal',
    index: '02 — Bridal',
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
          '/bridal2.mp4',
        ],
    dresses: [
      {
        id: 'formal-1',
        name: 'Noir Siren',
        category: 'formal',
        collectionTitle: 'Formal Eveningwear',
        price: 'PKR 170,000',
        fabric: 'Silk crepe',
        image: '/bridal2-1.jpg',
        images: [
          '/bridal2-1.jpg',
          '/bridal2-2.jpg',
          '/bridal2-3.jpg',
          '/bridal2.jpg',
        ],
      },
      {
        id: 'formal-2',
        name: 'Midnight drape',
        category: 'formal',
        collectionTitle: 'Formal Eveningwear',
        price: 'PKR 155,000',
        fabric: 'Crisp chiffon',
        image: '/bridal2-2.jpg',
        images: [
          '/bridal2-2.jpg',
          '/bridal2-3.jpg',
          '/bridal2.jpg',
          '/bridal2-1.jpg',
        ],
      },
      {
        id: 'formal-3',
        name: 'Ember line',
        category: 'formal',
        collectionTitle: 'Formal Eveningwear',
        price: 'PKR 180,000',
        fabric: 'Stretch satin',
        image: '/bridal2-3.jpg',
        images: [
          '/bridal2-3.jpg',
          '/bridal2.jpg',
          '/bridal2-1.jpg',
          '/bridal2-2.jpg',
        ],
      },
      {
        id: 'formal-4',
        name: 'Celia Gown',
        category: 'formal',
        collectionTitle: 'Formal Eveningwear',
        price: 'PKR 165,000',
        fabric: 'Taffeta',
        image: '/bridal2.jpg',
        images: [
          '/bridal2.jpg',
          '/bridal2-1.jpg',
          '/bridal2-2.jpg',
          '/bridal2-3.jpg',
        ],
      },
    ],
  },
  {
    slug: 'semi-formal',
    index: '03 — Bridal',
    title: 'Semi-Formal Edit',
    headline: 'Light, lovely, and beautifully made for layered celebrations.',
    description:
      'Occasion dresses with softer drama and easier movement, crafted to feel polished from morning to night.',
    heroImage:
      '/bridal3-1.jpg',
    images: [
      '/bridal3-1.jpg',
      '/bridal3-2.jpg',
      '/bridal3-3.jpg',
      '/bridal3.mp4',
    ],
    dresses: [
      {
        id: 'semiformal-1',
        name: 'Sunlit pleat',
        category: 'semi-formal',
        collectionTitle: 'Semi-Formal Edit',
        price: 'PKR 120,000',
        fabric: 'Georgette',
        image: '/bridal3-1.jpg',
        images: [
          '/bridal3-1.jpg',
          '/bridal3-2.jpg',
          '/bridal3-3.jpg',
          '/bridal%203.jpg',
        ],
      },
      {
        id: 'semiformal-2',
        name: 'Patina slip',
        category: 'semi-formal',
        collectionTitle: 'Semi-Formal Edit',
        price: 'PKR 110,000',
        fabric: 'Silk blend',
        image: '/bridal3-2.jpg',
        images: [
          '/bridal3-2.jpg',
          '/bridal3-3.jpg',
          '/bridal%203.jpg',
          '/bridal3-1.jpg',
        ],
      },
      {
        id: 'semiformal-3',
        name: 'Mira gown',
        category: 'semi-formal',
        collectionTitle: 'Semi-Formal Edit',
        price: 'PKR 140,000',
        fabric: 'Organza',
        image: '/bridal3-3.jpg',
        images: [
          '/bridal3-3.jpg',
          '/bridal%203.jpg',
          '/bridal3-1.jpg',
          '/bridal3-2.jpg',
        ],
      },
      {
        id: 'semiformal-4',
        name: 'Pearl column',
        category: 'semi-formal',
        collectionTitle: 'Semi-Formal Edit',
        price: 'PKR 135,000',
        fabric: 'Soft satin',
        image: '/bridal%203.jpg',
        images: [
          '/bridal%203.jpg',
          '/bridal3-1.jpg',
          '/bridal3-2.jpg',
          '/bridal3-3.jpg',
        ],
      },
    ],
  },
];

export const allDresses = collections.flatMap((collection) => collection.dresses);
