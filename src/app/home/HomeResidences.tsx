import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeResidences = () => {
  return (
    <>
      <div className="flex h-[80vh] space-x-2">
        <div className="relative w-1/2 ">
          <Link href={"/monteverde"}>
            <Image
              src="photos/home/home-hero-3.png"
              className="h-full object-cover"
              alt=""
              fill
            />
            <div className="absolute top-0 flex h-full w-full flex-col items-center bg-gradient-to-t from-transparent via-transparent to-black pt-20 text-white transition-opacity duration-300 hover:opacity-0">
              <p>Explore the wonders of</p>
              <h1>Monteverde Tower</h1>
            </div>
          </Link>
        </div>
        <div className="relative w-1/2">
          <Link href={"/terraverde"}>
            <Image
              src="photos/home/home-hero-2.png"
              className="h-full object-cover"
              alt=""
              fill
            />
            <div className="absolute top-0 flex h-full w-full  flex-col items-center bg-gradient-to-t from-transparent via-transparent to-black pt-20 text-white transition-opacity duration-300 hover:opacity-0">
              <p>Discover the blissful living of</p>
              <h1>Terraverde Tower</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeResidences;
