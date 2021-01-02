import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../Logo";

export const MobileHeader = () => {
  const history = useHistory();
  const [dropOpen, setDropOpen] = useState(false);

  const handleDrop = () => {
    setDropOpen(!dropOpen);
  };

  return (
    <Wrapper>
      <Header>
        <Button onClick={() => handleDrop()}>
          <HiMenu size={30} color="white" />
        </Button>
        <LogoDiv>
          <Logo />
        </LogoDiv>
        <CartDiv
          onClick={() => {
            history.push("/cart");
          }}
        >
          <FaShoppingCart size={30} color="white" />
        </CartDiv>
      </Header>
      <DropContent
        onClick={() => handleDrop()}
        style={dropOpen ? { width: "40vw" } : { width: "0px" }}
      >
        <Close onClick={() => handleDrop()}>
          <AiOutlineCloseCircle size={30} color="white" />
        </Close>
        <Nav to="/">Home</Nav>
        <Nav to="/new">NewArrivals</Nav>
        <Nav to="/mbrands">Shop By Brand</Nav>
        <Nav to="/mcategories">Shop By Category</Nav>
      </DropContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: black;
  width: 100%;
  height: 10vh;
  display: flex;
  padding: 20px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = styled.div`
  background: black;
  width: 100%;
  height: 10vh;
  display: flex;
  padding: 20px;
  top: 0;
  left: 0;
  display: none;
  position: fixed;
  z-index: 2;
  @media (max-width: 768px) {
    display: block;
  }
`;

const LogoDiv = styled.div`
  width: 200px;
  text-align: center;
  top: 15px;
  left: calc(50vw - 100px);
  position: fixed;
  color: lavender;
`;

const Button = styled.button`
  z-index: 1;
  position: fixed;
`;

const DropContent = styled.div`
  height: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;

const Nav = styled(NavLink)`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 15px;
  color: #818181;
  display: block;
  transition: 0.3s;
`;

const Close = styled.button`
  border-radius: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const CartDiv = styled.div`
  position: fixed;
  top: 20px;
  right: 30px;
  cursor: pointer;
`;

export default MobileHeader;
