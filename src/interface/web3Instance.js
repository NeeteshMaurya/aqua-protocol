import Web3 from "web3";

export let addressInvest = "0xe64b8691FC9d9ffb06a5310F0b0D6840545eF4C9";
let investABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "FinishPool",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Investor_ID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "Investor_Address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "LockedDeal_ID",
				"type": "uint256"
			}
		],
		"name": "NewInvestorEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "NewPool",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Pause",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "PoolUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "From",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "Token",
				"type": "address"
			}
		],
		"name": "TransferIn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "From",
				"type": "address"
			}
		],
		"name": "TransferInETH",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "To",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "Token",
				"type": "address"
			}
		],
		"name": "TransferOut",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "To",
				"type": "address"
			}
		],
		"name": "TransferOutETH",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Unpause",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "Benefit_Address",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_FinishTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_Rate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_SOLCRate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_StartAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint64",
				"name": "_LockedUntil",
				"type": "uint64"
			},
			{
				"internalType": "address",
				"name": "_MainCoin",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_Now",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_WhiteListId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_VestingContract",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_UpfrontPercentRelease",
				"type": "uint256"
			}
		],
		"name": "CreatePool",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Fee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "GetInvestmentData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_Poolid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_InvestorAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_MainCoin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_InvestTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_TotalTokens",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_InvestorAddress",
				"type": "address"
			}
		],
		"name": "GetMyInvestmentIds",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetMyPoolsId",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Id",
				"type": "uint256"
			}
		],
		"name": "GetPoolBaseData",
		"outputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "poolCreator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "finishTimeOfPool",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rateForSOLC_Holder",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startAmountOfPool",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Id",
				"type": "uint256"
			}
		],
		"name": "GetPoolExtraData",
		"outputs": [
			{
				"internalType": "bool",
				"name": "tookLeftOver",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "whitelistId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "mainCoin",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "upfrontRelease",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Id",
				"type": "uint256"
			}
		],
		"name": "GetPoolMoreData",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "tokenLockedPeriod",
				"type": "uint64"
			},
			{
				"internalType": "uint256",
				"name": "leftTokensInPool",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timeWhenPoolStart",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "openForAllTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "unlockedTokens",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "vestingAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "GetPoolStatus",
		"outputs": [
			{
				"internalType": "enum PoolsData.PoolStatus",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GovernerContract",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_PoolId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_Amount",
				"type": "uint256"
			}
		],
		"name": "InvestERC20",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_PoolId",
				"type": "uint256"
			}
		],
		"name": "InvestETH",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "IsERC20Maincoin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "IsPayble",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_PoolId",
				"type": "uint256"
			}
		],
		"name": "IsReadyWithdrawLeftOvers",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "IsTokenFilterOn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "IsValidToken",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "LockedDealAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MCWhitelistId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MaxDuration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MaxERC20Invest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MaxETHInvest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MinDuration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MinERC20Invest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MinETHInvest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Participant",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "participantsCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PoolPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SOLCFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SOLCTimer",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_benefitAddress",
				"type": "address"
			}
		],
		"name": "SetBenefit_Address",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "SetFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "lockedDeal",
				"type": "address"
			}
		],
		"name": "SetLockedDealAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_minDuration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maxDuration",
				"type": "uint256"
			}
		],
		"name": "SetMinMaxDuration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_MinERC20Invest",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_MaxERC20Invest",
				"type": "uint256"
			}
		],
		"name": "SetMinMaxERC20Invest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_MinETHInvest",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_MaxETHInvest",
				"type": "uint256"
			}
		],
		"name": "SetMinMaxETHInvest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_PoolPrice",
				"type": "uint256"
			}
		],
		"name": "SetPoolPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "SetSOLCFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_SOLCTimer",
				"type": "uint256"
			}
		],
		"name": "SetSOLCTimer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_WhiteList_Address",
				"type": "address"
			}
		],
		"name": "SetWhiteList_Address",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SwapTokenFilter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_PoolId",
				"type": "uint256"
			}
		],
		"name": "SwitchIs21DecimalRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SwitchIsPayble",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SwitchLockedDealForTlp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TokenWhitelistId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UseLockedDealForTlp",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "WhiteList_Address",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "WithdrawERC20Fee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "WithdrawETHFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_PoolId",
				"type": "uint256"
			}
		],
		"name": "WithdrawLeftOvers",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalInvestor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "isPoolLocked",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isUsingLockedDeal",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "isUsingVesting",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "poolsCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "setGovernerContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_whiteListId",
				"type": "uint256"
			}
		],
		"name": "setMCWhitelistId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_whiteListId",
				"type": "uint256"
			}
		],
		"name": "setTokenWhitelistId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_PoolId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_InvestorAddress",
				"type": "address"
			}
		],
		"name": "yourInvestment",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_InvestedAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_TimeOfInvestment",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_TotalTokens",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];
let addressWhiteList = "0xc8B6a7197cbc6025d94D407fe3D19D0c41d1327A";

