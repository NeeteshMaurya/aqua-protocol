
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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


const Newcardfeatured = (data) => {

    const dispatch = useDispatch();

    const history = useHistory();
    const featuredPoolsHandler = (poolId) => {
        console.log(poolId, "checkink pool id")
        dispatch(getSinglePoolsData(poolId));
        history.push(`/pool/${poolId}`);
    };
    const calcPercentage = (val1, val2) => {
        let val = ((val1 / val2) * 100).toFixed(2)
        // let val = Math.round((val1 / val2) * 100);
        return val;
    };
    return (
        <div
            onClick={() => featuredPoolsHandler(data._id)}
            className="CardFeatured"
        >
            <div className="CardFeatured-wrapper">
                <div className="CardUpcoming-header">
                    <img src={data.projectLogo} alt="Buisness Icon" />
                    <a
                        className={`btn-status-card btn-${findUpcoming(data.startTimeOfPool) ? "Upcoming" : "Live"
                            }`}
                    >
                        {findUpcoming(data.startTimeOfPool) ? "Upcoming" : "Live"}
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
                                <p
                                    style={{
                                        width: `${calcPercentage(
                                            data.totalLeft,
                                            data.amountofTokenInPool
                                        )}%`,
                                    }}
                                ></p>
                            </div>
                        </div>
                        <div className="progress-bar-FeaturedCard-info">
                            <div>
                                <p className="entry-1">
                                    {calcPercentage(
                                        data.totalLeft,
                                        data.amountofTokenInPool
                                    )}
                                    %
                                </p>
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
                        <p className="UpcomingCard-value">-</p>
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
    )
}

export default Newcardfeatured
