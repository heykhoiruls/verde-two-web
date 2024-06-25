import Image from "next/image";
import React from "react";

const ComponentsNavBottom = ({ src }: { src: string }) => {
  return (
    <>
      <Image
        src={src}
        loading="lazy"
        alt=""
        className="bg-color-primary flex h-16 w-16 items-center rounded-full p-5"
        width={48}
        height={48}
      />
    </>
  );
};

export default ComponentsNavBottom;
