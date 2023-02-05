import "./HomePage.scss";

import React from "react";
import { BusinessCard } from "../../components/common/businessCard";
import { motion } from "framer-motion";

export const HomePage = () => {
  return (
    <motion.div
      className="HomePage"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
    >
      <BusinessCard />
    </motion.div>
  );
};
