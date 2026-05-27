const services = [
  {
    title: 'Family Law',
    icon: '👨‍👩‍👧',
    description: 'Support for families navigating sensitive legal matters with care and clarity.',
    items: ['Divorce & Separation', 'Child Custody & Support', 'Adoption & Guardianship', 'Family Mediation'],
  },
  {
    title: 'Criminal Defense',
    icon: '⚖️',
    description: 'Strong defense strategies for individuals facing criminal charges.',
    items: ['DUI & Traffic Offenses', 'Assault & Violence', 'Theft & Property Crimes', 'Bail & Pretrial Support'],
  },
  {
    title: 'Corporate Law',
    icon: '🏢',
    description: 'Legal guidance for businesses across formation, compliance, and disputes.',
    items: ['Business Formation', 'Contract Drafting', 'Compliance & Governance', 'Mergers & Acquisitions'],
  },
  {
    title: 'Real Estate',
    icon: '🏡',
    description: 'Expert support for property transactions, leasing, and title matters.',
    items: ['Residential Transactions', 'Commercial Leases', 'Due Diligence', 'Property Disputes'],
  },
  {
    title: 'Cyber Law',
    icon: '🛡️',
    description: 'Protection for digital operations, privacy, and technology-driven risk.',
    items: ['Data Protection', 'Online Disputes', 'Cybercrime Response', 'Technology Contracts'],
  },
  {
    title: 'Intellectual Property',
    icon: '💡',
    description: 'Safeguarding creative and business innovation with tailored IP support.',
    items: ['Trademark Registration', 'Copyright Protection', 'Patent Strategy', 'Licensing Agreements'],
  },
];

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-brand-300 hover-zoom">Services</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl hover-zoom-text">Practice Areas Delivered with Precision</h2>
        <p className="mt-5 text-dark-400 hover-zoom-text">
          Our services are crafted to provide practical legal solutions, backed by years of experience and a commitment to client success.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="group overflow-hidden rounded-[2rem] border border-dark-700/70 bg-dark-900/80 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/40 hover:bg-dark-900/95 hover:shadow-2xl hover:shadow-brand-500/20">
            <div className="p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 transition-all duration-300 group-hover:bg-brand-500/20 group-hover:scale-110 emoji-hover">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white hover-zoom-text transition-all group-hover:text-brand-200">{service.title}</h3>
              <p className="mt-4 text-dark-400 hover-zoom-text transition-all group-hover:text-dark-300">{service.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-dark-300">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/10 text-brand-200">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
