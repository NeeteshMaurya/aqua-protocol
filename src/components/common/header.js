import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/mainIcons/Avatar.png";
import { outlineIcon } from "../../services/icons";
import copy from "../../assets/images/mainIcons/copy.svg";
import ethIcon from "../../assets/images/mainIcons/ethIcon.png";
import MetaMaskOnboarding from "@metamask/onboarding";
import { OnBoardingButton } from "./metaMaskOnboard";
import { toEther } from "../../interface/web3Instance";
import { saveAccounts } from "../../reduxStore/Actions/actionCreator";

const Header = () => {
	const history = useHistory()
	const handleNavigation = (e) => {
		const window = e.currentTarget;
		setY(window.scrollY);
	};
	const [y, setY] = useState(window.scrollY);

	const[wrongnetwork,setwrongnetwork] = useState(true)

	useEffect(() => {
		window.addEventListener("scroll", (e) => handleNavigation(e));

		return () => { // return a cleanup function to unregister our function since its gonna run multiple times
			window.removeEventListener("scroll", (e) => handleNavigation(e));
		};
	}, [y]);
	const [isCopied, setisCopied] = useState(false);
	// const [add, setAdd] = useState()
	// const [bal, setBal] = useState()
	const dispatch = useDispatch();
	const address = useSelector((state) => {
		return state.globalReducer.accounts[0];
	});

	const balance = useSelector((state) => {
		return state.globalReducer.balance;
	});


	let transformedAddress = address
		? address.slice(0, 3).toLowerCase() +
		"..." +
		address.slice(-3).toLowerCase()
		: "NA";

	const copyClickHandler = () => {
		if (address) navigator.clipboard.writeText(address);
		setisCopied(true);
		setTimeout(() => {
			setisCopied(false);
		}, 1000);
	};
    const {ethereum} = window
	useEffect(() => {
		if (localStorage.getItem("account")) {
			let account = localStorage.getItem("account");
			console.log(account)
			dispatch(saveAccounts(JSON.parse(account)));
		}
	}, []);
	useEffect(() => {
		if(ethereum && ethereum.chainId && ethereum.chainId === "0x66eed"){
			setwrongnetwork(false)
		}
	})
	const extensionLink = () => {
		window.open("https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/", "_blank");
	}
	const [allpools, setAllpools] = useState(false)
	const pathExplore = () => {
		history.push("/")
		setAllpools(false)
	}
	const pathAllPools = () => {
		history.push("/allPools")
		setAllpools(true)
	}
	let [add] = useSelector((state) => state.globalReducer.accounts);
	//let bal = useSelector((state) => state.globalReducer.balance);
	return (
		<header>
			<div className="bg bgscreen-1" >
			</div>
			<div className="header-wrapper">
				<div className="icon-and-title">
					{/* <Link to="/"> */}
					<img onClick={pathExplore} className="logo-main" src={logo} alt="Logo"></img>
					{/* </Link> */}
					{/* <Link to="/"> */}
					<p onClick={pathExplore} >AQUA PROTOCOL</p>
					{/* </Link> */}
				</div>

				{allpools ? <div className="all-pool-active">All Pools</div> : <div onClick={pathAllPools} className="btn-pools header-btn">
					All Pools
				</div>}


				{([add][0] !== undefined && balance)? 
					<div className="accountDetails-wrapper">
						{wrongnetwork ? <div style={{border:"2px",borderColor:"white",borderRadius:"5px",color: "red",marginLeft: "50px",fontSize:"20px",fontWeight:"bold"}}>Wrong Network</div> : <div></div>}
						<div className="img-info-wrapper">
							<p>{balance ? balance.slice(0, 5) : "_"} ETH</p>

							<img style={{ marginLeft: "11px" }} src={ethIcon} alt="Etherium Logo"></img>

						</div>
						<div className="img-info-wrapper">
							{isCopied ? <p>Copied!</p> : <p>{transformedAddress}</p>}
							<div className="wallet-icon-wrapper">
								<img onClick={copyClickHandler} src={copy} alt="Copy"></img>
							</div>
						</div>
					</div>
					: <div className="header-btn">
						{wrongnetwork ? <div style={{border:"2px",borderColor:"white",borderRadius:"5px",color: "red",marginLeft: "50px",fontSize:"20px",fontWeight:"bold"}}>Wrong Network</div> : <div></div>}
						<OnBoardingButton />

						{/* <div className="header-wallet">
						{allpools ? <button onClick={extensionLink} className="scroll-active-button" >Connect Wallet</button> :
							null
						}
						{!allpools && y > 450 ? <button onClick={extensionLink} className="scroll-active-button" >Connect Wallet</button> :
							null}
						{!allpools && y < 450 ? <i style={{ cursor: "pointer" }} onClick={extensionLink}
							className="icon-main"
							dangerouslySetInnerHTML={{ __html: outlineIcon }}
						></i> : null} 
					   </div>*/}
					  </div>
					
				}
			</div>
		</header>
	);
};

export default Header;
