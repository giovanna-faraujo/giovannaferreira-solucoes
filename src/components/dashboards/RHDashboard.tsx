const RHDashboard = () => {
  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        <span className="dash-filter dash-filter-active">2024</span>
        <span className="dash-filter dash-filter-inactive">Todas as Unidades</span>
        <span className="dash-filter dash-filter-inactive">CLT + PJ</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Colaboradores", value: "156" },
          { label: "Admissões", value: "12" },
          { label: "Desligamentos", value: "4" },
          { label: "Absenteísmo", value: "3.2%" },
        ].map((kpi, i) => (
          <div key={i} className="dash-kpi">
            <div className="text-[7px] font-mono text-muted-foreground leading-none mb-1">{kpi.label}</div>
            <div className="text-[13px] font-bold font-mono text-foreground leading-none">{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-2 dash-inner p-3 flex flex-col items-center">
          <div className="text-[9px] font-mono text-muted-foreground mb-2 self-start">Por Área</div>
          <svg width="72" height="72" viewBox="0 0 72 72">
            <circle cx="36" cy="36" r="26" fill="none" stroke="hsl(214,20%,90%)" strokeWidth="8" />
            <circle cx="36" cy="36" r="26" fill="none" stroke="#0e7490" strokeWidth="8" strokeDasharray="58 163" strokeLinecap="round" transform="rotate(-90 36 36)" />
            <circle cx="36" cy="36" r="26" fill="none" stroke="#0891b2" strokeWidth="8" strokeDasharray="38 163" strokeDashoffset="-58" strokeLinecap="round" transform="rotate(-90 36 36)" />
            <circle cx="36" cy="36" r="26" fill="none" stroke="#22d3ee" strokeWidth="8" strokeDasharray="28 163" strokeDashoffset="-96" strokeLinecap="round" transform="rotate(-90 36 36)" />
            <circle cx="36" cy="36" r="26" fill="none" stroke="#cbd5e1" strokeWidth="8" strokeDasharray="20 163" strokeDashoffset="-124" strokeLinecap="round" transform="rotate(-90 36 36)" />
            <text x="36" y="38" textAnchor="middle" className="text-[11px] font-mono fill-foreground font-bold">156</text>
          </svg>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 mt-2 w-full">
            {[
              { c: "bg-cyan-700", l: "Operação", v: "45%" },
              { c: "bg-cyan-600", l: "Comercial", v: "23%" },
              { c: "bg-cyan-400", l: "Admin", v: "17%" },
              { c: "bg-secondary", l: "TI", v: "15%" },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className={`w-1.5 h-1.5 rounded-full ${r.c}`} />
                <span className="text-[6px] font-mono text-muted-foreground">{r.l} {r.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3 space-y-2">
          <div className="dash-inner p-3">
            <div className="text-[9px] font-mono text-muted-foreground mb-1">Turnover Mensal</div>
            <div className="flex items-end gap-[3px] h-10">
              {[2.1, 3.5, 1.8, 2.9, 2.2, 3.1, 1.5, 2.8, 2.0, 3.2, 1.9, 2.5].map((v, i) => (
                <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan-700/20 to-cyan-600/35" style={{ height: `${(v / 3.5) * 100}%` }} />
              ))}
            </div>
          </div>
          <div className="dash-inner p-3">
            <div className="text-[9px] font-mono text-muted-foreground mb-1">Headcount</div>
            <svg viewBox="0 0 200 30" className="w-full h-6">
              <defs>
                <linearGradient id="rhArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0e7490" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#0e7490" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,25 Q25,22 50,20 T100,18 T150,15 T200,12 V30 H0 Z" fill="url(#rhArea)" />
              <path d="M0,25 Q25,22 50,20 T100,18 T150,15 T200,12" fill="none" stroke="#0e7490" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>

      <div className="dash-inner overflow-hidden">
        <div className="grid grid-cols-4 text-[7px] font-mono text-muted-foreground px-3 py-1.5 border-b border-border">
          <span>Indicador</span><span>Atual</span><span>Meta</span><span>Status</span>
        </div>
        {[
          ["Turnover", "2.5%", "< 3%", "✓"],
          ["Absenteísmo", "3.2%", "< 4%", "✓"],
          ["Satisfação", "78%", "> 80%", "⚠"],
          ["Treinamento", "92%", "> 90%", "✓"],
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-4 text-[7px] font-mono text-foreground/80 px-3 py-1.5 border-b border-border/50">
            <span>{row[0]}</span><span>{row[1]}</span><span>{row[2]}</span>
            <span className={row[3] === "✓" ? "text-emerald-600" : "text-amber-600"}>{row[3]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RHDashboard;
