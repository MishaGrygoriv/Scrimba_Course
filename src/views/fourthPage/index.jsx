import "./FourthPage.scss";

import React from "react";
import { motion } from "framer-motion";
import { MemeGenerator } from "../../components/sections/memeGenerator";

export const FourthPage = () => {
  return (
    <motion.div
      className="FourthPage"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <MemeGenerator />
    </motion.div>
  );
};
