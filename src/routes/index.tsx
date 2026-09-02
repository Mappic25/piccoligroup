import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  CircleDot,
  Cog,
  Droplets,
  ImagePlus,
  Mail,
  MapPin,
  Phone,
  Trash2,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MapComponent } from "@/components/MapComponent";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import officinaImg from "@/assets/officina.jpg";

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
      <path d="M12 2a9.9 9.9 0 0 0-8.57 14.87L2 22l5.28-1.38A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-3.13.82.84-3.04-.19-.31A8 8 0 1 1 12 20Zm4.4-5.99c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.07 3.6.57.25 1.02.4 1.37.51.58.18 1.11.16 1.53.1.47-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

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

const brands = [
  { name: "Arbos", logo: "/brands/arbos-clean.png" },
  { name: "Claas", logo: "/brands/claas-clean.png", url: "https://www.claas.com/" },
  {
    name: "New Holland",
    logo: "/brands/new-holland-clean.png",
    url: "https://agriculture.newholland.com/",
  },
  { name: "Fiatagri", logo: "/brands/fiatagri-clean.png" },
  { name: "Laverda", logo: "/brands/laverda-clean.png" },
  { name: "CNH", logo: "/brands/cnh-clean.png", url: "https://www.cnh.com/" },
  { name: "Landini", logo: "/brands/landini-clean.png", url: "https://www.landini.it/" },
  { name: "Grillo", logo: "/brands/grillo-clean.png", url: "https://www.grillospa.it/" },
  { name: "Fendt", logo: "/brands/fendt-clean.png", url: "https://www.fendt.com/" },
  {
    name: "Massey Ferguson",
    logo: "/brands/massey-ferguson-clean.png",
    url: "https://www.masseyferguson.com/",
  },
];

const categorie = [
  {
    icon: Cog,
    title: "Ricambi mietitrebbie",
    text: (
      <>
        Oltre 40.000 particolari per{" "}
        <span className="font-bold text-foreground">
          ARBOS, FIATAGRI, NEW HOLLAND, CLAAS, LAVERDA, FENDT e MASSEY FERGUSON
        </span>
        : battitori, controbattiture, cinghie, crivelli, elevatori, lame di taglio, scuotipaglia,
        cerchi, cambi e riduttori.
      </>
    ),
  },
  {
    icon: Truck,
    title: "Ricambi trattori",
    text: (
      <>
        Circa 20.000 articoli per{" "}
        <span className="font-bold text-foreground">
          OM, FIAT, NEW HOLLAND, SAME, LANDINI, FENDT, MASSEY FERGUSON e VALTRA
        </span>
        : frizioni, trasmissioni, freni, ingranaggeria cambio, riduttori, filtri, radiatori e
        componenti idraulici.
      </>
    ),
  },
  {
    icon: Droplets,
    title: "Oleodinamica",
    text: (
      <>
        30.000 particolari oleodinamici{" "}
        <span className="font-bold text-foreground">SALAMI, SAUER, DANFOSS, LINDE</span>: pompe,
        distributori, valvole, centraline, scambiatori di calore, cilindri e tenute per cilindri
        oleodinamici.
      </>
    ),
  },
  {
    icon: Zap,
    title: "Elettrovalvole ed elettrico",
    text: "Elettrovalvole, materiale elettrico per uso agricolo, cablaggi, fanaleria, sensori e componenti di comando.",
  },
  {
    icon: CircleDot,
    title: "Cuscinetti e tenute",
    text: (
      <>
        Vasto assortimento di cuscinetti, supporti{" "}
        <span className="font-bold text-foreground">FAG, INA, SKF</span> e anelli di tenuta.
      </>
    ),
  },
  {
    icon: Boxes,
    title: "Tubi e raccordi",
    text: (
      <>
        Tubi per medie e alte pressioni, fatti su misura, anche con raccorderia{" "}
        <span className="font-bold text-foreground">INOX</span> su ordinazione.
      </>
    ),
  },
];

