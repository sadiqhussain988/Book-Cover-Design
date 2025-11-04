import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthorImage from "../../assets/author/ab.avif"; // ✅ Local image import

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <section
      className="relative py-14 md:py-24 px-5 md:px-16 bg-gradient-to-b from-[#fffaf3] via-[#fff4e7] to-[#f9e6c4] text-gray-900 overflow-hidden"
    >
      {/* Subtle Background Decorations */}
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-[#a17d29]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#a17d29]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-14">
        {/* LEFT SIDE — Text */}
        <div className="space-y-6 text-left">
          <p
            data-aos="fade-down"
            className="text-sm uppercase tracking-[6px] text-white font-medium 
            bg-gradient-to-r from-[#a17d29] to-[#d7b868] px-6 py-1.5 inline-block rounded-full shadow-lg"
          >
            Meet the Author
          </p>

          <h2
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900"
          >
            John Doe
          </h2>

          <p
            data-aos="fade-left"
            data-aos-delay="400"
            className="text-gray-700 text-lg leading-relaxed"
          >
            John Doe is a visionary designer who transforms words into visual
            experiences. With over a decade in the creative industry, his book
            covers and editorial designs evoke emotion, connection, and depth.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-gray-600 text-base leading-relaxed"
          >
            Blending fine art, storytelling, and digital mastery, John’s work
            embodies timeless aesthetics and modern sensibility — crafting art
            that speaks to the soul of every reader.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              data-aos="zoom-in-up"
              data-aos-delay="800"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#a17d29] to-[#d7b868] text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              View Portfolio
            </button>
            <button
              data-aos="flip-up"
              data-aos-delay="1000"
              className="px-7 py-3.5 rounded-full border border-[#a17d29] text-[#a17d29] font-semibold hover:bg-[#a17d29] hover:text-white transition duration-300"
            >
              Contact Author
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — Image with Shine Line Effect */}
        <div
          data-aos="zoom-in-left"
          data-aos-delay="600"
          className="relative flex justify-center items-center"
        >
          {/* Background Glow */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#a17d29]/10 rounded-full blur-3xl hidden md:block"></div>

          {/* Image Wrapper */}
          <div className="relative group overflow-hidden rounded-3xl shadow-2xl border-[3px] border-white/60 w-full max-w-md backdrop-blur-sm">
            <img
              src={AuthorImage} // ✅ Local image used here
              alt="Author John Doe"
              className="rounded-3xl w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Shine Line Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              <div className="shine-line absolute top-[-20%] left-[-70%] w-[40%] h-[140%] bg-gradient-to-r from-transparent via-white/60 to-transparent transform rotate-[25deg]"></div>
            </div>

            {/* Overlay Text */}
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="absolute bottom-6 left-6 text-white"
            >
              <h3 className="text-2xl font-bold mb-1">Inspired by Emotion</h3>
              <p className="text-gray-200 text-sm max-w-xs">
                Every design starts with a story waiting to be told.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shine Animation */}
      <style>{`
        @keyframes shineMove {
          0% { left: -70%; }
          50% { left: 130%; }
          100% { left: 130%; }
        }
        .shine-line {
          animation: shineMove 6s ease-in-out infinite;
          animation-delay: 1.5s;
          filter: blur(1px);
        }
        .group:hover .shine-line {
          animation: shineMove 1.8s ease-in-out;
          filter: blur(0.5px) brightness(1.3);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
