import React, { ReactNode } from "react";

const ComponentsBanner = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage: `url('https://ik.imagekit.io/heykhoiruuuls/public/photos/components/banner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex w-full items-center justify-center bg-black object-cover py-10 text-white md:px-[20vw]"
      >
        {children}
      </div>
    </div>
  );
};

export default ComponentsBanner;
