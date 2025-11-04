// src/components/BooksSection.jsx
import React, { useEffect } from "react";
import { FaBookOpen, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FEATURED_IMAGE =
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80";

const BooksSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const books = [
    {
      id: 1,
      title: "Whispers of the Pages",
      desc: "A heartfelt journey through imagination, where stories breathe and characters find life.",
      img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Canvas of Dreams",
      desc: "A celebration of art, literature, and design — the soul of every book John creates.",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Ink & Inspiration",
      desc: "Where visual storytelling meets human emotion. A designer’s ode to creativity and courage.",
      img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section
      className="relative py-14 md:py-24 px-5 md:px-16 bg-[#FFF8F2] text-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* LEFT SIDE — Books List */}
        <div className="space-y-10">
          <div data-aos="fade-down">
            <p
              className="text-sm uppercase tracking-widest text-white font-medium mb-3 
              bg-gradient-to-r from-[#a17d29] to-[#e3c07b] px-5 py-1 inline-block rounded-full shadow-md"
            >
              Featured Works
            </p>

            <h2
              className="text-4xl md:text-5xl font-extrabold leading-tight mb-10"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Featured Books &{" "}
              <span className="text-[#a17d29]">Design Projects</span>
            </h2>
          </div>

          {/* Book List */}
          <div className="space-y-10">
            {books.map((book, index) => (
              <div
                key={book.id}
                data-aos="zoom-in-up"
                data-aos-delay={index * 200}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3">
                  {/* Book Image with Shine */}
                  <div className="relative overflow-hidden group sm:col-span-1">
                    <img
                      src={book.img}
                      alt={book.title}
                      className="w-full h-56 sm:h-full object-cover"
                    />

                    {/* Shine Line */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="shine-line absolute top-0 left-[-75%] w-1/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12"></div>
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className="sm:col-span-2 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">
                        {book.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {book.desc}
                      </p>
                    </div>
                    <button className="flex items-center gap-2 text-[#a17d29] font-semibold hover:underline transition">
                      <FaBookOpen /> Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — Decorative Image with Shine */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="relative flex justify-center items-center mt-6 md:mt-0"
        >
          {/* Glow Circle */}
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-[#a17d29]/20 rounded-full blur-3xl hidden md:block"></div>

          {/* Image with Shine Line */}
          <div className="relative group rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
            <img
              src={FEATURED_IMAGE}
              alt="Books & Creativity"
              className="w-full h-[520px] object-cover rounded-2xl"
            />

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Shine Line Animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              <div className="shine-line absolute top-0 left-[-75%] w-1/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12"></div>
            </div>

            {/* Overlay Text */}
            <div className="absolute bottom-6 left-6 text-white space-y-2 z-10">
              <h3
                data-aos="fade-up"
                data-aos-delay="800"
                className="text-2xl font-bold"
              >
                Creativity in Every Cover
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay="1000"
                className="text-sm text-gray-200 max-w-xs"
              >
                Each design tells a story — crafted with heart, emotion, and a
                touch of timeless elegance.
              </p>
              <div
                data-aos="zoom-in"
                data-aos-delay="1200"
                className="flex items-center gap-1 text-yellow-400"
              >
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#FFF2E1] to-transparent"></div>

      {/* Animation for Shine */}
      <style>{`
        @keyframes shineMove {
          0% { left: -75%; }
          50% { left: 125%; }
          100% { left: 125%; }
        }
        .shine-line {
          animation: shineMove 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        .group:hover .shine-line {
          animation: shineMove 1.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default BooksSection;
