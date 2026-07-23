import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    topic: 'Consulta sobre contenido',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Por favor ingresa tu nombre.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = 'Por favor ingresa un correo electrónico válido.';
    if (!formData.message.trim() || formData.message.length < 10)
      errs.message = 'Tu mensaje debe tener al menos 10 caracteres.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-[#D87015] bg-[#FFF3E0] border border-[#F4C542]/40">
            Estamos para Escucharte
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3748]">
            Contacto & <span className="text-[#F28C28]">Sugerencias</span>
          </h2>
          <p className="text-sm sm:text-base text-[#718096]">
            Si tienes dudas o sugerencias sobre nuestro contenido educativo, estaremos encantados de leerte.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#F28C28] to-[#F4C542] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Information & Disclaimer Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#FFF8F0] border border-[#F4C542]/40 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F28C28] text-white flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-2xl text-[#2D3748]">
                Comunidad Pinceladas de Salud
              </h3>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                Este canal está destinado a recibir retroalimentación, ideas para nuevos artículos, comentarios sobre recetas o consultas sobre nuestras fuentes educativas.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-lime-50 border border-lime-200 flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#8BC34A] text-white shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm text-[#2D3748]">Compromiso de Transparencia</p>
                <p className="text-xs text-[#689F38]">
                  Revisamos cada mensaje para seguir mejorando nuestros recursos gratuitos para la comunidad.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-[#FFF8F0] p-8 sm:p-10 rounded-3xl border border-[#F4C542]/40 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#8BC34A] text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#2D3748]">¡Mensaje enviado con éxito!</h3>
                <p className="text-sm text-[#718096] max-w-md mx-auto">
                  Muchas gracias por escribirnos, <strong>{formData.name}</strong>. Hemos recibido tus sugerencias sobre nuestro contenido educativo.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', topic: 'Consulta sobre contenido', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-2xl font-bold text-xs text-white bg-[#F28C28] hover:bg-[#D87015] transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                <div>
                  <label className="block text-xs font-bold text-[#2D3748] mb-2" htmlFor="name">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      id="name"
                      type="text"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-[#F4C542]/40 text-sm text-[#2D3748] placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#F28C28]"
                    />
                  </div>
                  {errors.name && <p className="text-xs text-rose-500 mt-1 font-semibold">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2D3748] mb-2" htmlFor="email">
                    Correo electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      placeholder="ejemplo@correo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-[#F4C542]/40 text-sm text-[#2D3748] placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#F28C28]"
                    />
                  </div>
                  {errors.email && <p className="text-xs text-rose-500 mt-1 font-semibold">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2D3748] mb-2" htmlFor="topic">
                    Tema o Motivo
                  </label>
                  <select
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#F4C542]/40 text-sm text-[#2D3748] focus:outline-hidden focus:ring-2 focus:ring-[#F28C28]"
                  >
                    <option value="Consulta sobre contenido">Sugerencia sobre artículos</option>
                    <option value="Pregunta sobre recetas">Pregunta sobre recetas</option>
                    <option value="Retroalimentación general">Retroalimentación general</option>
                    <option value="Colaboración educativa">Colaboración educativa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2D3748] mb-2" htmlFor="message">
                    Mensaje o Sugerencia *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Escribe aquí tu duda o sugerencia..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-[#F4C542]/40 text-sm text-[#2D3748] placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#F28C28]"
                    />
                  </div>
                  {errors.message && <p className="text-xs text-rose-500 mt-1 font-semibold">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#F28C28] to-[#F4C542] hover:opacity-95 shadow-lg shadow-[#F28C28]/25 transition-all flex items-center justify-center gap-2"
                  id="btn-submit-contact"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar mensaje</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
