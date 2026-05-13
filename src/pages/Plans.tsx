import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, ShieldCheck, Zap, Heart, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const adultPlans = [
  {
    title: 'Mensal',
    price1: '399',
    price2: '449',
    price3: '489',
    tag: 'Flexível',
  },
  {
    title: 'Trimestral',
    price1: '369',
    price2: '419',
    price3: '449',
    tag: 'Popular',
    featured: true,
  },
  {
    title: 'Semestral',
    price1: '319',
    price2: '349',
    price3: '389',
    tag: 'Econômico',
  },
  {
    title: 'Anual',
    price1: '269',
    price2: '299',
    price3: '339',
    tag: 'Melhor Valor',
  },
];

const kidsPlans = [
  { title: 'Mensal', price1: '270', price2: '320' },
  { title: 'Trimestral', price1: '240', price2: '290' },
  { title: 'Semestral', price1: '210', price2: '260' },
  { title: 'Anual', price1: '185', price2: '230' },
];

const maternityPlans = [
  {
    title: 'Mensal',
    price1: '319',
    price2: '419',
    price3: '489',
  },
  {
    title: 'Trimestral',
    price1: '309',
    price2: '409',
    price3: '499',
    discount: '5% de desconto à vista',
  },
  {
    title: 'Semestral',
    price1: '279',
    price2: '379',
    price3: '479',
    discount: '5% de desconto à vista',
  },
  {
    title: 'Anual',
    price1: '239',
    price2: '329',
    price3: '379',
    discount: '5% de desconto à vista',
  },
];

const personalMariPlans = [
  { title: 'Trimestral', price1: '510', price2: '670' },
  { title: 'Semestral', price1: '480', price2: '640' },
];

