import React from 'react';
import { Leaf, Heart, Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: '¿Quiénes somos?', href: '#quienes-somos' },
    { name: 'Alimentación', href: '#alimentacion' },
    { name: 'Nutrientes', href: '#nutrientes' },
    { name: 'Grupos', href: '#grupos' },
    { name: 'Recetas', href: '#recetas' },
    { name: 'Blog', href: '#blog' },
    { name: 'Mitos y verdades', href: '#mitos' },
    { name: 'Consejos', href: '#consejos' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-[#2D3748] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gray-700">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#F28C28] via-[#F4C542] to-[#8BC34A] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#2D3748] rounded-[14px] flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-[#8BC34A]" />
                </div>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Pinceladas <span className="text-[#F28C28]">de Salud</span>
              </span>
            </div>

            <p className="text-sm text-gray-300 italic leading-relaxed">
              &ldquo;La nutrición no se trata de perfección ni de restricciones extremas, sino de sumar decisiones conscientes que transforman tu bienestar cada día.&rdquo;
            </p>

            <p className="text-xs text-gray-400">
              Espacio de divulgación sobre nutrición humana y hábitos saludables basado en evidencias científicas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#F4C542]">
              Enlaces Rápidos
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-[#F28C28] transition-colors"
                >
                  • {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#F4C542]">
              Síguenos en Redes
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-2xl bg-gray-800 hover:bg-[#F28C28] flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-2xl bg-gray-800 hover:bg-[#F28C28] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-2xl bg-gray-800 hover:bg-[#F28C28] flex items-center justify-center text-white transition-colors"
                aria-label="TikTok"
              >
                <span className="text-xs font-bold">TikTok</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-2xl bg-gray-800 hover:bg-[#F28C28] flex items-center justify-center text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-[11px] text-gray-400">
              Contenido educativo gratuito abierto para la comunidad.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Pinceladas de Salud. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Educación Nutricional Científica</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-2xl bg-gray-800 hover:bg-[#F28C28] text-white transition-colors flex items-center gap-1.5"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Arriba</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
