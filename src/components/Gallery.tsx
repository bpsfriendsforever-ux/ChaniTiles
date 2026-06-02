/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Eye, ArrowUpRight, Check, X, MapPin, Sparkles, MessageCircle, ExternalLink } from 'lucide-react';

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
  features: string[];
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-01',
    title: 'Showroom PGVT Slab Panels',
    category: 'showroom',
    categoryLabel: 'Showroom Displays',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    description: 'Actual showroom display panels at our Kolar Road shop. Showcasing premium 4ft x 2ft (600x1200mm) Polished Glazed Vitrified Tiles (PGVT) in high-gloss luxury Carrara & Calacatta gold marble textures.',
    dimensions: '600x1200 mm',
    source: 'Google Maps Review',
    features: ['High-reflection mirror polish', 'Double-glazed protective layer', 'Ideal for living lobbies and luxury villas']
  },
  {
    id: 'gal-02',
    title: 'Bulk Tile Stock Yard & Pallets',
    category: 'warehouse',
    categoryLabel: 'Stock & Warehouse',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    description: 'Photographed at our Bhopal wholesale stockyard. This view highlights our massive ready inventory of factory-strapped tiles, structured for direct distribution to project sites inside Madhya Pradesh.',
    source: 'IndiaMart Verified Upload',
    features: ['Over 100,000+ Sq. Ft. immediate stock', 'Strap-secured corner-protected boxes', 'Commercial container direct sourcing']
  },
  {
    id: 'gal-03',
    title: 'PTMT Tap & Bath Fittings Counter',
    category: 'sanitary',
    categoryLabel: 'Sanitaryware Displays',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    description: 'A dedicated display rack displaying Chani Tiles & Sanitaryware\'s anti-leak PTMT polymer taps and sleek CP fittings. Ideal for heavy-durability hard water applications globally.',
    source: 'IndiaMart Verified Upload',
    features: ['Rustproof PTMT design series', 'High chemical and heat stability', 'Bhopal dealer direct warranty']
  },
  {
    id: 'gal-04',
    title: 'Mediterranean Azure Bathroom Showcase',
    category: 'projects',
    categoryLabel: 'Delivered Sites',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    description: 'Real project photo uploaded by a verified homeowner in Bawadiya Kalan, Bhopal. Features our Royal Moroccan 3D elevation wall highlighter tiles matched with Travertine floor planks.',
    dimensions: '300x600 mm',
    source: 'Google Maps Review',
    features: ['Rich azul satin texture', 'Anti-slip R10 safety layout', 'Coordinated washbasin background']
  },
  {
    id: 'gal-05',
    title: 'Rustic Elevation Exterior Wall Slabs',
    category: 'showroom',
    categoryLabel: 'Showroom Displays',
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067ffd5?auto=format&fit=crop&w=800&q=80',
    description: 'Physical display board showing natural Sierra slate claddings. Popularly ordered in Bhopal for home front elevations, compound boundary coatings, and rustic accent arches.',
    dimensions: '300x450 mm',
    source: 'Showroom Photoshoot',
    features: ['Withstands hard monsoon and UV scaling', 'Interlocking grout-free joints', 'Rough stone mountain replica pattern']
  },
  {
    id: 'gal-06',
    title: 'Vitrified Timber Floor Planks Display',
    category: 'showroom',
    categoryLabel: 'Showroom Displays',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80',
    description: 'Real-wood high-density porcelain planks displayed under standard showroom spotlights. Merges the warm look of oak timber with zero-moisture vitrified washability.',
    dimensions: '200x1200 mm',
    source: 'IndiaMart Verified Upload',
    features: ['Matte wood texture feels incredibly real', 'Perfect resistance against heavy weight', 'No termite swelling risks']
  },
  {
    id: 'gal-07',
    title: 'Luxury Kitchen Brick-Bond Backsplash',
    category: 'projects',
    categoryLabel: 'Delivered Sites',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    description: 'A completed designer kitchen backsplash panel. Installed by Bhopal construction partners using our high-gloss Emerald Subway tiles styled in an elegant brick pattern.',
    dimensions: '300x450 mm',
    source: 'Google Maps Review',
    features: ['Anti-grease easy-wipe protective glaze', 'Vibrant deep-pigment color profile', 'Perfect joint finish']
  },
  {
    id: 'gal-08',
    title: 'Ready Dispatch Logistics Fleet',
    category: 'warehouse',
    categoryLabel: 'Stock & Warehouse',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
    description: 'Our heavy vehicle logistics loader at Kolar Bypass. Loaded with direct bulk crates of double-charge tile boxes, prepared for departure to commercial construction apartments.',
    source: 'Showroom Photoshoot',
    features: ['Fully insured heavy transit', 'Dedicated local drivers across Bhopal', 'Secure strap tie-downs']
  }
];

