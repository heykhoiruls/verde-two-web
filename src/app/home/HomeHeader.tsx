

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ComponentsCarouselNavigation from "../../components/ComponentsCarouselNavigation";

const HomeHeader = () => {
  const images = [
    "photos/monteverde/monteverde-3.jpg",
    "https://ik.imagekit.io/heykhoiruuuls/public/photos/amenities/header-amenities.jpg",
    "https://ik.imagekit.io/heykhoiruuuls/public/photos/amenities/amenities-terraverde-lobby.jpg",
    "https://ik.imagekit.io/heykhoiruuuls/public/photos/amenities/amenities-cigar-room.jpg",
    "https://ik.imagekit.io/heykhoiruuuls/public/photos/amenities/amenities-games-room.jpg",
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
    let startX = 0;
    let endX = 0;

    const handleGestureStart = (e: TouchEvent | MouseEvent) => {
      startX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
    };

    const handleGestureMove = (e: TouchEvent | MouseEvent) => {
      endX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
    };

    const handleGestureEnd = () => {
      if (startX > endX + 10) {
        nextImage();
      } else if (startX < endX - 10) {
        prevImage();
      }
    };

    const imageContainer = document.getElementById("imageCarousel");
    if (imageContainer) {
      imageContainer.addEventListener("touchstart", handleGestureStart);
      imageContainer.addEventListener("touchmove", handleGestureMove);
      imageContainer.addEventListener("touchend", handleGestureEnd);

      imageContainer.addEventListener("mousedown", handleGestureStart);
      imageContainer.addEventListener("mousemove", handleGestureMove);
      imageContainer.addEventListener("mouseup", handleGestureEnd);
      imageContainer.addEventListener("mouseleave", handleGestureEnd);
    }

    return () => {
      if (imageContainer) {
        imageContainer.removeEventListener("touchstart", handleGestureStart);
        imageContainer.removeEventListener("touchmove", handleGestureMove);
        imageContainer.removeEventListener("touchend", handleGestureEnd);

        imageContainer.removeEventListener("mousedown", handleGestureStart);
        imageContainer.removeEventListener("mousemove", handleGestureMove);
        imageContainer.removeEventListener("mouseup", handleGestureEnd);
        imageContainer.removeEventListener("mouseleave", handleGestureEnd);
      }
    };
  }, [nextImage, prevImage]);

  return (
    <div id="imageCarousel" className="relative h-dvh w-screen">
      <AnimatePresence initial={false}>
        {images.map(
          (image, index) =>
            index === imageIndex && (
              <motion.img
                key={index}
                src={image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                loading="lazy"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            ),
        )}
      </AnimatePresence>
      <div className="absolute top-0 h-1/2 w-full bg-gradient-to-t from-transparent to-zinc-600 "></div>
      <motion.div
        className="absolute inset-x-0 flex h-full items-center justify-center text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="absolute flex h-full w-full flex-col justify-between px-4 py-28 text-white md:px-24">
          <div>
            <h1 className="text-2xl md:text-4xl">A Brilliant Move</h1>
            <p className="mt-2 px-4 md:p-0 md:text-lg">
              Discover the differences that set Verde Two apart from the rest
            </p>
          </div>
          <ComponentsCarouselNavigation
            prevImage={prevImage}
            nextImage={nextImage}
            selected={imageIndex}
            total={images.length}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HomeHeader;
