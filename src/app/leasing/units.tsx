"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Line from "@/components/ComponentsLine";
import Image from "next/image";

const Facing = ({ location }: { location: string }) => (
  <div className="rounded-3xl border border-solid border-black px-4 py-2">
    <div className="m-0 text-[10px]">{location}</div>
  </div>
);

const Info = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-primary-app w-1/2 rounded-br-xl rounded-tl-xl p-5 text-background">
    <p>{title}</p>
    <h3>{value}</h3>
  </div>
);

const Button = ({ onClick, icon }: { onClick: () => void; icon: any }) => (
  <button
    onClick={onClick}
    className="bg-primary-app rounded-3xl p-2 text-background hover:text-gray-300 focus:outline-none"
  >
    {icon}
  </button>
);

const Units = ({ bedroom }: { bedroom: string }) => {
  const [dataIndex, setDataIndex] = useState(0);
  let filteredData = [];
  if (bedroom === "3 BEDROOMS") {
    filteredData = [
      // Monteverde C1 - C4
      {
        type: "TYPE C4",

        layout: "layouts/layout-c4.png",
        mini: "layouts/layout-mini-c4.png",
        area: "230 m²",
        position: "MONTEVERDE TOWER",
        facing: ["RASUNA SAID", "SUDIRMAN", "CASABLANCA", "GATOT SUBROTO"],
      },
      // Terraverde B1 - B2
      {
        type: "TYPE B1",

        layout: "layouts/layout-b1.png",
        mini: "layouts/layout-mini-b1.png",
        area: "211 m²",
        position: "TERRAVERDE TOWER",
        facing: ["MENTENG", "THAMRIN", "RASUNA SAID"],
      },
      {
        type: "TYPE B2",

        layout: "layouts/layout-b2.png",
        mini: "layouts/layout-mini-b2.png",
        area: "211 m²",
        position: "TERRAVERDE TOWER",
        facing: ["RASUNA SAID", "SUDIRMAN", "CASABLANCA", "GATOT SUBROTO"],
      },
    ];
  } else {
    filteredData = [
      // Terraverde A1 - A4
      {
        type: "TYPE A1",

        layout: "layouts/layout-a1.png",
        mini: "layouts/layout-mini-a1.png",
        area: "177 m²",
        position: "MIDDLE TERRAVERDE TOWER",
        facing: ["MENTENG", "THAMRIN", "RASUNA SAID"],
      },
      {
        type: "TYPE A2",

        layout: "layouts/layout-a2.png",
        mini: "layouts/layout-mini-a2.png",
        area: "171 m²",
        position: "MIDDLE TERRAVERDE TOWER",
        facing: ["RASUNA SAID", "SUDIRMAN", "CASABLANCA", "GATOT SUBROTO"],
      },
      {
        type: "TYPE A3",

        layout: "layouts/layout-a3.png",
        mini: "layouts/layout-mini-a3.png",
        area: "187 m²",
        position: "CORNER TERRAVERDE TOWER",
        facing: ["MENTENG", "THAMRIN", "RASUNA SAID"],
      },
      {
        type: "TYPE A4",

        layout: "layouts/layout-a4.png",
        mini: "layouts/layout-mini-a4.png",
        area: "188 m²",
        position: "CORNER TERRAVERDE TOWER",
        facing: ["RASUNA SAID", "SUDIRMAN", "CASABLANCA", "GATOT SUBROTO"],
      },
    ];
  }

  const nextData = () => {
    setDataIndex((prevIndex) => (prevIndex + 1) % filteredData.length);
  };
  const prevData = () => {
    setDataIndex((prevIndex) =>
      prevIndex === 0 ? filteredData.length - 1 : prevIndex - 1,
    );
  };

  return (
    <motion.div
      className="relative mx-auto flex h-[100vh] items-center px-[104px] py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex w-1/2 justify-center">
        <Image
          src={filteredData[dataIndex].layout}
          className="w-full object-cover"
          alt=""
        />
      </div>

      <div className="flex h-full w-1/2 flex-col justify-center space-y-4">
        <div className="mb-10 space-y-4">
          <div className="flex w-full space-x-4">
            <h3>{bedroom}</h3>
            <Line width="w-full" />
          </div>
          <div className="flex w-full justify-center">
            <Image
              src={filteredData[dataIndex].mini}
              alt=""
              className="h-[100px] w-[200px] object-cover"
            />
          </div>
          <div className="flex space-x-4">
            <Info
              title={filteredData[dataIndex].position}
              value={filteredData[dataIndex].type}
            />
            <Info
              title="SEMI GROSS SIZE"
              value={filteredData[dataIndex].area}
            />
          </div>
          <div className="flex items-center justify-center space-x-6 px-4">
            <p>Facing</p>
            <div className="flex space-x-2">
              {filteredData[dataIndex].facing.map(
                (location: string, index: number) => (
                  <Facing key={index} location={location} />
                ),
              )}
            </div>
          </div>
          <div className=" flex items-center p-2">
            <Button onClick={prevData} icon={<FaArrowLeft size={16} />} />
            <div className=" mt-2 flex w-full items-center justify-center space-x-2">
              {[...Array(filteredData.length)].map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === dataIndex ? "bg-primary-app" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
            <Button onClick={nextData} icon={<FaArrowRight size={16} />} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Units;
