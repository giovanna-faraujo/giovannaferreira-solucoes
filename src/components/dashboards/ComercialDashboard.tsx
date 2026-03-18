const ComercialDashboard = () => {
  const funnelSteps = [
    { label: "Leads", value: "2.450", pct: 100 },
    { label: "Qualificados", value: "980", pct: 40 },
    { label: "Propostas", value: "340", pct: 14 },
    { label: "Fechados", value: "128", pct: 5.2 },
  ];

  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        <span className="dash-filter dash-filter-active">Q1 2024</span>
        <span className="dash-filter dash-filter-inactive">Região Sul</span>
        <span className="dash-filter dash-filter-inactive">Todos os Vendedores</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Faturamento", value: "R$ 482k", change: "+15%" },
          { label: "Ticket Médio", value: "R$ 3.7k", change: "+8%" },
          { label: "Conversão", value: "5.2%", change: "+1.1%" },
          { label: "Meta", value: "94%", change: "" },
        ].map((kpi, i) => (
          <div key={i} className="dash-kpi">
            <div className="text-[7px] font-mono text-muted-foreground leading-none mb-1">{kpi.label}</div>
            <div className="text-[13px] font-bold font-mono text-foreground leading-none">{kpi.value}</div>
            {kpi.change && <div className="text-[8px] font-mono text-emerald-400 mt-1">{kpi.change}</div>}
          </div>
        ))}
      </div>

      {/* Funnel */}
      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Funil de Vendas</div>
        <div className="space-y-1">
          {funnelSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[7px] font-mono text-foreground/70 w-16">{step.label}</span>
              <div className="flex-1 h-5 bg-white/[0.02] rounded overflow-hidden relative">
                <div
                  className="h-full rounded bg-gradient-to-r from-cyan-600/40 to-cyan-400/60 flex items-center justify-end pr-2"
                  style={{ width: `${Math.max(step.pct, 8)}%` }}
                >
                  <span className="text-[7px] font-mono font-bold text-foreground">{step.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Goal progress */}
      <div className="dash-inner p-3">
        <div className="flex justify-between items-end mb-2">
          <div className="text-[9px] font-mono text-muted-foreground">Progresso da Meta Anual</div>
          <span className="text-[10px] font-mono font-bold text-primary">R$ 482k / R$ 512k</span>
        </div>
        <div className="w-full h-3 bg-white/[0.04] rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400 relative" style={{ width: "94%" }}>
          </div>
        </div>
      </div>

      {/* Top sellers */}
      <div className="dash-inner overflow-hidden">
        <div className="grid grid-cols-4 text-[7px] font-mono text-muted-foreground px-3 py-1.5 border-b border-white/[0.04]">
          <span>Vendedor</span><span>Vendas</span><span>Conversão</span><span>Meta</span>
        </div>
        {[
          ["Marcos L.", "R$ 85k", "6.8%", "102%"],
          ["Julia A.", "R$ 72k", "5.4%", "96%"],
          ["Pedro S.", "R$ 68k", "4.9%", "91%"],
          ["Camila R.", "R$ 62k", "5.1%", "88%"],
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-4 text-[7px] font-mono text-foreground/80 px-3 py-1.5 border-b border-white/[0.02]">
            <span>{row[0]}</span><span>{row[1]}</span><span>{row[2]}</span>
            <span className={parseFloat(row[3]) >= 100 ? "text-emerald-400" : "text-foreground/80"}>{row[3]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComercialDashboard;
