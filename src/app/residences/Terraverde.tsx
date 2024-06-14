"use client";
import { motion } from "framer-motion";
import Button from "@/components/ComponentsButton";
import React, { useState, useEffect } from "react";
import ComponentsCarouselNavigation from "../../components/ComponentsCarouselNavigation";

const Terraverde = () => {
  const title = "Terraverde Tower";
  const subTitle = "Meets Unmatched Luxury and Serenity";
  const text =
    "Each of the 186 two-to-three-bedroom homes features expansive dimensions accompanied by floor-to-ceiling windows and soaring ceiling heights. Spacious bathrooms and kitchens are fitted with the finest imported stones and Dornbracht fittings and fixtures. From the comfort of the tranquil homes to the lush gardens that grow outside, this is a place for repose and discovery.";
  const textmd =
    "Each of the 186 two-to-three-bedroom homes features expansive dimensions accompanied by floor-to-ceiling windows and soaring ceiling heights. ";

  const images = [
    "https://ik.imagekit.io/heykhoiruuuls/public/photos/terraverde/terraverde-1.jpg",
    "https://ik.imagekit.io/heykhoiruuuls/public/photos/terraverde/terraverde-2.jpg",
    "https://ik.imagekit.io/heykhoiruuuls/public/photos/terraverde/terraverde-3.jpg",
    "https://ik.imagekit.io/heykhoiruuuls/public/photos/terraverde/terraverde-4.jpg",
  ];
  const [imageIndex, setImageIndex] = useState(0);
  const nextImage = () => {
    setImageIndex((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex(
      (prevImage) => (prevImage - 1 + images.length) % images.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="bg-color flex h-screen">
      <div className="relative flex h-full w-full items-center justify-center">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt=""
            className="absolute h-full w-full object-cover md:rounded-br-2xl"
            style={{
              opacity: index === imageIndex ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
              objectFit: "cover",
              objectPosition: index === 1 ? "center 50% right" : "center",
            }}
          />
        ))}
        <div className="absolute top-0 h-1/2 w-full bg-gradient-to-t from-transparent to-zinc-500 lg:hidden"></div>
        <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-b from-transparent to-zinc-500 md:rounded-br-2xl lg:hidden"></div>
        <div className="absolute flex h-full w-full flex-col justify-between px-4 py-24 text-white md:px-24 lg:justify-end">
          <div className="lg:hidden">
            <h2>{title}</h2>
            <p className="py-6">{textmd}</p>
          </div>
          <ComponentsCarouselNavigation
            prevImage={prevImage}
            nextImage={nextImage}
            total={images.length}
            selected={imageIndex}
          />
        </div>
      </div>

      <div className="hidden items-center justify-center px-10 lg:flex">
        <div className="w-96 rounded-xl bg-neutral-200 p-8">
          <p>{subTitle}</p>
          <h2>{title}</h2>
          <p className="py-10">{text}</p>
          <Button variant="ghost" text="View More" route={"/leasing"} />
        </div>
      </div>
    </div>
  );
};

export default Terraverde;
