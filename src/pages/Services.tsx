import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface Service {
  title: string;
  subtitle: string;
  desc: string;
  benefits: string[];
  image: string;
  objectFit?: string;
}

const servicesList: Service[] = [
  {
    title: 'Pilates Geral',
    subtitle: 'Para Homens e Mulheres',
    desc: 'O método clássico adaptado para as necessidades do dia a dia moderno. Foco em fortalecimento do core (Powerhouse), melhora da postura e flexibilidade.',
    benefits: ['Fortalecimento muscular global', 'Alívio de dores nas costas', 'Melhora da consciência corporal', 'Redução do estresse'],
    image: 'https://lh3.googleusercontent.com/d/1P5_Rcj0C5Ji2D4yDQgDBkmp6tdKredQZ',
  },
  {
    title: 'Gestantes e Pós-parto',
    subtitle: 'Cuidado Especializado',
    desc: 'Acompanhamento seguro durante toda a gestação, preparando o corpo para o parto e auxiliando na recuperação abdominal e postural no puerpério.',
    benefits: ['Prevenção de diástase', 'Alívio de dores lombares', 'Melhora da circulação', 'Recuperação pós-parto acelerada'],
    image: 'https://lh3.googleusercontent.com/d/1vCzwfQyXpIUhzPooN0vtgEPgKOwDOMAz',
  },
  {
    title: 'Pilates Kids',
    subtitle: 'Desenvolvimento Saudável',
    desc: 'Atividades lúdicas que trabalham a postura, o equilíbrio e a coordenação motora das crianças, prevenindo problemas futuros.',
    benefits: ['Correção postural precoce', 'Melhora da concentração', 'Desenvolvimento motor', 'Combate ao sedentarismo infantil'],
    image: 'https://lh3.googleusercontent.com/d/1oKOd9gM10WI2Zltd2QjvJ52wn6ZGF942',
  },
  {
    title: 'Reabilitação',
    subtitle: 'Fisioterapia e Movimento',
    desc: 'Tratamento focado em lesões, pós-operatórios e patologias da coluna, utilizando o Pilates como ferramenta terapêutica.',
    benefits: ['Recuperação de lesões', 'Tratamento de hérnias', 'Melhora da mobilidade articular', 'Prevenção de recidivas'],
    image: 'https://lh3.googleusercontent.com/d/15pT9xWwWrJJ0PyixIhxWBBJtgV_k0NLL',
  },
  {
    title: 'Personal Bailarino(a)',
    subtitle: 'Performance e Prevenção',
    desc: 'Trabalho específico voltado para as necessidades de bailarinos, focando em flexibilidade, força explosiva, alinhamento e prevenção de lesões típicas da dança.',
    benefits: ['Melhora da amplitude de movimento', 'Fortalecimento específico para saltos', 'Prevenção de lesões de tornozelo e quadril', 'Aprimoramento do equilíbrio'],
    image: 'https://lh3.googleusercontent.com/d/14Vwp1zvGjzcYKtWiE0hEe-pnYPX_sfbl',
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <Helmet>
        <title>Serviços de Pilates em Campinas | Gestantes, Kids, Reabilitação e Bailarinos</title>
        <meta name="description" content="Confira nossas modalidades de Pilates em Campinas: Pilates Geral, Gestantes e Pós-parto, Pilates Kids, Reabilitação e treinamento especializado para Bailarinos." />
        <meta property="og:image" content="https://lh3.googleusercontent.com/d/1H6iKrs-QUjTwbtldzbHnOuJj8eMq3A7g" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-ink"
          >
            Nossos Serviços
          </motion.h1>
          <p className="text-muted text-lg">
            Oferecemos diferentes modalidades para atender você em cada etapa da sua jornada de saúde.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-32">
          {servicesList.map((service, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 space-y-8"
              >
                <div className="space-y-2">
                  <span className="text-primary font-semibold uppercase tracking-widest text-sm">{service.subtitle}</span>
                  <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap">{service.title}</h2>
                </div>
                <p className="text-muted leading-relaxed text-lg">{service.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center space-x-2">
                      <CheckCircle2 className="text-primary shrink-0" size={20} />
                      <span className="text-sm font-medium text-ink">{benefit}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=5519983741258&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Pilates.%20Pode%20me%20ajudar?"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary inline-block"
                >
                  Quero saber mais
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className={`rounded-[40px] shadow-2xl w-full aspect-[192/135] ${service.objectFit || 'object-cover'} bg-muted`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
