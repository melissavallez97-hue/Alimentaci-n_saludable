import React, { useState } from 'react';
import { HEALTHY_TIPS_DATA } from '../data/nutritionData';
import {
  Apple,
  Droplet,
  ShieldAlert,
  Moon,
  FileText,
  Activity,
  CheckCircle,
  Calculator,
  Sparkles,
  X
} from 'lucide-react';

interface TipsSectionProps {
  onOpenWaterCalc: () => void;
}

export const TipsSection: React.FC<TipsSectionProps> = ({ onOpenWaterCalc }) => {
  const getTipIcon = (iconName: string) => {
    switch (iconName) {
      case 'Apple':
        return <Apple className="w-6 h-6 text-[#8BC34A]" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6 text-sky-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-rose-500" />;
      case 'Moon':
        return <Moon className="w-6 h-6 text-indigo-500" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-amber-500" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#F28C28]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#F28C28]" />;
    }
  };

  return (
    <section id="consejos" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-[#689F38] bg-lime-100 border border-lime-300">
            Paso a Paso Cotidiano
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3748]">
            Consejos Prácticos para el <span className="text-[#8BC34A]">Día a Día</span>
          </h2>
          <p className="text-sm sm:text-base text-[#718096]">
            Pequeñas acciones cotidianas que marcan una gran diferencia en tu vitalidad y salud a largo plazo.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#8BC34A] to-[#F28C28] rounded-full mx-auto" />
        </div>

        {/* Tips Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HEALTHY_TIPS_DATA.map((tip) => (
            <div
              key={tip.id}
              className="p-8 rounded-3xl bg-[#FFF8F0] border border-[#F4C542]/30 hover:border-[#8BC34A] hover:shadow-xl hover:-translate-y-1 transition-all space-y-5 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-black/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getTipIcon(tip.iconName)}
                </div>

                <h3 className="font-extrabold text-xl text-[#2D3748]">
                  {tip.title}
                </h3>

                <p className="text-sm text-[#718096] leading-relaxed">
                  {tip.summary}
                </p>

                {/* Action points */}
                <div className="space-y-2 pt-2">
                  {tip.actionPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#4A5568]">
                      <CheckCircle className="w-4 h-4 text-[#8BC34A] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special interactive calculator trigger for Water tip */}
              {tip.hasCalculator && (
                <div className="pt-4 border-t border-[#F4C542]/20">
                  <button
                    type="button"
                    onClick={onOpenWaterCalc}
                    className="w-full py-2.5 rounded-2xl text-xs font-bold text-[#0284C7] bg-sky-50 border border-sky-200 hover:bg-sky-100 transition-colors flex items-center justify-center gap-2 shadow-xs"
                    id="btn-open-water-calc-card"
                  >
                    <Calculator className="w-4 h-4 text-sky-500" />
                    <span>Calcular mi meta de agua diaria</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
