import React from "react";
import styled from "styled-components";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <Wrapper>
      <FootBox>address</FootBox>
      <FootBox>info 1</FootBox>
      <FootBox>info 2</FootBox>
      <FootBoxS>
        {" "}
        <SocialIcon>
          <AiFillTwitterCircle size={30} />
        </SocialIcon>
        <SocialIcon>
          <AiFillFacebook size={30} />
        </SocialIcon>
        <SocialIcon>
          <AiFillInstagram size={30} />
        </SocialIcon>
      </FootBoxS>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
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

const SocialIcon = styled.div`
  display: inline;
  cursor: pointer;
  padding: 0 10px;
  &:hover {
    color: lightpink;
  }
`;

export default Footer;
