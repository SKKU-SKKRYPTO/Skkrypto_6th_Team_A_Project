import React from "react";
import HomePresenter from "./HomePresenter";
import styled from "styled-components";

const Container = styled.div`
    overflow: hidden;
`;
const HomeContainer = () => {
    return (
        <Container>
            <HomePresenter />
        </Container>
    );
};

export default HomeContainer;
