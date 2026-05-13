import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const gallery = [
  { title: 'Nosso Espaço', img: 'https://lh3.googleusercontent.com/d/1CrurXJ0FlOdO6m2zzvILwZe6LG7F8TtZ' },
  { title: 'Ambiente Acolhedor', img: 'https://lh3.googleusercontent.com/d/1Rmb3GcP5_8ekv04hax0x_loDpHWLEMtq' },
  { title: 'Estrutura Moderna', img: 'https://lh3.googleusercontent.com/d/1dsVLpKna2LzSwORtVgwM6bqa8cEix9To' },
  { title: 'Equipamentos Premium', img: 'https://lh3.googleusercontent.com/d/1iOL6vF5dDWFcOnURlSrZIIovMEdyeSuM' },
  { title: 'Conforto e Segurança', img: 'https://lh3.googleusercontent.com/d/1koYO-rv1cwS0zqrZnkttBWgxkHclxgR1' },
  { title: 'Cuidado Especializado', img: 'https://lh3.googleusercontent.com/d/197lfIKPgp360JWumGRBK7VAoGyaQ3ffa' },
];

export default function Space() {
  return (
    <div className="pt-32 pb-20">
      <Helmet>
        <title>Nosso Espaço | Estúdio de Pilates no Bosque, Campinas | Estrutura Premium</title>
        <meta name="description" content="Conheça a infraestrutura premium do Stúdio Mari Moreira Pilates em Campinas. Ambiente climatizado, equipamentos modernos, acessibilidade e estacionamento próprio no Bosque." />
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
            Nosso Espaço
          </motion.h1>
          <p className="text-muted text-lg">
            Ambiente acolhedor, estrutura moderna e preparada para oferecer conforto e segurança em cada movimento.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/3]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h3 className="text-white text-xl font-serif italic">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-[40px] p-12 md:p-20 shadow-sm border border-primary/5 text-center space-y-8">
          <h2 className="text-3xl font-bold">Estrutura Completa</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <p className="text-primary font-bold text-xl">100%</p>
              <p className="text-muted text-sm">Climatizado</p>
            </div>
            <div className="space-y-2">
              <p className="text-primary font-bold text-xl">Próprio</p>
              <p className="text-muted text-sm">Estacionamento</p>
            </div>
            <div className="space-y-2">
              <p className="text-primary font-bold text-xl">Premium</p>
              <p className="text-muted text-sm">Equipamentos</p>
            </div>
            <div className="space-y-2">
              <p className="text-primary font-bold text-xl">Seguro</p>
              <p className="text-muted text-sm">Acessibilidade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
