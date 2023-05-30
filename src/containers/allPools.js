import React, { useEffect, useState } from "react";
import AllPoolsCard from "../components/AllPoolsCard";
import DropDown from "../components/common/DropDown";
import Search from "../assets/images/mainIcons/allPools/Search.svg";
import Footer from "../components/footer";
import { getAllPoolsData } from "../reduxStore/Actions/actionCreator";
import Subscribe from "../components/subscribe";
import { useDispatch, useSelector } from "react-redux";
import NoResultFound from "../components/common/NoResultFound";
import { findUpcoming, getProgress } from "../services/utlis";
import styled from "styled-components";
import mobileSearchImg from "../assets/images/mainIcons/allPools/mobileSearch.svg"
import { OnBoardingButton } from "../components/common/metaMaskOnboard";

const AllPools = () => {
	const [allPoolsState, setallPoolsState] = useState();
	const [status, setStatus] = useState("All")
	const [access, setAccess] = useState("Both")

	const [inputValue, setinputValue] = useState("");
	const dispatch = useDispatch();
	useEffect(() => {
		const filteredList = allPoolsData.filter((element) => {
			if (status === "All") return true
			return element.status === status;
		}).filter(element => {
			if (access === "Both") return true
			return element.accessType === access;
		});
		setallPoolsState(filteredList)
	}, [access, status])

	const handleDropDownValue = (val, dd) => {
		if (dd === 1) {
			setStatus(val)
		}
		if (dd === 2) {
			setAccess(val)
		}
		// if (val === "All" || val === "Both") {
		// 	setallPoolsState(allPoolsData);
		// } else {
		// 	const filtering = (ele) => {
		// 		let retValue = dd === 1 ? ele.status === val : ele.accessType === val;
		// 		return retValue;
		// 	};
		// 	const filtered = allPoolsState.filter(filtering);
		// 	setallPoolsState(filtered);
		// }
	};

	async function addTotalLeft(data) {
		let temp = [...data];

		temp.forEach((ele, index) => {
			if (typeof window.ethereum !== 'undefined') {
				getProgress(ele.poolId, ele.amountofTokenInPool).then((val) => {
					temp[index].totalLeft = val;
				});
			} else {
				console.log("please install metamask")
			}

		});
		setTimeout(
			() => {
				setallPoolsState(temp);
			},
			100,
			temp
		);
	}

	const allPoolsData = useSelector((state) => state.poolsReducer.allPoolsData);

	useEffect(() => {
		dispatch(getAllPoolsData());
	}, []);

	useEffect(() => {
		if (allPoolsData) {
			let temp = [...allPoolsData];
			temp.forEach((ele, index) => {
				temp[index].status = findUpcoming(ele.startTimeOfPool)
					? "Upcoming"
					: "Live";
			});

			setallPoolsState(temp);

			addTotalLeft(temp);
		}
	}, [allPoolsData]);

	useEffect(() => {
		setallPoolsState(allPoolsData);
	}, [allPoolsData]);

	const filterValues = (data) => {
		const filtered = allPoolsData.filter((ele) => {
			return ele.poolName.toLowerCase().trim().includes(data.toLowerCase());
		});
		setallPoolsState(filtered);
	};

	const handleChange = (e) => {
		setinputValue(e.target.value);

		filterValues(e.target.value);
	};
	const [mobileSearch, setmobileSearch] = useState(false)
	const mobileSearchhandler = () => {
		setmobileSearch(true)
	}
	const closeMobileSearchHandler = () => {
		setmobileSearch(false)
	}
	const handleNavigation = (e) => {
		const window = e.currentTarget;
		setX(window.innerWidth);
	};
	const [X, setX] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", (e) => handleNavigation(e));

		return () => { // return a cleanup function to unregister our function since its gonna run multiple times
			window.removeEventListener("resize", (e) => handleNavigation(e));
		};
	}, [X]);
	return (
		<>
			<div className="allPools-wrapper">
				<div style={{ display: "none" }}>
					<OnBoardingButton />
				</div>

				<h2 className="heading30">All Pools</h2>
				<div className="allPools-search-status">
					<div className="input-search-wrapper">
						<img src={Search}></img>

						<input
							onChange={handleChange}
							placeholder={X < 769 ? "Search" : "Search by Pool ID, Token name, etc"}
							value={inputValue}
						/>
					</div>
					<SearchButton onClick={mobileSearchhandler} >
						<img onClick={mobileSearchhandler} src={Search}></img>
					</SearchButton>

					<div className="status-access-wrapper">
						{!mobileSearch ? <DropDown handleDdSelect={handleDropDownValue} /> : null}
					</div>
				</div>
				{mobileSearch ? <MobileSearchWrapper>
					<SearchImage><img alt="" src={mobileSearchImg} /> </SearchImage>

					<input className="mobile-search-input"
						onChange={handleChange}
						placeholder="Search by Pool ID, Token name, etc"
						value={inputValue}
					/>
					<CloseSearchIcon><span onClick={closeMobileSearchHandler} >x</span></CloseSearchIcon>
				</MobileSearchWrapper> : null}
				{allPoolsState && allPoolsState.length > 0 ?
					<div className="all-pools-table-wrapper">
						<div className="border-title-wrapper-head">
							<div className="table-titles-wrapper">
								<p>Pool Name</p>
								<p>Ratio</p>
								<p>Status</p>
								<p>Progress</p>
								<p>Access</p>
							</div>
						</div>

						<div className="table-body-wrapper">
							{allPoolsState && allPoolsState.length > 0 ? (
								<AllPoolsCard allPoolsState={allPoolsState} />
							) : (
								null
							)}
						</div>
					</div> : <NoResultFound />}
			</div>

			<Subscribe />
			<Footer />
		</>
	);
};

export default AllPools;

const SearchButton = styled.div`
z-index: 50;
width: 48px;
display: flex;
 height: 48px;
 border: 1px solid rgba(255, 255, 255, 0.1);
 align-items: center;
 justify-content: center;
 border-radius: 42px;
 @media (min-width:515px){
    display:none
}
`
const MobileSearchWrapper = styled.div`
background: #0f1c37;
z-index: 60;
width: 91.94%;
display: flex;
height: 50px;
border: 1px solid rgba(255, 255, 255, 0.1);
align-items: center;
justify-content: flex-start;
border-radius: 42px;
margin-top: -48px;
margin-left: auto;
margin-right: auto;
@media (min-width:515px){
    display:none
}
`
const SearchImage = styled.div`
width: 24px;
opacity: 1;
          margin-left: 18px;
          padding-top: 12px;
          padding-bottom: 12px;
`
const CloseSearchIcon = styled.div`
display: flex;
width: 15px;
`