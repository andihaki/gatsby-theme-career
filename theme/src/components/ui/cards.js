import React from "react";
import styled from "styled-components";

import Card from "./card";

const CardsStyled = styled.div`
  max-width: 800px;
  margin: 0px auto 50px auto;
  display: flex;
  flex-flow: row wrap;
`;

class Cards extends React.Component {
  state = {
    colors: [],
    cardsQuantity: this.props.posts.length
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
    // console.log(this.props.posts);
    const { cardsQuantity } = this.state;

    const generateCards = quantity => {
      let res = [];

      for (let i = 0; i < quantity; i++) {
        const { node } = this.props.posts[i];
        // console.log(node);
        res.push(
          <Card
            key={i}
            title={node.frontmatter.title}
            slug={node.fields.slug}
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

// const Cards = props => {
//   const [colors, setColors] = React.useState([]);
//   const [cardsQuantity, setCardsQuantity] = React.useState();
//   const [cards, setCards] = React.useState([]);

//   const generateRandomColors = length => {
//     let res = [];
//     const letters = "abcdef";

//     for (let i = 0; i < length; i++) {
//       let color = "#";

//       for (let k = 0; k < 6; k++) {
//         color += letters[Math.floor(Math.random() * 6)];
//       }

//       res.push(color);
//     }

//     return res;
//   };

//   React.useEffect(() => {
//     setCardsQuantity(props.posts.length);
//     setColors(generateRandomColors(cardsQuantity));
//     setCards(generateCards(cardsQuantity));
//   }, [cardsQuantity]);

//   const getRandomColor = () => {
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   const generateCards = quantity => {
//     let res = [];

//     for (let i = 0; i < quantity; i++) {
//       console.log(props.posts);
//       res.push(
//         <Card
//           key={i}
//           title={props.posts[i].node.frontmatter.title}
//           leftColor={getRandomColor()}
//           rightColor={getRandomColor()}
//         />
//       );
//     }

//     return res;
//   };
//   // console.log(cards);
//   return <CardsStyled>{cards}</CardsStyled>;
// };

export default Cards;
