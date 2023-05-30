import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SwapCard from "../components/common/swapCard";
import Footer from "../components/footer";
import TabPoolDetail from "../components/TabPoolDetail";

import Phature from "../assets/images/iconApps/Phuture.svg";
import Copy from "../assets/images/mainIcons/copy.svg";
import Analog from "../assets/images/mainIcons/Analog.svg";
import JoinPoolModal from "../components/modal/JoinPoolModal";
import JoinPoolModalIntro from "../components/modal/JoinPoolModalIntro";
import JoinPoolIntroMobile from "../components/modal/JoinPoolIntroMobile";
import JoinPoolMobile from "../components/modal/JoinPoolMobile";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePoolsData } from "../reduxStore/Actions/actionCreator";
import { DateTime } from "luxon";
import {
	findPublishDate,
	findUpcoming,
	getAllocationData,
} from "../services/utlis";
import { checkIsWhiteListed } from "../interface/web3Instance";
import { toast } from "react-toastify";
import Web3 from "web3";
import { OnBoardingButton } from "../components/common/metaMaskOnboard";

const PoolDetails = () => {
	const [showJoinPoolModal, setshowJoinPoolModal] = useState(false);
	const [showJoinPoolModalIntro, setshowJoinPoolModalIntro] = useState(false);
	const [isWhiteListed, setisWhiteListed] = useState(true);
	const [isUp, setIsUp] = useState(false)

	const IdUrl = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSinglePoolsData(IdUrl.Id));
	}, []);

	const singlePoolsData = useSelector(
		(state) => state.poolsReducer.singlePoolData
	);
	let [address] = useSelector((state) => state.globalReducer.accounts);

	const toogleIntroModal = () => {
		setshowJoinPoolModalIntro(!showJoinPoolModalIntro);
	};

	const continueBtnHandler = () => {
		setshowJoinPoolModalIntro(false);
		setshowJoinPoolModal(true);
	};

	const toogleJoinModal = () => {
		setshowJoinPoolModal(!showJoinPoolModal);
	};

	const trimAdd = (add) => {
		let mobileAdd = add.slice(0, 11) + "..." + add.slice(-10);
		return mobileAdd;
	};

	const FindJoinPoolBtnStatus = (startTime, accessType, idWhereAddressWhitelisted, finishTimeOfPool) => {
		let isUpcoming = findUpcoming(startTime);
		if (isUpcoming) {
			setisWhiteListed(false);
			setIsUp(true)
		} else {
			setIsUp(false)
			if (new Date(finishTimeOfPool).getTime() < Date.now()) {
				setisWhiteListed(false);
			} else {
				if (accessType === "Public") {
					setisWhiteListed(true);
				} else if (accessType === "Private") {
					checkIsWhiteListed(address, idWhereAddressWhitelisted)
						.call()
						.then((val) => {
							if (val === "0") {
								setisWhiteListed(false);
							} else {
								setisWhiteListed(true);
							}
						});
				}
			}

		}
	};
	useEffect(() => {
		if (singlePoolsData.length > 0) {
			let [data] = singlePoolsData;
			if ([address][0] !== undefined) {
				FindJoinPoolBtnStatus(data.startTimeOfPool, data.accessType, data.idWhereAddressWhitelisted, data.finishTimeOfPool);
			} else {
				console.log("please install metamask")
			}

		}
	}, [singlePoolsData, FindJoinPoolBtnStatus]);

	// useEffect(() => {
	// 	if (!isWhiteListed) {
	// 		toast.info("Adress is not white listed", {
	// 			position: "top-right",
	// 			autoClose: 5000,
	// 			hideProgressBar: false,
	// 			closeOnClick: true,
	// 			pauseOnHover: true,
	// 			draggable: true,
	// 			progress: undefined,
	// 		});
	// 	}
	// }, [isWhiteListed]);
	const [isCopied, setisCopied] = useState(false);
	const copyClickHandler = () => {
		if (address) navigator.clipboard.writeText(address);
		setisCopied(true);
		setTimeout(() => {
			setisCopied(false);
		}, 1000);
	};
	// Web3.eth.getAccounts(function (err, accounts) {
	// 	if (err != null) console.error("An error occurred: " + err);
	// 	else if (accounts.length == 0) console.log("User is not logged in to MetaMask");
	// 	else console.log("User is logged in to MetaMask");
	// });
	return (
		<>
			<Helmet>
				<title>Pool Details</title>
				<meta name="description" content="SolClout application" />
			</Helmet>
			<>
				{singlePoolsData.length > 0 &&
					singlePoolsData.map((data) => {
						return (
							<div className="pool-details-wrapper">
								<div style={{ display: "none" }}>
									<OnBoardingButton />
								</div>
								<div className="pool-info-basic-wrapper">
									<div className="pool-info-basic">
										<img
											className="poolDetail-icon"
											src={data.projectLogo}
											alt="Icon"
										/>
										<h2 className="heading31">{data.poolName}</h2>
										<div className="copy-address-wrapper">
											{isCopied ? <p className="psize16Bold">Copied!</p> : <p className="psize16Bold">{data.tokenAddress}</p>}
											{isCopied ? null : <p className="mobileAddress">
												{trimAdd(data.tokenAddress)}
											</p>}
											<img onClick={copyClickHandler} src={Copy} />
										</div>

										<div className="time-wrapper">
											<img src={Analog} alt="clock"></img>
											<p className="psize18Bold">
												{`${findPublishDate(data.startTimeOfPool)}`}
											</p>
										</div>
										<div className="poolDetails-btn-wrapper">
											{!isUp ?
												<>
													{[address][0] !== undefined ? <a
														onClick={toogleIntroModal}
														className={`btn ${isWhiteListed ? "join-pool-btn" : "btn-disabled"
															}`}
													>
														Join Pool
													</a> :
														<a
															className="btn-disabled"
														>
															Join Pool
														</a>
													}
												</> : null
											}

											<a
												target="_blank"
												href={`https://rinkeby.etherscan.io/token/${data.tokenAddress}`}
												className="view-ethscan-btn"
											>
												View Etherscan
											</a>
										</div>
									</div>
									<SwapCard data={data} />
								</div>
								<div className="pool-info-detailed-wrapper">
									{typeof window.ethereum !== 'undefined' ?
										<TabPoolDetail data={data} /> : "Please install metamask"}
								</div>
							</div>
						);
					})}
			</>
			{showJoinPoolModalIntro && (
				<JoinPoolModalIntro
					showModal={showJoinPoolModalIntro}
					toogle={toogleIntroModal}
					continueBtnHandler={continueBtnHandler}
				/>
			)}
			{showJoinPoolModal && (
				<JoinPoolModal showModal={showJoinPoolModal} toogle={toogleJoinModal} />
			)}
			{showJoinPoolModalIntro && (
				<JoinPoolIntroMobile
					showModal={showJoinPoolModalIntro}
					toogle={toogleIntroModal}
					continueBtnHandler={continueBtnHandler}
				/>
			)}
			{showJoinPoolModal && (
				<JoinPoolMobile
					showModal={showJoinPoolModal}
					toogle={toogleJoinModal}
				/>
			)}

			<Footer />
		</>
	);
};

export default PoolDetails;
