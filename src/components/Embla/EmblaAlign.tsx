import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import styles from "./EmblaAlign.module.scss";
import Image from "next/image";

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    WheelGesturesPlugin(),
    Autoplay(),
  ]);

  const images = [
    "photos/terraverde/terraverde-living-room.jpg",
    "photos/terraverde/terraverde-bedroom.jpg",
    "photos/terraverde/terraverde-master-bedroom.jpg",
  ];

  return (
    <div className={styles.embla}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container	">
          {images.map((imageUrl: string, index: number) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <Image
                className="embla__slide__img"
                src={imageUrl}
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
