import React from "react";
import styled from "styled-components";

import { Link } from "gatsby";

// import SearchIcon from "../../assets/search-icon.svg";

const Ul = styled.ul`
  /* position: fixed; */
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
`;

const Li = styled.li`
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
`;

const SearchInput = styled.input`
  /* padding: 12px; */
  font-size: 26px;
`;

const NavBar = ({ saldo, dispatch }) => {
  // mungkin anti-pattern nih
  // textInput must be declared here so the ref callback can refer to it
  let textInput = null;

  return (
    <Ul>
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
  );
};

export default NavBar;
