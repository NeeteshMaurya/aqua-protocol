import React,{ useEffect, useState } from "react";
import BackgroungImg from "../components/common/backgroungImg";
import ChangeNetwork from "../components/modal/changeNetwork";

import Header from "../components/common/header";
const MainAuth = (props) => {
	const [ShowNetworkModal, setShowNetworkModal] = useState(false);
	const toogle = () => {
		setShowNetworkModal(!ShowNetworkModal);
	};
	//const { ethereum } = window;
	useEffect(() => {
		// if (ethereum && ethereum.chainId && ethereum.chainId !== "0x66eed") {
		// 	console.log(ethereum.chainId);
		// 	toogle();
		// 	console.log(ethereum.chainId);
		// }
		checkNetwork()
	}, []);
	const checkNetwork = async()=>{
		if(window.ethereum){
			const currentChainId = await window.ethereum.request({
				method: 'eth_chainId',
			})
			if(currentChainId !== '0x66eed'){
				toogle()
			}
		}
	}
	return (
		<div>
			{/* className="main-wrapper" */}
			<Header />
			<ChangeNetwork showModal={ShowNetworkModal} toogle={toogle} />
			<BackgroungImg />
			<div className="main-page-wrapper">{props.children}
			</div>
		</div>
	);
};

export default MainAuth;
