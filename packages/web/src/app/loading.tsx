export default function Loading() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-bg-base)] px-6 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,126,248,0.16),transparent_48%)]"
      />
      <div className="relative w-full max-w-lg rounded-[28px] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-8 py-10 text-center shadow-[var(--detail-card-shadow)]">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)]">
          <div className="h-3 w-3 animate-pulse rounded-full bg-[var(--color-accent)]" />
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-text-tertiary)]">
          Dashboard
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)]">
          Loading agent state
        </h1>
        <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
          Fetching projects, sessions, and orchestrators.
        </p>
        <div
          role="status"
          aria-live="polite"
          className="mt-8 text-[13px] text-[var(--color-text-tertiary)]"
        >
          Loading dashboard...
        </div>
      </div>
    </div>
  );
}
