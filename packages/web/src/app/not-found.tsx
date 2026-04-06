import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg-base)]">
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <svg
          className="mb-4 h-8 w-8 text-[var(--color-border-strong)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h2 className="mb-2 text-xl font-medium text-[var(--color-text-primary)]">Page Not Found</h2>
        <p className="mb-6 text-[13px] text-[var(--color-text-muted)]">
          Could not find the requested resource.
        </p>
        <Link
          href="/"
          className="rounded-md border border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)] px-4 py-2 text-[13px] font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-primary)]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
