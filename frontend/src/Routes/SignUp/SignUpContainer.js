import React, { useState } from "react";
import SignUpPresenter from "./SignUpPresenter";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { cav } from "Caver/caver";
import { signatureData } from "caver-js/packages/caver-wallet/src/keyring/keyringFactory";
import "antd/dist/antd.css";
import { Modal } from "antd";
const Container = styled.div`
    display: flex;
`;

const Error = styled.div`
    color: red;
    opacity: 0.7;
`;

const Priv = styled.div`
    font-size: 25px;
    
`;

const SignUpContainer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setCofirm] = useState("");
    const [key, setKeyring] = useState(null);
    const [privKey, setPriv] = useState("");
    const [visible, setVisible] = useState(false);
    const history = useHistory();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const SignData = { name, email, password, key };
        try {
            const res = await axios.post("/sign-up", SignData);
            setVisible(true);
        } catch (e) {
            console.log(e);
            alert("회원가입 실패!");
        }
    };

    const getKeyring = async () => {
        const keyring = await cav.wallet.keyring.generate();
        setKeyring(keyring.address);
        setPriv(keyring.key.privateKey);
    };
    const doesPasswordMatch = () => {
        return password === confirm;
    };
    const renderFeedbackMessage = () => {
        if (confirm) {
            if (!doesPasswordMatch()) {
                return <Error>패스워드가 일치하지 않습니다.</Error>;
            }
        }
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPassword = (e) => {
        setCofirm(e.target.value);
    };

    const handleOk = () => {
        setVisible(false);
        history.push("/");
    };

    return (
        <Container>
            <SignUpPresenter
                name={name}
                email={email}
                password={password}
                cofirm={confirm}
                handleName={handleName}
                handleEmail={handleEmail}
                handlePassword={handlePassword}
                handleConfirmPassword={handleConfirmPassword}
                handleSubmit={handleSubmit}
                renderFeedbackMessage={renderFeedbackMessage}
                doesPasswordMatch={doesPasswordMatch}
                getKeyring={getKeyring}
            ></SignUpPresenter>
            <Modal title="저장 성공!" visible={visible} onOk={handleOk}>
                <Priv>귀하의 개인키는{privKey} 입니다.</Priv>
            </Modal>
        </Container>
    );
};

export default SignUpContainer;
