const RHDashboard = () => {
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-primary">2024</span>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-muted-foreground">Geral</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Colaboradores", value: "156" },
          { label: "Admissões", value: "12" },
          { label: "Desligamentos", value: "4" },
          { label: "Absenteísmo", value: "3.2%" },
        ].map((kpi, i) => (
          <div key={i} className="bg-white/[0.03] rounded-lg p-2">
            <div className="text-[7px] font-mono text-muted-foreground">{kpi.label}</div>
            <div className="text-xs font-bold font-mono text-foreground">{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        {/* Donut */}
        <div className="flex-shrink-0">
          <div className="text-[9px] font-mono text-muted-foreground mb-1">Por Área</div>
          <svg width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="28" fill="none" stroke="#334155" strokeWidth="8" />
            <circle cx="40" cy="40" r="28" fill="none" stroke="#22d3ee" strokeWidth="8" strokeDasharray="60 176" strokeLinecap="round" />
            <circle cx="40" cy="40" r="28" fill="none" stroke="#06b6d4" strokeWidth="8" strokeDasharray="40 176" strokeDashoffset="-60" strokeLinecap="round" />
            <circle cx="40" cy="40" r="28" fill="none" stroke="#0891b2" strokeWidth="8" strokeDasharray="30 176" strokeDashoffset="-100" strokeLinecap="round" />
            <text x="40" y="42" textAnchor="middle" className="text-[10px] font-mono fill-foreground font-bold">156</text>
          </svg>
        </div>

        {/* Legend + bars */}
        <div className="flex-1 space-y-1.5 pt-4">
          {[
            { area: "Operação", pct: 45, color: "bg-cyan-400/60" },
            { area: "Comercial", pct: 28, color: "bg-cyan-500/50" },
            { area: "Administrativo", pct: 18, color: "bg-cyan-600/40" },
            { area: "TI", pct: 9, color: "bg-secondary" },
          ].map((d, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[7px] font-mono text-foreground/70 w-16 truncate">{d.area}</span>
              <div className="flex-1 h-2 bg-white/[0.03] rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${d.color}`} style={{ width: `${d.pct}%` }} />
              </div>
              <span className="text-[7px] font-mono text-muted-foreground w-6 text-right">{d.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Turnover trend */}
      <div>
        <div className="text-[9px] font-mono text-muted-foreground mb-1">Turnover Mensal</div>
        <div className="flex items-end gap-1 h-10">
          {[2.1, 3.5, 1.8, 2.9, 2.2, 3.1, 1.5, 2.8, 2.0, 3.2, 1.9, 2.5].map((v, i) => (
            <div key={i} className="flex-1 rounded-t-sm bg-cyan-500/25" style={{ height: `${(v / 3.5) * 100}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RHDashboard;
