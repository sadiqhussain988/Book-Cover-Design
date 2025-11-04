import React from "react";

const PreOrder = () => {
  return (
    <section
      className="min-h-screen text-gray-800 flex flex-col justify-center"
      style={{
        background: "linear-gradient(135deg, #fffaf6 0%, #f8f5f1 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-25 space-y-24 ">
        {/* 🐾 Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 py-2">
          {/* 📘 Image */}
          <div
            className="flex-1 relative overflow-hidden rounded-3xl shadow-2xl border border-[#e9e1d9] 
            bg-white hover:-translate-y-1 hover:shadow-3xl transition-all duration-700  "
          >
            <img
              src="bookcover.jpg"
              alt="Strong with Hearts and Hounds"
              className="w-full h-[400px] md:h-[460px] object-cover rounded-3xl "
            />
          </div>



          {/* 📝 Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#BB4D00] leading-tight">
              STRONG WITH HEARTS AND HOUNDS
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
              <span className="font-semibold text-[#BB4D00]">
                The Everyday Power of Dogs in Life and Support —
              </span>{" "}
              exploring therapy, education, parenting, and care through
              emotional connection and unconditional love.
            </p>

            <p className="text-sm text-gray-600 italic">
              By{" "}
              <span className="font-semibold text-[#BB4D00]">
                [Author Name]
              </span>
            </p>

            <a
              href="#preorder"
              className="inline-block bg-[#BB4D00] text-white font-semibold px-10 py-4 rounded-full 
              shadow-md hover:shadow-lg hover:bg-[#a94300] transition-all duration-300"
            >
              Pre-Order Now
            </a>
          </div>
        </div>

       

        {/* 📝 Preorder Form */}
        <div
          id="preorder"
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-[#f1e9e0] p-10 md:p-12 space-y-8"
        >
          <h2 className="text-3xl font-bold text-center text-[#BB4D00]">
            Pre-Order Your Copy
          </h2>
          <p className="text-center text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Reserve your copy today and be among the first to experience the
            heartfelt stories within <span className="italic">“Strong with Hearts and Hounds.”</span>
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-xl p-3 md:p-4 
                focus:outline-none focus:ring-2 focus:ring-[#BB4D00] transition duration-200"
              />
            </div>

            <div>
              <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-xl p-3 md:p-4 
                focus:outline-none focus:ring-2 focus:ring-[#BB4D00] transition duration-200"
              />
            </div>

            <div>
              <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <input
                type="text"
                placeholder="Enter your country"
                className="w-full border border-gray-300 rounded-xl p-3 md:p-4 
                focus:outline-none focus:ring-2 focus:ring-[#BB4D00] transition duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#BB4D00] text-white font-semibold py-3 md:py-4 rounded-full 
              shadow-md hover:bg-[#a94300] hover:shadow-lg transition-all duration-300"
            >
              Confirm Pre-Order
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default PreOrder;
