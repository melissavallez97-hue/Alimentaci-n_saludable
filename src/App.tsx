import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { HealthyEating } from './components/HealthyEating';
import { NutrientsSection } from './components/NutrientsSection';
import { FoodGroupsSection } from './components/FoodGroupsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { RecipesSection } from './components/RecipesSection';
import { BlogSection } from './components/BlogSection';
import { MythsSection } from './components/MythsSection';
import { TipsSection } from './components/TipsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { WaterCalculatorModal } from './components/WaterCalculatorModal';

export default function App() {
  const [isWaterCalcOpen, setIsWaterCalcOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#2D3748] font-sans selection:bg-[#F4C542] selection:text-[#2D3748]">
      {/* Fixed Navigation Header */}
      <Header onOpenWaterCalc={() => setIsWaterCalcOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* ¿Quiénes somos? */}
        <AboutUs />

        {/* Alimentación saludable */}
        <HealthyEating />

        {/* Nutrientes esenciales */}
        <NutrientsSection />

        {/* Grupos de alimentos */}
        <FoodGroupsSection />

        {/* Beneficios de una buena alimentación */}
        <BenefitsSection />

        {/* Recetas saludables */}
        <RecipesSection />

        {/* Blog educativo */}
        <BlogSection />

        {/* Mitos y verdades */}
        <MythsSection />

        {/* Consejos saludables */}
        <TipsSection onOpenWaterCalc={() => setIsWaterCalcOpen(true)} />

        {/* Galería de imágenes */}
        <GallerySection />

        {/* Contacto */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Interactive Water Intake Calculator Modal */}
      <WaterCalculatorModal
        isOpen={isWaterCalcOpen}
        onClose={() => setIsWaterCalcOpen(false)}
      />
    </div>
  );
}
