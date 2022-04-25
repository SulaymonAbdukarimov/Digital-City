import React from "react";
import "./game.css";
import pc1 from "../../img/pc1.png";
import gamecart1 from "../../img/gamecart1.svg";
import gamecart2 from "../../img/gamecart2.svg";
import achki from "../../img/achki.png";
import miltiq2 from "../../img/miltiq2.png";
import miltiq from "../../img/miltiq.png";
function Game() {
  return (
    <div className="important">
      <div className="fourth-parent">
        <div className="fourth">
          <div className="main">
            <div className="main-first">
              <p>Последние турниры</p>
            </div>
            <ul className="main-second">
              <li>
                <a href="#">Все</a>
              </li>
              <li>
                <a href="#">CS:GO</a>
              </li>
              <li>
                <a href="#">DOTA 2</a>
              </li>
              <li>
                <a href="#">R6 SEGA</a>
              </li>
              <li>
                <a href="#">PUBG</a>
              </li>
            </ul>
          </div>
          {/* first  */}
          <div className="game">
            <div className="game-first">
              <img src={gamecart1} alt="game cart 1" />
              <h3>VS</h3>
              <img src={gamecart2} alt="game cart 2" />
            </div>
            <div className="game-content">
              <h5>Oldchoolband - Oldchoolband Dota 2</h5>
              <p>03 Марта 2022 13:20</p>
            </div>
          </div>
          {/* second */}
          <div className="game">
            <div className="game-first">
              <img src={gamecart2} alt="game cart 1" />
              <h3>VS</h3>
              <img src={gamecart1} alt="game cart 2" />
            </div>
            <div className="game-content">
              <h5>Oldchoolband - Oldchoolband Dota 2</h5>
              <p>03 Марта 2022 13:20</p>
            </div>
          </div>
          {/* Third */}
          <div className="game">
            <div className="game-first">
              <img src={gamecart1} alt="game cart 1" />
              <h3>VS</h3>
              <img src={gamecart2} alt="game cart 2" />
            </div>
            <div className="game-content">
              <h5>Oldchoolband - Oldchoolband Dota 2</h5>
              <p>03 Марта 2022 13:20</p>
            </div>
          </div>
          {/* Fourth */}
          <div className="game">
            <div className="game-first">
              <img src={gamecart2} alt="game cart 1" />
              <h3>VS</h3>
              <img src={gamecart1} alt="game cart 2" />
            </div>
            <div className="game-content">
              <h5>Oldchoolband - Oldchoolband Dota 2</h5>
              <p>03 Марта 2022 13:20</p>
            </div>
          </div>
          <div className="fourth-btn-parent">
            <button className="fouth-btn">Записаться</button>
          </div>
        </div>
      </div>
      <img className="miltiq" src={miltiq} alt="miltiq" />
      <img className="pc1" src={pc1} alt="pc" />
      <img className="achki" src={achki} alt=" achki" />
      <img className="miltiq2" src={miltiq2} alt="Miltiq 2" />
    </div>
  );
}

export default Game;
