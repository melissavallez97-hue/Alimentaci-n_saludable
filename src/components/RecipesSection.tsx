import React, { useState } from 'react';
import { RECIPES_DATA } from '../data/nutritionData';
import { Recipe } from '../types';
import { Clock, ChefHat, Users, CheckCircle2, X, Sparkles, Utensils } from 'lucide-react';

export const RecipesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todas');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const categories = ['Todas', 'Desayunos', 'Almuerzos', 'Cenas', 'Snacks', 'Bebidas'];

  const filteredRecipes =
    activeCategory === 'Todas'
      ? RECIPES_DATA
      : RECIPES_DATA.filter((r) => r.category === activeCategory);

  return (
    <section id="recetas" className="py-20 bg-[#FFF8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-[#D87015] bg-[#FFF3E0] border border-[#F4C542]/40">
            Cocina Nutritiva
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3748]">
            Recetas <span className="text-[#F28C28]">Saludables & Deliciosas</span>
          </h2>
          <p className="text-sm sm:text-base text-[#718096]">
            Ideas gastronómicas sencillas, llenas de sabor y pensadas para nutrir tu día a día sin complicaciones.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#F28C28] to-[#F4C542] rounded-full mx-auto" />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#F28C28] text-white shadow-md scale-105'
                    : 'bg-white text-[#4A5568] hover:bg-[#FFF3E0] hover:text-[#F28C28] border border-[#F4C542]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-3xl border border-[#F4C542]/30 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-[#F28C28] shadow-xs">
                    {recipe.category}
                  </span>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5" />
                      {recipe.prepTime}
                    </span>
                    <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      <ChefHat className="w-3.5 h-3.5" />
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-extrabold text-lg text-[#2D3748] leading-snug">
                    {recipe.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#718096] leading-relaxed line-clamp-2">
                    {recipe.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {recipe.nutritionHighlights.map((hl, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#689F38] bg-lime-50 border border-lime-200"
                      >
                        ✓ {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedRecipe(recipe)}
                  className="w-full py-3 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-[#F28C28] to-[#F4C542] hover:opacity-95 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Utensils className="w-4 h-4" />
                  <span>Ver receta completa</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#F4C542]/40 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Recipe Image Banner */}
            <div className="relative h-64">
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F28C28]">
                  {selectedRecipe.category}
                </span>
                <h3 className="text-2xl font-extrabold">{selectedRecipe.title}</h3>
                <div className="flex items-center gap-4 text-xs font-medium text-amber-100 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {selectedRecipe.prepTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" /> {selectedRecipe.servings}
                  </span>
                  <span className="flex items-center gap-1">
                    <ChefHat className="w-4 h-4" /> {selectedRecipe.difficulty}
                  </span>
                </div>
              </div>
            </div>

            {/* Recipe Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="font-bold text-base text-[#2D3748] mb-2 flex items-center gap-2">
                  <span>🛒</span> Ingredientes:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#FFF8F0] p-4 rounded-2xl border border-[#F4C542]/30">
                  {selectedRecipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4A5568]">
                      <CheckCircle2 className="w-4 h-4 text-[#8BC34A] shrink-0 mt-0.5" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-base text-[#2D3748] mb-3 flex items-center gap-2">
                  <span>👩‍🍳</span> Paso a paso de preparación:
                </h4>
                <ol className="space-y-3">
                  {selectedRecipe.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-3 text-xs sm:text-sm text-[#4A5568]">
                      <span className="w-6 h-6 rounded-full bg-[#F28C28] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-4 rounded-2xl bg-lime-50 border border-lime-200">
                <p className="text-xs font-bold text-[#689F38] mb-1">
                  🌟 Valor Nutricional Destacado:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedRecipe.nutritionHighlights.map((hl, idx) => (
                    <span key={idx} className="text-xs font-semibold text-[#2D3748]">
                      • {hl}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedRecipe(null)}
                  className="px-6 py-2.5 rounded-2xl font-bold text-xs text-white bg-[#F28C28] hover:bg-[#D87015]"
                >
                  Cerrar Receta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
