const socials = ["IG", "IN", "X"];

const columns = [
  {
    title: "Servicios",
    links: ["Branding", "Diseño UI/UX", "Desarrollo Web", "Marketing Digital"],
  },
  {
    title: "Compañía",
    links: ["Nosotros", "Portafolio", "Proceso", "Contacto"],
  },
  {
    title: "Recursos",
    links: ["Blog", "Casos de éxito", "FAQ", "Política de privacidad"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/10">
                <span
                  className="h-3 w-3 rounded-[3px]"
                  style={{ background: "var(--gradient-primary)" }}
                />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                Wesplix Media
              </span>
            </div>
            <p className="text-sm text-muted max-w-xs leading-relaxed">
              Soluciones digitales y creatividad para marcas que quieren
              destacar. Branding, diseño y desarrollo bajo un mismo techo.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-medium text-muted hover:text-foreground hover:border-border-strong transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted">
          <p>© {new Date().getFullYear()} Wesplix Media. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado por Wesplix Media.</p>
        </div>
      </div>
    </footer>
  );
}
