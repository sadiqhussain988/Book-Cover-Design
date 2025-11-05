import React from "react";

const AboutAuthor = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-amber-50 to-amber-100/30">
      <div className="max-w-6xl mx-auto">
        <div className=" grid md:grid-cols-2 gap-16 items-center">
          {/* Author Image with Refined Styling */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Image Container */}
              <div className="relative group">
                {/* Simplified Background Elements */}
                <div className="absolute -inset-3 bg-amber-100 rounded-2xl transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-400 -z-10"></div>

                {/* Main Image */}
                <div className="relative overflow-hidden rounded-xl shadow-lg transform group-hover:-translate-y-1 transition-all duration-400">
                  <img
                    src="/bookcover/author.jpeg"
                    alt="Dr. Charlotte Williams - Founder and CEO of Elysian"
                    className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                {/* ✨ Continuous Light Sweep Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="shine-line"></div>
                </div>
              </div>

              {/* Refined Credentials Badge */}
              <div className="absolute -bottom-3 -right-3 bg-amber-500 text-white px-5 py-2 rounded-xl shadow-md">
                <div className="text-center">
                  <div className="text-md font-bold">20+ Years</div>
                  <div className="text-xs">Experience</div>
                </div>
              </div>

              {/* Minimal Corner Accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-amber-400 rounded-tl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-amber-400 rounded-br-lg"></div>
            </div>
          </div>

          {/* Author Content */}
          <div className="space-y-6">
            {/* Header Section */}
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">
                About the Author
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Dr. Charlotte <span className="text-amber-600">Williams</span>
              </h2>
              <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Dr. Charlotte Williams</span> is the visionary founder and CEO of Elysian, where she pioneers innovative approaches in therapeutic education, animal-assisted interventions, and professional development.
              </p>

              <p className="text-gray-700 leading-relaxed">
                With over two decades of dedicated experience in social work, mental health, and organizational leadership, Charlotte brings a uniquely reflective and practical approach to her work. Her expertise empowers children, families, and professionals to cultivate resilience and achieve sustainable growth.
              </p>

              {/* Refined Specialization Highlights */}
              <div className="bg-white/90 p-5 rounded-xl border border-amber-200">
                <h3 className="font-semibold text-gray-900 mb-3">Professional Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-700">Therapeutic Education</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-700">Animal-Assisted Interventions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-700">Professional Training</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-700">Leadership Development</span>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        {/* Refined Quote */}
        <div className=" mt-10 ml-50 text-gray-600 italic pl-4 border-l-2 border-amber-300">
          "Bringing a reflective, real-life approach to help children, families, and professionals grow and thrive."
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;