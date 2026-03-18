const AtendimentoDashboard = () => {
  const statusData = [
    { label: "Resolvido", pct: 62, color: "from-emerald-500/30 to-emerald-400/50" },
    { label: "Em andamento", pct: 24, color: "from-cyan-600/30 to-cyan-500/50" },
    { label: "Pendente", pct: 14, color: "from-amber-500/30 to-amber-400/45" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        <span className="dash-filter dash-filter-active">Março 2024</span>
        <span className="dash-filter dash-filter-inactive">Todas as Equipes</span>
        <span className="dash-filter dash-filter-inactive">Todos os Status</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Abertos", value: "128" },
          { label: "Resolvidos", value: "112" },
          { label: "SLA Atingido", value: "94%" },
          { label: "Tempo Médio", value: "2.4h" },
        ].map((kpi, i) => (
          <div key={i} className="dash-kpi">
            <div className="text-[7px] font-mono text-muted-foreground leading-none mb-1">{kpi.label}</div>
            <div className="text-[13px] font-bold font-mono text-foreground leading-none">{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Status dos Chamados</div>
        <div className="space-y-2">
          {statusData.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[7px] font-mono text-foreground/70 w-20">{s.label}</span>
              <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                <div className={`h-full rounded-full bg-gradient-to-r ${s.color}`} style={{ width: `${s.pct}%` }} />
              </div>
              <span className="text-[8px] font-mono text-muted-foreground w-6 text-right">{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="dash-inner p-3">
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Chamados por Dia</div>
        <div className="flex items-end gap-[3px] h-14">
          {[8, 12, 6, 15, 10, 14, 9, 11, 7, 13, 16, 8, 12, 10, 15, 9, 11, 14, 7, 13].map((v, i) => (
            <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan-700/20 to-cyan-600/35" style={{ height: `${(v / 16) * 100}%` }} />
          ))}
        </div>
      </div>

      <div className="dash-inner overflow-hidden">
        <div className="grid grid-cols-4 text-[7px] font-mono text-muted-foreground px-3 py-1.5 border-b border-border">
          <span>Agente</span><span>Resolvidos</span><span>Tempo</span><span>SLA</span>
        </div>
        {[
          ["Ana S.", "32", "1.8h", "96%"],
          ["Carlos M.", "28", "2.5h", "91%"],
          ["Lia R.", "26", "1.6h", "98%"],
          ["Pedro V.", "26", "3.1h", "87%"],
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-4 text-[7px] font-mono text-foreground/80 px-3 py-1.5 border-b border-border/50">
            {row.map((c, j) => (
              <span key={j} className={j === 3 && parseFloat(c) >= 95 ? "text-emerald-600" : ""}>{c}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AtendimentoDashboard;
