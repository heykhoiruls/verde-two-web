import { Metadata } from "next";
import PageAboutUs from "./PageAboutUs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Luxury living experience in Jakarta Luxury apartment at Kuningan",
};

const AboutUs = () => {
  return (
    <main>
      <PageAboutUs />
    </main>
  );
};

export default AboutUs;
