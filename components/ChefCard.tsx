import Image from 'next/image';
import Link from 'next/link';
import type { Chef } from '@/lib/types';

interface Props {
  chef: Chef;
  /** Index in the grid — drives the image priority hint and stagger. */
  index?: number;
}

export default function ChefCard({ chef, index = 0 }: Props) {
  const specialities = chef.specialities.join(', ');
  const accolades = chef.accolades.join('. ');

  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-ink/10 bg-paper shadow-card transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-lift focus-within:-translate-y-1 focus-within:shadow-lift">
      <div className="relative aspect-[4/5] overflow-hidden bg-parchment">
        <Image
          src={chef.photo}
          alt={chef.photoAlt}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
          priority={index < 3}
          className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-0 top-0 bg-paper/95 px-3 py-1.5 font-mono text-2xs uppercase tracking-label text-clay">
          {chef.title}
        </span>
      </div>

      {/* Signature woven edge — widens on hover. */}
      <div
        className="selvedge transition-[height] duration-500 group-hover:h-2.5"
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
          <Link
            href={`/chefs/${chef.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {chef.name}
          </Link>
        </h3>

        <p className="mt-1 flex items-center gap-1.5 text-sm text-graphite">
          <svg
            width="11"
            height="13"
            viewBox="0 0 11 13"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <path
              d="M5.5.75c2.35 0 4.25 1.9 4.25 4.25 0 3.1-4.25 7.25-4.25 7.25S1.25 8.1 1.25 5C1.25 2.65 3.15.75 5.5.75Z"
              stroke="var(--olive)"
              strokeWidth="1.1"
            />
            <circle cx="5.5" cy="5" r="1.5" fill="var(--olive)" />
          </svg>
          {chef.location}
        </p>

        <span className="relative z-10 mt-4 inline-flex w-fit items-center gap-1.5 font-mono text-2xs uppercase tracking-label text-crimson">
          View profile
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M0 4h12M9 1l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </span>

        <dl className="mt-5 space-y-3 border-t border-ink/10 pt-5 text-sm leading-relaxed">
          <div>
            <dt className="label">Specialities</dt>
            <dd className="mt-1 line-clamp-2 text-graphite">{specialities}</dd>
          </div>
          <div>
            <dt className="label">Accolades</dt>
            <dd className="mt-1 line-clamp-2 text-graphite">{accolades}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
