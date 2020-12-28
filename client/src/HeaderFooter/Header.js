import React from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../Logo";

export const Header = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <LogoDiv onClick={() => history.push("/")}>
        <Logo />
      </LogoDiv>
      <Navigation>
        <Nav to="/">Home</Nav>
        <Nav to="/new">New Arrivals</Nav>
      </Navigation>
      <CartDiv
        onClick={() => {
          history.push("/cart");
        }}
      >
        <FaShoppingCart size={30} color="white" />
      </CartDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: black;
  width: 100%;
  height: 10vh;
  display: flex;
  padding: 20px;
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Navigation = styled.div`
  margin-left: 140px;
`;

const Nav = styled(NavLink)`
  margin-left: 40px;
`;

const LogoDiv = styled.div`
  width: 200px;
  text-align: center;
  top: 15px;
  left: 10px;
  position: absolute;
  color: lavender;
  cursor: pointer;
`;

const CartDiv = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
`;

export default Header;
