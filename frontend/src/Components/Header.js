import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "assets/logo.png";
import SignIn from "Components/SignIn";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    width: 100%;
    background: green;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
`;

const Title = styled.div`
    font-size: 40px;
    padding: 5px 0;
`;

const BtnBox = styled.div`
    display: flex;
    margin-right: 100px;
`;

const Button = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 0 50px;
    font-size: 25px;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    cursor: pointer;
    &:hover {
        color: #ffeb3b;
    }
`;

const Img = styled.img`
    height: 60px;
`;

const LogoBox = styled.div`
    margin-left: 100px;
    display: flex;
`;

const Header = () => {
    return (
        <Container>
            <LogoBox>
                <Img src={Logo} alt={"logo"}></Img>
                <Title>성대한 할인</Title>
            </LogoBox>
            <BtnBox>
                <Button to="/">Home</Button>
                <Button to="/funding">할인 펀딩</Button>
                <SignIn></SignIn>
                <Button to="/apply">펀딩 신청</Button>
            </BtnBox>
        </Container>
    );
};

export default Header;
