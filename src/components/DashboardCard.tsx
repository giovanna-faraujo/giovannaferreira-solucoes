import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  description: string;
  children: ReactNode;
  delay?: number;
}

const DashboardCard = ({ title, description, children, delay = 0 }: DashboardCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="card-surface card-surface-hover overflow-hidden group"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-[11px] font-medium text-muted-foreground ml-2">{title}</span>
      </div>

      {/* Dashboard content */}
      <div className="p-5 min-h-[240px] bg-gradient-to-b from-transparent to-background/20">
        {children}
      </div>

      {/* Description */}
      <div className="px-5 pb-5 pt-2">
        <h3 className="text-sm font-semibold text-foreground mb-1.5">{title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default DashboardCard;
