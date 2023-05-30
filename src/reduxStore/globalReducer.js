import {
	SAVE_ACCOUNTS,
	SAVE_BALANCE,
	SAVE_ALL_POOLS_DATA,
	SHOW_CHANGE_NW_MODAL,
} from "./Actions/constants";

const initialState = {
	accounts: [],
	balance: "",
	showChangeNw: false,
};

const globalReducer = function (state = initialState, action) {
	switch (action.type) {
		case SAVE_BALANCE:
			return {
				...state,
				balance: action.payload,
			};
		case SAVE_ACCOUNTS:
			return {
				...state,
				accounts: action.payload,
			};
		case SHOW_CHANGE_NW_MODAL:
			return {
				...state,
				showChangeNw: action.payload,
			};
		default:
			return state;
	}
};

export default globalReducer;
