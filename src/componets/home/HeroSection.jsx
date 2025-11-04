import React from "react";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-[url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Strong with Hearts and Hounds
        </h1>
        <p className="text-lg md:text-xl mb-6">
          The Everyday Power of Dogs in Life and Support
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-[#e4b37d] hover:bg-[#d29a5d] px-6 py-3 rounded-full font-semibold text-white">
            Buy Now
          </button>
          <button className="bg-transparent border border-white px-6 py-3 rounded-full font-semibold text-white hover:bg-white/20">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Herosection;
