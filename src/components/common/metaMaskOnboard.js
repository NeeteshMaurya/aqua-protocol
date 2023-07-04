import MetaMaskOnboarding from "@metamask/onboarding";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { toEther } from "../../interface/web3Instance";
import {
	saveAccounts,
	saveBalance,
	showChangeNWmodal,
} from "../../reduxStore/Actions/actionCreator";
import "../../assets/header.css"
const ONBOARD_TEXT = "Click here to install MetaMask!";
const CONNECT_TEXT = "Connect Wallet";
const CONNECTED_TEXT = "Connected";

export function OnBoardingButton() {
	const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
	const [isDisabled, setDisabled] = React.useState(false);
	const [accounts, setAccounts] = React.useState([]);
	const [balance, setbalance] = React.useState("");
	const onboarding = React.useRef();
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (!onboarding.current) {
			onboarding.current = new MetaMaskOnboarding();
		}
	}, []);

	React.useEffect(() => {
		if (MetaMaskOnboarding.isMetaMaskInstalled() ) {
			
			if (accounts.length > 0) {
				console.log("here")
				setButtonText(CONNECTED_TEXT);
				setDisabled(true);
				onboarding.current.stopOnboarding();
			} else {
				console.log("else")
				function handleNewAccounts(newAccounts) {
					dispatch(saveAccounts(newAccounts));
					setAccounts(newAccounts);
					localStorage.setItem("account", JSON.stringify(newAccounts));
				}
				setButtonText(CONNECT_TEXT);
				setDisabled(false);
				// window.ethereum                       this was causing automatic connection with metamask without clicking on button
				// 	.request({ method: "eth_requestAccounts" })
				// 	.then(handleNewAccounts)
				// 	.catch((err) =>
				// 		toast.error(err.message, {
				// 			position: "top-right",
				// 			autoClose: 5000,
				// 			hideProgressBar: false,
				// 			closeOnClick: true,
				// 			pauseOnHover: true,
				// 			draggable: false,
				// 			progress: undefined,
				// 		})
				// 	);
			}
		}
	}, [accounts]);

	React.useEffect(() => {
		function handleNewAccounts(newAccounts) {
			dispatch(saveAccounts(newAccounts));
			setAccounts(newAccounts);
		}
		function handleDisconnect(err) {
			console.log(err);
		}
		function handleChainChanged(data) {
			console.log(data);
			window.location.reload();
		}
		function handleIntitalChainId(data) {
			if (data !== "0x66EED") {
				//trigger modal display
				dispatch(showChangeNWmodal(true));
			} else {
				dispatch(showChangeNWmodal(false));
			}
		}

		if (MetaMaskOnboarding.isMetaMaskInstalled()) {
			// window.ethereum
			// 	.request({ method: "eth_requestAccounts" })
			// 	.then(handleNewAccounts);
			window.ethereum
				.request({ method: "eth_chainId" })
				.then(handleIntitalChainId);

			window.ethereum.on("accountsChanged", handleNewAccounts);
			window.ethereum.on("chainChanged", handleChainChanged);
			return () => {
				// window.ethereum.off("accountsChanged", handleNewAccounts);
				window.ethereum.on("disconnect", handleDisconnect);
			};
		}
	}, []);

	useEffect(() => {
		function handleBal(data) {
			let val = toEther(data);
			dispatch(saveBalance(val));
		}
		if (accounts.length > 0) {
			let data = { params: [`${accounts[0]}`, "latest"] };

			window.ethereum
				.request({
					method: "eth_getBalance",
					params: data.params,
				})
				.then(handleBal);
		}
	}, [accounts]);

	const onClick = () => {
		console.log(accounts.length)
		function handleNewAccounts(newAccounts) {
			dispatch(saveAccounts(newAccounts));
			setAccounts(newAccounts);
			localStorage.setItem("account", JSON.stringify(newAccounts));
		}
		if (MetaMaskOnboarding.isMetaMaskInstalled()) {
			window.ethereum
				.request({ method: "eth_requestAccounts" })
				.then(handleNewAccounts)
				.catch((err) =>
					toast.error(err.message, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: false,
						progress: undefined,
					})
				);
		} else {
			onboarding.current.startOnboarding();
		}
	};
	return (<>
		{accounts.length > 0 ? null : <a
		   style={{paddingLeft:'29px',paddingRight:'29px'}}
			className={!isDisabled ? " btn nav-link text-white connectwalletbtn" : "connectwalletbtn btn nav-link text-white disabled" }
			onClick={onClick}
		>
			{buttonText}
		</a>}

	</>);
}
