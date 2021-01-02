import React from "react";
import styled from "styled-components";

export const AddItem = () => {
  return <Wrapper>Add Item</Wrapper>;
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 90vh;
  text-align: center;
  margin: auto;
  margin-top: 30px;
`;

export default AddItem;
