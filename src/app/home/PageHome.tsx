"use client";
import React from "react";
import HomeEdition from "./HomeEdition";
import HomeResidences from "./HomeResidences";
import HomeHeader from "./HomeHeader";
import HomeCampaign from "./HomeCampaign";
import Line from "@/components/ComponentsLine";

const PageHome = () => {
  return (
    <main>
      <HomeHeader />
      <Line width="my-6 w-1/4" />
      <HomeResidences />
      <HomeCampaign />
      <Line width="my-6 w-1/4" />
      <HomeEdition />
      <div className="bg-color h-8 w-full rounded-bl-2xl rounded-br-2xl"></div>
    </main>
  );
};

export default PageHome;
