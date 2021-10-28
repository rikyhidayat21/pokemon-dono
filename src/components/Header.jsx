import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import mylist from "../images/mylist.png";

const Navbar = styled.nav`
  width: 100%;
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;
  background-color: #fff;
  padding: 0.5rem;
  top: 0;
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 300px;
`;

export default function Header() {
  return (
    <div>
      <Navbar>
        <Link to="/">
          <img src={logo} alt="pokemon" width={150} height={50} />
        </Link>
        <Link to="/mypokemons">
          <img src={mylist} alt="pokemon" width={50} height={50} />
        </Link>
      </Navbar>
    </div>
  );
}
