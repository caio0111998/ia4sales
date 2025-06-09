import React from 'react';
import Hero from './components/Hero';
import LogoBanner from './components/LogoBanner';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import ProblemSection from './components/ProblemSection';
import TargetAudience from './components/TargetAudience';
import ROICalculator from './components/ROICalculator';
import WhatsAppDemo from './components/WhatsAppDemo';
import LeadCapture from './components/LeadCapture';
import SocialProof from './components/SocialProof';
import WhatHappensNext from './components/WhatHappensNext';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <LogoBanner />
      <HowItWorks />
      <Benefits />
      <ProblemSection />
      <TargetAudience />
      <ROICalculator />
      <WhatsAppDemo />
      <LeadCapture />
      <SocialProof />
      <WhatHappensNext />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;