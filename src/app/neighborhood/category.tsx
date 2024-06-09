import React from "react";
import { description, neighborhood } from "@/model/dataNeighborhood";

const ListData = ({
  caption,
  distance,
}: {
  caption: string;
  distance: string;
}) => (
  <div className="mt-2 flex justify-between rounded-lg bg-neutral-200 p-4">
    <div>{caption}</div>
    <p className="text-right">{distance}</p>
  </div>
);

const Category = ({ selectedCategory }: { selectedCategory: string }) => {
  const filter = neighborhood.filter(
    (data) => data.category === selectedCategory,
  );

  return (
    <div className="bg-color pointer-events-auto h-3/4 w-full overflow-auto rounded-b-xl p-4 text-black shadow-lg">
      <div className="p-4">
        <h2>{selectedCategory}</h2>
        <p className="pt-4">{description[selectedCategory]}</p>
      </div>
      {filter.map((data, index) => (
        <ListData key={index} caption={data.caption} distance={data.distance} />
      ))}
    </div>
  );
};

export default Category;
