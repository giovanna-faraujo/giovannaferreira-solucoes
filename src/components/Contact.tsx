import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-28 md:py-36 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-5">
            Quer entender como organizar melhor seus dados ou automatizar processos no seu <span className="text-gradient-cyan">negócio</span>?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base mb-6">
            Se você quer acompanhar seus resultados com mais clareza, reduzir tarefas manuais ou entender qual solução faz mais sentido para sua rotina, estou à disposição para te ajudar.
          </p>
          <p className="text-sm text-muted-foreground/70 mb-12 max-w-lg mx-auto">
            Posso te ajudar a identificar oportunidades com dashboards, automações ou uma combinação dos dois, de forma prática e alinhada à sua realidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://wa.me/5511978467800"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-10 py-4 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
            <a
              href="mailto:gioferreira.tech@gmail.com"
              className="btn-outline-glow px-10 py-4 text-sm"
            >
              <Mail className="w-4 h-4" />
              Enviar e-mail
            </a>
          </div>

          <div className="border-t border-border/50 pt-8 mt-4">
            <p className="text-sm font-semibold text-foreground">Giovanna Ferreira</p>
            <p className="text-xs text-muted-foreground mt-1">Analista de Dados e Automações</p>
            <p className="text-xs text-muted-foreground/60 mt-2 max-w-sm mx-auto">
              Dashboards claros e automações práticas para melhorar a rotina e apoiar decisões.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
