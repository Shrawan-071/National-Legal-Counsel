import { useState } from 'react';

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark-900/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-3 text-lg font-semibold tracking-[0.18em] text-white hover-zoom-text transition-colors hover:text-brand-300">
          <div className="flex items-center justify-center w-8 h-8 bg-brand-500/20 rounded-full">
            <span className="text-xl">⚖️</span>
          </div>
          National Legal Counsel
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className="text-dark-300 transition-all duration-300 hover:text-white hover:scale-105 hover:-translate-y-1">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-brand-400 md:inline-flex"
          >
            Book Consultation
          </a>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-dark-700 bg-dark-900 text-dark-200 transition hover:border-brand-500 hover:text-white md:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            <span className="text-2xl">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-dark-900/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-dark-200 transition-all duration-300 hover:bg-dark-900 hover:text-white hover:scale-105"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-2xl bg-brand-500 px-4 py-3 text-center font-semibold text-slate-950 transition hover:bg-brand-400"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
