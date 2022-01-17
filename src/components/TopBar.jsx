import React from "react";
import Sublogo from "../images/bezdomniaki_sublogo.png";

function TopBar() {
  return (
    <div className="topBar">
      <img
        className="topBar__image"
        src={Sublogo}
        alt="logo alternatywne bezdomniaków"
      />
      <h1 className="topBar__title">
        <span>Fundacja</span>
        <span>Bezdomniaki</span>
      </h1>
    </div>
  );
}

export default TopBar;
