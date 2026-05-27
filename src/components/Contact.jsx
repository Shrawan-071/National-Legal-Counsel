const mailtoAddress = 'info.nationallegalcounse@gmail.com';
const instagramUrl = 'https://www.instagram.com/nationallegalcounsel/';
const websiteUrl = 'https://nationallegalcounsel.com.np';
const addressDisplay = 'Maitighar Mandala, East to St. Xavier College Kathmandu, Nepal';
const addressSearch = 'Maitighar, Kathmandu 44600';
const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(addressSearch)}`;
const phoneNumbers = ['9802355291', '9820772703'];

const contactInfo = [
  {
    label: 'Address',
    value: addressDisplay,
    isLink: true,
    linkType: 'address',
    href: mapsUrl,
  },
  {
    label: 'Phone Numbers',
    value: phoneNumbers,
    isLink: true,
    linkType: 'phone',
  },
  {
    label: 'Email',
    value: mailtoAddress,
    isLink: true,
    linkType: 'email',
  },
  {
    label: 'Website',
    value: 'nationallegalcounsel.com.np',
    isLink: true,
    linkType: 'website',
    href: websiteUrl,
  },
  {
    label: 'Instagram',
    value: '@nationallegalcounsel',
    isLink: true,
    linkType: 'instagram',
    href: instagramUrl,
  },
];

function Contact() {
  const handleAddressClick = () => {
    window.open(mapsUrl, '_blank');
  };

  const handlePhoneClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${mailtoAddress}`;
  };

  const handleInstagramClick = () => {
    window.open(instagramUrl, '_blank');
  };

  const handleWebsiteClick = () => {
    window.open(websiteUrl, '_blank');
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <div className="rounded-[2rem] border border-dark-700/70 bg-dark-900/80 p-10 shadow-soft">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-brand-300 hover-zoom">Contact</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl hover-zoom-text">Get in Touch</h2>
        <p className="mt-5 text-dark-400 leading-7 hover-zoom-text">
          At National Legal Counsel, we are committed to providing expert legal solutions to meet your needs. Reach out to us through any of the contact methods below.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactInfo.map((item) => (
            <div key={item.label} className="rounded-3xl border border-dark-700/60 bg-dark-900/80 p-6 transition-all duration-300 hover:border-brand-500/50 hover:bg-dark-900/90 hover-lift hover-glow">
              <p className="text-sm uppercase tracking-[0.25em] text-dark-400 hover-zoom">{item.label}</p>
              {item.linkType === 'address' ? (
                <button
                  onClick={handleAddressClick}
                  className="mt-2 text-base font-medium text-brand-400 hover:text-brand-300 transition-colors duration-300 hover-zoom-text break-words text-left hover:underline"
                >
                  {item.value}
                </button>
              ) : item.linkType === 'phone' ? (
                <div className="mt-2 space-y-1">
                  {item.value.map((phone, idx) => (
                    <button
                      key={idx}
                      onClick={() => handlePhoneClick(phone)}
                      className="block text-base font-medium text-brand-400 hover:text-brand-300 transition-colors duration-300 hover-zoom-text text-left hover:underline"
                    >
                      {phone}
                    </button>
                  ))}
                </div>
              ) : item.linkType === 'email' ? (
                <button
                  onClick={handleEmailClick}
                  className="mt-2 text-base font-medium text-brand-400 hover:text-brand-300 transition-colors duration-300 hover-zoom-text break-words text-left hover:underline"
                >
                  {item.value}
                </button>
              ) : item.linkType === 'instagram' ? (
                <button
                  onClick={handleInstagramClick}
                  className="mt-2 text-base font-medium text-brand-400 hover:text-brand-300 transition-colors duration-300 hover-zoom-text break-words text-left hover:underline"
                >
                  {item.value}
                </button>
              ) : item.linkType === 'website' ? (
                <button
                  onClick={handleWebsiteClick}
                  className="mt-2 text-base font-medium text-brand-400 hover:text-brand-300 transition-colors duration-300 hover-zoom-text break-words text-left hover:underline"
                >
                  {item.value}
                </button>
              ) : (
                <p className="mt-2 text-base font-medium text-white hover-zoom-text break-words">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
