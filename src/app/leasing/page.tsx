"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Units from "./units";
import Heading3 from "@/components/ComponentsHeading3";
import Banner from "@/components/ComponentsBanner";
import PageUnit from "./PageUnit";

const Leasing = () => {
  return (
    <main>
      <HeroSection
        image="/photos/leasing/leasing-header.jpg"
        text="U N I T"
        description="Your elevated living in jakarta awaits. For further leasing information and private touring kindly contact our leasing representative to schedule a tour and discover your future living space."
        subtext="L E A S I N G"
      />

      <Banner>
        <Heading3
          title={"Available Apartements"}
          text={
            "For additional details and information regarding the lease, we kindly advise reaching out to the leasing office for further assistance"
          }
        />
      </Banner>
      <PageUnit />
    </main>
  );
};

export default Leasing;
