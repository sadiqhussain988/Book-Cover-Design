import React from 'react';
import AboutHero from '../components/about/AboutHero';
import BookIntroduction from '../components/about/BookIntro';
import KeyFeatures from '../components/about/KeyFeatures';
import TargetAudience from '../components/about/TargetAudience';
import DesignPhilosophy from '../components/about/DesignPhilosophy';
import CTASection from '../components/about/CTASection';

function About() {
  return (
    <>
      <div>
        <AboutHero/>
        <BookIntroduction/>
        <KeyFeatures/>
        <TargetAudience/>
        <DesignPhilosophy/>
        <CTASection/>
      </div>
    </>
  )
}

export default About