import React, { useEffect, useState } from "react";
import TableInfo from "./common/TableInfo1";
import BuyActive from "../assets/images/mainIcons/buyActive.svg";
import BuyDisabled from "../assets/images/mainIcons/buyDisabled.svg";
import UpArrow from "../assets/images/mainIcons/upArrow.svg";
import DownArrow from "../assets/images/mainIcons/downArrow.svg";
import TableInfo1 from "./common/TableInfo1";
import TableInfo2 from "./common/TableInfo2";
import TableInfo3 from "./common/TableInfo3";
import {
	findUpcomingForClaim,
	getAllocationData,
	GetMyInvestmentIdsFromSmart,
} from "../services/utlis";
import { useSelector } from "react-redux";
import {
	toEther, GetMyPoolsId, GetPoolData, WithdrawToken, isUsingVesting, getPoolDataSmart,
	GetMyPoolsIdVesting, GetInvestorDatavesting, ClaimToken, vestingPeriod
} from '../interface/web3Instance'
import { DateTime } from "luxon";
import NoAllocDesign1 from "./NoAllocDesign1";
import NoAllocDesign2 from "./NoAllocDesign2";
import CustomToast from './CustomToast'
import { toast } from "react-toastify";
import WhitelistInfo1 from "./common/WhitelistInfo1";
import moment from "moment";

