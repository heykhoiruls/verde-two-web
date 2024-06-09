"use client";
import HomeHero from "./home/HomeHero";
import HomeSection from "./home/HomeSection";
import HomeEdition from "./home/HomeEdition";
import HomeResidences from "./home/HomeResidences";
import Line from "@/components/ComponentsLine";
import VideoPlayer from "./home/components/VideoPlayer";
import HomeHeader from "./home/HomeHeader";

const Home = () => {
  return (
    <main>
      <HomeHeader />
      {/* <HomeHero /> */}
      {/* <div className="mx-auto my-8 w-[90%] max-w-6xl overflow-hidden rounded-xl">
        <VideoPlayer src="video/video-(5).mp4" />
      </div> */}
      <Line width="my-6 w-1/4" />
      <HomeResidences />
      <Line width="my-6 w-1/4" />
      <HomeEdition />
      <div className="bg-color h-8 w-full rounded-bl-2xl rounded-br-2xl"></div>
    </main>
  );
};

export default Home;
