import React from "react";
import styled from "styled-components";

import Card from "./card";

const CardsStyled = styled.div`
  max-width: 800px;
  margin: 50px auto;
  display: flex;
  flex-flow: row wrap;
`;

class Cards extends React.Component {
  state = {
    colors: [],
    cardsQuantity: 9
  };

  componentDidMount() {
    this.setState({
      colors: this.generateRandomColors(50)
    });
  }

  generateRandomColors = length => {
    let res = [];
    const letters = "abcdef";

    for (let i = 0; i < length; i++) {
      let color = "#";

      for (let k = 0; k < 6; k++) {
        color += letters[Math.floor(Math.random() * 6)];
      }

      res.push(color);
    }

    return res;
  };

  getRandomColor = () => {
    const { colors } = this.state;
    return colors[Math.floor(Math.random() * colors.length)];
  };

  render() {
    const { cardsQuantity } = this.state;

    const generateCards = quantity => {
      let res = [];

      for (let i = 0; i < quantity; i++) {
        res.push(
          <Card
            leftColor={this.getRandomColor()}
            rightColor={this.getRandomColor()}
          />
        );
      }

      return res;
    };

    return <CardsStyled>{generateCards(cardsQuantity)}</CardsStyled>;
  }
}

export default Cards;
