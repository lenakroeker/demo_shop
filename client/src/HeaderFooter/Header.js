import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../Logo";
import { useSelector } from "react-redux";

export const Header = () => {
  const history = useHistory();
  const [BrandDropOpen, setBrandDropOpen] = useState(false);
  const viewState = useSelector((state) => state.viewState);
  const { cartItemTotal } = viewState;

  //dropdown menus

  const BrandDropHandle = () => {
    setCatDropOpen(false);
    setBrandDropOpen(!BrandDropOpen);
  };
  const [CatDropOpen, setCatDropOpen] = useState(false);
  const CatDropHandle = () => {
    setBrandDropOpen(false);
    setCatDropOpen(!CatDropOpen);
  };

  // off-click close dropdowns

  window.onclick = (e) => {
    if (!e.target.matches(".drop")) {
      setBrandDropOpen(false);
      setCatDropOpen(false);
    }
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
          <DropBtn onClick={() => BrandDropHandle()} className="drop">
            Shop By Brand
          </DropBtn>

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
          <DropBtn onClick={() => CatDropHandle()} className="drop">
            Shop By Category
          </DropBtn>

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
        <NavC to="/outlet">Outlet</NavC>
      </Navigation>

      <CartWrapper>
        <CartNum exact to="/cart">
          {cartItemTotal !== 0 && cartItemTotal}
        </CartNum>
        <CartLink exact to="/cart">
          <FaShoppingCart size={30} color="white" />
        </CartLink>
      </CartWrapper>
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
    color: lightpink;
  }
`;

const NavC = styled(NavLink)`
  color: lightpink;
  position: relative;
  display: inline-block;
  &:hover {
    color: crimson;
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

const CartLink = styled(NavLink)``;
const CartNum = styled(NavLink)`
  color: white;
  margin-right: -29px;
  margin-top: -6px;
  font-size: 12px;
  font-weight: bolder;
`;

const CartWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 20px;
  right: 30px;
`;

//dropdown stuff

const NavDrop = styled.div`
  color: white;
`;
const DropBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  margin: 0px -2px;
  font-size: 15px;
  padding: 5px 8px;
  &:hover {
    color: lightpink;
  }

  &:active {
    background: lightpink;
  }
`;

const DropdownContent = styled.ul`
  margin-top: 16px;
  position: absolute;
  box-sizing: border-box;
  text-align: center;
  color: black;
  left: 0;
  opacity: 0.9;
  background: lightpink;
  width: calc(100vw - (100vw - 100%));
  padding: 0 10vw;
  z-index: 2;
`;

const DropItem = styled(NavLink)`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  width: calc(70vw / 9);
  color: black;
  padding: 10px 10px;
  margin: 5px 0;
  &:hover {
    background: black;
    color: white;
  }
`;

export default Header;
