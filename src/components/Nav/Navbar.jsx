import React from "react";
import logo from "../../img/logo.svg";
import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <ul className={`nav-list ${toggle && "activeBtn"}`}>
          <li>
            <a className="nav-link" href="#">
              О нас
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Турниры
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Счёты
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Фото
            </a>
          </li>
          <li className="register-btn">
            <a className="nav-link" href="#">
              Регистрация
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="bars-btn"
        type="button"
        onClick={() => setToggle(!toggle)}
      >
        <i id="bars" class="fa-solid fa-bars"></i>
      </button>
    </div>
  );
}

export default Navbar;
