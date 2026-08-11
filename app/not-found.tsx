import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="label">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Nothing on this pass.
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-graphite text-pretty">
        That page isn&rsquo;t in the directory. The chefs are all still here
        though.
      </p>
      <Link
        href="/chefs"
        className="mt-9 inline-flex items-center gap-2 bg-ink px-7 py-3.5 font-mono text-2xs uppercase tracking-label text-paper transition-colors hover:bg-crimson"
      >
        Back to the chefs
      </Link>
    </div>
  );
}
