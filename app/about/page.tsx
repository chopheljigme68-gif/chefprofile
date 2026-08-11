import type { Metadata } from 'next';
import Link from 'next/link';
import { chefs, regions } from '@/lib/chefs';

export const metadata: Metadata = {
  title: 'About',
  description:
    'How this directory is built: where the profiles come from, what is published, and what is deliberately left out.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
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
          <p className="label">About</p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.4rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            A directory built from the chefs&rsquo; own words.
          </h1>
        </div>
      </section>

      <div className="shell-narrow py-14 sm:py-20">
        <div className="space-y-12">
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Where the profiles come from
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite text-pretty">
              Every profile on this site is transcribed from a CV the chef
              submitted. Nothing is invented, embellished or filled in from
              elsewhere. Job titles, dates, schools and scores are reproduced as
              written; only the prose has been tidied for reading on a screen.
              The original PDF is linked at the bottom of each profile so you
              can check it yourself.
            </p>
            <p className="mt-4 text-base leading-relaxed text-graphite text-pretty">
              Portraits are taken from the same CVs. Where a CV arrived as a
              scan, the photograph was lifted from the page.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              What is deliberately left out
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite text-pretty">
              A CV handed to an employer and a page open to the whole internet
              are not the same document. Several of these CVs carry details that
              belong in the first and not the second, so the following are
              excluded from every profile:
            </p>
            <ul className="mt-5 space-y-2.5 text-base leading-relaxed text-graphite">
              {[
                'Citizenship ID numbers',
                'Dates of birth',
                'Driving licence numbers',
                'Height and weight',
                "Parents' names and phone numbers",
                "Referees' direct phone numbers and email addresses",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-crimson"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base leading-relaxed text-graphite text-pretty">
              Referees are listed by name and role, which is enough to establish
              standing without publishing someone else&rsquo;s phone number.
              Chefs&rsquo; own email addresses and phone numbers are published,
              since being reachable is the point of a professional directory.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              The design
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite text-pretty">
              The palette and the woven edge that runs under the header and
              across every card are drawn from a Bhutanese pangtse textile — the
              cream ground, the crimson lattice, saffron diamonds, olive zigzags
              and clay centres. The motif is redrawn in CSS rather than pasted
              in as an image, so it stays crisp at any size.
            </p>
          </section>

          <section className="border-t border-ink/10 pt-12">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              The directory at a glance
            </h2>
            <dl className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <dt className="label">Chefs</dt>
                <dd className="mt-2 font-display text-4xl font-semibold">
                  {chefs.length}
                </dd>
              </div>
              <div>
                <dt className="label">Dzongkhags</dt>
                <dd className="mt-2 font-display text-4xl font-semibold">
                  {regions.length}
                </dd>
              </div>
              <div>
                <dt className="label">CVs on file</dt>
                <dd className="mt-2 font-display text-4xl font-semibold">
                  {chefs.length}
                </dd>
              </div>
            </dl>

            <Link
              href="/chefs"
              className="mt-10 inline-flex items-center gap-2 bg-ink px-7 py-3.5 font-mono text-2xs uppercase tracking-label text-paper transition-colors hover:bg-crimson"
            >
              Browse the directory
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
                <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
