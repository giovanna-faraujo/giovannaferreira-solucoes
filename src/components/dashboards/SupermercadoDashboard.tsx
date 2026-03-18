const SupermercadoDashboard = () => {
  const products = [
    { name: "Arroz 5kg", qty: 420, pct: 100 },
    { name: "Leite Integral", qty: 385, pct: 92 },
    { name: "Café 500g", qty: 310, pct: 74 },
    { name: "Óleo Soja", qty: 275, pct: 65 },
  ];

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-primary">Semana Atual</span>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-muted-foreground">Loja 01</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Vendas", value: "4.230", change: "+8%" },
          { label: "Faturamento", value: "R$ 156k", change: "+5%" },
          { label: "Ticket Médio", value: "R$ 37", change: "+2%" },
        ].map((kpi, i) => (
          <div key={i} className="bg-white/[0.03] rounded-lg p-2.5">
            <div className="text-[8px] font-mono text-muted-foreground">{kpi.label}</div>
            <div className="text-xs font-bold font-mono text-foreground">{kpi.value}</div>
            <div className="text-[8px] font-mono text-emerald-400">{kpi.change}</div>
          </div>
        ))}
      </div>

      {/* Top products horizontal bars */}
      <div>
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Mais Vendidos</div>
        <div className="space-y-1.5">
          {products.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[8px] font-mono text-foreground/70 w-20 truncate">{p.name}</span>
              <div className="flex-1 h-3 bg-white/[0.03] rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-500/40 to-cyan-400/60" style={{ width: `${p.pct}%` }} />
              </div>
              <span className="text-[8px] font-mono text-muted-foreground w-8 text-right">{p.qty}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mini area chart */}
      <div>
        <div className="text-[9px] font-mono text-muted-foreground mb-1">Vendas Diárias</div>
        <svg viewBox="0 0 200 40" className="w-full h-10">
          <defs>
            <linearGradient id="supArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,30 Q20,25 40,20 T80,15 T120,22 T160,12 T200,18 V40 H0 Z" fill="url(#supArea)" />
          <path d="M0,30 Q20,25 40,20 T80,15 T120,22 T160,12 T200,18" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
};

export default SupermercadoDashboard;
