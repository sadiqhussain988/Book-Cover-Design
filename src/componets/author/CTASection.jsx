import React, { useEffect } from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const CTASection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const IMAGE_URL =
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80";

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#0e0e0e] via-[#1b1b1b] to-[#3a2a12] text-white py-14 px-5 md:px-16"
    >
      {/* Background Glow Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#a17d29]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#a17d29]/10 rounded-full blur-3xl -z-10"></div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-14">
        {/* Left — Text Content */}
        <div className="text-left space-y-6">
          <p
            data-aos="fade-down"
            className="text-sm uppercase tracking-[6px] text-[#a17d29] font-semiboldtext-sm uppercase tracking-widest text-white font-semibold mb-3 bg-[#a17d29] px-5 py-1 inline-block rounded-full shadow-md"
          >
            Stay Connected
          </p>

          <h2
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-4xl md:text-5xl font-extrabold leading-snug"
          >
            Let’s Design Something{" "}
            <span className="text-[#a17d29]">Beautiful</span> Together
          </h2>

          <p
            data-aos="fade-left"
            data-aos-delay="400"
            className="text-gray-300 text-lg leading-relaxed max-w-md"
          >
            Join John on his creative journey — exploring how art, design, and
            storytelling unite to form unforgettable visual experiences.
          </p>

          {/* Social Icons */}
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="flex gap-6 text-3xl mb-12"
          >
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-[#a17d29]/30 transition duration-300 hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-[#a17d29]/30 transition duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-[#a17d29]/30 transition duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* CTA Button */}
          <button
            data-aos="flip-up"
            data-aos-delay="800"
            className="relative overflow-hidden bg-gradient-to-r from-[#a17d29] to-[#d1b66a] hover:from-[#c8a74a] hover:to-[#f0d985] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition duration-300"
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[25deg] -left-[150%] group-hover:animate-[shine_1.8s_ease-in-out]"></div>
          </button>
        </div>

        {/* Right — Image Section */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="relative flex justify-center items-center"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-md w-full group">
            <img
              src={IMAGE_URL}
              alt="Author Workspace"
              className="w-full h-[420px] sm:h-[480px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Shine Line Animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="shine-line absolute top-0 left-[-75%] w-1/3 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12"></div>
            </div>

            {/* Overlay Text */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3
                data-aos="fade-up"
                data-aos-delay="600"
                className="text-2xl font-bold"
              >
                Creativity Lives Here
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay="700"
                className="text-gray-300 text-sm max-w-xs mt-1"
              >
                Inspiration strikes where passion meets design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shine Animation Keyframes */}
      <style>{`
        @keyframes shineMove {
          0% { left: -75%; }
          50% { left: 125%; }
          100% { left: 125%; }
        }
        .shine-line {
          animation: shineMove 6s ease-in-out infinite;
        }
        .group:hover .shine-line {
          animation: shineMove 1.8s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default CTASection;
