import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AiExplanation from './components/AiExplanation';
import HowItWorks from './components/HowItWorks';
import RoiCalculator from './components/RoiCalculator';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import ParticleAuraHero from './ParticleAuraHero';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="App">
      {/* 1. This is your new Background Animation */}
      <ParticleAuraHero />

      <Navbar />

      <section className="hero-container">
        <div className="gradient-blur" />

        <div className="hero-content">
          <h1>
            Install An AI <br />
            <span className="accent-text">Booking Machine</span>
          </h1>

          <p>
            ArcFlow Media builds intelligent websites, AI chatbots, and voice agents that capture, qualify, and book home service leads automatically.
          </p>

          <a href="#contact" className="shiny-cta">
            BOOK A 30-MIN STRATEGY CALL
          </a>
        </div>
      </section>

      {/* The rest of your site */}
      <AiExplanation />
      <HowItWorks />
      <RoiCalculator />
      <BookingSection />
      <Footer />
    </div>
  );
}

export default App;