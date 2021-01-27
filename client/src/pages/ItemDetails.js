import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useParams, NavLink } from "react-router-dom";
import { addItem, updateQuantity } from "../actions";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export const ItemDetails = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartState); // Access the state from the cartReducer
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const productId = params.productId;

  useEffect(() => {
    fetch(`/product/by-product/${productId}`)
      .then((res) => res.json())
      .then((product) => {
        console.log("product" + product);
        setProduct(product.post);
      });
  }, [productId]);

  console.log(product);

  const {
    brand,
    name,
    image1URL,
    image2URL,
    image3URL,
    price,
    postId,
  } = product;

  const handleAddToCart = () => {
    return !cartState[postId]
      ? dispatch(addItem({ ...product, postId, quantity: quantity }))
      : dispatch(updateQuantity({ ...product, postId, quantity: +quantity }));
  };

  return brand ? (
    <Wrapper>
      <Item>
        <Title>{name}</Title>

        <Info>
          <Details>
            Stuff about item
            <Brand>By: {brand}</Brand>
          </Details>
          <Quantity>
            <Label for="quantity">Quantity</Label>
            <Input type="number" id="quantity" min="1" placeholder="1" />
          </Quantity>
          <Size>
            <Label for="size">Size</Label>
            <Select name="size" id="size">
              <Option value="xs">XS</Option>
              <Option value="s">S</Option>
              <Option value="m">M</Option>
              <Option value="l">L</Option>
              <Option value="xl">XL</Option>
            </Select>
            <NavSize to="/sizechart">Sizing Chart</NavSize>
          </Size>
          <AddDiv>
            <Button>Add To Cart</Button>
          </AddDiv>
        </Info>
        <Image>
          <AwesomeSlider fillParent="true">
            <div data-src={image1URL} />
            <div data-src={image2URL} />
            <div data-src={image3URL} />
          </AwesomeSlider>
        </Image>
      </Item>
    </Wrapper>
  ) : (
    <Wrapper>Error</Wrapper>
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
    "size"
    "button";

  @media (max-width: 768px) {
    margin-top: 30px;
    grid-template-rows: 50px 50px 200px;
  }
`;

const Brand = styled.p``;

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

const Size = styled.div`
  grid-area: size;
`;

const NavSize = styled(NavLink)`
  cursor: pointer;
  color: grey;
  display: block;
`;

const Select = styled.select`
  width: 100px;
  height: 2em;
`;

const Option = styled.option``;

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
