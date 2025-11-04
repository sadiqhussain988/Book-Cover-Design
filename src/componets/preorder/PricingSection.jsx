// src/components/preorder/PricingSection.jsx
import React, { useState } from 'react';
import { FaCheck, FaBook, FaUserTie, FaUniversity } from 'react-icons/fa';
import PreOrderModal from './PreOrderModel';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      icon: FaBook,
      name: "Standard Edition",
      price: "$24.99",
      description: "Perfect for individual readers",
      features: ["Hardcover Book", "Free Shipping", "Digital Guide", "Early Access"],
      featured: false
    },
    {
      icon: FaUserTie,
      name: "Professional Edition",
      price: "$34.99",
      description: "Ideal for practitioners",
      features: ["Signed Copy", "Resource Pack", "Case Studies", "Lifetime Updates", "Priority Support"],
      featured: true
    },
    {
      icon: FaUniversity,
      name: "Institutional Pack",
      price: "$89.99",
      description: "For organizations",
      features: ["5 Copies", "Training Materials", "Bulk Discount", "Author Q&A", "License"],
      featured: false
    }
  ];

  const handlePreOrder = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Edition</h2>
            <p className="text-gray-600 text-lg">Select the option that best fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-sm border ${
                  plan.featured ? 'border-amber-500 shadow-lg scale-105' : 'border-gray-200'
                } p-8 transition-all duration-300`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {plan.featured && (
                  <div className="text-center mb-4">
                    <span className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="text-amber-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-amber-600 mb-2">{plan.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FaCheck className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePreOrder(plan)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.featured
                      ? 'bg-amber-600 text-white hover:bg-amber-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Pre-Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PreOrderModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        selectedPlan={selectedPlan} 
      />
    </>
  );
};

export default PricingSection;