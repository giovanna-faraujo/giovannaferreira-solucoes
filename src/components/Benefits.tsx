import { motion } from "framer-motion";
import { BarChart3, LayoutDashboard, Zap, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Decisões com mais clareza",
    text: "Tenha uma visão mais organizada do seu negócio e use informações reais para acompanhar resultados e tomar decisões com mais segurança.",
    tag: "Dados",
  },
  {
    icon: LayoutDashboard,
    title: "Resultados fáceis de acompanhar",
    text: "Visualize vendas, custos, metas, produtividade ou outros indicadores importantes em painéis claros, organizados e fáceis de entender.",
    tag: "Dados",
  },
  {
    icon: Zap,
    title: "Menos tarefas manuais",
    text: "Automatize processos repetitivos para economizar tempo, reduzir retrabalho e tornar a rotina mais prática e eficiente.",
    tag: "Automação",
  },
  {
    icon: RefreshCw,
    title: "Mais agilidade no dia a dia",
    text: "Com fluxos automatizados e informações organizadas, sua equipe ganha mais produtividade e consegue focar no que realmente importa.",
    tag: "Automação",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-28 md:py-36 relative">
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
            Como dados e automações podem ajudar seu <span className="text-gradient-cyan">negócio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base">
            Com informações bem organizadas e processos mais eficientes, fica mais fácil acompanhar resultados, reduzir tarefas manuais e tomar decisões com mais clareza no dia a dia.
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
              <div className="flex items-center gap-2 mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/[0.08] border border-primary/[0.12] flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-mono font-medium text-primary bg-primary/[0.06] px-2 py-0.5 rounded-full">
                  {b.tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3 tracking-tight">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center text-sm text-muted-foreground/70 mt-12 max-w-xl mx-auto"
        >
          Soluções que ajudam você a enxergar melhor os números e melhorar processos do dia a dia com mais organização.
        </motion.p>
      </div>
    </section>
  );
};

export default Benefits;
