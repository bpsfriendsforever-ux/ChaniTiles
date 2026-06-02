/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TileProduct, ShowroomReview } from './types';

export const GRID_PATTERNS = [
  { id: 'grid', name: 'Standard Grid (Stack)' },
  { id: 'brick', name: 'Running Bond (Brick)' },
  { id: 'diagonal', name: 'Diagonal (45°)' },
  { id: 'herringbone', name: 'Herringbone' }
];

export const SIMULATION_SCENES = [
  {
    id: 'living',
    name: 'Luxury Living Room',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    type: 'floor',
    defaultTileId: 'vit-01',
    description: 'Floor area'
  },
  {
    id: 'bathroom',
    name: 'Minimalist Bathroom',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80',
    type: 'wall',
    defaultTileId: 'wall-01',
    description: 'Back wall area'
  },
  {
    id: 'kitchen',
    name: 'Contemporary Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    type: 'wall',
    defaultTileId: 'wall-04',
    description: 'Backsplash panel'
  },
  {
    id: 'exterior',
    name: 'Front Elevation',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    type: 'wall',
    defaultTileId: 'wall-02',
    description: 'Exterior cladding'
  }
];

export const TILE_PRODUCTS: TileProduct[] = [
  // 1. Vitrified Tiles
  {
    id: 'vit-01',
    name: 'Calacatta Gold Premium PGVT',
    category: 'vitrified',
    subCategory: 'Polished Glazed Vitrified Tiles (PGVT)',
    size: '600x1200 mm',
    thickness: '9 mm',
    finish: 'High Gloss',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-luxurious Italian-inspired Calacatta marble look with striking golden veins and mirror-like glossy polish. Ideal for major living rooms and reception halls.',
    features: ['Polished Glazed surface', 'Zero water absorption', 'Stain & Scratch resistant', 'Seamless joint finish'],
    approxPriceRange: '₹55 - ₹85 / Sq. Ft.'
  },
  {
    id: 'vit-02',
    name: 'Double Charge Carbon Ash',
    category: 'vitrified',
    subCategory: 'Double Charge Vitrified Tiles',
    size: '800x800 mm',
    thickness: '10 mm',
    finish: 'Glossy',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy durable double charge vitrified tiles with dual pigment layer. Crafted for high-traffic heavy duty flooring like office spaces, showrooms, and living spaces.',
    features: ['Double layer durability', 'Extra wear resistant', 'Excellent dust repellent', 'Long-lasting gloss retention'],
    approxPriceRange: '₹60 - ₹78 / Sq. Ft.'
  },
  {
    id: 'vit-03',
    name: 'Satvario Classic GVT',
    category: 'vitrified',
    subCategory: 'Glazed Vitrified Tiles (GVT)',
    size: '600x600 mm',
    thickness: '9 mm',
    finish: 'Glossy',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
    description: 'Timeless Satvario white vitrified tile with elegant deep grey textures. Merges safety and durability with standard layout aesthetics.',
    features: ['Premium Satvario look', 'Eco-friendly raw clay base', 'Easy maintenance floor surface'],
    approxPriceRange: '₹48 - ₹65 / Sq. Ft.'
  },

  // 2. Wall Tiles
  {
    id: 'wall-01',
    name: 'Royal Moroccan Azul 3D Wall Tile',
    category: 'wall',
    subCategory: '3D Designer Wall Tiles',
    size: '300x600 mm',
    thickness: '8.5 mm',
    finish: 'Satin',
    image: 'https://images.unsplash.com/photo-1523413555809-0fb86868517f?auto=format&fit=crop&w=800&q=80',
    description: 'Detailed 3D relief tile in pristine blue-and-white Mediterranean motifs. Create scenic focus walls in bathrooms, kitchens, and lobby accents.',
    features: ['Three-dimensional texture', 'Dust-resistant crevices', 'Rich satin aesthetic'],
    approxPriceRange: '₹50 - ₹70 / Sq. Ft.'
  },
  {
    id: 'wall-02',
    name: 'Sierra Natural Elevation Cladding',
    category: 'wall',
    subCategory: 'Elevation Wall Tiles',
    size: '300x450 mm',
    thickness: '10 mm',
    finish: 'Rustic',
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067ffd5?auto=format&fit=crop&w=800&q=80',
    description: 'Beautiful multi-tiered slate cladding replica providing rugged natural beauty. Highly resistant to harsh weathering, ideal for external home frontages and boundary walls.',
    features: ['Heavy rough stone texture', 'Fades resistance guaranteed', 'Perfect thermal insulation assist'],
    approxPriceRange: '₹45 - ₹68 / Sq. Ft.'
  },
  {
    id: 'wall-03',
    name: 'Teakwood Striped Ceramic Plank',
    category: 'wall',
    subCategory: 'Wooden Wall Tiles',
    size: '300x600 mm',
    thickness: '8.5 mm',
    finish: 'Matt',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
    description: 'Rich authentic teakwood textures split as panels. Perfect for rendering warm, organic accent backdrops in master bedrooms and corporate receptions.',
    features: ['Textured natural grains', 'Moisture resistant alternative to real wood', 'Termite-free lifetime warranty'],
    approxPriceRange: '₹42 - ₹58 / Sq. Ft.'
  },
  {
    id: 'wall-04',
    name: 'Subway Glazed Emerald Accent',
    category: 'wall',
    subCategory: 'Ceramic Subway Wall Tiles',
    size: '300x450 mm',
    thickness: '8 mm',
    finish: 'High Gloss',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    description: 'Sophisticated deep emerald mini brick panels creating high-contrast polished backsplashes in contemporary chimneys and washbasins.',
    features: ['Anti-bacterial coating', 'Super gloss reflections', 'Extremely easy cleaning patterns'],
    approxPriceRange: '₹38 - ₹55 / Sq. Ft.'
  },

  // 3. Floor Tiles
  {
    id: 'floor-01',
    name: 'Oceanic Abundant Coral 3D Floor Tile',
    category: 'floor',
    subCategory: '3D Epoxy & Porcelain Flooring',
    size: '600x600 mm',
    thickness: '9.5 mm',
    finish: 'High Gloss',
    image: 'https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?auto=format&fit=crop&w=800&q=80',
    description: 'Hyper-realistic underwater depth print with durable protective porcelain surface. Ideal for creative shower floors and high-impact custom spaces.',
    features: ['High definition 3D art printing', 'Extra thick glaze layer', 'Anti-slip security class R10'],
    approxPriceRange: '₹120 - ₹190 / Sq. Ft.'
  },
  {
    id: 'floor-02',
    name: 'Natural Oak Wood-Plank Porcelain',
    category: 'floor',
    subCategory: 'Wooden Flooring Tiles',
    size: '200x1200 mm',
    thickness: '10 mm',
    finish: 'Matt',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80',
    description: 'Elegant linear floor planks resembling warm oak hardwood. Combines the timeless beauty of wood with the heavy washability and durability of vitrified porcelain.',
    features: ['Plank strip format', 'Interlocking tile system', 'Zero swelling under extreme moisture', 'Stain proof surface'],
    approxPriceRange: '₹65 - ₹110 / Sq. Ft.'
  },

  // 4. Bathroom Tiles
  {
    id: 'bath-01',
    name: 'Beige Travertine Bathroom Ensemble',
    category: 'bathroom',
    subCategory: 'Bathroom Wall & Floor Coordinated Set',
    size: '300x450 mm',
    thickness: '8 mm',
    finish: 'Satin',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    description: 'Warm travertine set featuring high-contrast light, dark, and geometric highlighter tiles. Includes anti-skid matching floor tiles to complete the ensemble.',
    features: ['Coordinated dark, light and highlighter triplet', 'Waterproof micro-pores', 'Slip-resistant bathroom protection'],
    approxPriceRange: '₹35 - ₹50 / Sq. Ft.'
  },

  // 5. Designer & Custom Custom Art Tiles
  {
    id: 'des-01',
    name: 'Sri Ganesha Auspicious Gateway Mural',
    category: 'designer',
    subCategory: 'God Printed & Picture Tiles',
    size: '300x600 mm (Set of 2)',
    thickness: '9 mm',
    finish: 'High Gloss',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&w=800&q=80',
    description: 'Beautifully detailed multi-layered vitrified digital mural portraying Lord Ganesha. Specially crafted for home prayer shrines (Pooja Ghar), main door entrances, and welcome lobbies.',
    features: ['Real gold foil highlighting effect', 'Dust repellent surface', 'Spiritual customized prints'],
    approxPriceRange: '₹350 - ₹650 / Set'
  },
  {
    id: 'des-02',
    name: 'Custom Calligraphy Front Name Tile',
    category: 'designer',
    subCategory: 'Front Door Name Tiles',
    size: '300x450 mm',
    thickness: '10 mm',
    finish: 'Satin',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    description: 'Weatherproof high-durability name placard tiles customized with house number and laser etched script graphics. Handcrafted to resist extreme sun, monsoon storm stains.',
    features: ['Tailor-made calligraphy graphics', 'UV-protected ink pigment', 'Brass screw installation points'],
    approxPriceRange: '₹400 - ₹900 / Piece'
  },

  // 6. CP Fittings & Sanitaryware
  {
    id: 'san-01',
    name: 'Duo-Flow Curved PTMT Long Nose Tap',
    category: 'sanitary',
    subCategory: 'PTMT Designer Taps & CP Fittings',
    size: '1/2 inch Standard Connection',
    thickness: 'N/A',
    finish: 'Satin',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', // stylized close up of clean water outlet tap
    description: 'Premium grade, food-safe PTMT polymer sleek tap with high mechanical stability, anti-clogging aerator, and corrosion-free life. Outstanding choice for hard water areas in Bhopal.',
    features: ['Zero scaling & hard water build-up', 'Smooth drip-free foam flow mechanism', 'Withstands water up to 90°C', 'Heavy-duty engineered PTMT polymer'],
    approxPriceRange: '₹180 - ₹320 / Piece'
  }
];

