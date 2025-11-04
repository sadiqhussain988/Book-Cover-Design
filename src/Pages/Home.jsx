import React from "react";
import { motion } from "framer-motion";
import { Mail, BookOpen, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="font-sans bg-[#f9f6f2] text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-[url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Strong with Hearts and Hounds
          </h1>
          <p className="text-lg md:text-xl mb-6">
            The Everyday Power of Dogs in Life and Support
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#e4b37d] hover:bg-[#d29a5d] px-6 py-3 rounded-full font-semibold text-white">
              Buy Now
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-full font-semibold text-white hover:bg-white/20">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* About the Book */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">About the Book</h2>
        <p className="max-w-3xl mx-auto text-lg text-center leading-relaxed">
          <span className="font-semibold">Strong with Hearts and Hounds</span> is a practical and reflective look at the role of dogs in everyday emotional life. It explores how dogs offer comfort, stability, and connection during challenging times, supporting growth, regulation, and learning through daily interactions.
        </p>
      </section>

      {/* About the Author */}
      <section className="py-20 px-6 md:px-20 bg-[#f5efe9] flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
          alt="Author"
          className="rounded-2xl shadow-lg w-full md:w-1/3 object-cover"
        />
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">About the Author</h2>
          <p className="text-lg leading-relaxed">
            <span className="font-semibold">Dr. Charlotte Williams</span> is the founder and CEO of Elysian, delivering therapeutic education, animal-assisted interventions, and professional training. With over twenty years’ experience in social work, mental health, and leadership, Charlotte brings a reflective, real-life approach to help children, families, and professionals grow and thrive.
          </p>
        </div>
      </section>

      {/* Book Preview Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Book Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80",
           "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Book Preview"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#f5efe9] text-center px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8">What Readers Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              quote:
                "A heartfelt and inspiring book. It changed the way I see my dog and my emotions.",
              name: "Sarah M.",
            },
            {
              quote:
                "Beautifully written — a must-read for anyone working with people and dogs.",
              name: "James L.",
            },
            {
              quote:
                "Touches your heart and makes you reflect deeply on connection and care.",
              name: "Amira K.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <Heart className="mx-auto mb-4 text-[#e4b37d]" />
              <p className="italic mb-2">“{t.quote}”</p>
              <p className="font-semibold">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / Newsletter */}
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

      {/* Buy the Book */}
      <section className="py-16 bg-[#f5efe9] text-center">
        <h2 className="text-3xl font-bold mb-6">Get Your Copy</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Available now in paperback and eBook formats. Discover the everyday power of dogs in life and support.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#"
            className="bg-[#e4b37d] hover:bg-[#d29a5d] px-6 py-3 rounded-full font-semibold text-white flex items-center gap-2"
          >
            <BookOpen size={18} /> Buy on Amazon
          </a>
          <a
            href="#"
            className="border border-[#e4b37d] px-6 py-3 rounded-full font-semibold text-[#e4b37d] hover:bg-[#e4b37d]/10"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e4b37d] text-white py-6 text-center">
        <p>© 2025 Strong with Hearts and Hounds | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;