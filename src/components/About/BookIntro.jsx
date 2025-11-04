// src/components/about/BookIntroduction.jsx
import React, { useState } from "react";
import { FaArrowRight, FaBookOpen } from "react-icons/fa";
import SampleDownloadModal from "../preorder/SampleDownloadModel";
import PreOrderModel from "../preorder/PreOrderModel";

const BookIntroduction = () => {
   const [isPreOrderModalOpen, setIsPreOrderModalOpen] = useState(false);
   const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);

   const defaultPlan = {
      name: "Standard Edition",
      price: "$24.99",
      description: "Perfect for individual readers",
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
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
               <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                     <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">
                           About the Book
                        </h2>

                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                           <p>
                              <strong className="text-amber-700">
                                 Strong With Hearts and Hounds
                              </strong>{" "}
                              is a comprehensive exploration of the
                              transformative relationships between humans and
                              dogs in professional and personal support roles.
                           </p>

                           <p>
                              This evidence-based guide combines scientific
                              research with real-world case studies to
                              demonstrate how canine companionship enhances
                              therapeutic outcomes, educational experiences, and
                              care environments.
                           </p>

                           <p>
                              Written for professionals and enthusiasts alike,
                              this book provides practical insights and
                              methodologies for integrating dogs into various
                              support settings.
                           </p>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                           <button
                              onClick={handlePreOrder}
                              className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center gap-3 group"
                           >
                              Pre-Order Now
                              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                           </button>
                           <button
                              onClick={handleSampleDownload}
                              className="border border-amber-600 text-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors flex items-center gap-3"
                           >
                              <FaBookOpen />
                              Read Sample
                           </button>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                           <h4 className="font-semibold text-amber-800 mb-2">
                              What's Inside:
                           </h4>
                           <ul className="text-sm text-amber-700 space-y-1">
                              <li>
                                 • Evidence-based research on human-canine bonds
                              </li>
                              <li>• Practical implementation guides</li>
                              <li>• Real-world case studies</li>
                              <li>• Professional methodologies</li>
                           </ul>
                        </div>
                     </div>

                     <div className="bg-gray-100 rounded-2xl p-8">
                        <div
                           className="aspect-[3/4] bg-gray-200 rounded-lg flex items-center justify-center shadow-lg"
                           style={{
                              backgroundImage: 'url("/about-hero.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                           }}
                        >
                           {/* Fallback content */}
                           <div className="text-center p-8 bg-white/90 rounded-lg backdrop-blur-sm">
                              <div className="w-20 h-20 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                 <span className="text-white text-2xl font-bold">
                                    SWH
                                 </span>
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">
                                 Strong With
                              </h3>
                              <h4 className="text-lg font-semibold text-amber-700 mb-3">
                                 Hearts & Hounds
                              </h4>
                              <div className="w-12 h-1 bg-amber-600 mx-auto mb-3"></div>
                              <p className="text-gray-600 font-medium">
                                 Professional Edition
                              </p>
                              <p className="text-gray-500 text-sm mt-1">
                                 Available February 2025
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Pre-Order Modal */}
         <PreOrderModel
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

export default BookIntroduction;
