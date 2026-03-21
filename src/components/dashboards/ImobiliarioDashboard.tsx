const ImobiliarioDashboard = () => {
  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        <span className="dash-filter dash-filter-active">2024</span>
        <span className="dash-filter dash-filter-inactive">Todos os Imóveis</span>
        <span className="dash-filter dash-filter-inactive">Venda + Aluguel</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Carteira", value: "184" },
          { label: "Vendidos", value: "47" },
          { label: "Tempo Médio", value: "38d" },
          { label: "R$/m²", value: "R$ 6.2k" },
        ].map((kpi, i) => (
          <div key={i} className="dash-kpi">
            <div className="text-[7px] font-mono text-muted-foreground leading-none mb-1">{kpi.label}</div>
            <div className="text-[13px] font-bold font-mono text-foreground leading-none">{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Valorização por Região (R$/m²)</div>
        <div className="flex items-end gap-[3px] h-14">
          {[5.8, 6.2, 7.1, 5.4, 6.8, 7.5, 6.0, 5.9, 7.2, 6.5].map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan-700/15 to-cyan-600/30"
              style={{ height: `${(v / 8) * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-1">Vendas por Mês</div>
        <svg viewBox="0 0 240 40" className="w-full h-8">
          <defs>
            <linearGradient id="imobArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0e7490" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0e7490" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,32 Q30,28 60,22 T120,18 T180,12 T240,15 V40 H0 Z" fill="url(#imobArea)" />
          <path d="M0,32 Q30,28 60,22 T120,18 T180,12 T240,15" fill="none" stroke="#0e7490" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="dash-inner overflow-hidden">
        <div className="grid grid-cols-4 text-[7px] font-mono text-muted-foreground px-3 py-1.5 border-b border-border">
          <span>Tipo</span><span>Qtd</span><span>Ticket</span><span>Status</span>
        </div>
        {[
          ["Apartamento", "62", "R$ 420k", "Ativo"],
          ["Casa", "45", "R$ 580k", "Ativo"],
          ["Comercial", "38", "R$ 320k", "Ativo"],
          ["Terreno", "39", "R$ 180k", "Ativo"],
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-4 text-[7px] font-mono text-foreground/80 px-3 py-1.5 border-b border-border/50">
            {row.map((c, j) => <span key={j}>{c}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImobiliarioDashboard;
