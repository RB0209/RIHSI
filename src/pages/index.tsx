import Layout from '../components/Layout';
import Section from '../components/Section';
import { FlipCard } from '../components/FlipCard';
import { StatCounter } from '../components/StatCounter';
import { LogoCarousel } from '../components/LogoCarousel';

export default function Home() {
  return (
    <Layout>
      <Section>
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-brand transition-opacity">Mission & Vision</h1>
          <p className="max-w-md text-lg">Our mission is to empower communities... Vision is a world where...</p>
          <p className="text-sm italic">Join our journey – act now to support change.</p>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-8">
          <img src="/placeholder-img1.jpg" alt="About" className="w-64 h-64 object-cover rounded"/>
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-brand">About Our NGO</h2>
            <p className="mt-4">We are a non-profit dedicated to...</p>
            <p className="mt-2 italic">Support our growth today.</p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-brand mb-6">Our Team</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
            <FlipCard name="Alice" role="Co‑Founder" desc="Alice leads strategy and programs."/>
            <FlipCard name="Bob" role="Operations" desc="Bob manages logistics and delivery."/>
            <FlipCard name="Cara" role="Community Lead" desc="Cara works with communities directly."/>
          </div>
          <p className="mt-4 italic">Meet our dedicated team and get involved today.</p>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-brand mb-6">Our Impact</h2>
          <div className="flex flex-wrap justify-center">
            <StatCounter label="Lives Impacted" end={12000} />
            <StatCounter label="Programs Launched" end={45} />
            <StatCounter label="Volunteers" end={300} />
          </div>
          <p className="mt-4 italic">Your support creates real impact—act now.</p>
        </div>
      </Section>
      <Section>
        <div className="w-full p-8">
          <h2 className="text-3xl font-bold text-brand mb-4 text-center">Featured In</h2>
          <LogoCarousel logos={['/logo-media1.png','/logo-media2.png']} />
          <p className="mt-4 italic text-center">See us in the media—help spread the word.</p>
        </div>
      </Section>
      <Section>
        <div className="w-full p-8">
          <h2 className="text-3xl font-bold text-brand mb-4 text-center">Partners & Collaborators</h2>
          <LogoCarousel logos={['/logo-partner1.png','/logo-partner2.png']} />
          <p className="mt-4 italic text-center">Partner with us and make a difference today.</p>
        </div>
      </Section>
    </Layout>
  );
}