export default function Plans() {
  return (
    <div className="pt-32 pb-20">
      <Helmet>
        <title>Pilates Plans Campinas | Pilates Prices & Fitness Packages | Mari Moreira</title>
        <meta name="description" content="Explore our flexible pilates plans in Campinas. Check pilates prices for adults, kids, and dancers. Find the perfect fitness packages and invest in your well-being today at Mari Moreira Pilates." />
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
            Planos e Investimentos
          </motion.h1>
          <p className="text-muted text-lg">
            Escolha o plano ideal para sua rotina e comece sua jornada com mais saúde e bem-estar.
          </p>
        </div>

        {/* Value Proposition */}
        <section className="bg-white rounded-[40px] p-12 shadow-sm border border-primary/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Por que investir em Pilates?</h2>
              <ul className="space-y-4">
                {[
                  { icon: <TrendingUp className="text-primary" />, text: 'Melhora da postura' },
                  { icon: <ShieldCheck className="text-primary" />, text: 'Redução de dores' },
                  { icon: <Zap className="text-primary" />, text: 'Fortalecimento muscular' },
                  { icon: <Sparkles className="text-primary" />, text: 'Mais disposição' },
                  { icon: <Heart className="text-primary" />, text: 'Cuidado com corpo e mente' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-soft rounded-full flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-medium text-ink">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-bg-soft p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-primary">Informações Importantes</h3>
              <div className="space-y-4 text-sm text-muted">
                <p className="flex justify-between border-b border-primary/10 pb-2">
                  <span>Matrícula Adulto:</span>
                  <span className="font-bold text-ink">R$ 70,00</span>
                </p>
                <p className="flex justify-between border-b border-primary/10 pb-2">
                  <span>Matrícula Kids:</span>
                  <span className="font-bold text-ink">R$ 50,00</span>
                </p>
                <p className="text-xs italic">
                  * Pagamentos à vista consulte condições especiais de desconto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Adult Plans */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Planos Adulto</h2>
            <p className="text-muted">Valores mensais de acordo com a frequência semanal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adultPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`card-shadow p-8 space-y-8 relative flex flex-col ${plan.featured ? 'border-2 border-primary ring-4 ring-primary/5 scale-105 z-10' : ''}`}
              >
                {plan.tag && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-full">
                    {plan.tag}
                  </span>
                )}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <div className="w-12 h-1 bg-soft mx-auto rounded-full" />
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-muted">1x semana</span>
                    <span className="text-xl font-bold text-primary">R$ {plan.price1}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-muted">2x semana</span>
                    <span className="text-xl font-bold text-primary">R$ {plan.price2}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-muted">3x semana</span>
                    <span className="text-xl font-bold text-primary">R$ {plan.price3}</span>
                  </div>
                </div>

                <a
                  href={`https://api.whatsapp.com/send?phone=5519983741258&text=Olá!%20Gostaria%20de%20contratar%20o%20plano%20Adulto%20${plan.title}.`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3 rounded-full font-bold text-sm transition-all text-center ${plan.featured ? 'bg-primary text-white hover:bg-primary-hover' : 'bg-soft text-primary hover:bg-primary hover:text-white'}`}
                >
                  Escolher Plano
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Maternity Plans */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Planos Gestantes e Pós-parto</h2>
            <p className="text-muted">Acompanhamento especializado para este momento único.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maternityPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-shadow p-8 space-y-8 relative flex flex-col border-t-4 border-primary/20"
              >
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <div className="w-12 h-1 bg-soft mx-auto rounded-full" />
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-muted">1x semana</span>
                    <span className="text-xl font-bold text-primary">R$ {plan.price1}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-muted">2x semana</span>
                    <span className="text-xl font-bold text-primary">R$ {plan.price2}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-muted">3x semana</span>
                    <span className="text-xl font-bold text-primary">R$ {plan.price3}</span>
                  </div>
                  {plan.discount && (
                    <div className="pt-4 text-center">
                      <span className="text-[10px] uppercase font-bold text-primary bg-soft px-3 py-1 rounded-full">
                        {plan.discount}
                      </span>
                    </div>
                  )}
                </div>

                <a
                  href={`https://api.whatsapp.com/send?phone=5519983741258&text=Olá!%20Gostaria%20de%20contratar%20o%20plano%20Gestante%20${plan.title}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-full font-bold text-sm transition-all text-center bg-soft text-primary hover:bg-primary hover:text-white"
                >
                  Escolher Plano
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Kids & Personal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kids Plans */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Planos Kids</h2>
            <div className="bg-white rounded-3xl shadow-sm border border-primary/5 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-soft/50">
                  <tr>
                    <th className="p-4 font-serif italic">Período</th>
                    <th className="p-4 font-serif italic">1x semana</th>
                    <th className="p-4 font-serif italic">2x semana</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/5">
                  {kidsPlans.map((plan, i) => (
                    <tr key={i} className="hover:bg-bg-soft transition-colors">
                      <td className="p-4 font-medium">{plan.title}</td>
                      <td className="p-4 text-primary font-bold">R$ {plan.price1}</td>
                      <td className="p-4 text-primary font-bold">R$ {plan.price2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pilates Personal Mari */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Pilates Personal Mari</h2>
            <div className="bg-white rounded-3xl shadow-sm border border-primary/5 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-soft/50">
                  <tr>
                    <th className="p-4 font-serif italic">Período</th>
                    <th className="p-4 font-serif italic">1x semana</th>
                    <th className="p-4 font-serif italic">2x semana</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/5">
                  {personalMariPlans.map((plan, i) => (
                    <tr key={i} className="hover:bg-bg-soft transition-colors">
                      <td className="p-4 font-medium">{plan.title}</td>
                      <td className="p-4 text-primary font-bold">R$ {plan.price1}</td>
                      <td className="p-4 text-primary font-bold">R$ {plan.price2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-6 bg-bg-soft border-t border-primary/5">
                <p className="text-sm font-bold text-primary mb-2">Avaliação:</p>
                <p className="text-xs text-muted leading-relaxed">
                  R$ 150,00 a avaliação. Caso o aluno feche algum plano, a avaliação tem um desconto de 50% na mensalidade do 1º mês.
                </p>
              </div>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=5519983741258&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Pilates%20Personal%20Mari."
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-primary text-white py-4 rounded-full font-bold text-center hover:bg-primary-hover transition-colors shadow-lg"
            >
              Consultar Disponibilidade
            </a>
          </section>
        </div>

        {/* Final CTA */}
        <section className="text-center space-y-8 py-12">
          <h2 className="text-3xl font-bold">Comece hoje a cuidar do seu corpo com acompanhamento profissional e atenção individual.</h2>
          <a
            href="https://api.whatsapp.com/send?phone=5519983741258&text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20experimental."
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-block text-lg px-12"
          >
            Agendar aula experimental
          </a>
        </section>
      </div>
    </div>
  );
}
