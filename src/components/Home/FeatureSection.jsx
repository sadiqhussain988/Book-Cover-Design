import React from "react";
import { Heart, GraduationCap, Users, Shield } from "lucide-react";

const features = [
  {
    icon: <Heart className="w-8 h-8 text-amber-600" />,
    title: "Therapeutic Support",
    text: "Explore how dogs provide emotional comfort and therapeutic benefits in clinical and care settings.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-amber-600" />,
    title: "Educational Impact",
    text: "Discover canine-assisted learning approaches that enhance educational outcomes for children.",
  },
  {
    icon: <Users className="w-8 h-8 text-amber-600" />,
    title: "Family Bonding",
    text: "Learn how dogs strengthen family connections and support positive parenting practices.",
  },
  {
    icon: <Shield className="w-8 h-8 text-amber-600" />,
    title: "Emotional Resilience",
    text: "Understand how canine companionship builds emotional strength in vulnerable individuals.",
  },
];

const FeatureSection = () => {
  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bookcover/noise.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-600 mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to provide the 
            best care and experience for you and your furry friends.
          </p>
        </div>

        {/* Features Grid - Updated to 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-amber-600/10 p-6 rounded-xl shadow-md shadow-amber-100 hover:shadow-lg transition-all duration-300 text-center relative border-l-4 border-amber-500 hover:scale-105"
            >
              {/* ✨ Continuous Light Sweep Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="shine-line"></div>
              </div>
              {/* Icon with floating animation */}
              <div className="p-3 inline-flex mb-3 animate-[float_3s_ease-in-out_infinite]">
                {feature.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
          
        </div>
         {/* Refined Quote */}
        <div className=" mt-10 ml-70 text-gray-600 italic pl-4 border-l-2 border-amber-300">
          "Bringing a reflective, real-life approach to help children, families, and professionals grow and thrive."
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
};

export default FeatureSection;