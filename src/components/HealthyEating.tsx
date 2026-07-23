import React, { useState } from 'react';
import { Utensils, CheckCircle2, Flame, Droplet, Sparkles, PieChart, Layers } from 'lucide-react';
import balancedPlateImg from '../assets/images/balanced_plate_1784767311297.jpg';

export const HealthyEating: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<'veggies' | 'proteins' | 'carbs' | 'fats'>('veggies');

  const segmentDetails = {
    veggies: {
      title: '50% - Verduras, Hortalizas y Frutas',
      color: 'bg-[#8BC34A]',
      textColor: 'text-[#689F38]',
      borderColor: 'border-[#8BC34A]',
      bgLight: 'bg-lime-50',
      description: 'Constituyen la mitad de tu plato en el almuerzo y la cena. Aportan volumen, agua, fibra, fitoquímicos y micronutrientes vitales sin recargar calorías.',
      examples: ['Espinacas, acelgas y rúcula', 'Tomate, pimientos y calabacín', 'Brócoli, coliflor y zanahoria', 'Manzana, cítricos y arándanos frescos']
    },
    proteins: {
      title: '25% - Proteínas de Alta Calidad',
      color: 'bg-[#F28C28]',
      textColor: 'text-[#D87015]',
      borderColor: 'border-[#F28C28]',
      bgLight: 'bg-orange-50',
      description: 'Fundamentales para reparar tejidos, preservar masa muscular y brindar saciedad duradera.',
      examples: ['Pescado azul (salmón, sardina, atún)', 'Aves de corral (pollo y pavo)', 'Huevos de granja', 'Tofu, tempeh y legumbres (garbanzos, lentejas)']
    },
    carbs: {
      title: '25% - Carbohidratos Complejos e Integrales',
      color: 'bg-[#F4C542]',
      textColor: 'text-amber-800',
      borderColor: 'border-[#F4C542]',
      bgLight: 'bg-amber-50',
      description: 'Grano entero conservando su cascara rica en fibra. Brindan energía progresiva evitando picos de insulina.',
      examples: ['Quinoa y arroz integral', 'Avena en copos integrales', 'Camote / Batata y patatas asadas', 'Pan 100% integral de grano entero']
    },
    fats: {
      title: 'Aderezo - Grasas Saludables & Agua',
      color: 'bg-emerald-600',
      textColor: 'text-emerald-800',
      borderColor: 'border-emerald-500',
      bgLight: 'bg-emerald-50',
      description: 'El toque final imprescindible para absorber vitaminas liposolubles y cuidar tus arterias.',
      examples: ['Aceite de Oliva Virgen Extra (AOVE)', 'Aguacate / Palta fresca', 'Semillas de sésamo, chía y calabaza', 'Agua potable limpia como bebida principal']
    }
  };

  return (
    <section id="alimentacion" className="py-20 bg-[#FFF8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-[#689F38] bg-lime-100 border border-lime-300">
            Bases de la Nutrición
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3748]">
            Alimentación Saludable y <span className="text-[#8BC34A]">Plato Equilibrado</span>
          </h2>
          <p className="text-sm sm:text-base text-[#718096]">
            Una alimentación saludable no consiste en comer menos, sino en nutrir a tu cuerpo con la variedad y proporción de alimentos reales que necesita.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#8BC34A] to-[#F28C28] rounded-full mx-auto" />
        </div>

        {/* Educational 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-white border border-[#F4C542]/30 shadow-xs hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-[#F28C28]">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#2D3748]">1. ¿Qué es alimentarse bien?</h3>
            <p className="text-xs sm:text-sm text-[#718096] leading-relaxed">
              Es aportar a tu cuerpo todos los nutrientes esenciales para funcionar con energía, reparar estructuras y prevenir enfermedades a corto y largo plazo.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#F4C542]/30 shadow-xs hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-lime-100 flex items-center justify-center text-[#689F38]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#2D3748]">2. La Regla de la Variedad</h3>
            <p className="text-xs sm:text-sm text-[#718096] leading-relaxed">
              Comer un &ldquo;arcoíris&rdquo; de colores garantiza la presencia de antioxidantes distintos (licopeno, carotenos, antocianinas) que se potencian entre sí.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#F4C542]/30 shadow-xs hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-[#D87015]">
              <PieChart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#2D3748]">3. Proporciones Visuales</h3>
            <p className="text-xs sm:text-sm text-[#718096] leading-relaxed">
              En lugar de pesar alimentos, guiarnos por la división visual del plato (Método del Plato de Harvard) resulta práctico, instintivo y sostenible.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#F4C542]/30 shadow-xs hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600">
              <Droplet className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#2D3748]">4. Hidratación Consciente</h3>
            <p className="text-xs sm:text-sm text-[#718096] leading-relaxed">
              El agua es la bebida de elección principal. Acompaña tus comidas sin aportar azúcares añadidos ni edulcorantes artificiales.
            </p>
          </div>
        </div>

        {/* Interactive Balanced Plate Builder Section */}
        <div className="bg-white rounded-3xl border border-[#F4C542]/40 shadow-xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image & Plate Interactive Selector */}
            <div className="lg:col-span-6 space-y-4 text-center">
              <div className="relative mx-auto max-w-md">
                <img
                  src={balancedPlateImg}
                  alt="Ejemplo de plato equilibrado saludable"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover rounded-3xl shadow-md border-4 border-[#FFF3E0]"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-xs text-xs font-bold text-[#F28C28]">
                  Modelo del Plato Saludable
                </div>
              </div>

              {/* Interactive Segment Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveSegment('veggies')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activeSegment === 'veggies'
                      ? 'bg-[#8BC34A] text-white shadow-md'
                      : 'bg-lime-50 text-[#689F38] hover:bg-lime-100'
                  }`}
                >
                  🥗 50% Verduras
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSegment('proteins')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activeSegment === 'proteins'
                      ? 'bg-[#F28C28] text-white shadow-md'
                      : 'bg-orange-50 text-[#D87015] hover:bg-orange-100'
                  }`}
                >
                  🍗 25% Proteína
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSegment('carbs')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activeSegment === 'carbs'
                      ? 'bg-[#F4C542] text-[#2D3748] shadow-md'
                      : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
                  }`}
                >
                  🌾 25% Carbohidratos
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSegment('fats')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activeSegment === 'fats'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                  }`}
                >
                  🥑 Grasas & Agua
                </button>
              </div>
            </div>

            {/* Active Segment Detail Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className={`p-6 rounded-3xl border-2 ${segmentDetails[activeSegment].borderColor} ${segmentDetails[activeSegment].bgLight} space-y-4`}>
                <div className="flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${segmentDetails[activeSegment].color}`} />
                  <h3 className={`font-extrabold text-xl sm:text-2xl ${segmentDetails[activeSegment].textColor}`}>
                    {segmentDetails[activeSegment].title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                  {segmentDetails[activeSegment].description}
                </p>

                <div className="space-y-2 pt-2 border-t border-black/10">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#2D3748]">
                    Alimentos Recomendados:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {segmentDetails[activeSegment].examples.map((ex, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#4A5568]">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${segmentDetails[activeSegment].textColor}`} />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#FFF8F0] p-4 rounded-2xl border border-[#F4C542]/30 flex items-center gap-3 text-xs text-[#718096]">
                <span className="text-xl">💡</span>
                <span>
                  <strong>Tip Pro:</strong> Procura comer frutas de temporada y variar las cocciones (al vapor, salteado ligero o al horno) para preservar vitaminas solubles.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
