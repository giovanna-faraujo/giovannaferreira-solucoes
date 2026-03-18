const FinanceiroDashboard = () => {
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
  const receitas = [45, 52, 48, 60, 55, 65];
  const despesas = [30, 35, 38, 32, 40, 35];

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-primary">2024</span>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-muted-foreground">Consolidado</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Receitas", value: "R$ 325k", color: "text-emerald-400" },
          { label: "Despesas", value: "R$ 210k", color: "text-red-400" },
          { label: "Saldo", value: "R$ 115k", color: "text-cyan-400" },
        ].map((kpi, i) => (
          <div key={i} className="bg-white/[0.03] rounded-lg p-2.5">
            <div className="text-[8px] font-mono text-muted-foreground">{kpi.label}</div>
            <div className={`text-xs font-bold font-mono ${kpi.color}`}>{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Receitas vs Despesas bars */}
      <div>
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Receitas vs Despesas</div>
        <div className="flex items-end gap-2 h-20">
          {months.map((m, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
              <div className="w-full flex gap-0.5 items-end" style={{ height: "60px" }}>
                <div className="flex-1 bg-emerald-500/30 rounded-t-sm" style={{ height: `${(receitas[i] / 65) * 60}px` }} />
                <div className="flex-1 bg-red-400/25 rounded-t-sm" style={{ height: `${(despesas[i] / 65) * 60}px` }} />
              </div>
              <span className="text-[7px] font-mono text-muted-foreground">{m}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-4">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-sm bg-emerald-500/50" />
          <span className="text-[8px] font-mono text-muted-foreground">Receitas</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-sm bg-red-400/40" />
          <span className="text-[8px] font-mono text-muted-foreground">Despesas</span>
        </div>
      </div>
    </div>
  );
};

export default FinanceiroDashboard;
