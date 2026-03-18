import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, LayoutDashboard, Target } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Decisões com mais segurança",
    text: "Tenha uma visão mais clara do seu negócio e use informações reais para decidir com mais confiança.",
  },
  {
    icon: BarChart3,
    title: "Mais clareza nos resultados",
    text: "Entenda o que está funcionando, o que precisa de atenção e onde existem oportunidades de melhoria.",
  },
  {
    icon: LayoutDashboard,
    title: "Acompanhamento mais simples",
    text: "Visualize vendas, custos, metas ou produtividade em painéis organizados e fáceis de acompanhar.",
  },
  {
    icon: Target,
    title: "Menos achismo, mais direção",
    text: "Com os dados certos em destaque, fica mais fácil agir com foco e melhorar os resultados do dia a dia.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-28 md:py-36 relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-5">
            Como a análise de dados pode ajudar seu <span className="text-gradient-cyan">negócio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base">
            Com informações bem organizadas, fica mais fácil acompanhar resultados, identificar oportunidades e tomar decisões com mais segurança.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="card-surface card-surface-hover p-8"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/[0.08] border border-primary/[0.12] flex items-center justify-center mb-6">
                <b.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3 tracking-tight">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
