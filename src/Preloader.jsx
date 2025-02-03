import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import video from "./assets/video.mp4"
const Preloader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for video to end
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete();
    },7000); // Adjust this time based on your video length

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <video
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            onEnded={() => {
              setIsLoading(false);
              onLoadingComplete();
            }}
          >
            <source src={video}type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;