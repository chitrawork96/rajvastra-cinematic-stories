import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import storyImg from "@/assets/story.jpg";
import craftImg from "@/assets/craft.jpg";
import colSaree from "@/assets/col-saree.jpg";
import colDupatta from "@/assets/col-dupatta.jpg";
import colKurta from "@/assets/col-kurta.jpg";
import colCoord from "@/assets/col-coord.jpg";
import colEveryday from "@/assets/col-everyday.jpg";
import craftHands from "@/assets/craft-hands.jpg";
import craftDye from "@/assets/craft-dye.jpg";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";
import gal5 from "@/assets/gal5.jpg";
import gal6 from "@/assets/gal6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajvastra — Rooted in Rajasthan. Woven for Today." },
      { name: "description", content: "Handcrafted Bandhani silhouettes from Rajasthan's artisans, reimagined for modern India." },
      { property: "og:title", content: "Rajvastra — Rooted in Rajasthan. Woven for Today." },
      { property: "og:description", content: "Handcrafted Bandhani silhouettes from Rajasthan's artisans, reimagined for modern India." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const Mandala = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="24" cy="24" r="3" />
    <circle cx="24" cy="24" r="8" />
    <circle cx="24" cy="24" r="14" />
    {Array.from({ length: 8 }).map((_, i) => {
      const a = (i * Math.PI) / 4;
      const x1 = 24 + Math.cos(a) * 8;
      const y1 = 24 + Math.sin(a) * 8;
      const x2 = 24 + Math.cos(a) * 20;
      const y2 = 24 + Math.sin(a) * 20;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
    })}
  </svg>
);

const Divider = () => (
  <div className="flex items-center justify-center gap-3 text-accent">
    <span className="h-px w-10 bg-current opacity-50" />
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M5 0l1.5 3.5L10 5 6.5 6.5 5 10 3.5 6.5 0 5l3.5-1.5z" /></svg>
    <span className="h-px w-10 bg-current opacity-50" />
  </div>
);

