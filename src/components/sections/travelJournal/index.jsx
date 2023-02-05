import "./TravelJournal.scss";

import React from "react";
import TravelJournalLogo from "../../../assets/travelJournal.svg";
import travelData from "../../../store/travelData";
import { TravelCard } from "../../common/travelCard";

export const TravelJournal = () => {
  const travelJournalCard = travelData.map((item) => {
    return <TravelCard key={item.id} {...item} />;
  });

  return (
    <div className="TravelJournal">
      <nav className="TravelJournal__navbar">
        <img
          src={TravelJournalLogo}
          alt="logo"
          className="TravelJournal__logo"
        />
        <h2 className="TravelJournal__nav-title">my travel journal.</h2>
      </nav>
      <ul className="TravelJournal__list">{travelJournalCard}</ul>
    </div>
  );
};
