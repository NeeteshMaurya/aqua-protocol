import React from "react";

const TableInfo2 = (props) => {
	const { data } = props;
	const trimAdd = (add) => {
		let mobileAdd = add.slice(0, 5) + "..." + add.slice(-5);
		return mobileAdd;
	};
	return (
		<div className="table tab-info-1" style={{borderRadius:'4px'}}>
			<div className="table-title">
				<p style={{fontFamily:'avenir',color:'white'}}>Token Information</p>
			</div>
			<div className="table-body">
				<div className="body-info-wrapper">
					<p style={{fontFamily:'avenir',color:'white'}}>Name & Symbol</p>
					<p style={{fontFamily:'avenir',color:'white'}}>
						{data.tokenName},{" " + data.tokenSymbol}
					</p>
				</div>
				<div className="body-info-wrapper">
					<p style={{fontFamily:'avenir',color:'white'}}>Decimals</p>
					<p style={{fontFamily:'avenir',color:'white'}}>{data.decimal}</p>
				</div>
				<div className="body-info-wrapper">
					<p style={{fontFamily:'avenir',color:'white'}}>Address</p>
					<p style={{fontFamily:'avenir',color:'white'}} className="address-web">{data.tokenAddress.slice(0, 10) + "..." + data.tokenAddress.slice(-10)}</p>
					<p style={{fontFamily:'avenir',color:'white'}} className="address-mobile">{trimAdd(data.tokenAddress)}</p>
				</div>

				<div className="body-info-wrapper">
					<p style={{fontFamily:'avenir',color:'white'}}>Total Supply</p>
					<p style={{fontFamily:'avenir',color:'white'}}>{data.totalSupply.toLocaleString()}</p>
				</div>
			</div>
		</div>
	);
};

export default TableInfo2;
