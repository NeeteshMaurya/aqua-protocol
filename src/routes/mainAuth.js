import React from "react";
import BackgroungImg from "../components/common/backgroungImg";

import Header from "../components/common/header";
const MainAuth = (props) => {
	// console.log(props)
	return (
		<div className="main-wrapper">
			<Header />
			<BackgroungImg />
			<div className="main-page-wrapper">{props.children}
			</div>
		</div>
	);
};

export default MainAuth;
