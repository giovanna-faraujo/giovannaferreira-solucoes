const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <p className="text-sm font-semibold text-foreground tracking-tight">Giovanna Ferreira</p>
        <p className="text-xs text-muted-foreground mt-1.5">Analista de Dados e Automações</p>
        <p className="text-xs text-muted-foreground/70 mt-2">
          <a href="mailto:gioferreira.tech@gmail.com" className="hover:text-primary transition-colors">
            gioferreira.tech@gmail.com
          </a>
        </p>
        <p className="text-xs text-muted-foreground/50 mt-4 max-w-sm mx-auto leading-relaxed">
          Dashboards estratégicos e automações inteligentes para decisões mais claras.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
