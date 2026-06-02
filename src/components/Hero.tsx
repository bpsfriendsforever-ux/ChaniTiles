/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Star, BadgeCheck, PhoneCall, ShieldAlert, Navigation } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenInquiry: () => void;
}

export default function Hero({ onScrollToSection, onOpenInquiry }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50/80 py-12 lg:py-20" id="home">
      
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-slate-200/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-slate-100/60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12 lg:items-center">
          
          {/* Text Content - Left 7 columns on large screens */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-slate-600 shadow-sm">
              <BadgeCheck className="h-4 w-4 text-slate-900" />
              <span>Bhopal's Premium Destination</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Exquisite Surfaces <br/>
              <span className="text-slate-400 font-light">for Modern Living</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-base text-slate-600 sm:text-lg leading-relaxed max-w-2xl">
              Discover our curated collection of High-Gloss GVT, PGVT, and Heavy Duty Tiles. Designed to transform residential and commercial spaces with supreme aesthetic sophistication.
            </p>

            {/* Metrics Highlights as requested in layout */}
            <div className="grid grid-cols-3 gap-4 border-y border-slate-200 py-6 max-w-md">
              <div className="flex flex-col border-l-2 border-slate-300 pl-4">
                <span className="text-2xl font-bold text-slate-900">500+</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Designs</span>
              </div>
              <div className="flex flex-col border-l-2 border-slate-300 pl-4">
                <span className="text-2xl font-bold text-slate-900">10+</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Finishes</span>
              </div>
              <div className="flex flex-col border-l-2 border-slate-300 pl-4">
                <span className="text-2xl font-bold text-slate-900">ISO</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Certified</span>
              </div>
            </div>

            {/* Trust and Rating Highlights */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <div className="flex items-center gap-1 font-semibold text-slate-900">
                <span className="text-xl font-bold font-mono">4.8</span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-normal ml-1">(Google Showroom Rating)</span>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <div className="text-sm text-slate-600">
                Distributed Across <strong className="text-slate-950 font-bold">Madhya Pradesh</strong>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <button
                onClick={() => onScrollToSection('catalog')}
                className="flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:bg-slate-800 hover:shadow-slate-900/20 active:scale-95"
              >
                Explore Product Catalog
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={onOpenInquiry}
                className="flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900 active:scale-95"
              >
                <PhoneCall className="h-4 w-4 text-slate-900" />
                Get Wholesale Quotation
              </button>
            </div>

            {/* Direct IndiaMart verification banner with Sleek theme */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">IndiaMart Gold Partner</p>
                <h4 className="text-sm font-semibold text-slate-800">Verified Chani Vitrified Tiles Showroom</h4>
              </div>
              <a
                href="https://www.indiamart.com/chanvi-tiles-bhopal/products-and-services.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-15 rounded bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow hover:bg-slate-800 transition-colors"
                id="indiamart-external-cta"
              >
                View on IndiaMart
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>

          </div>

          {/* Graphic Side - Right 5 columns */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-[450px] lg:max-w-none">
              
              {/* Outer Decorative Gradient Border */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-slate-300/20 via-slate-100/50 to-slate-400/20 blur-xl -z-10" />

              {/* Main Immersive Showroom Display Image */}
              <div className="overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xl transition-all hover:scale-[1.01] duration-300">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Premium living space with Chani Vitrified tiles"
                  className="h-[300px] w-full object-cover sm:h-[400px]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Tile Badge */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl backdrop-blur-md bg-white/90 p-4 border border-slate-200 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500 font-mono">FEATURED SHOWROOM</p>
                      <h4 className="text-sm font-bold text-slate-950">Luxury Italian PGVT Calacatta</h4>
                    </div>
                    <span className="rounded-full bg-slate-900 px-3 py-10 text-xs font-semibold text-white">
                      ₹55 / Sq. Ft.
                    </span>
                  </div>
                </div>

              </div>

              {/* Float Floating Micro Stats */}
              <div className="absolute -top-4 -left-4 rounded-xl bg-slate-900 p-4 text-white shadow-lg hidden sm:block">
                <p className="text-[9px] text-slate-400 uppercase tracking-widest font-mono">STOCKS IN HAND</p>
                <div className="flex items-baseline gap-1 pt-1">
                  <span className="text-xl font-bold text-white">100k+</span>
                  <span className="text-xs text-slate-300">Sq. Ft. Available</span>
                </div>
              </div>

              {/* Google Maps link block */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-slate-200 rounded-xl p-3 shadow-lg flex items-center gap-2.5 hover:shadow-xl transition-shadow">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-800">
                  <Navigation className="h-5 w-5 fill-slate-200" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 font-mono">LOCATE SHOWROOM</p>
                  <a
                    href="https://www.google.com/maps/place/Chani+Vitrified+tiles/@23.2532463,77.4649651,17z"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-slate-800 hover:text-slate-950 hover:underline block"
                  >
                    Bhopal, MP (Get Route)
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
