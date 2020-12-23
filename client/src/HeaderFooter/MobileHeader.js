import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

export const MobileHeader = () => {
  const [dropOpen, setDropOpen] = useState(false);

  const handleDrop = () => {
    setDropOpen(!dropOpen);
  };

  return (
    <Wrapper>
      <Button onClick={() => handleDrop()}>
        <HiMenu size={30} />
      </Button>
      {dropOpen && (
        <DropContent onClick={() => handleDrop()}>
          <Nav to="/">Home</Nav>
          <Nav to="/new">New Arrivals</Nav>
        </DropContent>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: lavenderblush;
  width: 100%;
  height: 10vh;
  display: flex;
  padding: 20px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Button = styled.button``;

const DropContent = styled.div`
  position: fixed;
  z-index: 3;
  background: khaki;
  top: 10vh;
`;

const Nav = styled(NavLink)`
  display: block;
  padding: 10px;
`;

export default MobileHeader;
