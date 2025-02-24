import React, { useEffect, useRef } from "react";
import video1 from "./assets/video1.mp4";

const BgVideoScroll = () => {
  const videoRef = useRef(null);
  let scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => console.error("Video play error:", err));
      }

      // Clear any existing timeout
      clearTimeout(scrollTimeout.current);

      // Set a timeout to pause video when scrolling stops
      scrollTimeout.current = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }, 300); // Adjust delay as needed (300ms = smooth pause effect)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={video1} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
    </div>
  );
};

export default BgVideoScroll;
