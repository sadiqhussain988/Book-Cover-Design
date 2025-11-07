// src/components/common/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaPaw,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FaPaw className="text-white text-lg" />
              </div>
              <span className="text-xl font-semibold">
                <span className="text-amber-400">Strong with</span>
                <span className="text-white"> Hearts & Hounds</span>
              </span>
            </div>
            <p className="text-gray-300 text-justify leading-relaxed text-sm sm:text-base">
              Exploring the transformative power of canine companionship
              in therapy, education, and care through evidence-based research
              and real-world stories.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold  text-amber-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", to: "/" },
                { name: "About the Book", to: "/about" },
                { name: "About Author", to: "/author" },
                { name: "Gallery", to: "/gallery" },
                { name: "Pre-Order", to: "/preOrder" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm sm:text-base cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book Information */}
          <div>
            <h3 className="text-lg font-semibold  text-amber-400">
              Book Details
            </h3>
            <ul className="space-y-3 text-gray-300">
              {[
                "Therapy & Support",
                "Education & Learning",
                "Parenting & Care",
                "Professional Guide",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm sm:text-base"
                >
                  <FaHeart className="text-amber-400 text-sm flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold  text-amber-400">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base break-words">
                  contact@strongwithhearts.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">
                  123 Canine Street
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-2 text-amber-400">
                Stay Updated
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Get notified about book releases and events
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 flex-1 min-w-0 text-sm sm:text-base"
              />
              <button className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors whitespace-nowrap text-sm sm:text-base cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-gray-400 text-xs sm:text-sm order-2 md:order-1">
              © 2024 Strong with Hearts & Hounds. All rights reserved.
            </div>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400 order-1 md:order-2">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((text, idx) => (
                <Link
                  key={idx}
                  to="/"
                  className="hover:text-amber-400 transition-colors whitespace-nowrap cursor-pointer"
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
