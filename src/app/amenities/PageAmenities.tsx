"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import AmenitiesOutdoor from "./AmenitiesOutdoor";
import Banner from "@/components/ComponentsBanner";
import Heading3 from "@/components/ComponentsHeading3";
import Line from "@/components/ComponentsLine";

const PageAmenities = () => {
  return (
    <main>
      <HeroSection
        image={
          "https://ik.imagekit.io/heykhoiruuuls/public/photos/amenities/header-amenities.jpg"
        }
        text={"A M E N I T I E S"}
        subtext={"T H E"}
        description={
          "Escape the hustle and bustle of city life in our meticulously landscaped courtyard, a verdant sanctuary where lush greenery meets contemporary design. Take a leisurely stroll along winding pathways, or simply relax amidst the tranquil surroundings, enveloped by the soothing sounds of nature."
        }
      />

      <Banner>
        <Heading3
          title={"The Definitive Lifestyle Experience"}
          text={
            "Over 6,000 square meters of indoor and outdoor amenities serve as an extension of the private homes, impeccably appointed for wellness, community and entertainment. With over 25 world-class facilities, instant gratification has never felt so luxurious."
          }
        />
      </Banner>

      <AmenitiesOutdoor />

      <div className="bg-color hidden py-8 lg:block">
        <Line width="w-1/4" />
      </div>
    </main>
  );
};

export default PageAmenities;
