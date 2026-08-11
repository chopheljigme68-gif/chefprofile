'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="label">Something broke</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        This page didn&rsquo;t load.
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-graphite text-pretty">
        Try again. If it keeps happening, the page may need a fix rather than a
        retry.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-9 inline-flex items-center gap-2 bg-ink px-7 py-3.5 font-mono text-2xs uppercase tracking-label text-paper transition-colors hover:bg-crimson"
      >
        Try again
      </button>
    </div>
  );
}