function Nav() {
  return (
    <header className="absolute top-0 inset-x-0 z-30 px-6 md:px-12 py-6 flex items-center justify-between text-paper">
      <div className="flex items-center gap-3">
        <Mandala className="w-7 h-7" />
        <span className="font-display text-xl tracking-brand">RAJVASTRA</span>
      </div>
      <nav className="hidden md:flex gap-10 text-xs tracking-[0.25em] uppercase">
        <a href="#story" className="hover:text-mustard transition-colors">Story</a>
        <a href="#collections" className="hover:text-mustard transition-colors">Collections</a>
        <a href="#craft" className="hover:text-mustard transition-colors">Craft</a>
        <a href="#community" className="hover:text-mustard transition-colors">Community</a>
      </nav>
      <button className="hidden md:inline-flex text-xs tracking-[0.25em] uppercase border border-paper/40 px-4 py-2 hover:bg-paper hover:text-ink transition-colors">
        Shop
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 animate-kenburns">
        <img src={heroImg} alt="Woman in red bandhani at a Jaipur palace" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />
      <div className="relative z-10 grain h-full flex items-center px-6 md:px-16">
        <div className="max-w-xl">
          <Mandala className="w-10 h-10 mb-6 text-mustard animate-fade-up" />
          <div className="animate-fade-up delay-150">
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-2">Rooted in Rajasthan.</h1>
            <h1 className="font-display italic text-5xl md:text-7xl leading-[1.05] text-mustard">Woven for Today.</h1>
          </div>
          <div className="my-7 animate-fade-up delay-300"><div className="h-px w-16 bg-mustard" /></div>
          <p className="font-serif text-lg md:text-xl text-paper/85 leading-relaxed max-w-md animate-fade-up delay-300">
            Handcrafted Bandhani silhouettes inspired by Rajasthan's heritage and made for modern India.
          </p>
          <div className="mt-10 animate-fade-up delay-500">
            <a href="#collections" className="group inline-flex items-center gap-3 bg-terracotta text-paper px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-maroon transition-colors">
              Explore Collection
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-paper/60 text-[10px] tracking-[0.4em] uppercase z-10">Scroll</div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="relative paper-bg py-24 md:py-36 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={storyImg} alt="Rajasthani artisans hand-tying bandhani" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
        </div>
        <div>
          <p className="text-xs tracking-brand text-accent mb-4">— Our Story</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            A Craft Passed <br/><span className="italic text-maroon">Through Generations.</span>
          </h2>
          <Divider />
          <p className="font-serif text-lg md:text-xl text-ink/75 leading-relaxed mt-8">
            Rajvastra works with local artisans and textile makers across Rajasthan to preserve Bandhani craftsmanship while reimagining it for everyday wear.
          </p>
          <p className="text-ink/60 leading-relaxed mt-5">
            Every tied knot carries the rhythm of a village in Kutch, Sikar or Jodhpur — quiet, deliberate, and deeply human. We don't manufacture fashion. We carry forward a story.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/15 pt-8 max-w-md">
            <div><div className="font-display text-3xl text-maroon">120+</div><div className="text-xs tracking-widest uppercase text-ink/60 mt-1">Artisans</div></div>
            <div><div className="font-display text-3xl text-maroon">14</div><div className="text-xs tracking-widest uppercase text-ink/60 mt-1">Villages</div></div>
            <div><div className="font-display text-3xl text-maroon">100%</div><div className="text-xs tracking-widest uppercase text-ink/60 mt-1">Handmade</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

const collections = [
  { name: "Bandhani Sarees", tag: "Heirloom", img: colSaree },
  { name: "Dupattas", tag: "Everyday Drape", img: colDupatta },
  { name: "Kurtas", tag: "Modern Ease", img: colKurta },
  { name: "Co-ord Sets", tag: "New In", img: colCoord },
  { name: "Everyday Ethnic", tag: "Daily Wear", img: colEveryday },
];

function Collections() {
  return (
    <section id="collections" className="bg-ink text-paper py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs tracking-brand text-mustard mb-3">— The Edit</p>
            <h2 className="font-display text-4xl md:text-5xl">Collections</h2>
          </div>
          <p className="font-serif text-lg text-paper/70 max-w-sm">
            From hand-tied sarees to everyday kurtas — five quiet ways to carry Rajasthan with you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
          {collections.map((c, i) => (
            <a key={c.name} href="#" className="group relative block aspect-[3/4] overflow-hidden bg-maroon">
              <img src={c.img} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] tracking-[0.3em] uppercase text-mustard mb-1">0{i + 1} · {c.tag}</p>
                <h3 className="font-display text-xl md:text-2xl">{c.name}</h3>
                <div className="mt-3 h-px w-0 group-hover:w-12 bg-mustard transition-all duration-500" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Craftsmanship() {
  return (
    <section id="craft" className="relative bg-sand py-24 md:py-36 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 grain opacity-60" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-brand text-accent mb-4">— Craftsmanship</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Tied by hand.<br/><span className="italic text-maroon">Dyed by earth.</span>
          </h2>
          <Divider />
          <p className="font-serif text-lg text-ink/70 mt-8">
            Each Bandhani begins as a plain length of cotton or silk. Thousands of tiny dots are tied by hand, then plunged into vats of natural dye. What returns is something a machine could never make.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-5 md:gap-6">
          <figure className="md:col-span-7 relative aspect-[4/3] overflow-hidden">
            <img src={craftHands} alt="Artisan hands tying bandhani knots" loading="lazy" className="w-full h-full object-cover" />
            <figcaption className="absolute bottom-4 left-4 right-4 text-paper">
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-80">Step 01</p>
              <p className="font-display text-2xl">The Tying</p>
            </figcaption>
          </figure>
          <figure className="md:col-span-5 relative aspect-[4/3] md:aspect-auto overflow-hidden">
            <img src={craftDye} alt="Natural dyes in brass vessels" loading="lazy" className="w-full h-full object-cover" />
            <figcaption className="absolute bottom-4 left-4 right-4 text-paper">
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-80">Step 02</p>
              <p className="font-display text-2xl">Natural Dyes</p>
            </figcaption>
          </figure>
          <figure className="md:col-span-12 relative aspect-[21/9] overflow-hidden">
            <img src={craftImg} alt="Folded handmade bandhani textiles" loading="lazy" className="w-full h-full object-cover" />
            <figcaption className="absolute bottom-6 left-6 right-6 text-paper flex items-end justify-between">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase opacity-80">Step 03</p>
                <p className="font-display text-2xl md:text-3xl">Finished by Hand, in Small Batches</p>
              </div>
              <p className="hidden md:block font-serif italic text-paper/80 max-w-xs text-right">Small batches. Natural dyes. Timeless craft.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { t: "Handmade in Rajasthan", d: "Every piece tied, dyed, and finished in our partner workshops." },
  { t: "Small Batch Production", d: "We make less, but with intention. No mass runs, no waste." },
  { t: "Artisan-Led", d: "Karigars are co-creators — credited, paid fairly, and ongoing." },
  { t: "Traditional Craftsmanship", d: "Bandhani, ajrakh, and block printing kept alive in living form." },
  { t: "Modern Wearability", d: "Silhouettes designed for the way India actually dresses today." },
];

function WhyRajvastra() {
  return (
    <section className="bg-paper py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-brand text-accent mb-3">— Why Rajvastra</p>
          <h2 className="font-display text-4xl md:text-5xl">A label rooted in something real.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
          {reasons.map((r, i) => (
            <div key={r.t} className="bg-paper p-8 hover:bg-sand transition-colors group">
              <div className="font-display text-3xl text-terracotta mb-6">0{i + 1}</div>
              <h3 className="font-display text-xl mb-3 leading-snug">{r.t}</h3>
              <p className="text-sm text-ink/65 leading-relaxed">{r.d}</p>
              <div className="mt-6 h-px w-8 bg-terracotta group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const gallery = [gal1, gal2, gal3, gal4, gal5, gal6];

function Community() {
  return (
    <section id="community" className="bg-sand py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-brand text-accent mb-3">— Community</p>
          <h2 className="font-display text-4xl md:text-5xl">Worn by India.</h2>
          <p className="font-serif text-lg text-ink/70 mt-4">Follow along <a className="text-maroon hover:underline" href="#">@rajvastra.in</a></p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {gallery.map((g, i) => (
            <a key={i} href="#" className="group relative aspect-square overflow-hidden bg-maroon">
              <img src={g} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors flex items-center justify-center">
                <span className="text-paper opacity-0 group-hover:opacity-100 text-xs tracking-[0.3em] uppercase transition-opacity">View</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-paper px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 pb-14 border-b border-paper/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <Mandala className="w-8 h-8 text-mustard" />
              <span className="font-display text-2xl tracking-brand">RAJVASTRA</span>
            </div>
            <p className="font-serif italic text-lg text-paper/70 max-w-sm leading-relaxed">
              "Rajasthan, gently folded and carried with you — one knot, one dye, one wear at a time."
            </p>
            <p className="mt-6 text-xs tracking-[0.3em] uppercase text-paper/50">Jaipur, Rajasthan · India</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.3em] uppercase text-mustard mb-4">Shop</p>
            <ul className="space-y-2 text-sm text-paper/70">
              <li><a href="#" className="hover:text-paper">Sarees</a></li>
              <li><a href="#" className="hover:text-paper">Dupattas</a></li>
              <li><a href="#" className="hover:text-paper">Kurtas</a></li>
              <li><a href="#" className="hover:text-paper">Co-ord Sets</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.3em] uppercase text-mustard mb-4">House</p>
            <ul className="space-y-2 text-sm text-paper/70">
              <li><a href="#story" className="hover:text-paper">Our Story</a></li>
              <li><a href="#craft" className="hover:text-paper">Craft</a></li>
              <li><a href="#" className="hover:text-paper">Artisans</a></li>
              <li><a href="#" className="hover:text-paper">Journal</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.3em] uppercase text-mustard mb-4">Letters from Jaipur</p>
            <p className="text-sm text-paper/60 mb-4">Slow notes on craft, drops, and the people who make it.</p>
            <form className="flex border border-paper/20">
              <input type="email" placeholder="your email" className="flex-1 bg-transparent px-3 py-2.5 text-sm placeholder:text-paper/40 focus:outline-none" />
              <button className="bg-terracotta px-4 text-xs tracking-[0.25em] uppercase hover:bg-maroon transition-colors">Join</button>
            </form>
            <div className="flex gap-4 mt-6 text-xs tracking-[0.25em] uppercase text-paper/60">
              <a href="#" className="hover:text-mustard">Instagram</a>
              <a href="#" className="hover:text-mustard">Pinterest</a>
              <a href="#" className="hover:text-mustard">YouTube</a>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-paper/40">
          <p>© {new Date().getFullYear()} Rajvastra. Handcrafted in Rajasthan.</p>
          <p>Made with love · Pinki Bazaar, Jaipur</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-paper text-ink overflow-x-hidden">
      <Nav />
      <Hero />
      <Story />
      <Collections />
      <Craftsmanship />
      <WhyRajvastra />
      <Community />
      <Footer />
    </main>
  );
}
