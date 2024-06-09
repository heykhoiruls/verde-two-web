"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = ({
  image,
  subtext,
  text,
  description,
}: {
  image: string;
  subtext: string;
  text: string;
  description: string;
}) => {
  return (
    <div className="relative h-[100vh] items-center justify-center lg:flex">
      <Image src={image} alt="" className="object-cover" loading="lazy" fill />

      <div className="absolute top-0 h-full w-full justify-between bg-gradient-to-t from-transparent via-transparent to-black px-10 py-[20vh] text-white lg:flex lg:px-20">
        <motion.div
          className="space-x-6 lg:flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {subtext}
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {text}
          </motion.h2>
        </motion.div>
        <motion.div
          className="hidden pt-10 md:block lg:w-[30vw] lg:pt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className="leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
