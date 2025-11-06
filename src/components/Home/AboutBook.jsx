import React from "react";

const AboutBook = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* 📖 Left Side - Text Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full mb-2">
              Featured Publication
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              About the <span className="text-amber-600">Book</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"></div>
          </div>

          <div className="space-y-5">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">Strong with Hearts and Hounds</span> 
              {" "}is a seminal work that examines the profound interspecies connection between humans and canines. Grounded in empirical research and clinical practice, this volume elucidates how canine companions serve as catalysts for emotional regulation and psychological resilience.
            </p>
            
           
            
            <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-400">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                Through compelling case studies and reflective analysis,{" "}
                <span className="font-semibold text-gray-900">Strong with Hearts and Hounds</span> 
                {" "}redefines canine companions as co-regulators, emotional anchors, and transformative partners in human development and healing.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Evidence-Based</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Clinical Insights</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Practical Framework</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Case Studies</span>
            </div>
          </div>

          {/* Button */}
          <div className="pt-6">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              Get Started 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* 🖼️ Right Side - Image Gallery Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4" style={{ height: "500px" }}>
            {/* Main Large Image */}
            <div className=" row-span-2 relative group">
              <div className="absolute -inset-2 bg-amber-100 rounded-2xl transform group-hover:rotate-1 transition-transform duration-500 -z-10"></div>
              <div className="relative h-full rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src="/bookcover/book.jpg"
                  alt="Strong with Hearts and Hounds book cover"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* ✨ Continuous Light Sweep Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="shine-line"></div>
              </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Book Cover</h3>
                </div>
              </div>
            </div>

            {/* Small Image 1 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-amber-50 rounded-xl transform group-hover:rotate-1 transition-transform duration-500 -z-10"></div>
              <div className="relative h-full rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                <img
                  src="/bookcover/dog2.webp"
                  alt="Therapy session with dog"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                  {/* ✨ Continuous Light Sweep Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="shine-line"></div>
              </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Book Cover</h3>
                </div>
              </div>
            </div>

            {/* Small Image 2 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-amber-50 rounded-xl transform group-hover:rotate-1 transition-transform duration-500 -z-10"></div>
              <div className="relative h-full rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                <img
                  src="../../assets/about-hero.jpg"
                  alt="Author at work"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                  {/* ✨ Continuous Light Sweep Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="shine-line"></div>
              </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className=" absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Book Cover</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-full shadow-lg transform rotate-3">
            <span className="text-sm font-semibold">Bestseller</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBook;