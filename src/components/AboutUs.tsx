import React from 'react';
import { BookCheck, Heart, Sparkles, Target, Users, Shield } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-[#D87015] bg-[#FFF3E0] border border-[#F4C542]/40">
            Nuestra Esencia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3748]">
            ¿Quiénes somos en <span className="text-[#F28C28]">Pinceladas de Salud</span>?
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#F28C28] to-[#F4C542] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
              <strong className="text-[#2D3748] font-bold">Pinceladas de Salud</strong> es un proyecto y espacio divulgativo dedicado a difundir información clara, cálida y rigurosa sobre alimentación saludable, fisiología de la nutrición y estilos de vida sostenibles.
            </p>

            <p className="text-sm sm:text-base text-[#718096] leading-relaxed">
              Creemos firmemente que el conocimiento sobre la comida debe ser accesible para personas de todas las edades, sin caer en extremismos, mitos populares ni promesas milagro. Nuestro objetivo es brindarte herramientas basadas en evidencia científica para que puedas tomar decisiones informadas y disfrutar de una relación positiva y plena con los alimentos.
            </p>

            <div className="p-6 rounded-2xl bg-[#FFF8F0] border border-[#F4C542]/30 shadow-xs space-y-3">
              <div className="flex items-center gap-3 text-[#F28C28] font-extrabold text-base">
                <Sparkles className="w-5 h-5" />
                <span>Nuestra Filosofía: &ldquo;Añadir antes que prohibir&rdquo;</span>
              </div>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                Lejos de contar calorías o clasificar alimentos como &ldquo;buenos&rdquo; o &ldquo;malos&rdquo;, nos enfocamos en el valor nutritivo real, la variedad de colores y la construcción progresiva de hábitos diarios que se disfrutan y perduran en el tiempo.
              </p>
            </div>
          </div>

          {/* Cards grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="p-5 rounded-2xl bg-[#FFF3E0]/70 border border-[#F4C542]/40 hover:bg-[#FFF3E0] transition-colors flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#F28C28] text-white shrink-0">
                <BookCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#2D3748] text-base mb-1">Rigor Científico</h3>
                <p className="text-xs text-[#718096]">
                  Contenido respaldado por consensos internacionales de nutrición y literatura médica actualizada.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-lime-50/80 border border-lime-200 hover:bg-lime-50 transition-colors flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#8BC34A] text-white shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#2D3748] text-base mb-1">Enfoque Amigable</h3>
                <p className="text-xs text-[#718096]">
                  Explicaciones sencillas, visuales e ilustrativas para que aprender a comer bien sea motivador.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 hover:bg-amber-50 transition-colors flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#F4C542] text-[#2D3748] shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#2D3748] text-base mb-1">Para Todas las Edades</h3>
                <p className="text-xs text-[#718096]">
                  Desde la educación escolar y familiar hasta pautas prácticas para adultos y adultos mayores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
