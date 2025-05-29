import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGlassCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={`bg-slate-50/50 backdrop-blur-md rounded-xl shadow-sm border border-gray-100 p-3 my-2 md:p-8 md:my-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedGlassCard; 