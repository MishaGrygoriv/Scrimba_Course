import "./TravelCard.scss";

import React from "react";
import locationIcon from "../../../assets/location.svg";


export const TravelCard = (props) => {

  return (
    <li className="TravelCard">
      <img
        src={require(`../../../assets/${props.image}`)}
        alt="img"
        className="TravelCard__image"
      />
      <div className="TravelCard__info">
        <div className="TravelCard__location-wrapper">
          <img
            src={locationIcon}
            alt="locationIcon"
            className="TravelCard__location-icon"
          />
          <span className="TravelCard__location-item">{props.location}</span>
          <a
            href={props.locationMap}
            className="TravelCard__location-link"
            target="blank"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="TravelCard__title">{props.title}</h2>
        <h4 className="TravelCard__data">{props.data}</h4>
        <p className="TravelCard__description">{props.description}</p>
      </div>
    </li>
  );
};