import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Sparkles, BookOpen, Droplet, Search } from 'lucide-react';

interface HeaderProps {
  onOpenWaterCalc?: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWaterCalc }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: '¿Quiénes somos?', href: '#quienes-somos' },
    { name: 'Alimentación', href: '#alimentacion' },
    { name: 'Nutrientes', href: '#nutrientes' },
    { name: 'Grupos', href: '#grupos' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Recetas', href: '#recetas' },
    { name: 'Blog', href: '#blog' },
    { name: 'Mitos y verdades', href: '#mitos' },
    { name: 'Consejos', href: '#consejos' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF8F0]/95 backdrop-blur-md shadow-sm border-b border-[#F4C542]/30 py-3'
          : 'bg-[#FFF8F0]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center gap-2.5 group"
            id="brand-logo-link"
          >
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#F28C28] via-[#F4C542] to-[#8BC34A] p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-[#8BC34A] group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#2D3748] flex items-center gap-1">
                Pinceladas <span className="text-[#F28C28]">de Salud</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#689F38]">
                Educación Nutricional
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-2.5 py-1.5 text-xs xl:text-sm font-semibold text-[#4A5568] hover:text-[#F28C28] hover:bg-[#FFF3E0] rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-2">
            {onOpenWaterCalc && (
              <button
                type="button"
                onClick={onOpenWaterCalc}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#0284C7] bg-sky-50 border border-sky-200 hover:bg-sky-100 transition-colors shadow-xs"
                title="Calculadora de agua"
                id="btn-water-calc-header"
              >
                <Droplet className="w-3.5 h-3.5 text-sky-500 fill-sky-200" />
                <span>Calculadora Agua</span>
              </button>
            )}
            <a
              href="#blog"
              onClick={(e) => handleLinkClick(e, '#blog')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#F28C28] to-[#F4C542] hover:opacity-95 shadow-xs hover:shadow-md transition-all"
              id="btn-explore-header"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Aprender</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#4A5568] hover:text-[#F28C28] hover:bg-[#FFF3E0] transition-colors focus:outline-hidden"
              aria-label="Abrir menú de navegación"
              id="btn-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF8F0] border-b border-[#F4C542]/30 shadow-xl px-4 pt-3 pb-6 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1 mb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-2 text-sm font-semibold text-[#4A5568] hover:text-[#F28C28] hover:bg-[#FFF3E0] rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#FFF3E0] flex flex-col gap-2">
            {onOpenWaterCalc && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaterCalc();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-[#0284C7] bg-sky-50 border border-sky-200"
              >
                <Droplet className="w-4 h-4 text-sky-500" />
                <span>Calculadora de Hidratación</span>
              </button>
            )}
            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, '#contacto')}
              className="w-full text-center py-2.5 rounded-xl text-xs font-bold text-white bg-[#F28C28]"
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