const servizi = [
  {
    title: "Riparazione mietitrebbie",
    text: "Revisioni complete di battitore, scuotipaglia e sistemi di pulizia: riparazioni di motori, cambi e riduttori.",
  },
  {
    title: "Meccanica e motore",
    text: "Riparazione di motori, trasmissioni, frizioni e impianti idrostatici e oleodinamici su trattori e macchine operatrici.",
  },
  {
    title: "Impianti oleodinamici",
    text: "Revisione di pompe, distributori e cilindri, realizzazione di tubi ad alta pressione e messa a punto degli impianti, con prova banco.",
  },
  {
    title: "Preparazione alla campagna",
    text: "Controlli programmati prima della raccolta per ridurre i fermi macchina durante la stagione di raccolta.",
  },
];

const numeri = [
  { k: "100.000+", v: "Articoli in magazzino" },
  { k: "40.000", v: "Particolari mietitrebbie" },
  { k: "2001", v: "Anno di fondazione" },
  { k: "24/48h", v: "Spedizioni in tutta Italia" },
];

const officinaPhotos = [
  {
    src: "/negozio_officina/officina1.jpg",
    alt: "Meccanico al lavoro sul motore di un trattore in officina",
  },
  {
    src: "/negozio_officina/interno1.jpg",
    alt: "Intervento di riparazione su una macchina agricola",
  },
  {
    src: "/negozio_officina/interno2.jpg",
    alt: "Dettaglio di una macchina agricola in officina",
  },
];

const magazzinoPhotos = [
  {
    src: "/magazzino/magazzino1.jpg",
    alt: "Interno del magazzino PCM srl",
  },
  {
    src: "/magazzino/magazzino2.jpg",
    alt: "Interno del magazzino PCM srl",
  },
  {
    src: "/magazzino/magazzino3.jpg",
    alt: "Interno del magazzino PCM srl",
  },
  {
    src: "/magazzino/magazzino4.jpg",
    alt: "Interno del magazzino PCM srl",
  },
];

