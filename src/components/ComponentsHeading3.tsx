import React from "react";
import { motion } from "framer-motion";

const ComponentsHeading3 = ({
  text,
  title,
}: {
  text: string;
  title: string;
}) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-4 p-2">
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center"
      >
        {text}
      </motion.p>
    </div>
  );
};

export default ComponentsHeading3;
