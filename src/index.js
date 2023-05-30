import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import globalReducer from "./reduxStore/globalReducer";
import Routes from "./routes";
import poolsReducer from "./reduxStore/poolsReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	globalReducer,
	poolsReducer,
});
composeEnhancers(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById("root")
);
