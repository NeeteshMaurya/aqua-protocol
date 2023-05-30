import React, { useEffect, useState } from "react";
import {
	findUpcoming,
	getFullTimeLeft,
	getProgress,
} from "../../services/utlis";

const SwapCard = (props) => {
	const [totalLeft, settotalLeft] = useState();
	const { data } = props;
	const calcTotalLeft = (poolId, toalTokensInPool) => {
		if (typeof window.ethereum !== 'undefined') {
			getProgress(poolId, toalTokensInPool).then((val) => {
				settotalLeft(val);
			});
		} else {
			settotalLeft('')
		}

	};
	setInterval(() => { calcTotalLeft(data.poolId, data.amountofTokenInPool) }, 3000)
	useEffect(() => {
		calcTotalLeft(data.poolId, data.amountofTokenInPool);
	}, []);
	const calcPercentage = (val1, val2) => {
		let val = ((val1 / val2) * 100).toFixed(2)
		// let val = Math.round((val1 / val2) * 100);
		return val;
	};
	return (
		<div className="swapcard-wrapper">
			<div className="wrapper-inner">
				<div className="info-1">
					<p className="psize16Bold title">Swap Amount</p>
					<p className="value">
						1 {data.mainCoinSymbol} = {data.swapRatio} {data.tokenSymbol}
					</p>
				</div>
				<div className="info-2">
					<h2 className="h2-32-42Bold">
						{data.amountofTokenInPool} {data.tokenSymbol}
					</h2>
					<p className="psize14Normal value">
						{data.totalRaise} {data.mainCoinSymbol}
					</p>
				</div>
				<p className="psize16Bold title-closes-in">
					{!findUpcoming(data.startTimeOfPool) ? "Closes in" : "Opens in"}
				</p>
				<h2 className="h2-32-42Bold title-hours">
					{findUpcoming(data.startTimeOfPool)
						? getFullTimeLeft(data.startTimeOfPool, "upcoming")
						: getFullTimeLeft(data.finishTimeOfPool, "featured")}
				</h2>
				<p className="psize16Bold title swap-progress">Swap Progress</p>
				<div className="progress-bar">
					<div className="base-progress">
						<p
							style={{
								width: `${calcPercentage(
									totalLeft,
									data.amountofTokenInPool
								)}%`,
							}}
						></p>
					</div>
				</div>
				<div className="info-footer">
					<p className="psize14Normal">
						{calcPercentage(totalLeft, data.amountofTokenInPool)}%
					</p>

					<p className="psize14Normal">
						{totalLeft}/{data.amountofTokenInPool}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SwapCard;
