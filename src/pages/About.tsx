import { motion } from 'motion/react';
import { Target, Eye, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <Helmet>
        <title>Nossa História | Mari Moreira Pilates Campinas | 15+ Anos de Experiência</title>
        <meta name="description" content="Saiba mais sobre o Stúdio Mari Moreira em Campinas. Com 15 anos de tradição no bairro Bosque, somos especialistas em Pilates para gestantes, bailarinos e reabilitação." />
        <meta property="og:image" content="https://lh3.googleusercontent.com/d/1H6iKrs-QUjTwbtldzbHnOuJj8eMq3A7g" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-ink"
          >
            Nossa História
          </motion.h1>
          <p className="text-muted text-lg">
            Há 15 anos transformando vidas através do método Pilates em Campinas.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              O Stúdio Mari Moreira nasceu do desejo de criar um refúgio de bem-estar, onde cada aluno(a) pudesse se sentir acolhida e cuidada de forma integral. Com mais de 15 anos de trajetória, consolidamos nossa autoridade no bairro Bosque, em Campinas.
            </p>
            <p>
              Nossa fundadora, Mariana Moreira, é educadora física Pós Graduada em Pilates, especialista em Gestante Pós Parto e Bailarinos(a). Ao longo dos anos, preparou sua equipe para atender todos os nichos e hoje ela está a frente da preparação física de bailarinos.
            </p>
            <p>
              Acreditamos que o Pilates é muito mais que um exercício físico; é uma ferramenta de autoconhecimento, reabilitação e fortalecimento, tanto físico quanto emocional. Nossa missão é proporcionar uma experiência premium, onde a técnica rigorosa se une ao carinho e à atenção individualizada.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://lh3.googleusercontent.com/d/1PMxepAji9-uWoTUWrmKTWoqoOG0Gfz2f"
              alt="História do Studio"
              className="rounded-[40px] shadow-2xl w-full aspect-[192/135] object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute -bottom-10 -right-10 bg-primary text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold font-serif">15+</p>
              <p className="text-sm uppercase tracking-widest">Anos de Experiência</p>
            </div>
          </div>
        </div>

        {/* Mission Vision Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          <div className="card-shadow p-10 space-y-6 text-center">
            <div className="w-16 h-16 bg-soft rounded-full flex items-center justify-center mx-auto">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold">Missão</h3>
            <p className="text-muted text-sm leading-relaxed">
              Promover saúde e qualidade de vida através do Pilates, oferecendo um atendimento humanizado e técnico para todos os alunos em todas as suas fases.
            </p>
          </div>
          <div className="card-shadow p-10 space-y-6 text-center">
            <div className="w-16 h-16 bg-soft rounded-full flex items-center justify-center mx-auto">
              <Eye className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold">Visão</h3>
            <p className="text-muted text-sm leading-relaxed">
              Ser referência em Campinas no cuidado especializado para mulheres, gestantes, puérperas, homens, kids, atletas e bailarinos(as) e reabilitação, sendo reconhecida pela excelência e acolhimento.
            </p>
          </div>
          <div className="card-shadow p-10 space-y-6 text-center">
            <div className="w-16 h-16 bg-soft rounded-full flex items-center justify-center mx-auto">
              <Heart className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold">Valores</h3>
            <p className="text-muted text-sm leading-relaxed">
              Ética profissional, respeito à individualidade, compromisso com resultados, acolhimento humanizado e atualização técnica constante.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
