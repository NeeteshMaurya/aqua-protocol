import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import FeaturedPools from "../components/featuredPools";
import Footer from "../components/footer";
import Introduction from "../components/introduction";
import ChangeNetwork from "../components/modal/changeNetwork";
import Subscribe from "../components/subscribe";
import UpcomingPools from "../components/upcomingPools";
import { getPoolDataSmart, toEther } from "../interface/web3Instance";
import { getAllPoolsData } from "../reduxStore/Actions/actionCreator";
// import apiConstants from "../api/constants";
// import axios from "axios";

// const apiURL = require("../api/config").API_SERVER;

const HomePage = () => {
	const [ShowNetworkModal, setShowNetworkModal] = useState(false);
	const toogle = () => {
		setShowNetworkModal(!ShowNetworkModal);
	};
	const dispatch = useDispatch();
	const { ethereum } = window;

	useEffect(() => {
		dispatch(getAllPoolsData());
	}, []);

	useEffect(() => {

		if (ethereum && ethereum.chainId && ethereum.chainId !== "0x66eed") {
			console.log(ethereum.chainId);
			toogle();
			console.log(ethereum.chainId);
		}
	}, []);

	return (
		<>
			<Helmet>
				<title>AQUA PROTOCOL</title>
				<meta name="description" content="Aqua Protocol application" />
			</Helmet>

			<Introduction />
			{/* <ChangeNetwork showModal={ShowNetworkModal} toogle={toogle} /> */}
			<UpcomingPools />
			<FeaturedPools />
			<Subscribe />
			<Footer />
		</>
	);
};

export default HomePage;
