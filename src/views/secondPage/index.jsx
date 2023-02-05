import "./SecondPage.scss";

import React from "react";
import { Airbnb } from "../../components/sections/airbnb";
import { motion } from "framer-motion";

export const SecondPage = () => {
  return (
    <motion.div
      className="SecondPage"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
    >
      <Airbnb />
    </motion.div>
  );
};
