"use client";
import React from "react";
import AboutTeam from "./AboutTeam";
import Banner from "@/components/ComponentsBanner";
import Heading3 from "@/components/ComponentsHeading3";
import AboutDescription from "./AboutDescription";

const AboutUs = () => {
  return (
    <main>
      <AboutDescription />
      <Banner>
        <Heading3
          title={"The Prestigious Team"}
          text={
            "World-renowned award-winning architects, interior designers and construction firms were brought together to bring this project to life, offering unmatched design and a peerless luxury resort living experience in the city."
          }
        />
      </Banner>
      <AboutTeam />
    </main>
  );
};

export default AboutUs;
