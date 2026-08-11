interface Props {
  /** Tracked-out label above the heading. */
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  id?: string;
}

export default function Section({ eyebrow, title, children, id }: Props) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-ink/10 pt-10">
      <p className="label">{eyebrow}</p>
      <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-7">{children}</div>
    </section>
  );
}
