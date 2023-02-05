import "./ThirdPage.scss";

import React from "react";
import { TravelJournal } from "../../components/sections/travelJournal";
import { motion } from "framer-motion";

export const ThirdPage = () => {
  return (
    <motion.div
      className="ThirdPage"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
    >
      <TravelJournal />
    </motion.div>
  );
};
