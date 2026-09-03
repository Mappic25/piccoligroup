import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const links = [
  { href: "#ricambi", label: "Ricambi" },
  { href: "#officina", label: "Officina" },
  { href: "#magazzino", label: "Magazzino" },
  { href: "#azienda", label: "Azienda" },
  { href: "#contatti", label: "Contatti" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-1000 surface-steel border-b border-border/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-extrabold tracking-tight">PCM</span>
          <span className="eyebrow opacity-70">srl · Termoli</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow opacity-75 transition-opacity hover:opacity-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:+390875752488" className="btn-base btn-primary hidden sm:inline-flex">
            <Phone className="size-4" /> 0875 752488
          </a>
          <button
            aria-label="Apri menu"
            onClick={() => setOpen((v) => !v)}
            className="btn-base btn-outline px-3 py-2 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/40 px-5 pb-5 pt-2 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/20 py-3 font-display text-sm font-bold uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:+390875752488" className="btn-base btn-primary mt-4 w-full">
            <Phone className="size-4" /> Chiama ora
          </a>
        </nav>
      )}
    </header>
  );
}
