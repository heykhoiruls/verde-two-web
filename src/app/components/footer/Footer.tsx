"use client";
import React from "react";
import FormInput from "../FormInput";
import ComponentsHeading4 from "@/components/ComponentsHeading4";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className={`mx-auto justify-between px-5 pt-10 lg:flex lg:px-32`}>
        <motion.div
          className={`lg:w-1/2`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ComponentsHeading4
            title="Inquire now"
            text="To know more about Verde Two, please kindly provide your details below and our team will revert to you."
          />
          <FormInput />
          <FooterAddress />
        </motion.div>
        <motion.div
          className={`space-y-8 pt-6 sm:space-y-12 lg:space-y-10 lg:text-right`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className={`flex justify-start space-x-5 lg:justify-end`}>
            <FooterIcon
              link="https://web.facebook.com/verdetwoapartment"
              source="https://ik.imagekit.io/heykhoiruuuls/public/logos/footer/facebook.svg"
            />
            <FooterIcon
              link="https://www.instagram.com/verdetwo/"
              source="https://ik.imagekit.io/heykhoiruuuls/public/logos/footer/instagram.svg"
            />
          </div>
          <div className={`flex justify-start space-x-5 lg:justify-end`}>
            <FooterLogo
              href="https://www.cushmanwakefield.com/en/indonesia"
              source="https://ik.imagekit.io/heykhoiruuuls/public/logos/footer/cushman.svg"
              text="A property management by"
            />
            <FooterLogo
              href="https://farpoint.co.id/"
              source="https://ik.imagekit.io/heykhoiruuuls/public/logos/footer/farpoint-asia.svg"
              text="A premium development by"
            />
          </div>
          <div className="flex w-full lg:justify-end">
            <p className="w-3/4 text-xs">
              © 2024 Copyright VERDE TWO Modern Luxurious Apartment in Jakarta
              CBD, All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
      <FooterComponents />
    </footer>
  );
};

const FooterIcon = ({ source, link }: { source: string; link: string }) => {
  return (
    <a href={link}>
      <Image src={source} alt="Global Icon" width={48} height={48} />
    </a>
  );
};

const FooterAddress = () => {
  return (
    <div className="pt-8">
      <p>
        T. <Link href={"https://wa.me/6287781181180"}>+62 877-8118-1180</Link>
      </p>
      <p className="pt-2">
        E. <Link href={"mailto:info@verdetwo.com"}>info@verdetwo.com</Link>
      </p>
      <p className="pt-2 sm:max-w-[25vw]">
        <Link
          href={
            "https://www.google.com/maps/@-6.2136861,106.8339735,3a,75y,135.04h,103.17t/data=!3m7!1e1!3m5!1sulH6fcEvZUCxOnDQnGWAlg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-13.165285240793068%26panoid%3DulH6fcEvZUCxOnDQnGWAlg%26yaw%3D135.03835375547365!7i16384!8i8192?coh=205410&entry=ttu"
          }
        >
          Jl. Kuningan Mulia Boulevard, Kuningan Setiabudi, Jakarta 12940
          Indonesia
        </Link>
      </p>
    </div>
  );
};

const FooterLogo = ({
  source,
  text,
  href,
}: {
  href: string;
  source: string;
  text: string;
}) => {
  return (
    <div className="space-y-2">
      <p>{text}</p>
      <div className="relative h-[30px] w-full sm:h-[40px]">
        <Link href={href}>
          <Image src={source} fill alt="Icon" />
        </Link>
      </div>
    </div>
  );
};

const FooterComponents = () => {
  return (
    <div className="flex justify-center pt-[90px]">
      <div className="bg-color container h-2 w-[85vw] rounded-t-3xl sm:w-[50vw]"></div>
    </div>
  );
};

export default Footer;
