import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  HomePage,
  FirstPage,
  SecondPage,
  ThirdPage,
  FourthPage,
} from "../views";
import { AnimatePresence } from "framer-motion";

export const RouterView = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/first-page" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/third-page" element={<ThirdPage />} />
        <Route path="/fourth-page" element={<FourthPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RouterView;
