import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      quote: "A heartfelt and inspiring book. It changed the way I see my dog and my emotions.",
      name: "Sarah M.",
    },
    {
      quote: "Beautifully written — a must-read for anyone working with people and dogs.",
      name: "James L.",
    },
    {
      quote: "Touches your heart and makes you reflect deeply on connection and care.",
      name: "Amira K.",
    },
    {
      quote: "An incredible journey of emotional discovery through our canine companions.",
      name: "Michael T.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-16 px-6 md:px-20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{backgroundImage: "url('/bookcover/paw.png')"}}
      ></div>
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center">What Readers Say</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image with Continuous Light Sweep Effect */}
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-3xl bg-white border border-[#f3e5da] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group w-full max-w-md">
              {/* Image */}
              <img
                src="/bookcover/home3.avif"
                alt="Happy dog with owner"
                className="rounded-3xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* ✨ Continuous Light Sweep Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="shine-line"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonials Slider */}
          <div className="relative z-20">
            <div className="relative bg-amber-600/50 rounded-2xl shadow-lg p-8 min-h-[300px]" style={{backgroundImage: "url('/bookcover/noise.png')"}}>
              {/* Testimonial Content */}
              <div className="flex flex-col items-center justify-center h-full">
                <Heart className="mb-4 text-amber-600" />
                <p className="italic text-lg mb-6 text-center">
                  "{reviews[currentSlide].quote}"
                </p>
                <p className="font-semibold text-gray-800">- {reviews[currentSlide].name}</p>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-amber-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Testimonials;