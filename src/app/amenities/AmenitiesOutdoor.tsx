import { listOutdoor } from "@/model/dataVerdeTwo";
import React, { useState, useEffect } from "react";
import { listIndoor } from "../../model/dataVerdeTwo";
import Line from "@/components/ComponentsLine";
import Image from "next/image";

const AmenitiesIndoor = () => {
  const [selectedData, setSelectedData] = useState(listOutdoor[0]);

  useEffect(() => {
    setSelectedData(listOutdoor[0]);
  }, []);

  const handleDataSelected = (data: any) => {
    setSelectedData(data);
  };
  const ListOutdoor = listOutdoor.map((item, index) => (
    <div
      key={index}
      className={`hover:bg-primary-app mb-4 cursor-pointer rounded-xl p-4 transition-colors duration-400 hover:text-background ${
        selectedData.title === item.title
          ? " bg-primary-app text-background"
          : " bg-stone-200 text-slate-700 "
      }`}
      onClick={() => handleDataSelected(item)}
    >
      {item.title}
    </div>
  ));

  const MobileVersion = () =>
    listOutdoor.map((item, index) => (
      <div key={index} className="lg:hidden">
        <div className="relative h-screen">
          <Image
            src={item.image}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition={
              item.image ===
              "https://ik.imagekit.io/heykhoiruuuls/public/photos/amenities/amenities-kids-playroom.jpg"
                ? "left"
                : "center"
            }
          />
          <div className="absolute top-0 h-1/2 w-full bg-gradient-to-t from-transparent to-zinc-500 md:rounded-br-2xl lg:hidden"></div>
          <div className="absolute top-24 px-4 text-white">
            <h2>{item.title}</h2>
            <p className="pt-4">{item.description}</p>
          </div>
        </div>
        <div className="py-8">
          <Line width="w-1/4" />
        </div>
      </div>
    ));

  const DesktopVersion = () => (
    <div className="relative hidden h-full object-cover sm:w-full lg:block lg:w-[65vw]">
      <Image
        src={selectedData?.image}
        alt={selectedData?.description}
        className="lg:rounded-bl-2xl"
        fill
        objectFit="cover"
      />
      <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-b from-transparent to-zinc-500 md:rounded-br-2xl lg:hidden"></div>
      <div className="absolute bottom-20 block p-4 text-white lg:hidden">
        <h2 className="capitalize">{selectedData?.title}</h2>
        <p className="sm:[40vw] pt-4 md:w-[50vw]">
          {selectedData?.description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-color items-center justify-center lg:flex lg:h-screen">
      <div className="h-full w-full text-black lg:flex">
        <div className="mx-5 hidden h-full grid-rows-2 justify-center rounded-b-2xl bg-neutral-200 lg:grid lg:w-[35vw]">
          <div className="mx-5 mb-5 overflow-auto rounded-b-2xl bg-neutral-300 px-3 pt-3 ">
            {ListOutdoor}
          </div>
          <div className="grid grid-rows-3 justify-center px-5">
            <h2 className="row-span-1 pt-4 capitalize">
              {selectedData?.title}
            </h2>
            <p className="row-span-2 overflow-hidden leading-relaxed">
              {selectedData?.description}
            </p>
          </div>
        </div>
        <MobileVersion />
        {/* dekstop version */}
        <DesktopVersion />
      </div>
    </div>
  );
};
export default AmenitiesIndoor;
