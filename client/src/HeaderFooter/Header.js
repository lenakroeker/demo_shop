import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Wrapper>
      <Nav to="/">Home</Nav>
      <Nav to="/new">New Arrivals</Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: lavenderblush;
  width: 100%;
  height: 10vh;
  display: flex;
  padding: 20px;
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled(NavLink)`
  margin-left: 40px;
`;

export default Header;
