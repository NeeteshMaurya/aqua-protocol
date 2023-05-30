//will contain routes
import React from "react";
import "../assets/SaasStyle/index.scss";
import MainAuth from "./mainAuth";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "../containers/homePage";
import AllPools from "../containers/allPools";
import PoolDetails from "../containers/PoolDetails";
import ScrollToTop from "../components/scrollToTop";
import "react-toastify/dist/ReactToastify.css";
const Routes = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Switch>
				<MainAuth>
					<Route exact path="/" component={HomePage} />
					<Route path="/allPools" component={AllPools} />
					<Route path="/pool/:Id" component={PoolDetails} />
					<ToastContainer />
				</MainAuth>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
