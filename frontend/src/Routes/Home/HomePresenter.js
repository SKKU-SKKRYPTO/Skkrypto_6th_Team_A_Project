import React from "react";
import styled from "styled-components";
import BackGround from "assets/background.png";
import m1 from "assets/1.jpg";
import m2 from "assets/2.jpg";
import m3 from "assets/3.jpg";
import m4 from "assets/4.jpg";
import m5 from "assets/5.jpg";
import m6 from "assets/6.jpg";
import m7 from "assets/7.jpg";

const Container = styled.div`
    position: relative;
    background-image: url(${BackGround});
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Title = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 70px;
    z-index: 0;
    top: 20px;
    padding: 20px 0;
`;

const Box = styled.div`
    position: absolute;
    bottom: 0;
    background-color: rgba(226, 226, 226, 0.5);
    height: 60%;
    width: 100%;
`;
const ImgBox = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    position: absolute;
    bottom: 0;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const Img = styled.div`
    position: relative;
    flex: 0 0 auto;
    height: 70%;
    width: 30%;
    margin: 0 40px;
    border-radius: 10px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
`;
const Info = styled.div`
    position: absolute;
    height: 30%;
    width: 100%;
    bottom: 0;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    text-align: left;
    padding-left: 15px;
    font-size: 50px;
    display: flex;
    flex-direction: column;
`;

const Comment = styled.div`
    font-size: 20px;
`;

const Dday = styled.div`
    position: absolute;
    right: 10px;
    top: 0;
`;

const Progress = styled.div`
    width: ${(props) => `${props.per}%`};
    height: 6px;
    background-color: #ef1111;
`;

const Progress2 = styled.div`
    width: 90%;
    height: 6px;
    background-color: gray;
`;

const Percent = styled.div`
    height: 10%;
    font-size: 25px;
`;

const HomePresenter = () => {
    return (
        <Container>
            <Box>
                <Title>할인 펀딩 목록</Title>
                <ImgBox>
                    <Img img={m7}>
                        <Info>
                            알촌_율전캠<Dday>D-1</Dday>
                            <Comment>
                                한정판 알촌 메뉴를 저렴한 가격에 만날 수 있는
                                기회!
                            </Comment>
                            <Progress2>
                                <Percent>30%</Percent>
                                <Progress per="30"></Progress>
                            </Progress2>
                        </Info>
                    </Img>
                    <Img img={m2}>
                        <Info>
                            품_명륜캠
                            <Dday>D-5</Dday>
                            <Comment>
                                저렴한 가격에 다양한 음식을 맛 보세요!
                            </Comment>
                            <Progress2>
                                <Percent>50%</Percent>
                                <Progress per="50"></Progress>
                            </Progress2>
                        </Info>
                    </Img>
                    <Img img={m6}>
                        <Info>
                            쇼타 돈부리_명륜캠
                            <Dday>D-7</Dday>
                            <Comment>
                                선착순! 4000원에 가츠동을 만나보세요!
                            </Comment>
                            <Progress2>
                                <Percent>70%</Percent>
                                <Progress per="70"></Progress>
                            </Progress2>
                        </Info>
                    </Img>
                    <Img img={m4}>
                        <Info>
                            물결식당_명륜캠
                            <Dday>D-2</Dday>
                            <Comment>귀여운 강아지가 있는 가게!</Comment>
                            <Progress2>
                                <Progress per="10"></Progress>
                            </Progress2>
                            <Percent>10%</Percent>
                        </Info>
                    </Img>
                    <Img img={m1}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m2}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m6}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m4}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m3}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m1}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m2}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m3}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m1}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m2}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m3}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m1}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m2}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m3}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m1}>
                        <Info>정돈</Info>
                    </Img>
                    <Img img={m2}>
                        <Info>정돈</Info>
                    </Img>
                </ImgBox>
            </Box>
        </Container>
    );
};
export default HomePresenter;
