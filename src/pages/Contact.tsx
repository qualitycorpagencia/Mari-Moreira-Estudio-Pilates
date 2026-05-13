import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import ContactSection from '../components/ContactSection';

export default function Contact() {
  return (
    <div className="pt-32 pb-20">
      <Helmet>
        <title>Contato e Localização | Agende sua Aula de Pilates em Campinas</title>
        <meta name="description" content="Entre em contato com o Stúdio Mari Moreira Pilates no Bosque, Campinas. Agende sua aula experimental via formulário ou WhatsApp e venha conhecer nosso espaço." />
        <meta property="og:image" content="https://lh3.googleusercontent.com/d/1H6iKrs-QUjTwbtldzbHnOuJj8eMq3A7g" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-ink"
          >
            Contato
          </motion.h1>
          <p className="text-muted text-lg">
            Estamos prontos para tirar suas dúvidas e agendar sua primeira aula.
          </p>
        </div>

        <ContactSection />
      </div>
    </div>
  );
}
