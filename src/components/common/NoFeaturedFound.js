import React from 'react'

const NoFeaturedFound = () => {
    return (
        <div style={{ border: "1px solid #2b3750", boxSizing: "border-box", borderRadius: '32px' }} className="No-result-wrapper">
            <h2 style={{ fontSize: "40px", lineHeight: "50px" ,fontFamily:'avenir',color:'white'}} >No Featured Pools</h2>
            {/* <p>
				We couldn’t find what you’re looking for, check your spelling or try
				another search query
			</p> */}
        </div>
    )
}

export default NoFeaturedFound
