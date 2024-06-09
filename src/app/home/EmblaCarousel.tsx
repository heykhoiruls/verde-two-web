import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import imageByIndex from "./imageByIndex";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image from "next/image";

const EmblaCarousel = (props: any) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ delay: 8000 }),
    WheelGesturesPlugin(),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index: any) => (
            <div className="embla__slide" key={index}>
              <div className="absolute flex h-full w-full justify-center bg-gradient-to-t from-transparent via-transparent to-black text-center text-white ">
                <div className="space-y-4 py-[20vh]">
                  <h1 className="text-[90px]">A Brilliant Move</h1>
                  <h1 className="text-[20px]">
                    Discover the differences that set Verde Two apart from the
                    rest
                  </h1>
                </div>
              </div>
              <Image
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
