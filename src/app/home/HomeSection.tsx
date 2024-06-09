import Image from "next/image";
import React from "react";

const HomeSection = () => {
  return (
    <>
      <div className="relative">
        <Image
          src="https://ik.imagekit.io/heykhoiruuuls/public/photos/components/banner.png"
          className="h-[20vh] w-full object-cover"
          alt=""
        />
        <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center text-white">
          <h2>Verde Two</h2>
          <p>
            An exhilarating lifestyle at the center of Jakarta’s Golden
            Triangle.
          </p>
        </div>
      </div>
      <div className="container h-[80vh] space-y-10 md:px-[100px]">
        <div className="top-0 items-end justify-between space-y-3 pt-7 lg:flex">
          <div>
            <p>absolutely amazing</p>
            <h2>you can truly call it home.</h2>
          </div>
          <p>Enjoy our amenities with your family.</p>
        </div>
        <div className="relative">
          <Image
            src="photos/contact/contact-large.png"
            className="h-[50vh] w-full rounded-r-2xl rounded-tl-2xl object-cover lg:h-[60vh]"
            alt=""
          />
          <div className="absolute bottom-0 left-10 translate-y-1/2">
            <div className="bg-color-primary text-color-background container rounded-l-2xl rounded-br-2xl py-3">
              <h3>Embrace Serenity</h3>
              <p>Elevate Your Well-being with Moments of Total Relaxation.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
