import "./BusinessCard.scss";

import React from "react";
import MichaelPhoto from "../../../assets/michael.png";
// import { TheBtn } from "../theBtn";
import EmailIcon from "../../../assets/icons/email.png";
import LinkedinIcon from "../../../assets/icons/linkedin.svg";
import { SocialList } from "../socialList";

export const BusinessCard = () => {
  // const button = {
  //     btnClass: "BusinessCard__btn",
  //     href: "/",
  // };
  return (
    <div className="BusinessCard">
      <div className="BusinessCard__wrapper">
        <img
          src={MichaelPhoto}
          alt="MichaelPhoto"
          className="BusinessCard__photo"
        />
        <h2 className="BusinessCard__title">Michael Grygoriv</h2>
        <h3 className="BusinessCard__subtitle">Front-end Developer</h3>
        <h4 className="BusinessCard__website">grygoriv-michael.com</h4>
        {/* <TheBtn {...button}/> */}
        <div className="BusinessCard__btn-wrapper">
          <a href="/" className="BusinessCard__btn">
            <img
              src={EmailIcon}
              alt="EmailIcon"
              className="BusinessCard__icon"
            />
            <span className="BusinessCard__btn-name">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/michael-grygoriv-682599141/"
            target="_blank"
            rel="noreferrer"
            className="BusinessCard__btn"
          >
            <img
              src={LinkedinIcon}
              alt="LinkedinIcon"
              className="BusinessCard__icon _white"
            />
            <span className="BusinessCard__btn-name _white">LinkedIn</span>
          </a>
        </div>
        <div className="BusinessCard__content">
          <h3 className="BusinessCard__content-title">About</h3>
          <p className="BusinessCard__content-text _space">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h3 className="BusinessCard__content-title">Interests</h3>
          <p className="BusinessCard__content-text">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
        <SocialList />
      </div>
    </div>
  );
};
