import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroContact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-black py-32 overflow-hidden"
      style={{
        backgroundImage:
          "url('image.png')", // 👈 Replace with your image link
      }}
    >
      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-teal-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      {/* Content */}
      <div
        className="relative max-w-4xl mx-auto px-6 text-center text-white"
        data-aos="fade-up"
      >
        <h1 className="text-3xl text-[#f5efe9] md:text-6xl font-bold mb-6 leading-tight">
          Let’s Create Your Next Best-Selling Book Cover
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-200">
          Have a story that deserves a stunning cover? Reach out and let’s bring your vision to life with creativity, color, and perfection.
        </p>

        <a
          href="#"
          className="inline-block bg-[#e4b37d] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default HeroContact;
