import React from "react";
import styled from "styled-components";

import { Link } from "gatsby";

// import SearchIcon from "../../assets/search-icon.svg";

//https://itnext.io/how-to-build-a-responsive-navbar-using-flexbox-and-javascript-eb0af24f19bf
const Nav = styled.nav`
  font-size: 18px;
  background-image: linear-gradient(260deg, #2376ae, 0%, #c16ecf 100%);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;

  /* on desktop view */
  @media screen and (min-width: 768px) {
  }
`;
const Ul = styled.ul`
  /*main-nav*/
  list-style-type: none;
  ${({ active }) =>
    active &&
    `
    display: none;
  `}

  /* on desktop view */
  @media screen and (min-width: 768px) {
    display: flex;
    background-color: black;
    color: white;
    list-style: none;
    margin-top: 0px;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    position: sticky;
    top: 0;
    overflow: hidden;
    min-width: 500px;
  }
`;
const Li = styled.li`
  text-align: center;
  margin: 15px auto;

  /* on desktop view */
  @media screen and (min-width: 768px) {
    /* flex: 1 1 0; */
    &:first-child {
      margin-right: auto;
    }
    margin: 0 20px;

    &:last-child {
      margin-left: 30px;
    }

    a {
      color: white;
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;
const NavToggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;

  /* on desktop view */
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Ntah = styled.i``;
const Logo = styled.a`
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;

  /* on desktop view */
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input``;

// const Ul = styled.ul`
//   /* position: fixed; */
//   display: flex;
//   background-color: black;
//   color: white;
//   list-style: none;
//   margin-top: 0px;
//   width: 100%;
//   align-items: center;
//   justify-content: center;
//   padding: 0;
//   margin: 0;
//   position: sticky;
//   top: 0;
//   overflow: hidden;
//   min-width: 500px;
// `;

// const Li = styled.li`
// /* flex: 1 1 0; */
// &:first-child {
//   margin-right: auto;
// }
// margin: 0 20px;

// &:last-child {
//   margin-left: 30px;
// }

// a {
//   color: white;
//   text-decoration: none;

//   :hover {
//     text-decoration: underline;
//   }
// }
// `;

// const SearchInput = styled.input`
//   /* padding: 12px; */
//   font-size: 26px;
// `;

const NavBar = () => {
  // mungkin anti-pattern nih
  // textInput must be declared here so the ref callback can refer to it
  let textInput = null;
  const [burger, setBurger] = React.useState(false);

  return (
    <Nav>
      <NavToggle onClick={() => setBurger(!burger)}>
        <Ntah>Burger</Ntah>
      </NavToggle>
      <Logo>Logo</Logo>
      <Ul active={burger}>
        <Li>
          <Link to="/">
            <h3>TokoFlix</h3>
          </Link>
        </Li>
        <Li>
          <Link to="/search">
            <SearchInput
              type="text"
              placeholder="cari film"
              name="search"
              ref={input => {
                textInput = input;
              }}
            />
            <img src="" alt="search" onClick={() => console.log("clicked")} />
          </Link>
        </Li>
        <Li>
          <h5>Saldo: </h5>
        </Li>
        <Li>
          <Link to="/filmku">Filmku</Link>
        </Li>
      </Ul>
    </Nav>
  );
};

export default NavBar;
