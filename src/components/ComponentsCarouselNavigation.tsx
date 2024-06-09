// CarouselNavigation.js
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ButtonArrow = ({ onClick, icon }: { onClick: () => void; icon: any }) => (
  <button
    onClick={onClick}
    className="bg-color text-color-primary rounded-3xl p-2 hover:text-gray-900 focus:outline-none"
  >
    {icon}
  </button>
);

const CarouselNavigation = ({
  prevImage,
  nextImage,
  selected,
  total,
}: {
  prevImage: any;
  nextImage: any;
  selected: any;
  total: any;
}) => (
  <div className="flex">
    <ButtonArrow onClick={prevImage} icon={<FaArrowLeft size={16} />} />
    <div className="mt-2 flex w-full items-center justify-center space-x-2">
      {[...Array(total)].map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full ${
            index === selected ? "bg-primary-app w-4" : "w-2 bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
    <ButtonArrow onClick={nextImage} icon={<FaArrowRight size={16} />} />
  </div>
);

export default CarouselNavigation;
