import React from "react";
import Logo from "../images/bezdomniaki_logo.jpeg";
import DogCat from "../images/pies_kot.png";
import Party from "../images/party.png";
import Heart from "../images/heart.png";

function Counter() {
  return (
    <div className="counter">
      <img
        src={Logo}
        alt="logo fundacji bezdomniaki"
        className="counter__image"
      />
      <h1 className="counter__title">Pomagamy zwierzętom w potrzebie</h1>
      <div className="counter__list">
        <div className="counter__card">
          <img src={DogCat} alt="pies i kot leżą" />
          <h1>
            Czekają na dom: <span>0</span>
          </h1>
        </div>
        <div className="counter__card">
          <img className="image-party" src={Party} alt="radosne emoji" />
          <span className="big-number-green">0</span>
          <h1 className="title-green">Adoptowane</h1>
        </div>
        <div className="counter__card">
          <img className="image-heart" src={Heart} alt="kolorowe serce" />
          <span className="big-number-green">0</span>
          <h1 className="title-green">Wolontariusze</h1>
        </div>
      </div>
    </div>
  );
}

export default Counter;
