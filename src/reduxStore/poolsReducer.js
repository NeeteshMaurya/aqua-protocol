import {
	SAVE_ALL_POOLS_DATA,
	SAVE_CURRENT_POOL_ID,
	SAVE_SINGLE_POOL_DATA,
} from "./Actions/constants";

const initialState = {
	currentPoolId: "",
	allPoolsData: [],
	singlePoolData: [],
};

const poolsReducer = function (state = initialState, action) {
	switch (action.type) {
		case SAVE_ALL_POOLS_DATA:
			return {
				...state,
				allPoolsData: action.payload,
			};
		case SAVE_CURRENT_POOL_ID:
			return {
				...state,
				currentPoolId: action.payload,
			};
		case SAVE_SINGLE_POOL_DATA:
			return {
				...state,
				singlePoolData: action.payload,
			};

		default:
			return state;
	}
};

export default poolsReducer;
