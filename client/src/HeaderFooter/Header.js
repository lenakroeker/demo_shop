import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../Logo";

export const Header = () => {
  const history = useHistory();
  const [BrandDropOpen, setBrandDropOpen] = useState(false);
  const BrandDropHandle = () => {
    setCatDropOpen(false);
    setBrandDropOpen(!BrandDropOpen);
  };
  const [CatDropOpen, setCatDropOpen] = useState(false);
  const CatDropHandle = () => {
    setBrandDropOpen(false);
    setCatDropOpen(!CatDropOpen);
  };
  return (
    <Wrapper>
      <LogoDiv onClick={() => history.push("/")}>
        <Logo />
      </LogoDiv>
      <Navigation>
        <Nav to="/">Home</Nav>
        <Nav to="/new">New Arrivals</Nav>
        <NavDrop>
          <DropBtn onClick={() => BrandDropHandle()}>Shop By Brand</DropBtn>

          {BrandDropOpen && (
            <DropdownContent onClick={() => BrandDropHandle()}>
              <DropItem exact to="/bodylocation/wrist">
                Brand 1
              </DropItem>
              <DropItem exact to="/bodylocation/arms">
                Brand 2
              </DropItem>
              <DropItem exact to="/bodylocation/head">
                Brand 3
              </DropItem>
            </DropdownContent>
          )}
        </NavDrop>
        <NavDrop>
          <DropBtn onClick={() => CatDropHandle()}>Shop By Category</DropBtn>

          {CatDropOpen && (
            <DropdownContent onClick={() => CatDropHandle()}>
              <DropItem exact to="/bodylocation/wrist">
                Shoes
              </DropItem>
              <DropItem exact to="/bodylocation/arms">
                Men
              </DropItem>
              <DropItem exact to="/bodylocation/head">
                Women
              </DropItem>
            </DropdownContent>
          )}
        </NavDrop>
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
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 140px;
`;

const Nav = styled(NavLink)`
  color: white;
  position: relative;
  display: inline-block;
  &:hover {
    color: blue;
  }
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

//dropdown stuff

const NavDrop = styled.div``;
const DropBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  margin: 0px -2px;
  font-size: 15px;
  padding: 5px 8px;

  &:active {
    background: blue;
  }
`;

const DropdownContent = styled.ul`
  margin-top: 18px;
  position: absolute;
  box-sizing: border-box;
  text-align: center;
  left: 0;
  opacity: 0.9;
  background: rgb(245, 35, 156, 0.8);
  width: calc(100vw - (100vw - 100%));
  padding: 0 10vw;
`;

const DropItem = styled(NavLink)`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  width: calc(70vw / 9);
  color: white;
  padding: 10px 10px;
  margin: 5px 0;
  &:hover {
    background: blue;
  }
`;

export default Header;
