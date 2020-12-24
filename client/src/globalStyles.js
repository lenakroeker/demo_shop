import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset-advanced";

const GlobalStyle = createGlobalStyle`
${reset}

html, body {
    overflow-y: auto;
    box-sizing: border-box;
    font-family:Arial, Helvetica, sans-serif;
    background: rgb(63, 58, 79);
    color: white;
}

`;

export default GlobalStyle;
