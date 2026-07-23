import React, { useState } from 'react';
import { NUTRIENTS_DATA } from '../data/nutritionData';
import { Nutrient } from '../types';
import {
  Zap,
  Activity,
  Heart,
  Sun,
  Shield,
  Feather,
  Droplet,
  Info,
  X,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export const NutrientsSection: React.FC = () => {
  const [selectedNutrient, setSelectedNutrient] = useState<Nutrient | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Sun':
        return <Sun className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      case 'Feather':
        return <Feather className="w-5 h-5" />;
      case 'Droplet':
        return <Droplet className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="nutrientes" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-[#D87015] bg-[#FFF3E0] border border-[#F4C542]/40">
            Fisiología & Salud
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3748]">
            Nutrientes <span className="text-[#F28C28]">Esenciales</span>
          </h2>
          <p className="text-sm sm:text-base text-[#718096]">
            Explora la función de cada elemento vital en tu organismo, dónde encontrarlo y cómo beneficia tu bienestar corporal.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#F28C28] to-[#F4C542] rounded-full mx-auto" />
        </div>

        {/* Nutrients Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NUTRIENTS_DATA.map((nutrient) => (
            <div
              key={nutrient.id}
              className="bg-[#FFF8F0] rounded-3xl border border-[#F4C542]/30 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col group"
            >
              {/* Image & Category Badge */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={nutrient.image}
                  alt={nutrient.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${nutrient.badgeColor}`}
                >
                  {nutrient.category}
                </span>

                <h3 className="absolute bottom-4 left-4 right-4 text-white font-extrabold text-xl flex items-center gap-2">
                  <span className="p-1.5 rounded-xl bg-white/20 backdrop-blur-md text-white">
                    {getIcon(nutrient.iconName)}
                  </span>
                  <span>{nutrient.name}</span>
                </h3>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold text-[#D87015] uppercase tracking-wider mb-1">
                    Función Principal:
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed line-clamp-3">
                    {nutrient.function}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#F4C542]/20">
                    <p className="text-xs font-bold text-[#2D3748] mb-2">Fuentes Alimentos:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {nutrient.foodSources.slice(0, 3).map((source, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white text-[#4A5568] border border-black/5"
                        >
                          {source}
                        </span>
                      ))}
                      {nutrient.foodSources.length > 3 && (
                        <span className="px-2 py-1 rounded-lg text-xs font-bold text-[#F28C28]">
                          +{nutrient.foodSources.length - 3} más
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* View Details Modal Button */}
                <button
                  type="button"
                  onClick={() => setSelectedNutrient(nutrient)}
                  className="w-full mt-4 py-2.5 rounded-2xl text-xs font-bold text-[#F28C28] bg-white border border-[#F28C28]/30 hover:bg-[#F28C28] hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  <span>Ver detalles completos</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nutrient Details Modal */}
      {selectedNutrient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#F4C542]/40 shadow-2xl relative">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedNutrient(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-56">
              <img
                src={selectedNutrient.image}
                alt={selectedNutrient.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${selectedNutrient.badgeColor}`}>
                  {selectedNutrient.category}
                </span>
                <h3 className="text-2xl font-extrabold flex items-center gap-2">
                  {getIcon(selectedNutrient.iconName)}
                  <span>{selectedNutrient.name}</span>
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="font-bold text-base text-[#2D3748] mb-2">Explicación fisiológica:</h4>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  {selectedNutrient.detailedDescription}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-base text-[#2D3748] mb-3">Beneficios clave para la salud:</h4>
                <div className="space-y-2">
                  {selectedNutrient.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                      <CheckCircle className="w-5 h-5 text-[#8BC34A] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-base text-[#2D3748] mb-2">Principales Fuentes Alimentarias:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedNutrient.foodSources.map((source, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FFF3E0] text-[#D87015] border border-[#F4C542]/30"
                    >
                      🌱 {source}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedNutrient(null)}
                  className="px-6 py-2.5 rounded-2xl font-bold text-xs text-white bg-[#F28C28] hover:bg-[#D87015] transition-colors"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
