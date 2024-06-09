import React from "react";

const ComponentsLine = ({
  width,
  color = "bg-black",
}: {
  width?: string | undefined;
  color?: string;
}) => {
  return (
    <div className="flex w-full items-center">
      <div className={`container h-[0.1px] ${width} ${color}`}></div>
    </div>
  );
};

export default ComponentsLine;
