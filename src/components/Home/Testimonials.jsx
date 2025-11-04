import React from "react";
import { Heart } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      quote:
        "A heartfelt and inspiring book. It changed the way I see my dog and my emotions.",
      name: "Sarah M.",
    },
    {
      quote:
        "Beautifully written — a must-read for anyone working with people and dogs.",
      name: "James L.",
    },
    {
      quote:
        "Touches your heart and makes you reflect deeply on connection and care.",
      name: "Amira K.",
    },
  ];

  return (
    <section className="py-20 bg-[#f5efe9] text-center px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-8">What Readers Say</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reviews.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
            <Heart className="mx-auto mb-4 text-[#e4b37d]" />
            <p className="italic mb-2">“{t.quote}”</p>
            <p className="font-semibold">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
