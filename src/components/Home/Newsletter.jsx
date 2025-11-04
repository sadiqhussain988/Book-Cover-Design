import React from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
      <p className="mb-6 text-lg">
        Subscribe to get updates, insights, and special releases from the author.
      </p>
      <form className="max-w-md mx-auto flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:outline-none"
        />
        <button className="bg-[#e4b37d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d29a5d]">
          <Mail className="inline mr-2" size={18} /> Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
