const AtendimentoDashboard = () => {
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-primary">Março</span>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-muted-foreground">Equipe A</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Abertos", value: "128" },
          { label: "Resolvidos", value: "112" },
          { label: "SLA", value: "94%" },
          { label: "Tempo Médio", value: "2.4h" },
        ].map((kpi, i) => (
          <div key={i} className="bg-white/[0.03] rounded-lg p-2">
            <div className="text-[8px] font-mono text-muted-foreground">{kpi.label}</div>
            <div className="text-xs font-bold font-mono text-foreground">{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Bar chart - tickets por dia */}
      <div>
        <div className="text-[9px] font-mono text-muted-foreground mb-2">Chamados por Dia</div>
        <div className="flex items-end gap-1 h-16">
          {[8, 12, 6, 15, 10, 14, 9, 11, 7, 13, 16, 8].map((v, i) => (
            <div key={i} className="flex-1 rounded-t-sm bg-cyan-500/30" style={{ height: `${(v / 16) * 100}%` }} />
          ))}
        </div>
      </div>

      {/* Mini table */}
      <div className="bg-white/[0.02] rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 text-[8px] font-mono text-muted-foreground px-2 py-1 border-b border-white/5">
          <span>Agente</span><span>Resolvidos</span><span>SLA</span>
        </div>
        {[
          ["Ana S.", "32", "96%"],
          ["Carlos M.", "28", "91%"],
          ["Lia R.", "26", "98%"],
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-3 text-[8px] font-mono text-foreground/80 px-2 py-1 border-b border-white/[0.03]">
            {row.map((c, j) => <span key={j}>{c}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AtendimentoDashboard;
