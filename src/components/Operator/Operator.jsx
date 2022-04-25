import React from "react";
import styled from "styled-components";
import "./operator.css";

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

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 30px;
  }
`;

function Operator() {
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

export default Operator;