export default function Gallery({ onInquireItem }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'showroom', label: 'Showroom Displays' },
    { value: 'warehouse', label: 'Warehouse & Stock' },
    { value: 'sanitary', label: 'CP & PTMT Fittings' },
    { value: 'projects', label: 'Client Site Photos' }
  ];

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  const handleInquiryTrigger = (image: GalleryImage) => {
    onInquireItem(`Gallery Item: ${image.title} (${image.source})`);
    setActiveImage(null);
  };

  return (
    <section className="bg-slate-50 py-16 lg:py-24 border-y border-slate-200" id="gallery-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <p className="text-slate-500 font-semibold tracking-[0.35em] uppercase text-xs">Showroom & Stockroom Proof</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Real Photo <span className="text-slate-400 font-light">Gallery</span>
          </h2>
          <p className="text-base text-slate-600">
            Browse authentic snapshots of Chani Vitrified Tiles. View real-world stock, our Kolar Road showroom display racks, bath fittings catalogs, and on-site completed installations across Bhopal.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
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
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-slate-400"
            >
              {/* Image box */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100">
                <img
                  src={image.image}
                  alt={image.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Source stamp */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1 rounded bg-slate-950/80 px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                    <Sparkles className="h-2 w-2 text-amber-400" />
                    {image.source}
                  </span>
                </div>

                {/* Overlaid quick view */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <button
                    onClick={() => setActiveImage(image)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-lg hover:bg-slate-800 transition"
                  >
                    <Eye className="h-3 w-3" /> Quick Details
                  </button>
                </div>
              </div>

              {/* Text metadata */}
              <div className="p-3 text-left space-y-1">
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 font-mono">
                  {image.categoryLabel}
                </p>
                <h4 className="text-sm font-bold text-slate-950 group-hover:text-slate-900 transition-colors line-clamp-1">
                  {image.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 h-8 leading-snug">
                  {image.description}
                </p>
              </div>

              {/* Inline action bar */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-2.5 px-3 mt-1.5">
                <span className="text-[10px] font-medium font-mono text-slate-400">
                  {image.dimensions || 'Custom Size'}
                </span>
                <button
                  onClick={() => setActiveImage(image)}
                  className="text-xs font-bold text-slate-850 hover:text-slate-950 flex items-center gap-0.5 hover:underline"
                >
                  View Details <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Prove links row */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 text-center space-y-4 max-w-2xl mx-auto shadow-xs">
          <p className="text-xs text-slate-650 font-medium">
            Want to see more uploads or check verified business ratings from Bhopal buyers?
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
              href="https://www.google.com/maps/place/Chani+Vitrified+tiles/@23.2532463,77.4649651,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition shadow-sm"
            >
              See Real Live Photos on Google Maps <MapPin className="h-3 w-3 text-red-500" />
            </a>
          </div>
        </div>

        {/* Photo Detail Modal Box */}
        {activeImage && (
          <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
            <div className="flex min-h-screen items-center justify-center p-4 text-center sm:block sm:p-0">
              
              {/* Overlay Backdrop */}
              <div 
                className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm transition-opacity" 
                onClick={() => setActiveImage(null)}
              />

              <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

              {/* Modal Box Container */}
              <div className="inline-block transform overflow-hidden rounded-3xl bg-white text-left align-bottom shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:align-middle border border-slate-100">
                
                {/* Close Button overlay */}
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={() => setActiveImage(null)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-600 hover:text-slate-950 shadow border border-slate-200 transition"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2">
                  
                  {/* Photo area */}
                  <div className="relative aspect-square sm:h-full bg-slate-50">
                    <img
                      src={activeImage.image}
                      alt={activeImage.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Descriptions area */}
                  <div className="p-6 flex flex-col justify-between space-y-4">
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-0.5 rounded bg-slate-100 px-2 py-0.5 text-[9px] font-mono font-bold uppercase text-slate-500 border border-slate-200">
                          {activeImage.source}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-mono">
                          {activeImage.categoryLabel}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">{activeImage.title}</h3>
                      
                      {activeImage.dimensions && (
                        <div className="bg-slate-50 px-2.5 py-1.5 rounded border border-slate-200 inline-block text-left">
                          <span className="text-[9px] text-slate-400 font-mono block">DEALER RATIO / SPEC</span>
                          <span className="text-xs font-extra-bold text-slate-850 font-mono">{activeImage.dimensions}</span>
                        </div>
                      )}

                      <p className="text-xs text-slate-650 leading-relaxed text-left">
                        {activeImage.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-1.5 text-left pt-2">
                        <span className="text-[9px] font-bold text-slate-400 uppercase font-mono">Verified Display Parameters:</span>
                        <ul className="space-y-1">
                          {activeImage.features.map((feat, i) => (
                            <li key={i} className="text-[10px] text-slate-650 flex items-center gap-1.5">
                              <Check className="h-3 w-3 text-slate-900 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-200">
                      <button
                        onClick={() => handleInquiryTrigger(activeImage)}
                        className="w-full rounded-full bg-slate-900 px-4 py-2.5 text-center text-xs font-bold text-white shadow-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="h-3.5 w-3.5" /> Inquire About This Style
                      </button>
                      <a
                        href="https://www.google.com/maps/place/Chani+Vitrified+tiles/@23.2532463,77.4649651,17z"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full rounded-full border border-slate-250 hover:bg-slate-50 text-slate-700 px-4 py-2.5 text-center text-xs font-bold flex items-center justify-center gap-1 transition"
                      >
                        Verify Location pin <MapPin className="h-3 w-3 text-red-500" />
                      </a>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
