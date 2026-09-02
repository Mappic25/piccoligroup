import { useState } from "react";
import { ArrowRight, ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";

const links = [
  { href: "#ricambi", label: "Ricambi" },
  { href: "#officina", label: "Officina & Negozio" },
  { href: "#azienda", label: "Azienda" },
  { href: "#magazzino", label: "Magazzino" },
  { href: "#contatti", label: "Contatti" },
];

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
      <path d="M12 2a9.9 9.9 0 0 0-8.57 14.87L2 22l5.28-1.38A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-3.13.82.84-3.04-.19-.31A8 8 0 1 1 12 20Zm4.4-5.99c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.07 3.6.57.25 1.02.4 1.37.51.58.18 1.11.16 1.53.1.47-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 surface-steel border-b border-border/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5">
        <a
          href="#top"
          aria-label="PCM srl, Termoli"
          title="www.piccoligroup.it"
          className="flex h-14 w-40 items-center"
        >
          <img src="/logo.png" alt="PCM srl" className="h-full w-full object-contain" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) =>
            l.label === "Contatti" ? (
              <div
                key={l.href}
                className="relative py-4"
                onMouseEnter={() => setContactsOpen(true)}
                onMouseLeave={() => setContactsOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={contactsOpen}
                  aria-haspopup="true"
                  onClick={() => setContactsOpen((value) => !value)}
                  className="eyebrow flex items-center gap-1 opacity-75 transition-opacity hover:opacity-100"
                >
                  {l.label}
                  <ChevronDown className="size-3.5" aria-hidden="true" />
                </button>
                {contactsOpen && (
                  <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 border border-border/70 bg-card p-3 text-card-foreground shadow-panel">
                    <div className="grid gap-1">
                      <a
                        href="tel:+390875752488"
                        className="flex items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-muted hover:text-primary"
                      >
                        <Phone className="size-5 shrink-0 text-primary" />
                        <span>Tel. (+39) 0875 752488</span>
                      </a>
                      <a
                        href="https://wa.me/390875752488"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-muted hover:text-primary"
                      >
                        <span className="shrink-0 text-primary">
                          <WhatsappIcon />
                        </span>
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href="mailto:pcmsrl2001@libero.it"
                        className="flex items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-muted hover:text-primary"
                      >
                        <Mail className="size-5 shrink-0 text-primary" />
                        <span>pcmsrl2001@libero.it</span>
                      </a>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Via+dei+Gelsi+22%2C+86039+Termoli+CB"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-start gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-muted hover:text-primary"
                      >
                        <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                        <span>Via dei Gelsi 22, 86039 Termoli (CB)</span>
                      </a>
                    </div>
                    <a
                      href="#contatti"
                      onClick={() => setContactsOpen(false)}
                      className="mt-2 flex items-center justify-end gap-1 border-t border-border/60 px-3 pt-3 font-display text-xs font-bold uppercase tracking-widest text-primary hover:text-foreground"
                    >
                      Vai a contatti <ArrowRight className="size-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="eyebrow opacity-75 transition-opacity hover:opacity-100"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Via+dei+Gelsi+22%2C+86039+Termoli+CB"
            target="_blank"
            rel="noreferrer"
            aria-label="Apri la posizione: Via dei Gelsi 22, Termoli 86039 CB"
            title="Via dei Gelsi 22, Termoli 86039 CB"
            className="btn-base btn-outline px-3 py-2"
          >
            <MapPin className="size-5" />
          </a>
          <a
            href="tel:+390875752488"
            aria-label="Chiama il numero (+39) 0875 752488"
            title="(+39) 0875 752488"
            className="btn-base btn-primary px-3 py-2"
          >
            <Phone className="size-5" />
            <span className="hidden sm:inline">(+39) 0875 752488</span>
          </a>
          <a
            href="https://wa.me/390875752488"
            target="_blank"
            rel="noreferrer"
            aria-label="Contattaci su WhatsApp"
            title="WhatsApp"
            className="btn-base btn-outline px-3 py-2 text-[#25D366]"
          >
            <WhatsappIcon />
            <span className="hidden md:inline">WhatsApp</span>
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
          {links.map((l) =>
            l.label === "Contatti" ? (
              <div key={l.href} className="border-b border-border/20">
                <button
                  type="button"
                  aria-expanded={contactsOpen}
                  onClick={() => setContactsOpen((value) => !value)}
                  className="flex w-full items-center justify-between py-3 text-left font-display text-sm font-bold uppercase tracking-widest"
                >
                  {l.label}
                  <ChevronDown
                    className={`size-4 transition-transform ${contactsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {contactsOpen && (
                  <div className="grid gap-1 pb-3 pl-3">
                    <a
                      href="tel:+390875752488"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 py-2 text-sm"
                    >
                      <Phone className="size-4 text-primary" /> Telefono
                    </a>
                    <a
                      href="https://wa.me/390875752488"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 py-2 text-sm"
                    >
                      <span className="text-primary">
                        <WhatsappIcon />
                      </span>{" "}
                      WhatsApp
                    </a>
                    <a
                      href="mailto:pcmsrl2001@libero.it"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 py-2 text-sm"
                    >
                      <Mail className="size-4 text-primary" /> pcmsrl2001@libero.it
                    </a>
                    <a
                      href="#contatti"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 py-2 text-sm"
                    >
                      <MapPin className="size-4 text-primary" /> Indirizzo
                    </a>
                    <a
                      href="#contatti"
                      onClick={() => {
                        setOpen(false);
                        setContactsOpen(false);
                      }}
                      className="flex items-center gap-1 pt-2 font-display text-xs font-bold uppercase tracking-widest text-primary"
                    >
                      Vai a contatti <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/20 py-3 font-display text-sm font-bold uppercase tracking-widest"
              >
                {l.label}
              </a>
            ),
          )}
          <a href="tel:+390875752488" className="btn-base btn-primary mt-4 w-full">
            <Phone className="size-4" /> (+39) 0875 752488
          </a>
        </nav>
      )}
    </header>
  );
}
