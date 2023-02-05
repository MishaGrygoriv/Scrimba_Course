import "./MainLayout.scss";

import React from "react";
import { TheNav } from "../navigation";
import TheLogo from "../../assets/logo.svg";
import ScrimbaLogo from "../../assets/scrimba.svg";
import { motion } from "framer-motion";

export const MainLayout = (props) => {
  const { children } = props;

  return (
    <div className="MainLayout">
      <div className="MainLayout__nav">
        <div className="MainLayout__logo-wrapper">
          <img className="MainLayout__logo" src={TheLogo} alt="Logo" />
        </div>
        <TheNav />
        <motion.div
          className="MainLayout__img-wrapper"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <img
            className="MainLayout__img"
            src={ScrimbaLogo}
            alt="ScrimbaLogo"
          />
        </motion.div>
      </div>
      <div className="MainLayout__content">{children}</div>
    </div>
  );
};
