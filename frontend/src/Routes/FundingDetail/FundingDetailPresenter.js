import React from "react";
import styled from "styled-components";
import m1 from "assets/6.jpg";
import Logo from "assets/logo.png";
import "antd/dist/antd.css";
import { Modal } from "antd";

const Container = styled.div`
    width: 80%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 150px 500px;
    justify-items: center;
    align-items: center;
`;

const Button1 = styled.button`
    font-size: 40px;
    height: 70px;
    width: 300px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: green;
    cursor: pointer;
    border-radius: 10px;
    &:hover {
        transform: scale(0.95);
    }
    outline: none;
    z-index: 1;
`;

const Button2 = styled.button`
    font-size: 40px;
    height: 70px;
    width: 300px;
    position: absolute;
    left: 350px;
    bottom: 0;
    background-color: green;
    cursor: pointer;
    border-radius: 10px;
    &:hover {
        transform: scale(0.95);
    }
    outline: none;
    z-index: 1;
`;

const Img = styled.div`
    height: 100%;
    width: 80%;
    margin-right: 0px;
    background-image: url(${m1});
    background-repeat: no-repeat;
    background-size: cover;
`;

const Title = styled.div`
    position: absolute;
    top: 0;
    font-size: 50px;
`;

const Comment = styled.div`
    margin-top: 150px;
    width: 100%;
    height: 100%;
    position: relative;
`;

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Owner = styled.div`
    position: absolute;
    font-size: 48px;
    color: #047337;
    top: 20px;
    left: 150px;
`;
const Detail = styled.div`
    font-size: 24px;
    position: absolute;
    top: 100px;
    left: 150px;
`;

const Corona = styled.div`
    position: absolute;
    top: 400px;
    left: 150px;
    color: #000000;
    font-size: 14px;
`;

const Box1 = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Box2 = styled.div`
    background-color: rgba(178, 178, 178, 0.42);
    width: 50%;
    height: 30%;
    margin: 23px 47px 23px 26px;
    padding: 8px 127px 8px 16px;
    font-size: 24px;
    border: solid 1px #000000;
`;
const Progress = styled.div`
    width: 328.7px;
    height: 6px;
    background-color: #ef1111;
`;

const Progress2 = styled.div`
    position: absolute;
    top: 150px;
    width: 414px;
    height: 6px;
    background-color: #c4c4c4;
    margin-bottom: 29px;
`;

const Input = styled.input`
    width: 100%;
`;

const FundingDetailPresenter = ({
    fundingvisible,
    privkey,
    handleFunding,
    handleCancel,
    Cancel,
    handleOk,
    handleKey,
    handleCancelInsideCancel,
    cancelVisible,
    fundingCancelOk,
}) => {
    return (
        <Container>
            <Img></Img>
            <Box1>
                <Title>
                    <img
                        src={Logo}
                        style={{ width: "99px", height: "98px" }}
                    ></img>
                    쇼타 돈부리_명륜캠
                </Title>

                <Progress2>
                    <Progress></Progress>
                    <div
                        style={{
                            fontSize: "18px",
                            margin: "10px 0",
                        }}
                    >
                        65% 달성
                    </div>
                </Progress2>
                <Button1 onClick={handleFunding}>펀딩하기</Button1>
                <Button2 onClick={handleCancel}>환불받기</Button2>
            </Box1>
            <Comment>
                <Owner>주인장의 말</Owner>
                <Detail>
                    안녕하세요. 성균관대학교 학생 여러분! 쇼타돈부리 사장
                    000입니다.
                    <br></br>
                    ‘성대한 할인’을 통해 12월 5일 ~ 12월 9일 동안 할인된 가격에
                    음식을 판매합니다. <br></br>
                    <br></br>
                    가츠동 6500 -> 한정판 20개<br></br>
                    4000원 치즈 가츠동 7000 -> 한정판 20개 5500원 <br></br>
                    <br></br>
                    많은 관심 부탁드립니다!!
                </Detail>
                <Corona>
                    성대한 할인에 참여하는 모든 음식점들은 코로나19 방역 수칙을
                    철저하게 준수하고 <br></br>
                    주기적으로 소독을 실시하며 위생을 우선으로 할 것을
                    약속합니다.{" "}
                </Corona>
            </Comment>
            <Info>
                <Box2>
                    가츠동 4000원 펀딩! <br></br>
                    <br></br>쿠폰 발송 시작일 <br></br>
                    2020년 12월 10일 이후<br></br>
                    <br></br>
                    제한수량 20개 <br></br>현재 15개 완료!
                </Box2>
                <Box2>
                    치즈가츠동 5500원 펀딩!<br></br>
                    <br></br> 쿠폰 발송 시작일 <br></br>2020년 12월 10일 이후
                    <br></br>
                    <br></br>제한수량 20개 <br></br>현재 12개 완료!
                </Box2>
            </Info>
            <Modal
                title="개인키를 입력해주세요"
                visible={fundingvisible}
                onOk={handleOk}
                onCancel={Cancel}
            >
                <Input
                    type="password"
                    placeholder="개인키 입력"
                    value={privkey}
                    onChange={handleKey}
                ></Input>
            </Modal>
            <Modal
                title="환불 받을 개인키를 입력해주세요"
                visible={cancelVisible}
                onOk={fundingCancelOk}
                onCancel={handleCancelInsideCancel}
            >
                <Input
                    type="password"
                    placeholder="개인키 입력"
                    value={privkey}
                    onChange={handleKey}
                ></Input>
            </Modal>
        </Container>
    );
};

export default FundingDetailPresenter;
