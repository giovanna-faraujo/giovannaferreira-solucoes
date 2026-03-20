import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, CheckCircle } from "lucide-react";

const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form data
    const body = `Nome: ${form.name}%0AE-mail: ${form.email}%0AAssunto: ${form.subject}`;
    window.open(`mailto:gioferreira.tech@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setIsOpen(false);
      setForm({ name: "", email: "", subject: "" });
    }, 2500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="mb-3 w-72 rounded-2xl bg-card border border-border overflow-hidden"
            style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.12), 0 0 0 1px hsl(192,82%,38%,0.1)" }}
          >
            <div className="px-4 py-3 border-b border-border bg-muted/30">
              <p className="text-sm font-semibold text-foreground">Fale comigo</p>
              <p className="text-[11px] text-muted-foreground">Respondo em até 24h</p>
            </div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 flex flex-col items-center gap-3"
              >
                <CheckCircle className="w-10 h-10 text-emerald-500" />
                <p className="text-sm font-medium text-foreground">Mensagem enviada!</p>
                <p className="text-xs text-muted-foreground text-center">Obrigada pelo contato. Retorno em breve.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-4 space-y-3">
                <input
                  type="text"
                  placeholder="Seu nome"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <input
                  type="text"
                  placeholder="Assunto"
                  required
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <button
                  type="submit"
                  className="w-full btn-primary-glow px-4 py-2.5 text-sm rounded-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  Enviar mensagem
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white transition-colors"
        style={{
          background: isOpen ? "hsl(var(--muted-foreground))" : "hsl(192, 82%, 38%)",
          boxShadow: "0 4px 20px rgba(14,116,144,0.3)",
        }}
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
      </motion.button>
    </div>
  );
};

export default FloatingContactWidget;
