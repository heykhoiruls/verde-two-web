import React, { useState } from "react";
import { data } from "../../data/leasing";
import CarouselNavigation from "../../components/ComponentsCarouselNavigation";
import Image from "next/image";

const Icon = ({
  src,
  alt,
  name,
}: {
  src: string;
  alt: string;
  name: string;
}) => (
  <div className="flex items-center space-x-2 ">
    <img className="h-full w-6" src={src} alt={alt} />
    <p className="m-0" style={{ padding: 0 }}>
      {name}
    </p>
  </div>
);

const UnitsCard = ({ unit }: { unit: any }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % unit.image.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + unit.image.length) % unit.image.length,
    );
  };

  return (
    <div className="relative h-[90vh] rounded-2xl shadow-lg">
      <img
        src={unit.image[selectedImageIndex]}
        className="h-3/4 w-full rounded-2xl object-cover"
        alt="Unit Layout"
      />
      <div className="absolute bottom-48 w-full justify-between px-4">
        <CarouselNavigation
          nextImage={nextImage}
          prevImage={prevImage}
          total={unit.image.length}
          selected={selectedImageIndex}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 px-2">
        <div className="bg-primary-app flex items-center justify-between rounded-t-2xl px-6 py-4 text-background">
          <div>
            <p className="text-xl font-bold">{unit.type}</p>
            <p className="text-xs">{unit.position}</p>
          </div>
          <div>
            <p className="text-xs">Mulai dari</p>
            <p className="text-base font-bold">USD {unit.price}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 bg-stone-200 px-6 py-6">
          <Icon src="./icons/bed.svg" alt="Bed" name={unit.bedroom} />
          <Icon src="./icons/bath.svg" alt="Bath" name={unit.bath} />
          <Icon src="./icons/area.svg" alt="Area" name={unit.area} />
          <Icon src="./icons/util.svg" alt="Util" name={unit.util} />
        </div>
      </div>
    </div>
  );
};

const ButtonType = ({
  active,
  type,
  onClick,
}: {
  active: boolean;
  type: string;
  onClick: () => void;
}) => (
  <button
    className={`rounded-[900px] px-10 py-4 font-bold ${
      active ? "bg-primary-app text-white" : "bg-neutral-200 text-slate-900"
    }`}
    onClick={onClick}
  >
    {type}
  </button>
);

const PageUnit = () => {
  const [selectedBedroom, setSelectedBedroom] = useState("3 BEDROOMS");

  const handleBedroomSelection = (type: string) => {
    setSelectedBedroom(type);
  };

  const filteredData = data.filter((item) => item.bedroom === selectedBedroom);

  return (
    <section className="mb-10 px-4 lg:px-16">
      <div className="flex justify-center space-x-4 pt-4">
        <ButtonType
          active={selectedBedroom === "3 BEDROOMS"}
          type="3 BEDROOMS"
          onClick={() => handleBedroomSelection("3 BEDROOMS")}
        />
        <ButtonType
          active={selectedBedroom === "2 BEDROOMS"}
          type="2 BEDROOMS"
          onClick={() => handleBedroomSelection("2 BEDROOMS")}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-3 ">
        {filteredData.map((item, index) => (
          <UnitsCard key={index} unit={item} />
        ))}
      </div>
    </section>
  );
};

export default PageUnit;
