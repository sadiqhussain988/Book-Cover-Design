// src/components/about/AboutHero.jsx
import React from 'react';

const AboutHero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-16 relative"
      style={{
        backgroundImage: 'url("/about-hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <span className="text-sm font-semibold text-amber-300 uppercase tracking-wider">
              New Release
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Strong With<br />
            <span className="font-bold text-amber-300">Hearts & Hounds</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            The Everyday Power of Dogs in Life and Support
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <span className="bg-amber-500/90 text-white px-6 py-3 rounded-lg font-medium border border-amber-300">
              Therapy
            </span>
            <span className="bg-white/20 text-white px-6 py-3 rounded-lg font-medium border border-white/30 backdrop-blur-sm">
              Education
            </span>
            <span className="bg-amber-500/90 text-white px-6 py-3 rounded-lg font-medium border border-amber-300">
              Parenting
            </span>
            <span className="bg-white/20 text-white px-6 py-3 rounded-lg font-medium border border-white/30 backdrop-blur-sm">
              Care
            </span>
          </div>

          <div className="w-20 h-1 bg-amber-300 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;