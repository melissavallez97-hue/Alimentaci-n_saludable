import React from 'react';
import { ArrowDown, Sparkles, ShieldCheck, Heart, Award } from 'lucide-react';
import heroImage from '../assets/images/hero_fresh_foods_1784767302195.jpg';

export const Hero: React.FC = () => {
  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#quienes-somos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-[#FFF3E0]/60 to-[#FFF8F0]">
      {/* Background Decorative Circles */}
      <div className="absolute -top-12 -right-12 w-96 h-96 bg-[#F4C542]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-12 w-80 h-80 bg-[#8BC34A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F4C542]/40 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#F28C28]" />
              <span className="text-xs font-bold text-[#D87015]">Divulgación Nutricional Científica</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2D3748] tracking-tight leading-tight">
              Pinceladas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F28C28] via-[#F4C542] to-[#8BC34A]">Salud</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4A5568] max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              &ldquo;Pequeñas decisiones diarias pueden transformar tu salud y bienestar.&rdquo;
            </p>

            <p className="text-sm sm:text-base text-[#718096] max-w-xl mx-auto lg:mx-0">
              Un espacio educativo amigable, claro y fundamentado en evidencia científica para aprender a alimentarte mejor, derribar mitos y disfrutar del bienestar sin dietas extremas.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#quienes-somos"
                onClick={handleExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#F28C28] to-[#F4C542] hover:from-[#D87015] hover:to-[#F28C28] shadow-lg shadow-[#F28C28]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all group"
                id="btn-hero-explore"
              >
                <span>Explorar contenido</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#alimentacion"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#alimentacion')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-bold text-[#4A5568] bg-white border border-[#E2E8F0] hover:bg-[#FFF3E0] hover:text-[#F28C28] shadow-xs transition-colors"
              >
                <span>Plato Equilibrado</span>
              </a>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-6 border-t border-[#F4C542]/30 grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#8BC34A]/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#689F38]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2D3748]">Evidencia</p>
                  <p className="text-[11px] text-[#718096]">100% Científica</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F28C28]/20 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-[#F28C28]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2D3748]">Sin Dietas</p>
                  <p className="text-[11px] text-[#718096]">Hábitos Reales</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F4C542]/20 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#D87015]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2D3748]">Para Todos</p>
                  <p className="text-[11px] text-[#718096]">Para toda la familia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Banner Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer soft glow border frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#F28C28] via-[#F4C542] to-[#8BC34A] opacity-40 blur-xl"></div>

              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-2xl border border-white">
                <img
                  src={heroImage}
                  alt="Alimentos frescos y nutritivos, frutas y verduras"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[420px] object-cover rounded-2xl transform hover:scale-102 transition-transform duration-500"
                />

                {/* Overlay floating badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#F4C542]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🥗</span>
                    <div>
                      <p className="text-xs font-bold text-[#2D3748]">Alimentación Consciente</p>
                      <p className="text-[11px] text-[#718096]">Colores y nutrientes para cada día</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#8BC34A] text-white">
                    Nutrición
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
