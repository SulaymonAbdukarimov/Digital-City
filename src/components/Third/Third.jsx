import React from "react";
import styled from "styled-components";
import "./third.css";
import { keyframes } from "styled-components";

let glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`;

const ThirdButton = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  color: #ffffff;
  background: none;
  color: white;
  padding: 14px 35px;
  margin-top: 50px;
  border: 2px solid;
  border-image: linear-gradient(to right top, #ad00ff, #00e0ff);
  border-image-slice: 1;
  border-radius: 4px;
  cursor: pointer;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }
  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 30px;
  }
`;

function Third() {
  return (
    <div className="third-parent">
      <div className="third">
        <p className="third-desc">
          пришло время погружаться в мир киберспорта с digital city-sport!
          станьте частью нашей команды сегодня
        </p>
        <ThirdButton>Записаться</ThirdButton>
      </div>
    </div>
  );
}

export default Third;
