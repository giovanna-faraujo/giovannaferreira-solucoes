const SupermercadoDashboard = () => {
  const categories = [
    { name: "Mercearia", value: 38, color: "from-cyan-500/40 to-cyan-400/60" },
    { name: "Bebidas", value: 22, color: "from-cyan-600/35 to-cyan-500/50" },
    { name: "Hortifruti", value: 18, color: "from-emerald-500/35 to-emerald-400/50" },
    { name: "Padaria", value: 12, color: "from-amber-500/30 to-amber-400/45" },
    { name: "Açougue", value: 10, color: "from-red-500/30 to-red-400/40" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        <span className="dash-filter dash-filter-active">Semana Atual</span>
        <span className="dash-filter dash-filter-inactive">Loja 01</span>
        <span className="dash-filter dash-filter-inactive">Todas Categorias</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Vendas", value: "4.230", change: "+8.3%" },
          { label: "Faturamento", value: "R$ 156k", change: "+5.1%" },
          { label: "Ticket Médio", value: "R$ 37", change: "+2.4%" },
          { label: "Itens/Venda", value: "8.6", change: "+1.2%" },
        ].map((kpi, i) => (
          <div key={i} className="dash-kpi">
            <div className="text-[7px] font-mono text-muted-foreground leading-none mb-1">{kpi.label}</div>
            <div className="text-[13px] font-bold font-mono text-foreground leading-none">{kpi.value}</div>
            <div className="text-[8px] font-mono text-emerald-400 mt-1">{kpi.change}</div>
          </div>
        ))}
      </div>

      {/* Category breakdown */}
      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Vendas por Categoria</div>
        <div className="space-y-1.5">
          {categories.map((cat, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[7px] font-mono text-foreground/70 w-14 truncate">{cat.name}</span>
              <div className="flex-1 h-3 bg-white/[0.03] rounded-full overflow-hidden">
                <div className={`h-full rounded-full bg-gradient-to-r ${cat.color}`} style={{ width: `${cat.value * 2.5}%` }} />
              </div>
              <span className="text-[8px] font-mono text-muted-foreground w-6 text-right">{cat.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sales trend */}
      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-1">Vendas Diárias</div>
        <svg viewBox="0 0 240 40" className="w-full h-8">
          <defs>
            <linearGradient id="supArea2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,30 Q20,22 40,25 T80,18 T120,22 T160,12 T200,18 T240,10 V40 H0 Z" fill="url(#supArea2)" />
          <path d="M0,30 Q20,22 40,25 T80,18 T120,22 T160,12 T200,18 T240,10" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Top products */}
      <div className="dash-inner overflow-hidden">
        <div className="grid grid-cols-3 text-[7px] font-mono text-muted-foreground px-3 py-1.5 border-b border-white/[0.04]">
          <span>Produto</span><span>Qtd</span><span>Giro</span>
        </div>
        {[
          ["Arroz 5kg", "420", "Alto"],
          ["Leite Integral", "385", "Alto"],
          ["Café 500g", "310", "Médio"],
          ["Óleo de Soja", "275", "Médio"],
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-3 text-[7px] font-mono text-foreground/80 px-3 py-1.5 border-b border-white/[0.02]">
            <span>{row[0]}</span>
            <span>{row[1]}</span>
            <span className={row[2] === "Alto" ? "text-emerald-400" : "text-amber-400"}>{row[2]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupermercadoDashboard;
