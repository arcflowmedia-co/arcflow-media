import React from 'react';
import Navbar from './components/Navbar';
import ParticleAuraHero from './ParticleAuraHero';
import AiExplanation from './components/AiExplanation';
import HowItWorks from './components/HowItWorks';
import RoiCalculator from './components/RoiCalculator';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ParticleAuraHero />
      <AiExplanation />
      <HowItWorks />
      <RoiCalculator />
      <BookingSection />
      <Footer />
    </div>
  );
}

export default App;
