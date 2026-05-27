import raamImage from '../assets/raam.jpeg';

const teamMembers = [
  {
    name: 'Ramprawesh Yadav',
    role: 'Founding Partner',
    phone: '9820772703',
    description: 'Experienced legal strategist specializing in criminal law, corporate representation, and complex negotiations.',
    image: raamImage,
  },
  {
    name: 'Ranjana Raut',
    role: 'Associate Attorney',
    phone: '9802355291',
    description: 'Dedicated advocate focused on client support, family law, and dispute resolution with thoughtful guidance.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  },
];

function Team() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-brand-300 hover-zoom animate-bounce-gentle">Our Team</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl hover-zoom-text animate-slide-up">Meet the Legal Experts Behind the Firm</h2>
        <p className="mt-5 text-dark-400 hover-zoom-text">
          Our dedicated team blends deep legal expertise with client-focused care. Every member works together to deliver strong, responsive representation.
        </p>
      </div>

      <div className="mt-8 grid gap-1 lg:grid-cols-2">
        {teamMembers.map((member, index) => (
          <article key={member.name} className={`group mx-auto w-full max-w-[260px] overflow-hidden rounded-[2rem] border border-dark-700/70 bg-dark-900/80 shadow-soft transition-all duration-700 hover:-translate-y-3 hover:border-brand-500/40 hover:bg-dark-900/95 hover:shadow-2xl hover:shadow-brand-500/30 ${index % 2 === 0 ? 'animate-slide-up' : 'animate-slide-up'}`} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="relative overflow-hidden rounded-t-[1.75rem]">
              <img
                src={member.image}
                alt={`AI generated portrait of ${member.name}`}
                className="h-56 w-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/10 to-transparent transition-all duration-500 group-hover:from-brand-950/90" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <div className="rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-white text-sm font-medium animate-pulse-scale">
                  {member.role}
                </div>
              </div>
            </div>
            <div className="space-y-3 px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-brand-300 hover-zoom transition-all group-hover:text-brand-200">{member.role}</p>
                <h3 className="mt-2 text-xl font-semibold text-white hover-zoom-text transition-all group-hover:text-brand-100">{member.name}</h3>
              </div>
              <p className="text-dark-400 hover-zoom-text transition-all group-hover:text-dark-300 leading-6">{member.description}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-dark-300">
                <span className="inline-flex items-center gap-2 rounded-full bg-dark-900/70 px-4 py-2 text-dark-200 transition-all duration-300 hover:bg-brand-500/20 hover:scale-105 emoji-hover">
                  📞 {member.phone}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-dark-900/70 px-4 py-2 text-dark-200 transition-all duration-300 hover:bg-brand-500/20 hover:scale-105 emoji-hover">
                  <span className="text-sm">⚖️</span>
                  Legal Counsel
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Team;
