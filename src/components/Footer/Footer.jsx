import React from "react";
import "./footer.css";
import footerlogo from "../../img/footerlogo.png";
import facebook from "../../img/facebook.svg";
import telegram from "../../img/telegram.svg";
import instagram from "../../img/insta.svg";
import youtube from "../../img/youtube.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="main-footer">
        <div className="logo">
          <img className="footerlogo" src={footerlogo} alt="Footer logo" />
          <div className="footer-icons">
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
        <div className="about">
          <ul>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Турниры</a>
            </li>
            <li>
              <a href="#">Счёты</a>
            </li>
            <li>
              <a href="#">Фото</a>
            </li>
          </ul>
        </div>
        <div className="games">
          <ul>
            <li>
              <a href="#">Data 2</a>
            </li>
            <li>
              <a href="#">StarCraft 2</a>
            </li>
            <li>
              <a href="#">CS:GO</a>
            </li>
            <li>
              <a href="#">League of Legends</a>
            </li>
            <li>
              <a href="#">Fortnite</a>
            </li>
            <li>
              <a href="#">Rainbow 6 Siege</a>
            </li>
            <li>
              <a href="#">PUBG</a>
            </li>
          </ul>
        </div>
        <div className="email">
          <h4>Sign up to our newsletter!</h4>
          <p>
            Do you want to receive the latest updates and special offers?Enter
            your <br /> email below to receive our weekly newsletter
          </p>
          <div className="write-email">
            {/* <i  class="fa-solid fa-envelope"></i> */}
            <i id="message" class="fa-regular fa-envelope"></i>
            <input
              className="email-input"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div>
            <input className="footer-checkbox" type="checkbox" name="save" />
            <label className="footer-label" for="save">
              I accept
              <span>
                <a href="#"> newsletter terms</a>
              </span>
            </label>
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright by Digital City {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
