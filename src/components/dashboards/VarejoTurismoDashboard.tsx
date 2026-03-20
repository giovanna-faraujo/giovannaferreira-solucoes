const VarejoTurismoDashboard = () => {
  const categories = [
    { name: "Eletrônicos", ticket: "R$ 289", giro: 85 },
    { name: "Vestuário", ticket: "R$ 145", giro: 92 },
    { name: "Alimentação", ticket: "R$ 67", giro: 100 },
    { name: "Souvenirs", ticket: "R$ 42", giro: 78 },
  ];

  const monthlyTicket = [52, 58, 48, 72, 85, 95, 100, 88, 65, 55, 60, 78];

  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        <span className="dash-filter dash-filter-active">2024</span>
        <span className="dash-filter dash-filter-inactive">Todas as Lojas</span>
        <span className="dash-filter dash-filter-inactive">Mensal</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Ticket Médio", value: "R$ 136", change: "+7.8%" },
          { label: "Giro Estoque", value: "4.2x", change: "+11%" },
          { label: "Vendas", value: "3.248", change: "+15%" },
          { label: "Sazonalidade", value: "Alta", change: "↑ Verão" },
        ].map((kpi, i) => (
          <div key={i} className="dash-kpi">
            <div className="text-[7px] font-mono text-muted-foreground leading-none mb-1">{kpi.label}</div>
            <div className="text-[13px] font-bold font-mono text-foreground leading-none">{kpi.value}</div>
            <div className="text-[8px] font-mono mt-1 text-emerald-600">{kpi.change}</div>
          </div>
        ))}
      </div>

      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Ticket Médio Mensal — Sazonalidade</div>
        <div className="flex items-end gap-1 h-12">
          {monthlyTicket.map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t ${i >= 5 && i <= 7 ? 'bg-gradient-to-t from-cyan-600/40 to-cyan-500/60' : 'bg-gradient-to-t from-cyan-700/20 to-cyan-600/35'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          {["J","F","M","A","M","J","J","A","S","O","N","D"].map((m,i) => (
            <span key={i} className="text-[5px] font-mono text-muted-foreground/50">{m}</span>
          ))}
        </div>
      </div>

      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Giro de Estoque por Categoria</div>
        <div className="space-y-2">
          {categories.map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[7px] font-mono text-foreground/70 w-16 truncate">{c.name}</span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-700 to-cyan-500"
                  style={{ width: `${c.giro}%` }}
                />
              </div>
              <span className="text-[7px] font-mono text-foreground/80 w-12 text-right">{c.ticket}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="dash-inner overflow-hidden">
        <div className="grid grid-cols-3 text-[7px] font-mono text-muted-foreground px-3 py-1.5 border-b border-border">
          <span>Categoria</span><span>Ticket</span><span>Giro</span>
        </div>
        {categories.map((c, i) => (
          <div key={i} className="grid grid-cols-3 text-[7px] font-mono text-foreground/80 px-3 py-1.5 border-b border-border/50">
            <span>{c.name}</span>
            <span>{c.ticket}</span>
            <span>{c.giro}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VarejoTurismoDashboard;
