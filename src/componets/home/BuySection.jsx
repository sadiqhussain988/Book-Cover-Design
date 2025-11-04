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
          className="bg-[#e4b37d] hover:bg-[#d29a5d] px-6 py-3 rounded-full font-semibold text-white flex items-center gap-2"
        >
          <BookOpen size={18} /> Buy on Amazon
        </a>
        <a
          href="#"
          className="border border-[#e4b37d] px-6 py-3 rounded-full font-semibold text-[#e4b37d] hover:bg-[#e4b37d]/10"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default BuySection;
