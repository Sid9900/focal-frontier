import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Aperture, Focus, Gauge, Video } from "lucide-react";
import heroImage from "@/assets/alpha7v-hero.jpg";
import actionImage from "@/assets/alpha7v-action.jpg";
import portraitImage from "@/assets/alpha7v-portrait.jpg";
import nightImage from "@/assets/alpha7v-night.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sony α7 V — Creativity, levelled up" },
      { name: "description", content: "Explore the Sony α7 V full-frame hybrid camera, with a 33 MP partially stacked sensor, AI autofocus and 4K 120p video." },
      { property: "og:title", content: "Sony α7 V — Creativity, levelled up" },
      { property: "og:description", content: "A new generation of full-frame hybrid performance for stills and video." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sonyUrl = "https://www.sony.co.uk/electronics/interchangeable-lens-cameras/ilce-7m5";

function Index() {
  return (
    <main className="bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Primary navigation">
          <a href="#top" className="text-sm font-extrabold tracking-normal" aria-label="Cotswold Cameras home">Cotswold <span className="font-medium text-muted-foreground">Cameras</span></a>
          <div className="flex items-center gap-5">
            <a href="#highlights" className="hidden text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground sm:block">Highlights</a>
            <a href="#specs" className="hidden text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground sm:block">Specifications</a>
            <a href={sonyUrl} target="_blank" rel="noreferrer" className="inline-flex h-8 items-center gap-1 rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground transition-transform hover:scale-[1.03]">Buy now <ArrowUpRight size={13} /></a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative flex min-h-[96svh] flex-col items-center justify-end overflow-hidden pt-24">
        <div className="absolute inset-0 bg-background">
          <img src={heroImage} alt="Black full-frame mirrorless camera body in a dark studio" width={1920} height={1280} className="h-full w-full object-cover object-center opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-5 pt-8 text-center md:px-8 md:pt-14">
          <p className="animate-rise text-2xl font-extrabold tracking-tight md:text-4xl">Sony <span className="text-primary">α7 V</span></p>
          <h1 className="animate-rise mt-4 max-w-5xl text-balance text-5xl font-extrabold leading-[0.98] md:text-7xl lg:text-8xl">Creativity,<br />levelled up.</h1>
          <p className="animate-rise mt-6 max-w-xl text-balance text-base font-medium leading-relaxed text-muted-foreground md:text-lg">Full-frame intelligence. Extraordinary speed. One hybrid camera built to keep pace with your vision.</p>
        </div>
        <a href="#highlights" aria-label="Explore highlights" className="relative z-10 mb-8 grid size-11 place-items-center rounded-full border border-border bg-background/50 text-foreground backdrop-blur-md transition-colors hover:bg-secondary"><ArrowDown size={18} /></a>
      </section>

      <section id="highlights" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="text-sm font-bold text-primary">Get the highlights</p><h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold leading-tight md:text-6xl">The technology to capture your vision.</h2></div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">A newly developed imaging system brings speed, intelligence and exceptional tonal detail together.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            [Aperture, "33.0 MP", "Partially stacked full-frame Exmor RS CMOS sensor"],
            [Focus, "AI autofocus", "Real-time Recognition AF and tracking"],
            [Gauge, "30 fps", "Blackout-free bursts with full AF/AE tracking"],
            [Video, "4K 120p", "High-frame-rate recording for cinematic motion"],
          ].map(([Icon, value, label]) => {
            const FeatureIcon = Icon as typeof Aperture;
            return <article key={String(value)} className="min-h-64 border-t border-border pt-6 transition-colors hover:border-primary"><FeatureIcon size={24} className="text-primary" /><p className="mt-20 text-3xl font-bold">{String(value)}</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{String(label)}</p></article>;
          })}
        </div>
      </section>

      <section className="relative min-h-[90svh] overflow-hidden">
        <img src={actionImage} alt="Golden eagle flying through a mountain valley" loading="lazy" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-7xl items-end px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-3xl"><p className="text-sm font-bold text-primary">Speed without hesitation</p><h2 className="mt-4 text-balance text-4xl font-bold leading-tight md:text-7xl">The decisive moment.<br />Never interrupted.</h2><p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80">Shoot blackout-free at up to 30 frames per second, with continuous autofocus and exposure tracking keeping every instant within reach.</p></div>
        </div>
      </section>

      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto grid max-w-7xl md:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-center px-5 py-20 md:px-12 lg:px-20">
            <p className="text-sm font-bold text-primary">BIONZ XR2</p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-tight md:text-6xl">Intelligence,<br />built in.</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed opacity-70">An integrated AI processing unit recognises subjects and tracks movement with remarkable precision, freeing you to concentrate on composition.</p>
            <div className="mt-12 border-t border-accent-foreground/20 pt-6"><strong className="text-3xl">759</strong><p className="mt-1 text-sm opacity-60">phase-detection autofocus points</p></div>
          </div>
          <img src={portraitImage} alt="Dancer in red fabric moving through warm light" loading="lazy" width={1200} height={1600} className="h-[70svh] w-full object-cover md:h-[100svh]" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><p className="text-sm font-bold text-primary">Up to 16 stops</p><h2 className="mt-4 text-balance text-4xl font-bold leading-tight md:text-6xl">From deep shadow<br />to bright light.</h2><p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">Wide dynamic range preserves subtle gradations across demanding scenes, while refined processing delivers accurate, stable colour.</p></div>
          <img src={nightImage} alt="Cyclist crossing a rain-lit Tokyo street at night" loading="lazy" width={1600} height={1200} className="aspect-[4/3] w-full object-cover" />
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8 md:py-36">
          <p className="text-sm font-bold text-primary">Motion, reimagined</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-balance text-5xl font-bold leading-tight md:text-8xl">4K 120p.<br />Every frame alive.</h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">Capture high-frame-rate 4K footage with expressive slow motion and professional 10-bit 4:2:2 colour.</p>
        </div>
      </section>

      <section id="specs" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <p className="text-sm font-bold text-primary">At a glance</p>
        <h2 className="mt-4 text-4xl font-bold md:text-6xl">Built for the work.</h2>
        <dl className="mt-16 divide-y divide-border border-y border-border">
          {[
            ["Sensor", "33.0 effective megapixel full-frame Exmor RS CMOS"],
            ["Processor", "BIONZ XR2 with integrated AI processing unit"],
            ["Sensitivity", "ISO 100–51200 for stills and movies"],
            ["Shutter", "Up to 1/16000 second"],
            ["Lens mount", "Sony E-mount"],
          ].map(([term, detail]) => <div key={term} className="grid gap-2 py-6 md:grid-cols-[1fr_2fr]"><dt className="text-sm font-semibold text-muted-foreground">{term}</dt><dd className="text-lg font-semibold md:text-xl">{detail}</dd></div>)}
        </dl>
      </section>

      <section className="border-t border-border px-5 py-24 text-center md:px-8 md:py-36">
        <p className="text-sm font-bold text-primary">Sony α7 V</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-balance text-5xl font-extrabold leading-tight md:text-8xl">Your vision,<br />in full.</h2>
        <a href={sonyUrl} target="_blank" rel="noreferrer" className="mx-auto mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]">Buy now <ArrowUpRight size={16} /></a>
        <p className="mt-4 text-base font-semibold text-foreground">£1,729</p>
      </section>

      <footer className="border-t border-border px-5 py-8 text-center text-xs text-muted-foreground">Concept landing page for the Sony α7 V. Product names and trademarks belong to Sony.</footer>
    </main>
  );
}
