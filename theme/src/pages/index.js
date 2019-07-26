import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Styled = styled.div`
  color: tomato;
`;

const MakeItBlack = createGlobalStyle`
  body {
    background-color: #000
  }
`;

const Index = () => (
  <Styled>
    <MakeItBlack />
    <h1>Home Page</h1>

    <pre>Big Image profile / typing js</pre>

    <div>Portofolio</div>

    <div>Blog list</div>
  </Styled>
);
export default Index;
