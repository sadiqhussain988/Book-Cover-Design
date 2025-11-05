import React from "react";
import { Users, Heart, GraduationCap, Briefcase } from "lucide-react";

const WhoShouldRead = () => {
  const audiences = [
    {
      icon: <Heart className="w-8 h-8 text-amber-600" />,
      title: "Therapists & Counselors",
      description: "Enhance your practice with animal-assisted therapy techniques"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-amber-600" />,
      title: "Educators & Teachers",
      description: "Implement canine-assisted learning in educational settings"
    },
    {
      icon: <Users className="w-8 h-8 text-amber-600" />,
      title: "Parents & Caregivers",
      description: "Strengthen family bonds through canine companionship"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-amber-600" />,
      title: "Healthcare Professionals",
      description: "Integrate dogs into patient care and support programs"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-600 mb-4">
            Who Should Read This Book
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Essential reading for professionals and individuals working in care, education, and support roles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div key={index} className="text-center p-6 bg-amber-600/5 rounded-xl hover:bg-amber-600/10 transition-colors">
              <div className="inline-flex p-3 bg-amber-100 rounded-full mb-4">
                {audience.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{audience.title}</h3>
              <p className="text-gray-600 text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoShouldRead;