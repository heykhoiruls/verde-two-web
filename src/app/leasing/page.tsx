import { Metadata } from "next";
import PageLeasing from "./PageLeasing";

export const metadata: Metadata = {
  title: "Leasing",
  description:
    "Discover luxury living at Verde Two Apartments. Our premium apartments in Jakarta",
};

const Leasing = () => {
  return (
    <main>
      <PageLeasing />
    </main>
  );
};

export default Leasing;
