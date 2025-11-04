// src/components/preorder/BenefitsSection.jsx
import React from 'react';
import { FaShippingFast, FaPercentage, FaClock, FaAward, FaBookOpen, FaHeadset } from 'react-icons/fa';

const PreOrderBenefits = () => {
  const benefits = [
    {
      icon: FaPercentage,
      title: "Save 17%",
      description: "Special pre-order discount off retail price"
    },
    {
      icon: FaShippingFast,
      title: "Free Shipping",
      description: "Complimentary shipping worldwide"
    },
    {
      icon: FaClock,
      title: "Early Access",
      description: "Receive your copy before official release"
    },
    {
      icon: FaAward,
      title: "Signed Copies",
      description: "Personally signed by the author"
    },
    {
      icon: FaBookOpen,
      title: "Bonus Content",
      description: "Exclusive digital resources included"
    },
    {
      icon: FaHeadset,
      title: "Priority Support",
      description: "Dedicated customer service"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Pre-Order?</h2>
          <p className="text-gray-600 text-lg">Exclusive benefits for early supporters</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-amber-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreOrderBenefits;