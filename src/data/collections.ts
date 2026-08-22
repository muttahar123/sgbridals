export type CollectionSlug = 'bridal' | 'formal' | 'semi-formal';
export type CollectionFilter = 'all' | CollectionSlug;

export interface DressDetail {
  label: string;
  value: string;
}

export interface Dress {
  id: string;
  name: string;
  category: CollectionSlug;
  collectionTitle: string;
  fabric: string;
  image: string;
  images: string[];
  description: string;
  details: DressDetail[];
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

const signatureDresses: Dress[] = [
  {
    id: 'golden-glow',
    name: 'Golden Glow',
    category: 'bridal',
    collectionTitle: 'The Bridal Line',
    fabric: 'Lama Tissue',
    image: '/collection1-1.PNG',
    images: [
      '/collection1-1.PNG',
      '/collection1-2.PNG',
      '/collection1-3.PNG',
      '/collection1-4.PNG',
    ],
    description:
      'Radiate timeless sophistication in Golden Glow, a masterclass in traditional craftsmanship. This exquisite ensemble is meticulously hand-embellished with intricate pure kora dabka and detailed zardozi work, creating a luminous, heirloom-worthy look. Paired with a delicately adorned dupatta and classic straight trousers, it is the ultimate choice for your next grand celebration.\n\nThe flowing silhouette, ornate detailing, and beautifully coordinated dupatta create an effortlessly sophisticated look, perfect for festive gatherings, weddings, formals, and special occasions.',
    details: [
      { label: 'Fabric', value: 'Lama Tissue' },
      { label: 'Embellishment', value: 'Kora Dabka' },
      { label: 'Color', value: 'Golden' },
      { label: 'Style', value: 'Luxury Traditional / Formal' },
    ],
  },
  {
    id: 'blush-royale',
    name: 'Blush Royale',
    category: 'bridal',
    collectionTitle: 'The Bridal Line',
    fabric: 'Lama Tissue',
    image: '/collection2-1.PNG',
    images: [
      '/collection2-1.PNG',
      '/collection2-2.PNG',
      '/collection2-3.PNG',
      '/collection2-4.PNG',
    ],
    description:
      'A timeless expression of grace and refined luxury, Blush Royale is crafted for the woman who appreciates delicate detailing and effortless elegance.\n\nThe ensemble features a dreamy blush-pink Lama Tissue canvas. The neckline, sleeves, borders, and hem are adorned with exquisite Kora Dabka craftsmanship, complemented by touches of Sona Zari that add a subtle regal glow.\n\nThe flowing silhouette, ornate embroidery, and beautifully coordinated dupatta create an effortlessly sophisticated look, perfect for festive gatherings, weddings, formal dinners, and special occasions.',
    details: [
      { label: 'Main Fabric', value: 'Lama Tissue' },
      { label: 'Embellishment', value: 'Kora Sona Zari Dabka' },
      { label: 'Color', value: 'Blush Pink' },
      { label: 'Style', value: 'Luxury Traditional / Formal' },
    ],
  },
  {
    id: 'gulzaar',
    name: 'Gulzaar',
    category: 'bridal',
    collectionTitle: 'The Bridal Line',
    fabric: 'Pure Khaddi',
    image: '/collection3-1.jpeg',
    images: [
      '/collection3-1.jpeg',
      '/collection3-2.jpeg',
      '/collection3-3.PNG',
      '/collection3-4.jpeg',
      '/collection3-5.PNG',
      '/collection3-6.PNG',
    ],
    description:
      'An exquisite blend of tradition and luxury, Gulzaar is crafted from premium pure khaddi fabric. This breathtaking 3-piece ensemble features detailed hand embroidery with pure kora dabka and radiant gold zari, beautifully highlighted with deep purple resham accents.\n\nDelicate border craftsmanship finishes the hem and trousers, while delicate chan boti embellishments scatter gracefully across the back of the shirt and dupatta for a regal, 360-degree look.',
    details: [
      { label: 'Shirt Fabric', value: 'Pure Khaddi' },
      { label: 'Dupatta Fabric', value: 'Pure Khaddi' },
      { label: 'Trouser Fabric', value: 'Pure Raw Silk / Khaddi' },
      { label: 'Work Details', value: 'Pure Kora Dabka, Gold Zari, Purple Resham, and Back Chan Boti' },
      { label: 'Includes', value: '3-Piece Ensemble (Shirt, Trouser, Dupatta)' },
      { label: 'Color Palette', value: 'Champagne Ivory with Deep Purple Accents' },
    ],
  },
  {
    id: 'zaria',
    name: 'ZARIA',
    category: 'bridal',
    collectionTitle: 'The Bridal Line',
    fabric: 'Khaddi Masuri',
    image: '/collection4-1.jpeg',
    images: [
      '/collection4-1.jpeg',
      '/collection4-2.jpeg',
      '/collection4-3.jpeg',
      '/collection4-4.jpeg',
    ],
    description:
      'A refined expression of timeless elegance, ZARIA is presented in an exquisite Titanium Silver hue, creating a sophisticated balance of understated luxury and regal allure.\n\nThe ensemble features a beautifully crafted Khaddi Masuri shirt, paired with a graceful Medium Silk dupatta adorned with delicate Chan Boti detailing. A sleek Lama Silk trouser completes the look, finished with a refined 1-inch border for a polished and elegant silhouette.\n\nThe intricate embellishment features silver Kora Dabka, Zari, and pink Resham, adding depth, texture, and a subtle luminous finish. Designed for the woman who appreciates refined craftsmanship and quiet luxury, ZARIA brings together traditional artistry and contemporary sophistication in perfect harmony.',
    details: [
      { label: 'Color', value: 'Titanium Silver' },
      { label: 'Shirt', value: 'Khaddi Masuri' },
      { label: 'Dupatta', value: 'Medium Silk with Chan Boti' },
      { label: 'Trouser', value: 'Lama Silk with 1-inch Border' },
      { label: 'Work', value: 'Silver Kora Dabka, Zari, Pink Resham' },
    ],
  },
];

export const collections: CollectionItem[] = [
  {
    slug: 'bridal',
    index: '01 - Bridal',
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
    dresses: signatureDresses,
  },
  {
    slug: 'formal',
    index: '02 - Bridal',
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
    dresses: signatureDresses,
  },
  {
    slug: 'semi-formal',
    index: '03 - Bridal',
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
    dresses: signatureDresses,
  },
];

export const allDresses = signatureDresses;
