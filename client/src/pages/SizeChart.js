import React from "react";
import styled from "styled-components";

export const SizeChart = () => {
  return (
    <Wrapper>
      <Head>Size Chart</Head>
      <Table>
        <TR>
          <TH>Size</TH>
          <TH>Bust</TH>
          <TH>Waist</TH>
          <TH>Hip</TH>
        </TR>
        <TR>
          <TD>Small</TD>
          <TD>32"</TD>
          <TD>25"</TD>
          <TD>33"</TD>
        </TR>
        <TR>
          <TD>Medium</TD>
          <TD>35"</TD>
          <TD>28"</TD>
          <TD>36"</TD>
        </TR>
        <TR>
          <TD>Large</TD>
          <TD>38"</TD>
          <TD>31"</TD>
          <TD>39"</TD>
        </TR>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 80%;
  min-height: 90vh;
  text-align: center;
  margin-top: 30px;
  margin: auto;
`;

const Head = styled.div`
  padding: 20px;
`;

const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

const TD = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const TR = styled.tr`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;
const TH = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export default SizeChart;
