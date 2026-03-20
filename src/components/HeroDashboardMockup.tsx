import { motion } from "framer-motion";
import { BarChart3, Database, Settings, TrendingUp, PieChart, Cog } from "lucide-react";

const floatingIconVariants = {
  animate: (i: number) => ({
    y: [0, -12, 0],
    transition: {
      duration: 3 + i * 0.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.4,
    },
  }),
};

const floatingIcons = [
  { Icon: BarChart3, className: "absolute -top-4 -right-4 w-10 h-10 p-2 rounded-xl bg-card text-primary", style: { boxShadow: "0 4px 16px rgba(14,116,144,0.12)" } },
  { Icon: Database, className: "absolute top-1/4 -left-6 w-9 h-9 p-2 rounded-lg bg-card text-primary", style: { boxShadow: "0 4px 16px rgba(14,116,144,0.10)" } },
  { Icon: Settings, className: "absolute bottom-1/4 -right-6 w-9 h-9 p-2 rounded-lg bg-card text-primary/80", style: { boxShadow: "0 4px 16px rgba(14,116,144,0.10)" } },
  { Icon: TrendingUp, className: "absolute -top-2 left-1/4 w-8 h-8 p-1.5 rounded-lg bg-card text-primary/70", style: { boxShadow: "0 4px 12px rgba(14,116,144,0.08)" } },
  { Icon: PieChart, className: "absolute bottom-8 -left-4 w-8 h-8 p-1.5 rounded-lg bg-card text-primary/70", style: { boxShadow: "0 4px 12px rgba(14,116,144,0.08)" } },
  { Icon: Cog, className: "absolute -bottom-2 right-1/4 w-9 h-9 p-2 rounded-lg bg-card text-primary/80", style: { boxShadow: "0 4px 14px rgba(14,116,144,0.10)" } },
];

const HeroDashboardMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="relative w-full"
    >
      {/* Floating icons */}
      {floatingIcons.map(({ Icon, className, style }, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={floatingIconVariants}
          animate="animate"
          className={className}
          style={style}
        >
          <Icon className="w-full h-full" />
        </motion.div>
      ))}

      {/* Main dashboard frame */}
      <div
        className="relative rounded-2xl overflow-hidden bg-card"
        style={{ boxShadow: "0 0 0 1px hsl(214,20%,90%), 0 20px 50px -10px rgba(0,0,0,0.1), 0 0 30px rgba(14,116,144,0.05)" }}
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <span className="text-[10px] font-mono text-muted-foreground ml-3">Dashboard — Visão Geral</span>
        </div>

        <div className="p-4 md:p-5">
          {/* Filters row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-2 mb-4"
          >
            <span className="dash-filter dash-filter-active">2024</span>
            <span className="dash-filter dash-filter-inactive">Todas as Lojas</span>
            <span className="dash-filter dash-filter-inactive">Mensal</span>
          </motion.div>

          {/* KPI row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="grid grid-cols-4 gap-3 mb-4"
          >
            {[
              { label: "Faturamento", value: "R$ 124.5k", change: "+12.4%", positive: true },
              { label: "Vendas", value: "1.847", change: "+8.2%", positive: true },
              { label: "Ticket Médio", value: "R$ 67", change: "+3.1%", positive: true },
              { label: "Margem", value: "34.2%", change: "-1.4%", positive: false },
            ].map((kpi, i) => (
              <div key={i} className="dash-kpi">
                <div className="text-[8px] font-mono text-muted-foreground mb-1">{kpi.label}</div>
                <div className="text-sm font-bold font-mono text-foreground leading-none">{kpi.value}</div>
                <div className={`text-[9px] font-mono mt-1 ${kpi.positive ? "text-emerald-600" : "text-red-500"}`}>
                  {kpi.change}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Charts row */}
          <div className="grid grid-cols-3 gap-3">
            {/* Line chart */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="col-span-2 dash-inner p-3"
            >
              <div className="text-[9px] font-mono text-muted-foreground mb-2">Faturamento Mensal</div>
              <svg viewBox="0 0 260 80" className="w-full h-16">
                <defs>
                  <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0e7490" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0e7490" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[20, 40, 60].map(y => (
                  <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="hsl(214,20%,90%)" strokeWidth="0.5" />
                ))}
                <path d="M0,65 Q20,58 40,52 T80,42 T120,38 T160,28 T200,22 T240,15 L260,12 V80 H0 Z" fill="url(#heroArea)" />
                <path d="M0,65 Q20,58 40,52 T80,42 T120,38 T160,28 T200,22 T240,15 L260,12" fill="none" stroke="#0e7490" strokeWidth="2" strokeLinecap="round" />
                {[[0,65],[80,42],[160,28],[240,15]].map(([x,y],i) => (
                  <circle key={i} cx={x} cy={y} r="2.5" fill="#0e7490" />
                ))}
              </svg>
            </motion.div>

            {/* Donut chart */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 }}
              className="dash-inner p-3 flex flex-col items-center"
            >
              <div className="text-[9px] font-mono text-muted-foreground mb-2 self-start">Por Região</div>
              <svg width="64" height="64" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="24" fill="none" stroke="hsl(214,20%,90%)" strokeWidth="7" />
                <circle cx="32" cy="32" r="24" fill="none" stroke="#0e7490" strokeWidth="7" strokeDasharray="55 151" strokeLinecap="round" transform="rotate(-90 32 32)" />
                <circle cx="32" cy="32" r="24" fill="none" stroke="#0891b2" strokeWidth="7" strokeDasharray="35 151" strokeDashoffset="-55" strokeLinecap="round" transform="rotate(-90 32 32)" />
                <circle cx="32" cy="32" r="24" fill="none" stroke="#67e8f9" strokeWidth="7" strokeDasharray="25 151" strokeDashoffset="-90" strokeLinecap="round" transform="rotate(-90 32 32)" />
                <text x="32" y="34" textAnchor="middle" className="text-[9px] font-mono fill-foreground font-bold">68%</text>
              </svg>
              <div className="flex gap-3 mt-2">
                {[{c:"bg-cyan-700",l:"Sul"},{c:"bg-cyan-600",l:"SE"},{c:"bg-cyan-300",l:"NE"}].map((r,i)=>(
                  <div key={i} className="flex items-center gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${r.c}`} />
                    <span className="text-[7px] font-mono text-muted-foreground">{r.l}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="dash-inner p-3 mt-3"
          >
            <div className="text-[9px] font-mono text-muted-foreground mb-2">Vendas por Categoria</div>
            <div className="flex items-end gap-2 h-10">
              {[65, 90, 45, 100, 70, 55, 80, 35].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-cyan-700/30 to-cyan-600/50"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating accent KPI card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="absolute -bottom-5 -left-5 z-20 rounded-xl p-3.5 bg-card"
        style={{
          boxShadow: "0 0 0 1px hsl(192,82%,38%,0.15), 0 8px 24px rgba(0,0,0,0.08), 0 0 15px rgba(14,116,144,0.06)"
        }}
      >
        <div className="text-[8px] font-mono text-muted-foreground">Meta Atingida</div>
        <div className="text-lg font-bold font-mono text-foreground">94%</div>
        <div className="w-20 h-1.5 bg-muted rounded-full mt-1 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-cyan-700 to-cyan-500" style={{ width: "94%" }} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroDashboardMockup;
