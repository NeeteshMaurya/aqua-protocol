import {
	SAVE_ACCOUNTS,
	SAVE_BALANCE,
	GET_ALL_POOLS_DATA,
	SAVE_ALL_POOLS_DATA,
	SAVE_CURRENT_POOL_ID,
	SAVE_SINGLE_POOL_DATA,
	SHOW_CHANGE_NW_MODAL,
} from "./constants";

import apiConstants from "../../api/constants";
import axios from "axios";
const API_SERVER = process.env.REACT_APP_SERVER
// const apiURL = require("../../api/config").API_SERVER;
const apiURL = `https://${process.env.REACT_APP_SERVER}`; //"https://api.solclout.com";

export const saveBalance = (data) => {
	return {
		type: SAVE_BALANCE,
		payload: data,
	};
};

export const saveAccounts = (data) => {
	return {
		type: SAVE_ACCOUNTS,
		payload: data,
	};
};

export const saveAllPoolsData = (data) => {
	return {
		type: SAVE_ALL_POOLS_DATA,
		payload: data,
	};
};

export const saveCurrentPoolId = (data) => {
	return {
		type: SAVE_CURRENT_POOL_ID,
		payload: data,
	};
};
export const saveSinglePoolData = (data) => {
	return {
		type: SAVE_SINGLE_POOL_DATA,
		payload: data,
	};
};

export const showChangeNWmodal = (data) => {
	return {
		type: SHOW_CHANGE_NW_MODAL,
		payload: data,
	};
};

export const getAllPoolsData = () => {
	return (dispatch) => {

		//showLoader
		axios
			.get(apiURL + apiConstants.GET_ALL_POOLS.URL)
			.then((response) => {
				if (response.data.success) {
					dispatch(saveAllPoolsData(response.data.data));
					console.log(response);
				} else {
					console.log(response);
				}
			})
			.catch((err) => console.error(err))
			.finally(() => {});
	};
};

export const getSinglePoolsData = (poolId) => {
	return (dispatch) => {
		dispatch(saveCurrentPoolId(poolId));
		axios
			.get(
				`${apiURL}${apiConstants.GET_SINGLE_POOL_DEATIL.URL}?getSinglePoolDetails=${poolId}`
			)
			.then((response) => {
				if (response.data.success) {
					dispatch(saveSinglePoolData(response.data.data));
				} else {
					console.log(response);
				}
			})
			.catch((err) => console.error(err));
	};
};
