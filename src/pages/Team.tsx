import { motion } from 'motion/react';
import { GraduationCap, Award, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const team = [
  {
    name: 'Mariana Moreira',
    role: 'Educadora Física & Fundadora',
    bio: 'Educadora física e pós graduada em pilates! Especializada em gestante pós parto desde 2013. Especializada em Pilates para bailarinos desde 2023 e atualmente atende de forma individual presencialmente bailarinos de Campinas e região em seu estúdio e tb de forma on-line bailarinos de qualquer lugar do mundo!',
    specialties: ['Gestante pós parto e Diástase', 'Clínico', 'Bailarinos(as)', 'Crianças'],
    image: 'https://lh3.googleusercontent.com/d/1glpfxXToere6kClSPfi2weR1EbzRe2l8',
  },
  {
    name: 'Carina',
    role: 'Fisioterapeuta & Instrutora',
    bio: 'Fisioterapeuta especialista em neurologia e reabilitação. Carina traz para o estúdio um olhar clínico apurado, focado na recuperação funcional e no tratamento de patologias complexas através do método Pilates. Sua abordagem une a precisão da fisioterapia com a fluidez do movimento.',
    specialties: ['Gestante e pós parto', 'Reabilitação Neurológica', 'Patologias da Coluna', 'Fisioterapia Traumato-Ortopédica', 'Pilates Terapêutico'],
    image: 'https://lh3.googleusercontent.com/d/158OK9TRGqrQI83PwNwuxywfqhszaaU24',
  },
  {
    name: 'Abner',
    role: 'Fisioterapeuta & Profissional da Dança',
    bio: 'Trabalho unindo fisioterapia, Pilates e arte do movimento, ajudando pessoas a desenvolverem força, mobilidade, consciência corporal e prevenção de lesões. Especialização em reabilitação de LCA e menisco em atletas, com foco no retorno seguro ao movimento e ao desempenho físico. Meu objetivo é transformar o corpo através do movimento, promovendo saúde, performance e expressão corporal.',
    specialties: ['Bailarinos', 'Reabilitação de LCA e Menisco', 'Pilates para Atletas', 'Arte do Movimento', 'Prevenção de Lesões'],
    image: 'https://lh3.googleusercontent.com/d/1V-eLx_zBkzh4IDB3j0IWxhFvA2y4JDMU',
  },
];

export default function Team() {
  return (
    <div className="pt-32 pb-20">
      <Helmet>
        <title>Nossa Equipe | Especialistas em Pilates e Fisioterapia em Campinas</title>
        <meta name="description" content="Conheça os profissionais do Stúdio Mari Moreira Pilates em Campinas. Educadores físicos e fisioterapeutas especializados no método Pilates para diversas necessidades." />
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
            Nossos Treinadores
          </motion.h1>
          <p className="text-muted text-lg">
            Profissionais qualificados e apaixonados pelo cuidado integral da saúde.
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-32">
          {team.map((member, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-[40px] shadow-2xl w-full aspect-[3/4] object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-primary/5 hidden md:block">
                    <div className="flex items-center space-x-3 text-primary">
                      <Award size={24} />
                      <span className="font-bold">Especialista Certificada</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="text-4xl font-bold text-ink">{member.name}</h2>
                  <p className="text-primary font-semibold uppercase tracking-widest text-sm">{member.role}</p>
                </div>
                
                <p className="text-muted leading-relaxed text-lg italic">
                  "{member.bio}"
                </p>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <GraduationCap className="text-primary" /> Especialidades
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {member.specialties.map((spec, sIdx) => (
                      <span key={sIdx} className="bg-soft text-primary px-4 py-2 rounded-full text-sm font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://api.whatsapp.com/send?phone=5519983741258&text=Olá!%20Gostaria%20de%20falar%20com%20a%20equipe%20do%20estúdio."
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Heart size={20} /> Agendar com {member.name.split(' ')[0]}
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
