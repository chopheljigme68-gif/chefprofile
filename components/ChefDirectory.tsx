'use client';

import { useDeferredValue, useMemo, useState } from 'react';
import ChefCard from './ChefCard';
import type { Chef, Level } from '@/lib/types';

interface Props {
  chefs: Chef[];
  levels: Level[];
  regions: string[];
}

type Filter = { level: Level | 'all'; region: string | 'all' };

export default function ChefDirectory({ chefs, levels, regions }: Props) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>({ level: 'all', region: 'all' });
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return chefs.filter((c) => {
      if (filter.level !== 'all' && c.level !== filter.level) return false;
      if (filter.region !== 'all' && c.region !== filter.region) return false;
      if (!q) return true;
      const haystack = [
        c.name,
        c.title,
        c.location,
        c.summary,
        ...c.specialities,
        ...c.skills,
        ...c.experience.map((e) => `${e.role} ${e.org}`),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [chefs, deferredQuery, filter]);

  const isFiltered =
    filter.level !== 'all' || filter.region !== 'all' || query.trim() !== '';

  const reset = () => {
    setQuery('');
    setFilter({ level: 'all', region: 'all' });
  };

  return (
    <div>
      {/* Controls */}
      <div className="border-y border-ink/10 bg-parchment/60">
        <div className="shell flex flex-col gap-5 py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="relative block w-full lg:max-w-xs">
              <span className="sr-only">Search chefs</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
              >
                <circle
                  cx="6.5"
                  cy="6.5"
                  r="4.75"
                  stroke="var(--clay)"
                  strokeWidth="1.2"
                />
                <path
                  d="m10.5 10.5 3 3"
                  stroke="var(--clay)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, kitchen or cuisine"
                className="w-full border border-ink/15 bg-paper py-2.5 pl-9 pr-3 text-sm placeholder:text-graphite/60 focus:border-crimson focus:outline-none"
              />
            </label>

            <p
              className="font-mono text-2xs uppercase tracking-label text-clay"
              aria-live="polite"
              aria-atomic="true"
            >
              {results.length} {results.length === 1 ? 'chef' : 'chefs'}
              {isFiltered ? ' matching' : ' in the directory'}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:gap-6">
            <FilterRow
              legend="Level"
              options={['all', ...levels]}
              value={filter.level}
              onChange={(v) => setFilter((f) => ({ ...f, level: v as Level }))}
            />
            <FilterRow
              legend="Dzongkhag"
              options={['all', ...regions]}
              value={filter.region}
              onChange={(v) => setFilter((f) => ({ ...f, region: v }))}
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="shell py-12 sm:py-16">
        <h2 className="sr-only">Chef profiles</h2>
        {results.length > 0 ? (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {results.map((chef, i) => (
              <li key={chef.slug} className="flex">
                <ChefCard chef={chef} index={i} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto max-w-md py-16 text-center">
            <p className="font-display text-2xl font-semibold">
              No chefs match that yet.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-graphite">
              Try a broader search, or clear the filters to see all{' '}
              {chefs.length} profiles.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 border border-ink px-5 py-2.5 font-mono text-2xs uppercase tracking-label transition-colors hover:bg-ink hover:text-paper"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterRow({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="label mb-2">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(opt)}
              className={`border px-3 py-1.5 text-xs transition-colors ${
                active
                  ? 'border-ink bg-ink text-paper'
                  : 'border-ink/20 bg-paper text-graphite hover:border-ink/50 hover:text-ink'
              }`}
            >
              {opt === 'all' ? 'All' : opt}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
