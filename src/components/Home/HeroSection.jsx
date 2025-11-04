import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Herosection = () => {
  const slides = [
    {
      heading: "Strong with Hearts and Hounds",
      text: "A journey into the deep bond between humans and dogs — how they bring calm, courage, and care into our everyday lives. This book celebrates the quiet power of connection that heals the heart.",
    },
    {
      heading: "Healing Through Companionship",
      text: "Dogs remind us that comfort doesn’t always come in words. Their presence speaks a language of trust, patience, and love — teaching us to breathe, to pause, and to begin again.",
    },
    {
      heading: "Where Love Meets Loyalty",
      text: "In a world that moves too fast, dogs help us slow down. Their loyalty grounds us, their joy restores us, and their silence often says more than words ever could.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Change text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/bookcover/video-dog1.mp4" // <-- replace this with your video file path
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated text content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white max-w-2xl px-6"
      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={slides[index].heading}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-amber-500/90"
          >
            {slides[index].heading}
          </motion.h1>
        </AnimatePresence>

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

        {/* Single Button */}
        <div className="flex gap-4 justify-center">
          <button className="bg-amber-500/90 px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-white">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Herosection;
