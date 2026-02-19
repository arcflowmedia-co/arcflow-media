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

      <section className="hero-container" style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'left',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
        padding: '0 8%'
      }}>
        <div className="gradient-blur" />

        <div style={{
          maxWidth: '780px',
          position: 'relative',
          zIndex: 2,
          animation: 'fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}>
          <h1 style={{
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: 'white',
            marginBottom: '32px',
            textShadow: '0px 10px 40px rgba(0,0,0,0.5)'
          }}>
            Install An AI <br />
            <span style={{
              background: 'linear-gradient(to right, #FDB931, #C06722)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>Booking Machine</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '550px',
            marginBottom: '48px',
            lineHeight: 1.5,
            letterSpacing: '-0.01em'
          }}>
            ArcFlow Media builds intelligent websites, AI chatbots, and voice agents that capture, qualify, and book home service leads automatically.
          </p>

          <a href="#contact" className="shiny-cta">
            BOOK A 30-MIN STRATEGY CALL
          </a>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 768px) {
            .hero-container {
              justify-content: center !important;
              text-align: center !important;
              padding: 0 20px !important;
            }
          }
        `}} />
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