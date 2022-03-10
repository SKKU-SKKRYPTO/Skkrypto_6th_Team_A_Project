const contract = {
    abi: [
        {
            constant: false,
            inputs: [
                {
                    name: "restaurant",
                    type: "address",
                },
                {
                    name: "foodname",
                    type: "string",
                },
                {
                    name: "endTime",
                    type: "uint256",
                },
                {
                    name: "totalAmount",
                    type: "uint256",
                },
                {
                    name: "price",
                    type: "uint256",
                },
            ],
            name: "createFunding",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [],
            name: "deposit",
            outputs: [],
            payable: true,
            stateMutability: "payable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "a",
                    type: "address",
                },
                {
                    name: "f",
                    type: "string",
                },
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "findTarget",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "transfer",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "reciever",
                    type: "address",
                },
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "transferFromContract",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "idx",
                    type: "uint256",
                },
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "UpdateValue",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            constant: true,
            inputs: [],
            name: "getBalance",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "getBalanceUser",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "owner",
            outputs: [
                {
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
    ],

    address: "0x9b7489b6b928dc8b08a386f2dcd3d7615da1b241",
};

export default contract;
