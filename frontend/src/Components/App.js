import React from "react";
import Router from "./Router";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const Container = styled.div``;

function App() {
    return (
        <Container>
            <GlobalStyle />
            <Router />
        </Container>
    );
}

export default App;
