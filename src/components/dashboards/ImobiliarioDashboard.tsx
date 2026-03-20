const ImobiliarioDashboard = () => {
  const bairros = [
    { name: "Centro", m2: "R$ 8.2k", var: "+6.3%" },
    { name: "Jardins", m2: "R$ 12.5k", var: "+9.1%" },
    { name: "Vila Nova", m2: "R$ 6.8k", var: "+3.7%" },
    { name: "Alphaville", m2: "R$ 10.1k", var: "+5.4%" },
  ];

  const salesBars = [78, 92, 65, 100, 85, 72, 88, 55, 95, 68, 82, 90];

  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        <span className="dash-filter dash-filter-active">2024</span>
        <span className="dash-filter dash-filter-inactive">Todas as Regiões</span>
        <span className="dash-filter dash-filter-inactive">Trimestral</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "m² Médio", value: "R$ 9.4k", change: "+6.1%" },
          { label: "Vendas", value: "184", change: "+14%" },
          { label: "Conversão", value: "12.8%", change: "+2.3%" },
          { label: "Tempo Médio", value: "45 dias", change: "-12%" },
        ].map((kpi, i) => (
          <div key={i} className="dash-kpi">
            <div className="text-[7px] font-mono text-muted-foreground leading-none mb-1">{kpi.label}</div>
            <div className="text-[13px] font-bold font-mono text-foreground leading-none">{kpi.value}</div>
            <div className="text-[8px] font-mono mt-1 text-emerald-600">{kpi.change}</div>
          </div>
        ))}
      </div>

      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Performance de Vendas (12 meses)</div>
        <div className="flex items-end gap-1 h-12">
          {salesBars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-cyan-700/25 to-cyan-600/45"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[6px] font-mono text-muted-foreground/60">Jan</span>
          <span className="text-[6px] font-mono text-muted-foreground/60">Dez</span>
        </div>
      </div>

      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Valorização por m² — Bairros</div>
        <div className="space-y-2">
          {bairros.map((b, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[7px] font-mono text-foreground/70 w-14 truncate">{b.name}</span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-700 to-cyan-500"
                  style={{ width: `${60 + i * 10}%` }}
                />
              </div>
              <span className="text-[7px] font-mono text-foreground/80 w-12 text-right">{b.m2}</span>
              <span className="text-[7px] font-mono text-emerald-600 w-8">{b.var}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-1">Valorização Acumulada</div>
        <svg viewBox="0 0 240 40" className="w-full h-8">
          <defs>
            <linearGradient id="imobArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0e7490" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0e7490" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,35 Q30,30 60,28 T120,20 T180,14 T240,8 V40 H0 Z" fill="url(#imobArea)" />
          <path d="M0,35 Q30,30 60,28 T120,20 T180,14 T240,8" fill="none" stroke="#0e7490" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default ImobiliarioDashboard;
