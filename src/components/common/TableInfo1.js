import { DateTime } from "luxon";
import moment from "moment";
import React from "react";

const TableInfo1 = (props) => {
	const { data } = props;

	return (
		<div className="table tab-info-1" style={{borderRadius:'4px'}}>
			<div className="table-title">
				<p style={{fontFamily:'avenir',color:'white'}}>Pool Information</p>
			</div>
			<div className="table-body">
				<div className="body-info-wrapper">
					<p style={{fontFamily:'avenir',color:'white'}}>Token Distribution</p>
					<p style={{fontFamily:'avenir',color:'white'}}>
						{data.lockedUntillTime ?
							moment(data.lockedUntillTime).format('LLL') : moment(data.finishTimeOfPool).format('LLL')
						}
						{/* {data.lockedUntillTime
							? DateTime.fromISO(data.lockedUntillTime, { zone: 'America/Chicago' }).toUTC().toLocaleString()
							: DateTime.fromISO(data.finishTimeOfPool, { zone: 'America/Chicago' }).toUTC().toLocaleString()} */}
					</p>
				</div>
				<div className="body-info-wrapper">
					<p style={{fontFamily:'avenir',color:'white'}}>Min. Allocation</p>
					<p style={{fontFamily:'avenir',color:'white'}}>{data.minAllocation === 0 ? "No Minimum" : data.minAllocation + " " + data.tokenSymbol}</p>
				</div>
				<div className="body-info-wrapper">
					<p style={{fontFamily:'avenir',color:'white'}}>Max. Allocation</p>
					<p style={{fontFamily:'avenir',color:'white'}}>{data.maxAllocation + " " + data.tokenSymbol}</p>
				</div>

				<div className="body-info-wrapper">
					<p style={{fontFamily:'avenir',color:'white'}}>Min Swap Level</p>
					<p style={{fontFamily:'avenir',color:'white'}}>{data.swapRatio + " " + data.tokenSymbol}</p>
				</div>
			</div>
		</div>
	);
};

export default TableInfo1;