let whiteListABI = [
	{
		inputs: [
			{
				internalType: "address",
				name: "_investContract",
				type: "address",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "_WhiteListCount",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "address",
				name: "_creator",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "_contract",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "_changeUntil",
				type: "uint256",
			},
		],
		name: "NewWhiteList",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_Id",
				type: "uint256",
			},
			{
				internalType: "address[]",
				name: "_Users",
				type: "address[]",
			},
			{
				internalType: "uint256[]",
				name: "_Amount",
				type: "uint256[]",
			},
		],
		name: "AddAddress",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_Id",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "_NewContract",
				type: "address",
			},
		],
		name: "ChangeContract",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_Id",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "_NewCreator",
				type: "address",
			},
		],
		name: "ChangeCreator",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_user",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_id",
				type: "uint256",
			},
		],
		name: "Check",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_ChangeUntil",
				type: "uint256",
			},
			{
				internalType: "address[]",
				name: "_Users",
				type: "address[]",
			},
			{
				internalType: "uint256[]",
				name: "_Amount",
				type: "uint256[]",
			},
		],
		name: "CreateManualWhiteList",
		outputs: [
			{
				internalType: "uint256",
				name: "Id",
				type: "uint256",
			},
		],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_Subject",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_Id",
				type: "uint256",
			},
		],
		name: "LastRoundRegister",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "MaxUsersLimit",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_Subject",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_Id",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_Amount",
				type: "uint256",
			},
		],
		name: "Register",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_Id",
				type: "uint256",
			},
			{
				internalType: "address[]",
				name: "_Users",
				type: "address[]",
			},
		],
		name: "RemoveAddress",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "WhiteListCost",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "WhiteListCount",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		name: "WhitelistDB",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "WhitelistSettings",
		outputs: [
			{
				internalType: "address",
				name: "Creator",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "ChangeUntil",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "Contract",
				type: "address",
			},
			{
				internalType: "bool",
				name: "isReady",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address payable",
				name: "_to",
				type: "address",
			},
		],
		name: "WithdrawETHFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_Id",
				type: "uint256",
			},
		],
		name: "isWhiteListReady",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_limit",
				type: "uint256",
			},
		],
		name: "setMaxUsersLimit",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_newCost",
				type: "uint256",
			},
		],
		name: "setWhiteListCost",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
export let ercAddress = "0x099d71cF3D5C1EF73a330055aEd8841A95F8Ae46"
let ERCabi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_tokenToBeMinted",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decrease  = ERCinstance.methods.allowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increase  = ERCinstance.methods.allowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

let lockdealABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "PoolId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "Token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "FinishTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "StartAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "Owner",
				"type": "address"
			}
		],
		"name": "NewPoolCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "PoolId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "Spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			}
		],
		"name": "PoolApproval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "PoolId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "NewOwner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "OldOwner",
				"type": "address"
			}
		],
		"name": "PoolOwnershipTransfered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "From",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "Token",
				"type": "address"
			}
		],
		"name": "TransferIn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "From",
				"type": "address"
			}
		],
		"name": "TransferInETH",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "To",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "Token",
				"type": "address"
			}
		],
		"name": "TransferOut",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "To",
				"type": "address"
			}
		],
		"name": "TransferOutETH",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_PoolId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_Amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_Spender",
				"type": "address"
			}
		],
		"name": "ApproveAllowance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Token",
				"type": "address"
			},
			{
				"internalType": "uint64[]",
				"name": "_FinishTime",
				"type": "uint64[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_StartAmount",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "_Owner",
				"type": "address[]"
			}
		],
		"name": "CreateMassPools",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Token",
				"type": "address"
			},
			{
				"internalType": "uint64",
				"name": "_FinishTime",
				"type": "uint64"
			},
			{
				"internalType": "uint256",
				"name": "_StartAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_Owner",
				"type": "address"
			}
		],
		"name": "CreateNewPool",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Token",
				"type": "address"
			},
			{
				"internalType": "uint64[]",
				"name": "_FinishTime",
				"type": "uint64[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_StartAmount",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "_Owner",
				"type": "address[]"
			}
		],
		"name": "CreatePoolsWrtTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetFee",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetMinDuration",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_InvestorAddress",
				"type": "address"
			}
		],
		"name": "GetMyPoolsId",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_PoolId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_Address",
				"type": "address"
			}
		],
		"name": "GetPoolAllowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_InvestorAddress",
				"type": "address"
			}
		],
		"name": "GetPoolData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_UnlockTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_Amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_Owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_Token",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GovernerContract",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "IsPayble",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Pools",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "UnlockTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "Owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "Token",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SOLCFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SOLCTimer",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_fee",
				"type": "uint16"
			}
		],
		"name": "SetFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_minDuration",
				"type": "uint16"
			}
		],
		"name": "SetMinDuration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_fee",
				"type": "uint16"
			}
		],
		"name": "SetSOLCFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_SOLCTimer",
				"type": "uint256"
			}
		],
		"name": "SetSOLCTimer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_singleVestingPeriod",
				"type": "uint256"
			}
		],
		"name": "SetSingleVestingPeriod",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_PoolId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_NewAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_NewOwner",
				"type": "address"
			}
		],
		"name": "SplitPoolAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_PoolId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_Amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_Address",
				"type": "address"
			}
		],
		"name": "SplitPoolAmountFrom",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SwitchIsPayble",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_PoolId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_NewOwner",
				"type": "address"
			}
		],
		"name": "TransferPoolOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "WhiteListId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "WhiteList_Address",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "WithdrawERC20Fee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "WithdrawETHFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_PoolId",
				"type": "uint256"
			}
		],
		"name": "WithdrawToken",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isTokenFilterOn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "isTokenWhiteListed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxTransactionLimit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "setGovernerContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newLimit",
				"type": "uint256"
			}
		],
		"name": "setMaxTransactionLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "setWhiteListAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "setWhiteListId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "singleVestingPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapTokenFilter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
