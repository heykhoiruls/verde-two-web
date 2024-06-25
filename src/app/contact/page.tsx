"use client";

import Heading1 from "@/components/ComponentsHeading1";
import { motion, AnimatePresence } from "framer-motion";
import ComponentsInput from "@/components/ComponentsInput";

const Contact = () => {
  return (
    <AnimatePresence>
      <motion.main
        className="h-screen w-screen overflow-hidden pt-20"
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="container px-[10vw] py-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Heading1
            subtitle={"discover what life could be"}
            title={"Inquire now"}
            slogan={
              "Should you have any inquiry or request, kindly reach us via inquiry box below. We will be pleased to received your email and will get back to you soon."
            }
          />
        </motion.div>
        <div className="mx-2 h-full">
          <motion.div
            className="relative flex h-full w-full justify-center object-cover lg:px-[10vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.img
              src="https://ik.imagekit.io/heykhoiruuuls/public/photos/home/home-hero-3.png"
              alt=""
              className="rounded-t-[16px] object-cover lg:w-full"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              loading="lazy"
            />
            <motion.div
              className="absolute top-4 px-4 pt-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            >
              <ComponentsInput />
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
    </AnimatePresence>
  );
};

export default Contact;
