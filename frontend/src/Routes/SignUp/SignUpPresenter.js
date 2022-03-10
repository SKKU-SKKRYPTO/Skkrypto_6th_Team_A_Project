import React from "react";
import styled from "styled-components";

const Container = styled.form`
    margin: 50px auto;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    margin-top: 20px;
`;

const Input = styled.input`
    font-size: 30px;
    margin-bottom: 20px;
    &:focus {
        border: none;
        outline: none;
        box-shadow: 0 0 3px 4px #004ba0;
    }
`;

const SecretInput = styled.input`
    font-size: 30px;

    &:focus {
        border: none;
        outline: none;
        box-shadow: 0 0 3px 4px #004ba0;
    }
`;

const Button = styled.button`
    margin-top: 20px;
`;

const Error = styled.div``;

const Confirm = styled.input`
    font-size: 30px;
    margin-bottom: 20px;

    outline-width: 2px;

    &:focus {
        border: none;
        outline: none;
        box-shadow: 0 0 3px 4px
            ${(props) => (!props.isOk ? "#e91e63" : "#004ba0")};
    }
`;

const SignUpPresenter = ({
    name,
    email,
    password,
    confirm,
    handleName,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
    handleSubmit,
    renderFeedbackMessage,
    doesPasswordMatch,
    getKeyring,
}) => {
    return (
        <Container onSubmit={handleSubmit}>
            <Title>이름</Title>
            <Input onChange={handleName} value={name}></Input>
            <Title>이메일</Title>
            <Input onChange={handleEmail} value={email}></Input>
            <Title>패스워드</Title>
            <Input
                type="password"
                onChange={handlePassword}
                value={password}
            ></Input>
            <Title>패스워드 확인</Title>
            <Confirm
                type="password"
                onChange={handleConfirmPassword}
                value={confirm}
                isOk={doesPasswordMatch()}
            ></Confirm>
            {renderFeedbackMessage()}

            <Button onClick={getKeyring}>SAVE</Button>
        </Container>
    );
};

export default SignUpPresenter;
