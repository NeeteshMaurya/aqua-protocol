import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import MetaMaskOnboarding from "@metamask/onboarding";
import { OnBoardingButton } from "./common/metaMaskOnboard";
import { ContractInstance, getPoolDataSmart } from "../interface/web3Instance";
import { getProgress, InvestETHFromSmart } from "../services/utlis";
import { useHistory } from "react-router-dom";

const Introduction = (prop) => {

	const history = useHistory();
	const pathAllPools = () => {
		history.push("/allPools");
	  };
	return (
		<div className="main-introduction">
			<div className="bg bgscreen-2">
			</div>
			<div className="bg bgscreen-3">
			</div>
			<div className="bg bgscreen-4">
			</div>
			<h2>First Social-based Capital Raising Platform</h2>
			<p>
				Where users are incentivized to support and participate in project
				growth
			</p>
			<div
				onClick={pathAllPools} style={{fontSize: "18px",fontWeight: "bold",marginLeft: "30px",padding: "10px",marginRight: "20px"}} 
				className="buttonn connectwalletbtn navbarbtn btn text-white"
				>
					All Pools
				</div>
			{/* <OnBoardingButton /> */}
		</div>
	);
};

export default Introduction;
