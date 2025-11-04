import React from "react";

const BookPreview = () => {
  const images = [
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Book Preview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Book Preview"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default BookPreview;
