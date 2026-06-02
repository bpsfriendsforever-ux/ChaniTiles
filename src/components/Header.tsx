/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Grid, MapPin, Menu, X, ArrowRight, ExternalLink } from 'lucide-react';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
  activeInquiryModal: () => void;
}

export default function Header({ onScrollToSection, activeInquiryModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Gallery', id: 'gallery-section' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/95 backdrop-blur-md text-white" id="app-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
          <div className="w-10 h-10 bg-white flex items-center justify-center rotate-45 shrink-0 shadow-lg transition-transform hover:rotate-90 duration-300">
            <div className="w-4 h-4 border-2 border-slate-900 bg-slate-900"></div>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white sm:text-xl uppercase">
              Chani <span className="text-slate-400 font-light">Vitrified Tiles</span>
            </h1>
            <p className="hidden text-[9px] uppercase tracking-[0.2em] text-slate-400 sm:block font-sans font-bold">
              Bhopal's Premium Destination
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:ml-6 md:flex md:items-center md:gap-x-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-semibold uppercase tracking-wider text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side CTA / Contacts */}
        <div className="hidden items-center gap-x-4 lg:flex">
          <a
            href="https://www.google.com/maps/place/Chani+Vitrified+tiles/@23.2532463,77.4649651,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-450 hover:text-white font-mono transition-colors"
          >
            <MapPin className="h-3.5 w-3.5 text-red-400" />
            <span>Bhopal, MP</span>
          </a>
          <a
            href="tel:+919425010203"
            className="flex items-center gap-1.5 rounded-full bg-slate-800 px-3.5 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:bg-slate-700 hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Call Dealership</span>
          </a>
          <button
            onClick={activeInquiryModal}
            className="flex items-center gap-1.5 rounded-full bg-white px-5 py-2 text-xs font-semibold text-slate-900 shadow-md hover:bg-slate-105 active:scale-95 transition-all"
          >
            Get Quote
            <ArrowRight className="h-3 w-3 text-slate-900" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden gap-2">
          <button
            onClick={activeInquiryModal}
            className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900 transition-colors hover:bg-slate-100"
          >
            Get Quote
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none"
            aria-expanded="false"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-b border-slate-800 bg-slate-900 px-4 py-4 md:hidden">
          <div className="space-y-1.5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full rounded-md px-3 py-2 text-left text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-4 border-t border-slate-800 pt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between text-sm text-slate-450 px-3">
              <span className="flex items-center gap-1.5 font-mono text-xs text-slate-305">
                <MapPin className="h-4 w-4 text-red-400" /> Bhopal, MP
              </span>
              <a
                href="https://www.google.com/maps/place/Chani+Vitrified+tiles/@23.2532463,77.4649651,17z"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-white flex items-center gap-1 hover:underline"
              >
                Open Google Maps <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
