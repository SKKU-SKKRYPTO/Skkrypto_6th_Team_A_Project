# Skkrypto_6th_Team_A_Project



<img src="https://user-images.githubusercontent.com/48006103/100912096-67611b00-3513-11eb-9b21-d0b1636ff051.png " width="100">

## 성대한 할인



</br>

- **프로젝트 목적** :triangular_flag_on_post: : 이 프로젝트는 블록체인을 기반으로 한 크라우드펀딩 시스템입니다. 스마트컨트랙트를 통해 펀딩 모금액이 자동적으로 전달, 환불이 가능하여 전통적인 크라우드펀딩 시스템에서의 과도한 수수료 문제를 해결할 수 있습니다.

  </br>

- **팀원** : 김도헌, 최선하, 정윤하, 이희제

</br>

- **역할 분담** : 

  :arrow_right: 김도헌 : 백엔드 및 스마트 컨트랙트 개발 :computer:

  :arrow_right: 정윤하 : 서비스 기획 및 디자인 :pencil2:

  :arrow_right: 이희제 : 프론트 엔드 및 컨트랙트 개발 :computer:

</br>

- **개발 환경**:fire: : 

  :white_check_mark: Front_End : React, nodejs (v12.19.0)

  :white_check_mark: Back_End : Spring Boot

  :white_check_mark: Smart_Contract. : Solidity

  :white_check_mark: Block_Chain : Klaytn

  </br>

- **개발 상세 개요** :

  =>  Front_End 에서 caver-js 를 이용해 contract 와 transaction 제어.

  =>  스마트 컨트랙트는 [TRUFFLE](https://www.trufflesuite.com) 을 이용해서 배포 (or klaytn ide 에서도 가능)

</br>

- **Why Blockchain?**

1. 크라우드 펀딩 모금액의 내역과 사용처에 대해 확인 할 수 있어 크라우드 펀딩 서비스에 대한 신뢰도를 높일 수 있습니다.
2. 기존에는 크라우드펀딩 분야에서 중개자 참여에 따른 과다한 수수료 문제가 발생했습니다. 전통적으로 크라우드 펀딩 플랫폼에서의 거래 수수료는 매우 높은 수준을 보이고 있는데, 중개인을 거치지 않고 거래 당사자끼리 스마트컨트랙트를 통해 직접 거래를 하게 되면, 수수료가 낮아져 거래 비용이 절감될 수 있습니다.

</br>

- **핵심 기술**
  [스마트 컨트랙트] 
  크라우드 펀딩 투자 시, 펀딩 송금액이 스마트 컨트랙트에 펀딩금액이 예치됩니다. 펀딩 모금 기간 내에 목표 모금액이 모아지면 스마트 컨트랙트에 의해 자동으로 크라우드펀딩 신청자에게 해당 모금액이 전달됩니다. 펀딩 실패 시에는 환불받기 버튼을 통해 펀딩 송금액을 다시 환불을 받을 수 있습니다.

</br></br>

### User flow

----

![image](https://user-images.githubusercontent.com/48006103/101173103-6819be80-3685-11eb-8f1e-53c00110c4f5.png)

</br></br>



### Service Architecture

---

![image](https://user-images.githubusercontent.com/48006103/101173212-8e3f5e80-3685-11eb-935d-382c7c9938ee.png)



</br></br>

### Getting Started

---



```java
Installation 
git clone https://github.com/SKKU-SKKRYPTO/Skkrypto_6th_Team_A_Project.git

cd ./frontend 

npm install 

cd ../

./mvnw clean install 

java -jar target/demo-0.0.1-SNAPSHOT.jar

실행

1. 펀딩 신청 페이지에 가서 펀딩 신청
2. 회원가입 하기
3. 로그인 하기
4. 펀딩 페이지가서 관심있는 펀딩 구매
```

</br></br>





**<백엔드/프론트 엔드 api>**

### Front 

[url 경로]

- 홈 : /
- 마이페이지 : /mypage
- 할인 펀딩 : /funding
- 할인 펀딩 디테일 : /funding/게시판 id
- 펀딩 신청: apply

### Back

[url 경로]

- 홈 : /
- 마이페이지 : /mypage
- 할인 펀딩 : /funding
- 할인 펀딩 디테일 : /funding/게시판 id
- 펀딩 신청: apply

</br></br>

