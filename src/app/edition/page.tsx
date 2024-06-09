import Image from "next/image";
import React from "react";

const Edition = () => {
  return (
    <>
      <div className="flex items-center space-x-10 px-[120px] py-10">
        <div className="space-y-10">
          <Image
            src="photos/partners/partner-2.png"
            alt=""
            className="h-[50px]"
          />
          <p>
            The units thoughtfully designed layout where modern convenience and
            aesthetic appeal coalesce effortlessly.
          </p>
        </div>
        <Image src="photos/leasing/image-1.png" alt="" />
      </div>
      <div className="flex space-x-5">
        <Image
          className="h-[70vh] w-[35vw] object-cover"
          src="photos/terraverde/terra-3-bedroom.png"
          alt=""
        />
        <Image
          className="h-[70vh] object-cover"
          src="photos/terraverde/terra-3-bedroom.png"
          alt=""
        />
      </div>
      <div className="flex space-x-5">
        <Image
          className="h-[70vh] object-cover"
          src="photos/terraverde/terra-3-bedroom.png"
          alt=""
        />
        <Image
          className="h-[70vh] w-[35vw] object-cover p-0"
          src="photos/terraverde/terra-3-bedroom.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Edition;