const TabPoolDetail = ({ data }) => {
	let [address] = useSelector((state) => state.globalReducer.accounts);
	const singlePoolData = useSelector(
		(state) => state.poolsReducer.singlePoolData
	);
	const [fromAccount] = useSelector((state) => state.globalReducer.accounts);
	// console.log("tabdata", data)
	const [activeTab, setactiveTab] = useState(1);
	const [mobileMenuOpen, setmobileMenuOpen] = useState(false);
	const [isDownloadable, setisDownloadable] = useState(false);
	const [isAllocations, setisAllocations] = useState();
	const [investedAmt, setinvestedAmt] = useState(0);
	const [TimeOfInvestment, setTimeOfInvestment] = useState(0);
	const [totalToken, settotalToken] = useState(0);
	const [vest, setVest] = useState(false)
	const [vestAddress, setVestaddress] = useState(false)

	// const { data } = props;
	const activeTabHandler = (tabIndex) => {
		setactiveTab(tabIndex);
	};
	const allocationData = (poolId, fromAccount) => {
		GetMyInvestmentIdsFromSmart(poolId, fromAccount).then((res) => {
			if (res[0] !== "0") {
				setisAllocations('')
			} else {
				setisAllocations('');
			}

		});

	}
	// setInterval(() => { allocationData(data.poolId, fromAccount) }, 3000)
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		console.log("running")
	// 		GetMyInvestmentIdsFromSmart(data.poolId, fromAccount).then((res) => {
	// 			if (res[0] !== "0") {
	// 				setisAllocations(res)
	// 			} else {
	// 				setisAllocations('');
	// 			}

	// 		});
	// 	}, 5000);
	// 	return () => clearInterval(interval);
	// }, [])
	useEffect(() => {
		if ([address][0] !== undefined) {
			// const allocationData = (poolId, fromAccount) => {

			// }
			isUsingVesting(data.poolId).call().then((val) => {

				setVest(val)
			})
			getPoolDataSmart(data.poolId).call().then((val) => {

				setVestaddress(val.vestingAddress)
			})
			const interval = setInterval(() => {
				// console.log("running")
				GetMyInvestmentIdsFromSmart(data.poolId, fromAccount).then((res) => {
					if (res[0] !== "0") {
						setisAllocations(res)
					} else {
						setisAllocations('');
					}

				});
			}, 5000);
			return () => clearInterval(interval);

		} else {
			console.log("please install metamask")
		}

	}, [data.poolId]);

	const findClaimClass = async (lockedTIme) => {
		// console.log("locked time", lockedTIme)
		if (vest) {
			// return true
			await vestingPeriod().call().then((val) => {
				// console.log("vesting period", val)
				if (val > 0) {
					return true
				} else {
					return false
				}
			})
		} else {
			if (lockedTIme) {
				// return true
				if (findUpcomingForClaim(lockedTIme)) {
					return true
				}
				// if (findUpcoming(lockedTIme)()) {
				// 	return true;
				// }
			} else return false;
		}

	};
	// const dateData = new Date(parseInt(isAllocations._TimeOfInvestment * 1000)).toLocaleString()
	const [poolsdata, setPoolsdata] = useState([])
	var poolDataFromContract = []
	// console.log("date", Date.now())
	const claimStaretd = async () => {
		if (vest) {
			await GetMyPoolsIdVesting(fromAccount).call().then((res) => {
				res.forEach(element => {
					GetInvestorDatavesting(element, fromAccount).call().then((poolRes) => {
						// console.log(poolRes)
						// console.log(poolRes._UnlockTime * 1000, "from contract")
						if (poolRes._Amount === "0" || ((poolRes._UnlockTime) * 1000) > Date.now()) {
							return toast.info("token is locked!", {
								position: "top-right",
								autoClose: 5000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
							});
						} else {
							if (data.tokenAddress === poolRes._Token) {
								ClaimToken(element).send({
									from: fromAccount,
									gas: 3000000,
									maxFeePerGas: 1000000000,
									maxPriorityFeePerGas: 1000000000
								})
							} else {
								console.log("token did not matched")
							}
						}
					})
				});

			})
		} else {
			await GetMyPoolsId(fromAccount).call().then((res) => {
				res.forEach(element => {
					GetPoolData(element, fromAccount).call().then((poolRes) => {
						if (poolRes._Amount === "0") {
							return console.log("insufficient balance")
						} else {
							if (data.tokenAddress === poolRes._Token) {
								WithdrawToken(element).send({
									from: fromAccount,
									gas: 3000000,
									maxFeePerGas: 1000000000,
									maxPriorityFeePerGas: 1000000000
								})
							} else {
								console.log("token did not matched")
							}
						}
					})
				});

			})
		}

	}
	const extensionLink = () => {
		window.open("https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/", "_blank");
	}
	return (
		<div className="TabPoolDetail-wrapper">
			<div className="tabs-title" style={{border:'none'}}>
				<h4 style={{fontFamily:'avenir',color:'white'}}
					className={activeTab === 1 ? "connectwalletbtn" : ""}
					onClick={() => {
						activeTabHandler(1);
					}}
				>
					Pool Details
				</h4>
				<h4 style={{fontFamily:'avenir',color:'white'}}
					className={activeTab === 2 ? "connectwalletbtn" : ""}
					onClick={() => {
						activeTabHandler(2);
					}}
				>
					About the Project
				</h4>
				<h4 style={{fontFamily:'avenir',color:'white'}}
					className={activeTab === 3 ? "connectwalletbtn" : ""}
					onClick={() => {
						activeTabHandler(3);
					}}
				>
					Your Allocations
				</h4>
				<h4 style={{fontFamily:'avenir',color:'white'}}
					className={activeTab === 4 ? "connectwalletbtn" : ""}
					onClick={() => {
						activeTabHandler(4);
					}}
				>
					Whitelist
				</h4>
			</div>
			<div className="tabs-wrapper">
				<div
					className={
						activeTab === 1
							? "tab-content tab-content-1"
							: "tab-content-1 hidden"
					}
				>
					<TableInfo1 data={data} />
					<TableInfo2 data={data} />
				</div>
				<div
					className={
						activeTab === 2
							? "tab-content tab-content-2"
							: "tab-content-2 hidden"
					}
				>
					<div className="table tab-content-2-info-1" style={{borderRadius:'4px'}}>
						<div className="table-title">
							<p style={{fontFamily:'avenir',color:'white'}}>Pool Information</p>
						</div>
						<div className="table-body table-body-tab-2">
							<p style={{fontFamily:'avenir',color:'white'}}>{data.aboutThePool}</p>
						</div>
					</div>

					<TableInfo3 data={data} />
				</div>
				<div
					className={activeTab === 3 ? "tab-content-3" : "tab-content-3 hidden"}
				>
					<>
						{!isAllocations ?
							(<>
								{/* <NoAllocDesign1 />
								<NoAllocDesign2 /> */}
								<div className="tab-content-3-info-1">
									<h1 style={{fontFamily:'avenir',color:'white'}} className="h1size72Bold">No Allocations</h1>
									<p style={{ color: "#CEDAF5",fontFamily:'avenir',color:'white' }} className="psize18Bold">
										Connect your wallet to join the pool you want and raize
										capital
									</p>
									{[address][0] !== undefined ? null : <a onClick={extensionLink} className="btn btn-connect">Connect Wallet</a>}

								</div>
							</>) : (
								<>
									<div className="tab-content-3-info-2">
										<div className="table-title tab-3-title">
											<p style={{fontFamily:'avenir',color:'white'}}>Action</p>
											<p style={{fontFamily:'avenir',color:'white'}}>Contribution</p>
											<p style={{fontFamily:'avenir',color:'white'}}>Allocation Date</p>
											<p style={{fontFamily:'avenir',color:'white'}}>Total Tokens</p>
											{/* <p>Withdrawn</p>
						<p>Available Now</p> */}
										</div>

										<div className="table-body tab-3-info">
											<a onClick={() => { claimStaretd() }}
												className={
													findClaimClass(data.lockedUntillTime)
														? "btn btn-connect"
														: "btn btn-disabled"
												}
											>
												Claim
											</a>
											<p className="contribution-text" >
												{toEther(isAllocations._InvestedAmount) + " "}
												{data.mainCoinSymbol}</p>
											<p className="allocation-date-text" >{moment((isAllocations._TimeOfInvestment * 1000)).format('lll')}</p>
											{/* <p>{new Date(parseInt(isAllocations._TimeOfInvestment * 1000)).toLocaleString()}</p> */}
											{/* <p>{new Date(isAllocations._TimeOfInvestment.toJSON())}</p> */}
											<p style={{fontFamily:'avenir',color:'white'}} className="total-tokens-text">
												{toEther(isAllocations._TotalTokens) + " "}{data.tokenSymbol}
											</p>
											{/* <p>0 PHTR</p>
										<p>60139 PHTR</p> */}
										</div>
									</div>
									<div className="tab-content-3-info-2-mobile">
										<div className="table-title tab-3-title">
											<p style={{fontFamily:'avenir',color:'white'}}>Contribution</p>

											<p style={{fontFamily:'avenir',color:'white'}}>Total Tokens</p>
										</div>
										<div className="table-body tab-3-info">
											<div className="body-info-1">
												<p style={{fontFamily:'avenir',color:'white'}}>
													{toEther(isAllocations._InvestedAmount) + " "}
													{data.mainCoinSymbol}
												</p>
												<p style={{fontFamily:'avenir',color:'white'}}>
													{toEther(isAllocations._TotalTokens) + " "}
													{data.tokenSymbol}
												</p>
												<div className="body-img-btns">
													<img src={isDownloadable ? BuyActive : BuyDisabled} />
													<img
														onClick={() => setmobileMenuOpen(!mobileMenuOpen)}
														src={mobileMenuOpen ? UpArrow : DownArrow}
													/>
												</div>
											</div>
											{mobileMenuOpen && (
												<div className="body-info-2">
													<div className="body-info-2-entry">
														<p style={{fontFamily:'avenir',color:'white'}}>Allocation Date</p>
														<p style={{fontFamily:'avenir',color:'white'}}>{moment((isAllocations._TimeOfInvestment * 1000)).format('lll')}</p>
													</div>
													{/* <div className="body-info-2-entry">
													<p>Withdrawn</p>
													<p>0 PTHR</p>
												</div>
												<div className="body-info-2-entry">
													<p>Available Now</p>
													<p>60139 PHTR</p>
												</div> */}

													<div className="body-info-2-entry">
														<p style={{fontFamily:'avenir',color:'white'}}>Status</p>
														<p style={{fontFamily:'avenir',color:'white'}}>Claimed</p>
													</div>
												</div>
											)}
										</div>
									</div>
								</>
							)}
					</>
				</div>
				<div
					className={
						activeTab === 4
							? "tab-content tab-content-4"
							: "tab-content-4 hidden"
					}
				>
					<WhitelistInfo1 />
					{/* <TableInfo2 data={data} /> */}
				</div>
			</div>
		</div>
	);
};

export default TabPoolDetail;