import React, { useState } from 'react';
import { BLOG_POSTS_DATA } from '../data/nutritionData';
import { BlogPost } from '../types';
import { BookOpen, Clock, Calendar, User, Search, Tag, X, Sparkles, Check, HelpCircle } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Nutrition label widget state for the Label Reader Article
  const [activeLabelSpot, setActiveLabelSpot] = useState<'ingredients' | 'sugar' | 'servings' | 'trans'>('ingredients');

  const labelSpotDetails = {
    ingredients: {
      title: '1. Orden de Ingredientes',
      desc: 'Aparecen de mayor a menor cantidad. Evita productos donde el azúcar, jarabes o aceites refinados encabecen la lista.'
    },
    sugar: {
      title: '2. Azúcares Añadidos vs Naturales',
      desc: 'Revisa la fila de "de los cuales azúcares añadidos". Si supera los 5g por cada 100g de producto, consumirlo esporádicamente.'
    },
    servings: {
      title: '3. Tamaño de la Porción',
      desc: 'La tabla suele basarse en 100g o en porciones pequeñas arbitrarias. Compara siempre la porción real que vas a comer.'
    },
    trans: {
      title: '4. Grasas Trans e Hidrogenadas',
      desc: 'Busca el término "grasa parcialmente hidrogenada". Debe ser 0g para cuidar tus arterias y salud cardiovascular.'
    }
  };

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const allTags = Array.from(new Set(BLOG_POSTS_DATA.flatMap((p) => p.tags)));

  return (
    <section id="blog" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-[#D87015] bg-[#FFF3E0] border border-[#F4C542]/40">
            Divulgación & Artículos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3748]">
            Blog Educativo de <span className="text-[#F28C28]">Nutrición</span>
          </h2>
          <p className="text-sm sm:text-base text-[#718096]">
            Artículos redactados con rigor para ayudarte a entender la comida, mejorar tus hábitos y realizar elecciones conscientes en el supermercado.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#F28C28] to-[#F4C542] rounded-full mx-auto" />

          {/* Search & Tags */}
          <div className="space-y-4 pt-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artículo (ej: azúcar, etiquetas, hidratación...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FFF8F0] border border-[#F4C542]/40 text-sm text-[#2D3748] placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#F28C28]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                  selectedTag === null
                    ? 'bg-[#F28C28] text-white'
                    : 'bg-[#FFF8F0] text-[#718096] hover:bg-[#FFF3E0]'
                }`}
              >
                Todos los temas
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                    selectedTag === tag
                      ? 'bg-[#F28C28] text-white'
                      : 'bg-[#FFF8F0] text-[#718096] hover:bg-[#FFF3E0]'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#FFF8F0] rounded-3xl border border-[#F4C542]/30 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-[#D87015]">
                    {post.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-[#718096]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#F28C28]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#F28C28]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg text-[#2D3748] group-hover:text-[#F28C28] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#718096] leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-2">
                    {post.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-bold text-[#D87015] bg-[#FFF3E0]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Read button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedPost(post)}
                  className="w-full py-2.5 rounded-2xl text-xs font-bold text-[#F28C28] bg-white border border-[#F28C28]/40 hover:bg-[#F28C28] hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Leer más</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#F4C542]/40 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F28C28]">
                  {selectedPost.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  {selectedPost.title}
                </h3>
                <div className="flex items-center gap-4 text-xs font-medium text-amber-100">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" /> {selectedPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 space-y-6">
              <p className="text-base text-[#2D3748] font-semibold italic bg-[#FFF8F0] p-4 rounded-2xl border-l-4 border-[#F28C28]">
                &ldquo;{selectedPost.summary}&rdquo;
              </p>

              {/* Interactive Widget embedded for Label Reading Article */}
              {selectedPost.interactiveType === 'labelReader' && (
                <div className="my-6 p-6 rounded-3xl bg-[#FFF3E0]/80 border-2 border-[#F4C542] space-y-4">
                  <div className="flex items-center gap-2 text-[#D87015] font-extrabold text-base">
                    <Sparkles className="w-5 h-5" />
                    <span>Widget Interactivo: Anatomía de una Etiqueta</span>
                  </div>
                  <p className="text-xs text-[#4A5568]">
                    Haz clic en cada sección clave para descubrir en qué fijarte antes de comprar:
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveLabelSpot('ingredients')}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all ${
                        activeLabelSpot === 'ingredients'
                          ? 'bg-[#F28C28] text-white shadow-xs'
                          : 'bg-white text-[#4A5568] hover:bg-amber-100'
                      }`}
                    >
                      📜 Ingredientes
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveLabelSpot('sugar')}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all ${
                        activeLabelSpot === 'sugar'
                          ? 'bg-[#F28C28] text-white shadow-xs'
                          : 'bg-white text-[#4A5568] hover:bg-amber-100'
                      }`}
                    >
                      🍬 Azúcar
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveLabelSpot('servings')}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all ${
                        activeLabelSpot === 'servings'
                          ? 'bg-[#F28C28] text-white shadow-xs'
                          : 'bg-white text-[#4A5568] hover:bg-amber-100'
                      }`}
                    >
                      📦 Porciones
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveLabelSpot('trans')}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all ${
                        activeLabelSpot === 'trans'
                          ? 'bg-[#F28C28] text-white shadow-xs'
                          : 'bg-white text-[#4A5568] hover:bg-amber-100'
                      }`}
                    >
                      🧈 Grasas Trans
                    </button>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-[#F4C542]/40 text-xs sm:text-sm text-[#2D3748]">
                    <h5 className="font-bold text-[#D87015] mb-1">
                      {labelSpotDetails[activeLabelSpot].title}
                    </h5>
                    <p className="text-[#4A5568] leading-relaxed">
                      {labelSpotDetails[activeLabelSpot].desc}
                    </p>
                  </div>
                </div>
              )}

              {/* Text Sections */}
              <div className="space-y-6">
                {selectedPost.contentSections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-bold text-lg text-[#2D3748]">{sec.heading}</h4>
                    <p className="text-sm text-[#4A5568] leading-relaxed">{sec.text}</p>
                  </div>
                ))}
              </div>

              {/* Tags footer */}
              <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedPost.tags.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFF3E0] text-[#D87015]">
                      #{t}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 rounded-2xl font-bold text-xs text-white bg-[#F28C28] hover:bg-[#D87015]"
                >
                  Cerrar Artículo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
