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
    
    <nav className="navbar navbar-expand-md navbg navbar-dark" style={{ width: "100%",borderBottom:'1px solid #2b3750'}}>
		<div className="container-fluid">
        <a href="https://www.aquaprotocol.com"><img className="logo" style={{height:'41px',width:'41px'}} src={logo} alt="logo" /></a>
        
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
              <div className="collapse navbar-collapse justify-content-end headermargin" id="navbarNav" style={{marginLeft:'60px'}}>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                    style={{color:'#939db0'}}
                      type="button" 
                      className="nav-link btn btn-link navbarbtn buttonn"
                      href="https://earn.aquaprotocol.com/farms"
                    >
                      Farms
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                    style={{color:'#939db0'}}
                      type="button"
                      className="nav-link btn btn-link navbarbtn buttonn"
                      href="https://earn.aquaprotocol.com/pools"
                    >
                      Pools
                    </a>
                  </li>
                  <li className="nav-item headerr">
                    <Link
                    style={{color:'white'}}
                      type="button"
                      className="nav-link navbarbtn btn btn-link buttonn"
                      to="/"
                    >
                      Aquapad
                    </Link>
                  </li> 
				  {/* <li className="nav-item">
						<div
						onClick={pathAllPools} style={{fontSize: "18px",fontWeight: "bold",marginLeft: "30px",padding: "10px",marginRight: "20px"}} 
						className="buttonn nav-link btn btn-m text-white"
						>
						All Pools
						</div>
          </li> */}
        </ul>
      </div>
      <div className="collapse navbar-collapse justify-content-end headermargin" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item headermargin2">
          {[add][0] !== undefined && balance ? (
                     <div><div className="nav-link buttonn btn connectwalletbtn text-white"
                     style={{borderRadius:'24px',width:'100%',
                     paddingLeft:'32.5px',paddingRight:'32.5px'}}>{[add][0].slice(0,10).concat('....')}</div></div>    
                    // <p className="nav-link m-auto border border-primary navbarbtn"
                    // style={{fontWeight:'bold',borderRadius:'24px',
                    // padding:'5px',marginRight:'25px'}}>{[add][0].slice(0,7).concat('...')}</p>
                  ) :  
                  <><OnBoardingButton /></>
                  }
                  </li>
                </ul>
              </div>
            </div>
    </nav>
  );
};

export default Header;
