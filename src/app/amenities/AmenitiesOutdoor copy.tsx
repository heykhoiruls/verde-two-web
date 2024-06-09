import ModelDropdown from "@/model/ModelDropdown";
import { listOutdoor } from "@/model/dataVerdeTwo";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AmenitiesOutdoor = () => {
  const [selectedData, setSelectedData] = useState<
    { image: string; description: string; title: string }[]
  >([]);

  const handleDataSelected = (data: any) => {
    setSelectedData(data);
  };
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="flex h-full w-full text-black">
        <div className="flex h-full w-[30vw] flex-col justify-center">
          <div className="flex h-[50vh] flex-col justify-center px-10">
            <motion.h2
              className="pb-8 capitalize"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {selectedData?.[0]?.title || ""}
            </motion.h2>
            <motion.p
              className="h-[30vh] leading-relaxed"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {selectedData?.[0]?.description || ""}
            </motion.p>
          </div>
          <div className="px-8 pt-4">
            <ModelDropdown
              onDataSelected={handleDataSelected}
              listChoose={listOutdoor}
            />
          </div>
        </div>
        <div className="w-[70vw]">
          <Image
            src={selectedData?.[0]?.image || ""}
            alt={selectedData?.[0]?.description || ""}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default AmenitiesOutdoor;
