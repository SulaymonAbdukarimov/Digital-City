import React from "react";
import "./fifth.css";
import dc1 from "../../img/dc1.png";
import dc2 from "../../img/dc2.png";
import dc3 from "../../img/dc3.png";
import dc4 from "../../img/dc4.png";
import dc5 from "../../img/dc5.png";
import dc6 from "../../img/dc6.png";
import dc7 from "../../img/dc7.png";
import dc8 from "../../img/dc8.png";
import dc9 from "../../img/dc9.png";
import dc10 from "../../img/dc10.png";

function Fifth() {
  return (
    <div className="photo-parent">
      <div className="photo">
        <h2>Фото Галерея</h2>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src={dc1} alt="dc1" />
          </div>
          <div class="gallery-item small">
            <div class="gallery-item-double">
              <div class="gallery-item__box">
                <img src={dc2} alt="dc2" />
              </div>
              <div class="gallery-item__box">
                <img src={dc3} alt="dc3" />
              </div>
            </div>
            <div class="gallery-item-sigle">
              <img src={dc4} alt="dc4" />
            </div>
          </div>
          <div class="gallery-item small">
            <div class="gallery-item__box">
              <img src={dc5} alt="dc6" />
            </div>
            <div class="gallery-item__box">
              <img src={dc6} alt="dc7" />
            </div>
          </div>
          <div class="gallery-item small">
            <div class="gallery-item__box">
              <img src={dc7} alt="dc6" />
            </div>
            <div class="gallery-item__box">
              <img src={dc8} alt="dc7" />
            </div>
          </div>
          <div class="gallery-item small">
            <img src={dc9} alt="dc8" />
          </div>
          <div class="gallery-item">
            <img src={dc10} alt="dc9" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fifth;
