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
import "../../assets/header.css"

const Header = () => {
  const history = useHistory();
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    setY(window.scrollY);
  };
  const [y, setY] = useState(window.scrollY);

  const [wrongnetwork, setwrongnetwork] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
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
  const { ethereum } = window;
  useEffect(() => {
    if (localStorage.getItem("account")) {
      let account = localStorage.getItem("account");
      console.log(account);
      dispatch(saveAccounts(JSON.parse(account)));
    }
  }, []);
  useEffect(() => {
    if (ethereum && ethereum.chainId && ethereum.chainId === "0x66eed") {
      setwrongnetwork(false);
    }
  });
  const extensionLink = () => {
    window.open(
      "https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/",
      "_blank"
    );
  };
  const [allpools, setAllpools] = useState(false);
  const pathExplore = () => {
    history.push("/");
    setAllpools(false);
  };
  const pathAllPools = () => {
    history.push("/allPools");
    setAllpools(true);
  };
  let [add] = useSelector((state) => state.globalReducer.accounts);
  //let bal = useSelector((state) => state.globalReducer.balance);
  return (
    <header>
    <nav className="navbar navbar-expand-sm" style={{ width: "100%" }}>
		<div className="container-fluid">
        <a href="https://www.aquaprotocol.com"><img style={{height:'40px',width:'40px'}} src={logo} alt="logo" /></a>
        <a className="navbar-brand text-white" style={{marginLeft:'10px',fontWeight:'bold'}} href="https://www.aquaprotocol.com">AQUA PROTOCOL</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      type="button"
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginLeft: "30px",
                        padding: "10px",
                        marginRight: "20px",
                      }}
                      className="buttonn nav-link btn btn-m text-white"
                      href="https://earn.aquaprotocol.com/farms"
                    >
                      Farms
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      type="button"
                      style={{
                        fontSize: "18px",
                        padding: "10px",
                        fontWeight: "bold",
                        marginLeft: "20px",
                        marginRight: "20px",
                      }}
                      className="buttonn nav-link btn btn-m text-white"
                      href="https://earn.aquaprotocol.com/pools"
                    >
                      Pools
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      type="button"
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginLeft: "30px",
                        padding: "10px",
                        marginRight: "20px",
                      }}
                      className="buttonn nav-link btn btn-m text-white"
                      to="/"
                    >
                      Aquapad
                    </Link>
                  </li>
				  <li className="nav-item">
					{/* {allpools ? (
						<div type="button" style={{fontSize: "18px",fontWeight: "bold",marginLeft: "30px",padding: "10px",marginRight: "20px",}} 
            className="buttonn nav-link btn btn-m text-white">All Pools</div>
					) : ( */}
						<div
						onClick={pathAllPools} style={{fontSize: "18px",fontWeight: "bold",marginLeft: "30px",padding: "10px",marginRight: "20px"}} 
						className="buttonn nav-link btn btn-m text-white"
						>
						All Pools
						</div>
					{/* )} */}
          </li>
        </ul>
      </div>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
          {[add][0] !== undefined && balance ? (
            // className="accountDetails-wrapper"
                  <div className="" style={{marginRight:'25px'}}> 
                    {/* {wrongnetwork ? (
                      <div
                        style={{
                          border: "2px",
                          borderColor: "white",
                          borderRadius: "5px",
                          color: "red",
                          marginLeft: "50px",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Wrong Network
                      </div>
                    ) : (
                      <div></div>
                    )} */}
                    <p className="nav-link text-white border border-primary" 
                    style={{fontWeight:'bold',borderRadius:'24px',padding:'11px'}}>{[add][0].slice(0,7).concat('...')}</p>
                      {/* <div className="nav-link img-info-wrapper">
                        {isCopied ? (
                          <p>Copied!</p>
                        ) : (
                          <p>{transformedAddress}</p>
                        )}
                        <div className="wallet-icon-wrapper">
                          <img
                            onClick={copyClickHandler}
                            src={copy}
                            alt="Copy"
                          ></img>
                        </div>
                      </div> */}
                      </div>  
                  
                  ) : (
                    <div className="nav-link header-btn" style={{marginRight:'25px'}}>
                      {/* {wrongnetwork ? (<div style={{
                            border: "2px",
                            borderColor: "white",
                            borderRadius: "5px",
                            color: "red",
                            marginLeft: "50px",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Wrong Network
                        </div>
                      ) : (
                        <div></div>
                      )} */}
					            <OnBoardingButton />
                    </div>
                  )}
                  </li>
                </ul>
              </div>
            </div>
        </nav>
     </header>
  );
};

export default Header;
