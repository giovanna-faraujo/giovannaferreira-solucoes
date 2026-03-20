import { motion } from "framer-motion";
import DashboardCard from "./DashboardCard";
import PousadasDashboard from "./dashboards/PousadasDashboard";
import ImobiliarioDashboard from "./dashboards/ImobiliarioDashboard";
import VarejoTurismoDashboard from "./dashboards/VarejoTurismoDashboard";
import FinanceiroDashboard from "./dashboards/FinanceiroDashboard";
import ComercialDashboard from "./dashboards/ComercialDashboard";
import RHDashboard from "./dashboards/RHDashboard";

const dashboards = [
  {
    title: "Pousadas e Hotelaria",
    description: "Gestão de ocupação, previsão de faturamento, reservas e sazonalidade para melhorar a rentabilidade da sua hospedagem.",
    component: PousadasDashboard,
  },
  {
    title: "Mercado Imobiliário",
    description: "Valorização de m², performance de vendas, comparativos regionais e indicadores de conversão para decisões mais assertivas.",
    component: ImobiliarioDashboard,
  },
  {
    title: "Varejo e Turismo",
    description: "Análise de ticket médio, giro de estoque, sazonalidade e tendências para otimizar vendas e operação.",
    component: VarejoTurismoDashboard,
  },
  {
    title: "Painel Financeiro",
    description: "Visão clara de receitas, despesas, saldo e comparativos mensais para organizar melhor sua gestão financeira.",
    component: FinanceiroDashboard,
  },
  {
    title: "Painel Comercial e de Vendas",
    description: "Acompanhe metas, faturamento, ticket médio e desempenho das vendas para encontrar oportunidades de crescimento.",
    component: ComercialDashboard,
  },
  {
    title: "Indicadores de RH",
    description: "Monitore admissões, desligamentos, absenteísmo e outros indicadores importantes para apoiar a gestão de pessoas.",
    component: RHDashboard,
  },
];

const Portfolio = () => {
  return (
    <section id="paineis" className="py-28 md:py-36 relative">
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
            Exemplos de painéis que posso criar para o seu <span className="text-gradient-cyan">negócio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base">
            Painéis visuais, organizados e fáceis de entender para acompanhar resultados e apoiar decisões no dia a dia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {dashboards.map((d, i) => (
            <DashboardCard key={i} title={d.title} description={d.description} delay={i}>
              <d.component />
            </DashboardCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
