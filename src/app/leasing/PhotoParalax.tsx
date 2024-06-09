"use client";
import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const PhotoParalax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 3]);

  const pictures = [
    {
      src: "photos/home/home-hero-1.png",
      scale: scale3,
    },
    {
      src: "photos/home/home-hero-2.png",
      scale: scale3,
    },
    {
      src: "photos/home/home-hero-3.png",
      scale: scale3,
    },
    {
      src: "photos/home/home-hero-4.png",
      scale: scale3,
    },
    {
      src: "photos/home/home-hero-5.png",
      scale: scale3,
    },
    {
      src: "photos/home/home-hero-6.png",
      scale: scale3,
    },
    {
      src: "photos/home/home-hero-7.png",
      scale: scale3,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              style={{ scale: scale }}
              key={index}
              className={styles.el}
            >
              <div className={styles.imgContainer}>
                <Image src={src} alt="image" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoParalax;
