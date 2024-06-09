import React from "react";

const ComponentsHeading2 = ({
  subtitle,
  title,
}: {
  subtitle: string;
  title: string;
}) => {
  return (
    <div>
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default ComponentsHeading2;
