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
    title: 'Mehrunisa',
    headline: 'Bridal silhouettes shaped for the ceremony and the celebration.',
    description:
      'A regal celebration of deep maroon and antique gold, Mehroonisa embodies the timeless grandeur of Pakistani bridal couture. Intricate traditional embroidery, delicate floral motifs, and rich embellishments come together across a graceful Farshi silhouette, creating depth and movement with every layer.',
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
        name: 'Golden Glow',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 245,000',
        fabric: 'Italian satin',
        image: '/collection1-1.PNG',
        images: [
          '/collection1-1.PNG',
          '/collection1-2.PNG',
          '/collection1-3.PNG',
          '/collection1-4.PNG',
        ],
      },
      {
        id: 'bridal-2',
        name: 'Blush Royale',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 280,000',
        fabric: 'French lace',
        image: '/collection2-1.PNG',
        images: [
          '/collection2-1.PNG',
          '/collection2-2.PNG',
          '/collection2-3.PNG',
          '/collection2-4.PNG',
        ],
      },
      {
        id: 'bridal-3',
        name: 'Gulzaar',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 230,000',
        fabric: 'Stretch velvet',
        image: '/collection3-1.jpeg',
        images: [
          '/collection3-1.jpeg',
          '/collection3-2.jpeg',
          '/collection3-3.PNG',
          '/collection3-4.jpeg',
          '/collection3-5.PNG',
          '/collection3-6.PNG',
        ],
      },
      {
        id: 'bridal-4',
        name: 'ZARIA',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 260,000',
        fabric: 'Pearl tulle',
        image: '/collection4-1.jpeg',
        images: [
          '/collection4-1.jpeg',
          '/collection4-2.jpeg',
          '/collection4-3.jpeg',
          '/collection4-4.jpeg',
        ],
      },
    ],
  },
  {
    slug: 'formal',
    index: '02 — Bridal',
    title: 'Zar-e-Mehroon',
    headline: 'Evening silhouettes that turn every entrance into a statement.',
    description:
      'A captivating expression of timeless bridal grandeur, Zar-e-Mehroon brings together rich rust tones and antique gold craftsmanship. Intricately embellished with traditional motifs and refined detailing, the ensemble captures the warmth, depth, and regal beauty of classic Pakistani bridal couture.',
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
        id: 'bridal-1',
        name: 'Golden Glow',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 245,000',
        fabric: 'Italian satin',
        image: '/collection1-1.PNG',
        images: [
          '/collection1-1.PNG',
          '/collection1-2.PNG',
          '/collection1-3.PNG',
          '/collection1-4.PNG',
        ],
      },
      {
        id: 'bridal-2',
        name: 'Blush Royale',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 280,000',
        fabric: 'French lace',
        image: '/collection2-1.PNG',
        images: [
          '/collection2-1.PNG',
          '/collection2-2.PNG',
          '/collection2-3.PNG',
          '/collection2-4.PNG',
        ],
      },
      {
        id: 'bridal-3',
        name: 'Gulzaar',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 230,000',
        fabric: 'Stretch velvet',
        image: '/collection3-1.jpeg',
        images: [
          '/collection3-1.jpeg',
          '/collection3-2.jpeg',
          '/collection3-3.PNG',
          '/collection3-4.jpeg',
          '/collection3-5.PNG',
          '/collection3-6.PNG',
        ],
      },
      {
        id: 'bridal-4',
        name: 'ZARIA',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 260,000',
        fabric: 'Pearl tulle',
        image: '/collection4-1.jpeg',
        images: [
          '/collection4-1.jpeg',
          '/collection4-2.jpeg',
          '/collection4-3.jpeg',
          '/collection4-4.jpeg',
        ],
      },
    ],
  },
  {
    slug: 'semi-formal',
    index: '03 — Bridal',
     title: 'Gul-e-Zar',
    headline: 'Evening silhouettes that turn every entrance into a statement.',
    description:
      'A graceful ode to timeless Pakistani bridal artistry, Gul-e-Zar brings together luminous ivory, antique gold, and rich rust accents in a lavish Farshi silhouette. Intricate floral embroidery flows across the ensemble, enriched with delicate embellishments and heritage-inspired detailing.',
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
        id: 'bridal-1',
        name: 'Golden Glow',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 245,000',
        fabric: 'Italian satin',
        image: '/collection1-1.PNG',
        images: [
          '/collection1-1.PNG',
          '/collection1-2.PNG',
          '/collection1-3.PNG',
          '/collection1-4.PNG',
        ],
      },
      {
        id: 'bridal-2',
        name: 'Blush Royale',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 280,000',
        fabric: 'French lace',
        image: '/collection2-1.PNG',
        images: [
          '/collection2-1.PNG',
          '/collection2-2.PNG',
          '/collection2-3.PNG',
          '/collection2-4.PNG',
        ],
      },
      {
        id: 'bridal-3',
        name: 'Gulzaar',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 230,000',
        fabric: 'Stretch velvet',
        image: '/collection3-1.jpeg',
        images: [
          '/collection3-1.jpeg',
          '/collection3-2.jpeg',
          '/collection3-3.PNG',
          '/collection3-4.jpeg',
          '/collection3-5.PNG',
          '/collection3-6.PNG',
        ],
      },
      {
        id: 'bridal-4',
        name: 'ZARIA',
        category: 'bridal',
        collectionTitle: 'The Bridal Line',
        price: 'PKR 260,000',
        fabric: 'Pearl tulle',
        image: '/collection4-1.jpeg',
        images: [
          '/collection4-1.jpeg',
          '/collection4-2.jpeg',
          '/collection4-3.jpeg',
          '/collection4-4.jpeg',
        ],
      },
    ],
  },
];

export const allDresses = collections.flatMap((collection) => collection.dresses);
