export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0f]/60 border-b border-white/5">
      <nav className="max-w-5xl mx-auto px-6 h-14" />
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-backdrop pointer-events-none" />
      <div
        aria-hidden
        className="absolute left-1/2 top-24 -translate-x-1/2 w-[560px] h-[560px] rounded-full blur-3xl glow-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,255,0.45) 0%, rgba(34,211,238,0.20) 40%, transparent 70%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-32 sm:pt-36 sm:pb-40">
        <h1 className="rise text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
          <span className="gradient-text">Naoya Hayashi</span>
        </h1>
        <p className="rise rise-d1 mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl">
        </p>
        <SocialLinks className="rise rise-d2 mt-10" />
      </div>
    </section>
  );
}

function SocialLinks({ className = "" }: { className?: string }) {
  const items = [
    {
      label: "GitHub",
      href: "https://github.com/NaoyaHayashi37",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="w-6 h-6">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
          />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@nekko-gi",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="w-6 h-6">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.546 15.568V8.432L15.818 12l-6.272 3.568Z" />
        </svg>
      ),
    },
  ];

  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/15 bg-white/[0.03] text-zinc-300 hover:text-white hover:border-accent/60 hover:bg-accent/10 hover:-translate-y-0.5 transition-all"
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 py-10 text-sm text-zinc-500">
        <p className="font-mono">© {new Date().getFullYear()} Naoya Hayashi</p>
      </div>
    </footer>
  );
}
