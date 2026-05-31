import Head from 'next/head';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Team from '../components/Team';
import Consultation from '../components/Consultation';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>National Legal Counsel | Trusted Nepal Legal Services</title>
        <meta
          name="description"
          content="National Legal Counsel offers trusted legal services in Nepal, including family law, criminal defense, corporate law, real estate, cyber law, and intellectual property."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://nationallegalcounsel.com.np/" />
        <meta property="og:title" content="National Legal Counsel | Trusted Nepal Legal Services" />
        <meta
          property="og:description"
          content="Experienced Nepali legal counsel providing strategic support across corporate, family, criminal, real estate, cyber law, and intellectual property."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nationallegalcounsel.com.np/" />
        <meta property="og:image" content="/assets/nlc.png" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="relative min-h-screen overflow-hidden bg-dark-900 text-dark-100">
        <NavBar />
        <main>
          <Hero />
          <Services />
          <About />
          <Team />
          <Consultation />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
