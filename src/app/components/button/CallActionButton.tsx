"use client";
import DirectionButton from "./DirectionButton";
import WhatsAppButton from "./WhatsppButton";
import { motion } from "framer-motion";
import GoUpperButton from "./GoUpperButton";
import ComponentsNavBottom from "@/components/ComponentsNavBottom";

const SocialData = [
  {
    link: "https://www.youtube.com/channel/UCKA0OBv14C6pSNpb3pcNNOA",
    logo: "logos/youtube.svg",
  },
  {
    link: "https://www.instagram.com",
    logo: "logos/instagram.svg",
  },
];

const SocialButton = ({ href, src }: { href: string; src: string }) => {
  return (
    <a href={href}>
      <ComponentsNavBottom src={src} />
    </a>
  );
};

const CallActionButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pointer-events-none fixed inset-x-0 bottom-4 z-[9999] flex items-center justify-center"
    >
      <div className="pointer-events-auto flex items-center rounded-full bg-black bg-opacity-35 p-2 text-white backdrop-blur-sm backdrop-filter">
        <div className="hidden items-center md:flex">
          <DirectionButton />
          <p className="px-5 text-sm">Inquire now</p>
        </div>

        <div className="bg-color-primary flex items-center rounded-full">
          <div className="flex items-center md:hidden">
            <DirectionButton />
          </div>
          {SocialData.map((item, index) => (
            <SocialButton key={index} href={item.link} src={item.logo} />
          ))}
          <WhatsAppButton />
          <GoUpperButton />
        </div>
      </div>
    </motion.div>
  );
};

export default CallActionButton;
