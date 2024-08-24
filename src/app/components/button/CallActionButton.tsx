"use client";
import DirectionButton from "./DirectionButton";
import WhatsAppButton from "./WhatsppButton";
import { motion } from "framer-motion";
import GoUpperButton from "./GoUpperButton";
import ChatButton from "./ChatButton";
import ComponentsNavBottom from "@/components/ComponentsNavBottom";

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
      className="pointer-events-none fixed inset-x-0 bottom-4 z-[9999] flex items-center justify-center px-10 lg:px-72"
    >
      <div className="pointer-events-auto flex items-center rounded-full bg-black bg-opacity-35 p-2 text-white backdrop-blur-sm backdrop-filter">
        <div className="hidden items-center md:flex">
          <DirectionButton />

          <p className="px-5 text-sm">Inquire now</p>
        </div>

        <div className="bg-color-primary flex items-center rounded-full">
          <div className="flex items-center md:hidden">
            <DirectionButton />
            <SocialButton
              src="logos/instagram.svg"
              href="https://www.instagram.com/verdetwo/"
            />
          </div>
          <div className="hidden items-center md:flex">
            <SocialButton
              src="logos/instagram.svg"
              href="https://www.instagram.com/verdetwo/"
            />
            <SocialButton
              src="logos/youtube.svg"
              href="https://www.youtube.com/channel/UCKA0OBv14C6pSNpb3pcNNOA"
            />
          </div>

          {/* <WhatsAppButton /> */}
          <GoUpperButton />
          <ChatButton />
          {/* i want the position of the generate script was in here */}
        </div>
      </div>
    </motion.div>
  );
};

export default CallActionButton;
