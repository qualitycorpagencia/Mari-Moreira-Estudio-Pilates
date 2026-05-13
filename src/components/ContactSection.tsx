import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 10 && digits.length <= 11;
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 11) {
      let formatted = digits;
      if (digits.length > 2) {
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      }
      if (digits.length > 7) {
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
      }
      return formatted;
    }
    return value.slice(0, 15);
  };

  useEffect(() => {
    const newErrors = { name: '', email: '', phone: '' };

    if (touched.name) {
      if (formData.name.length < 3) {
        newErrors.name = 'O nome deve ter pelo menos 3 caracteres';
      }
    }

    if (touched.email) {
      if (!validateEmail(formData.email)) {
        newErrors.email = 'E-mail inválido';
      }
    }

    if (touched.phone) {
      if (!validatePhone(formData.phone)) {
        newErrors.phone = 'Telefone inválido (ex: 19 99999-9999)';
      }
    }

    setErrors(newErrors);
  }, [formData, touched]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, [name]: formatPhone(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Contact Info */}
      <div className="space-y-12">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Fale Conosco</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-soft rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Endereço</h4>
                <p className="text-muted">R. Uruguaiana, 1144/1152 - Bosque, Campinas - SP</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-soft rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Telefone / WhatsApp</h4>
                <p className="text-muted">(19) 98374-1258</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-soft rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">E-mail</h4>
                <p className="text-muted">marimoreira.pilates@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-soft rounded-2xl flex items-center justify-center shrink-0">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Horário de Atendimento</h4>
                <p className="text-muted">Seg a Qui: 7h às 13h e 14h às 21h</p>
                <p className="text-muted">Sex: 7h às 13h e 14h às 20h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-[40px] overflow-hidden shadow-lg h-80 bg-soft border-2 border-primary/5">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.050444391632!2d-47.0514121!3d-22.911524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf6903f75357%3A0x6d88f99e43679f04!2sR.%20Uruguaiana%2C%201144%20-%20Bosque%2C%20Campinas%20-%20SP%2C%2013026-001!5e0!3m2!1spt-BR!2sbr!4v1711167512345!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Mari Moreira Pilates"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-primary/5 space-y-8">
        <h3 className="text-2xl font-bold">Envie uma mensagem</h3>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-ink ml-1">Nome Completo</label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur('name')}
                placeholder="Seu nome"
                className={`w-full px-6 py-4 rounded-2xl bg-bg-soft border outline-none transition-all ${
                  touched.name && errors.name 
                    ? 'border-red-400 focus:ring-red-100' 
                    : touched.name && !errors.name && formData.name.length > 0
                    ? 'border-green-400 focus:ring-green-100'
                    : 'border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/20'
                }`}
              />
              {touched.name && errors.name && (
                <div className="flex items-center gap-1 text-red-500 text-xs mt-1 ml-1">
                  <AlertCircle size={14} />
                  <span>{errors.name}</span>
                </div>
              )}
              {touched.name && !errors.name && formData.name.length > 0 && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                  <CheckCircle2 size={20} />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-ink ml-1">E-mail</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                placeholder="seu@email.com"
                className={`w-full px-6 py-4 rounded-2xl bg-bg-soft border outline-none transition-all ${
                  touched.email && errors.email 
                    ? 'border-red-400 focus:ring-red-100' 
                    : touched.email && !errors.email && formData.email.length > 0
                    ? 'border-green-400 focus:ring-green-100'
                    : 'border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/20'
                }`}
              />
              {touched.email && errors.email && (
                <div className="flex items-center gap-1 text-red-500 text-xs mt-1 ml-1">
                  <AlertCircle size={14} />
                  <span>{errors.email}</span>
                </div>
              )}
              {touched.email && !errors.email && formData.email.length > 0 && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                  <CheckCircle2 size={20} />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-ink ml-1">WhatsApp</label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur('phone')}
                placeholder="(19) 00000-0000"
                className={`w-full px-6 py-4 rounded-2xl bg-bg-soft border outline-none transition-all ${
                  touched.phone && errors.phone 
                    ? 'border-red-400 focus:ring-red-100' 
                    : touched.phone && !errors.phone && formData.phone.length > 0
                    ? 'border-green-400 focus:ring-green-100'
                    : 'border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/20'
                }`}
              />
              {touched.phone && errors.phone && (
                <div className="flex items-center gap-1 text-red-500 text-xs mt-1 ml-1">
                  <AlertCircle size={14} />
                  <span>{errors.phone}</span>
                </div>
              )}
              {touched.phone && !errors.phone && formData.phone.length > 0 && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                  <CheckCircle2 size={20} />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-ink ml-1">Mensagem</label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Como podemos ajudar?"
              className="w-full px-6 py-4 rounded-2xl bg-bg-soft border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={!!(errors.name || errors.email || errors.phone) || !formData.name || !formData.email || !formData.phone}
            className="btn-primary w-full flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} /> Enviar Mensagem
          </button>
        </form>

        <div className="pt-6 border-t border-primary/5 text-center">
          <p className="text-sm text-muted mb-4">Ou se preferir, agende direto pelo WhatsApp:</p>
          <a
            href="https://api.whatsapp.com/send?phone=5519983741258&text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20de%20Pilates."
            target="_blank"
            rel="noreferrer"
            className="text-primary font-bold hover:underline flex items-center justify-center gap-2"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5" alt="WA" />
            (19) 98374-1258
          </a>
        </div>
      </div>
    </div>
  );
}
