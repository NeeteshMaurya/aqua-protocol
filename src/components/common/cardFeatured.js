import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Phuture from "../../assets/images/iconApps/Phuture.svg";
import { getSinglePoolsData } from "../../reduxStore/Actions/actionCreator";
import {
	findUpcoming,
	getAllocationData,
	getAllocationData2,
	getProgress,
	getProgressData,
	getProgressDataFromSmart,
	getTimeLeft,
} from "../../services/utlis";
import { Participant } from '../../interface/web3Instance'
const CardFeatured = (props) => {
	const { featuredPools } = props;

	const dispatch = useDispatch();

	const history = useHistory();
	const featuredPoolsHandler = (poolId) => {
		// console.log(poolId, "checkink pool id")
		dispatch(getSinglePoolsData(poolId));
		history.push(`/pool/${poolId}`);
	};
	const calcPercentage = (val1, val2) => {
		let val = ((val1 / val2) * 100).toFixed(2)
		// let val = Math.round((val1 / val2) * 100);
		return val;
	};
	const getParticipant = async (id) => {
		return await Participant(id).call().then((res) => {
			var part = res;
			return JSON.stringify(part);

		})
	}
	// getAllocationData2().then((val) => console.log(val));
	// getAllocationData("12").then((val) => console.log(val));

	// getProgressDataFromSmart("1").then((res) =>
	// 	console.log(res.leftTokensInPool)
	// );
	let [address] = useSelector((state) => state.globalReducer.accounts);
	return (
		<>
			{featuredPools &&
				featuredPools.map((data, index) => {
					return (
						<div
							onClick={() => featuredPoolsHandler(data._id)}
							className="CardFeatured" style={{borderRadius:'2px',background:'rgba(20,30,50,0.80)'}}
						>
							<div className="CardFeatured-wrapper">
								<div className="CardUpcoming-header">
									<img src={data.projectLogo} alt="Buisness Icon" />
									<a
										className={`btn-status-card btn-${findUpcoming(data.startTimeOfPool) ? "Upcoming" : "Live"
											}`}
									>
										{findUpcoming(data.startTimeOfPool) ? "Upcoming" : <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} ><div style={{ width: "6px", height: "6px", background: "#FFFFFF", marginRight: "10px", borderRadius: "6px" }}></div> Live</div>}
									</a>
								</div>
								<h4>{data.poolName}</h4>
								<h5>
									1 {data.mainCoinSymbol} = {data.swapRatio} {data.tokenSymbol}
								</h5>
								<div className="cardUpcoming-info-wrapper">
									<div className="UpcomingCard-entry">
										<p className="UpcomingCard-key">Total Raise</p>
										<p className="UpcomingCard-value-main">
											{data.totalRaise} {data.mainCoinSymbol}
										</p>
									</div>

									<div className="progress-bar-FeaturedCard">
										<p className="progress-bar-header">Progress</p>
										{/* <div className="progress-value"></div>
										 */}
										<div className="progress-bar">
											<div className="base-progress">
												{([address][0] !== undefined) ? <p
													style={{
														width: `${calcPercentage(
															data.totalLeft,
															data.amountofTokenInPool
														)}%`,
													}}
												></p> : <p style={{ width: '0%' }} ></p>}
											</div>
										</div>
										<div className="progress-bar-FeaturedCard-info">
											<div>
												{([address][0] !== undefined) ? <p>
													{Math.round((data.totalLeft / data.amountofTokenInPool) * 100)}%
													{/* {calcPercentage(data.totalLeft, data.amountofTokenInPool)}% */}
												</p> : <p>-</p>}
												{/* <p className="entry-2">(Min. 51%)</p> */}
											</div>

											<p>
												{data.totalLeft}/{data.amountofTokenInPool}
											</p>
										</div>
									</div>
									<div className="UpcomingCard-entry">
										<p className="UpcomingCard-key">Access</p>
										<p className="UpcomingCard-value">{data.accessType}</p>
									</div>
									<div className="UpcomingCard-entry">
										<p className="UpcomingCard-key">Participants:</p>
										<p className="UpcomingCard-value">{data.participant}</p>
									</div>
									<div className="UpcomingCard-entry">
										<p className="UpcomingCard-key">
											Max {data.mainCoinSymbol}:
										</p>
										<p className="UpcomingCard-value">{data.maxAllocation}</p>
									</div>
								</div>
							</div>
						</div>
					);
				})}
		</>
	);
};

export default CardFeatured;