let lockDealAddress = "0xecd9166eADbc247e40e2d7e6bC265DAe64005935"

let vestingABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "PoolId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "Token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "FinishTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "StartAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "Owner",
				"type": "address"
			}
		],
		"name": "NewPoolCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "PoolId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "Spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			}
		],
		"name": "PoolApproval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "PoolId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "NewOwner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "OldOwner",
				"type": "address"
			}
		],
		"name": "PoolOwnershipTransfered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "From",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "Token",
				"type": "address"
			}
		],
		"name": "TransferIn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "From",
				"type": "address"
			}
		],
		"name": "TransferInETH",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "To",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "Token",
				"type": "address"
			}
		],
		"name": "TransferOut",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "To",
				"type": "address"
			}
		],
		"name": "TransferOutETH",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_PoolId",
				"type": "uint256"
			}
		],
		"name": "ClaimToken",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Token",
				"type": "address"
			},
			{
				"internalType": "uint64",
				"name": "_FinishTime",
				"type": "uint64"
			},
			{
				"internalType": "uint256",
				"name": "_StartAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_Owner",
				"type": "address"
			}
		],
		"name": "CreateNewPool",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_InvestorAddress",
				"type": "address"
			}
		],
		"name": "GetInvestorData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_UnlockTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_Amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_Owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_Token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_PaidAmount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_InvestorAddress",
				"type": "address"
			}
		],
		"name": "GetMyPoolsId",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GovernerContract",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "IsPayble",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Pools",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "UnlockTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "Owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "Token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "PaidAmount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "RevokeVesting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SwitchIsPayble",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "installmentsCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "revoke",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "setGovernerContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "singleVestingPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTimeofVesting",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_vestingPeriodInWeeks",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_singleVestingPeriodInWeek",
				"type": "uint256"
			}
		],
		"name": "startVesting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unlockTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "upfrontPercentage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "vestedAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "vestingPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

let vestingAddress = "0x363Da6E6F2f11EDAa6C9B687b679d473569ED6c4"



let web3 = new Web3(Web3.givenProvider);
//contract instances

export let ContractInstance = new web3.eth.Contract(investABI, addressInvest);
export let whiteListInstance = new web3.eth.Contract(
	whiteListABI,
	addressWhiteList
);
export let ERCinstance = new web3.eth.Contract(ERCabi, ercAddress)
export let LockDealInstance = new web3.eth.Contract(lockdealABI, lockDealAddress)
export let vestinginstance = new web3.eth.Contract(vestingABI, vestingAddress)
//methods
export let getPoolDataSmart = ContractInstance.methods.GetPoolMoreData;
export let InvestETH = ContractInstance.methods.InvestETH;
export let GetMyInvestmentIds = ContractInstance.methods.GetMyInvestmentIds;
export let GetInvestmentData = ContractInstance.methods.GetInvestmentData;

export let checkIsWhiteListed = whiteListInstance.methods.Check;
// Check(metamaskAddress, idWhereAddressWhitelisted)
export let investment = ContractInstance.methods.yourInvestment
export let investERC = ContractInstance.methods.InvestERC20
export let approve = ERCinstance.methods.approve;
export let allowance = ERCinstance.methods.allowance;
export let balanceOf = ERCinstance.methods.balanceOf;
export let Participant = ContractInstance.methods.Participant
export let GetMyPoolsId = LockDealInstance.methods.GetMyPoolsId
export let GetPoolData = LockDealInstance.methods.GetPoolData
export let WithdrawToken = LockDealInstance.methods.WithdrawToken
export let isUsingVesting = ContractInstance.methods.isUsingVesting
export let GetMyPoolsIdVesting = vestinginstance.methods.GetMyPoolsId
export let GetInvestorDatavesting = vestinginstance.methods.GetInvestorData
export let ClaimToken = vestinginstance.methods.ClaimToken
export let vestingPeriod = vestinginstance.methods.vestingPeriod

export const toEther = (wie) => {
	return web3.utils.fromWei(wie);
};

export const toWei = (ether) => {
	return web3.utils.toWei(ether);
};

export const toERCvalue = (ether) => {
	return ether * 1000000
}
