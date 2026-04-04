export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-bg-base)] px-6 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.16),transparent_48%)]"
      />
      <div className="relative w-full max-w-lg rounded-[28px] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-8 py-10 text-center shadow-[var(--detail-card-shadow)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-status-error)]">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-[var(--color-text-primary)]">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
          The page you requested does not exist in this workspace or may have moved.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-elevated-hover)]"
        >
          Return to dashboard
        </a>
      </div>
    </div>
  );
}
