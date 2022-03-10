pragma solidity >=0.4.24 <=0.5.6;
contract Funding {
     // uint256 value = 1000000000000000000; // 1Klay, peb단위
    address public owner;
    struct funding {
        //펀딩 구조체.
        address payable restaurant;
        string foodname;
        uint endTime;
        uint amount;
        uint totalAmount;
        uint people;
        uint price;
    }

    funding[] internal fundingList;

    constructor() public {
        owner = msg.sender;
    }
    
    function createFunding(address payable restaurant,
        string memory foodname,
        uint endTime,
        uint totalAmount,
        uint price
    ) public {
        fundingList.push(funding(restaurant, foodname,endTime, 0, totalAmount, 0, price));
    }
    
    /// 음식점 인덱스 찾기.
    function findTarget(
        address a,
        string memory f,
        uint _value
    ) public  returns (bool) {
        uint result = 0;
        for (uint i = 0; i < fundingList.length; i++) {
            if (fundingList[i].restaurant == a && keccak256(abi.encodePacked((fundingList[i].foodname))) == keccak256(abi.encodePacked((f)))) {
                result = i;
                break;
            }
        }
        if (result == 0) {
            return false;
        }
        UpdateValue(result, _value);
        return true;
    }
    
    function UpdateValue(uint idx, uint _value) public returns (bool)
    {
        if (fundingList[idx].amount < fundingList[idx].totalAmount && now-fundingList[idx].endTime>=0) {
                fundingList[idx].price += _value;
                fundingList[idx].people++;
        }
        if (checkDone(idx)) {
            transferFromContract(fundingList[idx].restaurant,fundingList[idx].totalAmount);
        }
    }

    function checkDone(uint idx) internal view returns (bool) {
        if (fundingList[idx].amount == fundingList[idx].totalAmount) {
            return true;
        }
        return false;
    }

    function deposit() public payable {  
   
    }   

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getBalanceUser() public view returns (uint) {
        return address(msg.sender).balance;
    }


    function transfer(uint _value) public returns (bool) {
        require(getBalance() >= _value);
        msg.sender.transfer(_value);
        return true;
    }


    function transferFromContract(address payable reciever,uint _value) public returns (bool) {
        require(getBalanceUser()>=_value);
        reciever.transfer(_value);
        return true;
    }
}
