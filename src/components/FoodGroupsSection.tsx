import React, { useState } from 'react';
import { FOOD_GROUPS_DATA } from '../data/nutritionData';
import { Search, Sparkles, Check, Info } from 'lucide-react';

export const FoodGroupsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGroups = FOOD_GROUPS_DATA.filter(
    (group) =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.examples.some((ex) => ex.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="grupos" className="py-20 bg-[#FFF8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-[#689F38] bg-lime-100 border border-lime-300">
            Pirámide e Integración
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3748]">
            Grupos de <span className="text-[#8BC34A]">Alimentos</span>
          </h2>
          <p className="text-sm sm:text-base text-[#718096]">
            Conoce cada familia de alimentos, sus características principales y recomendaciones de consumo diario para una alimentación variada.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#8BC34A] to-[#F4C542] rounded-full mx-auto" />

          {/* Search Filter input */}
          <div className="relative max-w-md mx-auto pt-4">
            <Search className="absolute left-4 top-7 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por grupo o alimento (ej: garbanzos, aguacate...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-[#F4C542]/40 text-sm text-[#2D3748] placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#8BC34A] shadow-xs"
            />
          </div>
        </div>

        {/* Food Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className={`rounded-3xl p-5 border ${group.accentBg} bg-white/80 backdrop-blur-xs hover:bg-white shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group`}
            >
              <div>
                {/* Image */}
                <div className="relative h-40 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={group.image}
                    alt={group.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white font-extrabold text-lg">
                    {group.name}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-4">
                  {group.description}
                </p>

                {/* Examples */}
                <div className="space-y-1 mb-4">
                  <p className="text-[11px] font-bold text-[#2D3748] uppercase tracking-wider">
                    Ejemplos clave:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {group.examples.map((ex, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#FFF8F0] text-[#4A5568] border border-black/5"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Portion tip */}
              <div className="pt-3 border-t border-black/5 bg-white/90 p-3 rounded-xl space-y-1">
                <span className="text-[11px] font-bold text-[#F28C28] flex items-center gap-1">
                  <Info className="w-3.5 h-3.5" /> Pauta de consumo:
                </span>
                <p className="text-[11px] text-[#718096] italic leading-tight">
                  {group.portionTip}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredGroups.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#F4C542]/30 max-w-md mx-auto">
            <p className="text-sm font-bold text-[#4A5568]">No encontramos resultados para tu búsqueda.</p>
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="mt-3 px-4 py-2 rounded-xl text-xs font-bold text-[#F28C28] bg-[#FFF3E0]"
            >
              Ver todos los grupos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