export const SHOWROOM_REVIEWS: ShowroomReview[] = [
  {
    id: 'rev-01',
    author: 'Aalok Sharma',
    rating: 5,
    date: '12 days ago',
    comment: 'Best tile wholesaler in Bhopal! Visited their showroom near Kolar Road. They have an massive collection of PGVT white marble look tiles in 600x1200mm. The owners are very polite and explained different differences between double charge vitrified and GVT tiles. Extremely reasonable prices compared to large retail showrooms. Delivered 140 boxes of vitrified tiles within a single day directly at my site.'
  },
  {
    id: 'rev-02',
    author: 'Pooja Rajpoot',
    rating: 5,
    date: '1 month ago',
    comment: 'We purchased 3D Elevation Wall Tiles and beautiful God Picture Tiles for our new house entrance. The quality of printing is brilliant (completely realistic and glossy). The prices on IndiaMart were extremely transparent. Highly responsive team, absolute professional tiles dealer in Bhopal area.'
  },
  {
    id: 'rev-03',
    author: 'Devendra Yadav',
    rating: 4,
    date: '2 months ago',
    comment: 'Good variety of wooden planks and bathroom tile coordinators. Also purchased rustproof PTMT taps for my entire commercial building. Perfect wholesale rate and reliable transport coordination. Highly recommended if you are constructing your home in Bhopal!'
  }
];

export const TILE_SIZES = [
  { label: '600 x 600 mm (2 x 2 ft)', value: '600x600', areaSqFt: 3.875, boxQuantity: 4, labelSimple: 'Square' },
  { label: '600 x 1200 mm (2 x 4 ft)', value: '600x1200', areaSqFt: 7.75, boxQuantity: 2, labelSimple: 'Large Slab' },
  { label: '800 x 800 mm (2.6 x 2.6 ft)', value: '800x800', areaSqFt: 6.89, boxQuantity: 3, labelSimple: 'Medium Grande' },
  { label: '300 x 600 mm (1 x 2 ft)', value: '300x600', areaSqFt: 1.937, boxQuantity: 8, labelSimple: 'Wall Standard' },
  { label: '300 x 450 mm (1 x 1.5 ft)', value: '300x450', areaSqFt: 1.453, boxQuantity: 10, labelSimple: 'Bathroom Wall' },
  { label: '200 x 1200 mm (0.6 x 4 ft)', value: '200x1200', areaSqFt: 2.58, boxQuantity: 6, labelSimple: 'Wooden Plank' }
];
