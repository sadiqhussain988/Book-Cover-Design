import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const BookBenefits = () => {
  const benefits = [
    "Evidence-based therapeutic approaches",
    "Practical strategies for professionals",
    "Real-life case studies and examples",
    "Guidance for family integration",
    "Educational implementation frameworks",
    "Emotional support techniques"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="py-20 bg-no-repeat bg-cover bg-fixed relative" // Added 'relative' here
      style={{backgroundImage: "url('/bookcover/dog3.avif')"}}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content Container with z-index */}
      <div className="relative z-10"> {/* Added this wrapper */}
        <div className="max-w-6xl mx-auto px-6">
          {/* Animated Heading */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4"> {/* Changed to white */}
              What You'll Gain
            </h2>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto"> {/* Changed to amber-100 */}
              Practical insights and evidence-based approaches to harness the power of canine companionship.
            </p>
          </motion.div>

          {/* Mini Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="p-5 rounded-xl bg-white/95 shadow-md border border-amber-100 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  borderColor: "rgb(245, 158, 11)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300
                      }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                    </motion.div>
                  </div>
                  <p className="text-gray-700 text-sm font-medium leading-relaxed group-hover:text-gray-900">
                    {benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookBenefits;