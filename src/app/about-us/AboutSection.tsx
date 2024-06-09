import React from "react";
import { motion } from "framer-motion";
import Heading2 from "@/components/ComponentsHeading2";

const logoPaths = [
  "guru.svg",
  "category-1.svg",
  "category-3.svg",
  "category-2.svg",
  "fiabci-award.svg",
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
};

const logoVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.4, staggerChildren: 0.1 },
  },
};

const AboutSection = () => {
  return (
    <motion.div
      className=" flex w-full items-center justify-between px-24 pb-5 pt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Heading2
        subtitle="with our collaborative efforts and determination"
        title="Project Preview"
      />
      <motion.div
        className="flex justify-center space-x-8 bg-black"
        variants={logoVariants}
      >
        {logoPaths.map((logo, index) => (
          <motion.img
            key={index}
            src={`logos/${logo}`}
            alt=""
            className={`h-24 w-24`}
            variants={logoVariants}
            loading="lazy"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
