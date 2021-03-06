import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset-advanced";

const GlobalStyle = createGlobalStyle`
${reset}

html, body {
    overflow-y: auto;
    box-sizing: border-box;
    font-family:Arial, Helvetica, sans-serif;
    background: whitesmoke;
    color: black;
}

button {
    cursor: pointer;
    background: lightseagreen;
    padding: 10px;
}

`;

export default GlobalStyle;
