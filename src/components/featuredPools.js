import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
	findUpcoming,
	getProgress,
	InvestETHFromSmart,
	getParticipant
} from "../services/utlis";
import CardFeatured from "./common/cardFeatured";
import NofeaturedFound from '../components/common/NoFeaturedFound'


const FeaturedPools = () => {


	const [featuredPools, setfeaturedPools] = useState();

	const history = useHistory();
	const accounts = useSelector((state) => state.globalReducer.accounts);

	async function addTotalLeft(data) {
		let temp = [...data];
		if (typeof window.ethereum !== 'undefined') {
			temp.forEach((ele, index) => {
				getProgress(ele.poolId, ele.amountofTokenInPool).then((val) => {
					temp[index].totalLeft = val;
				});
				getParticipant(ele.poolId).then((val) => {
					temp[index].participant = val
				})

			});
			setTimeout(
				() => {
					setfeaturedPools(temp);
				},
				1000,
				temp
			);
		} else {
			console.log("please install metamsk")
		}

	}

	const filterFeatured = (data) => {
		let temp = [...data];

		function filtering(ele) {
			let condition = ele.isFeatured && !findUpcoming(ele.startTimeOfPool);
			return condition;
		}
		temp = data.filter(filtering);
		setfeaturedPools(temp);
		if (temp) {
			addTotalLeft(temp);
		}
	};

	// useEffect(() => {
	// 	console.log("featuredpolsssss", featuredPools)
	// 	if (typeof window.ethereum !== 'undefined') {
	// 		if (featuredPools) {
	// 			addTotalLeft(featuredPools);
	// 		}
	// 	} else {
	// 		console.log("please install metamsk")
	// 	}

	// }, [featuredPools]);

	const allPoolsData = useSelector((state) => state.poolsReducer.allPoolsData);

	useEffect(() => {
		if (allPoolsData.length > 0) {
			filterFeatured(allPoolsData);
		}
	}, [allPoolsData]);
	// setInterval(() => { allocationData(data.poolId, fromAccount) }, 3000)
	return (
		<div className="main-featuredPools">
			<div className="main-featuredPools-header">
				<h2>Featured Pools</h2>
				<a
					onClick={() => {
						history.push("/allPools");
					}}
					className="btn-pools"
				>
					View All
				</a>
			</div>

			<div className="featured-pools-wrapper">
				{featuredPools && featuredPools.length > 0 ? <CardFeatured featuredPools={featuredPools} /> : <NofeaturedFound />}

			</div>
		</div>
	);
};

export default FeaturedPools;
