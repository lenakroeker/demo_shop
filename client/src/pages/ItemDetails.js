import React from "react";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export const ItemDetails = () => {
  return (
    <Wrapper>
      <Item>
        <Title>Item Name</Title>
        <Info>
          <Details>Stuff about item</Details>
          <Quantity>
            <Label for="quantity">Quantity</Label>
            <Input type="number" id="quantity" />
          </Quantity>
          <AddDiv>
            <Button>Add To Cart</Button>
          </AddDiv>
        </Info>
        <Image>
          <AwesomeSlider fillParent="true">
            <div data-src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/drmar/drmar300951071b/drmar300951071b_q1_2-0._SX664_QL90_.jpg" />
            <div data-src="https://i.guim.co.uk/img/media/ac1c53dc8a3b549480149d041e9299097cb39955/0_302_1600_960/master/1600.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=72a96ac2a6a11b027782df30148181e9" />
            <div data-src="https://media.glamour.com/photos/5c786327c8f3282db5088766/1:1/w_1800,h_1800,c_limit/0301_drmarten_lede_social_River.jpg" />
          </AwesomeSlider>
        </Image>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  min-height: 90vh;
`;

const Item = styled.div`
  margin: 30px auto;
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 70px 400px;
  grid-template-areas:
    "title title"
    "pic info";

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 70px 200px 150px;
    grid-template-areas:
      "title"
      "pic"
      "info";
  }
`;

const Title = styled.div`
  grid-area: title;
  text-align: center;
  font-size: 25px;
`;

const Info = styled.div`
  grid-area: info;
  padding: 30px;
  display: grid;
  grid-template-rows: 50px 100px 60px;
  grid-template-areas:
    "details"
    "quantity"
    "button";

  @media (max-width: 768px) {
    margin-top: 30px;
    grid-template-rows: 50px 50px 200px;
  }
`;

const Details = styled.div`
  grid-area: details;
`;

const Quantity = styled.div`
  grid-area: quantity;
`;

const Input = styled.input`
  width: 40px;
  height: 2em;
`;

const Label = styled.label`
  margin-right: 20px;
`;

const AddDiv = styled.div`
  grid-area: button;
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid white;
  padding: 10px;
`;

const Image = styled.div`
  position: relative;
  grid-area: pic;
  z-index: 0;
`;

export default ItemDetails;
