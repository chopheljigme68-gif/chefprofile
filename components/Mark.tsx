/**
 * The site mark: a single lozenge lifted out of the pangtse lattice —
 * crimson frame, saffron diamond, clay centre.
 */
export default function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect
        x="16"
        y="1.5"
        width="20.5"
        height="20.5"
        rx="1"
        transform="rotate(45 16 1.5)"
        fill="none"
        stroke="var(--crimson)"
        strokeWidth="2.4"
        strokeDasharray="2.4 2"
      />
      <rect
        x="16"
        y="8"
        width="11.3"
        height="11.3"
        transform="rotate(45 16 8)"
        fill="none"
        stroke="var(--saffron)"
        strokeWidth="2"
      />
      <rect
        x="16"
        y="12.8"
        width="4.5"
        height="4.5"
        transform="rotate(45 16 12.8)"
        fill="var(--clay)"
      />
    </svg>
  );
}
