
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import AgitationSection from './components/AgitationSection';
import RevelationSection from './components/ConsultationOfferSection';
import SolutionPreview from './components/SolutionPreview';
import SocialProof from './components/SocialProof';
import ProductOverview from './components/ProductOverview';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection'; // Added
import GuaranteeSection from './components/GuaranteeSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg-hero-start flex flex-col"> {}
      <Navbar />
      <main className="flex-grow pt-4 sm:pt-6">
        <HeroSection />
        <ProblemSection />
        <AgitationSection />
        <RevelationSection />
        <SolutionPreview />
        <SocialProof />
        <ProductOverview />
        <PricingSection />
        <FAQSection /> {}
        <GuaranteeSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;