import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ParallaxProps {}

const ParallaxLogo: React.FC<ParallaxProps> = ({}) => {
  const images = [
    "photos/partners/partner-1.png",
    "photos/partners/partner-2.png",
    "photos/partners/partner-3.png",
    "photos/partners/partner-4.png",
    "photos/partners/partner-5.png",
  ];

  const clonedImages = [...images, ...images, ...images];

  const containerWidth = clonedImages.length * 100;

  return (
    <div>
      <div className="parallax">
        <motion.div
          className="scroller space-x-10"
          animate={{
            x: [-containerWidth, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        >
          {clonedImages.map((src, index) => (
            <motion.img
              src={src}
              className="h-[50px]"
              key={index}
              alt={`Partner ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxLogo;
