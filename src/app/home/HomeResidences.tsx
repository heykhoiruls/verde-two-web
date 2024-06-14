import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeResidences = () => {
  const residences = [
    {
      href: "/leasing",
      src: "/photos/home/home-hero-3.png",
      title: "Monteverde Tower",
      description: "Explore the wonders of",
    },
    {
      href: "/leasing",
      src: "/photos/home/home-hero-2.png",
      title: "Terraverde Tower",
      description: "Discover the blissful living of",
    },
  ];

  return (
    <div className="bg-color flex h-[80vh] w-full flex-col space-y-1 md:flex-row md:space-x-2 md:space-y-0">
      {residences.map((residence, index) => (
        <div key={index} className="relative  h-full w-full ">
          <Link href={residence.href}>
            <Image
              src={residence.src}
              alt=""
              fill
              objectFit="cover"
              className="h-full w-full"
            />
            <div className="top absolute flex h-full w-full flex-col items-center bg-gradient-to-t from-transparent via-transparent to-black pt-8 text-white transition-opacity duration-300 hover:opacity-0 md:pt-20">
              <p className="md:text-md text-md">{residence.description}</p>
              <h1 className="text-xl md:text-3xl">{residence.title}</h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeResidences;
