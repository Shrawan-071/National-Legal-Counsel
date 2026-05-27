import heroBg from '../assets/nlc.png';

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16 min-h-screen"
    >
      <div
        className="absolute inset-0 z-0 animate-zoom-slow"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          filter: 'brightness(1.05) contrast(1.08)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10 bg-black/40" aria-hidden="true" />
      <div className="mx-auto relative z-20 flex max-w-7xl flex-col gap-16 px-6 sm:px-8 items-center justify-center text-center">
        <div className="relative z-20 max-w-4xl" style={{ textShadow: '0 14px 35px rgba(0, 0, 0, 0.35)' }}>
          <h1 className="flex flex-col items-center gap-4 hover-zoom-text">
            <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90 leading-tight">WELCOME TO</span>
            <span className="flex items-center justify-center gap-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl whitespace-nowrap">
              <div className="flex items-center justify-center w-14 h-14 bg-brand-500 text-slate-950 rounded-xl shadow-lg shadow-brand-500/40">
                <span className="text-3xl">⚖️</span>
              </div>
              National Legal Counsel
            </span>
          </h1>
          <p className="mt-8 inline-flex rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-slate-950 hover-zoom transition-all hover:bg-brand-400 hover:text-slate-950">
            Trusted Legal Counsel
          </p>
          <p className="mt-10 max-w-xl text-lg leading-8 text-white/85 sm:text-xl hover-zoom-text">
            We provide expert legal services in Nepal with integrity, precision, and personalized guidance for every case.
          </p>
          <div className="mt-16 flex flex-col gap-6 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-brand-400 hover:scale-105 hover:shadow-lg hover:shadow-brand-500/30"
            >
              Book Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-dark-700 bg-dark-900 px-6 py-3 text-sm font-semibold text-dark-100 transition-all hover:border-brand-500 hover:text-white hover:scale-105 hover:bg-brand-500/10"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
