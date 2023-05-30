import React from "react";

const TableInfo2 = (props) => {
	const { data } = props;
	const trimAdd = (add) => {
		let mobileAdd = add.slice(0, 5) + "..." + add.slice(-5);
		return mobileAdd;
	};
	return (
		<div className="table tab-info-1">
			<div className="table-title">
				<p>Token Information</p>
			</div>
			<div className="table-body">
				<div className="body-info-wrapper">
					<p>Name & Symbol</p>
					<p>
						{data.tokenName},{" " + data.tokenSymbol}
					</p>
				</div>
				<div className="body-info-wrapper">
					<p>Decimals</p>
					<p>{data.decimal}</p>
				</div>
				<div className="body-info-wrapper">
					<p>Address</p>
					<p className="address-web">{data.tokenAddress.slice(0, 10) + "..." + data.tokenAddress.slice(-10)}</p>
					<p className="address-mobile">{trimAdd(data.tokenAddress)}</p>
				</div>

				<div className="body-info-wrapper">
					<p>Total Supply</p>
					<p>{data.totalSupply.toLocaleString()}</p>
				</div>
			</div>
		</div>
	);
};

export default TableInfo2;
