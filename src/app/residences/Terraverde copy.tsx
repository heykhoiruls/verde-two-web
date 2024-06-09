"use client";
import React from "react";
import { useSwipeable } from "react-swipeable";
import Heading2 from "@/components/ComponentsHeading2";
import Button from "@/components/ComponentsButton";
import Image from "next/image";

const images = [
  "photos/terraverde/terraverde-living-room.jpg",
  "photos/terraverde/terraverde-bedroom.jpg",
  "photos/terraverde/terraverde-master-bedroom.jpg",
];

const Terraverde = () => {
  return (
    <div className="h-screen">
      <div className="h-3/4 cursor-auto overflow-hidden overflow-x-auto bg-neutral-200">
        <div className="flex h-full space-x-3">
          {images.map((item, index) => (
            <Image
              key={index}
              src={item}
              className=" w-3/4 object-cover"
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="container h-1/4 rounded-b-3xl bg-neutral-200 lg:px-[10vw]">
        <div className="flex items-center space-x-10 py-5">
          <div className="items-start md:flex md:space-x-10">
            <Heading2
              subtitle={
                "Where Grand Living Meets Unmatched Luxury and Serenity"
              }
              title={"Terraverde Tower"}
            />
            <div className="flex flex-col space-y-4">
              <p className="md:max-w-[45vw]">
                The Terraverde residences are designed for grand living and
                entertaining. Each of the exclusive two-to-three bedroom homes
                feature expansive dimensions accompanied by floor-to-ceiling
                windows and soaring ceiling heights.
              </p>
              <div>
                <Button route={"/terraverde"} text="View More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terraverde;
