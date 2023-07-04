import React from "react";

const TableInfo3 = (props) => {
	const { data } = props;
	const trimAdd = (add) => {
		let mobileAdd = add.slice(0, 5) + "..." + add.slice(-14);
		return mobileAdd;
	};
	return (
		<div className="table tab-info-1" style={{borderRadius:'4px'}}>
			<div className="table-title">
				<p style={{fontFamily:'avenir',color:'white'}}>Links</p>
			</div>
			<div className="table-body body-links">
				<div className="body-info-wrapper">
					<p style={{fontFamily:'avenir',color:'white'}}>Website</p>
					<a target="_blank" href={data.website}>
						{data.website.split("//").pop()}
					</a>
				</div>
				<div className="body-info-wrapper">
					<p style={{fontFamily:'avenir',color:'white'}}>Whitepaper</p>
					<a target="_blank" href={data.whitePaper}>
						{data.whitePaper.length > 30
							? trimAdd(data.whitePaper.split("//").pop())
							: data.whitePaper.split("//").pop()}
					</a>
				</div>
				<div className="body-info-wrapper">
					<p style={{fontFamily:'avenir',color:'white'}}>Twitter</p>
					<a target="_blank" href={data.twitter}>
						{data.twitter.split("//").pop()}
					</a>
				</div>
			</div>
		</div>
	);
};

export default TableInfo3;
