import React from "react";

const EmotionalGallery = () => {
  const images = ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg"];

  return (
    <section
      className="py-18 text-gray-800"
      style={{
        background: "linear-gradient(135deg, #fff9f5 0%, #f0f7ff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
        {/* Heading */}
        <div data-aos="fade-up" className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold text-[#BB4D00] tracking-tight">
            Emotional Connection
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Capturing the heartfelt bond between humans and dogs — moments of
            trust, love, and emotional healing that shape everyday life.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-3xl bg-white border border-[#f3e5da] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
            >
              {/* Image */}
              <img
                src={img}
                alt="Emotional Connection"
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* ✨ Light Sweep Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="shine-line"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="text-sm text-gray-500 mt-4 italic">
          “Because every heart heals a little faster with a dog beside it.”
        </p>
      </div>
    </section>
  );
};

export default EmotionalGallery;
