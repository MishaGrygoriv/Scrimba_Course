import "./TheNav.scss";

import React from "react";
import { CustomLink } from "../common/customLink";

export const TheNav = () => {

    return (
      <ul className="TheNav">
        <CustomLink label="Home" to="/" activeOnlyWhenExact={true} />
        <CustomLink label="First Page" to="/first-page" />
        <CustomLink label="Second Page" to="/second-page" />
        <CustomLink label="Third Page" to="/third-page" />
        <CustomLink label="Fourth Page" to="/fourth-page" />
      </ul>
    );
  };