import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaBook,
  FaPalette,
  FaRedo,
  FaFileAlt,
  FaFont,
  FaStar
} from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#ffffff] text-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p
            className="text-xl text-[#e4b37d] max-w-2xl mx-auto flex items-center gap-3 justify-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <span className="w-19 h-[2px] bg-[#e4b37d]"></span>
            GET IN TOUCH
            <span className="w-19 h-[2px] bg-[#e4b37d]"></span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="rounded-2xl p-8 h-full">
              {/* Contact Details */}
              <div className="space-y-6">
                <div
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="h-12 w-12 flex justify-center items-center bg-[#f5efe9] rounded-lg">
                    <FaPhone className="text-lg text-gray-700 transform rotate-90" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="h-12 w-12 flex justify-center items-center bg-[#f5efe9] rounded-lg">
                    <FaEnvelope className="text-lg text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-600">
                      design@bookcoverstudio.com
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="h-12 w-12 flex justify-center items-center bg-[#f5efe9] rounded-lg">
                    <FaMapMarkerAlt className="text-lg text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Studio Location</h4>
                    <p className="text-gray-600">
                      123 Design Street, Creative City
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-8" data-aos="zoom-in" data-aos-delay="400">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55999.18084094986!2d76.85683920177476!3d28.6911780713774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce735e6672339%3A0x7316df6cb79754c8!2sSuper%20OYO%20Flagship%20Hotel%20White%20Hut!5e0!3m2!1sen!2s!4v1762248974224!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 h-full"
            data-aos="fade-left"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div data-aos="fade-up" data-aos-delay="100">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e4b37d] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e4b37d] focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e4b37d] focus:border-transparent transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e4b37d] focus:border-transparent transition-all duration-300 "
                  placeholder="Tell us about your book, genre, target audience, design preferences, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                data-aos="zoom-in"
                data-aos-delay="500"
                className="w-full bg-[#e4b37d] text-black py-4 px-6 rounded-xl font-semibold text-lg hover:bg-[#d4a36d] transform hover:scale-[1.02] cursor-pointer transition-all duration-300 shadow-lg flex items-center justify-center space-x-3"
              >
                <FaPaperPlane className="text-lg text-white" />
                <span className="text-white">Send Message</span>
              </button>

              <p
                className="text-center text-gray-500 text-sm"
                data-aos="fade-in"
                data-aos-delay="600"
              >
                We typically respond within 2-4 business hours
              </p>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-20" data-aos="fade-up">
          <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-3xl p-10 shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
            {/* Decorative blur circles */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-40 -z-10"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-40 -z-10"></div>

            <h4
              className="text-3xl font-bold mb-10 bg-[#e4b37d] bg-clip-text text-transparent tracking-wide"
              data-aos="fade-down"
            >
              Our Book Cover Services
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Each card with delay */}
              <div
                className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-teal-50 hover:to-purple-50"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="p-3 bg-white border border-gray-200 rounded-full shadow-sm">
                  <FaBook className="text-teal-600 text-2xl" />
                </div>
                <span className="text-base font-medium text-gray-700">
                  Custom Book Cover Design
                </span>
              </div>

              <div
                className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-teal-50 hover:to-purple-50"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="p-3 bg-white border border-gray-200 rounded-full shadow-sm">
                  <FaPalette className="text-purple-600 text-2xl" />
                </div>
                <span className="text-base font-medium text-gray-700">
                  E-book Cover Design
                </span>
              </div>

              <div
                className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-teal-50 hover:to-purple-50"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="p-3 bg-white border border-gray-200 rounded-full shadow-sm">
                  <FaRedo className="text-pink-600 text-2xl" />
                </div>
                <span className="text-base font-medium text-gray-700">
                  Book Cover Redesign
                </span>
              </div>

              <div
                className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-teal-50 hover:to-purple-50"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="p-3 bg-white border border-gray-200 rounded-full shadow-sm">
                  <FaFileAlt className="text-blue-600 text-2xl" />
                </div>
                <span className="text-base font-medium text-gray-700">
                  Full Book Layout
                </span>
              </div>

              <div
                className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-teal-50 hover:to-purple-50"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <div className="p-3 bg-white border border-gray-200 rounded-full shadow-sm">
                  <FaFont className="text-amber-600 text-2xl" />
                </div>
                <span className="text-base font-medium text-gray-700">
                  Professional Typography
                </span>
              </div>

              <div
                className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-teal-50 hover:to-purple-50"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="p-3 bg-white border border-gray-200 rounded-full shadow-sm">
                  <FaStar className="text-[#e4b37d] text-2xl" />                </div>
                <span className="text-base font-medium text-gray-700">
                  Premium Finishing Options
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
