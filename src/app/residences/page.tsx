import React from "react";
import Monteverde from "./Monteverde";
import Terraverde from "./Terraverde";
import Line from "@/components/ComponentsLine";
import HeroSection from "@/components/HeroSection";
import Heading1 from "@/components/ComponentsHeading1";
import Banner from "@/components/ComponentsBanner";

const Residences = () => {
  return (
    <main>
      <HeroSection
        subtext={"T H E"}
        text={"R E S I D E N C E S"}
        image={
          "https://ik.imagekit.io/heykhoiruuuls/public/photos/residences/header-residences.jpg"
        }
        description={
          "Every resident at Verde Two gains the privileges to unlock our first-class facilities — glamorous spaces where entertainment, business, and pleasure take place. Framed by the magnificent gardens, there are plenty of spaces for you to enjoy sceneries, refresh & relax outside of your home but still within your domain."
        }
      />
      <Banner>
        <Heading1
          subtitle="A Visionary Venture"
          title="Designed for Distinction"
          slogan="Your home welcomes you with warmth & elegance."
          className="items-center text-center"
        />
      </Banner>
      <Terraverde />
      <Line width="w-1/2 my-6" />
      <Monteverde />
    </main>
  );
};

export default Residences;
