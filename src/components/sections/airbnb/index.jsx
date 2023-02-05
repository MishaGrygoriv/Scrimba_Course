import "./Airbnb.scss";

import React from "react";
import AirbnbLogo from "../../../assets/airbnb_logo.png";
import PhotoGrid from "../../../assets/photo_grid.png";
// import KatiePic from "../../../assets/katie.png";
import { AirbnbCard } from "../../common/airbnbCard";
import airBnbData from "../../../store/airBnbData";


export const Airbnb = () => {
  const card = airBnbData.map(item => {
    return (
      <AirbnbCard key={item.id} {...item}/>
    );
  });
  
  return (
    <div className="Airbnb">
      <div className="Airbnb__header">
        <div className="Airbnb__navbar">
          <img src={AirbnbLogo} alt="AirbnbLogo" className="Airbnb__logo" />
        </div>
        <div className="Airbnb__photo-wrapper">
          <img src={PhotoGrid} alt="PhotoGrid" className="Airbnb__photo-grid" />
        </div>
        <h2 className="Airbnb__title">Online Experiences</h2>
        <p className="Airbnb__subtitle">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
      <ul className="Airbnb__list">{card}</ul>
    </div>
  );
};
