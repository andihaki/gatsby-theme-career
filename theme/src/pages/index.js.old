import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import PostIndex from "../components/blog-posts";
import NavBar from "../components/ui/NavBar";
import RemoveMargin from "../components/RemoveMargin";
const Styled = styled.div`
  color: tomato;
`;

const MakeItBlack = createGlobalStyle`
  body {
    background-color: ${({ isBlack }) => (isBlack ? "#000" : "#fff")}
  }
`;

const Index = props => {
  const { uri } = props;
  return (
    <Styled>
      <MakeItBlack isBlack={uri === "/"} />
      <RemoveMargin />
      <NavBar />
      <h1>Home Page</h1>

      <pre>Big Image profile / typing js</pre>

      <div>Portofolio</div>

      <div>Blog list</div>
      <PostIndex />
    </Styled>
  );
};
export default Index;
