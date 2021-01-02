import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Wrapper>
      <FootBox>address</FootBox>
      <FootBox>info 1</FootBox>
      <FootBox>info 2</FootBox>
      <FootBoxS>social</FootBoxS>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 20vh;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 100px 100px 100px 100px;
  }
`;

const FootBox = styled.div`
  background: black;
  padding: 20px;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const FootBoxS = styled.div`
  background: black;
  padding: 20px;
  text-align: center;
`;

export default Footer;
