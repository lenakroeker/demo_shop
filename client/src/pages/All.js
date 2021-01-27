import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Item from "../HeaderFooter/Item";

export const All = () => {
  let history = useHistory();
  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    fetch("/allProducts")
      .then((res) => res.json())
      .then((data) => {
        const productArr = Object.values(data.data);
        setAllProducts(productArr);
      });
  }, []);

  return (
    <Wrapper>
      {allProducts &&
        allProducts
          .sort((a, b) => (a.numInStock > b.numInStock ? -1 : 1)) // sorts by numInStock, highest to lowest
          .map((item) => <Item item={item} key={item.id} />)}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 90vh;
  text-align: center;
  margin-top: 30px;
`;

export default All;
