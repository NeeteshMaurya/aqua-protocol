import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Right from "../../assets/images/mainIcons/Right.svg";
import { InvestETH, toWei } from "../../interface/web3Instance";
import CustomToast from "../CustomToast";
const JoinPoolMobile = (props) => {
	const { toogle, showModal } = props;
	const [inputValue, setinputValue] = useState({ valueInEth: "" });
	const [errorMsg, seterrorMsg] = useState("");
	const [swapRatio, setswapRatio] = useState();
	const [tokenSymbol, settokenSymbol] = useState();
	const [maxAllocation, setmaxAllocation] = useState();
	const [poolId, setpoolId] = useState();

	const [isValid, setisValid] = useState(false);
	const inputRef = useRef();
	const singlePoolData = useSelector(
		(state) => state.poolsReducer.singlePoolData
	);
	const [fromAccount] = useSelector((state) => state.globalReducer.accounts);
	const balanceEth = useSelector((state) => state.globalReducer.balance);

	async function InvestETHFromSmart(poolID, eth, fromAccount) {
		let wieValue = toWei(eth);

		return await InvestETH(poolID)
			.send({
				from: fromAccount,
				value: wieValue,
				gas: 0x5208,
				maxFeePerGas: 0xb2d05e00,
				maxPriorityFeePerGas: 0xb2d05e00
			})
			.on("transactionHash", function (hash) {
				// console.log(hash);
				toast.info(<CustomToast value={hash} />, {
					position: "top-right",
					autoClose: 8000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					progress: undefined,
				});
				//when we click invest
				//1-success
			})
			.on("confirmation", function (confirmationNumber, receipt) {
				// console.log(confirmationNumber, receipt);
				//right after metamask is opened
			})
			.on("receipt", function (receipt) {
				// receipt example
				// fired when tx completes
				//2 - when tx is mined
				// console.log(receipt);
				toast.info("Transaction Succesful!", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			})
			.on("error", function (error, receipt) {
				// console.log("error", error);
				// console.log(receipt);
				//if we reject tx or other tech issues
				//1-fail
				toast.error("Tranasction rejected", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: false,
					progress: undefined,
				});
			});
	}

	useEffect(() => {
		if (singlePoolData) {
			let swapRatioVal = singlePoolData[0].swapRatio;
			let tokenSymbolVal = singlePoolData[0].tokenSymbol;
			let maxAllocation = singlePoolData[0].maxAllocation;
			let poolId = singlePoolData[0].poolId;

			setswapRatio(swapRatioVal);
			settokenSymbol(tokenSymbolVal);
			setmaxAllocation(maxAllocation);
			setpoolId(poolId);
		}
	}, [singlePoolData]);

	const handleChange = (e) => {
		let temp = { ...inputValue };
		const { name, value } = e.target;
		temp[name] = value;
		setinputValue(temp);

		if (value <= maxAllocation && value > 0) {
			seterrorMsg("");
			setisValid(true);
		} else if (value > maxAllocation || value < 0) {
			seterrorMsg(`Enter Value less than ${maxAllocation} ETH`);
			setisValid(false);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		InvestETHFromSmart(poolId, inputValue.valueInEth, fromAccount);
		toogle();
		setinputValue({ valueInEth: "" });
	};

	const maxAllocationHandler = () => {
		let temp = { ...inputValue };
		temp.valueInEth = maxAllocation;
		setinputValue(temp);
	};

	return (
		<>
			{showModal && (
				<>
					<div onClick={toogle} className="modal-overlay-mobile"></div>
					<form onSubmit={handleSubmit} className="modal-wrapper-mobile">
						<div className="modal-header">
							<p>Join Pool</p>
							<span onClick={toogle}>X</span>
						</div>
						<div className="modal-body join-pool-wrapper">
							<div className="from-wrapper">
								<p>From</p>
								<div className="from">
									<input
										ref={inputRef}
										name="valueInEth"
										value={inputValue.valueInEth}
										onChange={handleChange}
										type="number"
										required
										placeholder="0.00"
										max={`${maxAllocation}`}
									/>

									<div className="max-min-wrapper">
										<a
											onClick={maxAllocationHandler}
											className="btn btn-pools max-min"
										>
											Max
										</a>
										<a className="btn btn-pools max-min">ETH</a>
									</div>
								</div>

							</div>
							<p style={{ height: "44px", color: "rgba(238, 63, 63, 0.753)" }} className="error-msg">{errorMsg}</p>
							<div className="from-wrapper">
								<p style={{ marginTop: "8px" }}>To</p>
								<div className="to">
									<h2>{swapRatio * inputValue.valueInEth}</h2>
									<h2>{tokenSymbol}</h2>
								</div>
							</div>
							<div className="joinPool-info-wrapper">
								<div className="joinPool-info">
									<p>Balance: </p>
									<p>{balanceEth} ETH</p>
								</div>
								<div className="joinPool-info">
									<p>Remaining:</p>
									<p>{balanceEth - inputValue.valueInEth} ETH</p>
								</div>
							</div>
						</div>
						<div className="modal-footer joinPool-footer">
							<button
								type={inputValue.valueInEth ? "submit" : "button"}
								className={
									!inputValue.valueInEth ? "btn-disabled" : "btn-connect"
								}
							>
								Purchase
							</button>
						</div>
					</form>
				</>
			)}
		</>
	);
};

export default JoinPoolMobile;
