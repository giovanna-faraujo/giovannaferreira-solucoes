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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: delay * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="card-surface card-surface-hover overflow-hidden group flex flex-col"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.04]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[10px] font-mono text-muted-foreground ml-2 truncate">{title}</span>
      </div>

      {/* Dashboard content */}
      <div className="p-4 md:p-5 flex-1">
        {children}
      </div>

      {/* Description */}
      <div className="px-5 pb-5 pt-1 border-t border-white/[0.03]">
        <h3 className="text-sm font-semibold text-foreground mb-1.5 mt-3">{title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default DashboardCard;
