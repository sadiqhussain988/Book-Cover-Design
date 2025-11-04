import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-[90vh] w-screen py-25 overflow-hidden">
      {/* 🌄 Full Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('galleryhero.jpg')",
        }}
      ></div>

      {/* 🌫️ Soft Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-transparent"></div>

      {/* ✨ Main Content */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8"
        data-aos="fade-up"
      >
        {/* 🧡 Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Strong with <span className="text-[#cb6318]">Hearts and Hounds</span>
        </h1>

        {/* 📖 Subtext */}
        <p
          className="text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          A heartfelt journey celebrating the deep bond between humans and dogs —
          through therapy, family, education, and emotional connection. Discover
          the warmth, care, and stories that inspire this movement.
        </p>

        {/* ✨ Divider */}
        <div className="flex justify-center pt-2" data-aos="zoom-in" data-aos-delay="300">
          <span className="h-[3px] w-24 bg-[#BB4D00] rounded-full"></span>
        </div>

        {/* 🐾 CTA Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 pt-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="#emotional"
            className="px-8 py-3 rounded-full bg-[#BB4D00] text-white font-semibold hover:bg-[#a94300] hover:scale-105 shadow-md hover:shadow-xl transition-all duration-300"
          >
            Explore Gallery
          </a>

          <a
            href="#preorder"
            className="px-8 py-3 rounded-full border border-[#BB4D00] text-[#BB4D00] font-semibold hover:bg-white hover:text-[#a94300] hover:scale-105 transition-all duration-300"
          >
            Pre-Order Book
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
