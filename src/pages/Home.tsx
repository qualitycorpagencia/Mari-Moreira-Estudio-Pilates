import { motion } from 'motion/react';
import { ArrowRight, Heart, Users, Sparkles, ShieldCheck, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ContactSection from '../components/ContactSection';

const services = [
  {
    title: 'Pilates Geral',
    desc: 'Foco em homens e mulheres que buscam força, flexibilidade e consciência corporal.',
    icon: <Users className="text-primary" size={32} />,
  },
  {
    title: 'Gestantes e Pós-parto',
    desc: 'Cuidado especializado para as transformações do corpo feminino nesta fase única.',
    icon: <Heart className="text-primary" size={32} />,
  },
  {
    title: 'Pilates Kids',
    desc: 'Desenvolvimento motor e postural lúdico para crianças em crescimento.',
    icon: <Sparkles className="text-primary" size={32} />,
  },
  {
    title: 'Reabilitação',
    desc: 'Tratamento de patologias e dores crônicas através do movimento controlado.',
    icon: <ShieldCheck className="text-primary" size={32} />,
  },
  {
    title: 'Personal Bailarino(a)',
    desc: 'Trabalho específico para as necessidades de bailarinos, focando em performance e prevenção.',
    icon: <Star className="text-primary" size={32} />,
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Mari Moreira Pilates | Estúdio de Pilates em Campinas (Bosque)</title>
        <meta name="description" content="Estúdio de Pilates em Campinas especializado em mulheres, gestantes, pós-parto e reabilitação. Melhore sua postura, força e flexibilidade. Agende uma aula experimental!" />
        <meta property="og:title" content="Mari Moreira Pilates | Estúdio de Pilates em Campinas" />
        <meta property="og:description" content="Estúdio de Pilates em Campinas especializado em mulheres, gestantes e reabilitação. Agende sua aula experimental hoje!" />
        <meta property="og:image" content="https://lh3.googleusercontent.com/d/1H6iKrs-QUjTwbtldzbHnOuJj8eMq3A7g" />
        <meta property="og:url" content="https://mari-moreira-pilates.run.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/d/15gwx9_jMsc8lSsAxBSGd4RKm278fmXJY"
            alt="Mari Moreira Estúdio"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority="high"
          />
          {/* Subtle Mask/Overlay - Increased for better pink text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
          {/* Bottom Mask/Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-soft via-bg-soft/20 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl space-y-6"
          >
            <div className="space-y-4">
              <span className="text-white/70 font-medium tracking-[0.2em] uppercase text-[10px] border-l border-primary pl-4">
                Flexibilidade • Força • Resistência
              </span>
              <p className="text-[18px] leading-[1.4] font-normal text-white/90 max-w-md">
                Um espaço dedicado ao cuidado do corpo e da mente, com atendimento especializado para mulheres, gestantes, puérperas, homens, kids, atletas e bailarinos(as) e reabilitação.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/servicos" className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-full font-bold transition-all text-center">
                Conheça nossos serviços
              </Link>
            </div>
          </motion.div>

          {/* Large Logo on the Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative shrink-0"
          >
            <div className="w-[500px] h-[500px] flex items-center justify-center group transition-all duration-500">
              <img 
                src="https://lh3.googleusercontent.com/d/1hYMjsDyju7x5INEifhCbXhUT42RrPiTS" 
                alt="Logo" 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Summary */}
      <section id="sobre" className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">O Stúdio Mari Moreira</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
          <p className="text-xl text-muted leading-relaxed italic">
            "Um espaço dedicado ao cuidado do corpo e da mente, onde cada aluno(a) pode se sentir acolhido e cuidado de forma integral. Nossa abordagem une o método Pilates com a expertise em educação física, promovendo equilíbrio, saúde e bem-estar."
          </p>
          <Link to="/sobre" className="inline-flex items-center text-primary font-semibold hover:underline group">
            Saiba mais sobre nossa história <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicos" className="section-padding bg-bg-soft">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Nossos Serviços</h2>
            <p className="text-muted max-w-2xl mx-auto">Soluções personalizadas para cada necessidade, do condicionamento físico à reabilitação.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card-shadow p-8 space-y-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-soft rounded-2xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold whitespace-nowrap">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed flex-grow">{service.desc}</p>
                <Link to="/servicos" className="text-primary font-medium text-sm hover:underline">Saiba mais</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Cuidado especializado para cada fase da sua vida</h2>
              <p className="text-muted leading-relaxed">
                Aqui, cada aluno é tratado de forma única. Nosso trabalho vai além do exercício: cuidamos da sua saúde, da sua postura e do seu bem-estar físico e emocional.
              </p>
            </div>
            
            <ul className="space-y-4">
              {[
                'Atendimento personalizado',
                'Ambiente acolhedor',
                'Estrutura completa',
                'Estacionamento próprio'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-soft rounded-full flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="font-medium text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img 
              src="https://lh3.googleusercontent.com/d/197lfIKPgp360JWumGRBK7VAoGyaQ3ffa" 
              className="rounded-2xl shadow-2xl w-full aspect-video object-cover" 
              alt="Cuidado Especializado" 
              referrerPolicy="no-referrer" 
              loading="lazy"
              decoding="async"
            />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-soft/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Space Preview */}
      <section id="espaco" className="section-padding bg-bg-soft">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Nosso Espaço</h2>
              <p className="text-muted">Um ambiente pensado para o seu conforto e segurança.</p>
            </div>
            <Link to="/espaco" className="btn-secondary py-2 px-6 text-sm">Ver galeria completa</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="https://lh3.googleusercontent.com/d/1CrurXJ0FlOdO6m2zzvILwZe6LG7F8TtZ" className="rounded-3xl h-64 w-full object-cover shadow-md" alt="Espaço" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            <img src="https://lh3.googleusercontent.com/d/1Rmb3GcP5_8ekv04hax0x_loDpHWLEMtq" className="rounded-3xl h-64 w-full object-cover shadow-md md:mt-12" alt="Espaço" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            <img src="https://lh3.googleusercontent.com/d/1dsVLpKna2LzSwORtVgwM6bqa8cEix9To" className="rounded-3xl h-64 w-full object-cover shadow-md" alt="Espaço" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* Team Summary */}
      <section id="equipe" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="space-y-4 text-center">
              <img src="https://lh3.googleusercontent.com/d/1glpfxXToere6kClSPfi2weR1EbzRe2l8" className="rounded-full w-full aspect-square object-cover border-4 border-soft" alt="Mariana" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <h4 className="font-bold text-lg">Mariana Moreira</h4>
              <p className="text-xs text-muted uppercase tracking-wider">Educadora Física</p>
            </div>
            <div className="space-y-4 text-center mt-12">
              <img src="https://lh3.googleusercontent.com/d/158OK9TRGqrQI83PwNwuxywfqhszaaU24" className="rounded-full w-full aspect-square object-cover border-4 border-soft" alt="Carina" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <h4 className="font-bold text-lg">Carina</h4>
              <p className="text-xs text-muted uppercase tracking-wider">Fisioterapeuta</p>
            </div>
            <div className="space-y-4 text-center">
              <img src="https://lh3.googleusercontent.com/d/1V-eLx_zBkzh4IDB3j0IWxhFvA2y4JDMU" className="rounded-full w-full aspect-square object-cover border-4 border-soft" alt="Abner" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <h4 className="font-bold text-lg">Abner</h4>
              <p className="text-xs text-muted uppercase tracking-wider">Fisioterapeuta</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Profissionais que cuidam de você</h2>
            <p className="text-muted leading-relaxed">
              Nossa equipe é formada por especialistas apaixonadas pelo que fazem. Combinamos conhecimento técnico com um olhar humanizado para garantir os melhores resultados.
            </p>
            <Link to="/equipe" className="btn-primary inline-block">Conheça nossos treinadores</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section-padding bg-bg-soft">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-serif">Entre em Contato</h2>
            <p className="text-muted text-lg">
              Agende sua aula experimental ou tire suas dúvidas. Estamos prontos para te atender.
            </p>
          </div>
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
