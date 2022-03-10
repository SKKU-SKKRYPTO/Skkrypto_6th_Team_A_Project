import React from "react";
import styled from "styled-components";
import Logo from "assets/logo.png";
import DateTimePicker from "react-datetime-picker";

const Container = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: auto;
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Title = styled.div`
    margin-top: 20px;
`;
const Input = styled.input`
    font-size: 30px;
    border-radius: 5px;
    border: 2px solid black;
`;

const TextArea = styled.textarea`
    font-size: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 2px solid black;
    width: 800px;
    height: 200px;
    resize: none;
`;

const Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Info = styled.div`
    padding: 50px 0;
    background-color: #bdbdbd;
    font-size: 25px;
    line-height: 100px;
`;

const Img = styled.img`
    height: 70px;
`;

const Button = styled.button`
    cursor: pointer;
    width: 200px;
    outline: none;
    margin: 20px auto;
    height: 50px;
    font-size: 20px;
    border: 1px solid darken(#e1332d, 4%);
    border-radius: 5px;
    font-weight: 900;
`;
const Notice1 = styled.div`
    margin-top: 70px;
    width: 50%;
    padding-left: 300px;
    font-size: 35px;
`;
const Notice2 = styled.div`
    font-size: 70px;
    margin-bottom: 20px;
`;
const ApplyPresenter = ({
    wallet,
    name,
    content,
    sale,
    startDate,
    money,
    quantity,
    handleWallet,
    handleName,
    handleContent,
    handleSale,
    handleForm,
    setStartDate,
    handleMoney,
    handleQuantity,
}) => {
    return (
        <>
            <Top>
                <Notice1>다시 활기를 되찾는 그 날까지.</Notice1>
                <Notice2>
                    <Img src={Logo}></Img>성대한 할인과 함께하세요!
                </Notice2>
                <Info>
                    '성대한 할인'은 코로나 19(COVID 19)라는 국가적 재난 상태로
                    인해 어려움을 겪는 대학가 소상공인 분들을 위해
                    기획되었습니다. <br></br>성균관대학교 학생들에게 합리저적인
                    혹은 파격적인 '할인'으로 맛있는 음식들을 소개해주세요!
                </Info>
            </Top>
            <Container>
                <Form onSubmit={handleForm}>
                    <Title>지갑 개인키</Title>
                    <Input
                        type="password"
                        onChange={handleWallet}
                        value={wallet}
                    ></Input>
                    <Title>가게명</Title>
                    <Input
                        type="text"
                        onChange={handleName}
                        value={name}
                    ></Input>
                    <Title>소개</Title>
                    <TextArea
                        onChange={handleContent}
                        value={content}
                    ></TextArea>
                    <Title>할인 품목</Title>
                    <Input
                        type="text"
                        onChange={handleSale}
                        value={sale}
                    ></Input>
                    <Title>개당 가격 (원)</Title>
                    <Input
                        type="number"
                        onChange={handleMoney}
                        value={money}
                    ></Input>
                    <Title>펀딩 수량</Title>
                    <Input
                        type="number"
                        onChange={handleQuantity}
                        value={quantity}
                    ></Input>
                    <Title>마감 날짜</Title>
                    <DateTimePicker
                        onChange={setStartDate}
                        value={startDate}
                        format="y-MM-dd HH시"
                    />
                    <Button>SAVE</Button>
                </Form>
            </Container>
        </>
    );
};

export default ApplyPresenter;
