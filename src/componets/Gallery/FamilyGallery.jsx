import React from "react";

const FamilyGallery = () => {
  const images = ["family1.jpg", "family2.jpg", "family3.jpg"];

  return (
    <section
      className="py-20 text-gray-800"
      style={{
        background: "-gradient(135deg, #ffflinearaf6 0%, #f5f9ff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
        {/* Heading */}
        <div data-aos="fade-up" className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold text-[#BB4D00] tracking-tight">
            Family & Togetherness
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Celebrating moments of love, laughter, and shared joy — where dogs
            bring families, children, and elders closer together.
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
              className="overflow-hidden rounded-3xl border border-[#eae6df] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
            >
              <img
                src={img}
                alt="Family and Togetherness"
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Quote */}
        <p className="text-sm text-gray-500 mt-4 italic">
          “Dogs remind us that love is simple — it’s shared smiles, gentle
          moments, and being together.”
        </p>
      </div>
    </section>
  );
};

export default FamilyGallery;
