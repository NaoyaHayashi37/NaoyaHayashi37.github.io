import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex-1 flex items-center justify-center overflow-hidden px-6 py-32">
      <div className="absolute inset-0 grid-backdrop pointer-events-none" />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full blur-3xl glow-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,255,0.4) 0%, rgba(34,211,238,0.15) 40%, transparent 70%)",
        }}
      />
      <div className="relative text-center">
        <p className="rise text-[120px] sm:text-[160px] font-semibold leading-none tracking-tight">
          <span className="gradient-text">404</span>
        </p>
        <p className="rise rise-d1 mt-4 text-lg text-zinc-400">
          Page not found
        </p>
        <Link
          href="/"
          className="rise rise-d2 mt-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-sm text-white hover:bg-white/5 hover:border-accent/60 transition-colors"
        >
          <span aria-hidden>←</span>
          Back to home
        </Link>
      </div>
    </main>
  );
}
