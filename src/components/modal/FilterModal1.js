import React from "react";

const FilterModal1 = (props) => {
	const { toggle, showModal } = props;

	const handleEntryClick = (ele, ddNumber) => {
		console.log("clicked");
		// toggle();
		props.handleDdSelect(ele, ddNumber);
	};

	return (
		<>
			{showModal && (
				<>
					<div onClick={toggle} className="backdrop"></div>

					<div className="filterModal-wrapper">
						<div className="inner-wrapper">
							<h4 style={{fontFamily:'avenir',color:'white'}}>Status:</h4>
							<p style={{fontFamily:'avenir',color:'white'}} onClick={() => handleEntryClick("Live", 1)}>Live</p>
							<p style={{fontFamily:'avenir',color:'white'}} onClick={() => handleEntryClick("Upcoming", 1)}>Upcoming</p>
							<p style={{fontFamily:'avenir',color:'white'}} onClick={() => handleEntryClick("Filled", 1)}>Filled</p>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default FilterModal1;
