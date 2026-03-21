import { motion } from "framer-motion";
import {
  Search,
  GitBranch,
  BarChart3,
  Zap,
  GraduationCap,
  RefreshCw,
  Target,
  FolderOpen,
  FileText,
  Wrench,
} from "lucide-react";

const categories = [
  {
    label: "Estratégia e organização",
    services: [
      {
        icon: Search,
        title: "Consultoria para identificar oportunidades de melhoria",
        description: "Analiso a rotina do seu negócio para identificar quais tarefas podem ser organizadas com dashboards, automações ou com a combinação dos dois. Posso trabalhar com as ferramentas que você já utiliza ou sugerir soluções acessíveis e compatíveis com a sua realidade.",
      },
      {
        icon: GitBranch,
        title: "Mapeamento e organização de processos",
        description: "Estruturo e documento os fluxos das atividades que podem ser automatizadas ou melhor acompanhadas por dados, deixando o processo mais claro, organizado e fácil de executar no dia a dia.",
      },
      {
        icon: Target,
        title: "Definição de indicadores e metas de acompanhamento",
        description: "Ajudo a definir quais números realmente fazem sentido acompanhar no seu negócio, organizando indicadores e metas para facilitar decisões e evitar excesso de informação.",
      },
    ],
  },
  {
    label: "Implantação e estruturação",
    services: [
      {
        icon: BarChart3,
        title: "Organização, tratamento e visualização de dados",
        description: "Organizo a coleta, o tratamento e a estruturação dos dados desde a origem até a visualização final, criando dashboards claros, úteis e alinhados com os indicadores mais importantes para o seu negócio.",
      },
      {
        icon: Zap,
        title: "Automações para reduzir tarefas manuais",
        description: "Desenvolvo automações para simplificar atividades repetitivas, reduzir controles manuais, organizar fluxos e trazer mais agilidade para a rotina da equipe.",
      },
      {
        icon: FolderOpen,
        title: "Organização de informações em um único lugar",
        description: "Reúno dados que hoje estão espalhados em planilhas, sistemas ou controles manuais para criar uma visão mais centralizada, prática e confiável da operação.",
      },
      {
        icon: FileText,
        title: "Relatórios gerenciais e apresentações de resultados",
        description: "Posso transformar os dados em relatórios claros e objetivos para reuniões, acompanhamento de performance, prestação de contas ou apresentações internas.",
      },
    ],
  },
  {
    label: "Suporte e evolução",
    services: [
      {
        icon: GraduationCap,
        title: "Treinamento para uso das ferramentas na prática",
        description: "Após a entrega, posso orientar você e sua equipe sobre como utilizar os dashboards, automações e ferramentas no dia a dia, com explicações claras e foco na aplicação prática da rotina.",
      },
      {
        icon: RefreshCw,
        title: "Acompanhamento contínuo e relatórios periódicos",
        description: "Também posso atuar de forma recorrente no acompanhamento dos dados, análise de resultados e envio de reports diários, semanais ou conforme a necessidade do cliente.",
      },
      {
        icon: Wrench,
        title: "Ajustes e suporte após a implementação",
        description: "Após a entrega da solução, posso acompanhar melhorias, realizar ajustes e adaptar dashboards ou automações conforme o negócio evolui e novas necessidades surgem.",
      },
    ],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-28 md:py-36 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-5">
            Soluções que posso oferecer para o seu <span className="text-gradient-cyan">negócio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base">
            Posso atuar desde a análise da sua rotina e organização dos processos até a criação de dashboards, automações, treinamentos e acompanhamento recorrente, sempre de forma adaptada à realidade do seu negócio e às ferramentas disponíveis.
          </p>
        </motion.div>

        <div className="space-y-14">
          {categories.map((cat, ci) => (
            <div key={ci}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-1 h-6 rounded-full bg-primary" />
                <h3 className="text-sm font-semibold text-foreground tracking-tight">{cat.label}</h3>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.services.map((s, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.06, duration: 0.4 }}
                    className="card-surface card-surface-hover p-6"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/[0.08] border border-primary/[0.12] flex items-center justify-center mb-4">
                      <s.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 tracking-tight leading-snug">{s.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-sm text-muted-foreground/70 mt-14 max-w-xl mx-auto"
        >
          Os serviços podem ser contratados de forma individual ou combinada, conforme a necessidade do seu negócio.
        </motion.p>
      </div>
    </section>
  );
};

export default Services;
