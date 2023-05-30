import React from "react";

const NoUpcomingFound = () => {
    return (
        <div style={{ border: "1px solid rgba(255, 255, 255, 0.1", boxSizing: "border-box", borderRadius: '32px' }} className="No-result-wrapper">
            <h2 style={{ marginTop: '0px' }} >No Upcoming Pools</h2>
            {/* <p>
				We couldn’t find what you’re looking for, check your spelling or try
				another search query
			</p> */}
        </div>
    );
};

export default NoUpcomingFound;