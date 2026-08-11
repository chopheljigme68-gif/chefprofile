'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Mark from './Mark';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/chefs', label: 'The chefs' },
  { href: '/about', label: 'About' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Close on Escape, and lock the page behind the open panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="The Chefs of Bhutan — home"
        >
          <Mark className="h-7 w-7 shrink-0 transition-transform duration-500 group-hover:rotate-45 sm:h-8 sm:w-8" />
          <span className="font-display text-base font-semibold leading-none tracking-tight sm:text-lg">
            The Chefs of Bhutan
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`relative font-mono text-2xs uppercase tracking-label transition-colors hover:text-crimson ${
                isActive(item.href) ? 'text-crimson' : 'text-graphite'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute -bottom-1.5 left-0 h-px w-full bg-crimson" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-sm text-ink md:hidden"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d={open ? 'M2 2 L18 12 M18 2 L2 12' : 'M0 1h20 M0 7h20 M0 13h20'}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className="selvedge" aria-hidden="true" />

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-nav"
          ref={panelRef}
          className="fixed inset-x-0 bottom-0 top-16 z-40 animate-fade-up overflow-y-auto border-t border-ink/10 bg-paper md:hidden"
        >
          <nav className="shell flex flex-col py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-ink/10 py-5 font-display text-2xl font-semibold ${
                  isActive(item.href) ? 'text-crimson' : 'text-ink'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
