const ComercialDashboard = () => {
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-primary">Q1 2024</span>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-muted-foreground">Região Sul</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Faturamento", value: "R$ 482k", change: "+15%" },
          { label: "Ticket Médio", value: "R$ 1.250", change: "+8%" },
          { label: "Meta", value: "94%", change: "" },
        ].map((kpi, i) => (
          <div key={i} className="bg-white/[0.03] rounded-lg p-2.5">
            <div className="text-[8px] font-mono text-muted-foreground">{kpi.label}</div>
            <div className="text-xs font-bold font-mono text-foreground">{kpi.value}</div>
            {kpi.change && <div className="text-[8px] font-mono text-emerald-400">{kpi.change}</div>}
          </div>
        ))}
      </div>

      {/* Goal progress */}
      <div>
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Progresso da Meta</div>
        <div className="w-full h-4 bg-white/[0.03] rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-cyan-600/50 to-cyan-400/70 relative" style={{ width: "94%" }}>
            <span className="absolute right-1.5 top-0.5 text-[7px] font-mono font-bold text-primary-foreground">94%</span>
          </div>
        </div>
      </div>

      {/* Sales line chart */}
      <div>
        <div className="text-[9px] font-mono text-muted-foreground mb-1">Vendas Mensais</div>
        <svg viewBox="0 0 200 50" className="w-full h-12">
          <defs>
            <linearGradient id="comArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,40 Q30,35 60,28 T120,18 T180,22 T200,10 V50 H0 Z" fill="url(#comArea)" />
          <path d="M0,40 Q30,35 60,28 T120,18 T180,22 T200,10" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
          {/* Dots */}
          {[[0,40],[60,28],[120,18],[200,10]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="2.5" fill="#22d3ee" opacity="0.8" />
          ))}
        </svg>
      </div>

      {/* Top sellers */}
      <div className="bg-white/[0.02] rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 text-[8px] font-mono text-muted-foreground px-2 py-1 border-b border-white/5">
          <span>Vendedor</span><span>Vendas</span><span>Meta</span>
        </div>
        {[
          ["Marcos L.", "R$ 85k", "102%"],
          ["Julia A.", "R$ 72k", "96%"],
          ["Pedro S.", "R$ 68k", "91%"],
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-3 text-[8px] font-mono text-foreground/80 px-2 py-1 border-b border-white/[0.03]">
            {row.map((c, j) => <span key={j}>{c}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComercialDashboard;
