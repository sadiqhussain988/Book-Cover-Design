// src/components/preorder/PreOrderHero.jsx
import React, { useState } from 'react';
import { FaArrowRight, FaShippingFast, FaGift, FaCalendarAlt, FaBookOpen } from 'react-icons/fa';
import PreOrderModal from './PreOrderModel';
import SampleDownloadModal from './SampleDownloadModel';

const PreOrderHero = () => {
  const [isPreOrderModalOpen, setIsPreOrderModalOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);

  const defaultPlan = {
    name: "Standard Edition",
    price: "$24.99",
    description: "Perfect for individual readers"
  };

  const handlePreOrder = () => {
    setIsPreOrderModalOpen(true);
  };

  const handleSampleDownload = () => {
    setIsSampleModalOpen(true);
  };

  const handleClosePreOrderModal = () => {
    setIsPreOrderModalOpen(false);
  };

  const handleCloseSampleModal = () => {
    setIsSampleModalOpen(false);
  };

  return (
    <>
      <section className="min-h-screen flex items-center bg-white pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left" data-aos="fade-right">
              <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
                Available for Pre-Order
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Strong With<br />
                <span className="text-amber-700">Hearts & Hounds</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                Discover the transformative power of canine companionship in therapy, 
                education, and care. Pre-order your copy today and be among the first 
                to explore this groundbreaking work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={handlePreOrder}
                  className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-all duration-300 flex items-center gap-3 group"
                >
                  Pre-Order Now
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleSampleDownload}
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-amber-600 hover:text-amber-700 transition-all duration-300 flex items-center gap-3 group"
                >
                  <FaBookOpen />
                  Download Sample
                </button>
              </div>

              <div className="flex flex-wrap gap-6 text-gray-600">
                <div className="flex items-center gap-3">
                  <FaShippingFast className="text-amber-600" />
                  <span className="text-sm">Free Shipping Worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGift className="text-amber-600" />
                  <span className="text-sm">Early-Bird Discount</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-amber-600" />
                  <span className="text-sm">February 2025 Release</span>
                </div>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8">
                <div className="aspect-[3/4] bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">SWH</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Strong With</h3>
                    <h4 className="text-xl font-semibold text-amber-700 mb-4">Hearts & Hounds</h4>
                    <div className="w-16 h-1 bg-amber-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-sm">Professional Edition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PreOrderModal 
        isOpen={isPreOrderModalOpen} 
        onClose={handleClosePreOrderModal} 
        selectedPlan={defaultPlan} 
      />

      <SampleDownloadModal
        isOpen={isSampleModalOpen} 
        onClose={handleCloseSampleModal} 
      />
    </>
  );
};

export default PreOrderHero;