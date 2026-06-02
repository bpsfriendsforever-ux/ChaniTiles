/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

import { Award, Layers, ShieldCheck, Truck, Users, HelpCircle, ArrowRight, Instagram } from 'lucide-react';

export default function App() {
  const [inquiryPreloadProduct, setInquiryPreloadProduct] = useState<string>('');

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInquireProductSelection = (productName: string) => {
    setInquiryPreloadProduct(productName);
    // Automatically smooth scroll users down to the inquiry block
    handleScrollToSection('contact');
  };

  // Why Choose Us statistics items
  const partnershipValueHighlights = [
    {
      icon: <Award className="h-6 w-6 text-emerald-600" />,
      title: 'Direct Wholesale Pricing',
      description: 'Zero broker markup. Direct wholesale sourcing of high quality vitrified and double charge tiles inside Bhopal.'
    },
    {
      icon: <Layers className="h-6 w-6 text-emerald-600" />,
      title: 'Huge Inventory Stock',
      description: 'Over 100,000+ square feet of tiles immediately ready to shift for large-scale construction developments.'
    },
    {
      icon: <Truck className="h-6 w-6 text-emerald-600" />,
      title: 'Transit Safety Coordination',
      description: 'Durable protective packaging and trusted heavy vehicle coordination for deliveries all over Madhya Pradesh.'
    },
    {
      icon: <Users className="h-6 w-6 text-emerald-600" />,
      title: 'Tailor-Made Custom Designs',
      description: 'Exclusive custom calligraphy name tiles, detailed spiritual God printed sets, and vibrant 3D bathroom models.'
    }
  ];

  const handleGlobalQuoteTrigger = () => {
    handleInquireProductSelection('General Consultation & Price Catalog');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. Header Navigation */}
      <Header 
        onScrollToSection={handleScrollToSection} 
        activeInquiryModal={handleGlobalQuoteTrigger}
      />

      {/* 2. Brand Hero Landing */}
      <Hero 
        onScrollToSection={handleScrollToSection} 
        onOpenInquiry={handleGlobalQuoteTrigger}
      />

      {/* 3. Partner Value Propositon / Wholesale Highlights Grid */}
      <section className="bg-gray-50 py-8 lg:py-12 border-y border-gray-100" id="values-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {partnershipValueHighlights.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl border border-gray-100 p-5 text-left space-y-3 shadow-xs hover:shadow transition"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                  {val.icon}
                </div>
                <h4 className="text-sm font-bold text-gray-900">{val.title}</h4>
                <p className="text-xs text-gray-650 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Real Photos Gallery */}
      <Gallery 
        onInquireItem={handleInquireProductSelection} 
      />

      {/* 7. Testimonials Showroom Reviews */}
      <Reviews />

      {/* 8. Conversion Capture inquiry segment */}
      <section className="bg-white py-8 lg:py-12 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Informational Text Column - 5 columns */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-xs font-bold font-mono text-emerald-600 uppercase bg-emerald-50 px-3 py-1 rounded">
                Direct Dealership Connection
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl leading-tight">
                Planning a Project in Bhopal or Nearby?
              </h2>
              <p className="text-sm text-gray-650 leading-relaxed">
                Whether you are paving a boutique residential villa, custom bathroom backsplash, spiritual temple shrine, or corporate lobby layout, Chani Vitrified guarantees high quality standard tiles. 
              </p>

              <div className="space-y-4 font-sans text-xs">
                
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                    <ShieldCheck className="h-3 w-3" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">100% Transit Defect Protection</h5>
                    <p className="text-gray-500">Every box is strapped with corners secured against split stress.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                    <ShieldCheck className="h-3 w-3" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Custom Dimension Consultation</h5>
                    <p className="text-gray-500">Need 800x800 vs large slabs of GVT? Talk directly with showroom owners.</p>
                  </div>
                </div>

              </div>

              {/* Quick hotline notice & Instagram Social Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 border border-gray-100 rounded-xl space-y-1 text-left flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-mono text-slate-500 block font-bold">Wholesaler Hotline Call</span>
                    <p className="text-sm font-bold text-gray-900 mt-1">Immediate Support: +91 94250 10203</p>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-2">Speak directly to check transport rates to Indore, Jabalpur, Sagar, or Indore bypass.</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50/50 to-pink-50/30 p-4 border border-rose-100 rounded-xl flex flex-col justify-between text-left space-y-3">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-mono text-rose-500 block font-bold">Showroom Instagram Feed</span>
                    <p className="text-[11px] text-gray-700 mt-1 leading-snug">
                      See instant design reels, virtual walk-throughs, and our latest sanitaryware shipments.
                    </p>
                  </div>
                  <a
                    href="https://www.instagram.com/chani_tiles_and_sanitaryware/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 px-4 py-2 text-xs font-bold text-white shadow-sm hover:opacity-90 transition active:scale-[0.98]"
                  >
                    <Instagram className="h-3.5 w-3.5 shrink-0" />
                    <span>View Our Instagram Profile</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Inquiry Form Wrapper - 7 columns */}
            <div className="lg:col-span-7">
              <InquiryForm 
                selectedPreloadProduct={inquiryPreloadProduct}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 9. Showroom Coordinates & Footer */}
      <Footer 
        onScrollTo={handleScrollToSection}
      />

    </div>
  );
}

