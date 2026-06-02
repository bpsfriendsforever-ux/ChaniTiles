/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Star, BadgeCheck, PhoneCall, ShieldAlert, Navigation } from 'lucide-react';
import storefrontImg from '../assets/storefront.png';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenInquiry: () => void;
}

export default function Hero({ onScrollToSection, onOpenInquiry }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50/80 py-8 lg:py-12" id="home">
      
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-slate-200/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-slate-100/60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12 lg:items-stretch">
          
          {/* Text Content - Left 7 columns on large screens */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left gap-6 sm:gap-8">
            <div className="space-y-6 sm:space-y-6">
              
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-slate-600 shadow-sm self-start">
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
              <div className="grid grid-cols-3 gap-4 border-y border-slate-200 py-4 max-w-md">
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
              <div className="flex flex-wrap items-center gap-5">
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
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onOpenInquiry}
                  className="flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:bg-slate-800 hover:shadow-slate-900/20 active:scale-95 self-start cursor-pointer"
                >
                  <PhoneCall className="h-4 w-4 text-white" />
                  Get Wholesale Quotation
                </button>
              </div>

            </div>

            {/* Direct IndiaMart verification banner with Sleek theme */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm mt-auto">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">IndiaMart Gold Partner</p>
                <h4 className="text-sm font-semibold text-slate-800">Verified Chani Vitrified Tiles Showroom</h4>
              </div>
              <a
                href="https://www.indiamart.com/chanvi-tiles-bhopal/products-and-services.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow hover:bg-slate-800 transition-colors cursor-pointer"
                id="indiamart-external-cta"
              >
                View on IndiaMart
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>

          </div>

          {/* Graphic Side - Right 5 columns */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex flex-col">
            <div className="relative mx-auto max-w-[480px] lg:max-w-none lg:h-full lg:w-full flex flex-col">
              
              {/* Outer Decorative Gradient Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-slate-300/10 via-slate-100/30 to-slate-400/20 blur-xl -z-10" />

              {/* Main Storefront Frame */}
              <div className="overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-2xl flex flex-col transition-all hover:scale-[1.01] duration-300 lg:h-full lg:w-full">
                
                {/* Real Storefront Image */}
                <div className="relative overflow-hidden bg-slate-950 flex-1 min-h-[220px] sm:min-h-[280px] lg:h-0">
                  <img
                    src={storefrontImg}
                    alt="Chani Tiles & Sanitaryware Storefront, Bhopal"
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Quality Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/95 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 shadow-md border border-slate-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Storefront Photo
                    </span>
                  </div>
                </div>

                {/* Stock In Hand Info Panel */}
                <div className="p-5 border-b border-slate-100 bg-slate-50/75">
                  <div className="flex items-center justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-mono">STOCK IN HAND (BHOPAL)</p>
                      <h4 className="text-base font-extrabold text-slate-900">100,000+ Sq. Ft. Ready Stock</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">GVT, PGVT &amp; Sanitaryware in hand for immediate delivery</p>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 shadow-2xs">
                      <BadgeCheck className="h-5.5 w-5.5" />
                    </div>
                  </div>
                </div>

                {/* Footer Banner Action: Locate Showroom */}
                <div className="bg-slate-950 p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-left space-y-1 max-w-[240px]">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-mono block">LOCATE SHOWROOM</span>
                    <span className="text-xs text-slate-300 font-bold font-sans block leading-snug">87, Raisen Rd, Sector C, Sonagiri, Bhopal, MP</span>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Chani+Vitrified+Tiles+Bhopal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-5 py-3 text-xs font-extrabold text-slate-950 hover:bg-slate-100 transition shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer text-center"
                  >
                    <Navigation className="h-3.5 w-3.5 fill-slate-950" />
                    Get Route on Maps
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
