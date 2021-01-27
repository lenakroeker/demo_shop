import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { addItem } from ".././actions";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartState); // Access the state from the cartReducer
  const { name, price, sizeL, image1URL, postId, companyName } = item; // Destructured item to have direct access to variables
  let history = useHistory();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addItem({ ...item, postId, quantity: 1 }));
  };

  return (
    <Wrapper onClick={() => history.push(`/product/${postId}`)}>
      <ProductImg src={image1URL} width="100%" />
      <Info>
        <Name>{name}</Name>
        <CompanyName>{companyName}</CompanyName>
        <Price>${price}</Price>
        {sizeL > 0 ? (
          // Added button styling inside the component instead of creating a separate component, for simplicity
          <Button className="addToCart" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        ) : (
          <OutOfStock>Out of Stock</OutOfStock>
        )}
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 30px;

  background: white;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;

const ProductImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: 0.5s ease;

  ${Wrapper}:hover & {
    width: 214px;
    height: 214px;
    margin: -7px 0 0 -7px;
    box-shadow: -1px -1px 18px 0px rgba(50, 50, 50, 0.21);
  }
`;

const Name = styled.p`
  font-weight: bold;
  line-height: 1.2em;
  color: black;
  padding: 30px 30px 5px 30px;
`;

const CompanyName = styled.p`
  font-size: 18;
  color: black;
  font-weight: bold;
  margin: auto;
  margin-bottom: 10px;
  width: 100px;
  padding: 5px;
  opacity: 0.6;
  background: black;
  border-radius: 10px;
`;

const Price = styled.p`
  color: black;
`;

const Info = styled.div`
  position: relative;
  top: -237px;
  bottom: 0;
  left: -8px;
  right: 0;
  height: calc(100% + 35px);
  width: calc(100% + 35px);
  border-radius: 10px;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgb(245, 244, 242, 0.7);

  &:hover {
    opacity: 100%;
  }
`;

const OutOfStock = styled.div`
  position: absolute;
  bottom: 40px;
  margin-top: 10px;
  left: 72px;
  color: darkred;
  border: 10px;
  margin-top: 10px;
  font-weight: bold;
`;

const Button = styled.button`
  position: absolute;
  bottom: 20px;
  margin-top: 10px;
  left: 67px;
`;

export default Item;
