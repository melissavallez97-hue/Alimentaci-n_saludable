import React from 'react';
import { BENEFITS_DATA } from '../data/nutritionData';
import { Zap, ShieldCheck, Sparkles, HeartPulse, Brain, Smile } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#F28C28]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#689F38]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D87015]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-rose-500" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-sky-600" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-amber-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#F28C28]" />;
    }
  };

  return (
    <section id="beneficios" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-[#D87015] bg-[#FFF3E0] border border-[#F4C542]/40">
            Impacto Vital
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3748]">
            Beneficios de una <span className="text-[#F28C28]">Buena Alimentación</span>
          </h2>
          <p className="text-sm sm:text-base text-[#718096]">
            Alimentarte con comida real repercute positivamente en cada célula de tu cuerpo, mejorando tu rendimiento diario y longevidad.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#F28C28] to-[#F4C542] rounded-full mx-auto" />
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS_DATA.map((benefit) => (
            <div
              key={benefit.id}
              className="p-8 rounded-3xl bg-[#FFF8F0] border border-[#F4C542]/30 hover:border-[#F28C28] hover:shadow-xl hover:-translate-y-1 transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getBenefitIcon(benefit.iconName)}
                </div>

                <h3 className="font-extrabold text-xl text-[#2D3748]">
                  {benefit.title}
                </h3>

                <p className="text-sm text-[#718096] leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F4C542]/20 flex items-center justify-between">
                <span className="text-xs font-bold text-[#D87015] bg-[#FFF3E0] px-3 py-1 rounded-full">
                  {benefit.keyStat}
                </span>
                <span className="text-lg">✨</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
