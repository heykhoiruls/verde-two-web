import React from "react";

const ComponentsLine = ({
  width,
  color = "bg-black",
  bgcolor = true,
}: {
  width?: string;
  color?: string;
  bgcolor?: boolean;
}) => {
  return (
    <div className={`flex w-full items-center ${bgcolor ? "bg-color" : ""}`}>
      <div className={`container h-[0.1px] ${width} ${color}`}></div>
    </div>
  );
};

export default ComponentsLine;
