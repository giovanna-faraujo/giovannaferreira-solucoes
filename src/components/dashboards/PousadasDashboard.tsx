const PousadasDashboard = () => {
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago"];
  const occupancy = [72, 85, 68, 91, 78, 88, 65, 82];

  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        <span className="dash-filter dash-filter-active">2024</span>
        <span className="dash-filter dash-filter-inactive">Todos os Quartos</span>
        <span className="dash-filter dash-filter-inactive">Mensal</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Reservas", value: "347", change: "+18%" },
          { label: "Ocupação", value: "82%", change: "+5.2%" },
          { label: "Faturamento", value: "R$ 89k", change: "+12%" },
          { label: "Cancelamentos", value: "23", change: "-8%" },
        ].map((kpi, i) => (
          <div key={i} className="dash-kpi">
            <div className="text-[7px] font-mono text-muted-foreground leading-none mb-1">{kpi.label}</div>
            <div className="text-[13px] font-bold font-mono text-foreground leading-none">{kpi.value}</div>
            <div className="text-[8px] font-mono mt-1 text-emerald-600">{kpi.change}</div>
          </div>
        ))}
      </div>

      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Ocupação Mensal</div>
        <div className="grid grid-cols-8 gap-1.5">
          {months.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-[7px] font-mono text-muted-foreground/70 mb-1">{m}</div>
              <div
                className="h-14 rounded-lg flex flex-col items-center justify-center"
                style={{
                  background: `linear-gradient(180deg, rgba(14,116,144,${occupancy[i] / 100 * 0.25}) 0%, rgba(14,116,144,${occupancy[i] / 100 * 0.08}) 100%)`,
                }}
              >
                <span className="text-[11px] font-mono font-bold text-foreground">{occupancy[i]}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-1">Faturamento por Mês</div>
        <svg viewBox="0 0 240 40" className="w-full h-8">
          <defs>
            <linearGradient id="pousArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0e7490" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0e7490" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,30 Q30,22 60,25 T120,15 T180,20 T240,8 V40 H0 Z" fill="url(#pousArea)" />
          <path d="M0,30 Q30,22 60,25 T120,15 T180,20 T240,8" fill="none" stroke="#0e7490" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="dash-inner overflow-hidden">
        <div className="grid grid-cols-4 text-[7px] font-mono text-muted-foreground px-3 py-1.5 border-b border-border">
          <span>Período</span><span>Check-ins</span><span>Diárias</span><span>RevPAR</span>
        </div>
        {[
          ["Alta", "142", "R$ 320", "R$ 262"],
          ["Média", "118", "R$ 240", "R$ 180"],
          ["Baixa", "87", "R$ 180", "R$ 118"],
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-4 text-[7px] font-mono text-foreground/80 px-3 py-1.5 border-b border-border/50">
            {row.map((c, j) => <span key={j}>{c}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PousadasDashboard;
