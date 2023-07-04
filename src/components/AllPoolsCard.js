import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Phuture from "../assets/images/iconApps/Phuture.svg";
import { getSinglePoolsData } from "../reduxStore/Actions/actionCreator";
import { findUpcoming } from "../services/utlis";
const AllPoolsCard = (props) => {
	const { allPoolsState } = props;
	// const [allPoolsState, setAllPoolsState] = useState({})

	const dispatch = useDispatch();

	const history = useHistory();
	const featuredPoolsHandler = (poolId) => {
		dispatch(getSinglePoolsData(poolId));
		history.push(`/pool/${poolId}`);
	};

	const calcPercentage = (val1, val2) => {
		let val = Math.round((val1 / val2) * 100);
		if (val === "NaN") {
			return 0
		} else {
			return val;
		}

	};
	useEffect(() => {
	}, [])
	return (
		<>
			{allPoolsState &&
				allPoolsState.map((data) => {
					return (
						<div
							onClick={() => featuredPoolsHandler(data._id)}
							className="border-title-wrapper"
						>
							<div className="allPoolsCard-wrapper">
								<div className="poolname-Wrapper">
									<img src={data.projectLogo} alt="App icon"></img>
									<h4 style={{fontFamily:'avenir',color:'white'}}>{data.poolName}</h4>
								</div>

								<p style={{fontFamily:'avenir',color:'white'}} className="ratioo">
									1 {data.mainCoinSymbol} = {data.swapRatio} {data.tokenSymbol}
								</p> 
								<div className="all-pool-status-wrapper">
									<a style={{borderRadius:'2px',fontFamily:'avenir'}}
										className={`btn-status-card connectwalletbtn all-pool-btn btn btn-${findUpcoming(data.startTimeOfPool) ? "Upcoming" : "Live"
											}`}
									>
										{findUpcoming(data.startTimeOfPool) ? "Upcoming" : <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}
										><div style={{ width: "6px", height: "6px", background: "#FFFFFF", marginRight: "10px", borderRadius: "6px" }}>
											</div> Live</div>}
									</a>
								</div>

								<div className="allpools-progress-wrapper">
									{data.totalLeft ? <p style={{fontFamily:'avenir',color:'white'}}>
										{Math.round((data.totalLeft / data.amountofTokenInPool) * 100)}%
										{/* {calcPercentage(data.totalLeft, data.amountofTokenInPool)}% */}
									</p> : <p style={{fontFamily:'avenir',color:'white'}}>0%</p>}
									<span>
										{data.totalLeft ? <p
											style={{
												width: `${calcPercentage(
													data.totalLeft,
													data.amountofTokenInPool
												)}%`,
												fontFamily:'avenir',color:'white'
											}}
										></p> : <p style={{ width: '0%',fontFamily:'avenir',color:'white' }} ></p>}
									</span>
								</div>
								<p style={{fontFamily:'avenir',color:'white'}} className="Access">{data.accessType}</p>
							</div>
						</div>
					);
				})}
		</>
	);
};

export default AllPoolsCard;
