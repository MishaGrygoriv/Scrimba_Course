import React from "react";
import { Link, useMatch } from "react-router-dom";
import classNames from "classnames";

export const CustomLink = ({ label, to, activeOnlyWhenExact }) => {
  const match = useMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li className="TheNav__item">
      <Link className={classNames("TheNav__link", { _active: match })} to={to}>
        {label}
      </Link>
    </li>
  );
};