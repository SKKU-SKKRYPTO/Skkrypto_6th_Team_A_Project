import React, { useState } from "react";
import styled from "styled-components";
import ApplyPresenter from "./ApplyrPresenter";
import Http from "Api/api";
import { useHistory } from "react-router-dom";
import { cav } from "Caver/caver";
import Contract from "Contracts/contract";
import "antd/dist/antd.css";
import { Spin } from "antd";

const Container = styled.div`
    overflow: auto;
`;

function getToday() {
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = date.getHours();
    return year + month + day + hours;
}

const Loader = styled(Spin)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ApplyContainer = () => {
    const [wallet, setWallet] = useState("");
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [sale, setSale] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [money, setMoney] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [loading, setLoading] = useState(false);
    console.log(loading);
    const history = useHistory();

    const handleWallet = (e) => {
        setWallet(e.target.value);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleContent = (e) => {
        setContent(e.target.value);
    };

    const handleSale = (e) => {
        setSale(e.target.value);
    };

    const handleMoney = (e) => {
        setMoney(e.target.value);
    };

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    };

    //신청서 제출.
    const handleForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        const date = getToday(startDate);
        const info = {
            wallet,
            name,
            content,
            sale,
            date,
            money,
            quantity,
        };
        const contractInstance = new cav.contract(
            Contract.abi,
            Contract.address
        );
        console.log(contractInstance);

        try {
            const deployer = cav.wallet.keyring.createFromPrivateKey(wallet);
            cav.wallet.add(deployer);
            const respose = await Http.post("/apply", info);
            const funding = await contractInstance.methods
                .createFunding(
                    deployer.address,
                    sale,
                    Date.now(),
                    quantity,
                    money
                )
                .call();
            const klay = cav.utils.convertToPeb(money, "Ston");
            const find = await contractInstance.methods
                .findTarget(deployer.address, sale, klay)
                .send({
                    from: deployer.address,
                    gas: "250000",
                });
            console.log(respose);
            console.log(funding, find);
            alert("저장 성공!");
            alert("관리자 검토 후 등록 완료됩니다.");
        } catch (e) {
            alert("저장 실패");
            console.log(e);
        }
        setLoading(false);
        history.push("/");
    };

    return (
        <Container>
            {loading ? <Loader tip="Loading..." size="large"></Loader> : null}
            <ApplyPresenter
                wallet={wallet}
                name={name}
                content={content}
                sale={sale}
                startDate={startDate}
                money={money}
                quantity={quantity}
                handleWallet={handleWallet}
                handleName={handleName}
                handleContent={handleContent}
                handleSale={handleSale}
                handleForm={handleForm}
                setStartDate={setStartDate}
                handleMoney={handleMoney}
                handleQuantity={handleQuantity}
            ></ApplyPresenter>
        </Container>
    );
};

export default ApplyContainer;
