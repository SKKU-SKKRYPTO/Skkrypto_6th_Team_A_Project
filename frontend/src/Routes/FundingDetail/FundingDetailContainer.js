import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import FundingDetailPresenter from "./FundingDetailPresenter";
import { cav } from "Caver/caver";
import Contract from "Contracts/contract";
import axios from "axios";
import "antd/dist/antd.css";
import { Spin } from "antd";
import { useHistory } from "react-router-dom";

const Container = styled.div``;

const Loader = styled(Spin)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const FundingDetailContainer = ({ match, location }) => {
    //컨트랙트 인스턴스 생성
    const contractInstance = new cav.contract(Contract.abi, Contract.address);
    const [fundingvisible, setVisible] = useState(false);
    const [cancelVisible, setCancel] = useState(false);
    const [privkey, setPrivkey] = useState("");

    const [fundingAmount, setFundingAmount] = useState(0);

    const [loading, setLoading] = useState(false);
    const [totalLoading, setTotalLoading] = useState(false);

    const history = useHistory();
    // 개인키 상태 계속 업데이트
    const handleKey = (e) => {
        setPrivkey(e.target.value);
    };

    // 모달 창에서 취소버튼 눌렀을때

    const Cancel = (e) => {
        e.preventDefault();
        setVisible(false);
    };

    // 스톤으로 변환.
    const sendMoney = cav.utils.convertToPeb(String(fundingAmount), "Ston");

    // 펀딩하기 버튼에서 확인 버튼 눌렀을 때
    const handleOk = async (e) => {
        e.preventDefault();

        if (privkey === "") {
            alert("키를 입력해주세요!");
            return;
        }

        setVisible(false);
        setLoading(true);

        console.log(contractInstance);

        const deployer = cav.wallet.keyring.createFromPrivateKey(privkey);
        cav.wallet.add(deployer);
        try {
            const value = await contractInstance.methods.deposit().send({
                from: deployer.address,
                gas: "250000",
                value: cav.utils.convertToPeb(String(fundingAmount), "Ston"),
            });
            alert("펀딩 성공!");
            cav.wallet.remove(deployer.address);
            console.log(value);
        } catch (e) {
            alert("펀딩 실패ㅜㅜ");
            console.log(e);
        }
        setLoading(false);
        setPrivkey("");

        // 펀딩 완료시.
    };

    // 펀딩하기 버튼 눌렀을때.
    const handleFunding = (e) => {
        setVisible(true);
    };

    // 펀딩 취소하기 눌렀을 때.
    const handleCancel = async (e) => {
        setCancel(true);
    };

    const handleCancelInsideCancel = () => {
        setCancel(false);
    };

    // 환불 받기 버튼 속 확인 버튼 누를 때
    const fundingCancelOk = async (e) => {
        e.preventDefault();
        setCancel(false);
        setLoading(true);
        if (privkey === "") {
            alert("키를 입력해주세요!");
            return;
        }

        try {
            const deployer = cav.wallet.keyring.createFromPrivateKey(privkey);
            cav.wallet.add(deployer);

            const reci = await contractInstance.methods
                .transfer(sendMoney)
                .send({
                    from: deployer.address,
                    gas: "250000",
                });
            console.log(reci);
            cav.wallet.remove(deployer.address);
            alert("취소 완료!");
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };

    const getMarketData = useCallback(async () => {
        const url = location.pathname;
        setTotalLoading(true);
        try {
            const MarketData = await axios.get(`${url}`);
            setFundingAmount(MarketData.data.money);
        } catch (e) {
            console.log(e);
            alert("정보 불러오기 실패");
            history.push("/");
        }
        setTotalLoading(false);
    }, [history, location.pathname]);

    useEffect(() => {
        getMarketData();
    }, [getMarketData]);

    if (totalLoading) {
        return <Loader tip="Loading..." size="large"></Loader>;
    }

    return (
        <Container>
            {loading ? <Loader tip="Loading..." size="large"></Loader> : null}
            <FundingDetailPresenter
                fundingvisible={fundingvisible}
                privkey={privkey}
                handleFunding={handleFunding}
                handleCancel={handleCancel}
                handleOk={handleOk}
                handleKey={handleKey}
                Cancel={Cancel}
                cancelVisible={cancelVisible}
                handleCancelInsideCancel={handleCancelInsideCancel}
                fundingCancelOk={fundingCancelOk}
            ></FundingDetailPresenter>
        </Container>
    );
};

export default FundingDetailContainer;
