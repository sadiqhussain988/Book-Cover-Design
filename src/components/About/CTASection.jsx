// src/components/about/CTASection.jsx
import React, { useState } from "react";
import { FaShoppingCart, FaDownload, FaArrowRight } from "react-icons/fa";
import PreOrderModal from "../preorder/PreOrderModel";
import SampleDownloadModal from "../preorder/SampleDownloadModel";

const CTASection = () => {
   const [isPreOrderModalOpen, setIsPreOrderModalOpen] = useState(false);
   const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);

   const defaultPlan = {
      name: "Standard Edition",
      price: "$24.99",
      description: "Perfect for individual readers",
   };

   const handlePurchase = () => {
      setIsPreOrderModalOpen(true);
   };

   const handleDownload = () => {
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
         <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
            <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto text-center text-white">
                  <h2 className="text-4xl font-bold mb-6">
                     Ready to Transform Your Practice?
                  </h2>

                  <p className="text-xl text-amber-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                     Join thousands of professionals worldwide who have
                     discovered the power of canine-assisted support in their
                     work.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                     <button
                        onClick={handlePurchase}
                        className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition-all duration-300 shadow-lg flex items-center gap-3 group"
                     >
                        <FaShoppingCart />
                        Pre-Order Hardcover
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                     </button>
                     <button
                        onClick={handleDownload}
                        className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center gap-3"
                     >
                        <FaDownload />
                        Download eBook Sample
                     </button>
                  </div>

                  {/* Additional Benefits */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
                     <div className="flex flex-col items-center text-amber-100">
                        <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center mb-2">
                           <span className="text-amber-700 font-bold text-sm">
                              ✓
                           </span>
                        </div>
                        <span className="text-sm">Free Shipping</span>
                     </div>
                     <div className="flex flex-col items-center text-amber-100">
                        <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center mb-2">
                           <span className="text-amber-700 font-bold text-sm">
                              ✓
                           </span>
                        </div>
                        <span className="text-sm">Early-Bird Discount</span>
                     </div>
                     <div className="flex flex-col items-center text-amber-100">
                        <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center mb-2">
                           <span className="text-amber-700 font-bold text-sm">
                              ✓
                           </span>
                        </div>
                        <span className="text-sm">Bonus Content</span>
                     </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-amber-400">
                     <p className="text-amber-200 text-sm">
                        📚 Available in Hardcover, Paperback & eBook • 🌍
                        Worldwide Shipping • 💰 30-Day Money-Back Guarantee
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Pre-Order Modal */}
         <PreOrderModal
            isOpen={isPreOrderModalOpen}
            onClose={handleClosePreOrderModal}
            selectedPlan={defaultPlan}
         />

         {/* Sample Download Modal */}
         <SampleDownloadModal
            isOpen={isSampleModalOpen}
            onClose={handleCloseSampleModal}
         />
      </>
   );
};

export default CTASection;
