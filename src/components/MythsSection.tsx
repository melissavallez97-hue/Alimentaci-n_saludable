import React, { useState } from 'react';
import { MYTHS_DATA } from '../data/nutritionData';
import { HelpCircle, ChevronDown, CheckCircle2, XCircle, Search, Award } from 'lucide-react';

export const MythsSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(MYTHS_DATA[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredMyths = MYTHS_DATA.filter(
    (m) =>
      m.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.shortVerdict.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.scientificExplanation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="mitos" className="py-20 bg-[#FFF8F0] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-[#D87015] bg-[#FFF3E0] border border-[#F4C542]/40">
            Ciencia vs Creencias
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3748]">
            Mitos y <span className="text-[#F28C28]">Verdades</span>
          </h2>
          <p className="text-sm sm:text-base text-[#718096]">
            Desmentimos las falsas creencias populares sobre nutrición con evidencia científica sólida para que comas sin culpas injustificadas.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#F28C28] to-[#F4C542] rounded-full mx-auto" />

          {/* Search */}
          <div className="relative max-w-md mx-auto pt-4">
            <Search className="absolute left-4 top-7 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar mito o creencia (ej: frutas, fruta de noche, carbohidratos...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-[#F4C542]/40 text-sm text-[#2D3748] placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#F28C28] shadow-xs"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredMyths.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#F28C28] shadow-lg'
                    : 'bg-white/80 border-[#F4C542]/30 hover:border-[#F28C28]/60 hover:bg-white'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 text-white font-extrabold text-sm ${
                        item.isMyth ? 'bg-rose-500' : 'bg-[#8BC34A]'
                      }`}
                    >
                      {item.isMyth ? <XCircle className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D87015]">
                        {item.category} • {item.isMyth ? 'MITO POPULAR' : 'HECHO VERÍDICO'}
                      </span>
                      <h3 className="font-extrabold text-base sm:text-lg text-[#2D3748] leading-snug">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-[#FFF8F0] flex items-center justify-center text-[#F28C28] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#F28C28] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#FFF3E0] space-y-4 animate-in fade-in duration-200">
                    <div
                      className={`p-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 ${
                        item.isMyth
                          ? 'bg-rose-50 text-rose-800 border border-rose-200'
                          : 'bg-lime-50 text-lime-900 border border-lime-200'
                      }`}
                    >
                      <span>{item.isMyth ? '🔴' : '🟢'}</span>
                      <span>{item.shortVerdict}</span>
                    </div>

                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider text-[#D87015] mb-1">
                        Explicación Basada en Evidencia Científica:
                      </h4>
                      <p className="text-sm text-[#4A5568] leading-relaxed">
                        {item.scientificExplanation}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center gap-2 text-xs text-[#718096] italic">
                      <Award className="w-4 h-4 text-[#8BC34A] shrink-0" />
                      <span>Fuente de evidencia: {item.evidenceSource}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
