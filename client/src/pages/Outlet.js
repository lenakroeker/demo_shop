import React from "react";
import styled from "styled-components";

export const Outlet = () => {
  return <Wrapper>Outlet</Wrapper>;
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 90vh;
  text-align: center;
  margin-top: 30px;
`;

export default Outlet;