function Index() {
  const [photoNames, setPhotoNames] = useState<string[]>([]);
  const [officinaApi, setOfficinaApi] = useState<CarouselApi>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddPhotos = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newPhotos = Array.from(files).map((file) => file.name);
      setPhotoNames((prev) => [...prev, ...newPhotos]);
    }
  };

  const handleRemovePhoto = (index: number) => {
    setPhotoNames((prev) => prev.filter((_, i) => i !== index));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (!officinaApi) {
      return;
    }

    const interval = window.setInterval(() => {
      officinaApi.scrollNext();
    }, 3000);

    return () => window.clearInterval(interval);
  }, [officinaApi]);

  return (
    <div id="top">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative isolate">
          <img
            src="/sfondo_sito.webp"
            alt="Mietitrebbia al lavoro in un campo di grano al tramonto"
            width={1920}
            height={1088}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 overlay-hero" />
          <div className="relative mx-auto max-w-7xl px-5 pt-8 pb-12 text-steel-foreground md:pt-12 md:pb-20">
            <p className="eyebrow text-foreground">
              Part. mietitrebbie · Comp. oleodinamici · Macchine agricole
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[0.98] md:text-6xl lg:text-7xl">
              Ricambi agricoli per trattori e mietitrebbie.
            </h1>
            <p className="mt-6 max-w-xl text-lg opacity-85">
              Specialisti in ricambi per mietitrebbie{" "}
              <strong>Arbos, Claas, New Holland, Fiatagri,</strong>{" "}
              <strong>Laverda, Fendt e Massey Ferguson</strong>. Oltre 100.000 articoli in pronta
              consegna e officina autorizzata interna per la riparazione di macchine agricole di
              ogni tipo.
            </p>
            <div className="mt-20 flex flex-wrap gap-3 md:mt-24">
              <a href="#contatti" className="btn-base btn-primary">
                Richiedi un ricambio <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* MARCHI */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-7xl px-5 py-4">
            <p className="eyebrow text-center font-bold text-foreground">Marchi trattati</p>
            <div className="mx-auto mt-3 grid max-w-6xl grid-cols-2 items-center gap-x-6 gap-y-7 sm:grid-cols-5">
              {brands.map((brand) => (
                <div key={brand.name} className="flex h-18 items-center justify-center">
                  {brand.url ? (
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visita il sito ufficiale ${brand.name}`}
                      className="flex h-full w-full items-center justify-center transition-transform hover:scale-105"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        title={`Sito ufficiale ${brand.name}`}
                        loading="lazy"
                        className={`max-h-14 max-w-full object-contain ${
                          brand.name === "Fendt"
                            ? "scale-150"
                            : ["Fiatagri", "Massey Ferguson"].includes(brand.name)
                              ? "scale-125"
                              : ""
                        }`}
                      />
                    </a>
                  ) : (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      title={brand.name}
                      loading="lazy"
                      className={`max-h-14 max-w-full object-contain ${
                        ["Fendt", "Fiatagri", "Massey Ferguson"].includes(brand.name)
                          ? "scale-125"
                          : ""
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
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
        <section id="ricambi" className="scroll-mt-24 mx-auto max-w-7xl px-5 pb-20">
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.4fr)]">
            <div className="rule-amber max-w-2xl">
              <p className="eyebrow text-muted-foreground">Ricambi</p>
              <h2 className="mt-2 text-3xl md:text-5xl">
                Un magazzino costruito con oltre 50 anni di esperienza e passione
              </h2>
              <p className="mt-4 text-muted-foreground">
                Da più di venticinque anni il vostro punto di riferimento per ricambi originali e
                assistenza di alta qualità, pronti ad identificare il pezzo giusto anche su macchine
                fuori produzione.
              </p>
            </div>
            <img
              src="/logo_piccoligroup.png"
              alt="Piccoli Group"
              width={1280}
              height={768}
              className="w-full max-w-xs justify-self-end object-contain mix-blend-multiply"
            />
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
        <section id="officina" className="surface-steel scroll-mt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
            <div>
              <div className="rule-amber">
                <p className="eyebrow text-primary">Officina & Negozio</p>
                <h2 className="mt-2 text-3xl md:text-5xl">
                  Ripariamo macchine agricole di ogni tipo
                </h2>
              </div>
              <p className="mt-4 max-w-lg opacity-80">
                Interventi in sede e assistenza sul campo: smontaggio, revisione e ricostruzione dei
                gruppi meccanici e oleodinamici, con i ricambi presi direttamente dal nostro
                magazzino.
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
            <Carousel className="w-full" opts={{ loop: true }} setApi={setOfficinaApi}>
              <CarouselContent className="-ml-0">
                {officinaPhotos.map((photo) => (
                  <CarouselItem key={photo.src} className="pl-0">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width={1408}
                      height={1008}
                      loading="lazy"
                      className="aspect-[1408/1008] w-full rounded-lg object-cover shadow-panel"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                aria-label="Foto precedente"
                className="left-3 border-steel-foreground/40 bg-background/80 text-foreground hover:bg-background"
              />
              <CarouselNext
                aria-label="Foto successiva"
                className="right-3 border-steel-foreground/40 bg-background/80 text-foreground hover:bg-background"
              />
            </Carousel>
          </div>
        </section>

        {/* MAGAZZINO / AZIENDA */}
        <section id="azienda" className="azienda-visual scroll-mt-24 mx-auto max-w-7xl px-5 py-28">
          <img
            src="/capannone/esterno2.jpg"
            alt=""
            aria-hidden="true"
            width={1408}
            height={1008}
            loading="lazy"
            className="azienda-visual-image"
          />
          <div className="azienda-visual-fade" aria-hidden="true" />
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.85fr)]">
            <div className="max-w-3xl">
              <div className="mb-8 flex flex-wrap gap-x-6 gap-y-2 font-display text-sm font-bold text-foreground">
                <span className="flex items-baseline gap-1.5">
                  <span className="text-3xl leading-none">P</span>
                  <span>Part. mietitrebbie</span>
                </span>
                <span className="flex items-baseline gap-1.5">
                  <span className="text-3xl leading-none">C</span>
                  <span>Comp. oleodinamici</span>
                </span>
                <span className="flex items-baseline gap-1.5">
                  <span className="text-3xl leading-none">M</span>
                  <span>Macchine agricole</span>
                </span>
              </div>
              <div className="rule-amber">
                <p className="eyebrow text-muted-foreground">Azienda</p>
                <h2 className="mt-2 text-3xl md:text-5xl">
                  PCM srl
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                Fondata da T &amp; G Piccoli nel 2001 in{" "}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Via+dei+Gelsi+22%2C+Termoli"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Via dei Gelsi n. 22
                </a>
                , l'azienda si trova nella zona commerciale di Termoli, a circa 200 metri dal casello
                autostradale A14 direzione Termoli: posizione ideale per il ritiro immediato e per le
                spedizioni in tutt' Italia.
              </p>
              <p className="mt-4 text-muted-foreground">
                Siamo concessionari e officina autorizzata Grillo e Laverda, dealer ricambi e assistenza tecnica
                Arbos, Laverda, Fendt, Massey Ferguson, AGCO, New Holland e FIAT.
              </p>
              <p className="mt-4 text-muted-foreground">
                Grazie alle competenze tecniche acquisite negli anni siamo in grado di fornire ricambi fuori produzione, costruiti nella nostra azienda, per
                macchine da raccolta, rifornendo anche altri rivenditori in tutta Italia.
              </p>
            </div>
          </div>
        </section>

        {/* MAGAZZINO */}
        <section id="magazzino" className="scroll-mt-20 surface-steel">
          <div className="mx-auto max-w-7xl px-5 py-16">
            <div className="rule-amber">
              <p className="eyebrow text-primary">Magazzino</p>
              <h2 className="mt-2 text-3xl md:text-5xl">
                Un vasto assortimento di ricambi originali sempre disponibili
              </h2>
            </div>
            <div
              className="warehouse-marquee mt-10 overflow-hidden"
              aria-label="Foto del magazzino"
            >
              <div className="warehouse-marquee-track flex w-max">
                {[0, 1].map((group) => (
                  <div
                    key={group}
                    className="warehouse-marquee-group flex shrink-0 gap-4 pr-4"
                    aria-hidden={group === 1}
                  >
                    {magazzinoPhotos.map((photo) => (
                      <img
                        key={`${group}-${photo.src}`}
                        src={photo.src}
                        alt={group === 0 ? photo.alt : ""}
                        width={1408}
                        height={1008}
                        loading="lazy"
                        className="aspect-[16/10] w-[min(72vw,520px)] shrink-0 rounded-lg bg-black object-cover object-center shadow-panel"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTATTI */}
        <section id="contatti" className="scroll-mt-24 border-t border-border bg-card">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="rule-amber">
                <p className="eyebrow text-muted-foreground">Contatti</p>
                <h2 className="mt-2 text-3xl md:text-5xl">Hai bisogno di aiuto?</h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                Indica modello, anno e numero di telaio o codice originale del particolare ricambio:
                ti confermiamo disponibilità e prezzo. Non esitate a contattarci anche per eventuali
                guasti o problemi di ogni tipo, ci pensiamo noi!
              </p>
              <div className="mt-8 space-y-2 text-sm">
                <a href="tel:+390875752488" className="flex items-center gap-3 hover:text-primary">
                  <Phone className="size-5 text-primary" /> Tel. (+39) 0875 752488
                </a>
                <a
                  href="https://wa.me/390875752488"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Contattaci su WhatsApp"
                  className="flex items-center gap-3 hover:text-primary"
                >
                  <span className="text-primary">
                    <WhatsappIcon />
                  </span>{" "}
                  WhatsApp
                </a>
                <a
                  href="mailto:pcmsrl2001@libero.it"
                  className="flex items-center gap-3 hover:text-primary"
                >
                  <Mail className="size-5 text-primary" /> pcmsrl2001@libero.it
                </a>
                <a
                  href="https://maps.google.com/?q=Via+dei+Gelsi+22,+86039+Termoli,+Italy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-primary transition-all"
                >
                  <MapPin className="size-5 shrink-0 text-primary" /> Via dei Gelsi 22, 86039
                  Termoli (CB)
                </a>
              </div>
              <MapComponent />
            </div>

            <form
              className="grid gap-4 rounded-lg border border-border bg-background p-7 shadow-lift"
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const subject = `Richiesta ricambio - ${formData.get("macchina")}`;
                const body = [
                  `Nome e azienda: ${formData.get("nome")}`,
                  `Telefono: ${formData.get("telefono")}`,
                  `Macchina / modello: ${formData.get("macchina")}`,
                  `Ricambio o guasto: ${formData.get("ricambio")}`,
                  photoName ? `Foto allegata: ${photoName}` : "",
                ]
                  .filter(Boolean)
                  .join("\n");

                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=pcmsrl2001%40libero.it&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                const mailWindow = window.open(gmailUrl, "_blank");

                if (!mailWindow) {
                  window.location.assign(gmailUrl);
                }
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  <span>
                    Nome / Azienda
                    <span className="ml-1 text-primary" aria-hidden="true">
                      *
                    </span>
                  </span>
                  <input
                    required
                    name="nome"
                    className="rounded-md border border-input bg-card px-3 py-2.5 outline-none focus:border-primary"
                    placeholder="Mario Rossi"
                  />
                </label>
                <label className="grid gap-2 text-sm">
                  <span>Telefono</span>
                  <input
                    required
                    name="telefono"
                    className="rounded-md border border-input bg-card px-3 py-2.5 outline-none focus:border-primary"
                    placeholder="333 1234567"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm">
                <span>
                  Macchina / Modello
                  <span className="ml-1 text-primary" aria-hidden="true">
                    *
                  </span>
                </span>
                <input
                  required
                  name="macchina"
                  className="rounded-md border border-input bg-card px-3 py-2.5 outline-none focus:border-primary"
                  placeholder="Es. Laverda M150, Claas Dominator 108"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span>
                  Ricambio o Guasto
                  <span className="ml-1 text-primary" aria-hidden="true">
                    *
                  </span>
                </span>
                <textarea
                  required
                  name="ricambio"
                  rows={8}
                  className="rounded-md border border-input bg-card px-3 py-2.5 outline-none focus:border-primary"
                  placeholder="Descrivi il pezzo che cerchi o il problema riscontrato"
                />
              </label>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label
                    htmlFor="foto-ricambio"
                    title="Allega una o più foto"
                    className="btn-base btn-outline inline-flex cursor-pointer px-3 py-2"
                  >
                    <ImagePlus className="size-4" /> Allega foto
                  </label>
                  <span className="text-xs text-muted-foreground">({photoNames.length} foto)</span>
                </div>
                <input
                  ref={fileInputRef}
                  id="foto-ricambio"
                  type="file"
                  accept="image/*"
                  multiple
                  required={photoNames.length === 0}
                  className="sr-only"
                  onChange={handleAddPhotos}
                />
                {photoNames.length > 0 && (
                  <div className="space-y-2 rounded-md border border-border bg-card/50 p-4">
                    {photoNames.map((photo, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="truncate text-xs text-muted-foreground">{photo}</span>
                        <button
                          type="button"
                          onClick={() => handleRemovePhoto(index)}
                          title="Rimuovi allegato"
                          className="btn-base btn-outline inline-flex cursor-pointer p-1 text-muted-foreground hover:text-foreground"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button type="submit" className="btn-base btn-primary w-full">
                Invia richiesta <ArrowRight className="size-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                Preferisci parlarne? Chiamaci allo (+39) 0875 752488 negli orari di apertura.
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
