import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const Cart = () => {
  const history = useHistory();

  const subtotal = 10.0;

  return (
    <Wrapper>
      <CartDiv>
        <CartItem>
          <ItemImg
            onClick={() => history.push("/detailstest")}
            height="80px"
            width="80px"
            src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/drmar/drmar300951071b/drmar300951071b_q1_2-0._SX664_QL90_.jpg"
          />
          <Name onClick={() => history.push("/detailstest")}>Item Name</Name>
          <Price>$10.00</Price>
          <Quantity>
            <Label for="quantity">Quantity</Label>
            <Input type="number" id="quantity" />
            <Update>update</Update>
          </Quantity>
          <Remove>Remove</Remove>
        </CartItem>
        <CartItem>
          <ItemImg
            onClick={() => history.push("/detailstest")}
            height="80px"
            width="80px"
            src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/drmar/drmar300951071b/drmar300951071b_q1_2-0._SX664_QL90_.jpg"
          />
          <Name onClick={() => history.push("/detailstest")}>Item Name</Name>
          <Price>$10.00</Price>
          <Quantity>
            <Label for="quantity">Quantity</Label>
            <Input type="number" id="quantity" />
            <Update>update</Update>
          </Quantity>
          <Remove>Remove</Remove>
        </CartItem>
      </CartDiv>
      <TotalDiv>
        <Subtotal>Subtotal: {subtotal}</Subtotal>
        <Subtotal>Taxes: +{subtotal * 0.15}</Subtotal>
        <Subtotal>Discount: - {subtotal * 0.2}</Subtotal>
        <Total>Total: {subtotal + subtotal * 0.15 - subtotal * 0.2}</Total>
        <Buy>Place Order</Buy>
      </TotalDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 90vh;
`;

const CartDiv = styled.div`
  border: 1px solid lavender;
  width: 80%;
  margin: 30px auto 0 auto;
  min-height: 40px;
`;

const CartItem = styled.div`
  height: 100px;
  border: 1px solid purple;
  padding: 10px;
  display: flex;
`;
const ItemImg = styled.img`
  object-fit: cover;
  cursor: pointer;
`;

const Name = styled.p`
  color: darkgray;
  margin-left: 30px;
  cursor: pointer;
`;

const Price = styled.p`
  color: white;
  margin-left: 30px;
`;

const Quantity = styled.div`
  margin-left: 40px;
`;

const Input = styled.input`
  width: 40px;
  height: 2em;
`;

const Label = styled.label`
  margin-right: 20px;
`;

const Update = styled.button`
  background: purple;
  margin-left: 40px;
  cursor: pointer;
`;

const Remove = styled.button`
  background: purple;
  margin-left: 40px;
  cursor: pointer;
`;
const TotalDiv = styled.div`
  width: 30%;
  margin-left: 60%;
  min-height: 50px;
  background: lavender;
  color: black;
`;

const Total = styled.div`
  font-weight: bold;
`;

const Subtotal = styled.p`
  color: black;
`;

const Buy = styled.button`
  background: lime;
  cursor: pointer;
  padding: 10px;
`;

export default Cart;
