import { Metadata } from "next";
import PageAmenities from "./PageAmenities";

export const metadata: Metadata = {
  title: "Amenities",
  description: "Discover the wide range of amenities available at Verde Two",
};

const Amenities = () => {
  return (
    <main>
      <PageAmenities />
    </main>
  );
};

export default Amenities;
