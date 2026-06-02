/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Eye, 
  ArrowUpRight, 
  Check, 
  X, 
  MapPin, 
  Sparkles, 
  MessageCircle, 
  ExternalLink, 
  ShieldCheck, 
  Tag, 
  Info, 
  Truck, 
  Package,
  Maximize2
} from 'lucide-react';

// Import newly uploaded real storefront, showroom, and client site images
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';

interface GalleryProps {
  onInquireItem: (itemName: string) => void;
}

interface GalleryImage {
  id: string;
  title: string;
  category: 'showroom' | 'warehouse' | 'sanitary' | 'projects';
  categoryLabel: string;
  image: string;
  description: string;
  dimensions?: string;
  source: 'Google Maps Review' | 'IndiaMart Verified Upload' | 'Showroom Photoshoot';
  reviewerName?: string;
  uploadDate?: string;
  rating?: number;
  batchCode: string;
  material: string;
  surface: string;
  absorption: string;
  priceEstimate: string;
  bhopalStock: string;
  thickness: string;
  features: string[];
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-01',
    title: 'Premium Glazed Vitrified Tiles Showroom Display',
    category: 'showroom',
    categoryLabel: 'Showroom Displays',
    image: img1,
    description: 'Actual physical display board photographed at our premium Bhopal showroom. Features luxurious marbles and GVT textures with brilliant reflection properties and high scratch resistance, perfect for living spaces.',
    dimensions: '600x1200 mm (2x4 Ft)',
    source: 'Showroom Photoshoot',
    reviewerName: 'Chani Tiles Storefront',
    uploadDate: 'June 2026',
    rating: 5,
    batchCode: 'CHANI-GVT-101',
    material: 'Vitrified Glazed Porcelain',
    surface: 'High-Gloss Liquid Mirror Polish',
    absorption: '< 0.05% (Zero Seepage)',
    thickness: '9.0 mm',
    priceEstimate: '₹48 - ₹68 per Sq. Ft.',
    bhopalStock: '5,000+ Sq. Ft. ready for delivery',
    features: [
      'Stain-resistant nano-sealed protective layer',
      'Ultra durability rating for high foot traffic',
      'Seamless mirror finish reflection profile'
    ]
  },
  {
    id: 'gal-02',
    title: 'Luxury Double Charge Vitrified Floor Tile',
    category: 'showroom',
    categoryLabel: 'Showroom Displays',
    image: img2,
    description: 'Highly polished heavy-duty vitrified floor tile suitable for living spaces, showrooms, and luxury residences. Double layer design ensures superior scratch protection and everlasting brightness.',
    dimensions: '800x800 mm (2.6x2.6 Ft)',
    source: 'Showroom Photoshoot',
    reviewerName: 'Chani Tiles Collection',
    uploadDate: 'June 2026',
    rating: 5,
    batchCode: 'CHANI-DCV-202',
    material: 'Double Charge Vitrified Porcelain',
    surface: 'Super Glossy Mirror Finish',
    absorption: '< 0.05% (Stain Safe)',
    thickness: '9.2 mm',
    priceEstimate: '₹55 - ₹75 per Sq. Ft.',
    bhopalStock: '6,200+ Sq. Ft. ready to load',
    features: [
      'Thick dual-charging layout prevents color fade',
      'High glaze reflection index of over 95%',
      'Monolithic structure with zero dust absorption'
    ]
  },
  {
    id: 'gal-03',
    title: 'Exquisite Wall Elevation Tiles Display',
    category: 'showroom',
    categoryLabel: 'Showroom Displays',
    image: img3,
    description: 'Genuine digital display showcasing premium multi-fired designer wall tile patterns. Sourced from our latest catalog, perfect for highlighters and pooja room or living area accent walls.',
    dimensions: '300x450 mm (12x18 Inches)',
    source: 'Google Maps Review',
    reviewerName: 'Harish Sharma (Bhopal)',
    uploadDate: 'May 2026',
    rating: 5,
    batchCode: 'CHANI-WALL-303',
    material: 'Premium Glass-Glazed Ceramic',
    surface: 'Double-Fired Glossy Art Decor',
    absorption: '8% - 10% (Exceptional Mortar Grip)',
    thickness: '8.5 mm',
    priceEstimate: '₹95 - ₹130 per piece',
    bhopalStock: '1,200+ Pieces in Kolar Bypass yard',
    features: [
      'High-temperature baked gold pigment detailing',
      'Smooth easy-wipe glaze shields from dirt',
      'Highly architectural, complements modern aesthetics'
    ]
  },
  {
    id: 'gal-04',
    title: 'Elegant Sanitaryware & Bath Fittings',
    category: 'sanitary',
    categoryLabel: 'CP & PTMT Fittings',
    image: img4,
    description: 'Premium rustproof sanitaryware and PTMT dual-tone taps displayed in our bathroom design section. Engineered specifically to withstand hard alkaline water and scaling issues common in central India.',
    dimensions: 'Standard 1/2 Inch Thread Size',
    source: 'IndiaMart Verified Upload',
    reviewerName: 'Plumbing Solutions Bhopal',
    uploadDate: 'May 2026',
    rating: 4.9,
    batchCode: 'CHANI-SAN-404',
    material: 'High-Density Rugged PTMT Polymer',
    surface: 'Chrome & Glossy High-Gloss Dual Tone',
    absorption: '0.00% (Rust-Free Forever)',
    thickness: 'Heavy Wall Thickness Rating',
    priceEstimate: '₹140 - ₹280 per unit',
    bhopalStock: '2,500+ pieces in stock',
    features: [
      'Equipped with anti-scaling internal core technology',
      'Heat-resistant, compatible with solar geysers',
      'Comes with Chani official leak-proof warranty'
    ]
  },
  {
    id: 'gal-05',
    title: 'Completed Luxury Bathroom highlighter Installation',
    category: 'projects',
    categoryLabel: 'Delivered Sites',
    image: img5,
    description: 'Beautiful client site photo delivered and installed for a premium villa project in Ayodhya Bypass, Bhopal. Features high-definition tile highlighters that create gorgeous interior contrast.',
    dimensions: '300x600 mm (1x2 Ft)',
    source: 'Google Maps Review',
    reviewerName: 'Preeti Deshmukh (Ayodhya Bypass)',
    uploadDate: 'April 2026',
    rating: 5,
    batchCode: 'CHANI-PROJ-505',
    material: 'Double-Fired Digital Ceramic',
    surface: 'Dual Texture Satin and Gloss Highlight',
    absorption: '10% (Excellent wall vertical adhesion)',
    thickness: '8.5 mm',
    priceEstimate: '₹34 - ₹42 per Sq. Ft.',
    bhopalStock: '3,000+ Sq. Ft. in warehouse stock',
    features: [
      'Custom color highlighter combinations available',
      'Impervious to heavy humidity and mold build-up',
      'Laser-aligned uniform edges for clean spacing'
    ]
  },
  {
    id: 'gal-06',
    title: 'Sierra Elevation Slate Rock & Designer Claddings',
    category: 'showroom',
    categoryLabel: 'Showroom Displays',
    image: img6,
    description: 'Rustic outerwear claddings and boundary slate tile designs. Specifically selected for modern villas in Bhopal. Gives a deep interlocking natural stone look without high-maintenance costs.',
    dimensions: '300x450 mm (12x18 Inches)',
    source: 'Showroom Photoshoot',
    reviewerName: 'Chani Elevate Range',
    uploadDate: 'June 2026',
    rating: 5,
    batchCode: 'CHANI-ELEV-606',
    material: 'Weatherproof Vitrified Porcelain',
    surface: 'Rough Mountain Stone relief',
    absorption: '< 0.2% (Resists monsoon moisture degradation)',
    thickness: '10.5 mm',
    priceEstimate: '₹38 - ₹48 per Sq. Ft.',
    bhopalStock: '4,000+ Sq. Ft. in Kolar yard',
    features: [
      'Interlocking boundary prevents rainwater seepage',
      'Highly UV-stabilized paint - zero fade in direct sun',
      'Provides thermal resistance on outer walls'
    ]
  },
  {
    id: 'gal-07',
    title: 'Heavy-Duty Parking & Pavement Tile Layout',
    category: 'projects',
    categoryLabel: 'Delivered Sites',
    image: img7,
    description: 'Delivered parking tile project at a commercial hub near Misrod, Bhopal. Shows our high-density textured parking pavers engineered to bear heavy commercial delivery vehicles and SUV loads daily.',
    dimensions: '400x400 mm (16x16 Inches)',
    source: 'Google Maps Review',
    reviewerName: 'Misrod Business Plaza Sourcing',
    uploadDate: 'January 2026',
    rating: 5,
    batchCode: 'CHANI-PARK-707',
    material: 'Full-Body Industrial Vitrified',
    surface: 'Pebbled Anti-Skid Grip Class R11',
    absorption: '< 0.05% (Stain and grease resistant)',
    thickness: '12 mm (Heavy Spec)',
    priceEstimate: '₹32 - ₹40 per Sq. Ft.',
    bhopalStock: '8,000+ Sq. Ft. currently in stock',
    features: [
      'Crush resistance exceeding 350 kg/cm²',
      'No skid surface safety even during peak Bhopal monsoons',
      'Resists fuel wash, motor grease, and chemical scrubs'
    ]
  },
  {
    id: 'gal-08',
    title: 'Luxury Vitrified Timbergrain Plank Displays',
    category: 'showroom',
    categoryLabel: 'Showroom Displays',
    image: img8,
    description: 'Teakwood and Oak-finish vitrified planks on our modern showroom display panels. Achieves the elegant rustic grain texture and cozy feel of premium wood without the threat of water swelling or termites.',
    dimensions: '200x1000 mm (8x40 Inches)',
    source: 'IndiaMart Verified Upload',
    reviewerName: 'Interior Tech Bhopal',
    uploadDate: 'March 2026',
    rating: 5,
    batchCode: 'CHANI-WOOD-808',
    material: 'Homogeneous Matte Porcelain',
    surface: 'Real Woodgrain Matte Feel Relief',
    absorption: '< 0.08% (100% Washable and Waterproof)',
    thickness: '9.0 mm',
    priceEstimate: '₹42 - ₹54 per Sq. Ft.',
    bhopalStock: '3,200+ Sq. Ft. immediately ready',
    features: [
      'Termite-proof, zero swelling under damp floor mopping',
      'Beautiful texture feel replicating organic oak structures',
      'Designed to lay with narrow group spacing spacers'
    ]
  }
];

