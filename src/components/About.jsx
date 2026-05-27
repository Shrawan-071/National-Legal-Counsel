const features = [
  {
    title: 'Excellence',
    description: 'We uphold the highest standards with thorough research, strong advocacy, and clear communication.',
  },
  {
    title: 'Client Focus',
    description: 'Every case is handled with empathy, transparency, and a plan designed for your best results.',
  },
];

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-brand-300 hover-zoom">About Us</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl hover-zoom-text">National Legal Counsel Delivers Trusted Representation</h2>
          <p className="mt-6 text-dark-400 leading-8 hover-zoom-text">
            National Legal Counsel is a distinguished law firm based in Nepal, dedicated to delivering exceptional legal services with integrity,
            professionalism, and precision. We specialize in a wide range of legal fields, including corporate law, dispute resolution,
            intellectual property, and family law, ensuring that our clients receive comprehensive and tailored solutions.
          </p>
          <p className="mt-6 text-dark-400 leading-8 hover-zoom-text">
            With a team of experienced attorneys, we are committed to upholding the highest standards of legal excellence, offering
            strategic advice and effective representation. At National Legal Counsel, we believe in building lasting relationships based
            on trust, transparency, and results.
          </p>
        </div>

        <div className="space-y-5">
          <div className="overflow-hidden rounded-[2rem] border border-dark-700/80 bg-dark-900/90 shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"
              alt="AI generated legal team collaboration"
              className="h-72 w-full object-cover transition duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="rounded-[2rem] border border-dark-700/80 bg-dark-900/80 p-8 shadow-soft">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-dark-700/60 bg-dark-900/80 p-6 transition-all duration-300 hover:border-brand-500/50 hover:bg-dark-900/90 hover-lift hover-glow">
                <h3 className="text-xl font-semibold text-white hover-zoom-text">{feature.title}</h3>
                <p className="mt-3 text-dark-400 hover-zoom-text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
