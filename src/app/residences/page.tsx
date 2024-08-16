import { Metadata } from "next";
import PageResidences from "./PageResidences";

export const metadata: Metadata = {
  title: "Residences",
  description:
    "Find your perfect home with our diverse range of options, crafted to provide the ultimate living experience.",
};

const Residences = () => {
  return (
    <main>
      <PageResidences />
    </main>
  );
};

export default Residences;
