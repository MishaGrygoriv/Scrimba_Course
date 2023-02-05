import "./MemeGenerator.scss";

import { useState } from "react";
import TrollLogo from "../../../assets/troll_face.png";
import { MemeComponent } from "../../common/memeComponent";

export const MemeGenerator = () => {
  const [showText, setShowText] = useState(false);
  const handleMouseEnter = (e) => {
    e.target.style.background = "#fff";
    e.target.style.transition = "background 0.3s ease-out";
    setShowText(true);
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "#672280";
    setShowText(false);
  };

  return (
    <div className="MemeGenerator">
      <div className="MemeGenerator__header">
        <div className="MemeGenerator__logo-wrapper">
          <img
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src={TrollLogo}
            alt="TrollLogo"
            className="MemeGenerator__logo"
          />
          <h2 className="MemeGenerator__title">Meme Generator</h2>
          {showText && <p className="MemeGenerator__message">hey, don't hover on me! Get out away!</p>}
        </div>
        <h3 className="MemeGenerator__subtitle">React Course - Project 3</h3>
      </div>
      <MemeComponent />
    </div>
  );
};
