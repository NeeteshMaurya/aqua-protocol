import React, { useEffect, useRef, useState } from "react";
import Down from "../../assets/images/mainIcons/allPools/Down.svg";
import Up from "../../assets/images/mainIcons/allPools/Up.svg";
import { useSelector } from "react-redux";
import { CloseOnClickOutside } from "../../services/utlis";
import FilterModal1 from "../modal/FilterModal1";
import FilterModal2 from "../modal/FilterModal2";

const DropDown = (props) => {
	const [showDropDown1, setshowDropDown1] = useState(false);
	const [showDropDown2, setshowDropDown2] = useState(false);
	const [showDropDown0, setshowDropDown0] = useState(false);
	const [DD1title, setDD1Title] = useState("Status");
	const [DD2title, setDD2Title] = useState("Access");
	const [DD0title, setDD0Title] = useState("All Pools")
	const [img1Src, setimg1Src] = useState(Down);
	const [img2Src, setimg2Src] = useState(Down);
	const [img0Src, setimg0Src] = useState(Down);
	const [showClearFilters, setshowClearFilters] = useState(false);
	const refDd1 = useRef();
	const refDd2 = useRef();
	const refDd0 = useRef();
	const ref = useRef()
	// let { dropDownEntry } = props;

	const ddClickHandler = (ele, ddNumber) => {
		props.handleDdSelect(ele, ddNumber);
		if (ddNumber === 1) {
			setshowDropDown1(!showDropDown1)
			setshowDropDown2(showDropDown2)
			setshowDropDown0(showDropDown0)
			setDD1Title(ele)
		}
		if (ddNumber === 2) {
			setshowDropDown1(showDropDown1)
			setshowDropDown2(!showDropDown2)
			setshowDropDown0(showDropDown0)
			setDD2Title(ele)
		}
		if (ddNumber === 0) {
			setshowDropDown1(showDropDown1)
			setshowDropDown2(showDropDown2)
			setshowDropDown0(!showDropDown0)
			setDD0Title(ele)
		}
		// ddNumber === 1
		// 	? setshowDropDown1(!showDropDown1)
		// 	: setshowDropDown2(!showDropDown2);

		// ddNumber === 1 ? setDD1Title(ele) : setDD2Title(ele);
	};
	useEffect(() => {
		setimg1Src(showDropDown1 ? Up : Down);
		setimg2Src(showDropDown2 ? Up : Down);
		setimg0Src(showDropDown0 ? Up : Down)
	}, [showDropDown1, showDropDown2, showDropDown0]);

	useEffect(() => {
		if (DD2title !== "Access" || DD1title !== "Status" || DD0title !== "All Pools") {
			setshowClearFilters(true);
		} else setshowClearFilters(false);
	}, [DD1title, DD2title, DD0title]);
	useEffect(() => {
		const checkIfClickedOutside = e => {
			// If the menu is open and the clicked target is not within the menu,
			// then close the menu
			if (showDropDown0 && ref.current && !ref.current.contains(e.target)) {
				setshowDropDown0(false)
			}
			if (showDropDown1 && refDd1.current && !refDd1.current.contains(e.target)) {
				setshowDropDown1(false)
			}
			if (showDropDown2 && refDd2.current && !refDd2.current.contains(e.target)) {
				setshowDropDown2(false)
			}
		}

		document.addEventListener("mousedown", checkIfClickedOutside)

		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", checkIfClickedOutside)
		}
	}, [showDropDown0, showDropDown1, showDropDown2])
	let [address] = useSelector((state) => state.globalReducer.accounts);
	return (
		<>
			<div className="dropDown-main-wrapper">
				{/* {showClearFilters && <a className="btn btn-pools">X</a>} */}
				{/* ---------------------------------------------------------------------- */}
				{[address][0] !== undefined ?
					<div ref={ref} className="dropDown-wrapper-0">
						<div
							onClick={() => setshowDropDown0(!showDropDown0)}
							className="title-wrapper"
						>
							<p>{DD0title}</p>
							<img src={img0Src} alt="down-arrow" />
						</div>

						{showDropDown0 && (
							<div className={"dropDown-show-1"}>
								<div className="dd-entry-wrapper">
									<p
										onClick={() => ddClickHandler("Joined", 0)}
										className="dd-entry"
									>
										Joined
									</p>
								</div>
								<div className="dd-entry-wrapper">
									<p
										onClick={() => ddClickHandler("Top Pools", 0)}
										className="dd-entry"
									>
										Top Pools
									</p>
								</div>
							</div>
						)}
					</div> : null
				}

				{/* ---------------------------------------------------------------------- */}
				<div ref={refDd1} className="dropDown-wrapper-1">
					<div
						onClick={() => setshowDropDown1(!showDropDown1)}
						className="title-wrapper"
					>
						<p>{DD1title}</p>
						<img src={img1Src} alt="down-arrow" />
					</div>

					{showDropDown1 && (
						<div className={"dropDown-show-1"}>
							<div className="dd-entry-wrapper">
								<p
									onClick={() => ddClickHandler("All", 1)}
									className="dd-entry"
								>
									All
								</p>
							</div>
							<div className="dd-entry-wrapper">
								<p
									onClick={() => ddClickHandler("Live", 1)}
									className="dd-entry"
								>
									Live
								</p>
							</div>
							<div className="dd-entry-wrapper">
								<p
									onClick={() => ddClickHandler("Upcoming", 1)}
									className="dd-entry"
								>
									Upcoming
								</p>
							</div>
							<div className="dd-entry-wrapper">
								<p
									onClick={() => ddClickHandler("Filled", 1)}
									className="dd-entry"
								>
									Filled
								</p>
							</div>
						</div>
					)}
					{showDropDown1 && (<div className="filterModal-wrapper">
						<div className="inner-wrapper">
							<h4 style={{ marginLeft: "18px" }}>Status:</h4>
							<p onClick={() => ddClickHandler("All", 1)}>All</p>
							<p onClick={() => ddClickHandler("Live", 1)}>Live</p>
							<p onClick={() => ddClickHandler("Upcoming", 1)}>Upcoming</p>
							<p onClick={() => ddClickHandler("Filled", 1)}>Filled</p>
						</div>
					</div>)}
				</div>
				<div ref={refDd2} className="dropDown-wrapper-2">
					<div
						onClick={() => setshowDropDown2(!showDropDown2)}
						className="title-wrapper"
					>
						<p>{DD2title}</p>
						<img src={img2Src} alt="down-arrow" />
					</div>

					{showDropDown2 && (
						<div className={"dropDown-show-2"}>
							<div className="dd-entry-wrapper">
								<p
									onClick={() => ddClickHandler("Both", 2)}
									className="dd-entry"
								>
									Both
								</p>
							</div>
							<div className="dd-entry-wrapper">
								<p
									onClick={() => ddClickHandler("Private", 2)}
									className="dd-entry"
								>
									Private
								</p>
							</div>
							<div className="dd-entry-wrapper">
								<p
									onClick={() => ddClickHandler("Public", 2)}
									className="dd-entry"
								>
									Public
								</p>
							</div>
						</div>
					)}
					{showDropDown2 && (<div className="filterModal-wrapper wrapper-2">
						<div className="inner-wrapper">
							<h4 style={{ marginLeft: "18px" }} >Access:</h4>
							<p onClick={() => ddClickHandler("Private", 2)}>Private</p>
							<p onClick={() => ddClickHandler("Public", 2)}>Public</p>
						</div>
					</div>)}
				</div>
			</div>
			<div>

			</div>
			{/* <FilterModal1
				toggle={() => setshowDropDown1(!showDropDown1)}
				showModal={showDropDown1}
				handleDdSelect={ddClickHandler}
				DD1title={DD1title}
			/> */}
			{/* <FilterModal2
				toggle={() => setshowDropDown1(!showDropDown2)}
				showModal={showDropDown2}
				handleDdSelect={ddClickHandler}
			/> */}
		</>
	);
};

export default DropDown;
