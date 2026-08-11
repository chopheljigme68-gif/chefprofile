import Image from 'next/image';
import Link from 'next/link';
import ChefCard from '@/components/ChefCard';
import { chefs } from '@/lib/chefs';

const featured = chefs.slice(0, 3);

const stats = [
  { value: String(chefs.length), label: 'Chefs listed' },
  { value: '4', label: 'Dzongkhags' },
  { value: '60+', label: 'Years in kitchens' },
  { value: '5', label: 'Countries worked' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — the textile is the thesis. */}
      <section className="relative overflow-hidden border-b border-ink/10">
        <div
          className="absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage: 'url(/patterns/weave.jpg)',
            backgroundSize: '300px',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-paper/85 via-paper/70 to-paper"
          aria-hidden="true"
        />

        <div className="shell relative py-20 sm:py-28 lg:py-36">
          <p className="label animate-fade-up">Bhutan · Culinary directory</p>
          <h1 className="mt-5 max-w-4xl animate-fade-up font-display text-[2.6rem] font-semibold leading-[1.03] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            The chefs behind Bhutan&rsquo;s kitchens.
          </h1>
          <p className="mt-7 max-w-prose animate-fade-up text-base leading-relaxed text-graphite text-pretty sm:text-lg">
            Executive chefs running resort kitchens in Trongsa. Commis coming up
            through the ranks in Paro. A World Cup line cook back home in
            Thimphu. Each profile here is built from the chef&rsquo;s own CV, and
            the original document sits at the bottom of every page.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/chefs"
              className="inline-flex items-center justify-center gap-2 bg-ink px-7 py-3.5 font-mono text-2xs uppercase tracking-label text-paper transition-colors hover:bg-crimson"
            >
              Meet the chefs
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
                <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-ink/25 px-7 py-3.5 font-mono text-2xs uppercase tracking-label transition-colors hover:border-ink"
            >
              How this works
            </Link>
          </div>
        </div>

        <div className="selvedge selvedge-thick" aria-hidden="true" />
      </section>

      {/* Stats */}
      <section className="border-b border-ink/10 bg-parchment/50">
        <dl className="shell grid grid-cols-2 gap-y-8 py-12 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="label">{s.label}</dt>
              <dd className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Featured */}
      <section className="shell py-16 sm:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label">Leading the pass</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Executive and head chefs
            </h2>
          </div>
          <Link
            href="/chefs"
            className="inline-flex items-center gap-1.5 font-mono text-2xs uppercase tracking-label text-crimson hover:underline"
          >
            All {chefs.length} chefs
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
              <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </Link>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featured.map((chef, i) => (
            <li key={chef.slug} className="flex">
              <ChefCard chef={chef} index={i} />
            </li>
          ))}
        </ul>
      </section>

      {/* Closing band */}
      <section className="relative overflow-hidden border-y border-ink/10">
        <Image
          src="/patterns/bloom.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="shell relative py-20 text-center sm:py-28">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Every chef here cooks where the recipe comes from.
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-base leading-relaxed text-graphite text-pretty">
            Ema datshi and suja, yes — but also Thai, Cantonese, Basque-inflected
            continental and à la carte from a Marriott line. Read the CVs and
            see for yourself.
          </p>
          <Link
            href="/chefs"
            className="mt-9 inline-flex items-center gap-2 bg-ink px-7 py-3.5 font-mono text-2xs uppercase tracking-label text-paper transition-colors hover:bg-crimson"
          >
            Browse the directory
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
              <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
