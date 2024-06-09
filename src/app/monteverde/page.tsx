"use client";
import React, { useState } from "react";
import ModelDropdown from "@/model/ModelDropdown";
import { listMonteverde } from "@/model/dataVerdeTwo";
import Image from "next/image";

const Monteverde = () => {
  const [selectedData, setSelectedData] = useState<
    { image: string; description: string; title: string }[]
  >([]);

  const handleDataSelected = (data: any) => {
    setSelectedData(data);
  };
  return (
    <div className="relative flex h-[100vh] items-center justify-center">
      <Image
        src={selectedData?.[0]?.image || ""}
        alt={selectedData?.[0]?.description || ""}
        className="h-full w-full object-cover"
      />
      <div className="absolute flex h-full w-full justify-between px-20 pb-[10vh] pt-[15vh] text-white ">
        <div className="flex flex-col justify-between">
          <h1 className="drop-shadow-2xl">Monteverde Facilities</h1>
          <ModelDropdown
            onDataSelected={handleDataSelected}
            listChoose={listMonteverde}
          />
        </div>
      </div>
    </div>
  );
};

export default Monteverde;