// Beautiful custom vector pattern generator for when image loading fails
const renderTileVectorPattern = (image: GalleryImage) => {
  switch (image.id) {
    case 'gal-01': // PGVT Calacatta Gold
      return (
        <div className="w-full h-full bg-slate-50 relative flex items-center justify-center p-6 border border-slate-200 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100" />
          <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M-10 20 Q 30 50, 60 40 T 110 90" stroke="#f5c542" strokeWidth="1.2" fill="none" strokeDasharray="2 2" />
            <path d="M20 -10 Q 50 40, 40 70 T 80 110" stroke="#d4af37" strokeWidth="1.8" fill="none" />
            <path d="M-5 70 Q 40 60, 90 30" stroke="#cccccc" strokeWidth="0.8" fill="none" />
          </svg>
          <div className="relative z-10 text-center space-y-1.5">
            <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">PGVT Slab</span>
            <p className="text-xs font-extrabold text-slate-800 uppercase px-1 line-clamp-2 leading-tight">{image.title}</p>
            <span className="inline-block text-[9px] font-mono font-bold text-slate-400">High-Gloss Polish</span>
          </div>
        </div>
      );
    case 'gal-02': // Custom nameplate
      return (
        <div className="w-full h-full bg-amber-50/60 relative flex items-center justify-center p-6 border-4 border-double border-amber-900/20 overflow-hidden rounded-xl">
          <div className="absolute inset-2 border border-dashed border-amber-900/10" />
          <div className="relative z-10 text-center space-y-1.5">
            <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-amber-700">Custom Order</span>
            <p className="text-xs font-serif font-extrabold text-amber-950 border-y border-amber-900/10 py-1 uppercase tracking-wide leading-tight">{image.title}</p>
            <p className="text-xs font-semibold text-amber-800 italic mt-1 font-mono">"स्वागतम् / शुभ लाभ"</p>
          </div>
        </div>
      );
    case 'gal-03': // Hanuman Ji Devotional digital tile
      return (
        <div className="w-full h-full bg-orange-50/70 relative flex items-center justify-center p-6 border-2 border-orange-200/50 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100/50" />
          <div className="absolute inset-3 border border-orange-300/40 rounded-lg" />
          {/* Spiritual Indian Art Deco */}
          <div className="relative z-10 text-center space-y-2 p-2">
            <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-orange-600 bg-orange-100/50 px-2 py-0.5 rounded border border-orange-200/50">Sacred Art</span>
            <p className="text-xs font-bold text-orange-950 uppercase line-clamp-2 leading-tight px-1">{image.title}</p>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-white text-sm font-bold shadow-sm font-sans">ॐ</span>
          </div>
        </div>
      );
    case 'gal-04': // PTMT Taps
      return (
        <div className="w-full h-full bg-sky-50 relative flex items-center justify-center p-6 border border-sky-100 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-sky-100/60" />
          <svg className="absolute bottom-2 right-2 w-1/3 h-1/3 text-sky-200/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M7 11h10M12 4v7M12 11c0 3.5 1.5 5 1.5 5H10.5S12 14.5 12 11Z" />
          </svg>
          <div className="relative z-10 text-center space-y-1.5">
            <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-sky-600 bg-sky-100/50 px-2 py-0.5 rounded border border-sky-200">PTMT Fitting</span>
            <p className="text-xs font-extrabold text-sky-950 uppercase line-clamp-2 px-1 leading-tight">{image.title}</p>
            <span className="inline-block mt-1 text-[9px] font-mono font-bold text-slate-400">Bhopal Stock Specs</span>
          </div>
        </div>
      );
    case 'gal-05': // Moroccan wall highlighters
      return (
        <div className="w-full h-full bg-teal-50 relative flex flex-col justify-center p-3 border border-teal-100 overflow-hidden rounded-xl">
          <div className="grid grid-cols-3 gap-1 w-full h-full opacity-60">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="aspect-square border border-teal-100/60 rounded bg-white/90 flex items-center justify-center p-0.5">
                <div className="w-full h-full rounded bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                  <div className="w-1 h-1 rotate-45 bg-teal-500 rounded-xs" />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-2 bg-white/95 border border-teal-100/50 p-3 rounded-lg flex flex-col items-center justify-center text-center">
            <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-teal-650">Moroccan 3D Wall</span>
            <p className="text-xs font-extrabold text-slate-800 uppercase line-clamp-2 mt-0.5 leading-tight">{image.title}</p>
          </div>
        </div>
      );
    case 'gal-06': // Boundary elevation slate rock
      return (
        <div className="w-full h-full bg-stone-100/80 relative flex items-center justify-center p-6 border border-stone-200 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-stone-100 via-stone-50 to-stone-200/50" />
          <div className="absolute inset-0 flex flex-col gap-1 opacity-20 p-2">
            <div className="h-3 bg-stone-800 w-1/2 rounded" />
            <div className="h-3 bg-stone-800 w-4/5 self-end rounded" />
            <div className="h-3 bg-stone-800 w-2/3 rounded" />
            <div className="h-3 bg-stone-800 w-1/2 self-end rounded" />
          </div>
          <div className="relative z-10 text-center space-y-1.5 bg-white/90 border border-stone-200/60 p-2 text-stone-900 rounded-xl">
            <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-stone-550">Elevation Cladding</span>
            <p className="text-xs font-extrabold text-stone-900 uppercase line-clamp-2 px-1 leading-tight">{image.title}</p>
            <span className="inline-block text-[8px] font-bold font-mono text-stone-500">Sierra Slate Look</span>
          </div>
        </div>
      );
    case 'gal-07': // Parking paver tiles
      return (
        <div className="w-full h-full bg-slate-100 relative flex items-center justify-center p-6 border border-slate-200 overflow-hidden rounded-xl">
          <div className="absolute inset-1 grid grid-cols-4 gap-1 opacity-15">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="bg-slate-800 rounded aspect-square border border-slate-900" />
            ))}
          </div>
          <div className="relative z-10 text-center space-y-1.5 bg-white/95 p-3 rounded-xl border border-slate-200 shadow-sm">
            <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-slate-500">Heavy Duty Floor</span>
            <p className="text-xs font-extrabold text-slate-950 uppercase line-clamp-2 px-1 leading-tight">{image.title}</p>
            <span className="inline-block bg-emerald-50 text-emerald-700 text-[8px] font-black font-mono px-1.5 py-0.5 rounded border border-emerald-200">Anti-Skid R11</span>
          </div>
        </div>
      );
    case 'gal-08': // Timber wood floor planks
      return (
        <div className="w-full h-full bg-amber-50/50 relative flex items-center justify-center p-6 border border-amber-200/50 overflow-hidden rounded-xl">
          <div className="absolute inset-0 flex flex-col gap-1 opacity-25">
            <div className="h-full border-b border-amber-800/10 relative">
              <div className="absolute left-1/4 h-full border-r border-amber-800/10" />
            </div>
            <div className="h-full border-b border-amber-800/10 relative">
              <div className="absolute left-3/4 h-full border-r border-amber-800/10" />
            </div>
          </div>
          <div className="relative z-10 text-center space-y-1.5 bg-white/90 p-3 rounded-xl border border-amber-250 border-amber-220 shadow-xs">
            <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-amber-700">Timber Plank</span>
            <p className="text-xs font-extrabold text-amber-950 uppercase line-clamp-2 px-1 leading-tight">{image.title}</p>
            <span className="inline-block text-[8px] font-bold font-mono text-amber-600">Premium Woodgrain</span>
          </div>
        </div>
      );
    default:
      return (
        <div className="w-full h-full bg-slate-50 relative flex items-center justify-center p-6 border border-slate-200 overflow-hidden rounded-xl">
          <div className="text-center space-y-1">
            <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-slate-400">Vitrified Material</span>
            <p className="text-xs font-bold text-slate-800 line-clamp-2 px-1">{image.title}</p>
          </div>
        </div>
      );
  }
};

