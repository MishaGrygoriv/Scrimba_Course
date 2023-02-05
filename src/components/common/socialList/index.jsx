import "./SocialList.scss";

import React from "react";
import Twitter from "../../../assets/icons/twitter.svg";
import Facebook from "../../../assets/icons/facebook.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import GitHub from "../../../assets/icons/github.svg";

export const SocialList = () => {
    return (
           <>
              <ul className="SocialList">
                <li className="SocialList__item">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="SocialList__link"
                  >
                    <img src={Twitter} alt="Twitter" className="SocialList__img" />
                  </a>
                </li>
                <li className="SocialList__item">
                  <a
                    href="https://www.facebook.com/grygorivmisha"
                    target="_blank"
                    rel="noreferrer"
                    className="SocialList__link"
                  >
                    <img src={Facebook} alt="Facebook" className="SocialList__img" />
                  </a>
                </li>
                <li className="SocialList__item">
                  <a
                    href="https://www.instagram.com/grygoriv_misha/"
                    target="_blank"
                    rel="noreferrer"
                    className="SocialList__link"
                  >
                    <img src={Instagram} alt="Instagram" className="SocialList__img" />
                  </a>
                </li>
                <li className="SocialList__item">
                  <a
                    href="https://github.com/MishaGrygoriv"
                    target="_blank"
                    rel="noreferrer"
                    className="SocialList__link"
                  >
                    <img src={GitHub} alt="GitHub" className="SocialList__img" />
                  </a>
                </li>
              </ul>
            </>
    );
}