import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import m1 from "assets/3.jpg";
import m2 from "assets/4.jpg";
import m3 from "assets/5.jpg";
import m4 from "assets/6.jpg";

const Container = styled.div`
    height: 100vh;
    overflow: auto;
    display: grid;
    place-items: center;

    grid-template-columns: 1fr 1fr;
`;
const ImgBox = styled.div`
    position: relative;
    height: 700px;
    width: 700px;
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.img});
    border-radius: 20px;
`;
const Message = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20%;
    background-color: white;
    opacity: 0.9;
    border-radius: 20px;
`;
const Title = styled.div`
    margin: 35px auto;
    font-size: 50px;
    text-align: center;
`;
const FundingBtn = styled(Link)`
    font-size: 30px;
    position: absolute;
    right: 20px;
    bottom: 10px;
    text-decoration: none;
    color: dodgerblue;

    &:hover {
        color: blue;
    }
`;

const FundingPresenter = () => {
    return (
        <Container>
            <ImgBox img={m1}>
                <Message>
                    <Title>반프</Title>
                    <FundingBtn to="/funding/1">펀딩하기</FundingBtn>
                </Message>
            </ImgBox>
            <ImgBox img={m2}>
                <Message>
                    <Title>물결식당</Title>
                    <FundingBtn to="/funding/2">펀딩하기</FundingBtn>
                </Message>
            </ImgBox>
            <ImgBox img={m3}>
                <Message>
                    <Title>호호식당</Title>
                    <FundingBtn to="/funding/3">펀딩하기</FundingBtn>
                </Message>
            </ImgBox>
            <ImgBox img={m4}>
                <Message>
                    <Title>쇼타 돈부리</Title>
                    <FundingBtn to="/funding/4">펀딩하기</FundingBtn>
                </Message>
            </ImgBox>
        </Container>
    );
};

export default FundingPresenter;
