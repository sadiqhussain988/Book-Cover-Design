// src/components/GallerySection.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GallerySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const galleryCards = [
    {
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
      title: "Echoes of Imagination",
      desc: "A bold yet emotional visual journey blending art and storytelling with timeless elegance.",
    },
    {
      img: "https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=800&q=80",
      title: "The Golden Chapter",
      desc: "Minimalist yet luxurious — capturing the author’s essence through golden hues and clean geometry.",
    },
    {
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      title: "Silent Stories",
      desc: "An introspective design where shadows and light tell their own poetic tale.",
    },
    {
      img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
      title: "Boundless Dreams",
      desc: "A design celebrating freedom, inspiration, and the unending flow of imagination.",
    },
    {
      img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      title: "Whispers in Design",
      desc: "Elegant typography meets a soft emotional palette — storytelling through simplicity.",
    },
    {
      img: "https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=800&q=80",
      title: "Canvas of Light",
      desc: "A reflection of creativity — luminous, layered, and emotionally rich.",
    },
  ];

  return (
    <section
      className="relative py-14 px-5 md:px-16 bg-gradient-to-b from-[#fff8f2] via-[#fff5e8] to-[#fcefdc] overflow-hidden"
    >
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#a17d29]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#a17d29]/10 rounded-full blur-3xl -z-10"></div>

      {/* Section Header */}
      <div className="text-center mb-14">
        <p
          data-aos="fade-down"
          className="text-sm uppercase tracking-widest text-white font-semibold mb-3 bg-[#a17d29] px-5 py-1 inline-block rounded-full shadow-md"
        >
          Creative Showcase
        </p>

        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
        >
          Book Cover <span className="text-[#a17d29]">Gallery</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed"
        >
          Explore our curated collection of author-inspired cover designs — each
          piece crafted with emotion, story, and visual harmony.
        </p>
      </div>

      {/* Gallery Grid */}
      <div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        {galleryCards.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-sm"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[380px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Shine Line Animation */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="shine-line absolute top-0 left-[-75%] w-1/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12"></div>
              </div>

              {/* Overlay with Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Quote Divider */}
      <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="800">
        <p className="text-gray-600 italic">
          “Design is the silent ambassador of storytelling — where art meets emotion.”
        </p>
        <div
          data-aos="zoom-in"
          data-aos-delay="1000"
          className="mt-4 w-32 h-1 mx-auto bg-[#a17d29] rounded-full"
        ></div>
      </div>

      {/* Shine Line Animation */}
      <style>{`
        @keyframes shineMove {
          0% { left: -75%; }
          50% { left: 125%; }
          100% { left: 125%; }
        }
        .shine-line {
          animation: shineMove 7s ease-in-out infinite;
          animation-delay: ${Math.floor(Math.random() * 4) + 1}s;
        }
        .group:hover .shine-line {
          animation: shineMove 1.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
