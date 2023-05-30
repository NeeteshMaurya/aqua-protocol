import { DateTime } from "luxon";
import { useEffect } from "react";
import {
	GetInvestmentData,
	GetMyInvestmentIds,
	getPoolDataSmart,
	InvestETH,
	toWei,
	investment,
	Participant
} from "../interface/web3Instance";
import { useSelector } from "react-redux";


export const CloseOnClickOutside = (nodeRef, toogleHandler) => {
	useEffect(() => {
		let handler = (event) => {
			if (!nodeRef.current.contains(event.target)) {
				toogleHandler(false);
			}
			document.addEventListener("mousedown", handler);
		};
		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});
};

export const getTimeLeft = (dateToCompare) => {
	const date1 = DateTime.now();
	const date2 = DateTime.fromISO(dateToCompare);
	const diff = date2.diff(date1, ["days", "hours", "minutes"]).toObject();
	let { days, hours, minutes } = diff;
	minutes = Math.ceil(minutes);

	if (days > 1) return `${days} days`;
	else if (hours > 1) return `${hours} hours`;
	else if (minutes > 1) return `${minutes} min`;
};

export const findUpcoming = (dateToCompare) => {

	const date1 = DateTime.now();
	const date2 = DateTime.fromISO(dateToCompare);
	const diff = date2.diff(date1, ["days", "hours", "minutes"]).toObject();

	let { days, hours, minutes } = diff;
	minutes = Math.ceil(minutes);

	if (days > 0 || hours > 0 || minutes > 0) {
		return true;
	} else return false;
};
export const findUpcomingForClaim = (dateToCompare) => {

	const date1 = DateTime.now();
	const date2 = DateTime.fromISO(dateToCompare);
	if (date1.ts > date2.ts) {
		return true;
	} else return false;
};

export const findPublishDate = (dateToCompare) => {
	const date1 = DateTime.now();
	const date2 = DateTime.fromISO(dateToCompare);

	const diff = date2.diff(date1, ["days", "hours", "minutes"]).toObject();

	let { days, hours, minutes } = diff;
	minutes = Math.ceil(minutes);
	if (days > 0 && hours > 0 && minutes > 0) {
		//upcoming case
		if (days > 1) return `Will be published after ${days} days `;
		else if (hours > 1) return `Will be published after ${hours} hours`;
		else if (minutes > 1) return `Will be published after ${minutes} minutes`;
	} else {
		//featured case
		if (Math.abs(days) > 1) return `Published ${Math.abs(days)} days ago`;
		else if (Math.abs(hours) > 1)
			return `Published ${Math.abs(hours)} hours ago`;
		else if (Math.abs(minutes) > 1)
			return `Published ${Math.abs(minutes)} minutes ago`;
	}
};
export const getFullTimeLeft = (dateToCompare, status) => {
	const date1 = DateTime.now();
	const date2 = DateTime.fromISO(dateToCompare);

	const diff = date2.diff(date1, ["days", "hours", "minutes"]).toObject();
	let { days, hours, minutes } = diff;
	minutes = Math.ceil(minutes);
	if (status === "upcoming") {
		if (days >= 1) return `${days}d ${hours}h ${minutes}m`;
		else if (hours > 1) return `${hours}h ${minutes}m`;
		else if (minutes > 1) return `${minutes}m`;
	} else {
		//featured case
		if (days >= 1) return `${days}d ${hours}h ${minutes}m `;
		else if (hours > 1) return `${hours}h ${minutes}m`;
		else if (minutes > 1) return `${minutes}m`;
	}
};

export async function getProgressDataFromSmart(poolID) {
	let data = await getPoolDataSmart(poolID).call();
	return data;
}

export async function getProgress(poolID, totalTokens) {
	return await getProgressDataFromSmart(poolID).then((val) => {
		const totalLeftFromSmart = val.leftTokensInPool / Math.pow(10, 18);

		const totalSold = Math.ceil(totalTokens - totalLeftFromSmart);
		// const progress = Math.ceil((totalToBeSold / totalTokens) * 100);

		return totalSold;
	});
}

export async function InvestETHFromSmart(poolID, eth, fromAccount) {
	let wieValue = toWei(eth);

	return await InvestETH(poolID)
		.send({
			from: fromAccount,
			value: wieValue,
		})
		.on("transactionHash", function (hash) {
			console.log(hash);
			//when we click invest
			//1-success
		})
		.on("confirmation", function (confirmationNumber, receipt) {
			console.log(confirmationNumber, receipt);
			//right after metamask is opened
		})
		.on("receipt", function (receipt) {
			// receipt example
			// fired when tx completes
			//2 - when tx is mined
			console.log(receipt);
		})
		.on("error", function (error, receipt) {
			console.log("error", error);
			console.log(receipt);
			//if we reject tx or other tech issues
			//1-fail
		});
}

export async function getAllocationData(poolID) {
	let data = poolID.call();
	// console.log(data);
	return data;
}

export async function GetMyInvestmentIdsFromSmart(poolId, InvestorAddress) {
	let data = investment(poolId, InvestorAddress).call();
	// console.log(data);
	return data;
}
export async function GetInvestmentDatafromSmart(id) {
	let data = GetInvestmentData(id).call();
	// console.log(data);
	return data;
}

export async function getParticipant(id) {
	return await Participant(id).call().then((res) => {
		const data = res;
		return data

	})
}