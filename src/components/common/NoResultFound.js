import React from "react";

const NoResultFound = () => {
	return (
		<div className="No-result-wrapper-new" >
			<div style={{background:'black'}} className="no-result-image1"></div>
			<div className="no-result-discription">
				<h2 style={{fontFamily:'avenir',color:'white'}}>No results found</h2>
				<p style={{fontFamily:'avenir',color:'white'}}>
					We couldn’t find what you’re looking for, check your spelling or try
					another search query
				</p>
			</div>
			<div style={{background:'black'}} className="no-result-image2"></div>

		</div>
	);
};

export default NoResultFound;
