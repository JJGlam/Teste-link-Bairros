/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NEIGHBORHOODS } from './data/apartments';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NeighborhoodSection } from './components/NeighborhoodSection';
import { ComparisonTable } from './components/ComparisonTable';
import { FinancingSimulator } from './components/FinancingSimulator';
import { Differentials } from './components/Differentials';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FormModal } from './components/FormModal';
import { ImageLightbox } from './components/ImageLightbox';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [selectedNeighborhoodId, setSelectedNeighborhoodId] = useState<'mooca' | 'bras' | 'morumbi'>('mooca');

  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    caption: string;
  }>({
    isOpen: false,
    imageUrl: '',
    caption: ''
  });

  const handleOpenFormModal = (neighborhoodId: 'mooca' | 'bras' | 'morumbi') => {
    setSelectedNeighborhoodId(neighborhoodId);
    setFormModalOpen(true);
  };

  const handleCloseFormModal = () => {
    setFormModalOpen(false);
  };

  const handleSelectImage = (imageUrl: string, caption: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      caption
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Fixed Navigation */}
      <Navbar onOpenFormModal={handleOpenFormModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Quick Neighborhood Switcher */}
        <Hero onOpenFormModal={handleOpenFormModal} />

        {/* Detailed Sections for each Neighborhood: Mooca, Brás, and Morumbi */}
        <div className="space-y-4">
          {NEIGHBORHOODS.map((neighborhood, index) => (
            <NeighborhoodSection
              key={neighborhood.id}
              neighborhood={neighborhood}
              index={index}
              onOpenFormModal={handleOpenFormModal}
              onSelectImage={handleSelectImage}
            />
          ))}
        </div>

        {/* Interactive Comparison Table */}
        <ComparisonTable onOpenFormModal={handleOpenFormModal} />

        {/* Real-time Financing & Down Payment Simulator */}
        <FinancingSimulator onOpenFormModal={handleOpenFormModal} />

        {/* Diferenciais & Segurança */}
        <Differentials />

        {/* Depoimentos de Compradores & Investidores */}
        <Testimonials />

        {/* Perguntas Frequentes (FAQ) */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenFormModal={handleOpenFormModal} />

      {/* Interactive Form Details & Direct Access Modal */}
      <FormModal
        isOpen={formModalOpen}
        onClose={handleCloseFormModal}
        initialNeighborhoodId={selectedNeighborhoodId}
      />

      {/* Image Gallery Lightbox */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        imageUrl={lightboxState.imageUrl}
        caption={lightboxState.caption}
      />

      {/* Floating WhatsApp and Mobile Quick Bar */}
      <FloatingActions onOpenFormModal={handleOpenFormModal} />
    </div>
  );
}
