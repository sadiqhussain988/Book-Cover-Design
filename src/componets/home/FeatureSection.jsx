import React from "react";
import { HeartPulse, PawPrint, Mountain } from "lucide-react";

const features = [
  {
    icon: <HeartPulse className="w-10 h-10 text-[#e4b37d]" />,
    title: "Healthy Meals",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.",
  },
  {
    icon: <PawPrint className="w-10 h-10 text-[#e4b37d]" />,
    title: "Pet Sitting",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.",
  },
  {
    icon: <Mountain className="w-10 h-10 text-[#e4b37d]" />,
    title: "Activities",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.",
  },
];

const FeatureSection = () => {
  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bookcover/noise.png')" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              {/* Icon Circle */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-full p-4 border border-[#e4b37d]">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
