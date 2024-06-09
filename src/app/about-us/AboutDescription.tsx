import React, { useEffect, useState } from "react";

import Heading2 from "@/components/ComponentsHeading2";
import { motion } from "framer-motion";

const logoPaths = [
  "guru.svg",
  "category-1.svg",
  "category-3.svg",
  "category-2.svg",
  "fiabci-award.svg",
];

const logoVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.4, staggerChildren: 0.1 },
  },
};

const DescriptionParagraph = ({ children }: { children: React.ReactNode }) => (
  <motion.p
    className="space-y-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    {children}
  </motion.p>
);

const DescriptionImage = ({
  src,
  className,
  alt,
}: {
  src: string;
  className: string;
  alt: string;
}) => (
  <motion.img
    src={src}
    className={`${className} object-cover`}
    alt={alt}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    loading="lazy"
  />
);

const AboutDescription = () => {
  const [displayCount, setDisplayCount] = useState(logoPaths.length);

  useEffect(() => {
    const handleResize = () => {
      setDisplayCount(window.innerWidth < 640 ? 3 : logoPaths.length);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <motion.div
      className="flex flex-col lg:flex-row lg:ps-10 lg:pt-28 xl:ps-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <div className="hidden space-y-8 pe-4 md:w-[30vw] lg:block">
        <Heading2
          subtitle="with our collaborative efforts and determination"
          title="Project Preview"
        />
        <DescriptionParagraph>
          A vertical luxury residence consisting of two state-of-the-art
          high-rise towers in Kuningan CBD that offers clear views of the city
          skyline with unparalleled amenities surrounded by lush private
          gardens.
        </DescriptionParagraph>
        <DescriptionParagraph>
          It is the first residential tower in Indonesia to feature an advanced
          double air filtration system, that provides unrivalled quality indoor
          air and protection from harmful particulates and pollutants such as PM
          2.5, condensation and molds. Verde two strive to achieve Net Zero
          Carbon emissions by end of 2024. Focusing on the offering most
          sustainable and environmentally-friendly luxury residences.
        </DescriptionParagraph>
        <DescriptionImage
          src="photos/about-us/air-quality.png"
          className="h-[300px] w-full rounded-2xl"
          alt=""
        />
        <div className="flex justify-center pb-8">
          <div className="flex w-full justify-center">
            <DescriptionImage
              src="logos/edge.svg"
              className="h-[60px]"
              alt=""
            />
          </div>
          <div className="flex w-full justify-center">
            <DescriptionImage
              src="logos/safeguard.svg"
              className="h-[60px] "
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col lg:w-[70vw]">
        <motion.div
          className="absolute inset-x-0 top-3 flex flex-col items-center justify-center pb-4 pt-28 lg:pt-0"
          variants={logoVariants}
        >
          <div className="block w-full pb-4 text-center text-white lg:hidden">
            <Heading2
              subtitle="with our collaborative efforts and determination"
              title="Project Preview"
            />
          </div>
          <div className="grid grid-cols-3 gap-8 md:grid-cols-5">
            {logoPaths.slice(0, displayCount).map((logo, index) => (
              <motion.img
                key={index}
                src={`logos/${logo}`}
                alt=""
                className="h-24 w-24 invert filter"
                variants={logoVariants}
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>
        <DescriptionImage
          src="https://ik.imagekit.io/heykhoiruuuls/public/photos/about-us/about-us-header.jpg"
          className="h-screen w-full bg-center object-cover  lg:h-full lg:rounded-tl-3xl"
          alt=""
        />
      </div>
      <div className="block px-8 py-4 lg:hidden ">
        <DescriptionParagraph>
          A vertical luxury residence consisting of two state-of-the-art
          high-rise towers in Kuningan CBD that offers clear views of the city
          skyline with unparalleled amenities surrounded by lush private
          gardens.
        </DescriptionParagraph>
      </div>
    </motion.div>
  );
};

export default AboutDescription;
