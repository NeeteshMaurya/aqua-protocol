import { DateTime } from "luxon";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Polytrade from "../../assets/images/iconApps/polytrade.svg";
import { getSinglePoolsData } from "../../reduxStore/Actions/actionCreator";
import { findUpcoming, getTimeLeft } from "../../services/utlis";
const CardUpcoming = (props) => {
	const history = useHistory();
	const dispatch = useDispatch();

	const featuredPoolsHandler = (id) => {
		dispatch(getSinglePoolsData(id));
		history.push(`/pool/${id}`);
	};

	const calcDay = (data) => {
		let days = findUpcoming(data);
		if (!days) {
			return "Live";
		} else return `in ${getTimeLeft(data)}`;
	};

	const { upcomingPools } = props;
	return (
		<>
			{upcomingPools &&
				upcomingPools.map((data) => {
					return (
						<div
							onClick={() => {
								featuredPoolsHandler(data._id);
							}}
							className="CardUpcoming"
						>
							<div className="CardUpcoming-wrapper">
								<div className="CardUpcoming-header">
									<img src={data.projectLogo} alt="Buisness Icon" />
									<a className="btn-status-card btn-Upcoming">
										{calcDay(data.startTimeOfPool)}
									</a>
								</div>
								<h4>{data.poolName}</h4>
								<div className="cardUpcoming-info-wrapper">
									<div className="UpcomingCard-entry">
										<p className="UpcomingCard-key">Total Raise</p>
										<p className="UpcomingCard-value-main">
											{data.totalRaise} {data.mainCoinSymbol}
										</p>
									</div>
									<div className="UpcomingCard-entry">
										<p className="UpcomingCard-key">Access</p>
										<p className="UpcomingCard-value">{data.accessType}</p>
									</div>
									<div className="UpcomingCard-entry">
										<p className="UpcomingCard-key">Min Allocation:</p>
										<p className="UpcomingCard-value">{data.minAllocation}</p>
									</div>
									<div className="UpcomingCard-entry">
										<p className="UpcomingCard-key">Max Allocation:</p>
										<p className="UpcomingCard-value">{"$" + data.maxAllocation}</p>
									</div>
								</div>
							</div>
						</div>
					);
				})}
		</>
	);
};

export default CardUpcoming;
