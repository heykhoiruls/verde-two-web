"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";

// Dynamically import components to ensure they are client-side only
const MapBackground = dynamic(() => import("./MapBackground"), { ssr: false });
const Category = dynamic(() => import("./category"), { ssr: false });

const neighborhoodIcons = [
  { label: "Mall", icon: "./icons/mall.svg" },
  { label: "Restaurant", icon: "./icons/restaurant.svg" },
  { label: "Hospital", icon: "./icons/hospital.svg" },
  { label: "School", icon: "./icons/school.svg" },
  { label: "Transit", icon: "./icons/train.svg" },
];

const NeighborhoodIcon = ({
  onClick,
  icon,
  selected,
}: {
  onClick: () => void;
  icon: string;
  selected: boolean;
}) => (
  <button onClick={onClick}>
    <div className="flex justify-center py-4">
      <div
        className={`rounded-xl p-2 duration-400 hover:bg-neutral-300 ${
          selected ? "bg-neutral-300" : ""
        }`}
      >
        <img loading="lazy" alt="" src={icon} className="h-6 w-6" />
      </div>
    </div>
  </button>
);

const Neighborhood = () => {
  const [selectedCategory, setSelectedCategory] = useState("Mall");

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <MapBackground selectedCategory={selectedCategory} />
        {/* mobile view */}
        <div className="flex w-full justify-end">
          <div className="pointer-events-none absolute top-1/2 block h-full w-full max-w-lg -translate-y-1/2 transform items-center justify-between text-white lg:hidden">
            <div className="pointer-events-auto mx-4 mt-24 rounded-3xl bg-neutral-200">
              <div className="grid grid-cols-5">
                {neighborhoodIcons.map(({ label, icon }, index) => (
                  <NeighborhoodIcon
                    key={index}
                    icon={icon}
                    onClick={() => handleCategoryChange(label)}
                    selected={selectedCategory === label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* desktop view */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="pointer-events-none absolute top-0 hidden h-full w-full items-center justify-between px-16 text-white lg:flex"
        >
          <div className="h-[70vh]"></div>
          <div className="pointer-events-auto mt-16 h-[70vh] w-[30vw]">
            <div className="rounded-t-xl bg-neutral-200">
              <div className="grid grid-cols-5">
                {neighborhoodIcons.map(({ label, icon }, index) => (
                  <NeighborhoodIcon
                    key={index}
                    icon={icon}
                    onClick={() => handleCategoryChange(label)}
                    selected={selectedCategory === label}
                  />
                ))}
              </div>
            </div>
            <Category selectedCategory={selectedCategory} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Neighborhood;
