import { motion } from "framer-motion";

const HeroDashboardMockup = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Back card - bar chart */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="absolute -top-4 -left-4 w-64 h-40 card-surface p-4 opacity-60 blur-[0.5px]"
      >
        <div className="text-[10px] font-mono text-muted-foreground mb-2">Vendas por Mês</div>
        <div className="flex items-end gap-2 h-20">
          {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 bg-cyan-500/20 rounded-sm" style={{ height: `${h}%` }}>
              <div className="w-full bg-cyan-500/40 rounded-sm" style={{ height: `${h * 0.7}%` }} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Middle card - line chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 w-72 h-44 card-surface p-4 ml-8 mt-8"
      >
        <div className="text-[10px] font-mono text-muted-foreground mb-2">Faturamento Mensal</div>
        <svg viewBox="0 0 200 80" className="w-full h-24">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,60 Q25,50 50,40 T100,30 T150,20 T200,10 V80 H0 Z" fill="url(#areaGrad)" />
          <path d="M0,60 Q25,50 50,40 T100,30 T150,20 T200,10" fill="none" stroke="#22d3ee" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Front card - KPI */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 2 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="absolute -bottom-6 right-0 z-20 card-surface p-4 w-56"
        style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.07), 0 0 30px rgba(34,211,238,0.1)" }}
      >
        <div className="text-[10px] font-mono text-muted-foreground mb-1">Faturamento</div>
        <div className="text-xl font-bold font-mono text-foreground">R$ 124.500</div>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-xs font-mono text-emerald-400">+12,4%</span>
          <span className="text-[10px] text-muted-foreground">vs mês anterior</span>
        </div>
      </motion.div>

      {/* Decorative donut */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute top-2 right-8 z-5"
      >
        <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-40">
          <circle cx="30" cy="30" r="22" fill="none" stroke="#334155" strokeWidth="6" />
          <circle cx="30" cy="30" r="22" fill="none" stroke="#22d3ee" strokeWidth="6" strokeDasharray="90 138" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  );
};

export default HeroDashboardMockup;
