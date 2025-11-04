// src/components/preorder/SuccessToast.jsx
import React from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

const SuccessToast = ({ message, onClose }) => {
   return (
      <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 flex items-center gap-3 min-w-80">
         <FaCheckCircle className="text-xl" />
         <div className="flex-1">
            <p className="font-semibold">Success!</p>
            <p className="text-sm">{message}</p>
         </div>
         <button onClick={onClose} className="text-white hover:text-green-200">
            <FaTimes />
         </button>
      </div>
   );
};

export default SuccessToast;
