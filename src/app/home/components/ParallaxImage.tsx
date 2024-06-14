import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ParallaxProps {}

const ParallaxImage: React.FC<ParallaxProps> = ({}) => {
  const images = [
    "photos/edition/edition-1.png",
    "photos/edition/edition-2.png",
    "photos/edition/edition-3.png",
    "photos/edition/edition-4.png",
    "photos/edition/edition-5.png",
  ];

  const clonedImages = [...images, ...images, ...images];

  const containerWidth = clonedImages.length * 100;

  return (
    <div>
      <div className="parallax">
        <motion.div
          className="scroller space-x-4"
          animate={{
            x: [0, -containerWidth],
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        >
          {clonedImages.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              className="h-[400px] rounded-l-xl rounded-br-xl"
              alt={`Partner ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxImage;
