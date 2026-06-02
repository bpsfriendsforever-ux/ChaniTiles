/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Square, Grid, Navigation, ExternalLink } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800" id="contact-info">
      
      {/* Outer Grid Panel */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 items-start text-left">
          
          {/* Column 1: Core Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer pb-2" onClick={() => onScrollTo('home')}>
              <div className="flex h-9 w-9 items-center justify-center rounded bg-slate-950 ring-1 ring-slate-800 relative">
                <div className="h-5 w-5 rotate-12 border border-white bg-slate-950 shadow-sm" />
              </div>
              <div className="text-left">
                <h3 className="text-base font-extrabold tracking-tight text-white uppercase">Chani Vitrified</h3>
                <p className="text-[9px] uppercase font-mono tracking-widest text-slate-400 font-bold">Bhopal Wholesaler</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed">
              Bhopal's certified distributor and wholesaler of high-end PGVT, GVT, double charge tiles, 3D floor murals, PTMT taps, and designer elevation claddings since inception. Reliable transit across entire Madhya Pradesh.
            </p>

            {/* IndiaMart / Trust markings */}
            <div className="flex items-center gap-2 pt-2 text-white">
              <ShieldCheck className="h-4.5 w-4.5 text-slate-400" />
              <span className="text-xs font-semibold text-slate-350">IndiaMart Verified Supplier</span>
            </div>
          </div>

          {/* Column 2: Showroom Detail Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono border-b border-slate-800 pb-2">
              Showroom Working Hours
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-400 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-300">Monday - Saturday</p>
                  <p className="text-[10px] text-gray-500">10:00 AM - 08:30 PM (IST)</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-650 shrink-0" />
                <div>
                  <p className="font-medium text-gray-500">Sunday</p>
                  <p className="text-[10px] text-gray-650">Closed (Available on Appointment)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation Shortlinks */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono border-b border-slate-800 pb-2">
              Customer Utilities
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <button onClick={() => onScrollTo('home')} className="hover:text-white transition text-left py-1">Home</button>
              <button onClick={() => onScrollTo('gallery-section')} className="hover:text-white transition text-left py-1">Showroom Gallery</button>
              <button onClick={() => onScrollTo('reviews')} className="hover:text-white transition text-left py-1">Reviews</button>
              <button onClick={() => onScrollTo('contact')} className="hover:text-white transition text-left py-1">Inquiries</button>
            </div>
          </div>

          {/* Column 4: Location Coordinate Panel */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono border-b border-slate-800 pb-2">
              Showroom Address & Maps
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  <strong>Chani Vitrified Tiles Showroom</strong>, Bhopal, Madhya Pradesh, Pin Code: 462042, India.
                </span>
              </li>
              <li className="pt-2">
                {/* Embedded Interactive Map Window */}
                <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 h-32 w-full group">
                  <iframe
                    title="Chani Vitrified Tiles Location Map"
                    src="https://maps.google.com/maps?q=Chani%20Vitrified%20tiles%20Bhopal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity"
                    allowFullScreen
                    loading="lazy"
                  />
                  {/* Subtle overlaid clickable anchor that lets the user open big map immediately */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Chani+Vitrified+Tiles+Bhopal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-transparent flex items-end p-2 cursor-pointer"
                    title="Click to expand on Google Maps"
                  >
                    <span className="bg-slate-950/95 hover:bg-slate-900/95 text-white font-mono text-[9px] px-2 py-1 rounded border border-slate-850 flex items-center gap-1 shadow-md">
                      <ExternalLink className="h-2.5 w-2.5 text-slate-400" />
                      Open Google Maps
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Credits Frame */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans">
          <p>© Chani Vitrified Tiles Corporation. All rights reserved.</p>
          <div className="flex gap-4">
            <a 
              href="https://www.indiamart.com/chanvi-tiles-bhopal/products-and-services.html" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-white transition flex items-center gap-1"
            >
              IndiaMart Directory <ExternalLink className="h-3 w-3" />
            </a>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Chani+Vitrified+Tiles+Bhopal" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-white transition flex items-center gap-1"
            >
              Google Maps Location <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

      </div>

    </footer>
  );
}
