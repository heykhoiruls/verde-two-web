"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Heading3 from "@/components/ComponentsHeading3";
import Banner from "@/components/ComponentsBanner";
import PageUnit from "./PageUnit";

const PageLeasing = () => {
  return (
    <main>
      <HeroSection
        image="/photos/leasing/leasing-header.jpg"
        text="U N I T"
        description="Your elevated living in Jakarta awaits. For further leasing information and private touring kindly contact our leasing representative to schedule a tour and discover your future living space."
        subtext="L E A S I N G"
      />

      <Banner>
        <Heading3
          title={"Available Apartments"}
          text={
            "For additional details and information regarding the lease, we kindly advise reaching out to the leasing office for further assistance."
          }
        />
      </Banner>
      <PageUnit />
    </main>
  );
};

export default PageLeasing;
