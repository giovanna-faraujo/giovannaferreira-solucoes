const PousadasDashboard = () => {
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
  const occupancy = [72, 85, 68, 91, 78, 88];

  return (
    <div className="space-y-3">
      {/* Filters */}
      <div className="flex gap-2">
        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-primary">2024</span>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-muted-foreground">Todos</span>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Reservas", value: "347", change: "+18%" },
          { label: "Ocupação", value: "82%", change: "+5%" },
          { label: "Faturamento", value: "R$ 89k", change: "+12%" },
        ].map((kpi, i) => (
          <div key={i} className="bg-white/[0.03] rounded-lg p-2.5">
            <div className="text-[9px] font-mono text-muted-foreground">{kpi.label}</div>
            <div className="text-sm font-bold font-mono text-foreground">{kpi.value}</div>
            <div className="text-[9px] font-mono text-emerald-400">{kpi.change}</div>
          </div>
        ))}
      </div>

      {/* Occupancy grid (calendar-like) */}
      <div className="space-y-1.5">
        <div className="text-[9px] font-mono text-muted-foreground">Taxa de Ocupação</div>
        <div className="grid grid-cols-6 gap-1.5">
          {months.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-[8px] font-mono text-muted-foreground mb-1">{m}</div>
              <div
                className="h-12 rounded-md flex items-end justify-center pb-1"
                style={{
                  background: `linear-gradient(to top, rgba(34,211,238,${occupancy[i] / 100 * 0.5}) 0%, rgba(34,211,238,${occupancy[i] / 100 * 0.15}) 100%)`,
                }}
              >
                <span className="text-[9px] font-mono font-bold text-foreground">{occupancy[i]}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PousadasDashboard;
