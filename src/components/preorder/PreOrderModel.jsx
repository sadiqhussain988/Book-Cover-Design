// src/components/preorder/PreOrderModal.jsx
import React, { useState } from "react";
import {
   FaTimes,
   FaLock,
   FaCreditCard,
   FaUser,
   FaEnvelope,
   FaPhone,
} from "react-icons/fa";

const PreOrderModal = ({ isOpen, onClose, selectedPlan }) => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
   });

   if (!isOpen) return null;

   const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log("Pre-order submitted:", { ...formData, plan: selectedPlan });
      onClose();
   };

   const handleInputChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
         <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
               <h2 className="text-2xl font-bold text-gray-900">
                  Complete Your Pre-Order
               </h2>
               <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600"
               >
                  <FaTimes className="text-xl" />
               </button>
            </div>

            {/* Content */}
            <div className="p-6">
               {/* Order Summary */}
               <div className="bg-amber-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                     Order Summary
                  </h3>
                  <div className="flex justify-between items-center">
                     <span className="text-gray-700">{selectedPlan?.name}</span>
                     <span className="font-bold text-amber-600">
                        {selectedPlan?.price}
                     </span>
                  </div>
               </div>

               <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                     <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <FaUser className="text-amber-600" />
                        Personal Information
                     </h3>
                     <div className="grid md:grid-cols-2 gap-4">
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name
                           </label>
                           <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                           />
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">
                              Email
                           </label>
                           <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                           />
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">
                              Phone
                           </label>
                           <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                           />
                        </div>
                     </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                     <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Shipping Address
                     </h3>
                     <div className="space-y-4">
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">
                              Address
                           </label>
                           <input
                              type="text"
                              name="address"
                              required
                              value={formData.address}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                           />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                           <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                 City
                              </label>
                              <input
                                 type="text"
                                 name="city"
                                 required
                                 value={formData.city}
                                 onChange={handleInputChange}
                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                              />
                           </div>
                           <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                 Country
                              </label>
                              <input
                                 type="text"
                                 name="country"
                                 required
                                 value={formData.country}
                                 onChange={handleInputChange}
                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                              />
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Payment Information */}
                  <div>
                     <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <FaCreditCard className="text-amber-600" />
                        Payment Information
                     </h3>
                     <div className="space-y-4">
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">
                              Card Number
                           </label>
                           <input
                              type="text"
                              name="cardNumber"
                              required
                              placeholder="1234 5678 9012 3456"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                           />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                           <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                 Expiry Date
                              </label>
                              <input
                                 type="text"
                                 name="expiryDate"
                                 required
                                 placeholder="MM/YY"
                                 value={formData.expiryDate}
                                 onChange={handleInputChange}
                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                              />
                           </div>
                           <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                 CVV
                              </label>
                              <input
                                 type="text"
                                 name="cvv"
                                 required
                                 placeholder="123"
                                 value={formData.cvv}
                                 onChange={handleInputChange}
                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                              />
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-4">
                     <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                     >
                        Cancel
                     </button>
                     <button
                        type="submit"
                        className="flex-1 bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                     >
                        <FaLock />
                        Complete Pre-Order
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default PreOrderModal;
