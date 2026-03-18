import { motion } from "framer-motion";
import HeroDashboardMockup from "./HeroDashboardMockup";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/[0.03] blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight mb-6">
              Quer transformar seus dados em decisões mais{" "}
              <span className="text-gradient-cyan">inteligentes</span>?
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[60ch] mb-4">
              Eu ajudo empresas e pequenos negócios a organizarem seus números, entenderem seus resultados e acompanharem o que realmente importa com painéis visuais claros e fáceis de usar.
            </p>
            <p className="text-sm text-muted-foreground/70 mb-8 font-mono">
              Painéis personalizados para acompanhar resultados com mais clareza
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#paineis" className="btn-outline-glow px-6 py-3 text-sm">
                Ver exemplos de painéis
              </a>
              <a href="https://wa.me/5511978467800" target="_blank" rel="noopener noreferrer" className="btn-primary-glow px-8 py-3 text-sm">
                Falar comigo
              </a>
            </div>
          </motion.div>

          {/* Right - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="relative hidden lg:block"
          >
            <HeroDashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
