import type { Metadata } from 'next';
import ChefDirectory from '@/components/ChefDirectory';
import { chefs, levels, regions } from '@/lib/chefs';

export const metadata: Metadata = {
  title: 'Our chefs',
  description: `Browse all ${chefs.length} chefs in the directory — search by name, kitchen or cuisine, and filter by kitchen level or dzongkhag.`,
  alternates: { canonical: '/chefs' },
};

export default function ChefsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/10">
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: 'url(/patterns/weave.jpg)',
            backgroundSize: '300px',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-paper/85 via-paper/70 to-paper"
          aria-hidden="true"
        />
        <div className="shell relative py-16 sm:py-20 lg:py-24">
          <p className="label">The directory</p>
          <h1 className="mt-4 font-display text-[2.4rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Our chefs
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-graphite text-pretty">
            {chefs.length} chefs working across Bhutan, from executive chefs
            running full resort kitchens to commis two years into the trade.
            Each profile is built from the chef&rsquo;s own CV, and the original
            PDF is linked at the end of every page.
          </p>
        </div>
      </section>

      <ChefDirectory chefs={chefs} levels={levels} regions={regions} />
    </>
  );
}
