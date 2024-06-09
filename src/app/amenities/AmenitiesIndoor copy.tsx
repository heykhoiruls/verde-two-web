import ModelDropdown from "@/model/ModelDropdown";
import { listIndoor } from "@/model/dataVerdeTwo";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const AmenitiesIndoor = () => {
  const [selectedData, setSelectedData] = useState({
    image: listIndoor[0].image,
    description: listIndoor[0].description,
    title: listIndoor[0].title,
  });

  useEffect(() => {
    setSelectedData(listIndoor[0]);
  }, []);

  const handleDataSelected = (data: any) => {
    setSelectedData(data);
  };
  const ListIndoor = listIndoor.map((item, index) => (
    <div
      key={index}
      className={`mb-4 cursor-pointer rounded-xl p-4 transition-colors duration-400 hover:bg-yellow-600 hover:text-background ${
        selectedData && selectedData.title === item.title
          ? "border border-yellow-600 bg-yellow-600 text-background"
          : " bg-stone-200 text-slate-700 "
      }`}
      onClick={() => handleDataSelected(item)}
    >
      {item.title}
    </div>
  ));

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className=" flex h-full w-full text-black">
        <div className="w-[70vw]">
          <Image
            src={selectedData?.image}
            alt={selectedData?.description}
            className="h-full w-full rounded-tr-xl object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "photos/home/home-hero-7.png";
            }}
          />
        </div>
        <div className="mx-5  flex h-full w-[30vw] flex-col justify-center rounded-t-2xl bg-neutral-200">
          <div className="flex h-[50vh] flex-col justify-center px-5">
            <h2 className="pb-8 pt-20 capitalize">{selectedData?.title}</h2>
            <p className="h-[30vh] leading-relaxed">
              {selectedData?.description}
            </p>
          </div>
          <div className="mx-5 overflow-auto rounded-t-2xl bg-neutral-300 px-3 pt-3">
            {ListIndoor}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AmenitiesIndoor;
