import React from "react";
import AboutHero from "../components/About/AboutHero";
import BookIntroduction from "../components/About/BookIntro";
import KeyFeatures from "../components/About/KeyFeatures";
import TargetAudience from "../components/About/TargetAudience";
import DesignPhilosophy from "../components/About/DesignPhilosophy";
import CTASection from "../components/About/CTASection";

function About() {
  return (
    <>
      <div>
        <AboutHero />
        <BookIntroduction />
        <KeyFeatures />
        <TargetAudience />
        <DesignPhilosophy />
        <CTASection />
      </div>
    </>
  );
}

export default About;
