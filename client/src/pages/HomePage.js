import React from "react";
import styled, { keyframes } from "styled-components";
import New from "../assets/new.jpg";
import Eco from "../assets/eco.jpg";
import Sale from "../assets/sale.jpg";
import Sandal from "../assets/sandal.png";
import Sustain from "../assets/sustain.jpg";
import Lookbook from "../assets/lookbook.jpg";

import { useHistory } from "react-router-dom";

export const HomePage = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <AutoSlider>
        <SliderContent>
          <SliderBox>
            <Slider
              onClick={() => {
                history.push("/new");
              }}
            >
              <PicArea>
                <Image src={New} width="100%" />
              </PicArea>
              <Info>
                <Company>Whats New</Company>
              </Info>
            </Slider>
          </SliderBox>
          <SliderBox>
            <Slider
              onClick={() => {
                history.push("/new");
              }}
            >
              <PicArea>
                <Image src={Eco} width="100%" />
              </PicArea>
              <Info>
                <Company>Shop the Eco Collection</Company>
              </Info>
            </Slider>
          </SliderBox>
          <SliderBox>
            <Slider
              onClick={() => {
                history.push("/new");
              }}
            >
              <PicArea>
                <Image src={Sale} width="100%" />
              </PicArea>
              <Info>
                <Company>Outlet</Company>
              </Info>
            </Slider>
          </SliderBox>
        </SliderContent>
      </AutoSlider>
      <InfoDiv>
        <InfoBox>
          <Overlay>2021 Shoes</Overlay>
          <InfoImg src={Sandal} width="400px" />
        </InfoBox>
        <InfoBox>
          <Overlay>Lookbook</Overlay>
          <InfoImg src={Lookbook} width="400px" />
        </InfoBox>
      </InfoDiv>
      <NewsLetter>
        <NLTitle>Sign Up for our Newsletter</NLTitle>
        <Input type="email" placeholder="you@example.com" />
      </NewsLetter>
      <Mission>
        <MissionImg src={Sustain} height="400px" />
      </Mission>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 90vh;
  text-align: center;
  margin-top: 0px;
`;

const AutoSlider = styled.div`
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 520px;
  box-shadow: -2px 4px 15px 0px rgba(255, 255, 255, 0.3);
  background-color: white;
  overflow: hidden;
`;

const Slide = keyframes`
	  10%{
			transform:translateX(0);
		  }
		15%,40%{
			transform:translateX(-99%);
		  }
		45%, 70%{
			transform:translateX(-198%);
		  }
	75%,100%{
			transform:translateX(0);
		  }
`;

const SliderContent = styled.ul`
  margin: 0;
  margin-left: -20px;
  box-sizing: border-box;
  list-style: none;
  display: flex;
  animation: 28s ${Slide} ease-in-out infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const SliderBox = styled.li`
  box-sizing: border-box;
  width: 1200px;
  height: 500px;
  display: block;
  margin: 10px 80px 0px 0px;
  font-size: 18px;
`;

const Slider = styled.div`
  margin: 0;
  margin-top: -50px;

  box-sizing: border-box;
  height: 530px;
  width: 1200px;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-areas: "pic info";
`;

const PicArea = styled.div`
  grid-area: pic;
`;

const Info = styled.div`
  grid-area: info;
  margin: 0;

  background: transparent;

  padding: 100px 30px 20px 20px;
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoBox = styled.div`
  width: 400px;
  height: 400px;
  background: aliceblue;
  margin: 30px;
  text-align: center;
  cursor: pointer;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100vw;
`;

const Overlay = styled.p`
  position: absolute;
  margin: 100px;
  width: 200px;
  height: 200px;
  font-size: 60px;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
`;

const InfoImg = styled.img`
  object-fit: cover;
`;

const Company = styled.h3`
  font-size: 55px;
  color: black;
  opacity: 0.8;
  margin-bottom: 30px;
  cursor: pointer;
`;

const NewsLetter = styled.div`
  height: 200px;
  width: 70vw;
  padding: 20px;
  margin: auto;
  background: aliceblue;
  text-align: center;
  margin-bottom: 40px;
`;

const Input = styled.input`
  margin-top: 30px;
  border-radius: 5px;
  padding: 20px;
  width: 50vw;
  height: 20px;
  border: lightpink;
`;

const NLTitle = styled.p``;

const Mission = styled.div`
  width: 60vw;
  margin: 30px auto;
  height: 400px;
  background: lightpink;
  text-align: left;
`;

const MissionImg = styled.img``;

export default HomePage;
