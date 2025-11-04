// src/components/about/KeyFeatures.jsx
import React from 'react';

const KeyFeatures = () => {
  const features = [
    {
      title: 'Evidence-Based Research',
      description: 'Scientific studies and data-driven insights into human-canine relationships.'
    },
    {
      title: 'Practical Applications',
      description: 'Step-by-step guides for implementing dog-assisted programs in various settings.'
    },
    {
      title: 'Professional Insights',
      description: 'Expert contributions from therapists, educators, and healthcare professionals.'
    },
    {
      title: 'Case Studies',
      description: 'Real-world examples demonstrating successful dog-assisted interventions.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive coverage of dog-assisted support methodologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-amber-300 transition-colors duration-300"
            >
              <div className="text-3xl font-light text-amber-600 mb-4">0{index + 1}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;