import "./ReactFacts.scss";

import React from "react";
import Logo from "../../../assets/logo.svg";

export const ReactFacts = () => {
  return (
    <div className="ReactFacts">
      <nav className="ReactFacts__nav">
        <img className="ReactFacts__logo" src={Logo} alt="Logo" />
        <h2 className="ReactFacts__nav-title">ReactFacts</h2>
        <h3 className="ReactFacts__nav-subtitle">React Course - Project 1</h3>
      </nav>
      <div className="ReactFacts__main-content">
        <h1 className="ReactFacts__title">Fun facts about React</h1>
        <ul className="FReactFacts_list">
          <li className="ReactFacts__item">Was first released in 2013</li>
          <li className="ReactFacts__item">
            Was originally created by Jordan Walke
          </li>
          <li className="ReactFacts__item">
            Has well over 100K stars on GitHub
          </li>
          <li className="ReactFacts__item">Is mainteined by Facebook</li>
          <li className="ReactFacts__item">
            Powers thousands of enterprise apps, including mobile apps
          </li>
        </ul>
      </div>
      <footer className="ReactFacts__footer">
        <small>© 2022 Grygoriv development. All rights reserved.</small>
      </footer>
    </div>
  );
};
