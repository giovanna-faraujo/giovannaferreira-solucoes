const FinanceiroDashboard = () => {
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
  const receitas = [48, 55, 50, 62, 58, 68];
  const despesas = [32, 38, 35, 34, 42, 38];

  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        <span className="dash-filter dash-filter-active">2024</span>
        <span className="dash-filter dash-filter-inactive">Consolidado</span>
        <span className="dash-filter dash-filter-inactive">Acumulado</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Receitas", value: "R$ 341k", color: "text-emerald-600" },
          { label: "Despesas", value: "R$ 219k", color: "text-red-500" },
          { label: "Saldo Líquido", value: "R$ 122k", color: "text-cyan-700" },
        ].map((kpi, i) => (
          <div key={i} className="dash-kpi">
            <div className="text-[7px] font-mono text-muted-foreground leading-none mb-1">{kpi.label}</div>
            <div className={`text-[14px] font-bold font-mono leading-none ${kpi.color}`}>{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="dash-inner p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[9px] font-mono text-muted-foreground">Receitas vs Despesas</div>
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-sm bg-emerald-500/50" />
              <span className="text-[7px] font-mono text-muted-foreground">Receitas</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-sm bg-red-400/40" />
              <span className="text-[7px] font-mono text-muted-foreground">Despesas</span>
            </div>
          </div>
        </div>
        <div className="flex items-end gap-2 h-20">
          {months.map((m, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
              <div className="w-full flex gap-[2px] items-end h-16">
                <div className="flex-1 bg-gradient-to-t from-emerald-600/25 to-emerald-400/45 rounded-t" style={{ height: `${(receitas[i] / 70) * 64}px` }} />
                <div className="flex-1 bg-gradient-to-t from-red-500/20 to-red-400/30 rounded-t" style={{ height: `${(despesas[i] / 70) * 64}px` }} />
              </div>
              <span className="text-[7px] font-mono text-muted-foreground/70">{m}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="dash-inner p-3">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-[9px] font-mono text-muted-foreground">Margem Líquida</div>
            <div className="text-lg font-bold font-mono text-foreground">35.8%</div>
          </div>
          <svg width="50" height="50" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" stroke="hsl(214,20%,90%)" strokeWidth="5" />
            <circle cx="25" cy="25" r="20" fill="none" stroke="#0e7490" strokeWidth="5" strokeDasharray="80 126" strokeLinecap="round" transform="rotate(-90 25 25)" />
          </svg>
        </div>
      </div>

      <div className="dash-inner overflow-hidden">
        <div className="grid grid-cols-4 text-[7px] font-mono text-muted-foreground px-3 py-1.5 border-b border-border">
          <span>Conta</span><span>Atual</span><span>Anterior</span><span>Var.</span>
        </div>
        {[
          ["Folha", "R$ 85k", "R$ 82k", "+3.6%"],
          ["Fornecedores", "R$ 52k", "R$ 48k", "+8.3%"],
          ["Operacional", "R$ 34k", "R$ 36k", "-5.5%"],
          ["Impostos", "R$ 28k", "R$ 26k", "+7.6%"],
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-4 text-[7px] font-mono text-foreground/80 px-3 py-1.5 border-b border-border/50">
            <span>{row[0]}</span><span>{row[1]}</span><span>{row[2]}</span>
            <span className={row[3].startsWith("-") ? "text-emerald-600" : "text-red-500"}>{row[3]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinanceiroDashboard;
