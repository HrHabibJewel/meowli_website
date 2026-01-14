import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyMeowliCarousel } from '@/components/sections/WhyMeowliCarousel';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { AppPreview } from '@/components/sections/AppPreview';
import { FeatureHighlights } from '@/components/sections/FeatureHighlights';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <>
      <SEO 
        canonicalUrl="https://meowli.app/"
        keywords="pet app, cat social network, dog matchmaking, pet health tracker, vet finder, pet community, pet social media, cat app, dog app, pet care app, pet playdate, pet friends"
      />
      <main className="overflow-x-hidden">
        <header>
          <HeroSection />
        </header>
        <WhyMeowliCarousel />
        <HowItWorks />
        <AppPreview />
        <FeatureHighlights />
        <Testimonials />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;
