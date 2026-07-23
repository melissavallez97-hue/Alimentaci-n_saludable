import React, { useState } from 'react';
import { Droplet, X, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';

interface WaterCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaterCalculatorModal: React.FC<WaterCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [weightKg, setWeightKg] = useState<number>(68);
  const [activityMinutes, setActivityMinutes] = useState<number>(30);
  const [climate, setClimate] = useState<'templado' | 'calido'>('templado');

  if (!isOpen) return null;

  // Calculation formula: ~35ml per kg + 500ml per 30min of activity + 300ml if hot climate
  const baseWaterMl = weightKg * 35;
  const activityExtraMl = (activityMinutes / 30) * 350;
  const climateExtraMl = climate === 'calido' ? 350 : 0;
  const totalWaterMl = Math.round(baseWaterMl + activityExtraMl + climateExtraMl);
  const totalWaterLiters = (totalWaterMl / 1000).toFixed(2);
  const glassesOf250ml = Math.round(totalWaterMl / 250);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-sky-200 shadow-2xl relative space-y-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600">
            <Droplet className="w-6 h-6 fill-sky-200" />
          </div>
          <div>
            <h3 className="font-extrabold text-xl text-[#2D3748]">Calculadora de Hidratación</h3>
            <p className="text-xs text-[#718096]">Estima tus necesidades hídricas diarias</p>
          </div>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-bold text-[#2D3748] mb-1">
              <span>Tu peso corporal:</span>
              <span className="text-sky-600">{weightKg} kg</span>
            </div>
            <input
              type="range"
              min={35}
              max={130}
              value={weightKg}
              onChange={(e) => setWeightKg(Number(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold text-[#2D3748] mb-1">
              <span>Actividad física diaria:</span>
              <span className="text-sky-600">{activityMinutes} minutos</span>
            </div>
            <input
              type="range"
              min={0}
              max={180}
              step={15}
              value={activityMinutes}
              onChange={(e) => setActivityMinutes(Number(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#2D3748] mb-1">Clima habitual:</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setClimate('templado')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  climate === 'templado'
                    ? 'bg-sky-500 text-white shadow-xs'
                    : 'bg-gray-100 text-[#4A5568] hover:bg-gray-200'
                }`}
              >
                ☁️ Templado / Fco
              </button>
              <button
                type="button"
                onClick={() => setClimate('calido')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  climate === 'calido'
                    ? 'bg-sky-500 text-white shadow-xs'
                    : 'bg-gray-100 text-[#4A5568] hover:bg-gray-200'
                }`}
              >
                ☀️ Cálido / Húmedo
              </button>
            </div>
          </div>
        </div>

        {/* Result Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 text-center space-y-2">
          <p className="text-xs font-extrabold uppercase tracking-wider text-sky-800">
            Tu meta diaria estimada de agua:
          </p>
          <div className="text-3xl sm:text-4xl font-extrabold text-sky-600 flex items-center justify-center gap-2">
            <span>{totalWaterLiters} Litros</span>
            <span className="text-base font-normal text-sky-700">({glassesOf250ml} vasos de 250ml)</span>
          </div>
          <p className="text-[11px] text-sky-700">
            💡 Incluye agua pura, infusiones sin azúcar y la hidratación natural de frutas y verduras.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 rounded-2xl font-bold text-xs text-white bg-sky-500 hover:bg-sky-600 transition-colors shadow-md"
          >
            Entendido, ¡gracias!
          </button>
        </div>
      </div>
    </div>
  );
};
