/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SHOWROOM_REVIEWS } from '../data';
import { Star, MessageSquare, Quote, Eye } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="bg-gray-50 py-8 lg:py-12 border-t border-gray-100 scroll-mt-20" id="reviews">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Showroom Reviews & <span className="text-emerald-600">Client Stories</span>
          </h2>
          <p className="text-base text-gray-650">
            Hear straight from local contractors, architects, residential homebuilders, and families in Bhopal who rely on Chani Vitrified Tiles.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {SHOWROOM_REVIEWS.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white rounded-2xl border border-gray-150 p-6 shadow-xs flex flex-col justify-between items-start text-left relative overflow-hidden group hover:shadow hover:border-emerald-500/20 transition-all duration-300"
            >
              
              {/* Decorative quotation background symbol */}
              <div className="absolute right-4 top-2 text-emerald-100/30 group-hover:text-emerald-500/5 transition-colors">
                <Quote className="h-16 w-16 fill-current rotate-180" />
              </div>

              <div className="space-y-4 relative z-10 w-full">
                
                {/* Five Star configure */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4.5 w-4.5 ${i < rev.rating ? 'text-amber-500 fill-current' : 'text-gray-200'}`} 
                    />
                  ))}
                </div>

                {/* Comment area */}
                <p className="text-xs text-gray-650 leading-relaxed font-sans mt-2">
                  "{rev.comment}"
                </p>

              </div>

              {/* Author Footer info */}
              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 w-full">
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{rev.author}</h4>
                  <p className="text-[10px] text-gray-400 font-mono mt-0.5">Verified Local Guide</p>
                </div>
                <span className="text-[10px] text-gray-400 font-mono font-bold bg-gray-50 px-2 py-0.5 rounded">
                  {rev.date}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Live feedback counter */}
        <div className="mt-8 rounded-xl border border-emerald-100/80 bg-emerald-50/40 p-4 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
              <MessageSquare className="h-4.5 w-4.5" />
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-900">Are you an existing customer in Bhopal?</h5>
              <p className="text-xs text-gray-500">We appreciate your feedback regarding our ceramic distribution speed.</p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Chani+Vitrified+Tiles+Bhopal"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-emerald-600 text-white font-bold text-xs px-4 py-2 hover:bg-emerald-700 shadow"
            id="write-google-review-cta"
          >
            Leave Google Review
          </a>
        </div>

      </div>
    </section>
  );
}
