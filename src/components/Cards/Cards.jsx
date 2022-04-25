import React from "react";
import "./cards.css";
import photo from "../../img/photo.png";

function Cards() {
  return (
    <div className="carta">
      <div className="main-cards">
        <div className="card-child">
          <h4>+1300</h4>
          <p>Twitch потоки</p>
        </div>
        <div className="card-child">
          <h4>+108</h4>
          <p>Стримеры</p>
        </div>
        <div className="card-child">
          <h4>+1000</h4>
          <p>CS:GO</p>
        </div>
        <div className="card-child">
          <h4>+202</h4>
          <p>Twitch потоки</p>
        </div>
      </div>
      <img src={photo} alt="photo" />
    </div>
  );
}

export default Cards;
