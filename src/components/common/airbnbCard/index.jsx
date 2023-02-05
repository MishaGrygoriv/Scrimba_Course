import "./AirbnbCard.scss";

import React from "react";
import StarIcon from "../../../assets/star.png";

export const AirbnbCard = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } 

  return (
    <div className="AirbnbCard">
      {badgeText && <div className="AirbnbCard__badge">{badgeText}</div>}
      {/* {props.item.openSpots === 0 && <div className="TheCard__badge">SOLD OUT</div>} */}
      {/* {!props.item.openSpots && <div className="TheCard__badge">SOLD OUT</div>} */}
      <img
        src={require(`../../../assets/${props.coverImg}`)}
        alt="Pic"
        className="AirbnbCard__img"
      />
      <div className="AirbnbCard__stats">
        <img src={StarIcon} alt="StarIcon" className="AirbnbCard__icon" />
        <span className="AirbnbCard__rate">{props.stats.rating}</span>
        <span className="AirbnbCard__rate _gray-color">({props.stats.reviewCount}) • </span>
        <span className="AirbnbCard__rate _gray-color">{props.location}</span>
      </div>
      <p className="AirbnbCard__title">{props.title}</p>
      <p>
        <span className="AirbnbCard__bold">From ${props.price}</span> / person
      </p>
    </div>
  );
};
