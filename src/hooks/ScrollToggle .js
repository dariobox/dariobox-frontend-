import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollToggle = ({ children }) => {
  const [showChild, setShowChild] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowChild(false);
      } else {
        setShowChild(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: showChild ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollToggle;