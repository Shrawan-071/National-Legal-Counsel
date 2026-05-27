function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-900/95 py-14">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div className="space-y-6">
          <a href="#home" className="flex items-center gap-3 text-xl font-semibold tracking-[0.22em] text-white hover-zoom-text transition-colors hover:text-brand-300">
            <div className="flex items-center justify-center w-8 h-8 bg-brand-500/20 rounded-full">
              <span className="text-xl">⚖️</span>
            </div>
            National Legal Counsel
          </a>
          <p className="max-w-sm text-dark-400 leading-7 hover-zoom-text">
            National Legal Counsel provides trusted legal advice across corporate, criminal, family, and real estate law while honoring the highest standards of professionalism.
          </p>
        </div>

        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.28em] text-brand-300">Quick Links</p>
          <ul className="space-y-4 text-dark-400">
            <li><a href="#home" className="transition-all hover:text-white hover:translate-x-2 hover-slide">Home</a></li>
            <li><a href="#about" className="transition-all hover:text-white hover:translate-x-2 hover-slide">About</a></li>
            <li><a href="#services" className="transition-all hover:text-white hover:translate-x-2 hover-slide">Services</a></li>
            <li><a href="#team" className="transition-all hover:text-white hover:translate-x-2 hover-slide">Our Team</a></li>
            <li><a href="#contact" className="transition-all hover:text-white hover:translate-x-2 hover-slide">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.28em] text-brand-300">Services</p>
          <ul className="space-y-4 text-dark-400">
            <li className="hover-zoom-text transition hover:text-white">Family Law</li>
            <li className="hover-zoom-text transition hover:text-white">Criminal Defense</li>
            <li className="hover-zoom-text transition hover:text-white">Corporate Law</li>
            <li className="hover-zoom-text transition hover:text-white">Real Estate</li>
            <li className="hover-zoom-text transition hover:text-white">Cyber Law</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6 text-center text-sm text-dark-500 sm:px-8 hover-zoom-text">
        © 2026{' '}
        <span className="inline-flex items-center justify-center w-4 h-4 bg-brand-500/20 rounded">
          <span className="text-xs">⚖️</span>
        </span>{' '}
        National Legal Counsel. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
