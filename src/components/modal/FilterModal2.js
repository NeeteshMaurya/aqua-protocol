import React from "react";

const FilterModal2 = (props) => {
	const { toggle, showModal } = props;

	const handleEntryClick = (ele, ddNumber) => {
		// toggle();
		props.handleDdSelect(ele, ddNumber);
	};
	return (
		<>
			{showModal && (
				<>
					<div onClick={toggle} className="backdrop"></div>
					<div className="filterModal-wrapper wrapper-2">
						<div className="inner-wrapper">
							<h4 style={{fontFamily:'avenir',color:'white'}}>Access:</h4>
							<p style={{fontFamily:'avenir',color:'white'}} onClick={() => handleEntryClick("Private", 2)}>Private</p>
							<p style={{fontFamily:'avenir',color:'white'}} onClick={() => handleEntryClick("Public", 2)}>Public</p>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default FilterModal2;
