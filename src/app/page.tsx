"use client";
import HomeEdition from "./home/HomeEdition";
import HomeResidences from "./home/HomeResidences";
import Line from "@/components/ComponentsLine";
import HomeHeader from "./home/HomeHeader";

const Home = () => {
  return (
    <main>
      <HomeHeader />
      <Line width="my-6 w-1/4" />
      <HomeResidences />
      <Line width="my-6 w-1/4" />
      <HomeEdition />
      <div className="bg-color h-8 w-full rounded-bl-2xl rounded-br-2xl"></div>
    </main>
  );
};

export default Home;
