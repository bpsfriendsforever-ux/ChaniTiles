/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { InquiryForm as InquiryFormType } from '../types';
import { Send, CheckCircle2, MessageSquare, PhoneCall, Mail, User, Square, HelpCircle } from 'lucide-react';

interface InquiryFormProps {
  selectedPreloadProduct: string;
  onClose?: () => void;
}

export default function InquiryForm({ selectedPreloadProduct, onClose }: InquiryFormProps) {
  const [formData, setFormData] = useState<InquiryFormType>({
    name: '',
    phone: '',
    email: '',
    productCategory: 'Vitrified Tiles (Double Charge / PGVT)',
    quantity: '500',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Synchronize incoming pre-selected product
  useEffect(() => {
    if (selectedPreloadProduct) {
      setFormData((prev) => ({
        ...prev,
        message: `Inquiry regarding: ${selectedPreloadProduct}. Please provide wholesale price options and shipment time to Bhopal.`
      }));
    }
  }, [selectedPreloadProduct]);

  const tileCategories = [
    'Vitrified Tiles (Double Charge / PGVT)',
    'Wall Tiles & Subway Backsplashes',
    '3D Epoxy / Ceramic Floor Tiles',
    'God Printed Tiles & Puja Shrines',
    'Front Door Calligraphy Name Tiles',
    'Premium PTMT Taps & Fittings',
    'Other Sanitaryware Accessories'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill out your Name and Mobile Number to generate the quotation request.');
      return;
    }
    setIsSubmitted(true);
  };

  // Precomposing click to redirect to dealer WhatsApp (representing the official WhatsApp contact)
  const handleWhatsAppRedirect = () => {
    const dealerPhone = '919425010203'; // Placeholder representing Chani Tiles official mobile contact line
    const textMessage = `Hello *Chani Vitrified Tiles Corporation*, I would like to request a wholesale price quotation.
----------------------------------
*Name:* ${formData.name}
*Mobile:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}
*Interest Category:* ${formData.productCategory}
*Approx Quantity (SqFt):* ${formData.quantity} Sq. Ft.
*Message Details:* ${formData.message || 'Please send custom catalog and pricing sheets.'}
----------------------------------
_Submitted via Chani Tiles Interactive Portal_`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${dealerPhone}&text=${encodedMessage}`;
    
    // Open in a new window/tab safely bypassing index container bounds
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm text-left" id="contact">
      
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div className="border-b border-slate-250 pb-3">
            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Get Instant Wholesale Quote</h3>
            <p className="text-xs text-slate-500 mt-1">
              Submit your project details to calculate discounts and transport coverage.
            </p>
          </div>

          {/* Name Field */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Your Name <span className="text-rose-500">*</span></label>
            <div className="relative rounded-lg shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <User className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="block w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-950 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                placeholder="Aalok Sharma"
              />
            </div>
          </div>

          {/* Contact Fields Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Phone Field */}
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Mobile Number <span className="text-rose-500">*</span></label>
              <div className="relative rounded-lg shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <PhoneCall className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="block w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-950 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  placeholder="e.g. 98260XXXXX"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Email Address (Optional)</label>
              <div className="relative rounded-lg shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-950 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  placeholder="name@gmail.com"
                />
              </div>
            </div>

          </div>

          {/* Matrix items: Category & Square Footage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Category Dropdown */}
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Main Category of Interest</label>
              <select
                value={formData.productCategory}
                onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                className="block w-full rounded-lg border border-slate-305 bg-white py-2 px-3 text-sm text-slate-700 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
              >
                {tileCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Approx Area Required */}
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Coverage Required (Sq. Ft.)</label>
              <div className="relative rounded-lg shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Square className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="number"
                  min="50"
                  max="100000"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="block w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-950 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  placeholder="e.g. 1000"
                />
              </div>
            </div>

          </div>

          {/* Message textarea Details */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Specific Queries / Site Location</label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="block w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-sm text-slate-950 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
              placeholder="Provide context like: 'Need delivery near Ayodhya Bypass Road Bhopal, please outline transport discounts...'"
            />
          </div>

          {/* submit */}
          <button
            type="submit"
            className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="h-4 w-4" /> Assemble Quotation Form
          </button>

        </form>
      ) : (
        <div className="py-8 text-center space-y-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 text-slate-900 mx-auto border border-slate-200">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-bold text-slate-900">Quotation Form Assembled!</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-normal">
              Your parameters have been logged. To complete instant catalog dispatching, click the button below to text the assembled file automatically to our Bhopal sales coordinator on WhatsApp!
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-2.5 max-w-sm mx-auto">
            <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-bold">Inquiry Summary Prepared:</p>
            <div className="text-xs text-slate-700 space-y-1 font-sans">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Mobile:</strong> {formData.phone}</p>
              <p><strong>Specs Of Interest:</strong> {formData.productCategory}</p>
              <p><strong>Approx Area:</strong> {formData.quantity} Sq. Ft.</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-2 max-w-sm mx-auto">
            <button
              onClick={handleWhatsAppRedirect}
              type="button"
              className="w-full rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-4 shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="h-4 w-4" /> Send Instant WhatsApp Message
            </button>
            <button
              onClick={() => { setIsSubmitted(false); }}
              type="button"
              className="text-xs text-slate-500 hover:text-slate-900 hover:underline font-semibold"
            >
              Edit Inquiry Form
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