export default function Gallery({ onInquireItem }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'showroom', label: 'Showroom Displays' },
    { value: 'sanitary', label: 'CP & PTMT Fittings' },
    { value: 'projects', label: 'Client Site Photos' }
  ];

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  const handleInquiryTrigger = (image: GalleryImage) => {
    onInquireItem(`Gallery Product: ${image.title} (Batch: ${image.batchCode})`);
    setActiveImage(null);
  };

  return (
    <section className="bg-slate-50 py-10 lg:py-14 border-y border-slate-200 animate-fade-in" id="gallery-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
          <p className="text-slate-500 font-semibold tracking-[0.35em] uppercase text-xs">Verified Stock & Showroom Proof</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Real Photo <span className="text-slate-400 font-light">Gallery</span>
          </h2>
          <p className="text-base text-slate-600">
            Browse genuine, authentic snapshots uploaded by local buyers directly to Google Maps or verified by our IndiaMart wholesalers. Real stock proof, showroom boards, and actual completed sites in Bhopal.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`filter-btn-${cat.value}`}
              onClick={() => setSelectedCategory(cat.value)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat.value
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              id={`gallery-item-${image.id}`}
              onClick={() => setActiveImage(image)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-slate-400 cursor-pointer"
            >
              {/* Image box */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100 mb-2">
                {imageErrors[image.id] ? (
                  renderTileVectorPattern(image)
                ) : (
                  <img
                    src={image.image}
                    alt={image.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={() => handleImageError(image.id)}
                  />
                )}

                {/* Overlaid quick enlarger option */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <Maximize2 className="h-5.5 w-5.5 text-slate-900" />
                  </div>
                </div>
              </div>

              {/* Text metadata - Heading only */}
              <div className="py-2.5 px-2 text-center flex-grow flex items-center justify-center">
                <h4 className="text-xs sm:text-xs.5 md:text-xs.5 lg:text-[13px] font-extrabold text-slate-900 group-hover:text-slate-700 transition-colors uppercase tracking-wide line-clamp-2 leading-relaxed">
                  {image.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Provenance links block */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 text-center space-y-4 max-w-2xl mx-auto shadow-sm">
          <p className="text-xs text-slate-600 font-medium">
            Would you like to examine more real buyer ratings, address proofs, or direct pricing sheets?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.indiamart.com/chanvi-tiles-bhopal/products-and-services.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
            >
              Verify on IndiaMart Store <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Chani+Vitrified+Tiles+Bhopal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition shadow-sm"
            >
              See Real Live Photos on Google Maps <MapPin className="h-3 w-3 text-red-500" />
            </a>
          </div>
        </div>

        {/* Photo Detail Modal Box (Simple Elegant Image Enlarger Lightbox Popup) */}
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in" role="dialog" aria-modal="true" id="image-enlarger-popup">
            {/* Dark Overlay Backdrop */}
            <div 
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity cursor-zoom-out" 
              onClick={() => setActiveImage(null)}
            />

            {/* Modal Box Container */}
            <div className="relative transform overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl transition-all max-w-4xl w-full flex flex-col items-center">
              
              {/* Close Button at top right - High Visibility */}
              <button
                onClick={() => setActiveImage(null)}
                id="btn-close-popup"
                className="absolute top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-slate-100 text-slate-900 hover:text-black shadow-2xl transition-all duration-250 border border-slate-200 cursor-pointer hover:scale-110 active:scale-95"
              >
                <X className="h-6 w-6 stroke-[2.5]" />
              </button>

              {/* Image Box */}
              <div className="relative w-full max-h-[75vh] flex items-center justify-center p-4 bg-slate-950 overflow-hidden">
                {imageErrors[activeImage.id] ? (
                  <div className="w-full h-[50vh] flex items-center justify-center">
                    {renderTileVectorPattern(activeImage)}
                  </div>
                ) : (
                  <img
                    src={activeImage.image}
                    alt={activeImage.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[70vh] max-w-full rounded-lg object-contain select-none shadow-lg transition-transform duration-300"
                    onError={() => handleImageError(activeImage.id)}
                  />
                )}
              </div>

              {/* Title Section */}
              <div className="w-full bg-slate-950 px-6 py-4 border-t border-slate-850 text-center">
                <h3 className="text-sm sm:text-base font-extrabold text-slate-200 uppercase tracking-widest">
                  {activeImage.title}
                </h3>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
