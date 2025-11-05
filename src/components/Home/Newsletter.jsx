import React from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="relative py-20 px-6 md:px-20 text-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/bookcover/paw.png')"}}>
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="relative bg-amber-600/50 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto mb-8" style={{backgroundImage: "url('/bookcover/noise.png')"}}>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Stay Connected</h2>
          <p className="mb-6 text-lg text-gray-700">
            Subscribe to get updates, insights, and special releases from the author.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              <Mail className="inline mr-2" size={18} /> Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;