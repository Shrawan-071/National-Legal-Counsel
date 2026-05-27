const steps = [
  {
    number: '01',
    title: 'Schedule Time',
    description: 'Select a convenient appointment window so our team can learn about your legal needs and your goals.',
  },
  {
    number: '02',
    title: 'Consultation',
    description: 'Meet with our attorneys for a thoughtful review, case analysis, and a clear path forward.',
  },
  {
    number: '03',
    title: 'Plan',
    description: 'Receive a targeted legal strategy built around your situation, timeline, and expectations.',
  },
];

function Consultation() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-brand-300 hover-zoom">Consultation</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl hover-zoom-text">A Simple 3-Step Process to Start Your Case</h2>
        <p className="mt-5 text-slate-400 hover-zoom-text">
          Our consultation process is designed to be straightforward, reassuring, and focused on building the right legal strategy together.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.number} className="card-bg rounded-[2rem] border border-slate-700/70 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/40 hover-lift hover-glow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-500/10 text-lg font-semibold text-brand-200 transition-all hover:bg-brand-500/20 hover:scale-110 emoji-hover">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold text-white hover-zoom-text">{step.title}</h3>
            <p className="mt-4 text-slate-400 hover-zoom-text">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Consultation;
