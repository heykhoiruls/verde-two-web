import React, { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import RacetoZeroSvg from "../../../public/logos/racetozero.svg";
import RacetoZeroLogoSvg from "../../../public/logos/racetozero-long.svg";

const RaceToZero = ({ id }: { id: string }) => {
  useEffect(() => {
    const paths = document.querySelectorAll<SVGPathElement>(`#${id} path`);
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power1.inOut",
        delay: Math.random() * 1,
      });
    });
  }, [id]);

  return (
    <div>
      <RacetoZeroSvg id={id} />
    </div>
  );
};

const AnimateRacetoZeros = ({ start, end }: { start: number; end: number }) => {
  return (
    <div>
      {Array.from({ length: end - start + 1 }, (_, index) => (
        <div
          key={start + index}
          style={{ marginTop: "-70px", marginRight: "-4px" }}
        >
          <RaceToZero id={`animate-${start + index}`} />
        </div>
      ))}
    </div>
  );
};

const HomeCampaign = () => {
  return (
    <div className="bg-color flex h-screen items-end justify-center overflow-hidden md:justify-end">
      <div className="flex h-screen w-screen flex-col items-center justify-center text-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        >
          <RacetoZeroLogoSvg />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          className="px-24 pt-10"
        >
          Race to Zero is a global campaign aimed at rallying leadership and
          support from businesses, cities, regions, investors, and citizens for
          a healthy, resilient, and zero-carbon future. The campaign is driven
          by the United Nations Framework Convention on Climate Change (UNFCCC)
          and its partners, with the overarching goal of achieving net-zero
          greenhouse gas emissions by 2050 at the latest.
        </motion.p>
      </div>
      <div className="flex h-full w-full flex-col">
        <div className="relative ms-2 mt-4 h-full w-full">
          <Image
            src="/photos/home/racetozerocampaign.png"
            className="rounded-3xl"
            alt=""
            layout="fill"
            objectFit="cover"
          />
          <motion.div
            className="absolute bottom-[-150px] flex w-full items-end justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <AnimateRacetoZeros start={1} end={5} />
            <AnimateRacetoZeros start={6} end={9} />
            <AnimateRacetoZeros start={10} end={15} />
            <AnimateRacetoZeros start={16} end={18} />
            <AnimateRacetoZeros start={19} end={22} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeCampaign;
