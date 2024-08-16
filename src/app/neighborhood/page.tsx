import { Metadata } from "next";
import PageNeighborhood from "./PageNeighborhood";

export const metadata: Metadata = {
  title: "Neighborhood",
  description:
    "Explore the vibrant community of Verde Two, featuring local amenities, parks, and residential areas.",
};

const Neighborhood = () => {
  return <PageNeighborhood />;
};

export default Neighborhood;
