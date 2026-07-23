import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/nutritionData';
import { GalleryItem } from '../types';
import { Maximize2, X, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todas');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    'Todas',
    'Frutas',
    'Verduras',
    'Comidas saludables',
    'Personas cocinando',
    'Familias compartiendo',
    'Mercados frescos'
  ];

  const filteredItems =
    activeCategory === 'Todas'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((i) => i.category === activeCategory);

  return (
    <section id="galeria" className="py-20 bg-[#FFF8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-[#D87015] bg-[#FFF3E0] border border-[#F4C542]/40">
            Inspiración Visual
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3748]">
            Galería de <span className="text-[#F28C28]">Vida Saludable</span>
          </h2>
          <p className="text-sm sm:text-base text-[#718096]">
            Un recorrido fotográfico por el mundo de la comida real, la cocina casera y momentos compartidos en familia.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#F28C28] to-[#F4C542] rounded-full mx-auto" />

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#F28C28] text-white shadow-md'
                    : 'bg-white text-[#4A5568] hover:bg-[#FFF3E0] border border-[#F4C542]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl transition-all cursor-pointer bg-white"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F28C28]">
                  {item.category}
                </span>
                <h3 className="font-extrabold text-base">{item.title}</h3>
                <p className="text-xs text-amber-100 line-clamp-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="md:col-span-8 bg-black h-80 md:h-[480px] flex items-center justify-center overflow-hidden">
                <img
                  src={lightboxItem.imageUrl}
                  alt={lightboxItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-4 p-6 sm:p-8 space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFF3E0] text-[#D87015]">
                  {lightboxItem.category}
                </span>
                <h3 className="text-2xl font-extrabold text-[#2D3748]">
                  {lightboxItem.title}
                </h3>
                <p className="text-sm text-[#718096] leading-relaxed">
                  {lightboxItem.description}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-[#8BC34A] flex items-center gap-1">
                    <Sparkles className="w-4 h-4" /> Pinceladas de Salud
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
