// src/components/about/DesignPhilosophy.jsx
import React from 'react';

const DesignPhilosophy = () => {
  const principles = [
    {
      title: 'Professional',
      description: 'Clean, academic presentation suitable for professional reference'
    },
    {
      title: 'Accessible',
      description: 'Clear language and structure for diverse readership'
    },
    {
      title: 'Evidence-Based',
      description: 'Research-driven content with practical applications'
    }
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Approach & Methodology
            </h2>
            <p className="text-xl text-gray-600">
              Combining scientific rigor with practical implementation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="text-center border border-amber-600 p-4 rounded-lg">
                <div className="w-12 h-12 bg-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-semibold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;