import React from "react";

const NoResultFound = () => {
	return (
		<div className="No-result-wrapper-new">
			<div className="no-result-image1"></div>
			<div className="no-result-discription">
				<h2>No results found</h2>
				<p>
					We couldn’t find what you’re looking for, check your spelling or try
					another search query
				</p>
			</div>
			<div className="no-result-image2"></div>

		</div>
	);
};

export default NoResultFound;
