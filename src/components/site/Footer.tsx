export function Footer() {
  return (
    <footer className="surface-steel">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-3">
        <div>
          <img src="/logo.png" alt="PCM srl" className="h-14 w-40 object-contain object-left" />
          <p className="mt-3 text-sm opacity-70">
            Ricambi e assistenza per mietitrebbie, trattori e oleodinamica.
          </p>
          <p className="mt-3 text-xs opacity-50">P.IVA 01438560706</p>
        </div>
        <div className="text-sm opacity-80">
          <p className="eyebrow mb-3 opacity-60">Sede</p>
          <p>Via dei Gelsi 22</p>
          <p>86039 Termoli (CB) — Italia</p>
          <p className="mt-2 opacity-60">Zona artigianale, 200 m dal casello A14</p>
        </div>
        <div className="text-sm opacity-80">
          <p className="eyebrow mb-3 opacity-60">Contatti</p>
          <p>
            <a className="hover:text-primary" href="tel:+390875752488">
              Tel. (+39) 0875 752488
            </a>
          </p>
          <p>
            <a className="hover:text-primary" href="mailto:pcmsrl2001@libero.it">
              pcmsrl2001@libero.it
            </a>
          </p>
          <p className="eyebrow mb-2 mt-4 opacity-60">Orari</p>
          <p className="font-semibold text-primary">Lun–Ven 8:30–13:00 / 15:00–19:30</p>
          <p className="font-semibold text-primary">Sab: 8:30–13:00</p>
        </div>
      </div>
      <div className="border-t border-border/20 px-5 py-5 text-center text-xs opacity-50">
        © {new Date().getFullYear()} PCM srl — Tutti i diritti riservati
      </div>
    </footer>
  );
}
