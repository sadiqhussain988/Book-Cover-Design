// src/components/preorder/TimelineSection.jsx
import React from "react";
import { FaCircle, FaCheckCircle } from "react-icons/fa";

const ReleaseTimeLine = () => {
   const milestones = [
      {
         stage: "Pre-Order",
         date: "Available Now",
         status: "current",
         description: "Reserve your copy with exclusive benefits",
      },
      {
         stage: "Production",
         date: "Dec 15, 2024",
         status: "upcoming",
         description: "Books go to print and quality control",
      },
      {
         stage: "Shipping",
         date: "Jan 10, 2025",
         status: "upcoming",
         description: "First copies dispatched to customers",
      },
      {
         stage: "Release",
         date: "Feb 1, 2025",
         status: "upcoming",
         description: "Official launch in stores and online",
      },
   ];

   return (
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-6">
            <div
               className="max-w-4xl mx-auto text-center mb-16"
               data-aos="fade-up"
            >
               <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Release Timeline
               </h2>
               <p className="text-gray-600 text-lg">
                  Follow your pre-order journey
               </p>
            </div>

            <div className="max-w-3xl mx-auto">
               {milestones.map((milestone, index) => (
                  <div
                     key={index}
                     className="flex items-start gap-6 mb-8 last:mb-0"
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                  >
                     <div className="flex flex-col items-center">
                        {milestone.status === "current" ? (
                           <FaCheckCircle className="text-amber-600 text-xl" />
                        ) : (
                           <FaCircle className="text-gray-300 text-xl" />
                        )}
                        {index < milestones.length - 1 && (
                           <div className="w-0.5 h-12 bg-gray-200 mt-2"></div>
                        )}
                     </div>

                     <div className="flex-1 pb-8">
                        <div className="flex items-center gap-4 mb-2">
                           <h3 className="text-lg font-semibold text-gray-900">
                              {milestone.stage}
                           </h3>
                           {milestone.status === "current" && (
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                                 Active
                              </span>
                           )}
                        </div>
                        <p className="text-amber-600 font-semibold text-sm mb-1">
                           {milestone.date}
                        </p>
                        <p className="text-gray-600 text-sm">
                           {milestone.description}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ReleaseTimeLine;
