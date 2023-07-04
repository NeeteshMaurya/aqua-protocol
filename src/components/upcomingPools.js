import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardUpcoming from "./common/cardUpcoming";
import { DateTime } from "luxon";
import { findUpcoming, getTimeLeft } from "../services/utlis";
import NoUpcomingFound from '../components/common/NoUpcomingFound'
const UpcomingPools = (props) => {
	const [upcomingPools, setupcomingPools] = useState();

	const allPoolsData = useSelector((state) => state.poolsReducer.allPoolsData);
	const filterUpcoming = (data) => {
		const filteringFunction = (ele) => {
			let condition = findUpcoming(ele.startTimeOfPool) && ele.isFeatured;
			return condition;
		};

		let temp = data.filter(filteringFunction);
		temp = temp.map((ele) => {
			return { ...ele, isUpcoming: true };
		});

		setupcomingPools(temp);
	};

	useEffect(() => {
		filterUpcoming(allPoolsData);
	}, [allPoolsData]);
	// console.log("upcoming 2", upcomingPools)
	return (
		<div className="main-upcomingPools">
			<h2 style={{fontFamily:'avenir',color:'white'}}>Upcoming Pools</h2>
			<div className="upcoming-pools-wrapper">
				{upcomingPools && upcomingPools.length > 0 ? <CardUpcoming upcomingPools={upcomingPools} /> : <NoUpcomingFound />}

			</div>
		</div>
	);
};

export default UpcomingPools;
