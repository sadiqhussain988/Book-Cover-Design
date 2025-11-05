import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const backgroundImage =
    "url('https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=2000&auto=format&fit=crop')";

  return (
    <div className="relative overflow-hidden text-gray-100 bg-gray-900">
      {/* Hero Section */}
      <section
        className="relative py-28 md:py-36 flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.6)), ${backgroundImage}`,
        }}
      >
        {/* Floatings glows orbs */}
        <div className="absolute top-10 left-10 w-60 h-60 bg-[#a17d29]/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#e3c07b]/25 rounded-full blur-3xl animate-pulse"></div>

        {/* Contents */}
        <div className="relative z-10 max-w-5xl mx-auto px-3 md:px-6">
          {/* Taglines */}
          <p
            data-aos="fade-down"
            className="text-sm uppercase tracking-[0.3em] text-white font-medium 
            bg-[#a17d29]/90 px-5 py-1 inline-block rounded-full shadow-lg mb-5"
          >
            Featured Author
          </p>

          {/* Title */}
          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            Discover the{" "}
            <span className="bg-gradient-to-r from-[#e3c07b] via-[#fff2cf] to-[#a17d29] bg-clip-text text-transparent">
              Art of Storytelling & Imagination
            </span>
          </h1>

          {/* Subtitle */}
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            From <strong>heartfelt words</strong> to <strong>captivating worlds</strong>, 
            I craft stories that ignite the soul and awaken imagination — blending 
            <strong> emotion, artistry,</strong> and <strong>depth</strong> in every page.
          </p>

          {/* Buttons */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            {/* Primary Button */}
            <Link to="/books" className="relative group w-full sm:w-auto">
              <button className="relative overflow-hidden bg-gradient-to-r from-[#a17d29] to-[#e3c07b] text-gray-900 font-semibold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Explore My Books</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[25deg] -left-[150%] group-hover:animate-[shine_1.8s_ease-in-out]"></div>
              </button>
            </Link>

            {/* Secondary Button */}
            <Link to="/about" className="w-full sm:w-auto">
              <button className="border-2 border-[#e3c07b] text-[#e3c07b] font-semibold text-lg px-10 py-4 rounded-full hover:bg-[#e3c07b] hover:text-gray-900 transition-all duration-300">
                About the Author
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Shine animation */}
        <style>{`
          @keyframes shine {
            0% { left: -150%; }
            50% { left: 120%; }
            100% { left: 120%; }
          }
        `}</style>
      </section>

      {/* Floating spark particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute w-2 h-2 bg-[#e3c07b] rounded-full animate-ping top-1/3 left-1/4"></div>
        <div className="absolute w-3 h-3 bg-[#a17d29] rounded-full animate-ping top-2/3 right-1/3"></div>
        <div className="absolute w-2 h-2 bg-[#fff2cf] rounded-full animate-pulse bottom-1/4 right-1/4"></div>
      </div>
    </div>
  );
};

export default Hero;
