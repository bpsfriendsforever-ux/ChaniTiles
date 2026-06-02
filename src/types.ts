/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TileProduct {
  id: string;
  name: string;
  category: 'vitrified' | 'wall' | 'floor' | 'bathroom' | 'designer' | 'sanitary';
  subCategory?: string;
  size: string; // e.g. "600x600 mm", "850x1200 mm", "300x450 mm"
  thickness?: string;
  finish: 'Glossy' | 'High Gloss' | 'Matt' | 'Satin' | 'Super Matt' | 'Rustic';
  image: string;
  description: string;
  features: string[];
  approxPriceRange?: string; // e.g. "₹45 - ₹65 / Sq. Ft."
}

export interface InquiryForm {
  name: string;
  phone: string;
  email: string;
  productCategory: string;
  quantity: string; // in sq ft
  message: string;
}

export interface ShowroomReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}
