import { listIndoor } from "@/model/dataVerdeTwo";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const AmenitiesIndoor = () => {
  const [selectedData, setSelectedData] = useState(listIndoor[0]);

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
        selectedData.title === item.title
          ? "border border-yellow-600 bg-yellow-600 text-background"
          : " bg-stone-200 text-slate-700 "
      }`}
      onClick={() => handleDataSelected(item)}
    >
      {item.title}
    </div>
  ));

  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" flex h-full w-full text-black">
        <div className="relative sm:w-full lg:w-[65vw]">
          <Image
            src={selectedData?.image}
            alt={selectedData?.description}
            className="h-full w-full object-cover lg:rounded-tr-2xl"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "photos/home/home-hero-7.png";
            }}
            layout="cover"
          />
          {/* mobile view */}
          <div className="absolute bottom-0 h-1/4 w-full overflow-auto rounded-t-2xl bg-neutral-300 text-white lg:hidden">
            <div className="px-4 py-4">{ListIndoor}</div>
          </div>
        </div>

        {/* desktop view */}
        <div className="mx-5 hidden h-full grid-rows-2 justify-center rounded-t-2xl bg-neutral-200 lg:grid lg:w-[35vw]">
          <div className="grid grid-rows-2 justify-center px-5">
            <h2 className="row-span-1 flex items-center justify-end capitalize">
              {selectedData?.title}
            </h2>
            <p className="row-span-1 overflow-hidden leading-relaxed">
              {selectedData?.description}
            </p>
          </div>
          <div className="mx-5 overflow-auto rounded-t-2xl bg-neutral-300 px-3 pt-3 ">
            {ListIndoor}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AmenitiesIndoor;
