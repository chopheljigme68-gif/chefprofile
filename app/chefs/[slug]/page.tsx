import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Section from '@/components/Section';
import { chefs, getChef, getNeighbours } from '@/lib/chefs';
import type { Study } from '@/lib/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return chefs.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const chef = getChef(slug);
  if (!chef) return { title: 'Chef not found' };

  return {
    title: `${chef.name} — ${chef.title}`,
    description: chef.summary,
    alternates: { canonical: `/chefs/${chef.slug}` },
    openGraph: {
      title: `${chef.name} — ${chef.title}`,
      description: chef.summary,
      type: 'profile',
      images: [{ url: chef.photo, width: 800, height: 1000, alt: chef.photoAlt }],
    },
  };
}

export default async function ChefProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const chef = getChef(slug);
  if (!chef) notFound();

  const { prev, next } = getNeighbours(chef.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: chef.name,
    jobTitle: chef.title,
    image: chef.photo,
    description: chef.summary,
    address: { '@type': 'PostalAddress', addressLocality: chef.location, addressCountry: 'BT' },
    knowsAbout: chef.specialities,
    ...(chef.contact.email ? { email: chef.contact.email } : {}),
    ...(chef.contact.phone ? { telephone: chef.contact.phone } : {}),
    worksFor: chef.experience[0]
      ? { '@type': 'Organization', name: chef.experience[0].org }
      : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Static, author-controlled data — no user input reaches this string.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="no-print border-b border-ink/10 bg-parchment/50"
      >
        <ol className="shell flex items-center gap-2 py-3.5 font-mono text-2xs uppercase tracking-label text-graphite">
          <li>
            <Link href="/" className="hover:text-crimson">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/chefs" className="hover:text-crimson">
              Chefs
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="truncate text-ink" aria-current="page">
            {chef.name}
          </li>
        </ol>
      </nav>

      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-[0.13]"
          style={{
            backgroundImage: 'url(/patterns/weave.jpg)',
            backgroundSize: '300px',
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-paper/70 to-paper"
          aria-hidden="true"
        />

        <div className="shell relative py-10 sm:py-14 lg:py-16">
          {/*
            One column on small screens, where `contents` promotes the portrait
            and the contact card to siblings of the bio so they can be ordered
            around it. Two columns from lg, where the rail becomes a real box
            again and can stick.
          */}
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-16">
            {/* Left rail */}
            <div className="contents lg:sticky lg:top-28 lg:block lg:self-start">
              <figure className="order-1 overflow-hidden border border-ink/10 bg-parchment shadow-card lg:order-none">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={chef.photo}
                    alt={chef.photoAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 340px"
                    priority
                    className="object-cover object-top"
                  />
                </div>
                <div className="selvedge" aria-hidden="true" />
              </figure>

              <div className="order-3 border border-ink/10 bg-paper p-5 lg:order-none lg:mt-6">
                <h2 className="label">Get in touch</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  {chef.contact.email && (
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          href={`mailto:${chef.contact.email}`}
                          className="break-all text-graphite underline decoration-ink/20 underline-offset-4 hover:text-crimson"
                        >
                          {chef.contact.email}
                        </a>
                      </dd>
                    </div>
                  )}
                  {chef.contact.phone && (
                    <div>
                      <dt className="sr-only">Phone</dt>
                      <dd>
                        <a
                          href={`tel:${chef.contact.phone.replace(/\s/g, '')}`}
                          className="text-graphite underline decoration-ink/20 underline-offset-4 hover:text-crimson"
                        >
                          {chef.contact.phone}
                        </a>
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="sr-only">Based in</dt>
                    <dd className="text-graphite">{chef.location}</dd>
                  </div>
                </dl>

                <a
                  href={chef.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-print mt-5 flex w-full items-center justify-center gap-2 bg-ink px-5 py-3 font-mono text-2xs uppercase tracking-label text-paper transition-colors hover:bg-crimson"
                >
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
                    <path
                      d="M6 0v9M2.5 6 6 9.5 9.5 6M0.5 12.5h11"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>

            {/* Main column */}
            <div className="order-2 min-w-0 lg:order-none">
              <p className="label">{chef.level}</p>
              <h1 className="mt-3 font-display text-[2.4rem] font-semibold leading-[1.04] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
                {chef.name}
              </h1>
              <p className="mt-4 font-display text-xl italic text-clay sm:text-2xl">
                {chef.title}
                {chef.years ? ` · ${chef.years}+ years` : ''}
              </p>

              <p className="mt-7 max-w-prose text-base leading-relaxed text-graphite text-pretty sm:text-lg">
                {chef.summary}
              </p>

              <div className="mt-9 grid gap-6 border-y border-ink/10 py-7 sm:grid-cols-2">
                <TagList title="Specialities" items={chef.specialities} />
                <TagList title="Accolades" items={chef.accolades} />
              </div>

              <div className="mt-12 space-y-12">
                {chef.experience.length > 0 && (
                  <Section eyebrow="Where they've cooked" title="Experience">
                    <ol className="relative space-y-9 border-l border-ink/15 pl-6 sm:pl-8">
                      {chef.experience.map((role, i) => (
                        <li key={`${role.org}-${i}`} className="relative">
                          <span
                            className="absolute -left-[1.6rem] top-2 block h-2.5 w-2.5 rotate-45 border border-crimson bg-paper sm:-left-[2.1rem]"
                            aria-hidden="true"
                          />
                          <h3 className="font-display text-lg font-semibold leading-snug sm:text-xl">
                            {role.role}
                          </h3>
                          <p className="mt-1 text-sm text-clay">
                            {role.org}
                            {role.location ? ` · ${role.location}` : ''}
                          </p>
                          {role.period && (
                            <p className="mt-1 font-mono text-2xs uppercase tracking-label text-graphite/70">
                              {role.period}
                            </p>
                          )}
                          {role.points && role.points.length > 0 && (
                            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-graphite">
                              {role.points.map((p, j) => (
                                <li key={j} className="flex gap-2.5">
                                  <span
                                    className="mt-[0.55rem] h-1 w-1 shrink-0 rotate-45 bg-saffron"
                                    aria-hidden="true"
                                  />
                                  <span className="text-pretty">{p}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ol>
                  </Section>
                )}

                {chef.education.length > 0 && (
                  <Section eyebrow="Where they trained" title="Education">
                    <StudyList items={chef.education} />
                  </Section>
                )}

                {chef.training && chef.training.length > 0 && (
                  <Section eyebrow="Beyond school" title="Training">
                    <StudyList items={chef.training} />
                  </Section>
                )}

                {chef.certificates && chef.certificates.length > 0 && (
                  <Section eyebrow="On the record" title="Certificates & awards">
                    <ul className="space-y-3 text-sm leading-relaxed text-graphite">
                      {chef.certificates.map((c) => (
                        <li key={c} className="flex gap-3 border-b border-ink/10 pb-3">
                          <span
                            className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rotate-45 border border-jade"
                            aria-hidden="true"
                          />
                          <span className="text-pretty">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </Section>
                )}

                {chef.projects && chef.projects.length > 0 && (
                  <Section eyebrow="Research" title="Academic projects">
                    <ul className="space-y-5">
                      {chef.projects.map((p) => (
                        <li key={p.title}>
                          <h3 className="font-display text-lg font-semibold leading-snug">
                            {p.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-graphite text-pretty">
                            {p.detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </Section>
                )}

                <Section eyebrow="What they bring" title="Skills">
                  <ul className="flex flex-wrap gap-2">
                    {chef.skills.map((s) => (
                      <li
                        key={s}
                        className="border border-ink/15 bg-parchment/60 px-3 py-1.5 text-xs text-graphite"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>

                  {chef.languages && chef.languages.length > 0 && (
                    <div className="mt-8">
                      <h3 className="label">Languages</h3>
                      <p className="mt-2.5 text-sm text-graphite">
                        {chef.languages.join(' · ')}
                      </p>
                    </div>
                  )}

                  {chef.interests && chef.interests.length > 0 && (
                    <div className="mt-6">
                      <h3 className="label">Outside the kitchen</h3>
                      <p className="mt-2.5 text-sm text-graphite">
                        {chef.interests.join(' · ')}
                      </p>
                    </div>
                  )}
                </Section>

                {chef.references && chef.references.length > 0 && (
                  <Section eyebrow="Vouched for by" title="References">
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {chef.references.map((r) => (
                        <li
                          key={r.name}
                          className="border border-ink/10 bg-parchment/40 p-4"
                        >
                          <p className="font-display text-base font-semibold">
                            {r.name}
                          </p>
                          <p className="mt-1 text-sm text-graphite text-pretty">
                            {r.role}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-xs text-graphite/70">
                      Referee contact details are held on the original CV and
                      shared on request.
                    </p>
                  </Section>
                )}

                {/* Source document */}
                <Section eyebrow="Source" title="The original CV">
                  <p className="max-w-prose text-sm leading-relaxed text-graphite text-pretty">
                    Everything on this page comes from the CV {chef.name}{' '}
                    submitted. Open the original document to see it as written.
                  </p>
                  <a
                    href={chef.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-print mt-5 inline-flex items-center gap-2 border border-ink px-6 py-3 font-mono text-2xs uppercase tracking-label transition-colors hover:bg-ink hover:text-paper"
                  >
                    Open CV (PDF)
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path
                        d="M4 1h7v7M11 1 2 10M1 4v7h7"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </Section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / next */}
      <nav
        aria-label="More chefs"
        className="no-print border-t border-ink/10 bg-parchment/50"
      >
        <div className="shell grid gap-px py-0 sm:grid-cols-2">
          {prev && (
            <Link
              href={`/chefs/${prev.slug}`}
              className="group flex flex-col gap-1 py-8 sm:pr-8"
            >
              <span className="label">Previous chef</span>
              <span className="font-display text-xl font-semibold transition-colors group-hover:text-crimson sm:text-2xl">
                {prev.name}
              </span>
              <span className="text-sm text-graphite">{prev.title}</span>
            </Link>
          )}
          {next && (
            <Link
              href={`/chefs/${next.slug}`}
              className="group flex flex-col gap-1 border-t border-ink/10 py-8 sm:items-end sm:border-l sm:border-t-0 sm:pl-8 sm:text-right"
            >
              <span className="label">Next chef</span>
              <span className="font-display text-xl font-semibold transition-colors group-hover:text-crimson sm:text-2xl">
                {next.name}
              </span>
              <span className="text-sm text-graphite">{next.title}</span>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

function TagList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="label">{title}</h2>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-graphite">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span
              className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-crimson"
              aria-hidden="true"
            />
            <span className="text-pretty">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StudyList({ items }: { items: Study[] }) {
  return (
    <ul className="space-y-6">
      {items.map((s, i) => (
        <li key={`${s.qualification}-${i}`} className="border-b border-ink/10 pb-6 last:border-0 last:pb-0">
          <h3 className="font-display text-lg font-semibold leading-snug">
            {s.qualification}
          </h3>
          <p className="mt-1 text-sm text-clay">{s.institution}</p>
          {s.period && (
            <p className="mt-1 font-mono text-2xs uppercase tracking-label text-graphite/70">
              {s.period}
            </p>
          )}
          {s.detail && (
            <p className="mt-2.5 text-sm leading-relaxed text-graphite text-pretty">
              {s.detail}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
