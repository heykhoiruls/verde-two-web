import React, { useState } from "react";
import Line from "../../components/ComponentsLine";
import ComponentsCarouselNavigation from "../../components/ComponentsCarouselNavigation";
import { Team } from "../../data/data-team";
import Button from "@/components/ComponentsButton";
import Image from "next/image";

const ImageLogo = ({
  image,
  className,
}: {
  image: string;
  className?: string;
}) => {
  return (
    <Image src={image} className={`h-10 object-cover ${className}`} alt="" />
  );
};

const AboutTeam = () => {
  const [selected, setSelected] = useState(0);

  const nextImage = () => {
    setSelected((prevImage) => (prevImage + 1) % Team.length);
  };

  const prevImage = () => {
    setSelected((prevImage) => (prevImage - 1 + Team.length) % Team.length);
  };

  return (
    <div className="h-screen w-screen grid-cols-2 lg:grid lg:space-x-4 lg:px-24">
      {/* desktop */}
      <div className="hidden h-full w-full flex-col justify-center lg:flex">
        <div className="space-y-4 rounded-3xl bg-neutral-200 p-8">
          <div className="grid grid-cols-2 pb-8">
            <ImageLogo image={Team[selected].logo} />
            <Line width="w-full" />
          </div>
          <h2 className="h-32">{Team[selected].slogan}</h2>
          <div className="flex justify-end pt-10">
            <Button
              variant="ghost"
              text="Learn more"
              route={Team[selected].url}
            />
          </div>
        </div>
      </div>
      <div className="relative hidden h-screen w-full justify-start space-y-8 lg:block">
        <Image
          src={Team[selected].image}
          className="h-full w-full space-y-4 bg-neutral-200 object-cover"
          loading="lazy"
          alt=""
          width={500}
          height={200}
        />
        <div className="absolute bottom-24 w-full px-8 py-4">
          <ComponentsCarouselNavigation
            prevImage={prevImage}
            nextImage={nextImage}
            total={Team.length}
            selected={selected}
          />
        </div>
      </div>
      {/* mobile  */}
      <div className="relative block h-full w-full lg:hidden ">
        <Image
          src={Team[selected].image}
          loading="lazy"
          className="h-full w-full bg-neutral-200 object-cover"
          alt=""
        />
        <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-b from-transparent to-zinc-500 lg:hidden"></div>
        <div className="absolute bottom-4 flex h-full w-full flex-col justify-end px-4 py-24 text-white md:px-24 lg:justify-end">
          <div className="lg:hidden">
            <ImageLogo className="invert filter" image={Team[selected].logo} />
            <p className="py-6">{Team[selected].slogan}</p>
          </div>
          <ComponentsCarouselNavigation
            prevImage={prevImage}
            nextImage={nextImage}
            total={Team.length}
            selected={selected}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
