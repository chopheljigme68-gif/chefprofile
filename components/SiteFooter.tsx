import Link from 'next/link';
import Mark from './Mark';
import { chefs } from '@/lib/chefs';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print mt-24 border-t border-ink/10 bg-parchment">
      <div className="selvedge" aria-hidden="true" />
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <Mark className="h-7 w-7" />
            <span className="font-display text-lg font-semibold">
              The Chefs of Bhutan
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-graphite">
            Eleven chefs, from the kitchens of Thimphu, Paro, Trongsa and
            Gelephu. Every profile here is drawn from the chef&rsquo;s own CV.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="label">Directory</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/" className="text-graphite hover:text-crimson">
                Home
              </Link>
            </li>
            <li>
              <Link href="/chefs" className="text-graphite hover:text-crimson">
                All {chefs.length} chefs
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-graphite hover:text-crimson">
                About this directory
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="label">Recently added</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {chefs.slice(0, 4).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/chefs/${c.slug}`}
                  className="text-graphite hover:text-crimson"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="shell flex flex-col gap-2 py-6 text-2xs text-graphite sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} The Chefs of Bhutan. All rights reserved.</p>
          <p className="font-mono uppercase tracking-label">
            Made in Bhutan · འབྲུག་ཡུལ
          </p>
        </div>
      </div>
    </footer>
  );
}
