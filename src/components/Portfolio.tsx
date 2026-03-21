import { motion } from "framer-motion";
import { BarChart3, Zap } from "lucide-react";
import DashboardCard from "./DashboardCard";
import PousadasDashboard from "./dashboards/PousadasDashboard";
import ImobiliarioDashboard from "./dashboards/ImobiliarioDashboard";
import VarejoDashboard from "./dashboards/VarejoDashboard";

const solutions = [
  {
    dashboard: {
      title: "Gestão de Ocupação e Reservas",
      description: "Monitoramento de taxa de ocupação, origem de hóspedes e previsão de faturamento para alta temporada.",
      component: PousadasDashboard,
    },
    automation: {
      title: "Automação de confirmação e acompanhamento de reservas",
      description: "Automatização de notificações, organização de status de reservas e atualização de controles para reduzir processos manuais no atendimento e na operação.",
    },
  },
  {
    dashboard: {
      title: "Performance Imobiliária",
      description: "Análise de valorização de m², tempo médio de venda e gestão de carteira de imóveis.",
      component: ImobiliarioDashboard,
    },
    automation: {
      title: "Automação de atualização de carteira e follow-up",
      description: "Organização automática de informações de imóveis, atualização de status e apoio ao acompanhamento comercial de leads, visitas e negociações.",
    },
  },
  {
    dashboard: {
      title: "Inteligência de Vendas",
      description: "Acompanhamento de giro de estoque, ticket médio por cliente e performance de produtos sazonais.",
      component: VarejoDashboard,
    },
    automation: {
      title: "Automação de alertas e controle operacional",
      description: "Automatização de alertas para estoque, consolidação de informações e apoio ao controle de produtos com maior giro ou sazonalidade.",
    },
  },
];

const Portfolio = () => {
  return (
    <section id="solucoes" className="py-28 md:py-36 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-5">
            Exemplos de soluções com dashboards e <span className="text-gradient-cyan">automações</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base">
            Além de criar dashboards claros e personalizados, também posso estruturar automações que ajudam a organizar processos, reduzir tarefas manuais e tornar o acompanhamento dos resultados mais eficiente.
          </p>
        </motion.div>

        <div className="space-y-12">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch"
            >
              {/* Dashboard - 3 cols */}
              <div className="lg:col-span-3">
                <DashboardCard title={s.dashboard.title} description={s.dashboard.description}>
                  <s.dashboard.component />
                </DashboardCard>
              </div>

              {/* Automation - 2 cols */}
              <div className="lg:col-span-2 flex">
                <div className="card-surface card-surface-hover p-6 md:p-8 flex flex-col justify-center w-full">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/[0.08] border border-primary/[0.12] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-mono font-medium text-primary bg-primary/[0.06] px-2 py-0.5 rounded-full">
                      Processo automatizado
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3 tracking-tight">{s.automation.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.automation.description}</p>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground/70">
                      <BarChart3 className="w-3 h-3" />
                      <span>Visualização dos dados</span>
                      <span className="mx-1">+</span>
                      <Zap className="w-3 h-3" />
                      <span>Processo automatizado</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-sm text-muted-foreground/70 mt-14 max-w-xl mx-auto"
        >
          Cada solução pode ser adaptada conforme a realidade do seu negócio, combinando dashboards, automações ou os dois.
        </motion.p>
      </div>
    </section>
  );
};

export default Portfolio;
