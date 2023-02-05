import "./TheBtn.scss";

import React from "react";

export const TheBtn = (props) => {
    return (
        <div className="TheBtn">
            <a href={props.href} className={props.btnClass}>{props.name}</a>
        </div>
    )
}