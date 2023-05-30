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
							<h4>Access:</h4>
							<p onClick={() => handleEntryClick("Private", 2)}>Private</p>
							<p onClick={() => handleEntryClick("Public", 2)}>Public</p>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default FilterModal2;
