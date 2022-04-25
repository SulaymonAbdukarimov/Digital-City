import React from "react";
import { data } from "./second.js";
import { useEffect, useState } from "react";
import "./about.css";
import cart1 from "../../img/cart1.png";
import cart2 from "../../img/cart2.png";
import cart3 from "../../img/cart3.png";

function About() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(data);
  }, [list]);

  return (
    <div className="second-parent">
      <div className="second">
        <h2>
          Digital City — профессиональная игровая организация, созданная в 2019
          году. Наша цель — объединить самых талантливых киберспортсменов со
          всего мира.
        </h2>
        <div className="card-list">
          <div className="card">
            <img src={cart1} alt="cart 1" />
            <div className="card-content">
              <h4>Twitch потоки</h4>
              <p>
                Смотрите новые трансляции каждый день от наших лучших игроков и
                создателей контента.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={cart2} alt="cart 1" />
            <div className="card-content">
              <h4>Новости киберспорта</h4>
              <p>
                Получайте последние новости, обновления и события из мира
                киберспорта.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={cart3} alt="cart 1" />
            <div className="card-content">
              <h4>Игровые турниры</h4>
              <p>Узнайте больше о международных и местных игровых турнирах.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
