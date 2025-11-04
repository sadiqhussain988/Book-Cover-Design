// src/components/preorder/PreOrderCTASection.jsx
import React from 'react';
import { FaClock, FaGift, FaShippingFast, FaLock, FaUndo } from 'react-icons/fa';

const PreOrderCTASection = () => {
  return (
    <section className="py-20 bg-amber-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">
            Don't Miss Out on Early-Bird Benefits
          </h2>
          
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Pre-order now and secure your copy with exclusive discounts and bonuses. 
            Limited time offer ends soon!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <FaClock className="text-amber-200 text-3xl mb-4" />
              <h3 className="font-semibold mb-2">Limited Time</h3>
              <p className="text-amber-100 text-sm">Pre-order discount ends soon</p>
            </div>
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
              <FaGift className="text-amber-200 text-3xl mb-4" />
              <h3 className="font-semibold mb-2">Exclusive Bonuses</h3>
              <p className="text-amber-100 text-sm">Free digital companion guide</p>
            </div>
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="600">
              <FaShippingFast className="text-amber-200 text-3xl mb-4" />
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-amber-100 text-sm">Worldwide delivery included</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 transition-all duration-300 shadow-lg">
              Pre-Order Now - Save 17%
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300">
              Contact for Bulk Orders
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-amber-200 text-sm">
            <div className="flex items-center gap-2">
              <FaLock className="text-amber-300" />
              <span>Secure checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShippingFast className="text-amber-300" />
              <span>Free worldwide shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-amber-300" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreOrderCTASection;