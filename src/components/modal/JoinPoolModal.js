import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Right from "../../assets/images/mainIcons/Right.svg";
import { InvestETH, toWei, investERC, toERCvalue, approve, addressInvest, allowance, balanceOf, toEther } from "../../interface/web3Instance";
import CustomToast from "../CustomToast";

import ConformationModal from "./conformationModal";
import SuccessModal from "./successModal";
const JoinPoolModal = (props) => {
	const { toogle, showModal } = props;
	const [inputValue, setinputValue] = useState({ valueInEth: "" });
	const [errorMsg, seterrorMsg] = useState("");
	const [swapRatio, setswapRatio] = useState();
	const [tokenSymbol, settokenSymbol] = useState();
	const [maxAllocation, setmaxAllocation] = useState();
	const [poolId, setpoolId] = useState();
	const [isValid, setisValid] = useState(false);
	const [mainCAddress, setMainCaddress] = useState('')
	const [ercbalance, setErcbalance] = useState()
	const [isERC, setIsERC] = useState(false)
	const inputRef = useRef();
	const singlePoolData = useSelector(
		(state) => state.poolsReducer.singlePoolData
	);
	const [fromAccount] = useSelector((state) => state.globalReducer.accounts);
	const balanceEth = useSelector((state) => state.globalReducer.balance);

	async function InvestETHFromSmart(poolID, eth, fromAccount, mainCAddress) {
		let wieValue = toWei(eth);
		if (mainCAddress === "0x0000000000000000000000000000000000000000") {
			return await InvestETH(poolID)
				.send({
					from: fromAccount,
					value: wieValue,
					gas: 3000000,
					maxFeePerGas: 1000000000,
					maxPriorityFeePerGas: 1000000000
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
					// console.log("receipt", receipt);
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
		} else {
			let ercvalue = toWei(eth)
			// console.log(ercvalue, "erc value")
			// console.log("came to erc invest")
			await allowance(fromAccount, addressInvest).call().then((val) => {
				// console.log("value", val)
				if (val > 0) {
					investERC(poolID, ercvalue)
						.send({
							from: fromAccount,
							gas: 3000000,
							maxFeePerGas: 1000000000,
							maxPriorityFeePerGas: 1000000000
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
				} else {
					approve(addressInvest, ercvalue).send({
						from: fromAccount,
						gas: 60000,
						maxFeePerGas: 53000000000,
						maxPriorityFeePerGas: 53000000000
					}).then((approveData) => {
						// console.log(approveData, "approvedata")
						if (approveData.status === true) {
							investERC(poolID, ercvalue)
								.send({
									from: fromAccount,
									gas: 3000000,
									maxFeePerGas: 1000000000,
									maxPriorityFeePerGas: 1000000000
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
						} else {
							console.log("transaction not approved")
						}

					}).catch((e) => {
						console.log(e, "approve error")
					})
				}
			})

		}

	}
	const [mainCSymbol, setMaincsymbol] = useState("")
	useEffect(() => {
		if (singlePoolData) {
			// console.log("single pool data", singlePoolData)
			let swapRatioVal = singlePoolData[0].swapRatio;
			let tokenSymbolVal = singlePoolData[0].tokenSymbol;
			let maxAllocation = singlePoolData[0].maxAllocation;
			let poolId = singlePoolData[0].poolId;
			let mainCoinSymbol = singlePoolData[0].mainCoinSymbol
			let mainCoinAddress = singlePoolData[0].mainCoinAddress
			setswapRatio(swapRatioVal);
			settokenSymbol(tokenSymbolVal);
			setmaxAllocation(maxAllocation);
			setpoolId(poolId);
			setMaincsymbol(mainCoinSymbol)
			setMainCaddress(mainCoinAddress)
		}
		if (mainCAddress !== "0x0000000000000000000000000000000000000000") {
			balanceOf(fromAccount).call().then((erc) => {
				// console.log("erc balance", erc)
				setErcbalance(toEther(erc))
				setIsERC(false)
			}).catch((e) => console.log(e, "erc balance not fetched"))

		}
	}, [singlePoolData]);

	const handleChange = (e) => {
		let temp = { ...inputValue };

		const { name, value } = e.target;
		if (isERC) {
			if (value < 0) {
				seterrorMsg(`Invalid Vale`);
				setisValid(false);
			} else {
				temp[name] = value;
				setinputValue(temp);
				if (value > ercbalance) {
					seterrorMsg(`insufficient balance`);
					setisValid(false);
				}
				else {
					if (value <= maxAllocation && value > 0) {
						seterrorMsg("");
						setisValid(true);
					}
					else {
						seterrorMsg(`Enter Value less than ${maxAllocation} USDT`);
						setisValid(false);
					}

				}
			}
		} else {
			if (value < 0) {
				seterrorMsg(`Invalid Vale`);
				setisValid(false);
			} else {
				temp[name] = value;
				setinputValue(temp);

				if (value <= maxAllocation && value > 0) {
					seterrorMsg("");
					setisValid(true);
				} else {
					if (value > balanceEth) {
						seterrorMsg(`insufficient balance`);
					} else {
						seterrorMsg(`Enter Value less than ${maxAllocation} ETH`);
						setisValid(false);
					}

				}
			}
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		InvestETHFromSmart(poolId, inputValue.valueInEth, fromAccount, mainCAddress);
		toogle();
		setinputValue({ valueInEth: "" });
	};

	const maxAllocationHandler = () => {
		let temp = { ...inputValue };
		temp.valueInEth = maxAllocation;
		setinputValue(temp);
	};

	const trimBalance = (val) => {
		let temp = val + "";
		return temp.slice(0, 5);
	};
	return (
		<>
			{showModal && (
				<>
					<div onClick={toogle} className="modal-overlay"></div>

					<form style={{ height: "579px",borderRadius:'4px',background:'black',border:'1px solid white' }} onSubmit={handleSubmit} className="modal-wrapper">
						<div className="modal-header">
							<p style={{fontFamily:'avenir',color:'white'}}>Join Pool</p>
							<span onClick={toogle}>X</span>
						</div>
						<div style={{ maxHeight: "395px" }} className="modal-body join-pool-wrapper">
							<div className="from-wrapper">
								<p style={{fontFamily:'avenir',color:'white'}}>From</p>
								<div style={{ marginBottom: "34px" }} className="from">
									<input style={{ cursor: "pointer" }}
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
										<a style={{fontFamily:'avenir',color:'white',borderRadius:'2px'}}
											onClick={maxAllocationHandler}
											className="btn btn-pools max-min connectwalletbtn"
										>
											MAX
										</a>
										<a style={{borderRadius:'2px' ,border: "none" ,fontFamily:'avenir',color:'white'}} className="btn btn-pools max-min">{mainCSymbol}</a>
									</div>
								</div>

							</div>
							<p style={{ height: "44px", color: "rgba(238, 63, 63, 0.753)",fontFamily:'avenir',color:'white' }} className="error-msg">{errorMsg}</p>
							<div className="from-wrapper">
								<p style={{fontFamily:'avenir',color:'white'}}>To</p>
								<div style={{ marginBottom: "22px" }} className="to">
									<h2 style={{fontFamily:'avenir',color:'white'}}>{swapRatio * inputValue.valueInEth}</h2>
									<h2 style={{fontFamily:'avenir',color:'white'}}>{tokenSymbol}</h2>
								</div>
							</div>
							<div className="joinPool-info-wrapper">
								<div className="joinPool-info">
									<p style={{fontFamily:'avenir',color:'white'}}>Balance: </p>
									{mainCAddress === "0x0000000000000000000000000000000000000000" ? <p style={{fontFamily:'avenir',color:'white'}}>{trimBalance(balanceEth)} {mainCSymbol}</p> : <p>{ercbalance} {mainCSymbol}</p>}
								</div>
								<div className="joinPool-info">
									<p style={{fontFamily:'avenir',color:'white'}}>Remaining:</p>
									{mainCAddress === "0x0000000000000000000000000000000000000000" ? <p style={{fontFamily:'avenir',color:'white'}}>{trimBalance(balanceEth - inputValue.valueInEth)} {mainCSymbol}</p> : <p>{trimBalance(ercbalance - inputValue.valueInEth)} {mainCSymbol}</p>}
								</div>
							</div>
						</div>
						
						<div style={{paddingTop:'35px'}} className="modal-footer joinPool-footer">
							<button style={{border:'none', width: "100%",fontFamily:'avenir',color:'white',borderRadius:'2px',background:'#1214fd',fontSize:'14px' }}
								type={isValid ? "submit" : "button"}
								className={!isValid ? "btn-disabled" : "btn-connect"}
							>
								Purchase
							</button>
						</div>
					</form>
				</>
			)}
			{/* <ConformationModal />
			<SuccessModal /> */}
		</>
	);
};

export default JoinPoolModal;
