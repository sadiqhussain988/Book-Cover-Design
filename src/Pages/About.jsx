import React from 'react';
import AboutHero from '../componets/about/AboutHero';
import BookIntroduction from '../componets/about/BookIntro';
import KeyFeatures from '../componets/about/KeyFeatures';
import TargetAudience from '../componets/about/TargetAudience';
import DesignPhilosophy from '../componets/about/DesignPhilosophy';
import CTASection from '../componets/about/CTASection';

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