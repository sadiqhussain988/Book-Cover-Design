import React from "react";
import { BookOpen } from "lucide-react";

const BuySection = () => {
  return (
    <section className="py-16 bg-[#f5efe9] text-center">
      <h2 className="text-3xl font-bold mb-6">Get Your Copy</h2>
      <p className="mb-6 text-lg max-w-2xl mx-auto">
        Available now in paperback and eBook formats. Discover the everyday power of dogs in life and support.
      </p>
      <div className="flex gap-4 justify-center">
        <a
          href="#"
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
        >
          <BookOpen size={18} /> Buy on Amazon
        </a>
        <a
          href="#"
          className="border border-amber-500 px-6 py-3 rounded-full font-semibold text-amber-600 hover:bg-amber-600/50"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default BuySection;
