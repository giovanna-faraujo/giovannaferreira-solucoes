import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import HeroDashboardMockup from "./HeroDashboardMockup";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      {/* Radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] rounded-full bg-cyan-500/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.02] blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/[0.08] border border-primary/[0.15] mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-mono text-primary font-medium">Analista de Dados Freelancer</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-7">
              Quer transformar seus dados em decisões mais{" "}
              <span className="text-gradient-cyan">inteligentes</span>?
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[55ch] mb-5">
              Eu ajudo empresas e pequenos negócios a organizarem seus números, entenderem seus resultados e acompanharem o que realmente importa com painéis visuais claros e fáceis de usar.
            </p>

            <p className="text-sm text-muted-foreground/60 font-mono mb-10">
              Painéis personalizados para acompanhar resultados com mais clareza
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511978467800"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-8 py-3.5 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Falar comigo
              </a>
              <a href="#paineis" className="btn-outline-glow px-7 py-3.5 text-sm">
                Ver exemplos de painéis
              </a>
            </div>
          </motion.div>

          {/* Right - Dashboard Mockup */}
          <div className="hidden lg:block relative">
            <HeroDashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
