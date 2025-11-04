// src/components/preorder/PreOrderFAQ.jsx
import React, { useState } from 'react';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';

const PreOrderFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "When will I receive my pre-ordered book?",
      answer: "Pre-orders will start shipping on January 10, 2025. You'll receive tracking information via email once your order ships."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for institutional orders."
    },
    {
      question: "Can I get a signed copy?",
      answer: "Yes! The Professional Edition includes a signed copy by the author. You can also add a personalized message during checkout."
    },
    {
      question: "What's your refund policy for pre-orders?",
      answer: "You can cancel your pre-order anytime before shipping for a full refund. After shipping, standard return policies apply."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. Free shipping is included for all pre-orders, regardless of location."
    },
    {
      question: "What's included in the digital companion guide?",
      answer: "The digital guide includes additional case studies, printable resources, reference materials, and access to exclusive online content."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaQuestionCircle className="text-amber-600 text-2xl" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about pre-ordering
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-gray-200"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-xl"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <FaMinus className="text-amber-600" />
                  ) : (
                    <FaPlus className="text-amber-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreOrderFAQ;