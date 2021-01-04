import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const FindItemById = () => {
  const history = useHistory();
  const [itemId, setItemId] = useState();

  const handleChange = (val) => {
    setItemId(val);
  };

  console.log(itemId);
  return (
    <Wrapper>
      <Label htmlFor="search">Item Id: </Label>
      <Input
        name="search"
        type="text"
        onChange={(ev) => handleChange(ev.target.value)}
      />
      <Submit
        onClick={() => {
          history.push(`/admin/updateremove/${itemId}`);
        }}
      >
        Search
      </Submit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 90vh;
  text-align: center;
  margin: auto;
  margin-top: 30px;
`;

const Submit = styled.button``;
const Label = styled.label``;
const Input = styled.input``;

export default FindItemById;
