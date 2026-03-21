const VarejoDashboard = () => {
  const categories = [
    { label: "Alimentos", pct: 38, color: "from-cyan-600/25 to-cyan-500/45" },
    { label: "Bebidas", pct: 22, color: "from-emerald-500/25 to-emerald-400/45" },
    { label: "Higiene", pct: 18, color: "from-amber-500/25 to-amber-400/40" },
    { label: "Sazonais", pct: 22, color: "from-violet-500/25 to-violet-400/40" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        <span className="dash-filter dash-filter-active">Março 2024</span>
        <span className="dash-filter dash-filter-inactive">Todas as Categorias</span>
        <span className="dash-filter dash-filter-inactive">Loja Principal</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Vendas", value: "4.2k" },
          { label: "Ticket Médio", value: "R$ 87" },
          { label: "Giro Estoque", value: "12.4x" },
          { label: "Faturamento", value: "R$ 365k" },
        ].map((kpi, i) => (
          <div key={i} className="dash-kpi">
            <div className="text-[7px] font-mono text-muted-foreground leading-none mb-1">{kpi.label}</div>
            <div className="text-[13px] font-bold font-mono text-foreground leading-none">{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Vendas por Categoria</div>
        <div className="space-y-2">
          {categories.map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[7px] font-mono text-foreground/70 w-14">{c.label}</span>
              <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                <div className={`h-full rounded-full bg-gradient-to-r ${c.color}`} style={{ width: `${c.pct}%` }} />
              </div>
              <span className="text-[8px] font-mono text-muted-foreground w-6 text-right">{c.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Vendas Diárias</div>
        <div className="flex items-end gap-[3px] h-14">
          {[12, 15, 9, 18, 14, 20, 11, 16, 13, 19, 17, 10, 15, 12, 18, 14, 21, 16, 13, 17].map((v, i) => (
            <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan-700/15 to-cyan-600/30" style={{ height: `${(v / 22) * 100}%` }} />
          ))}
        </div>
      </div>

      <div className="dash-inner overflow-hidden">
        <div className="grid grid-cols-4 text-[7px] font-mono text-muted-foreground px-3 py-1.5 border-b border-border">
          <span>Produto</span><span>Vendas</span><span>Giro</span><span>Estoque</span>
        </div>
        {[
          ["Arroz 5kg", "342", "8.2x", "Normal"],
          ["Cerveja Lata", "289", "15.6x", "Baixo"],
          ["Sabão Líq.", "198", "6.4x", "Normal"],
          ["Protetor Solar", "156", "22.1x", "Sazonal"],
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-4 text-[7px] font-mono text-foreground/80 px-3 py-1.5 border-b border-border/50">
            {row.map((c, j) => <span key={j}>{c}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VarejoDashboard;
