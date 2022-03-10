import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html, body {
        height:100vh;
        width: 100%;
        overflow: auto; 
        margin: 0; 
        padding: 0;   
        font-family: "Jua", sans-serif;
    }
    body {
        padding-top: 100px;
        
    }
`;

export default GlobalStyle;
