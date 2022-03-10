import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Container = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    z-index: 100;
`;

const Input = styled.input`
    margin-bottom: 10px;
    font-size: 20px;
`;
const customStyles = {
    overlay: {},
    content: {
        height: "300px",
        width: "500px",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "20px",
        overflow: "hidden",
    },
};

const Button = styled.button`
    outline: none;
    border: none;
    background: none;
    padding: 0 50px;
    font-size: 25px;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    cursor: pointer;
    &:hover {
        color: #ffeb3b;
    }
    font-family: "Jua", sans-serif;
`;

const SignUpbtn = styled(Link)`
    margin: 10px auto;
    text-decoration: none;
    color: black;

    &:hover {
        color: red;
    }
`;

Modal.setAppElement("#root");

const SignIn = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isLogin, setLogin] = useState(false);
    const history = useHistory();
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const goMypage = () => {
        history.push("/mypage");
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { email, password };
        try {
            const response = await axios.post("/login", userData); // 로그인 반응.
            const res= response.data;
            console.log(res);
            if (res.data.status===true) {
                alert("로그인 성공!");
                setLogin(true);
                history.push("/");
            } else {
                alert("로그인 실패!");
            }
        } catch (e) {
            alert("로그인 실패!");
            console.log(e);
        }

        closeModal();
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const logout=async(e)=>{
        e.preventDefault();
        const userData = { email, password };
        try {
            const res = await axios.post("/sign-out",userData); // 로그인 반응.
            setLogin(false);
            alert("로그 아웃!");
        } catch (e) {
            alert("로그아웃 에러!");
            console.log(e);
        }

    }

    return (
        <div>
            {!isLogin ? (
                <Button onClick={openModal}>로그인/회원가입</Button>
            ) : (
                //<Button onClick={goMypage}>Mypage</Button>
                <Button onClick={logout}>로그아웃</Button>
            )}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Container onSubmit={handleSubmit}>
                    <h2>로그인</h2>
                    <div>이메일</div>
                    <Input
                        type="text"
                        value={email}
                        onChange={handleEmail}
                    ></Input>
                    <div>패스워드</div>
                    <Input
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    ></Input>
                    <button>로그인</button>
                    <button onClick={closeModal}>취소</button>
                    <SignUpbtn to="/signup" onClick={closeModal}>
                        회원가입하기
                    </SignUpbtn>
                </Container>
            </Modal>
        </div>
    );
};

export default SignIn;
