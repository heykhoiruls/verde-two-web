import React from "react";

const ComponentsHeading1 = ({
  subtitle,
  title,
  slogan,
  className,
}: {
  subtitle: string;
  title: string;
  slogan: string;
  className?: string;
}) => {
  return (
    <div
      className={`${className} h-full w-full justify-between md:flex md:px-12`}
    >
      <div
        className={`${className} flex flex-col justify-between md:items-start`}
      >
        <p>{subtitle}</p>
        <h2>{title}</h2>
      </div>
      <p className={`${className} pt-6 md:w-1/2 md:pt-0 md:text-left`}>
        {slogan}
      </p>
    </div>
  );
};

export default ComponentsHeading1;
