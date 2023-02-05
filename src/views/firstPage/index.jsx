import "./FirstPage.scss";

import React from "react";
import { ReactFacts } from "../../components/sections/reactFacts";
import { motion } from "framer-motion";

export const FirstPage = () => {
  return (
    <motion.div
      className="FirstPage"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
    >
      <ReactFacts />
    </motion.div>
  );
};
