import React from "react";

const TherapyGallery = () => {
  const images = ["therapy1.jpg", "therapy2.jpg", "therapy3.jpg"];

  return (
    <section
      className="py-14 text-gray-800"
      style={{
        background: "linear-gradient(135deg, #f8fbff 0%, #fff9f5 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
        {/* Heading */}
        <div data-aos="fade-up" className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold text-[#BB4D00] tracking-tight">
            Therapy & Education
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Showcasing real moments of care, learning, and healing — where dogs
            empower people to connect, recover, and grow emotionally.
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
              className="relative overflow-hidden rounded-3xl border border-[#e5edf6] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
            >
              {/* Image */}
              <img
                src={img}
                alt="Therapy and Education"
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* ✨ Light Sweep Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="shine-line"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <p className="text-sm text-gray-500 mt-4 italic">
          “Through learning and therapy, dogs teach us patience, kindness, and
          healing beyond words.”
        </p>
      </div>

     
    </section>
  );
};

export default TherapyGallery;
