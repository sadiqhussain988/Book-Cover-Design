// src/components/about/TargetAudience.jsx
import React from 'react';

const TargetAudience = () => {
  const audiences = [
    {
      category: 'Healthcare',
      roles: ['Therapists', 'Psychologists', 'Healthcare Providers', 'Rehabilitation Specialists'],
      color: 'text-amber-600'
    },
    {
      category: 'Education',
      roles: ['Teachers', 'School Administrators', 'Special Education Professionals', 'Counselors'],
      color: 'text-amber-600'
    },
    {
      category: 'Community',
      roles: ['Parents', 'Caregivers', 'Social Workers', 'Community Organizers'],
      color: 'text-amber-600'
    },
    {
      category: 'Professional',
      roles: ['Dog Trainers', 'Animal Therapists', 'Researchers', 'Policy Makers'],
      color: 'text-amber-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Intended Audience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential reading for professionals and individuals working in support and care environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-amber-300 transition-colors"
              >
                <h3 className={`font-semibold text-lg mb-4 pb-3 border-b border-gray-200 ${audience.color}`}>
                  {audience.category}
                </h3>
                <ul className="space-y-2">
                  {audience.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="text-gray-600 text-sm">
                      • {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;