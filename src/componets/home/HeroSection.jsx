import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Herosection = () => {
  const slides = [
    {
      image: "/bookcover/home1.jpg",
      heading: "Strong with Hearts and Hounds",
      text: "The Everyday Power of Dogs in Life and Support",
    },
    {
      image: "/bookcover/home2.jpg",
      heading: "Healing Through Companionship",
      text: "How Dogs Heal, Comfort, and Connect Us",
    },
    {
      image: "/bookcover/home3.avif",
      heading: "Where Love Meets Loyalty",
      text: "Building Emotional Strength Through Companionship",
    },
  ];

  const [index, setIndex] = useState(0);

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image Transition */}
      <AnimatePresence>
        <motion.div
          key={slides[index].image}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white max-w-2xl px-6"
      >
        {/* Animated Changing Heading */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={slides[index].heading}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {slides[index].heading}
          </motion.h1>
        </AnimatePresence>

        {/* Animated Changing Text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={slides[index].text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl mb-6"
          >
            {slides[index].text}
          </motion.p>
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="bg-[#e4b37d] hover:bg-[#d29a5d] px-6 py-3 rounded-full font-semibold text-white">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Herosection;
