import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  CircleDot,
  Cog,
  Droplets,
  Mail,
  MapPin,
  Phone,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/hero-mietitrebbia.jpg";
import magazzinoImg from "@/assets/magazzino.jpg";
import officinaImg from "@/assets/officina.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "PCM srl — Ricambi mietitrebbie e macchine agricole | Termoli",
      },
      {
        name: "description",
        content:
          "Ricambi per mietitrebbie Arbos, Claas, New Holland, Fiatagri e Laverda, oleodinamica e riparazione macchine agricole. Oltre 80.000 articoli a Termoli (CB).",
      },
      {
        property: "og:title",
        content: "PCM srl — Ricambi mietitrebbie e assistenza agricola",
      },
      {
        property: "og:description",
        content:
          "Specialisti in ricambi mietitrebbie Arbos, Claas, New Holland, Fiatagri, Laverda. Officina e oleodinamica a Termoli (CB).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const brands = ["Arbos", "Claas", "New Holland", "Fiatagri", "Laverda", "CNH", "Landini", "Grillo"];

const categorie = [
  {
    icon: Cog,
    title: "Ricambi mietitrebbie",
    text: "Oltre 30.000 particolari per Arbos, Fiatagri, New Holland, Claas e Laverda: battitori, controbattiture, cinghie, crivelli, elevatori, barre di taglio.",
  },
  {
    icon: Truck,
    title: "Ricambi trattori",
    text: "Circa 20.000 articoli per Fiat, Same e Landini: frizioni, trasmissioni, freni, guarnizioni motore, filtri e componenti idraulici.",
  },
  {
    icon: Droplets,
    title: "Oleodinamica",
    text: "30.000 particolari oleodinamici: pompe, distributori, valvole, centraline e cilindri Salami, Sauer, Danfoss, Linde.",
  },
  {
    icon: Zap,
    title: "Elettrovalvole ed elettrico",
    text: "Elettrovalvole Atos, materiale elettrico per uso agricolo, cablaggi, sensori e componenti di comando.",
  },
  {
    icon: CircleDot,
    title: "Cuscinetti e tenute",
    text: "Vasto assortimento di cuscinetti, supporti e anelli di tenuta. Anche i più difficili da trovare: interpellateci.",
  },
  {
    icon: Boxes,
    title: "Tubi e raccordi",
    text: "Tubi per medie e alte pressioni con raccordi Rastelli, confezionati su misura in sede, oli e lubrificanti Agip.",
  },
];

const servizi = [
  {
    title: "Riparazione mietitrebbie",
    text: "Revisioni complete di battitore, scuotipaglia e sistemi di pulizia, con ricostruzione dei gruppi soggetti a usura.",
  },
  {
    title: "Meccanica e motore",
    text: "Diagnosi e riparazione di motori, trasmissioni, frizioni e impianti frenanti su trattori e macchine operatrici.",
  },
  {
    title: "Impianti oleodinamici",
    text: "Revisione di pompe, distributori e cilindri, realizzazione di tubi ad alta pressione e messa a punto degli impianti.",
  },
  {
    title: "Preparazione alla campagna",
    text: "Controlli programmati prima della raccolta per ridurre i fermi macchina nel momento peggiore.",
  },
];

const numeri = [
  { k: "80.000+", v: "Articoli in magazzino" },
  { k: "30.000", v: "Particolari mietitrebbie" },
  { k: "2001", v: "Anno di fondazione" },
  { k: "24/48h", v: "Spedizioni in tutta Italia" },
];

function Index() {
  return (
    <div id="top">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative isolate">
          <img
            src={heroImg}
            alt="Mietitrebbia al lavoro in un campo di grano al tramonto"
            width={1920}
            height={1088}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 overlay-hero" />
          <div className="relative mx-auto max-w-7xl px-5 py-24 text-steel-foreground md:py-36">
            <p className="eyebrow text-primary">Part. mietitrebbie · Termoli (CB)</p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[0.98] md:text-6xl lg:text-7xl">
              Ricambi agricoli che trovi davvero, quando la campagna non aspetta.
            </h1>
            <p className="mt-6 max-w-xl text-lg opacity-85">
              Specialisti in ricambi per mietitrebbie <strong>Arbos, Claas, New Holland, Fiatagri</strong> e{" "}
              <strong>Laverda</strong>. Oltre 80.000 articoli in pronta consegna e officina interna per la
              riparazione di macchine agricole di ogni tipo.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contatti" className="btn-base btn-primary">
                Richiedi un ricambio <ArrowRight className="size-4" />
              </a>
              <a href="#ricambi" className="btn-base btn-outline">
                Catalogo e categorie
              </a>
            </div>
          </div>
        </section>

        {/* MARCHI */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-9 gap-y-3 px-5 py-6">
            <span className="eyebrow text-muted-foreground">Marchi trattati</span>
            {brands.map((b) => (
              <span key={b} className="font-display text-lg font-extrabold tracking-tight">
                {b}
              </span>
            ))}
          </div>
        </section>

        {/* NUMERI */}
        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {numeri.map((n) => (
              <div key={n.v} className="rounded-lg border border-border bg-card p-6 shadow-lift">
                <p className="font-display text-4xl font-extrabold text-primary">{n.k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{n.v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RICAMBI */}
        <section id="ricambi" className="mx-auto max-w-7xl px-5 pb-20">
          <div className="rule-amber max-w-2xl">
            <p className="eyebrow text-muted-foreground">Ricambi</p>
            <h2 className="mt-2 text-3xl md:text-5xl">Un magazzino costruito su vent'anni di campagne</h2>
            <p className="mt-4 text-muted-foreground">
              Dai particolari originali ai ricambi equivalenti, con la competenza per identificare il pezzo
              giusto anche su macchine fuori produzione.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {categorie.map((c) => (
              <article key={c.title} className="bg-card p-7 transition-colors hover:bg-accent/40">
                <c.icon className="size-7 text-primary" />
                <h3 className="mt-4 text-xl">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* OFFICINA */}
        <section id="officina" className="surface-steel">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
            <div>
              <div className="rule-amber">
                <p className="eyebrow text-primary">Officina</p>
                <h2 className="mt-2 text-3xl md:text-5xl">
                  Ripariamo macchine agricole di ogni tipo
                </h2>
              </div>
              <p className="mt-4 max-w-lg opacity-80">
                Interventi in sede e assistenza sul campo: smontaggio, revisione e ricostruzione dei gruppi
                meccanici e oleodinamici, con i ricambi presi direttamente dal nostro magazzino.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {servizi.map((s) => (
                  <div key={s.title} className="border-l-2 border-primary pl-4">
                    <h3 className="text-lg">{s.title}</h3>
                    <p className="mt-1 text-sm opacity-70">{s.text}</p>
                  </div>
                ))}
              </div>
              <a href="#contatti" className="btn-base btn-primary mt-9">
                <Wrench className="size-4" /> Prenota un intervento
              </a>
            </div>
            <img
              src={officinaImg}
              alt="Meccanico al lavoro sul motore di un trattore in officina"
              width={1408}
              height={1008}
              loading="lazy"
              className="rounded-lg object-cover shadow-panel"
            />
          </div>
        </section>

        {/* MAGAZZINO / AZIENDA */}
        <section id="magazzino" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        
          <div id="azienda">
            <div className="rule-amber">
              <p className="eyebrow text-muted-foreground">Azienda</p>
              <h2 className="mt-2 text-3xl md:text-5xl">PCM srl, dal 2001 a Termoli</h2>
            </div>
            <p className="mt-4 text-muted-foreground">
              Fondata da T. G. Piccoli nel 2001 in Via dei Gelsi 22, l'azienda si trova nella zona
              autoportuale di Termoli, a circa 200 metri dal casello autostradale in direzione Foggia:
              posizione ideale per il ritiro immediato e per le spedizioni verso tutto il Centro-Sud.
            </p>
            <p className="mt-4 text-muted-foreground">
              Siamo concessionari <strong>Grillo</strong> e concessionari ricambi <strong>Laverda</strong>,
              e trattiamo lubrificanti Agip e raccorderia Rastelli. Chi cerca il pezzo più strano, di solito,
              lo trova qui.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                "Ritiro in sede",
                "Spedizione rapida",
                "Consulenza tecnica",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-lg bg-secondary px-4 py-3 text-center font-display text-sm font-bold uppercase tracking-wider text-secondary-foreground"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATTI */}
        <section id="contatti" className="border-t border-border bg-card">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="rule-amber">
                <p className="eyebrow text-muted-foreground">Contatti</p>
                <h2 className="mt-2 text-3xl md:text-5xl">Dicci che macchina hai</h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                Indica modello, anno e numero del particolare (se lo hai): ti confermiamo disponibilità e
                prezzo. Per le riparazioni descrivi il guasto, ti richiamiamo per fissare l'intervento.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <a href="tel:+390875752488" className="flex items-center gap-3 hover:text-primary">
                  <Phone className="size-5 text-primary" /> Tel. &amp; Fax 0875 752488
                </a>
                <a href="mailto:pcmsrl2001@libero.it" className="flex items-center gap-3 hover:text-primary">
                  <Mail className="size-5 text-primary" /> pcmsrl2001@libero.it
                </a>
                <p className="flex items-start gap-3">
                  <MapPin className="size-5 shrink-0 text-primary" /> Via dei Gelsi 22, 86039 Termoli (CB)
                </p>
              </div>
            </div>

            <form
              className="grid gap-4 rounded-lg border border-border bg-background p-7 shadow-lift"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  Nome e azienda
                  <input
                    required
                    className="rounded-md border border-input bg-card px-3 py-2.5 outline-none focus:border-primary"
                    placeholder="Mario Rossi"
                  />
                </label>
                <label className="grid gap-2 text-sm">
                  Telefono
                  <input
                    required
                    className="rounded-md border border-input bg-card px-3 py-2.5 outline-none focus:border-primary"
                    placeholder="333 1234567"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm">
                Macchina / modello
                <input
                  className="rounded-md border border-input bg-card px-3 py-2.5 outline-none focus:border-primary"
                  placeholder="Es. Laverda M150, Claas Dominator 108"
                />
              </label>
              <label className="grid gap-2 text-sm">
                Ricambio o guasto
                <textarea
                  rows={5}
                  className="rounded-md border border-input bg-card px-3 py-2.5 outline-none focus:border-primary"
                  placeholder="Descrivi il pezzo che cerchi o il problema riscontrato"
                />
              </label>
              <button type="submit" className="btn-base btn-primary w-full">
                Invia richiesta <ArrowRight className="size-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                Preferisci parlarne? Chiamaci allo 0875 752488 negli orari di apertura.
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
