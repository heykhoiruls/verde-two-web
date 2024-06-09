import React from "react";

const ComponentsHeading4 = ({
  text,
  title,
}: {
  text: string;
  title: string;
}) => {
  return (
    <>
      <h2 className="pb-4">{title}</h2>
      <p className="pb-4">{text}</p>
    </>
  );
};

export default ComponentsHeading4;
