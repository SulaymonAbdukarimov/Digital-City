import React from "react";
import first from "../../img/first.png";
import Navbar from "../Nav/Navbar";
import "./header.css";
function Header() {
  return (
    <div className="header-main">
      <Navbar />
      <div className="bg"></div>
      <h1 className="header-text">
        добро пожаловать в игру <br />
        <span className="header-span">DCcyber</span> в
        <br /> киберспортивных играх
      </h1>
    </div>
  );
}

export default Header;
