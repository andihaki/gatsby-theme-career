import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  flex-flow: column;
  width: 240px;
  height: 260px;
  margin: 20px auto;
  box-shadow: 9px 12px 10px -2px rgba(245, 245, 245, 1);
  border-radius: 10px;
`;

const CardGradient = styled.div`
  width: 240px;
  height: 180px;
  background: ${({ leftColor, rightColor }) =>
    leftColor && rightColor
      ? `linear-gradient(to right top, ${leftColor}, ${rightColor})`
      : null};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardColor = styled.p`
  position: relative;
  margin: 6px 36px;
  font-family: Arial, Helvetica, serif;
  letter-spacing: 0.6px;
  color: #2d3436;

  &:first-of-type {
    margin-top: 14px;
  }

  &::before {
    position: absolute;
    left: -16px;
    top: 3px;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    box-shadow: 9px 12px 10px -2px rgba(245, 245, 245, 0.6);
    content: "";
  }
`;

const Card = props => (
  <CardStyled>
    <CardGradient {...props}>
      <h1 aria-labelledby="Judul">Judul Artikel</h1>
    </CardGradient>
    <CardColor color={props.leftColor}>{props.leftColor}</CardColor>
    <CardColor color={props.rightColor}>{props.rightColor}</CardColor>
  </CardStyled>
);

export default Card;
